import { combineReducers } from "redux";
import memo from './memo';

// memo.js를 모듈로서 들고와서 
// index.js (모듈말고 전체 index.js)에서 사용하게끔
// rootReducer처리 해주고 다시 export해줌.

const rootReducer = combineReducers({
  memo
});

export default rootReducer;