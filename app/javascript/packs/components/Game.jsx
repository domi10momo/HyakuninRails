import React from 'react'
import PoemList from './PoemList'
import ReadPoem from './ReadPoem'
import axios from 'axios'

const USE_POEMS_ENDPOINT = 'http://localhost:3000/hyakunin/game';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {read_poem: "", display_poems: [], read_poems: []};
  }

  componentDidMount () {
    axios.get(USE_POEMS_ENDPOINT)
      .then((results) => {
        this.setState({read_poem: results.data.read_poem,
          display_poems: results.data.display_poems,
          read_poems: results.data.read_poems
        });
      }).catch(() => {
        console.log('通信に失敗しました。');
      });
  }

  render () {
    return (
      <div>
        <h1>百人一首ゲーム(Reactバージョン)</h1>
        <h2>読み札</h2>
        <ReadPoem readPoem={this.state.read_poem} />
        <h2>取り札</h2>
        <PoemList displayPoems={this.state.display_poems} />
      </div>
    );
  }
}

export default Game