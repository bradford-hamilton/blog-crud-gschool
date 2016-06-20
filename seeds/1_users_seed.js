exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, username: 'Bradford'}),
        knex('users').insert({id: 2, username: 'Pawel'}),
        knex('users').insert({id: 3, username: 'Bennett'})
      ]);
    });
};
