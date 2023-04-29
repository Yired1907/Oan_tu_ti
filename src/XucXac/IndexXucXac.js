import React, { Component } from 'react'
import './IndexXucXac.css'
import XucXac from './XucXac'
import ThongTinTroChoi from './ThongTinTroChoi'
import { connect } from 'react-redux'
import { motion } from "framer-motion"
class IndexXucXac extends Component {
    render() {
        return (
            <div className='backgroudgame'>
                <div className='title-game text-center mt-5 display-4'>
                    GAME ĐỔ XÚC XẮC
                </div>
                <div className='row text-center mt-5'>
                    <div className='col-5'>
                        <motion.button whileTap={{ scale: 0.8 }} className='btnGame' onClick={() => { this.props.datCuoc(true); }} >TÀI</motion.button>
                    </div>
                    <div className='col-2'>
                        <XucXac />
                    </div>
                    <div className='col-5'>
                        <motion.button whileTap={{ scale: 0.8 }} className='btnGame' onClick={() => { this.props.datCuoc(false); }} >XỈU</motion.button>
                    </div>
                    <div className='Thongtintrochoi text-center'>
                        <ThongTinTroChoi />

                        <motion.button whileTap={{ scale: 0.8 }} onClick={() => this.props.PlayGame()} className='btn btn-block btn-warning btn-lg p-3 display-4 mt-5'>PLAY GAME NOW</motion.button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            //Tạo action Tài Xỉu
            dispatch(action);
        },
        PlayGame: () => {
            let action = {
                type: 'PLAY_GAME'
            }
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(IndexXucXac)

