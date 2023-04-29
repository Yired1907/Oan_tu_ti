import { combineReducers } from 'redux'
import GameXucXacReducer from './XucXacreducer';
import OanhTuXiReducer from './OanhTuXiReducer';

const rootReducer = combineReducers({
    GameXucXacReducer, //state bài tập game
    OanhTuXiReducer,
})

export default rootReducer;