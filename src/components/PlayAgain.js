import React from 'react';
import Button from 'react-button-component';

const CustomizedButton = Button.extend`
  color: #FFF;
  border: none;
  border-radius: 5px;
  background: linear-gradient(70deg, #283655, #283655);
  border-bottom: 5px solid #1e1f26;
`;

const PlayAgain = props => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: props.gameStatus === 'lost' ? 'white' : 'white' }}>
      {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
    </div>
    <CustomizedButton onClick={props.onClick}>Play Again</CustomizedButton>
  </div>
);

export default PlayAgain;
