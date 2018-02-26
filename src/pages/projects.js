import React from 'react'
import Link from 'gatsby-link'



export default () => {
  const projects = [
    {
      url: 'https://codepen.io/Cabeda/full/rwgEmE',
      title: 'Tic Tac Toe',
      img: '../../assets/Images/Screenshot_1.png',
      description: 'Called "Jogo do Galo" in portuguese'
    },
    {
      url: 'https://codepen.io/Cabeda/full/RgvOMP/',
      title: 'Twitch Streams',
      img: '../../assets/Images/Screenshot_2.png',
      description: 'A jQuery list of Twitch Channels status'
    },
    {
      url: 'https://codepen.io/Cabeda/full/RZRrgY/',
      title: 'Pomodoro Clock',
      img: '../../assets/Images/Screenshot_3.png',
      description: 'My first react project :-)'
    },
    {
      url: 'https://codepen.io/Cabeda/full/BddXxN/',
      title: 'Calculator',
      img: '../../assets/Images/Screenshot_4.png',
      description: 'A basic Calculator made in React'
    },
    {
      url: 'https://codepen.io/Cabeda/full/YVBNJr/',
      title: 'Quote Generator',
      img: '../../assets/Images/Screenshot_5.png',
      description: 'Wise Words for a random day'
    },
    {
      url: 'https://codepen.io/Cabeda/full/wdVvzv/',
      title: 'Weather App',
      img: '../../assets/Images/Screenshot_6.png',
      description: 'A Weather App. Made with good and old jQuery'
    }
  ];
  
  return (<div>
    <h1>List of Projects</h1>
    <p>
    <a href="https://codepen.io/Cabeda/full/rwgEmE" target="_blank" >Tic Tac Toe</a>
    </p>
    <p>
    <a href="https://codepen.io/Cabeda/full/RgvOMP/" target="_blank" >Twitch Streams</a>
    </p>
    <p>
    <a href="https://codepen.io/Cabeda/full/RZRrgY/" target="_blank" >Pomodoro Clock</a>    
    </p>
    <p>
    <a href="https://codepen.io/Cabeda/full/BddXxN/" target="_blank" >Calculator</a>    
    </p>
    <p>
    <a href="https://codepen.io/Cabeda/full/YVBNJr/" target="_blank" >Quote Generator</a>    
    </p>
    <p>
    <a href="https://codepen.io/Cabeda/full/wdVvzv/" target="_blank" >Weather App</a>    
    </p>
  </div>);
}
