
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('characters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {name: 'Bugs Bunny', birthDay: 'April 30, 1938', spouse: 'Lola Bunny', voice: 'Mel Blanc', img: 'http://images.thehive-services.com/looneyToonsApi/bugs.jpg'}
      ]);
    });
};
