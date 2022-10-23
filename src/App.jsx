

import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './quotes.json'
import { useState } from 'react'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max + 1 );
}

const getRandomColor = () => {
  const a =  getRandomInt(255);
  const b =  getRandomInt(255);
  const c =  getRandomInt(255);
  return `rgb(${a},${b},${c})`;
}

const App = () => {

  const initData = quotes[getRandomInt(quotes.length)];
  const [currentData, setCurrentData] = useState(initData);

  const [currentColor, setCurrentColor] = useState(getRandomColor());
  
  const changeData = () => {
    const i = getRandomInt(quotes.length);
    setCurrentData(quotes[i])
    setCurrentColor(getRandomColor())
  }

  return <div id="background" style={{backgroundColor: currentColor}}>
      <QuoteBox data={currentData} action={changeData} color={currentColor} />
  </div>
}

export default App
