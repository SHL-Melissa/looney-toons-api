const { text } = require("express");

exports.up = function(knex) {
  return knex.schema
  .createTable('characters', tbl => {
      tbl.increments();
      tbl.string('name').unique().notNullable();
      tbl.string('birthDay');
      tbl.string('spouse').unique();
      tbl.string('voice');
      tbl.string('img').unique().notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('characters');
};
