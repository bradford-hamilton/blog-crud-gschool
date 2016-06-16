
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', function(table) {
    table.increments();
    table.string('title');
    table.text('content');
    table.integer('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post');
};
