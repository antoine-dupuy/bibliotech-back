const db = require('../db-config');

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

const findAll = async () => {
  return await db.promise().query('SELECT * FROM blogs');
}

module.exports = { create, findAll };
