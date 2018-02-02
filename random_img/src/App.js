import React, { Component } from 'react';
import './App.css';
import ImageBox from './image-box';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderElments:[]
    }
  }

  componentDidMount() {
    const arr = [];
    let color, el, size;

    const minSize = Math.floor(Math.random() * 10) + 25;

    setInterval(()=>{
      color = "rgb(233,233,233)";
      size = Math.floor(Math.random() * 10) + minSize + "vmin";

      el = <ImageBox
        key={arr.length}
        color={color}
        w={size}
        h={size}
           />;
      arr.push(el);
      this.setState({renderElments:arr});
    }, 300);

    window.addEventListener('touchstart', (e)=>{
      this.sy = window.scrollY;
    });

    window.addEventListener('touchend', (e)=>{
      if (window.scrollY > this.sy){
        // scroll down
        this.onFlickingUp();
      }
      else if (window.scrollY < this.sy) {
        // scroll up
        this.onFlickingDown();
      }
    });
  }

  onFlickingUp() {

  }

  onFlickingDown() {

  }

  render() {
    const el = this.state.renderElments;

    return (
      <div className="App">
        {el}
      </div>
    );
  }
}

export default App;
