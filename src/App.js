

import './style.css';
import { KeyContext } from './KeyContext'
import { useState } from 'react'
import Display from './Display'
import Subdisplay from './Subdisplay'
import Keypad from './Keypad'
import Subpad from './Subpad'
import Transpose from './Transpose'
import TransposeEngine from './logic'


function App() {

  const [globalKeys, setGlobalKeys] = useState({

    inputKey: '',
    inputKeySub: '',
    homeKey: 'D',
    homeKeySub: '',
    outputKey: '',
    outputKeySub: '',
    homeToggle: false

  });


  function executeInput() {

    if (globalKeys.inputKey) {
      let finalOutput = TransposeEngine(globalKeys.inputKey + globalKeys.inputKeySub, globalKeys.homeKey + globalKeys.homeKeySub);

      setGlobalKeys((prev) => {
        prev.outputKey = finalOutput[0];
        prev.outputKeySub = finalOutput[1];
        return ({ ...prev })
      })
    }

  }


  function executeHome() {

    if (globalKeys.homeKey) {
      setGlobalKeys((prev) => {

        prev.homeToggle = false;

        return ({ ...prev })
      })
    }

  }

  let execute;

  if (globalKeys.homeToggle) {

    execute = executeHome;

  }
  else {

    execute = executeInput;

  }





  return (


    <div className="App">
      <div className='container'>
        <KeyContext.Provider value={[globalKeys, setGlobalKeys]}>
          <Display />
          <Subdisplay />
          <Keypad />
          <Subpad />
          <Transpose exe={execute} />
        </KeyContext.Provider>
      </div>
    </div>

  );
}

export default App;
