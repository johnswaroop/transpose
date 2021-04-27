

import './style.css';
import { KeyContext } from './KeyContext'
import { useState } from 'react'
import Display from './Display'
import Subdisplay from './Subdisplay'
import Keypad from './Keypad'
import Subpad from './Subpad'
import Transpose from './Transpose'


function App() {

  const [globalKeys, setGlobalKeys] = useState({

    inputKey: '',
    inputKeySub: '',
    homeKey: 'D',
    homeKeySub: '',
    outputKey: '',
    outputKeySub: '',

  });







  return (


    <div className="App">
      <div className='container'>
        <KeyContext.Provider value={[globalKeys, setGlobalKeys]}>
          <Display />
          <Subdisplay />
          <Keypad />
          <Subpad />
          <Transpose />
        </KeyContext.Provider>
      </div>
    </div>

  );
}

export default App;
