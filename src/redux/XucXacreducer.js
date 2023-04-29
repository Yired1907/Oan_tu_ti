const stateDefault = {
    taiXiu: true,//Tài là true, Xỉu là false  
    mangXucXac: [
        { ma: 1, hinhAnh: './imgXuc_Xac/1.png' },
        { ma: 1, hinhAnh: './imgXuc_Xac/1.png' },
        { ma: 1, hinhAnh: './imgXuc_Xac/1.png' }
    ],
    soBanThang: 0,
    tongSoBanChoi: 0
}
const GameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC':
            state.taiXiu = action.taiXiu;
            return { ...state }

        case 'PLAY_GAME':
            {
                let mangXucXacNgauNhien = [];
                for (let i = 0; i < 3; i++) {
                    //Mỗi lần lặp ramdom ra số ngẫu nhiên 1->6
                    let soNgauNghien = Math.floor(Math.random() * 6) + 1;
                    let XucXacNgauNhien = { ma: soNgauNghien, hinhAnh: `./imgXuc_Xac/${soNgauNghien}.png` }
                    mangXucXacNgauNhien.push(XucXacNgauNhien);
                }
                state.mangXucXac = mangXucXacNgauNhien;
                //xử lý  tăng bàn chơi
                state.tongSoBanChoi += 1;

                // XỬ lý số bàn thắng 
                let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, XucXac, index) => {
                    return tongDiem += XucXac.ma;
                }, 0);

                if ((tongSoDiem > 11 && state.taiXiu === true) || (tongSoDiem <= 11 && state.taiXiu === false)) {
                    state.soBanThang += 1;
                }
                return { ...state };
            }
        default: return { ...state }
    }
}

export default GameXucXacReducer;