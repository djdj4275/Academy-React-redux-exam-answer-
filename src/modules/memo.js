// 액션타입 정하기
const CHANGE_TITLE = 'memo/CHANGE_TITLE';
const CHANGE_TEXT = "memo/CHANGE_TEXT";
const INSERT = 'memo/INSERT';
const REMOVE = 'memo/REMOVE';

// 액션함수 작성 >> dispatch때 사용하기위해 export해줌
export const changeTitle = (input) => ({
  type: CHANGE_TITLE,
  input // action.input이라고 작성하면 그 안의 내용 사용가능해짐
})
export const changeText = (input) => ({
  type: CHANGE_TEXT,
  input, // action.input이라고 작성하면 그 안의 내용 사용가능해짐
});
// INSERT 시에 id 값이 필요함
let id = 3
// title 과 text의 값이 객체로 inputs라는 이름으로 받아서 사용
export const insert = (inputs) => ({
  type: INSERT,
  inputs: {
    id: id++, // id 값으로는 위에 넣어준 3에서 점차늘려줘서 넣어줌
    title: inputs.title,
    text: inputs.text
  }
})
// 특정 글을 삭제하기위해 id를 받아서 사용
export const remove = (id) => ({
  type: REMOVE,
  id,
})


// 초기 state값 작성
const initialState = {
  title: "",
  text: "",
  memos: [
    {
      id: 1,
      title: "첫번째",
      text: "첫번째 메모입니다",
    },
    {
      id: 2,
      title: "두번째",
      text: "두번째 메모입니다",
    },
  ],
};

// state값을 변경하는 reducer 함수 작성
// >> store 사용하기위해 export default
function memo(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state, // state를 전부 꺼내서
        title: action.input, // title 부분을 action로 들어온 input값으로 바꿔줌
      };
    case CHANGE_TEXT:
      return {
        ...state, // state를 전부 꺼내서
        text: action.input, // text 부분을 action로 들어온 input값으로 바꿔줌
      };
    case INSERT:
      return {
        ...state, // state를 전부 꺼내서
        // 현재 initialState의 memos에 action으로 들어온 배열값을 합쳐서
        // 새 배열로 바꿔줌
        memos: state.memos.concat(action.inputs), 
      };
    case REMOVE:
      return {
        ...state, // state를 전부 꺼내서
        // 현재 initialState의 memos중에 action으로 들어온 id값과 같지 않은걸로만
        // 배열을 다시 만들어서 넣어줌(같은 id값을 가진 글은 제외됨)
        memos: state.memos.filter((memo)=>memo.id !== action.id), 
      };
    // 아무런 값이 없을때 원래값을 보내줌 (예외사항)
    default:
      return state;
  }
}

export default memo;