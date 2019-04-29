import React, { Component } from "react";
import "./style.css";
import FriendCard from "../FriendCard";
import Nav from "../Nav";
import friends from "../../friends.json";



function randomizePictures(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class Body extends Component {
  //Set this.state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Sashay away!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let randomizedPictures = randomizePictures(friends);
    this.setState({ friends: randomizedPictures });
  };

  render () {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12">
            <div className="panel panel-default">
  
              <Nav
              title="Drag Queen Memory Game"
              score={this.state.currentScore}
              topScore={this.state.topScore}
              rightWrong={this.state.rightWrong}
              />
  

  
              {this.state.friends.map(friend => (
                  <FriendCard
                    key={friend.id}
                    handleClick={this.handleClick}
                    handleIncrement={this.handleIncrement}
                    handleReset={this.handleReset}
                    handleShuffle={this.handleShuffle}
                    id={friend.id}
                    image={friend.image}
                  />
              ))}
            </div>
        </div>
    </div>
    )
  }
}

export default Body;
