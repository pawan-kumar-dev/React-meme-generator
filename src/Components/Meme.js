import React from "react";
import classes from "./Meme.module.css";
import Header from "./Header";
const Meme = (props) => {
     return (
          <div>
               <Header />
               <h1>Meme Generator App</h1>
               <form className={classes.form} onSubmit={props.handleSubmit}>
                    <input
                         type="text"
                         value={props.topText}
                         name="topText"
                         placeholder="Type a Top Text"
                         onChange={props.handleClick}
                    />
                    <input
                         type="text"
                         value={props.bottomText}
                         name="bottomText"
                         placeholder="Type a Bottom Text"
                         onChange={props.handleClick}
                    />
                    <button>Generate Meme</button>
               </form>
               <h3>Meme Image will be shown here</h3>
               <div className={classes.imgContainer}>
                    {props.renderImg !== "" && (
                         <img
                              className={classes.memeimg}
                              src={props.renderImg}
                              alt="Images"
                         />
                    )}
                    <h2 className={classes.topText}>{props.topText}</h2>
                    <h2 className={classes.bottomText}>{props.bottomText}</h2>
               </div>
          </div>
     );
};
export default Meme;
