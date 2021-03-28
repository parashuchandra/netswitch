'use strict';

exports.extend = function (env) {
  env.port = process.env.PORT;
  env.mysql_config = {
    connectionLimit: process.env.DBPOOL,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
  };
};
