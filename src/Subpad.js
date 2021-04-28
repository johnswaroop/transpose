import React, { useContext } from 'react';
import { KeyContext } from './KeyContext';


const Subpad = (props) => {

    const [globalKeys, setGlobalKeys] = useContext(KeyContext);

    const on = `subpad-btn btn-on`;
    const off = `subpad-btn btn-off`;

    let sharpbtn = off;
    let flatbtn = off;

    if (globalKeys.inputKeySub == '#') {
        sharpbtn = on;
    }
    else if (globalKeys.inputKeySub == '♭') {
        flatbtn = on;
    }

    function setSub(e) {
        if (globalKeys.inputKey) {
            let sub = e.target.id;
            setGlobalKeys((prev) => {
                prev.inputKeySub = sub;
                return ({ ...prev });
            })
        }
    }

    return (
        <div className='subpad-container'>
            <div id='#' className={sharpbtn} onClick={setSub}>
                <h1 id='#'>Sharp #</h1>
            </div>
            <div id='♭' className={flatbtn} onClick={setSub}>
                <h1 id='♭'>Flat ♭</h1>
            </div>
        </div>
    )

}

export default Subpad;