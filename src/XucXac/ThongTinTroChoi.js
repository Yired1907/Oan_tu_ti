import React, { Component } from 'react'
import { connect } from 'react-redux';

class ThongTinTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="display-6 mt-2">BẠN CHỌN: <span className='text-danger'>{this.props.taiXiu ? 'TÀI' : 'XỈU'}</span></div>
                <div className="display-6 mt-2">BÀN THẮNG: <span className='text-success'>{this.props.soBanThang}</span></div>
                <div className="display-6 mt-2">TỔNG SỐ BÀN CHƠI: <span className='text-primary'>{this.props.tongSoBanChoi}</span></div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        soBanThang: state.GameXucXacReducer.soBanThang,
        taiXiu: state.GameXucXacReducer.taiXiu,
        tongSoBanChoi: state.GameXucXacReducer.tongSoBanChoi
    }
}

export default connect(mapStateToProps)(ThongTinTroChoi)