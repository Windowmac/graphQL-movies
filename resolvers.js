const movies = [{
    title: 'Django',
    year: 2005,
    reviews: [{
        author: 'me',
        title: 'my thoughts',
        body: 'it is great'
    },
    {
        author: 'anthony',
        title: 'thoughts and feelings',
        body: 'it is'
    }]
}]

const resolvers = {
    Query: {
      movies: () => movies,
    },
  };

  module.exports = resolvers;