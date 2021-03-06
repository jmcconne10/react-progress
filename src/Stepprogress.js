import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

class StepProgressBar extends React.Component {
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
    fetch("https://jmcconnellportfolio.com/updates.json")
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
      <table className="tableAnimated">
      <thead >
        <tr>
          <th>Name</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
          {items.map(item => (
            <tr key={item.name}>
            <td className="NameColumn">{item.name}</td>
            <td className="ProgressColumn"> 
              <ProgressBar
            percent={item.completed}
            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
          >
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  src={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width="40"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Animhorse.gif"
                />
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  src={ accomplished ? "https://upload.wikimedia.org/wikipedia/commons/e/e3/Animhorse.gif" : "https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851" }
                  width="40"
                />
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width="40"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Animhorse.gif"
                />
              )}
            </Step>
          </ProgressBar>
            </td>
            </tr>
          ))}

        </tbody>
        </table> 
    );
  }
}
export default StepProgressBar