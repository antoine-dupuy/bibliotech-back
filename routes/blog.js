const blogsRouter = require('express').Router();

const { createBlog, getBlogs, getBlog } = require('../controllers/blog');

blogsRouter.post('/', createBlog);
blogsRouter.get('/', getBlogs);
blogsRouter.get('/:id', getBlog);

module.exports = blogsRouter;
