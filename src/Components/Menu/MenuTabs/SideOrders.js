import React, { Component } from 'react';
import MassCurry from '../../../images/Massaman-Curry.jpg'

class SideOrders extends Component {



  render() {
    return (
      <div className="SideOrders">
         <div className='MenuBox'>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Extra Chicken, Pork, or Beef</h2>
            <p>Thai sticky rice in coconut sauce topped w/ mango</p>
            <h3>$2.00</h3>
          </div>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Extra Shrimp, Salmon, or Seafood Mix</h2>
            <p>Sweet, thin tortilla fried and topped w/ ice cream and sundae syrups</p>
            <h3>$3.00</h3>
          </div>
          <div className='MenuItem'> 
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Extra Tofu</h2>
            <p>Banana wrapped in wonton wrapper and deep fried; served with vanilla ice cream and topped w/ sundae syrups</p>
            <h3>$1.00</h3>
          </div>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Steamed Veggies</h2>
            <p>Thai sticky rice in coconut sauce topped w/ mango</p>
            <h3>$2.00</h3>
          </div>
          <div className='MenuItem'>
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Jasmine Rice</h2>
            <p>Sweet, thin tortilla fried and topped w/ ice cream and sundae syrups</p>
            <h3>$1.00</h3>
          </div>
          <div className='MenuItem'> 
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Brown Rice</h2>
            <p>Banana wrapped in wonton wrapper and deep fried; served with vanilla ice cream and topped w/ sundae syrups</p>
            <h3>$2.00</h3>
          </div>
          <div className='MenuItem'> 
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Sticky Rice</h2>
            <p>Banana wrapped in wonton wrapper and deep fried; served with vanilla ice cream and topped w/ sundae syrups</p>
            <h3>$1.50</h3>
          </div>
          <div className='MenuItem'> 
            <img className='MenuItemPicture'src={MassCurry} alt="bowl of massaman curry"/>
            <h2 className='MenuItemName'>Peanut Sauce</h2>
            <p>Banana wrapped in wonton wrapper and deep fried; served with vanilla ice cream and topped w/ sundae syrups</p>
            <h3>$0.50</h3>
          </div>
        </div>
      


      </div>
    );
  }
}

export default SideOrders;