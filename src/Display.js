import React, { useState, useContext } from 'react';
import { KeyContext } from './KeyContext';
const Display = (props) => {

    const [globalKeys, setGlobalKeys] = useContext(KeyContext);




    return (

        <div className='output-key-container'>

            <div className='output-key-box'>
                <h1 className='output-key'>
                    {globalKeys.outputKey}
                </h1>
                <h1 className='output-key-sub'>
                    {globalKeys.outputKeySub}
                </h1>
            </div>
        </div>

    )
}

export default Display
