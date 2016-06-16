
exports.seed = function(knex, Promise) {
      return knex('comment').del()
    .then(function() {
      return knex('post').del()
    .then(function() {
      return knex('users').del();
    });
  });
};
