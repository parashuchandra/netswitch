'use strict';

exports.extend = function (env) {
  env.port = '3000';
  env.mysql_config = {
    connectionLimit: 5,
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'auth_DEV',
  };
};
