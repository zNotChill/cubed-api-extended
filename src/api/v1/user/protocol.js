
const { protocols } = require("../data/protocols");

function convertProtocolToVersion(protocol) {
	let message = "none";
	protocols.forEach(v => {
		if(v.version === protocol) {
			message = v.minecraftVersion;
		}
	});
	return message;
}

function user_protocol(protocol) {
	const version = convertProtocolToVersion(protocol);
	return {
		protocol: protocol,
		version: version
	};
}

module.exports = {
	convertProtocolToVersion,
	user_protocol
}