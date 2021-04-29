import React, { useContext } from 'react';
import { KeyContext } from './KeyContext';


const Transpose = (props) => {

    const [globalKeys, setGlobalKeys] = useContext(KeyContext);

    let btnName;


    if (globalKeys.homeToggle) {
        btnName = 'Set HomeKey';



    }
    else {
        btnName = 'Transpose';
    }



    return (
        <div className='subpad-container'>
            <div id='transpose' className='subpad-btn btn-off' onClick={props.exe}>
                <h1>{btnName}</h1>
            </div>
        </div>
    )

}

export default Transpose;