const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

testPost();

async function testPost() {
  // Given Param
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const SLUG = "/posts";
  const url = `${BASE_URL}${SLUG}`;
  const userId = 1;
  const postId = 5;

  const requestHandler = new RequestHandler();
  const post = await requestHandler.printTargetPost(userId, postId, url);
  const allPosts = await requestHandler.printAllPosts(userId, url);

  console.log(`===== PostId ${postId} of userId ${userId} ===== `);
  if (post) {
    requestHandler.printPost(post);
  } else {
    throw new Error(`The post ID: ${postId} is not existing for the user ID ${userId}`);
  }
  console.log("================================================================\n");

  console.log("===== Print All Post ===== ");
  if (allPosts.length !== 0) {
    allPosts.forEach((post) => {
      requestHandler.printPost(post);
      console.log("\n----------");
    });
  } 
}
