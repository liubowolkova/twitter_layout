const testArray = [
    {
        "userName": "Олег Васильевич",
        "nickname": "vasil",
        "text": "Где детонатор?",
        "postDate": "02.14.2012, 05:00",
        "id": 0
    },
    {
        "userName": "Brock",
        "nickname": "brock",
        "text": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
        "postDate": "02.05.2012, 13:27",
        "img": "https://fish-text.ru/images/logo.png",
        "likes": 50,
        "id": 1
    },
    {
        "userName": "Raamin",
        "nickname": "raamin",
        "text": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
        "postDate": "03.11.2012, 10:30",
        "likes": 999,
        "id": 2
    },
    {
        "userName": "Дональд",
        "nickname": "trampampam",
        "text": "Зарегался на вк, хороший сервис и не банят",
        "postDate": "02.05.2012, 13:27",
        "img": "https://i2.wp.com/media.globalnews.ca/videostatic/news/vamt80qbaq-94ovmaxjqg/trumptwitterupdate.jpg?w=500&quality=70&strip=all",
        "likes": 50,
        "id": 3
    }
    ,
    {
        "userName": "Олег Васильевич",
        "nickname": "vasil",
        "text": "Где детонатор?",
        "postDate": "02.14.2012, 05:00",
        "img": "https://www.meme-arsenal.com/memes/27606cb09d10f670389750cffb4d900d.jpg",
        "likes": 666,
        "id": 4
    },
    {
        "userName": "Raamin",
        "nickname": "raamin",
        "text": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
        "postDate": "03.11.2012, 10:30",
        "likes": 999,
        "id": 5
    }
];

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
    constructor(posts) {
        this.posts = posts;
    }

    addPost(tweet) {
        this.posts.push(new Post(tweet));
    }

    deletePost(id) {
        let tempArray = [];
        this.posts.forEach(post => {
            if (post.id !== id) {
                tempArray.push(post);
            }
        });
        this.posts = tempArray;
    }

    likePost(post, id) {
        let isExist = this.posts.some(post => post.id === id);
        if (!isExist) {
            this.posts.push(post);
        }
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

const postList = testArray.map(post => new Post(post));

const posts = new Posts(postList);
console.log(posts);

posts.deletePost(4);

const testPost = {
    "userName": "Дэн Дин",
    "nickname": "den",
    "text": "Go?",
    "postDate": "03.14.2012, 07:00",
    "id": 9
};

posts.addPost(testPost, testPost.id);
console.log(posts);