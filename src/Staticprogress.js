import React from 'react';
import ProgressBar from "./progress-bar.component";

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
      fetch("http://hailinghails.com/progress.json")
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

                    <table>
                    <tbody>
                    <tr>
                        <td>
                        <h1> {item.name} </h1>
                        </td>
                        <td>
                        <ProgressBar bgcolor={"#58ff33"} completed={item.completed} />
                        </td>
                    </tr>
                    </tbody>
                    </table>
            
              ))}
            </div>         
      )
    }
  }

  
  export default Staticprogress