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
        knex('comment').insert({body: 'Brad, its not life thats weird.. its you', user_id: users[0].id, post_id: posts[0].id }),
        knex('comment').insert({body: 'Comment #2', user_id: users[0].id, post_id: posts[0].id }),
        knex('comment').insert({body: 'Beauty is indeed everywhere.. Especially in your eyes', user_id: users[1].id, post_id: posts[1].id }),
        knex('comment').insert({body: 'Yeah bennett we get it you cant spell', user_id: users[2].id, post_id: posts[2].id })
      ]);
    });
};
