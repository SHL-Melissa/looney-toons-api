
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('characters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {"name":"Bugs Bunny","birthDay":"April 30, 1938","spouse":"Lola Bunny","voice":"Mel Blanc","img":"https://images.thehive-services.com/looneyToonsApi/bugs.jpeg"},
        {"name":"Daffy Duck","birthDay":"April 17, 1937","spouse":"Melissa Duck","voice":"Mel Blanc","img":"https://images.thehive-services.com/looneyToonsApi/daffy.jpg"},
        {"name":"Porky Pig","birthDay":"March 2, 1935","spouse":"Petunia Pig","voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/porky.jpg"},
        {"name":"Marvin the Martian","birthDay":"July 24, 1948","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/marvin.jpg"},
        {"name":"Tweey","birthDay":"November 22, 1941","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/tweety.png"},
        {"name":"Foghorn Leghorn","birthDay":"August 31, 1946","spouse":"Miss Prissy","voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/foghorn.jpg"},
        {"name":"Elmer Fudd","birthDay":"1940","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/elmer.jpg"},
        {"name":"Sylvester","birthDay":"March 24, 1945","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/sylvester.jpg"},
        {"name":"Yosemite Sam","birthDay":"May 5, 1945","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/yosemite.jpeg"},
        {"name":"Tasmanian Devil","birthDay":"1954","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/taz.jpg"},
        {"name":"Pepe Le Pew","birthDay":"1945","spouse":"Penelope Pussycat","voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/pepe.jpg"},
        {"name":"Speedy Gonzales","birthDay":"1953","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/speedy.jpg"},
        {"name":"Granny","birthDay":"November 6, 1937","spouse":null,"voice":"Bea Benaderet","img":"http://images.thehive-services.com/looneyToonsApi/granny.png"},
        {"name":"Witch Hazel","birthDay":"1954","spouse":null,"voice":"Bea Benaderet","img":"http://images.thehive-services.com/looneyToonsApi/witchHazel.jpg"},
        {"name":"Henery Hawk","birthDay":"1942","spouse":null,"voice":"Ben Falcone","img":"http://images.thehive-services.com/looneyToonsApi/heneryHawk.jpg"},
        {"name":"Michigan J. Frog","birthDay":"December 31, 1955","spouse":null,"voice":"Bill Roberts","img":"http://images.thehive-services.com/looneyToonsApi/michiganFrog.png"},
        {"name":"Cecil Turtle","birthDay":"March 15, 1941","spouse":null,"voice":"Jim Rash","img":"http://images.thehive-services.com/looneyToonsApi/cecil.png"},
        {"name":"Road Runner","birthDay":"September 17, 1949","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/roadRunner.png"}]
);
    });
};
