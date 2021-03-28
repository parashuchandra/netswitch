const { executeQuery } = require('../db/mysql_client');
const { escape } = require('mysql2');

exports.findAll = async () => {
  try {
    return executeQuery('select * from users');
  } catch (error) {
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    return executeQuery(`select * from users where id=${escape(id)}`);
  } catch (error) {
    throw error;
  }
};

exports.findByNumber = async (phonenumber) => {
  try {
    return executeQuery(`select * from users where phonenumber=${escape(phonenumber)}`);
  } catch (error) {
    throw error;
  }
};
