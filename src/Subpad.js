import React, { useContext } from 'react';
import { KeyContext } from './KeyContext';


const Subpad = (props) => {

    const [globalKeys, setGlobalKeys] = useContext(KeyContext);

    return (
        <div className='subpad-container'>
            <div id='#' className='subpad-btn'>
                <h1>Sharp #</h1>
            </div>
            <div id='♭' className='subpad-btn'>
                <h1>Flat ♭</h1>
            </div>
        </div>
    )

}

export default Subpad;