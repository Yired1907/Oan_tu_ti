import React, { useState } from 'react';
import './OanhTuXi.css';
import Player from './Player';
import Computer from './Computer';
import Ketquatrochoi from './Ketquatrochoi';
import { connect } from 'react-redux';

function OanhTuXi(props) {
    const [lastClickTime, setLastClickTime] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    function handleClick() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastClickTime;
        if (elapsedTime >= 4 * 1000) { // 4 seconds in milliseconds
            // Allow button click
            props.Playergame();
            setLastClickTime(currentTime);
            setButtonDisabled(true);
            setTimeout(() => {
                setButtonDisabled(false);
            }, 0.5 * 800);
        } else {
            // Disallow button click
            // alert(`Please wait ${4 - Math.floor(elapsedTime / 1000)} more seconds before clicking again.`);
        }
    }

    return (
        <div className='gameOanhTuXi'>
            <div className='row text-center mt-5 '>
                <div className='col-4'>
                    <Player />
                </div>
                <div className='col-4'>
                    <Ketquatrochoi />
                    <button onClick={handleClick} className='btn btn-block btn-outline-warning btn-lg mt-4' disabled={buttonDisabled}>Play game</button>
                </div>
                <div className='col-4'>
                    <Computer />
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProp = (dispatch) => {
    return {
        Playergame: () => {
            let count = 0;
            //Khai báo hàm lặp đi lặp lại
            let randomComuterItem = setInterval(() => {
                dispatch({
                    type: 'RAMDOM'
                });
                count++;
                if (count >= 10) {
                    //Dừng hàm setInterval
                    clearInterval(randomComuterItem);
                    dispatch({
                        type: 'KET_QUA',
                    });
                }
            }, 100);
        }
    };
};

export default connect(null, mapDispatchToProp)(OanhTuXi);
