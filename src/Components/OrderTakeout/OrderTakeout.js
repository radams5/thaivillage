import React, { Component } from 'react';


class OrderTakeout extends Component {
  render() {
    return (
      <div className="OrderTakeout">
     <div>Takeout</div>
     <div>Takeout</div>
     <div>Takeout</div>
     <div>Takeout</div>
     <div>Takeout</div>
     <div>Takeout</div>
     <div>This Would be the odering page which lets you place an order for pickup</div>
     <div>Also would need buttons to add to cart from the menu component</div>
     <div>I would like an admin view that allows you to add new menu items and upload pictures or disable items temporarily</div>
     <div>AmazonS3 to upload pics of new items</div>
     <div>Stripe for payments</div>
     <div>Twilio to send updates when an order comes in</div>
     <div>Manage wait times, send alerts 15 minutes before an order</div>
      </div>
    );
  }
}

export default OrderTakeout;
