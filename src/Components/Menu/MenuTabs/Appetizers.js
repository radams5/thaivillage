import React, { Component } from 'react';
import '../Menu.css'
import MassCurry from '../../../images/Massaman-Curry.jpg'
import SpringRolls from '../../../images/SpringRolls.jpg'
import ShrimpRolls from '../../../images/ShrimpRolls.jpg'
import Satay from '../../../images/Satay.jpg'


class Appetizers extends Component {



  render() {
    return (
      <div className="Appetizers">
        <div className='MenuBox'>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={SpringRolls} alt="plate of spring rolls"/>
            <h2 className='MenuItemName'>Deep Fried Spring Rolls (4)</h2>
            <p>Carrots, cabbage, & glass noodles wrapped in a wonton wrapper; served w/ sweet & sour sauce</p>
            <h3>$5.95</h3>
          </div>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Fresh rolls (4)</h2>
            <p>Rice noodles, carrots, & lettuce wrapped in rice paper; served w/ sweet & sour sauce</p>
            <h3>$5.95</h3>
          </div>
          <div className='MenuItem'> 
            <img className='MenuItemPicture'src={ShrimpRolls} alt="plate of shrimp rolls"/>
            <h2 className='MenuItemName'>Shrimp Rolls (6)</h2>
            <p>Shrimp wrapped in wonton wrapper; served w/ sweet & sour sauce</p>
            <h3>$7.95</h3>
          </div>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Cream Cheese Wontons (6)</h2>
            <p>Glass noodles, cabbage, & cream cheese; served w/ sweet & sour sauce</p>
            <h3>$6.95</h3>
          </div>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={Satay} alt="chicken satay"/>
            <h2 className='MenuItemName'>Chicken Satay (4)</h2>
            <p>Marinated chicken on skewers; served w/ peanut sauce</p>
            <h3>$7.95</h3>
          </div>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Curry Stuffed (4)</h2>
            <p>Chicken, potatoes, onions, green peas, & corn stuffed in a tortilla; served w/ fry sauce</p>
            <h3>$7.95</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Appetizers;