import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">

        <div className="NameDiv">
        <img src="../" alt=""/>
          <div className='NameBoxDiv'>
            <h1>INSPIRED THAI CUISINE</h1>
            <h3>Utah Valley's Best Thai Cuisine</h3>
          </div>         
        </div>
        
        <div className="MidPageDiv">
          <div className='IntroParagraphDiv'>
            <h3>THAI MEALS FOR DINE IN OR CARRY OUT</h3>
            <p>Thai Village is a genuine Thai style restaurant in Provo and American Fork that feature homemade meals family recipes. Thai Village specializes in signature dishes you would find from farmlands of Phayao, in the North to the markets in Central Thailand, to the oceans and fishing villages of Krabi in the South.</p>
          </div>
        </div>
        <div className="NavTabRenderDiv">
        </div>

      </div>
    );
  }
}

export default Home;