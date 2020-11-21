import React from 'react';

class Staticprogress extends React.Component {
    constructor(props) {
      super(props);
      console.log(props)
      this.state = {
        showRides: true,
        items: [],
        rideDate: null,
        status: null
      };
    }

    handleClick(rideDate, startTime) {
      this.setState({showRides: !this.state.showRides});
      this.setState({
                      rideDate: rideDate,
                      status: startTime
                    });
      console.log("Button Clicked Early")
    } 

  
    componentDidMount() {
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
                <div>
                    <h1>{item.name}</h1>
                </div>
            
              ))}
            </div>         
      )
    }
  }

  
  export default Staticprogress