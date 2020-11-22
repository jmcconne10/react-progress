import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

class Animatedprogress extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
          items: []
        };
      }
  
      componentDidMount() {
        this.timer = setInterval(()=> this.getItems(), 1000);
      }
    
      componentWillUnmount() {
        this.timer = null;
      }
  
      getItems() {
        fetch("https://jmcconnellportfolio.com/progress.json")
          .then(res => res.json())
          .then(
            result => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            error => {
              this.setState({
                isLoaded: true,
                error: error
                
              });
            }
          );
     
      }
  
      render() {
        const { error, isLoaded, items } = this.state;
     
        return ( 
              <div>
                    {items.map(item => (

                        <ProgressBar 
                        percent={item.completed} 
                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" 
                        />   
                                    
                    ))}
              </div>         
        )
      }
    }
  

export default Animatedprogress