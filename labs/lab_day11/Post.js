class Post {

	constructor(userId, postId, title, body) {
		this._userId = userId;
		this._postId = postId;
		this._title = title;
		this._body = body;
	 }
  
	 get userId() {
		return this._userId;
	 }
  
	 set userId(userId) {
		this._userId = userId;
	 }
  
	 get postId() {
		return this._postId;
	 }
  
	 set postId(postId) {
		this._postId = postId;
	 }
  
	 get title() {
		return this._title;
	 }
  
	 set title(title) {
		this._title = title;
	 }
  
	 get body() {
		return this._body;
	 }
  
	 set body(body) {
		this._body = body;
	 }

}

module.exports = Post;