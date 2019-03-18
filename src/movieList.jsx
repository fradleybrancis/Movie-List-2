import movies from './data.js';

// class MovieList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log(props)
//     return (
//       <div>
//         Inside MovieList
//       </div>
//     )
//   }

 
// }


const MovieList = function(props) {
  return props.movies.map(movie => {
    return (
      <div>
        {movie.title}
      </div>
    );
  });
};



export default MovieList;