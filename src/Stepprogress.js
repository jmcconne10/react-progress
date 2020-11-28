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
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width="30"
                  src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
                />
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width="30"
                  src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                />
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width="30"
                  src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
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