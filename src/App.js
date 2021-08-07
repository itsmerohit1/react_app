// import logo from './logo.svg';

import React , {Component } from 'react';
// importnp './App.css';

import classes from './App.module.css';
import ProductData from './ProductData';
import ProductPreview from './Components/ProductPreview';
import ProductDetails from './Components/ProductDetails';
import Topbar from './Components/Topbar';

class  App extends Component{


  state ={
    productData : ProductData ,
    currentPreviewImage : 'https://imgur.com/iOeUBV7.png',
    showHeartBeatSection: false
    
  }

  shouldComponentUpdate(nextProps, nextState){
    // console.log('Next state', nextState);
    // console.log('this state', this.state);
    if(nextState.currentPreviewImage ==this.state.currentPreviewImage && nextState.showHeartBeatSection==this.state.productData)return false;
    else return true;
  }

  onCheckHeartClick = (pos) =>{

    if(pos%2==0)this.setState({showHeartBeatSection:false})
    else this.setState({showHeartBeatSection:true})

  }

   onColorOptionClick = (pos) =>{
     
   this.setState({currentPreviewImage:this.state.productData.colorOptions[pos].imageUrl});

   }

  render(){
    console.log("render called");

  return (
 <div className="App">
   
     <Topbar/>
     
     
   <div className={classes.MainContainer}>

     <div className={classes.ProductPreview}>
         <ProductPreview currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection = {this.state.showHeartBeatSection}
        
         />
     </div>
       
      <div className={classes.ProductData}>
          <ProductDetails data= {this.state.productData} onColorOptionClick ={this.onColorOptionClick} onCheckHeartClick ={this.onCheckHeartClick}  />
      </div>

    </div>

 </div>
  )
  
  }
  
}


export default App;
