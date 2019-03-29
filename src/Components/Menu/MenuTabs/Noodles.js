import React, { Component } from 'react';
import PadSeew from '../../../images/PadSeew.jpg'
import PadThai from '../../../images/PadThai.jpg'

class Noodles extends Component {



  render() {
    return (
      <div className="Noodles">
        <div className='MenuBox'>
          <div className='MenuItem'>
          <img className='MenuItemPicture'src={PadThai} alt="plate of pad thai"/>
            <h2 className='MenuItemName'>Pad Thai</h2>
            <p>Rice noodles w/ chicken, shrimp, eggs, onions, & bean sprouts in tamarind sauce</p>
            <h3>$9.95</h3>
          </div>
          <div className='MenuItem'>
          <img className='MenuItemPicture'src={PadSeew} alt="plate of pad seew"/>
            <h2 className='MenuItemName'>Pad Se-ew</h2>
            <p>Wide noodles w/ scrambled eggs, onions, carrots cabbage, & broccoli in soy sauce</p>
            <h3>$9.95</h3>
          </div>
          <div className='MenuItem'> 
            <div className='MenuItemPicture'></div>
            <h2 className='MenuItemName'>Spicy Noodles</h2>
            <p>Wide noodles w/ chili peppers, basil, scrambled eggs, baby corn, onions, cabbage, carrots zucchini, & broccoli in spicy siracha sauce </p>
            <h3>$9.95</h3>
          </div>
          <div className='MenuItem'>
            <div className='MenuItemPicture'></div>
            <h2 className='MenuItemName'>Pad Woon Sen</h2>
            <p>Glass noodles w/ scrambled eggs, baby corn, mushrooms, carrots, cabbage, celery, zucchini, & broccoli in a house special soy sauce</p>
            <h3>$9.95</h3>
          </div>
          <div className='MenuItem'>
            <div className='MenuItemPicture'></div>
            <h2 className='MenuItemName'>Laad Nah</h2>
            <p>Wide noodles w/ scrambled eggs, broccoli, carrots, & onions, in a house special soy sauce</p>
            <h3>$10.95</h3>
          </div>
          <div className='MenuItem'>
            <div className='MenuItemPicture'></div>
            <h2 className='MenuItemName'>Noodle Soup</h2>
            <p>Rice noodles w/ onions, bean sprouts, & beef in a flavored broth</p>
            <h3>$9.95</h3>
          </div>
          <div className='MenuItem'>
            <div className='MenuItemPicture'></div>
            <h2 className='MenuItemName'>Sweet & Sour Noodles</h2>
            <p>Wide noodles w/ scrambled eggs, baby corn, carrots, zucchini, celery, cabbage, onions, & broccoli in a sweet & sour sauce </p>
            <h3>$9.95</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Noodles;