import MovieList from './movieList.js';
import movies from './data.js';
import Search from './search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedMovies: '',
      searchValue: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(text) {
    this.setState({searchValue: text});
    console.log('current state is ',this.state);
  }
  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Search inputChange={this.handleSearch}/>
        <MovieList movies={movies}/>
      </div>
    )
  };
};

export default App;
