import React, { Component } from 'react';
import MassCurry from '../../../images/Massaman-Curry.jpg'

class Soups extends Component {



  render() {
    return (
      <div className="Soups">
          <div className='MenuBox'>
        <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Tom Kha Gai </h2>
            <p>Coconut milk, chicken, lime leaf, lemongrass, galanga, mushrooms, green onions, & tomatoes</p>
            <h3>$10.95</h3>
          </div>
        <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Tom Yum Gai </h2>
            <p>Sweet & sour soup, shrimp, scallop, calamari, green mussels, mushrooms, onions, lime leaf, lemongrass, tomatoes, & green onions</p>
            <h3>$10.95</h3>
          </div>
        <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Tom Yum Seafood </h2>
            <p>Sweet & sour soup, shrimp, scallop, calamari, green mussels, mushrooms, onions, lime leaf, lemongrass, tomatoes, & green onions</p>
            <h3>$13.95</h3>
          </div>
        <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Tom Yum Goong</h2>
            <p>Sweet & sour soup, shrimp, scallop, calamari, green mussels, mushrooms, onions, lime leaf, lemongrass, tomatoes, & green onions</p>
            <h3>$13.95</h3>
          </div>
        </div>
      


      </div>
    );
  }
}

export default Soups;