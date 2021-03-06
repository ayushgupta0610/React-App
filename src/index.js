import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
const Component = React.Component;
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAaRkM5qXpVv_i2L3nan_1BWGaoaeYgZy8';

//Create a new component. This should produce some HTML
class App extends Component{
  constructor(props){
    super(props);

    this.state = {videos: [], selectedVideo: null};

    this.videoSearch('surfboard');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render(){
    const _videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTerm={_videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect = {(selectedVideo) => {this.setState({selectedVideo});}}
        videos={this.state.videos} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
