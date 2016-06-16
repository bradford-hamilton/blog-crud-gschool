exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post').del()
  .then(function(){
    return knex('users').select('id');
  })
  .then(function(users) {
    return Promise.all([
      // Inserts seed entries
      knex('post').insert({ title: 'Life', content: 'Life is weird.', user_id: users[0].id }),
      knex('post').insert({ title: 'Beauty', content: 'Beauty is everywhere.', user_id: users[1].id }),
      knex('post').insert({ title: 'I have trouble spelling', content: 'I cant spell for some reason', user_id: users[2].id })
    ]);
  });
};
