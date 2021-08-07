import React , {UseState}  from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) =>{

    
     
    return(

        <div className={classes.ProductPreview}>
        <img src={props.currentPreviewImage}/>
   

    {

        props.showHeartBeatSection ?

        <div className={classes.HeartbeatSection}>
        <i class="fas fa-heartbeat"  >   </i>
        <p>  78 </p>
        </div>

        :
    
        <div className={classes.TimeSection}>
          <p>  {`${new Date().getHours()}:${new Date().getMinutes()}`} </p>
        </div>
    }
        
       </div>

    );
}
export default ProductPreview;