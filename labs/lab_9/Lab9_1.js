const readlineSync = require("readline-sync");

const {sendRequest} = require('./RequestHelper');

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
let url = `${BASE_URL}${SLUG}`;

let userId = Number(readlineSync.question("Input userID: "));
let postId = Number(readlineSync.question("Input postID: "));

printTargetPost(userId, postId);

printAllPosts(userId);

function printTargetPost(userId, postId) {
    _getAllPost(userId).then(function (filteredPosts) {
        console.log('\n===== TARGET POST ===========================');
        const targetPost = filteredPosts.filter(function (post) {
            return post.id === postId;
        })[0];

        if (targetPost) {
            console.log(targetPost);
        } else {
            console.log(`The post ID: ${postId} is not existing for the user ID ${userId}`);
        }
    });
}

function printAllPosts(userId) {
    _getAllPost(userId).then(function (filteredPosts) {
        console.log('\n===== PRINT ALL POST =========================================');
        console.log(filteredPosts);
        console.log('==============================================\n');
    });
}

function _getAllPost(userId) {
    return sendRequest(url).then(function (posts) {
        return posts.filter(function (post) {
            return (post.userId === userId);
        })
    });
}
