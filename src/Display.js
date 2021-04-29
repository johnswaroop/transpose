import React, { useState, useContext } from 'react';
import { KeyContext } from './KeyContext';
const Display = (props) => {

    const [globalKeys, setGlobalKeys] = useContext(KeyContext);

    let output;
    let outputsub;

    if (globalKeys.outputKey) {

        output = globalKeys.outputKey;
    }
    else {

        if (globalKeys.homeToggle) {

            output = <p style={{ fontSize: '3rem' }}>Enter Home</p>
        }
        else {
            output = <p style={{ fontSize: '3rem' }}>Enter Key</p>
        }

    }



    return (

        <div className='output-key-container'>

            <div className='output-key-box'>
                <h1 className='output-key'>
                    {output}
                </h1>
                <h1 className='output-key-sub'>
                    {globalKeys.outputKeySub}
                </h1>
            </div>
        </div>

    )
}

export default Display
