import { useDispatch, useSelector } from 'react-redux'
import { handleCounter, increase } from '../redux/counterSlice';

const Test1 = () => {
  //store에 저장된 counter값 가져옴
  
  //store에 등록된 reduce(함수)를 호출해주는 객체 
  const dispatch = useDispatch();
  
  return (
    <div>
      <div>Test1</div>
      <button 
        type='button'onClick={() => {
          //dispatch(increase());
          dispatch(handleCounter(5));
        }}  
      >+1 증가</button>
    </div>
  )
}

export default Test1