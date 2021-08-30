const blogsRouter = require('express').Router();

const {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blog');

blogsRouter.post('/', createBlog);
blogsRouter.get('/', getBlogs);
blogsRouter.get('/:id', getBlog);
blogsRouter.put('/:id', updateBlog);
blogsRouter.delete('/:id', deleteBlog);

module.exports = blogsRouter;
