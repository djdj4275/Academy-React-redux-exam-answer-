
// memocontainer 에서 받아온 것들을 사용
const Memo = ({ title, text, memos, onChangeTitle, onChangeText, onInsert, onRemove }) => {
  
  const memoAdd = () => {
    onInsert({ title: title, text: text });
    onChangeTitle("");
    onChangeText("");
  }

  return (
    <div>
      <h1>메모하는 공간입니다</h1>
      {/* title 값을 들고오는 input = 입력을 눌렀을때 초기화 필요 */}
      <input
        type="text"
        value={title}
        onChange={(e) => {
          onChangeTitle(e.target.value);
        }}
        style={{ width: "220px" }}
      />{" "}
      <br />
      {/* text 값을 들고오는 textarea = 입력을 눌렀을때 초기화 필요 */}
      <textarea
        value={text}
        onChange={(e) => {
          onChangeText(e.target.value);
        }}
        cols="30"
        rows="10"
      ></textarea>{" "}
      <br />
      {/* title과 text값을 전달해서 추가 */}
      <button onClick={memoAdd}>입력</button>
      <hr />
      {/* memos배열 들고와서 map을 이용해 반복해서 글쓴 갯수만큼 보여줌 */}
      {memos.map((memo) => (
        <MemoItem memo={memo} onRemove={onRemove} key={memo.id} />
      ))}
    </div>
  );
}

export default Memo;

const MemoItem = ({ memo, onRemove }) => {
  return (
    <div>
      {/* memo의 title */}
      <span>제목 : {memo.title }</span>
      {/* memo 삭제 = memo의 id 값을 통해서 삭제 */}
      <button onClick={()=>{onRemove(memo.id)}}>X</button>
      {/* memo의 text */}
      <p>내용 : { memo.text}</p>
    </div>
  )
}