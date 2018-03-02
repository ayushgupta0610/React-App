import React, {Component} from 'react';
// const Component = React.Component;

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {inputTerm: ''};
  }


  render(){
    return (
    <div className="search-bar">
    <input
      value={this.state.inputTerm}
      onChange={event => this.onInputChange(event.target.value)}
    />
    </div>
  );
  }

  onInputChange(term){
        this.setState({inputTerm: term});
        this.props.onSearchTerm(term);
  }

}

export default SearchBar;
