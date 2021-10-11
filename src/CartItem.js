import React from "react";

class CartItem extends React.Component {
    constructor (){
        super();
        this.state={
            price:999,
            tittle:'Phone',
            qty:1,
            img:''
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
       console.log('this.state',this.state); 
    }
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image}/>
        </div>
        <div className="right-block">
          <div style={{fontSize:25}}>{this.state.tittle}</div>
          <div style={{color :'#777'}}> RS {this.state.price}</div>
          <div style={{color : '#777'}}>{this.state.qty}</div>
          <div className="cart-item-actions"></div>
          <img alt="increase" 
          className="action-icons" 
          src="https://cdn-icons.flaticon.com/png/512/3524/premium/3524388.png?token=exp=1633940723~hmac=55d4f90e67ab7dd8d220f27192e3d33c" 
          onClick={this.increaseQuantity}
          />
          <img alt="decrease" 
          className="action-icons" 
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
          />
          <img alt="delete" 
          className="action-icons" 
          src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1633940749~hmac=b32a45207dd1017899d0bcd0567d7a8d" 
          />
        </div>
      </div>
    );
  }
}
const styles={
    image : {
        height: 110,
        width: 110,
       borderRadius: 4,
       background: '#ccc'
    }
}
export default CartItem;
