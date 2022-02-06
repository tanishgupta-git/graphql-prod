const Query = {
    me() {
        return ({
            id: 'weebvnnsf-dghfsjne-sgdhda',
            name: 'Tanish Gupta',
            age: 20
        })
    },
    post() {
        return ({
            id: 'rtehfs-rrwhhjjn-etewte',
            title: 'Hello Post',
            body: 'hello from the first post of the era',
            published: false
        })
    },
    users(parent,args,{ db },info) {
      if (!args.query) {
          return db.users;
      }

      return db.users.filter((user) => {
         return user.name.toLowerCase().includes(args.query.toLowerCase())
      })
    },
    posts(parent,args,{ db },info) {
      if (!args.query) {
          return db.posts;
      }
      
      return db.posts.filter((post) => {
          return post.title.toLowerCase().includes(args.query.toLowerCase())
      })
    },
    comments(parent,args,{ db },info) {
      return db.comments;
    }     
  }

export { Query as default }