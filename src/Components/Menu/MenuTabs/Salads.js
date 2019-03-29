import React, { Component } from 'react';
import MassCurry from '../../../images/Massaman-Curry.jpg'

class Salads extends Component {



  render() {
    return (
      <div className="Salads">
        <div className='MenuBox'>
        <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Beef Waterfall </h2>
            <p>Marinated beef w/ red onions, cilantro, bell pepper, carrots & toasted rice powder in a spicy lime sauce</p>
            <h3>$9.95</h3>
          </div>
        <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Seafood Salad</h2>
            <p>Shrimp, scallop, calamari, green mussels, cucumbers, tomatoes, cashews, & celery in spicy sauce </p>
            <h3>$11.95</h3>
          </div>
        <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Papaya Salad</h2>
            <p>Fresh green papaya, carrots, & tomatoes topped w/ peanuts in a house special sauce</p>
            <h3>$8.95</h3>
          </div>
        <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Laab</h2>
            <p>Your choice of ground meat w/ lime leaf, cilantro, onions, mint, & rice powder in spicy sauce</p>
            <h3>$9.95</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Salads;