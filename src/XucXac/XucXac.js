import React, { Component } from 'react'
import { connect } from 'react-redux';

class XucXac extends Component {

    renderXucXac = () => {
        //Lấy props từ reducer về
        return this.props.mangXucXac.map((xucXac, index) => {
            return <img key={index} className="me-2" style={{ width: '35px', height: '35px' }} src={xucXac.hinhAnh} alt={xucXac.hinhAnh} />
        })
    }
    render() {
        return (
            <div>
                {this.renderXucXac()}
            </div>
        )
    }
}

//Hàm lấy state từ redux về thành props của componet
const mapStateToProps = state => {
    return {
        mangXucXac: state.GameXucXacReducer.mangXucXac
    }
}
export default connect(mapStateToProps)(XucXac)
