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
    return (
      <div className="Menu">

        <h1>MENU</h1>

        <div className='MenuTabs'>
          <ul>
            <li onClick={() =>this.HandleUpdateState(Appetizers)}><button>Appetizers</button></li>            
            <li onClick={() =>this.HandleUpdateState(Salads)}><button>Salads</button></li>       
            <li onClick={() =>this.HandleUpdateState(Soups)}><button>Soups</button></li>            
            <li onClick={() =>this.HandleUpdateState(Noodles)}><button>Noodles</button></li>            
            <li onClick={() =>this.HandleUpdateState(Entrees)}><button>Entrées</button></li>    
          </ul>  
           <ul>      
            <li onClick={() =>this.HandleUpdateState(Curry)}><button>Curry</button></li>            
            <li onClick={() =>this.HandleUpdateState(Desserts)}><button>Desserts</button></li>            
            <li onClick={() =>this.HandleUpdateState(Drinks)}><button>Drinks</button></li>            
            <li onClick={() =>this.HandleUpdateState(SideOrders)}><button>Side Orders</button></li>            
            <li onClick={() =>this.HandleUpdateState(Specials)}><button>House Specials</button></li>            
          </ul>
        </div>

       < ConditionalComponent />


      </div>
    );
  }
}

export default Menu;