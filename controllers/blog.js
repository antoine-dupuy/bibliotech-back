const { create, findAll, findOne } = require('../models/blog');

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

const getBlogs = async (req, res) => {
  const [data] = await findAll();
  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send('Error retrieving blog from database');
  }
};

const getBlog = async (req, res) => {
  const [data] = await findOne(req.params.id);
  try {
    if (data.length) {
      res.json(data[0]);
    } else {
      res.status(404).send('Blog not found');
    }
  } catch (err) {
    res.status(500).send('Error retrieving blog from database');
  }
};

module.exports = { createBlog, getBlogs, getBlog };
