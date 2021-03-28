'use strict';
const path = require('path');

let env = {};
env.port = process.env.PORT || 3000;
env.session_secret = '8wqjd%^8822';

env.ses_cookie_name = `${env.app_name}.${process.pid}.sid`;

env.app_uri = '/netswitch';

let current_env_name = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';
let current_env_path = path.join(__dirname, `/env/${current_env_name}.js`);
env.env_name = current_env_name;

try {
  require(current_env_path).extend(env);
} catch (error) {
  require(path.join(__dirname, '/env/dev.js')).extend(env);
}

module.exports = env;
