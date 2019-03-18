class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchForm: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({searchForm: event.target.value});
  }
  
  render() {
    return (
      <div>
        <input onChange={this.handleInput}></input>
        <button onClick={(e) => {
          var val = this.state.searchForm;
          this.props.inputChange(val)}
          }>Search</button>
      </div>
    )
  }
}

export default Search;