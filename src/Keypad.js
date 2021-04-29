import React, { useState, useContext } from 'react';
import { KeyContext } from './KeyContext'


const Keypad = (props) => {

    let [globalKeys, setGlobalkey] = useContext(KeyContext);
    let Clicker;

    if (globalKeys.homeToggle == false) {

        Clicker = KeypadClickerInput;
    }
    else {

        Clicker = KeypadClickerHome;

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

    function KeypadClickerInput(e) {

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

    function KeypadClickerHome(e) {

        let clickedKeyHome = e.target.id;
        console.log(clickedKeyHome);
        if (clickedKeyHome) {
            setGlobalkey((prev) => {
                prev.inputKey = '';
                prev.inputKeySub = '';
                prev.outputKey = '';
                prev.outputKeySub = '';
                prev.homeKey = clickedKeyHome;
                prev.homeKeySub = '';
                return ({ ...prev })
            })
        }


    }


    return (

        <div className='keypad-container' onClick={Clicker} >

            {keys}
            <div className='key' id='X' onClick={() => {
                window.location.reload();
            }}>
                <h1>X</h1>
            </div>

        </div>
    )
}

export default Keypad;