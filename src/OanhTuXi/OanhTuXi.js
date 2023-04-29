import React, { Component } from 'react'
import './OanhTuXi.css'
import Player from './Player'
import Computer from './Computer'
import Ketquatrochoi from './Ketquatrochoi'
import { connect } from 'react-redux'

class OanhTuXi extends Component {
    render() {
        return (
            <div className='gameOanhTuXi'>
                <div className='row text-center mt-5 '>
                    <div className='col-4'>
                        <Player />
                    </div>
                    <div className='col-4'>
                        <Ketquatrochoi />
                        <button onClick={() => { this.props.Playergame() }} className='btn btn-block btn-outline-warning btn-lg mt-4'>Play game</button>
                    </div>
                    <div className='col-4'>
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        Playergame: () => {
            let count = 0;
            //Khai báo hàm lặp đi lặp lại
            let randomComuterItem = setInterval(() => {
                dispatch({
                    type: 'RAMDOM'
                })
                count++;
                if (count >= 10) {
                    //DỪng hàm setInterval
                    clearInterval(randomComuterItem)
                    dispatch({
                        type: 'KET_QUA',
                    })
                }
            }, 100)
        }
    }
}
export default connect(null, mapDispatchToProp)(OanhTuXi)