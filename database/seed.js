const { db } = require('./index');
const challenges = require('./models/challenge');
const users = require('./models/users');

newUsers = [
  {
    firstName: 'Zohayb',
    lastName: 'Shaikh',
    username: 'zohayb96',
    email: 'zs@email.com',
    picture:
      'https://instagram.fnyc1-1.fna.fbcdn.net/vp/5f39b6a5ca6d9b90927122be817e7d7b/5BD99218/t51.2885-15/sh0.08/e35/p640x640/28432578_152933198729058_7849606578062753792_n.jpg',
  },
  {
    firstName: 'Albert',
    lastName: 'Einstein',
    username: 'abe',
    email: 'albertA@email.com',
    picture: 'https://inktank.fi/wp-content/uploads/2013/05/Einsteinfacts.jpg',
  },
  {
    firstName: 'Lebron',
    lastName: 'James',
    username: 'lbj23',
    email: 'lbj@LA.com',
    picture:
      'https://www.gannett-cdn.com/-mm-/3f3d96c2ce4ab86b90ede4df57c8f3a8ae8f9610/c=21-0-2331-1737/local/-/media/2018/07/07/USATODAY/USATODAY/636665861475843815-2018-07-07-LeBron-James2.jpg?width=534&height=401&fit=crop',
  },
  {
    firstName: 'Bill',
    lastName: 'Gates',
    username: 'billgates',
    email: 'bg@email.com',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfo1GycVoUK1jct9pSUg6kW9kF-2n5VYqFvsv1pmvIhAHWbzp',
  },
  {
    firstName: 'Elon',
    lastName: 'Musk',
    username: 'elonmusk',
    email: 'elonMusk@email.com',
    picture:
      'http://www.nydailynews.com/resizer/4SgXFjv4vrfkwfW6XDMSGzkxqvI=/1400x0/www.trbimg.com/img-5b5245ac/turbine/ny-1532118440-h2xawo95j7-snap-image',
  },
  {
    firstName: 'Oprah',
    lastName: 'Winfrey',
    username: 'yougetacar',
    email: 'oprah@email.com',
    picture:
      'https://honnaimg.elwatannews.com/image_archive/840x601/5931972721516896299.jpg',
  },
];

newChallenges = [
  {
    challengeText: 'Go Skydiving',
    challengePicture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2qwUV3gL71did5ydYf4hIifEx0_2g0ZvqlIFY8ptQXyP9SiaTA',
    issuedFromId: 1,
    issuedToId: 2,
  },
  {
    challengeText: 'Solve Theory of Relativity',
    challengePicture:
      'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAyMS84NTMvb3JpZ2luYWwvZ3Jhdml0eS1wcm9iZS1iLmpwZw==',
    issuedFromId: 2,
    issuedToId: 1,
  },
  {
    challengeText: 'Ice Bucket Challenge',
    challengePicture:
      'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/07/ice-bucket-challenge-1940x1091.jpg',
    issuedFromId: 4,
    issuedToId: 1,
  },
  {
    challengeText: 'Eat kangaroo 🥩🇦🇺',
    challengePicture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtne_wL90yfQ628kFBUXLPZOxkaX10xLK6fYv1Sm1bjX8XtTXwA',
    issuedFromId: 3,
    issuedToId: 1,
  },
  {
    challengeText: 'Climb a mountain',
    challengePicture:
      'http://www.nerverush.com/wp-content/uploads/2014/07/this-climber.jpg',
    issuedFromId: 4,
    issuedToId: 1,
    accepted: true,
    rating: 88,
  },
  {
    challengeText: 'Go to the beach',
    challengePicture:
      'https://cdn.pixabay.com/photo/2017/01/09/21/50/beach-1967766_1280.jpg',
    issuedFromId: 4,
    issuedToId: 1,
    accepted: true,
    rating: 57,
  },
  {
    challengeText: 'Selfie with statue of liberty',
    challengePicture:
      'https://duckduckgrayduck.files.wordpress.com/2015/09/liberty.jpg',
    issuedFromId: 6,
    issuedToId: 1,
    accepted: true,
  },
  {
    challengeText: 'Go ice skating in France',
    challengePicture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDstSYDqXNjfbOEzd7td-awpR0XQ04DkIlMGUN9R0IzzlSGU8',
    issuedFromId: 3,
    issuedToId: 1,
    accepted: true,
  },
  {
    challengeText: 'Find this street art in brooklyn',
    challengePicture:
      'https://graffitiart-libs.com/wp-content/uploads/2018/01/street-art-williamsburg-street-art-williamsburg-brooklyn-obsessed-brooklyn-street-art.jpg',
    issuedFromId: 5,
    issuedToId: 1,
  },
  {
    challengeText: 'Find the wall street bull',
    challengePicture:
      'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images-medium-5/wall-street-bull-david-smith.jpg',
    issuedFromId: 1,
    issuedToId: 3,
    rating: 87,
    accepted: true,
  },
  {
    challengeText: 'Try the Artichoke Slice',
    challengePicture:
      'https://artichokepizza.com/wp/wp-content/uploads/2017/08/greenwich.jpg',
    issuedFromId: 1,
    issuedToId: 3,
    rating: 87,
    accepted: true,
  },
  {
    challengeText: 'Try the Artichoke Slice',
    challengePicture:
      'https://artichokepizza.com/wp/wp-content/uploads/2017/08/greenwich.jpg',
    issuedFromId: 1,
    issuedToId: 1,
  },
];

const seed = () =>
  Promise.all(newUsers.map(user => users.create(user))).then(() =>
    Promise.all(newChallenges.map(challenge => challenges.create(challenge)))
  );

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
