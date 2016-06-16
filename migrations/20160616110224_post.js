
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', function(table) {
    table.increments();
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post');
};
