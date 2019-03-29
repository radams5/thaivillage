import React, { Component } from 'react';
import MassCurry from '../../../images/Massaman-Curry.jpg'

class Drinks extends Component {



  render() {
    return (
      <div className="Drinks">
        <div className='MenuBox'>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Thai Iced Tea</h2>
            <p>Thai sticky rice in coconut sauce topped w/ mango</p>
            <h3>$1.95</h3>
          </div>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Thai Iced Coffee</h2>
            <p>Sweet, thin tortilla fried and topped w/ ice cream and sundae syrups</p>
            <h3>$2.95</h3>
          </div>
          <div className='MenuItem'> 
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Coconut Juice</h2>
            <p>Banana wrapped in wonton wrapper and deep fried; served with vanilla ice cream and topped w/ sundae syrups</p>
            <h3>$7.95</h3>
          </div>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Coconut Juice</h2>
            <p>Thai sticky rice in coconut sauce topped w/ mango</p>
            <h3>$1.95</h3>
          </div>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Mango Delight (SEASONAL)</h2>
            <p>Sweet, thin tortilla fried and topped w/ ice cream and sundae syrups</p>
            <h3>$3.95</h3>
          </div>
          <div className='MenuItem'> 
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Pineapple Delight (SEASONAL)</h2>
            <p>Banana wrapped in wonton wrapper and deep fried; served with vanilla ice cream and topped w/ sundae syrups</p>
            <h3>$3.95</h3>
          </div>
          <div className='MenuItem'> 
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Ginger, Green, or Jasmin Tea</h2>
            <p>Banana wrapped in wonton wrapper and deep fried; served with vanilla ice cream and topped w/ sundae syrups</p>
            <h3>$1.25</h3>
          </div>
          <div className='MenuItem'> 
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Soft Drink </h2>
            <p>Banana wrapped in wonton wrapper and deep fried; served with vanilla ice cream and topped w/ sundae syrups</p>
            <h3>$1.50</h3>
          </div>
        </div>
      


      </div>
    );
  }
}

export default Drinks;