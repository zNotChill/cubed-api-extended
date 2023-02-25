
const groups = [
	{
		name: "owner",
		id: 0,
	},
	{
		name: "co-owner",
		id: 1,
	},
	{
		name: "admin",
		id: 2,
	},
	{
		name: "builder",
		id: 3,
	},
	{
		name: "mod",
		id: 4,
	},
	{
		name: "trial-mod",
		id: 5,
	},
	{
		name: "patreon-tier-6",
		id: 6,
	},
	{
		name: "patreon-tier-5",
		id: 7,
	},
	{
		name: "patreon-tier-4",
		id: 8,
	},
	{
		name: "patreon-tier-3",
		id: 9,
	},
	{
		name: "patreon-tier-2",
		id: 10,
	},
	{
		name: "patreon-tier-1",
		id: 11,
	},
	{
		name: "mvp",
		id: 12,
	},
	{
		name: "vip",
		id: 13,
	},
	{
		name: "god",
		id: 14,
	},
	{
		name: "royal",
		id: 15,
	},
	{
		name: "noble",
		id: 16,
	},
	{
		name: "default",
		id: 17,
	},
]

const user = {
	username: String,
	uuid: String,
	online: Boolean,
	first_join: Number,
	last_join: Number,
	points: Number,
	exp: Number,
	level: Number,
	version: {
		protocol: Number,
		version: String
	},
	current_server: String,
	guild: String,
	groups: Array,
	minigames: {
		warzone: {
			coins: Number,
			kills: Number,
			deaths: Number,
			wins: Number,
			score: Number,
			wool_destroyed: Number,
			first_join: Number,
			last_join: Number,
			playtime: Number,
		},
		tntwars: {
			coins: Number,
			kills: Number,
			deaths: Number,
			wins: Number,
			score: Number,
			wool_destroyed: Number,
			first_join: Number,
			last_join: Number,
			playtime: Number,
		},
		bedwars: {
			coins: Number,
			kills: Number,
			deaths: Number,
			wins: Number,
			score: Number,
			wool_destroyed: Number,
			first_join: Number,
			last_join: Number,
			playtime: Number,
		},
	}
}

module.exports = {
	groups,
	user
}