const blogsRouter = require('express').Router();

const { createBlog, getBlogs } = require('../controllers/blog');

blogsRouter.post('/', createBlog);
blogsRouter.get('/', getBlogs);

module.exports = blogsRouter;
