import React, { useState, useRef, useEffect } from 'react';

type Option = 'rock' | 'paper' | 'scissors';

const options: Option[] = ['rock', 'paper', 'scissors'];

const rock: React.JSX.Element = <pre>    _______<br />---'   ____)<br />      (_____)<br />      (_____)<br />      (____)<br />---.__(___)<br /></pre>

const paper: React.JSX.Element = <pre>    ________<br />---'    ____)____<br />           ______)<br />          _______)<br />         _______)<br />---.__________)<br /></pre>

const scissors: React.JSX.Element = <pre>    _______<br />---'   ____)____<br />          ______)<br />       __________)<br />      (____)<br />---.__(___)<br /></pre>

const rockLeft: React.JSX.Element = <pre>  _______<br /> (____   '---<br />(_____)<br />(_____)<br /> (____)<br />  (___)__.---<br /></pre>

const paperLeft: React.JSX.Element = <pre>      _______<br /> ____(____   '----<br />(______<br />(_______<br /> (_______<br />    (_________.---<br /></pre>

const scissorsLeft: React.JSX.Element = <pre>       _______<br />  ____(____   '---<br /> (______<br /> (__________<br />      (____)<br />       (___)__.---<br /> </pre>

const optionArt = [{
  option: 'rockUser',
  element: rock
}, {
  option: 'paperUser',
  element: paper
}, {
  option: 'scissorsUser',
  element: scissors
}, {
  option: 'rockCPU',
  element: rockLeft
}, {
  option: 'paperCPU',
  element: paperLeft
}, {
  option: 'scissorsCPU',
  element: scissorsLeft
}]

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
  const [userArt, setUserArt] = useState<React.JSX.Element>();
  const [CPUArt, setCPUArt] = useState<React.JSX.Element>();
  const [result, setResult] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const playGame = (option: Option) => {
    const cpuOption = getCPUOption();
    setUserOption(option);
    setCPUOption(cpuOption);

    setUserArt(findArt(`${option}User`))
    setCPUArt(findArt(`${cpuOption}CPU`))

    setResult(determineWinner(option, cpuOption));
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue.toLowerCase());
  };

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault()

    playGame(findByFirstLetterOrWord(inputValue))

    setInputValue('')
  };

  const findByFirstLetterOrWord = (searchTerm: string): Option => {
    return (
      options.find(
        (option) => option.startsWith(searchTerm) || option === searchTerm
      ) || options[0]
    );
  };

  const findArt = (option: string): React.JSX.Element => {
    return optionArt.find((value) => value.option === option)?.element || <div></div>
  }

  const handleOnBlur = () => {
    playGame(findByFirstLetterOrWord(inputValue))

    setInputValue('')
  }

  return (
    <div>
      <h1>Rock Paper Scissors Game</h1>      
      <div className="py-3">
        Available commands:
        <ul className="pl-6">
          <li>- r: Rock.</li>
          <li>- p: Paper.</li>
          <li>- s: Scissors.</li>
          <li>- exit: Close this window.</li>
        </ul>
        Start typing to play.
      </div>

      {userOption && cpuOption && (
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='pr-4'>
              {/* You chose: {userOption} */}
              {userArt}
            </div>
            <div>
              {CPUArt}
              {/* <p>CPU chose: {cpuOption}</p> */}
            </div>
          </div>
          <div>
            <p>{result}</p>
          </div>
          
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2">
          <span className="text-black">play@bash</span>
          <span className="text-blue-400">$</span>
          <input
            type="text"
            value={inputValue}
            className="bg-transparent border-none focus:outline-none w-full"
            placeholder="Type your command here (r, p, s)"
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            ref={inputRef as React.MutableRefObject<HTMLInputElement>}
          />
        </div>
      </form>
    </div>
  );
};

export default RPSGame;
