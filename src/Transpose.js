import React, { useContext } from 'react';
import { KeyContext } from './KeyContext';


const Transpose = (props) => {

    const [globalKeys, setGlobalKeys] = useContext(KeyContext);

    return (
        <div className='subpad-container'>
            <div id='transpose' className='subpad-btn'>
                <h1>Transpose</h1>
            </div>
        </div>
    )

}

export default Transpose;