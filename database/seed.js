const { db } = require('./index');
const challenges = require('./models/challenge');
const users = require('./models/users');

newUsers = [
  {
    firstName: 'Zohayb',
    lastName: 'Shaikh',
    username: 'zohayb96',
    email: 'zs@email.com',
    picture: 'https://avatars1.githubusercontent.com/u/7879983?s=460&v=4',
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
