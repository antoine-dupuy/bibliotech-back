const blogsRouter = require('express').Router();

const {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
} = require('../controllers/blog');

blogsRouter.post('/', createBlog);
blogsRouter.get('/', getBlogs);
blogsRouter.get('/:id', getBlog);
blogsRouter.put('/:id', updateBlog);

module.exports = blogsRouter;
