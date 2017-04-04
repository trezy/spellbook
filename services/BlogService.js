import marked from 'marked'





class BlogService {
  async addComment (id, text) {
    return await Stamplay.Object('blog').comment(id, text)
  }

  async getAll (page = 1, pageSize = 20) {
    let data = {
      page: page,
      per_page: pageSize
    }

    return await Stamplay.Object('blog').get(data)
  }

  async getById (id) {
    let blog = await Stamplay.Object('blog').getById(id)

    this.renderBlog(blog)

    return blog
  }

  renderBlog (blog) {
    blog.renderedContent = marked(blog.content)
  }
}

export default new BlogService
