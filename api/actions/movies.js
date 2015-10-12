const initialMovies = [
  {id: 1, title: 'Red', sprocketCount: 7, owner: 'John'},
  {id: 2, title: 'Taupe', sprocketCount: 1, owner: 'George'},
  {id: 3, title: 'Green', sprocketCount: 8, owner: 'Ringo'},
  {id: 4, title: 'Blue', sprocketCount: 2, owner: 'Paul'}
];

const getMovies = (req, res) => {
  let movies = req.session.movies;
  if (!movies) {
    movies = initialMovies;
    req.session.movies = movies;
  }
  return movies;
}

//----------GET ALL
export function getAll(req, res){
 	console.info('----\n==> LOAD MOVIES');
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      if (Math.floor(Math.random() * 3) === 0) {
        reject('Movies load fails 33% of the time. You were unlucky.');
      } else {
        resolve(getMovies(req));
      }
    }, 1000); // simulate async load
  });
}