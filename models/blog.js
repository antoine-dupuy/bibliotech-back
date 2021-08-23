const db = require('../db-config');

let createdBlog = {};

const create = async ({
  blog_title,
  blog_author,
  description,
  content,
  category,
  created_at,
  user_id,
}) => {
  return await db
    .promise()
    .query(
      'INSERT INTO blogs (blog_title, blog_author, description, content, category, created_at, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        blog_title,
        blog_author,
        description,
        content,
        category,
        created_at,
        user_id,
      ]
    );
};

module.exports = { create };
