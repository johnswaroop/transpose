import React, { useState, useContext } from 'react';
import { KeyContext } from './KeyContext'


const Keypad = (props) => {

    let [globalKeys, setGlobalkey] = useContext(KeyContext);


    function KeypadClicker(e) {

        let clickedKey = e.target.id;
        if (clickedKey) {
            setGlobalkey((prev) => {
                prev.inputKey = clickedKey;
                prev.inputKeySub = '';
                prev.outputKey = '';
                prev.outputKeySub = '';

                return ({ ...prev })
            })
        }


    }

    let clickedKey = globalKeys.inputKey.charCodeAt(0);








    let keys = new Array();

    for (let i = 65; i <= 71; i++) {
        let key = String.fromCharCode(i);

        if (clickedKey == i) {
            keys.push(
                <div className='key-pressed' id={key}>
                    <h1 id={key}>{key}</h1>
                </div>
            )
        }
        else {
            keys.push(
                <div className='key' id={key}>
                    <h1 id={key}>{key}</h1>
                </div>
            )
        }

    }


    return (

        <div className='keypad-container' onClick={KeypadClicker} >

            {keys}
            <div className='key disable-click' id='X'>
                <h1>X</h1>
            </div>

        </div>
    )
}

export default Keypad;