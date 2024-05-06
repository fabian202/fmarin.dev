import React, { useState } from 'react';

type Option = 'rock' | 'paper' | 'scissors';

const options: Option[] = ['rock', 'paper', 'scissors'];

const rock = <pre>    _______<br />---'   ____)<br />      (_____)<br />      (_____)<br />      (____)<br />---.__(___)<br /></pre>

const paper = <pre>    ________<br />---'    ____)____<br />           ______)<br />          _______)<br />         _______)<br />---.__________)<br /></pre>

const scissors = <pre>    _______<br />---'   ____)____<br />          ______)<br />       __________)<br />      (____)<br />---.__(___)<br /></pre>

const rockLeft = <pre>  _______<br /> (____   '---<br />(_____)<br />(_____)<br /> (____)<br />  (___)__.---<br /></pre>

const paperLeft = <pre>      _______<br /> ____(____   '----<br />(______<br />(_______<br /> (_______<br />    (_________.---<br /></pre>

const scissorsLeft = <pre>       _______<br />  ____(____   '---<br /> (______<br /> (__________<br />      (____)<br />       (___)__.---<br /> </pre>

const getCPUOption = (): Option => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const determineWinner = (userOption: Option, cpuOption: Option): string => {
  if (userOption === cpuOption) return 'It\'s a tie!';
  if (
    (userOption === 'rock' && cpuOption === 'scissors') ||
    (userOption === 'paper' && cpuOption === 'rock') ||
    (userOption === 'scissors' && cpuOption === 'paper')
  ) {
    return 'You win!';
  }
  return 'CPU wins!';
};

const RPSGame: React.FC = () => {
  const [userOption, setUserOption] = useState<Option | null>(null);
  const [cpuOption, setCPUOption] = useState<Option | null>(null);
  const [result, setResult] = useState<string>('');

  const playGame = (option: Option) => {
    const cpuOption = getCPUOption();
    setUserOption(option);
    setCPUOption(cpuOption);
    setResult(determineWinner(option, cpuOption));
  };

  return (
    <div>
      <h1>Rock Paper Scissors Game</h1>
      <div>
        <button onClick={() => playGame('rock')}>Rock</button>
        <button onClick={() => playGame('paper')}>Paper</button>
        <button onClick={() => playGame('scissors')}>Scissors</button>
      </div>
      <div className='flex'>
        <div>
          {scissors}
          {rock}
          {paper}
        </div>
        <div>
          {scissorsLeft}
          {rockLeft}
          {paperLeft}
        </div>
      </div>
      


      {userOption && cpuOption && (
        <div>
          <p>You chose: {userOption}</p>
          <p>CPU chose: {cpuOption}</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default RPSGame;
