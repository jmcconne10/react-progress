import React from 'react';
import ProgressBar from "./progress-bar.component";
import "./App.css";


class Staticprogress extends React.Component {
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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
          {items.map(item => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td><ProgressBar bgcolor={"#58ff33"} completed={item.completed} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }

  
  export default Staticprogress