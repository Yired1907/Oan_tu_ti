const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './imgoanhtuxi/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './imgoanhtuxi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './imgoanhtuxi/bao.png', datCuoc: false },
    ],
    ketQua: "I'm iron man!!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './imgoanhtuxi/keo.png', datCuoc: false }
}

const OanhTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            // Restet mảng cược
            let mangCuocUpdate = [...state.mangDatCuoc];
            //Tạo ra mảng cược mới từ mảng cược cũ  và action. maCuoc do người dùng truyền lên
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state }
        }

        case 'RAMDOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return { ...state }
        }
        case 'KET_QUA': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hòa!!!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Hẻo rồi!!!';
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = 'Đỉnh quá bro ơi!!!';
                    }
                    ; break;
                case 'bua':
                    if (computer.ma === 'bua') {
                        state.ketQua = 'Hòa nhau!';
                    } else if (computer.ma === 'bao') {
                        state.ketQua = 'Thua rồi!!!';
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = 'Đỉnh quá!!!';
                    }; break;
                case 'bao':
                    if (computer.ma === 'bao') {
                        state.ketQua = 'Hòa hòa!!!';
                    } else if (computer.ma === 'keo') {
                        state.ketQua = 'Thua rồi!!!';
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = 'Wow, Đỉnh quá!!!';
                    }; break;
                default: state.ketQua = 'Wow, Đỉnh quá!!!';
                    return { ...state }
            }
        }
            state.soBanChoi += 1;
            return { ...state }
        default: return { ...state }
    }
}

export default OanhTuXiReducer;