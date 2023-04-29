import React, { Component } from 'react'
import { connect } from 'react-redux'
class Computer extends Component {
    render() {
        // console.log(this.props);
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -25px;}
            25% {top: 26px;}
            50% {top: -25px;}
            75% {top: 26px;}
            100% {top: 0;}
          }`

        return (
            <div className='text-canter Playergame'>
                <style>
                    {keyframe}
                </style>
                <div className="theThink" style={{ position: 'relative' }}>
                    <img style={{
                        position: 'absolute',
                        left: '28%',
                        animation: `randomItem${Date.now()} 0.5s`,
                        transform: 'rotate(320deg)'
                    }} className="mt-3" width={100} height={100} src={this.props.Computer.hinhAnh} alt={this.props.Computer.hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: '130px', height: '130px' }} src='./imgoanhtuxi/playerComputer.png' alt='./imgoanhtuxi/playerComputer.png'></img>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        Computer: state.OanhTuXiReducer.computer
    }
}
export default connect(mapStateToProps)(Computer)
