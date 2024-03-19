const Post = require("./Post");
const { sendRequest } = require("../lab_9/RequestHelper");

class RequestHandler{

  async printTargetPost(userId, postId, url) {
    // Construct the returned data as a Post data model from class Post
    const filteredPosts = await this._getAllPosts(userId, url);
    const targetPost = filteredPosts.filter((post) => {
      return post.id === postId;
    })[0];

    if (targetPost) {
      return new Post(
        targetPost.userId,
        targetPost.id,
        targetPost.title,
        targetPost.body
      );
    } else {
      return null;
    }
  }

  async printAllPosts(userId, url) {
    // Construct the returned data as a [Post data model] from class Post
    const allPosts = await this._getAllPosts(userId, url);
    let constructPosts = [];
    allPosts.forEach((post) =>
      constructPosts.push(
        new Post(post.userId, post.id, post.title, post.body)
      )
    );
    return constructPosts;
  }

  async _getAllPosts(userId, url) {
    const posts = await sendRequest(url);
    return posts.filter((posts) => posts.userId === userId);
  }

  printPost(post) {
    console.log(post);
  }
}

module.exports = RequestHandler;
