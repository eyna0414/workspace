
import './App.css'
import Board from './components/Board';
import Counter from './components/Counter';
import Header from './components/Header'
import OrderInfo from './Test1/OrderInfo';

function App() {
  //구조분해할당(배열, 객체)
  // const arr = [1,2,3];
  // const [a1, b1, c1] = arr;
  // console.log(a1);

  // const person = {
  //   name : 'kim',
  //   age : 20,
  //   addr : '울산'
  // };

  // const {name, age, addr} = person;
  // console.log(name);

  // function app({name, age}){ // p = person;
  //   console.log(name);
  //   console.log(age);
  // }



  return (
    <>
      {/* <Header hobby={'react'} age={20} major={major}/>
      <div className={'sss'} id='aaa'>react</div>
      <Counter/> */}
      {/* <LottoCounter/> */}
      {/* <Lotto/> */}
      {/* <Board /> */}
      <OrderInfo/>
    </>
  )
}

export default App
