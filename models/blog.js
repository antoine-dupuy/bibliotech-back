const connection = require('../db-config');
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
};

const findOne = async (id) => {
  return await db.promise().query('SELECT * FROM blogs WHERE id = ?', [id]);
};

const setBlog = async (id, body) => {
  return await db
    .promise()
    .query(
      'UPDATE blogs SET blog_title = ?, blog_author = ?, description = ?, content = ?, category = ? WHERE id = ?',
      [
        body.blog_title,
        body.blog_author,
        body.description,
        body.content,
        body.category,
        id,
      ]
    );
};

const _delete = async (id) => {
  return db.promise().query('DELETE FROM blogs WHERE id = ?', id);
};

module.exports = { create, findAll, findOne, setBlog, _delete };
