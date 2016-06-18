exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post').del()
  .then(function(){
    return knex('users').select('id');
  })
  .then(function(users) {
    return Promise.all([
      // Inserts seed entries
      knex('post').insert({ title: 'Life', image: 'https://s-media-cache-ak0.pinimg.com/736x/28/a1/52/28a152eac79125d785e69e13173d9084.jpg', content: 'Life is weird.', user_id: users[0].id }),
      knex('post').insert({ title: 'Beauty', image: 'http://www.thinkstockphotos.com/ts-resources/images/home/TS_AnonHP_462882495_01.jpg', content: 'Beauty is everywhere.', user_id: users[1].id }),
      knex('post').insert({ title: 'I have trouble spelling', image: 'https://pixabay.com/static/uploads/photo/2015/11/07/11/52/salamander-1031580_960_720.jpg', content: 'I cant spell for some reason', user_id: users[2].id })
    ]);
  });
};
