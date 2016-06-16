exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'Bradford'}),
        knex('users').insert({username: 'Pawel'}),
        knex('users').insert({username: 'Bennet'})
      ]);
    });
};
