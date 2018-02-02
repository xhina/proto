import React, { PureComponent } from 'react';
import {TweenLite, Expo, Elastic} from 'gsap';
import indicator from './indicator.gif';
import IMAGES from './image-table';

export default class ImageBox extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      title:""
    }
  }

  componentDidMount() {
    const el = this.el;
    TweenLite.from(el, .7, {width:0,height:0,opacity:0});
    TweenLite.to(el, .7, {width:this.props.w, height:this.props.h, opacity:1, ease:Expo.easeOut, onComplete:this.loadImage.bind(this)});
  }

  loadImage() {
    let img = new Image();
    img.onload = (e) => {
      this.figure.style.width = this.el.style.width;
      this.figure.style.height = this.el.style.height;

      TweenLite.from(this.figure, .8, {opacity:0, scale:.9});
      TweenLite.to(this.figure, .8, {opacity:1, scale:1, ease:Expo.easeOut});
      TweenLite.to(this.el, .5, {backgroundColor:"#ffffff"});
      TweenLite.to(this.spinner, .2, {opacity:0});
      this.figure.src = e.target.src;
    }
    const idx = Math.floor(Math.random() * IMAGES.length);
    let url = IMAGES[idx] + "?" + Math.random() * 10000000;
    img.src = url;
    // this.setState({title:"IMAGE" + idx});
  }

  render() {
    return(
      <div ref={e=>this.el=e} className="box" style={{
        backgroundColor:this.props.color,
      }}>
        <div>
          <img id="img_box" src="" ref={e=>this.figure=e} />
          <img id="indicator" src={indicator} ref={e=>this.spinner=e} />
        </div>
        {/* <p>{this.state.title}</p> */}
      </div>
    );
  }
}
