
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'Fingersmith', author: 'Sarah Waters', publication_date: 19, description: '' },
        {id: 2, title: 'Under The Udala Trees', author: '', publication_date: 19, description: '' },
        {id: 3, title: 'The Word For World Is Forest', author: 'Ursula Le Guin', publication_date: 19, description: '' },
        {id: 4, title: 'My Year Of Meats', author: 'Ruth Ozeki', publication_date: 19, description: ''},
        {id: 5, title: 'How Long Until Black Future History Month', author: 'N K Jemisin', publication_date: 19, description: ''},
        {id: 6, title: 'Parable Of The Sower', author: 'Octavia Butler', publication_date: 19, description: ''},
        {id: 7, title: 'The Deep', author: 'Rivers Solomon', publication_date: 19, description: ''},
        {id: 8, title: 'The Black Tides Of Heaven', author: 'Jy Yang', publication_date: 19, description: ''},
        {id: 9, title: 'Capitalism, A Ghost Story', author: 'Arundhati Roy', publication_date: 19, description: ''},
        {id: 10, title: '10 Minutes 38 Seconds In This Strange World', author: 'Elif Shafak', publication_date: 19, description: ''},
        {id: 11, title: 'Children Of Blood And Bone', author: 'Tomi Adeyemi', publication_date: 19, description: ''},
        {id: 12, title: 'orlando', author: 'Virginia Woolf', publication_date: 19, description: ''},
        {id: 13, title: 'A Long Way To A Small Angry Planet', author: 'Becky Chambers', publication_date: 19, description: ''},
        {id: 14, title: 'Frankissstein', author: 'Jeanette Winterson', publication_date: 19, description: ''},
        {id: 15, title: 'Native Tongue', author: 'Suzette H. Elgin', publication_date: 19, description: ''},
      ]);
    });
};
