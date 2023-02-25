const fetch = require("node-fetch");
const { convertProtocolToVersion, user_protocol } = require("./protocol");

const api = "https://api.playerservers.com"

function getUser(uuid) {
	return new Promise(async (resolve, reject) => {
		const base = `${api}/player/${uuid}`
		const baseUser = await fetch(`${base}`);

		const userWarzone = await fetch(`${base}/warzone`);
		const userTntWars = await fetch(`${base}/tntwars`);
		const userBedWars = await fetch(`${base}/bedwars`);

		const tempUser = await baseUser.json();
		const tempWarZone = await userWarzone.json();
		const tempTntWars = await userTntWars.json();
		const tempBedWars = await userBedWars.json();

		const user = tempUser.player;
		const warzone = tempWarZone.player;
		const tntwars = tempTntWars.player;
		const bedwars = tempBedWars.player;

		const version = user_protocol(user.version_protocol);

		const data = {
			username: user.username,
			uuid: user.uuid,
			online: user.online,
			first_join: user.first_join,
			last_join: user.last_logout,
			points: user.points, // Why are these integers but level is a string???
			exp: user.exp,
			level: parseInt(user.level),
			version: {
				protocol: version.protocol,
				version: version.version
			},
			current_server: user.server,
			guild: user.guild_name,
			groups: user.groups,
			minigames: {
				warzone: {
					coins: warzone.coins,
					kills: warzone.kills,
					deaths: warzone.deaths,
					wins: warzone.wins,
					score: warzone.score,
					wool_destroyed: warzone.wool_destroyed,
					first_join: warzone.first_joined,
					last_join: warzone.last_joined,
					playtime: warzone.playtime,
				},
				tntwars: {
					coins: tntwars.coins,
					kills: tntwars.kills,
					deaths: tntwars.deaths,
					wins: tntwars.wins,
					score: tntwars.score,
					first_join: tntwars.first_joined,
					last_join: tntwars.last_joined,
					playtime: tntwars.playtime,
				},
				bedwars: {
					coins: bedwars.coins,
					kills: bedwars.kills,
					deaths: bedwars.deaths,
					wins: bedwars.wins,
					score: bedwars.score,
					beds: bedwars.beds,
					first_join: bedwars.first_joined,
					last_join: bedwars.last_joined,
					playtime: bedwars.playtime,
				},
			}
		}

		resolve(data);
	});
}

module.exports = {
	getUser,
}