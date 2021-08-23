const blogsRouter = require('express').Router();

const { createBlog } = require('../controllers/blog');

blogsRouter.post('/', createBlog);

module.exports = blogsRouter;
