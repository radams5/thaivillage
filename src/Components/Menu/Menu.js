import React, { Component } from 'react';
import './Menu.css'
import Appetizers from'./MenuTabs/Appetizers'
import Salads from'./MenuTabs/Salads'
import Soups from'./MenuTabs/Soups'
import Noodles from'./MenuTabs/Noodles'
import Entrees from'./MenuTabs/Entrees'
import Curry from'./MenuTabs/Curry'
import Desserts from'./MenuTabs/Desserts'
import Drinks from'./MenuTabs/Drinks'
import SideOrders from'./MenuTabs/SideOrders'
import Specials from'./MenuTabs/Specials'



class Menu extends Component {
  constructor(){
    super()
    this.state = {
      menuTab: Appetizers
    }
  }
  
  HandleUpdateState(value){
    this.setState({
      menuTab: value
    })
    console.log(this.state.menuTab)
  }


  render() {
    
    const ConditionalComponent = this.state.menuTab
    // const buttonArray = [Appetizers, Salads, Soups, Noodles, Entrees, Curry, Desserts, Drinks, SideOrders, Specials]
    // const buttons = buttonArray.map( button => {
    // return <li onClick={() =>this.HandleUpdateState(button)}><button>{button.}</button></li>  
    // })
    return (
      <div className="Menu">

        <h1>MENU</h1>

        <div className='MenuTabs'>
          <ul>
            {/* {buttons} */}
            <li onClick={() =>this.HandleUpdateState(Appetizers)}><button  className='MenuButton'>Appetizers</button></li>            
            <li onClick={() =>this.HandleUpdateState(Salads)}><button  className='MenuButton'>Salads</button></li>       
            <li onClick={() =>this.HandleUpdateState(Soups)}><button  className='MenuButton'>Soups</button></li>            
            <li onClick={() =>this.HandleUpdateState(Noodles)}><button  className='MenuButton'>Noodles</button></li>            
            <li onClick={() =>this.HandleUpdateState(Entrees)}><button  className='MenuButton'>Entrées</button></li>    
          </ul>  
           <ul>      
            <li onClick={() =>this.HandleUpdateState(Curry)}><button  className='MenuButton'>Curry</button></li>            
            <li onClick={() =>this.HandleUpdateState(Desserts)}><button  className='MenuButton'>Desserts</button></li>            
            <li onClick={() =>this.HandleUpdateState(Drinks)}><button  className='MenuButton'>Drinks</button></li>            
            <li onClick={() =>this.HandleUpdateState(SideOrders)}><button  className='MenuButton'>Side Orders</button></li>            
            <li onClick={() =>this.HandleUpdateState(Specials)}><button className='MenuButton'>House Specials</button></li>            
          </ul>
        </div>

       < ConditionalComponent />


      </div>
    );
  }
}

export default Menu;