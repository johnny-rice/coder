import type { Group, GroupSource, User } from "api/typesGenerated";
import { MockUsers } from "./users";

function findMockedUserById(id: string): User | undefined {
	const user = MockUsers.find((user) => user.id === id);
	return user;
}

// These values were retrieved from the Coder API. Sensitive information such as
// usernames, names, and emails has been replaced with fake user data to protect
// privacy. This user data comes from the MockUsers to keep consistency.
export const MockGroups: Group[] = [
	{
		id: "7621bbb4-5b04-4957-8419-cf4a683ac59a",
		name: "Everyone",
		display_name: "",
		organization_id: "7621bbb4-5b04-4957-8419-cf4a683ac59a",
		members: [findMockedUserById("5ccd3128-cbbb-4cfb-8139-5a1edbb60c71")],
		total_member_count: 1,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "data-platform",
		organization_display_name: "Data Platform",
	},
	{
		id: "d6f9d037-b9cd-4716-b424-64ef8f81e7f7",
		name: "Contractors",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [
			findMockedUserById("c5b28cf0-f72a-4b45-b3d5-00d3989d4ed5"),
			findMockedUserById("4c8ffd9b-7bc8-47db-9322-f4d5e0b51658"),
		],
		total_member_count: 2,
		avatar_url: "",
		quota_allowance: 10,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "82773b01-c3b3-4747-a956-d824293dd857",
		name: "Empty-other",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [
			findMockedUserById("af657bc3-6949-4b1b-bc2d-d41a40b546a4"),
			findMockedUserById("a73425d1-53a7-43d3-b6ae-cae9ba59b92b"),
		],
		total_member_count: 2,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "4522d478-04b2-4ced-9cf2-8f2ecbe73188",
		name: "DevOps",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [
			findMockedUserById("3f8c0eef-6a45-4759-a4d6-d00bbffb1369"),
			findMockedUserById("740bba7f-356d-4203-8f15-03ddee381998"),
			findMockedUserById("12b03f43-1bb7-4fca-967a-585c97f31682"),
			findMockedUserById("a73425d1-53a7-43d3-b6ae-cae9ba59b92b"),
			findMockedUserById("0bac0dfd-b086-4b6d-b8ba-789e0eca7451"),
		],
		total_member_count: 5,
		avatar_url: "/emojis/1fa84.png",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "d00ea21b-3eec-4f63-a0cd-acb00e3a2116",
		name: "ms-test-group",
		display_name: "display-name",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [findMockedUserById("ef2eebf7-9708-4076-9f71-a34af71f5d24")],
		total_member_count: 1,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "f7200783-62c0-4bfa-ae30-a542fc82dc8d",
		name: "Tinkerers",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [
			findMockedUserById("15890ddb-142c-443d-8fd5-cd8307256ab1"),
			findMockedUserById("ef2eebf7-9708-4076-9f71-a34af71f5d24"),
			findMockedUserById("af657bc3-6949-4b1b-bc2d-d41a40b546a4"),
			findMockedUserById("0bac0dfd-b086-4b6d-b8ba-789e0eca7451"),
		],
		total_member_count: 4,
		avatar_url: "/emojis/1f34c.png",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "e690870a-b24f-48fd-b75b-eee89098d588",
		name: "underscored_group",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [],
		total_member_count: 0,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "fd6ea877-06b6-4c03-b7c0-ea8f0707425b",
		name: "Sales",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [
			findMockedUserById("dd91e5f1-0e10-434e-9305-02129a6e4fdb"),
			findMockedUserById("829a99f8-4c4a-4280-9500-fb21f3afb201"),
			findMockedUserById("740bba7f-356d-4203-8f15-03ddee381998"),
			findMockedUserById("fdc2dab9-dabd-4980-843f-2e93042db566"),
			findMockedUserById("0bac0dfd-b086-4b6d-b8ba-789e0eca7451"),
		],
		total_member_count: 5,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "8b1539c5-6f5c-4630-a715-53b74c444e86",
		name: "eeee",
		display_name: "aaaaaa",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [],
		total_member_count: 0,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "a26c335f-1498-48e2-bd66-c6a5783fa5f2",
		name: "bruno-group",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [findMockedUserById("1c2baba2-40d6-4b9e-a788-fe393c1dbdbb")],
		total_member_count: 1,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "900074db-46ce-4165-9938-3f719348fd36",
		name: "F̷̡̮̩̞̺̹͔͇͖͇͊̓̈́̐̈́̃͋̀͂͂̄͘̚o̵̻̲̤̥͚͙͚̬͉͚̼̦̹̙͈̞̎̃͑̽̂͂̒͋̊̐̊̌̌͝r̶̭̖͊̊̕͘ḃ̵̢̡͍͎̝̲̼͔̩̥͎͕̪͂͜î̶̡͍̖̿̏̈̔̽͘͜d̶̼͔̜̰͛̂̊̆d̴̛̦̰̩̦̬͈͖̪͖̓̈́̊͂͝͠e̷̛̬̻͌̇́̃̌̓͠ń̴̙͖̉͐͌͌̎́͘̕͝",
		display_name: "F̷̡̮̩̞̺̹͔͇͖͇͊̓̈́̐̈́̃͋̀͂͂̄͘̚o̵̻̲̤̥͚͙͚̬͉͚̼̦̹̙͈̞̎̃͑̽̂͂̒͋̊̐̊̌̌͝r̶̭̖͊̊̕͘ḃ̵̢̡͍͎̝̲̼͔̩̥͎͕̪͂͜î̶̡͍̖̿̏̈̔̽͘͜d̶̼͔̜̰͛̂̊̆d̴̛̦̰̩̦̬͈͖̪͖̓̈́̊͂͝͠e̷̛̬̻͌̇́̃̌̓͠ń̴̙͖̉͐͌͌̎́͘̕͝",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [],
		total_member_count: 0,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "85020b78-2a36-4bd4-b00c-7b88dab6e333",
		name: "hi",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [],
		total_member_count: 0,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "5f8996c6-b3ba-4e39-97a1-dd44a73951de",
		name: "Winners",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [findMockedUserById("c5eb8310-cf4f-444c-b223-0e991f828b40")],
		total_member_count: 1,
		avatar_url: "",
		quota_allowance: 1000,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "0c6c1222-b65e-44c1-8bff-078d27fc10e6",
		name: "Some-group",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [],
		total_member_count: 0,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "394222ed-7559-47a8-a57c-1bc7998c0357",
		name: "kira-test",
		display_name: "kira-test",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [],
		total_member_count: 0,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		name: "Everyone",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [
			findMockedUserById("31d3fcc5-618e-48ab-80b9-dab8d9aba077"),
			findMockedUserById("bdbc1534-ba10-47be-a7cb-12a02de7a2c1"),
			findMockedUserById("a73425d1-53a7-43d3-b6ae-cae9ba59b92b"),
			findMockedUserById("9e7815af-bc48-435a-91c7-72dcbf26f036"),
			findMockedUserById("f787e795-b502-41a3-ad79-fe1cb7d3403a"),
			findMockedUserById("e97579fe-31c2-4e83-85d1-7241bf97ba4b"),
			findMockedUserById("b10bbeed-074f-472c-b454-c2525eba6c44"),
			findMockedUserById("0f452b63-64cb-4422-99ea-7391ccf7b4d5"),
			findMockedUserById("bd644669-f7f4-48e6-be38-e37b5017c24f"),
			findMockedUserById("f8f6345f-8751-4a37-87c7-a2f6325a248f"),
			findMockedUserById("a28e6213-b339-46e8-94ec-310d39ac8acb"),
			findMockedUserById("59da0bfe-9c99-47fa-a563-f9fdb18449d0"),
			findMockedUserById("1355d2c6-6505-4e64-b93b-1258bbe35f02"),
			findMockedUserById("4832f5d9-9773-4ea1-a65c-1b818c8cfae5"),
			findMockedUserById("9be730b0-37ce-4216-84dd-6a851d21436e"),
			findMockedUserById("f9c75a4e-9884-433a-80c9-2613bffbaf3f"),
			findMockedUserById("49ded266-e150-4213-826c-7f721f2b9a36"),
			findMockedUserById("00738e55-91cc-47bc-a494-206c8025b887"),
			findMockedUserById("c0240345-f14a-4632-b713-a0f09c2ed927"),
			findMockedUserById("ab872758-4f67-4b73-8d7d-460d83604990"),
			findMockedUserById("2a256f0b-625d-4afc-929c-0ad687141ebd"),
			findMockedUserById("4fde2562-7ec6-4ce7-b7de-359346641d6b"),
			findMockedUserById("4b9a6fda-c60d-4fb2-96fd-b872d1eebee9"),
			findMockedUserById("350441af-b2d3-401f-a795-39971f0a682b"),
			findMockedUserById("e67fbe91-384a-41f0-9836-0b8cea0dd7c8"),
			findMockedUserById("8099295b-d6bd-409b-b500-e31a12e54679"),
			findMockedUserById("b81dc9eb-af70-4ccd-840f-bab9d2c1bde5"),
			findMockedUserById("5bb278fe-a70f-4b5e-9eed-5df7d0e43f6b"),
			findMockedUserById("c5eb8310-cf4f-444c-b223-0e991f828b40"),
			findMockedUserById("8b474a55-d414-4b53-a6ba-760f3d4eed7b"),
			findMockedUserById("6a973d35-8e8e-4ff4-9f95-436d62e13d6f"),
			findMockedUserById("1c2baba2-40d6-4b9e-a788-fe393c1dbdbb"),
			findMockedUserById("5819ca76-94ba-4009-b924-ae077fe9c615"),
			findMockedUserById("1c3e3fff-6a0e-4179-9ba3-27f5443e6fce"),
			findMockedUserById("5ccd3128-cbbb-4cfb-8139-5a1edbb60c71"),
			findMockedUserById("bece715d-0145-45f6-97f1-42bd66b63959"),
			findMockedUserById("a34ed13c-9157-426b-8029-de02292eeaa2"),
			findMockedUserById("dd91e5f1-0e10-434e-9305-02129a6e4fdb"),
			findMockedUserById("135e83f1-ff91-4f91-8d23-f7e7fa6627f1"),
			findMockedUserById("2e1e7f76-ae77-424a-a209-f35a99731ec9"),
			findMockedUserById("6ed718bc-9b36-4120-bd5c-e809163ecef1"),
			findMockedUserById("d1e1792a-221d-413b-a7f4-51f33f395a9b"),
			findMockedUserById("c79f306f-4816-4ca9-8990-55406a45bdb5"),
			findMockedUserById("7a9f4857-e9c5-4f6c-8e1d-0827df5d753b"),
			findMockedUserById("9e3e4c5a-5949-417f-9380-d0a393c78bdd"),
			findMockedUserById("f2cdaba3-e0a3-447a-b186-eb10dc1d1d49"),
			findMockedUserById("3f8c0eef-6a45-4759-a4d6-d00bbffb1369"),
			findMockedUserById("bbaaa01d-b453-4079-b85e-74d333cc8b32"),
			findMockedUserById("d9522d62-f20d-463a-b07d-0c0e2b031907"),
			findMockedUserById("ae6024dc-5fe5-4d60-b19e-b8ef91e9504e"),
			findMockedUserById("21fe9106-02bb-45c7-8d48-8eda6378991e"),
			findMockedUserById("806e35bb-37fd-4810-b5f2-88aa47c30c84"),
			findMockedUserById("b3e1b884-1a5b-44eb-b8b3-423f8eddc503"),
			findMockedUserById("c57dd581-872f-4290-bb48-341554ae537b"),
			findMockedUserById("81e915cb-5064-41f7-b654-c96c846424e6"),
			findMockedUserById("12b03f43-1bb7-4fca-967a-585c97f31682"),
			findMockedUserById("15890ddb-142c-443d-8fd5-cd8307256ab1"),
			findMockedUserById("86e0067c-a4d5-4b75-9cf5-c605badeffc0"),
			findMockedUserById("12708eeb-3463-4c45-b1a8-4b5fef689c33"),
			findMockedUserById("8e215c92-4355-4722-bc27-cf5f06ee08e9"),
			findMockedUserById("49eaf40a-bdc1-4be2-9b53-53c5b24d7016"),
			findMockedUserById("9a0eee4a-ef7b-4197-b221-c9abf4d5b84a"),
			findMockedUserById("c323e5c3-57cb-45e7-81c4-56d6cacb2f8c"),
			findMockedUserById("78dd2361-4a5a-42b0-9ec3-3eea23af1094"),
			findMockedUserById("c5b28cf0-f72a-4b45-b3d5-00d3989d4ed5"),
			findMockedUserById("0f08a0c3-221e-42dc-9915-2ed85b3345dd"),
			findMockedUserById("2b2e8e9f-7a13-435c-b5d4-382182b6e5bb"),
			findMockedUserById("af657bc3-6949-4b1b-bc2d-d41a40b546a4"),
			findMockedUserById("4c8ffd9b-7bc8-47db-9322-f4d5e0b51658"),
			findMockedUserById("1da90b70-5d08-45d0-a5ee-822d1dd6397a"),
			findMockedUserById("e9b24091-a633-4ba0-9746-ca325a86f0f5"),
			findMockedUserById("27c64335-5e08-44ac-b93f-e454b82a9a06"),
			findMockedUserById("97d00652-d374-48a2-b94f-a136bf7cde01"),
			findMockedUserById("740bba7f-356d-4203-8f15-03ddee381998"),
			findMockedUserById("3b0d7f28-7ec0-4d0a-b634-57af9d739e06"),
			findMockedUserById("d12975ea-7a1e-4fb0-962e-0e3532f4db62"),
			findMockedUserById("4670a9f0-f37f-48e2-a240-58e97a193648"),
			findMockedUserById("8a98b6f7-20c1-46f1-8d58-bd2cc722b159"),
			findMockedUserById("7a4319a5-0dc1-41e1-95e4-f31e312b0ecc"),
			findMockedUserById("9bc756d1-5e95-4c6f-8e1b-a1bd20547151"),
			findMockedUserById("b006209d-fdd2-4716-afb2-104dafb32dfb"),
			findMockedUserById("c3480e4c-bdd9-4af6-9dfb-a336ae804817"),
			findMockedUserById("e95fa9e6-e2c3-41d4-a238-01849dd116af"),
			findMockedUserById("2374e95c-2e7b-4e54-9c6e-1cb2cb9aa4b4"),
			findMockedUserById("162600c0-4900-41d4-9bb0-f53925c1d176"),
			findMockedUserById("d96bf761-3f94-46b3-a1da-6316e2e4735d"),
			findMockedUserById("ef2eebf7-9708-4076-9f71-a34af71f5d24"),
			findMockedUserById("c915aeab-4ed1-42d6-95dc-49c50c5a288d"),
			findMockedUserById("612f7a53-95df-4c4b-98c2-cebd66f1a6d6"),
			findMockedUserById("da387280-f246-4329-ac3f-1c6e192b733e"),
			findMockedUserById("fdc2dab9-dabd-4980-843f-2e93042db566"),
			findMockedUserById("26efeb43-330f-4470-8f4e-7307b25020eb"),
			findMockedUserById("1e758aaf-9dde-4b8d-9727-538f1d2264d4"),
			findMockedUserById("9ed91bb9-db45-4cef-b39c-819856e98c30"),
			findMockedUserById("8016c8ca-42a1-4946-8c5f-030355200130"),
			findMockedUserById("13768036-8771-49b1-bf2f-0f61ff63c108"),
			findMockedUserById("794b8a1b-e2d6-4590-be88-1129b0424965"),
			findMockedUserById("946da1a2-9a18-4006-be65-310df64beca1"),
			findMockedUserById("983dc923-5b63-4361-ae95-5b2f0db2fb6e"),
			findMockedUserById("e5aef70f-f665-4358-afb2-2732dbddf7d2"),
			findMockedUserById("62a3d053-6a97-4ad3-9b6d-d5999e16b800"),
			findMockedUserById("58af7daf-5d08-456e-ae3b-5fba07b3df80"),
			findMockedUserById("db38462b-e63d-4304-87e9-2640eea4a3b8"),
			findMockedUserById("4a44ccb6-196b-4d98-a97d-8338bb751fc0"),
			findMockedUserById("61099b0d-71b3-44f2-ae15-45d8af34c614"),
			findMockedUserById("0bac0dfd-b086-4b6d-b8ba-789e0eca7451"),
			findMockedUserById("b8d75f48-6b3a-4c33-8a99-30f8f37b720f"),
			findMockedUserById("e3fef70d-f30e-43b4-b3a7-62a8e1a99ebb"),
			findMockedUserById("523d5587-f473-490d-9e5d-444de9b77d15"),
			findMockedUserById("b1b351ed-c489-473f-a11b-9432740f2a03"),
			findMockedUserById("c76577dd-6a9f-44e5-a0d4-54d4800aeca4"),
			findMockedUserById("3ab08cb8-3136-460f-a6b3-6febac00614d"),
			findMockedUserById("829a99f8-4c4a-4280-9500-fb21f3afb201"),
			findMockedUserById("7f5cc5e9-20ee-48ce-959d-081b3f52273e"),
			findMockedUserById("2087e3c0-0d13-494a-a0e6-483d74e043e8"),
			findMockedUserById("3e02d5f3-2ef1-4f52-95a8-738882d871cc"),
			findMockedUserById("51492787-2823-428b-862e-c7cb83d5eac7"),
		],
		total_member_count: 117,
		avatar_url: "",
		quota_allowance: 40,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "0b912bbd-743e-4415-9036-8217269de663",
		name: "Engineers",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [
			findMockedUserById("3f8c0eef-6a45-4759-a4d6-d00bbffb1369"),
			findMockedUserById("b006209d-fdd2-4716-afb2-104dafb32dfb"),
			findMockedUserById("59da0bfe-9c99-47fa-a563-f9fdb18449d0"),
			findMockedUserById("7f5cc5e9-20ee-48ce-959d-081b3f52273e"),
			findMockedUserById("12b03f43-1bb7-4fca-967a-585c97f31682"),
			findMockedUserById("d96bf761-3f94-46b3-a1da-6316e2e4735d"),
			findMockedUserById("af657bc3-6949-4b1b-bc2d-d41a40b546a4"),
			findMockedUserById("794b8a1b-e2d6-4590-be88-1129b0424965"),
			findMockedUserById("c323e5c3-57cb-45e7-81c4-56d6cacb2f8c"),
			findMockedUserById("78dd2361-4a5a-42b0-9ec3-3eea23af1094"),
			findMockedUserById("c5eb8310-cf4f-444c-b223-0e991f828b40"),
			findMockedUserById("a73425d1-53a7-43d3-b6ae-cae9ba59b92b"),
			findMockedUserById("0bac0dfd-b086-4b6d-b8ba-789e0eca7451"),
			findMockedUserById("b3e1b884-1a5b-44eb-b8b3-423f8eddc503"),
			findMockedUserById("9ed91bb9-db45-4cef-b39c-819856e98c30"),
			findMockedUserById("1c3e3fff-6a0e-4179-9ba3-27f5443e6fce"),
			findMockedUserById("e9b24091-a633-4ba0-9746-ca325a86f0f5"),
		],
		total_member_count: 17,
		avatar_url: "/emojis/1f9d1-200d-1f4bb.png",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "4f7d2a59-3999-4d03-b346-8070a4d601dc",
		name: "test-group",
		display_name: "Test Group",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [],
		total_member_count: 0,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "125b6423-a3c4-4419-abf9-dfcbbd7e8749",
		name: "bruno-group-2",
		display_name: "Bruno Group 2",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [],
		total_member_count: 0,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "cab1a90d-15be-4efe-8ddf-4dc83f3e547e",
		name: "bq-test-group",
		display_name: "",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [
			findMockedUserById("8e215c92-4355-4722-bc27-cf5f06ee08e9"),
			findMockedUserById("a73425d1-53a7-43d3-b6ae-cae9ba59b92b"),
		],
		total_member_count: 2,
		avatar_url: "/emojis/1f60d.png",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "1446698f-4f73-49e9-9dd2-e282a58f58e4",
		name: "wowzers",
		display_name: "Something else",
		organization_id: "703f72a1-76f6-4f89-9de6-8a3989693fe5",
		members: [
			findMockedUserById("86185021-756c-4b51-874f-a1deb00983f0"),
			findMockedUserById("794b8a1b-e2d6-4590-be88-1129b0424965"),
		],
		total_member_count: 2,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "coder",
		organization_display_name: "Coder",
	},
	{
		id: "21dfa187-531e-4a77-acb8-1ac6af314703",
		name: "Everyone",
		display_name: "",
		organization_id: "21dfa187-531e-4a77-acb8-1ac6af314703",
		members: [findMockedUserById("61099b0d-71b3-44f2-ae15-45d8af34c614")],
		total_member_count: 1,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "test-test",
		organization_display_name: "test-test",
	},
	{
		id: "163a803e-1c99-44ec-927e-5a5ccb37c6aa",
		name: "test",
		display_name: "",
		organization_id: "21dfa187-531e-4a77-acb8-1ac6af314703",
		members: [],
		total_member_count: 0,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "test-test",
		organization_display_name: "test-test",
	},
	{
		id: "cbdcf774-9412-4118-8cd9-b3f502c84dfb",
		name: "Everyone",
		display_name: "",
		organization_id: "cbdcf774-9412-4118-8cd9-b3f502c84dfb",
		members: [findMockedUserById("5ccd3128-cbbb-4cfb-8139-5a1edbb60c71")],
		total_member_count: 1,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "shared-compute",
		organization_display_name: "Shared Compute",
	},
	{
		id: "e2815018-6d5a-4751-a18d-e64641dee559",
		name: "Everyone",
		display_name: "",
		organization_id: "e2815018-6d5a-4751-a18d-e64641dee559",
		members: [findMockedUserById("8b474a55-d414-4b53-a6ba-760f3d4eed7b")],
		total_member_count: 1,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "docs-team",
		organization_display_name: "Documentors",
	},
	{
		id: "d79144d9-b30a-448a-9af8-7dac83b2e4ec",
		name: "Everyone",
		display_name: "",
		organization_id: "d79144d9-b30a-448a-9af8-7dac83b2e4ec",
		members: [findMockedUserById("1c3e3fff-6a0e-4179-9ba3-27f5443e6fce")],
		total_member_count: 1,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "data-science",
		organization_display_name: "Data Science",
	},
	{
		id: "8efa9208-656a-422d-842d-b9dec0cf1bf3",
		name: "Everyone",
		display_name: "",
		organization_id: "8efa9208-656a-422d-842d-b9dec0cf1bf3",
		members: [
			findMockedUserById("162600c0-4900-41d4-9bb0-f53925c1d176"),
			findMockedUserById("81e915cb-5064-41f7-b654-c96c846424e6"),
			findMockedUserById("c0240345-f14a-4632-b713-a0f09c2ed927"),
			findMockedUserById("c5eb8310-cf4f-444c-b223-0e991f828b40"),
			findMockedUserById("9be730b0-37ce-4216-84dd-6a851d21436e"),
			findMockedUserById("61099b0d-71b3-44f2-ae15-45d8af34c614"),
		],
		total_member_count: 6,
		avatar_url: "",
		quota_allowance: 0,
		source: "user",
		organization_name: "rabbit",
		organization_display_name: "rabbit",
	},
].map((g) => ({
	...g,
	source: g.source as GroupSource,
	// The mock data from MockUsers contains only 25 users. It is possible that
	// some group members are not included in these mocked users. Therefore, we
	// should remove any group members that are not present in the mocked users
	// during testing.
	members: g.members.filter((m) => m !== undefined),
}));
