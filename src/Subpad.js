import React, { useContext } from 'react';
import { KeyContext } from './KeyContext';


const Subpad = (props) => {

    const [globalKeys, setGlobalKeys] = useContext(KeyContext);

    const on = `subpad-btn btn-on`;
    const off = `subpad-btn btn-off`;

    let sharpbtn = off;
    let flatbtn = off;
    let setter;

    if (globalKeys.homeToggle) {
        setter = setSubHome;
    }
    else {
        setter = setSubInput;
    }

    if (globalKeys.inputKeySub == '#') {
        sharpbtn = on;
    }
    else if (globalKeys.inputKeySub == '♭') {
        flatbtn = on;
    }

    function setSubInput(e) {
        if (globalKeys.inputKey) {
            let sub = e.target.id;
            setGlobalKeys((prev) => {
                prev.inputKeySub = sub;
                return ({ ...prev });
            })
        }
    }

    function setSubHome(e) {

        let sub = e.target.id;
        if (globalKeys.homeKey) {


            setGlobalKeys((prev) => {
                prev.homeKeySub = sub;
                return ({ ...prev });
            })
        }


    }

    return (
        <div className='subpad-container'>
            <div id='#' className={sharpbtn} onClick={setter}>
                <h1 id='#'>Sharp #</h1>
            </div>
            <div id='♭' className={flatbtn} onClick={setter}>
                <h1 id='♭'>Flat ♭</h1>
            </div>
        </div>
    )

}

export default Subpad;