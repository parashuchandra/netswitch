const config = require('../config');
const mysql = require('mysql2');

const mysql_user_pool = mysql.createPool(config.mysql_config);

async function executeQuery(query, params) {
  try {
    const promisePool = mysql_user_pool.promise();
    const [rows] = await promisePool.query(query, params);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  executeQuery,
};
