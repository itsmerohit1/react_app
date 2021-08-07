
import React ,{useState}   from "react"
import classes from './ProductDetails.module.css';

//fuyf
const ProductDetails = (props) =>{
   
    //color options    choose

       const [x,setx]= useState(0);
       const[x1,setx1]=useState(0);

    const colorOptions = props.data.colorOptions.map((item, pos)=>{
     
        const classArr= [classes.ProductImage]

        
         
         console.log("x : ",x);

         const clicked =(pos)=>{
             setx(pos);
              
                 props.onColorOptionClick(pos);
            
         }
 
        if(pos==x){
            classArr.push(classes.SelectedProductImage );
        }
        else {

        }
    
        return (
            <img  key = {pos} className={classArr.join(' ')} src ={item.imageUrl} alt ={item.styleName}  onClick ={ ()=> clicked(pos)}   />
        );
    })

     // FeatureList

     const featureList = props.data.featureList.map((item,pos)=>{
       const classArr = [classes.FeatureItem]
       
       const clicked1 = (pos) =>{
        setx1(pos);
        props.onCheckHeartClick(pos);
       }

       if(pos==x1){
           classArr.push(classes.SelectedFeatureItem);
       }
        return (
            <button key={pos} className={classArr.join(' ')} onClick = {()=>clicked1(pos)} > {item}</button>
        );
     })




return (
  
<div className={classes.ProductData}>

<h1 className= {classes.ProductTitle}> {props.data.title}</h1> 
<p className={classes.ProductDescription}>{props.data.description}</p>
<h3 className={classes.SectionHeading}>Select Color</h3>

<div>  {colorOptions}  </div>

<div> <h3 className={classes.SectionHeading}>Features </h3>   </div>

<div>   {featureList}  </div>

 <div>   <button  className={classes.BuyNow}> Buy Now</button>    </div>

</div>
    )
    }

    export default ProductDetails;