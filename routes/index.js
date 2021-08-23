const blogsRouter = require("./blog");

module.exports = (app) => {
    app.use("/api/blogs", blogsRouter)
};