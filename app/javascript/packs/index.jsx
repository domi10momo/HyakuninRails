// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import PoemList from './components/PoemList'
import ReadPoem from './components/ReadPoem'

// テストデータ
const use_poems = [
  {id: 1},
  {id: 2}
];

const read_poem = "秋の田の かりほの庵の 苫をあらみ";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <h1>百人一首ゲーム(Reactバージョン)</h1>
      <h2>読み札</h2>
      <ReadPoem read_poem={read_poem} />
      <h2>取り札</h2>
      <PoemList use_poems={use_poems} />
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
})
