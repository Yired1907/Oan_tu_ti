import React, { Component } from 'react'
import { connect } from 'react-redux'
class Ketquatrochoi extends Component {
    render() {
        return (
            <div>
                <div style={{ fontSize: '260%' }} className='display-4 text-warning'>{this.props.ketQua}</div>
                <div style={{ fontSize: '240%' }} className='display-4 text-success mt-5'>Số bàn thắng: <span className='text-warning'>{this.props.soBanThang}</span></div>
                <div style={{ fontSize: '240%' }} className='display-4 text-success mt-2'>Tổng số bàn chơi: <span className='text-warning'>{this.props.soBanChoi}</span></div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        ketQua: state.OanhTuXiReducer.ketQua,
        soBanThang: state.OanhTuXiReducer.soBanThang,
        soBanChoi: state.OanhTuXiReducer.soBanChoi,
    }
}
export default connect(mapStateToProps)(Ketquatrochoi)