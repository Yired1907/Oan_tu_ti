import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        console.log(this.props.mangDatCuoc);
        return (
            <div className='text-canter Playergame'>
                <div className='theThink'>
                    <img className='mt-3' style={{ transform: 'rotate(320deg)', width: '55%', height: '80%' }}
                        src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
                        alt={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} />
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: '130px', height: '130px' }} src='./imgoanhtuxi/player.png' alt='./imgoanhtuxi/player.png'></img>

                <div className='row'>
                    {this.props.mangDatCuoc.map((item, index) => {
                        //Xét giá trị đặt cược và thêm viền cho item dc chọn
                        let border = {};
                        if (item.datCuoc) {
                            border = { border: '3px solid orange' };
                        }
                        return <div className='col-4' key={index}>
                            <button onClick={() => { this.props.datCuoc(item.ma) }} style={border} className='btnItem'>
                                <img width={35} height={35} src={item.hinhAnh} alt={item.hinhAnh} />
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.OanhTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)
