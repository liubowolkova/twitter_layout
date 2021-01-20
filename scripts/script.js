// const obj = {
//     firstName: 'Liubov',
//     surname: 'Volkova',
//     walk: function (steps) {
//         console.log(this.firstName)
//     }
// };

// const User = function (param) {
//     this.firstName = param.firstName
//     this.surname = param.surname
//     this.walk = function (steps) {
//         console.log(this.firstName)
//     }
// }
// // extention
// User.prototype.codding = function (time) {
//     console.log(`${this.surname} has written the code for ${time} hours`)
// }

// const dmitry = new User({
//     firstName: 'Dmitry',
//     surname: 'Volkov'
// });

// dmitry.walk();
// dmitry.codding();

class Twitter {
    constructor() {
        this.tweets = new Posts({
            posts: []
        });
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
    constructor(param) {
        const { posts } = param;
        this.posts = posts;
    }

    addPost(tweet) {
        const post = new Post(tweet);
        this.posts.push(post);
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

new Twitter({
    listElem: '.tweet-elem'
});