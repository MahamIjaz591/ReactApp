import React from "react";
import logo from './../Images/=.jpg';
import pic1 from './../Images/5.jpg';
import pic2 from './../Images/bundle.jpg';
import pic3 from './../Images/bundle2.jpg';
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    ft: {
      color: "black",
      paddingRight: "1rem",
      textDecoration:"none",
      float: "left",
      marginLeft:"100px",
    },

}));


const mystyle = {
   
    width:"100%",
    fontFamily: "Arial"
  };

  const mystyle1 = {
    
    height:"2000px",
   };

   const mystyle2 = {
    textAlign:"center",
    paddingTop:"1rem",
   };

   const prod = {
    width:"23%",
    float:"left",
    height:"300px",
    margin:"10px",
   };

   const img = {
    width:"100%",
    float:"left",
    height:"300px",
    margin:"10px",
   };

   const bundle={
    textAlign:"center",
    marginTop:"450px",
   };

   const footer={
    width:"100%",
    height:"90px",
    backgroundColor:"antiquewhite",
    marginTop:"450px",
    paddingTop:"30px",
   };

   
const HomePage = () => {
     const classes = useStyles();
    return ( <div style={mystyle1}>
        <img src={logo} style={mystyle} alt="Logo" />
        <div>
          <h1 style={mystyle2}>
            Best Selling Products
          </h1>
        </div>
        <div style={prod}>
        <img src={pic1} style={img} alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>EyeCream</h3>
        <p style={{marginLeft: "10px"}}>Rs.1,000.00</p>
        </div>

        <div style={prod}>
        <img src={pic1} style={img} alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>HandCream</h3>
        <p style={{marginLeft: "10px"}}>Rs.1,100.00</p>
        </div>

        <div style={prod} >
        <img src={pic1} style={img}alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>Moisturizer</h3>
        <p style={{marginLeft: "10px"}}>Rs.1,200.00</p>
        </div>

        <div style={prod} >
        <img src={pic1} style={img}  alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>Toner</h3>
        <p style={{marginLeft: "10px"}}>Rs.800.00</p>
        </div>

        <div>
          <h1 style={bundle}>
            Bundles
          </h1>
        </div>
        <div style={prod}>
        <img src={pic2} style={img} alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>EyeCream</h3>
        <p style={{marginLeft: "10px"}}>Rs.1,000.00</p>
        </div>

        <div style={prod}>
        <img src={pic3} style={img} alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>HandCream</h3>
        <p style={{marginLeft: "10px"}}>Rs.1,100.00</p>
        </div>

        <div style={prod} >
        <img src={pic2} style={img}alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>Moisturizer</h3>
        <p style={{marginLeft: "10px"}}>Rs.1,200.00</p>
        </div>

        <div style={prod} >
        <img src={pic3} style={img}  alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>Toner</h3>
        <p style={{marginLeft: "10px"}}>Rs.800.00</p>
        </div>

        <div style={footer}>
            <Typography variant="h6">
          <Link to="/" className={classes.ft}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6" >
          <Link to="/products" className={classes.ft}>
            Products
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products/new" className={classes.ft}>
            New Product
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/Reviews" className={classes.ft}>
            Reviews
          </Link>
        </Typography>
            <Typography variant="h6">
              <Link to="/login" className={classes.ft}>
                Login
              </Link>
            </Typography>
            <Typography variant="h6" >
              <Link to="/register" className={classes.ft}>
                Register
              </Link>
            </Typography>
            <div>

            </div>
        </div>

    </div> 



   
    
    )
}
 
export default HomePage;