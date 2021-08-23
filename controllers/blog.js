const { create } = require('../models/blog');

const createBlog = async (req, res) => {
  try {
    const result = await create(req.body);
    //we build an object with the last blog created id and send it back to the client
    const blog = {
      id: result[0].insertId,
      title: req.body.blog_title,
      author: req.body.blog_author,
    };
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).send('Error creating blog');
  }
};

module.exports = { createBlog };
