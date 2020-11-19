import React, { Component } from "react";
import classes from "./App.module.css";
import Meme from "./Components/Meme";
import Greeting from "./Components/Greetings";
class App extends Component {
     constructor() {
          super();
          this.state = {
               isLoading: true,
               topText: "",
               bottomText: "",
               renderImg: "",
               allImg: [],
          };
     }
     componentDidMount = () => {
          setTimeout(() => {
               fetch("https://api.imgflip.com/get_memes")
                    .then((response) => response.json())
                    .then((response) => {
                         const { memes } = response.data;
                         this.setState({
                              allImg: memes,
                              isLoading: false,
                         });
                    });
          }, 1500);
     };
     handleClick = (e) => {
          const { name, value } = e.target;
          this.setState({
               [name]: value,
          });
     };
     handleSubmit = (e) => {
          e.preventDefault();
          const randomimage = Math.floor(
               Math.random() * this.state.allImg.length
          );
          const randomMeme = this.state.allImg[randomimage].url;
          this.setState({
               renderImg: randomMeme,
          });
     };
     render() {
          return this.state.isLoading === true ? (
               <div className={classes.load}>
                    <h1>
                         <center>Meme Generator with React</center>
                    </h1>
               </div>
          ) : (
               <div className={classes.App}>
                    <Greeting />
                    <Meme
                         handleClick={this.handleClick}
                         handleSubmit={this.handleSubmit}
                         topText={this.state.topText}
                         bottomText={this.state.bottomText}
                         renderImg={this.state.renderImg}
                    />
               </div>
          );
     }
}
export default App;
