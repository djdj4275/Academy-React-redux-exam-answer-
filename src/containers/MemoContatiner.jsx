// container는 store에서 가져온것을 사용하기위해 연결해주는 파일 폴더
import { changeTitle, changeText, insert, remove } from "../modules/memo";
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import Memo from "../components/Memo";

const MemoContainer = () => {
  // store에서 state를 들고와서 객체로 보내줌 {}
  const {title, text, memos} = useSelector((state) => ({
    title: state.memo.title,
    text: state.memo.text,
    memos: state.memo.memos,
  }))

  const dispatch = useDispatch();
  // usecallback 은 최적화 위해서 사용 = 사용할때마다 함수를 만들어 실행하지않도록
  // dispatch가 바뀔때만 사용하도록 함수를 고정 시켜두는 용도.

  const onChangeTitle = useCallback(
    (input) => dispatch(changeTitle(input)),
    [dispatch]
  );
  const onChangeText = useCallback(
    (input) => dispatch(changeText(input)),
    [dispatch]
  );
  const onInsert = useCallback(
    (inputs) => dispatch(insert(inputs)),
    [dispatch]
  );
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return <Memo title={title} text={text} memos={memos}
    onChangeTitle={onChangeTitle} onChangeText={onChangeText}
    onInsert={ onInsert} onRemove={onRemove} />;
}

export default MemoContainer;