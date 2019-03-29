import React, { Component } from 'react';
import MassCurry from '../../../images/Massaman-Curry.jpg'

class Desserts extends Component {



  render() {
    return (
      <div className="Desserts">
        <div className='MenuBox'>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Mango Sticky Rice</h2>
            <p>Thai sticky rice in coconut sauce topped w/ mango</p>
            <h3>$6.95</h3>
          </div>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Thai Pancake</h2>
            <p>Sweet, thin tortilla fried and topped w/ ice cream and sundae syrups</p>
            <h3>$7.95</h3>
          </div>
          <div className='MenuItem'> 
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Fried Banana w/ Ice Cream</h2>
            <p>Banana wrapped in wonton wrapper and deep fried; served with vanilla ice cream and topped w/ sundae syrups</p>
            <h3>$7.95</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Desserts;