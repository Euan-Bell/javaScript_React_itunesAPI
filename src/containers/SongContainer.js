import React from "react";
import SongList from "../components/SongList";
import Song from "../components/Song";


class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  };


  ComponentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(response => response.json())
    .then(songs => this.setState({songs: songs}))
    .catch( err => console.error(err));
  }

  render(){
    return(
      <div>
        <h1>Song Container</h1>
        <SongList song={this.state.songs} />
      </div>
    );
  }
}
export default SongContainer;
