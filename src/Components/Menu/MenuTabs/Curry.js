import React, { Component } from 'react';
import MassCurry from '../../../images/Massaman-Curry.jpg'
import RedCurry from '../../../images/Red-Curry.jpg'
import YellowCurry from '../../../images/Yellow-Curry.jpg'

class Curry extends Component {



  render() {
    return (
      <div className="Curry">
        <div className='MenuBox'>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Massaman Curry</h2>
            <p>Coconut milk, peanut sauce, potatoes & carrots topped w/ cashews</p>
            <h3>$9.95</h3>
          </div>
          <div className='MenuItem'>
          <img className='MenuItemPicture'src={YellowCurry} alt="bowl of yellow curry"/>
            <h2 className='MenuItemName'>Yellow Curry</h2>
            <p>Coconut milk, potatoes, carrots, onions, & bamboo</p>
            <h3>$9.95</h3>
          </div>
          <div className='MenuItem'> 
          <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Pineapple Curry</h2>
            <p>Coconut milk, bell peppers, onions, bamboo, lime leaf, & pineapple</p>
            <h3>$9.95</h3>
          </div>
          <div className='MenuItem'>
          <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Green Curry</h2>
            <p>Coconut milk, lime leaf, bell peppers, bamboo, onions, & zucchini</p>
            <h3>$9.95</h3>
          </div>
          <div className='MenuItem'>
          <img className='MenuItemPicture'src={RedCurry} alt="bowl of red curry"/>
            <h2 className='MenuItemName'>Red Curry</h2>
            <p>Coconut milk, bell peppers, onions, bamboo, zucchini, & lime leaf</p>
            <h3>$9.95</h3>
          </div>
          <div className='MenuItem'>
          <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Panang Curry</h2>
            <p>Coconut milk, lime leaf, bamboo, bell peppers, onions, zucchini, & eggplant</p>
            <h3>$9.95</h3>
          </div>
          <div className='MenuItem'>
          <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Pumpkin Curry</h2>
            <p>Coconut milk, pumpkin, onions, broccoli, & carrots</p>
            <h3>$9.95</h3>
          </div>
          <div className='MenuItem'>
          <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Beef Stew Curry</h2>
            <p>Coconut milk, potatoes, carrots, & peas</p>
            <h3>$9.95</h3>
          </div>
        </div>
      


      </div>
    );
  }
}

export default Curry;