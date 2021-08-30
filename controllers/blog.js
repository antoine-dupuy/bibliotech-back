const {
  create,
  findAll,
  findOne,
  setBlog,
  _delete,
} = require('../models/blog');

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
  try {
    const [data] = await findAll();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send('Error retrieving blog from database');
  }
};

const getBlog = async (req, res) => {
  try {
    const [data] = await findOne(req.params.id);
    if (data.length) {
      res.json(data[0]);
    } else {
      res.status(404).send('Blog not found');
    }
  } catch (err) {
    res.status(500).send('Error retrieving blog from database');
  }
};

//update
//improve the error management logic (with findOne model to check if it exists)
//sendback the updated blog to the user

const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    await setBlog(id, body);
    res.status(200).send('Blog updated');
  } catch (err) {
    res.status(500).send('Error updating blog');
  }
};

const deleteBlog = async (req, res) => {
  try {
    await _delete(req.params.id);
    res.status(200).send('Blog deleted');
  } catch (err) {
    res.status(500).send('Error deleting blog');
  }
};

module.exports = { createBlog, getBlogs, getBlog, updateBlog, deleteBlog };
