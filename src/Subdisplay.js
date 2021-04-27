import React, { useState, useContext } from 'react'
import { KeyContext } from './KeyContext'

const Subdisplay = (props) => {

    let [globalKeys, setGlobalKeys] = useContext(KeyContext);

    return (
        <div className='subdisplay-container'>
            <div className='input-key-container'>

                <h1 className='input-key'>{globalKeys.inputKey}</h1>
                <h1 className='input-key-sub'>{globalKeys.inputKeySub}</h1>

            </div>
            <div className='home-key-container'>

                <h1 className='home-key'>{globalKeys.homeKey}</h1>
                <h1 className='home-key-sub'>{globalKeys.homeKeySub}</h1>

            </div>
        </div>
    )
}

export default Subdisplay;