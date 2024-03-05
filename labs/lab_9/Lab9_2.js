const readlineSync = require("readline-sync");

const { sendRequest } = require("./RequestHelper");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const SLUG = "/posts";
let url = `${BASE_URL}${SLUG}`;

let userId = Number(readlineSync.question("Input userID: "));
let postId = Number(readlineSync.question("Input postID: "));

printTargetPost(userId, postId);

printAllPosts(userId);

async function printTargetPost(userId, postId) {
  const filteredPosts = await _getAllPost(userId);
  console.log('\n===== TARGET POST ===========================');
  const targetPost = filteredPosts.filter(function (post) {
    return post.id === postId;
  })[0];
  if (targetPost) {
    console.log(targetPost);
  } else {
    console.log(
      `The post ID: ${postId} is not existing for the user ID ${userId}`
    );
  }
}

async function printAllPosts(userId) {
  const allPosts = await _getAllPost(userId);
  console.log('\n===== PRINT ALL POST =========================================');
  console.log(allPosts);
  console.log('==============================================\n');
}

async function _getAllPost(userId) {
  const posts = await sendRequest(url);
  return posts.filter(function (post) {
    return post.userId === userId;
  });
}
