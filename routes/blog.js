var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


/* GET users listing. */
router.get('/', function(request, response) {
  knex('users')
    .join('post', 'users.id', 'post.user_id')
    .select()
    .then(function(data) {
      response.render('blog', {data: data});
    });
});

router.get('/add', function(request, response) {
  response.render('add');
});

router.get('/:id/edit', function(request, response) {
  knex('post').where({ id: request.params.id }).first()
    .then(function(post) {
      response.render('edit', { post: post });
    });
});

router.put('/:id/edit', function(request, response) {
  knex('post').where({ id: request.params.id }).update(request.body)
    .then(function() {
      response.redirect('/blog/' + request.params.id);
    });
});

router.get('/:id/delete', function(request, response) {
    knex('comment').where({ post_id: request.params.id }).del()
  .then(function() {
    return knex('post').where({ id: request.params.id }).del()
  .then(function() {
    response.redirect('/blog');
  });
});

});

router.post('/add', function(request, response) {
  knex('users').returning('id').insert({ username: request.body.username })
    .then(function(userid) {
      console.log(userid);
      return knex('post').insert({
        title: request.body.title,
        image: request.body.image,
        content: request.body.content,
        user_id: userid[0]
      });
    })
    .then(function() {
      response.redirect('/blog');
    })
    .catch(function(error) {
      next(error);
    });
});


// where i want the comments
router.get('/:id', function(request, response) {
    knex('users')
      .join('post', 'users.id', 'post.user_id')
      .join('comment', 'post.id', 'comment.post_id')
      .select()
      .where({ post_id: request.params.id })
    .then(function(data) {
      console.log(data);
      response.render('details', { post: data,
                                   image: data[0].image,
                                   username: data[0].username,
                                   title: data[0].title,
                                   content: data[0].content,
                                   thepostid: data[0].post_id,
                                   theuserid: data[0].user_id
                                 });
  });
});

router.post('/:id', function(request, response) {
  knex('comment').insert({
      body: request.body.body,
      post_id: request.body.post_id,
      user_id: request.body.user_id
    })
  .then(function() {
    response.redirect('/blog/' + request.body.post_id);
  });
});


module.exports = router;
