exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function() {
      return Promise.all([
        knex('users').select('id'),
        knex('post').select('id')
      ]);
    })
    .then(function(data) {
      var users = data[0];
      var posts = data[1];
      return Promise.all([
        // Inserts seed entries
        knex('comment').insert({content: 'Life is weird.', user_id: users[0].id, post_id: posts[0].id }),
        knex('comment').insert({content: 'Beauty is everywhere.', user_id: users[1].id, post_id: posts[1].id }),
        knex('comment').insert({content: 'I cant spell for some reason', user_id: users[2].id, post_id: posts[2].id })
      ]);
    });
};
