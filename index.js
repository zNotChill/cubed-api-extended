const { getUser } = require("./src/api/v1/user/api");
const { convertProtocolToVersion, user_protocol } = require("./src/api/v1/user/protocol");

getUser("71a5c270-acb0-4559-aee7-c098cfb39d56").then((user) => {
	console.log(user);
});