class Twitter {
    constructor({ listElem }) {
        this.tweets = new Posts();
        this.elements = {
            listElem: document.querySelector(listElem)
        }
    }

    renderPosts() {

    }

    showUserPost() {

    }

    showLikesPost() {

    }

    showAllPost() {

    }

    openModal() {

    }
}

class Posts {
    constructor({ posts = [] } = {}) {
        this.posts = posts;
    }

    addPost(tweet) {
        this.posts.push(new Post(tweet));
    }

    deletePost(id) {

    }

    likePost(id) {

    }
}

class Post {
    constructor(param) {
        this.id = param.id;
        this.userName = param.userName;
        this.nickname = param.nickname;
        this.postData = param.postData;
        this.text = param.text;
        this.image = param.image;
        this.likes = param.likes;
        this.liked = false
    }

    changeLike() {
        this.like = !this.like;
        if (this.like) {
            this.like++
        } else {
            this.like--
        }
    }
}

const twitter = new Twitter({
    listElem: '.tweet-list'
});


console.log(twitter);