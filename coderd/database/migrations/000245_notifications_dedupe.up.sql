-- Add a column to store the hash.
ALTER TABLE IF EXISTS notification_messages
    ADD COLUMN IF NOT EXISTS dedupe_hash TEXT NULL;

COMMENT ON COLUMN notification_messages.dedupe_hash IS 'Auto-generated by insert/update trigger, used to prevent duplicate notifications from being enqueued on the same day';

-- Ensure that multiple notifications with identical hashes cannot be inserted into the table.
CREATE UNIQUE INDEX ON notification_messages (dedupe_hash);

-- Computes a hash from all unique messages fields and the current day; this will help prevent duplicate messages from being sent within the same day.
-- It is possible that a message could be sent at 23:59:59 and again at 00:00:00, but this should be good enough for now.
-- This could have been a unique index, but we cannot immutably create an index on a timestamp with a timezone.
CREATE OR REPLACE FUNCTION compute_notification_message_dedupe_hash() RETURNS TRIGGER AS
$$
BEGIN
    NEW.dedupe_hash := MD5(CONCAT_WS(':',
                                     NEW.notification_template_id,
                                     NEW.user_id,
                                     NEW.method,
                                     NEW.payload::text,
                                     ARRAY_TO_STRING(NEW.targets, ','),
                                     DATE_TRUNC('day', NEW.created_at AT TIME ZONE 'UTC')::text
                           ));
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION compute_notification_message_dedupe_hash IS 'Computes a unique hash which will be used to prevent duplicate messages from being enqueued on the same day';
CREATE TRIGGER update_notification_message_dedupe_hash
    BEFORE INSERT OR UPDATE
    ON notification_messages
    FOR EACH ROW
EXECUTE FUNCTION compute_notification_message_dedupe_hash();