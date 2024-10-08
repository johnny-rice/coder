import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { MockTemplate, mockApiError } from "testHelpers/entities";
import { TemplateSettingsPageView } from "./TemplateSettingsPageView";

const meta: Meta<typeof TemplateSettingsPageView> = {
	title: "pages/TemplateSettingsPage",
	component: TemplateSettingsPageView,
	args: {
		template: MockTemplate,
		accessControlEnabled: true,
		advancedSchedulingEnabled: true,
		onCancel: action("onCancel"),
	},
};

export default meta;
type Story = StoryObj<typeof TemplateSettingsPageView>;

export const Example: Story = {};

export const SaveTemplateSettingsError: Story = {
	args: {
		submitError: mockApiError({
			message: 'Template "test" already exists.',
			validations: [
				{
					field: "name",
					detail: "This value is already in use and should be unique.",
				},
			],
		}),
		initialTouched: {
			allow_user_cancel_workspace_jobs: true,
		},
	},
};

export const NoEntitlements: Story = {
	args: {
		accessControlEnabled: false,
		advancedSchedulingEnabled: false,
	},
};

export const NoEntitlementsExpiredSettings: Story = {
	args: {
		template: {
			...MockTemplate,
			deprecated: true,
			deprecation_message: "This template tastes bad",
			require_active_version: true,
		},
		accessControlEnabled: false,
		advancedSchedulingEnabled: false,
	},
};
