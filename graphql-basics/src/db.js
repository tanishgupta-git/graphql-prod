let users = [
    {
        id: '1',
        name: 'John',
        email: 'John@gmail.com',
        age:20
    },
    {
        id: '2',
        name: 'Marry',
        email: 'Marry@gmail.com',
        age:21
    },
    {
        id: '3',
        name: 'Moris',
        email: 'Moris@gmail.com',
        age:20
    }
]

// demo posts data
let posts = [
    {
        id: '1',
        title: 'First Post',
        body: 'Body of post',
        published: true,
        author: '1'
    },
    {
        id: '2',
        title: 'Second Post',
        body: 'Body of post',
        published: true,
        author: '2'
    },
    {
        id: '3',
        title: 'Third Post',
        body: 'Body of post',
        published: false,
        author: '3'
    }
]

// demo comment data
let comments = [
    {
        id: '1',
        text: 'Hello 1',
        author: '2',
        post: '1'
    },
    {
        id: '2',
        text: 'Hello 2',
        author: '2',
        post: '2'
    },
    {
        id: '3',
        text: 'Hello 3',
        author: '3',
        post: '1'
    },
    {
        id: '4',
        text: 'Hello 4',
        author: '1',
        post: '3'
    }
];

const db = {
    users,
    posts,
    comments
}

export { db as default };