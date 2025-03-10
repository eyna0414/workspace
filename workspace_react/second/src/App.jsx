import "./App.css";

//리턴문 안에 html은 반드시 하나의 태그에 감싸져야 한다.
//컴포넌트(구성요소)는 함수와 구분짓기위해서 반드시 대문자로 시작!!
function Header() {
  return (
    <div>
      <h3>header</h3>
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      <h3>footer</h3>
    </div>
  );
};

function App() {
  return (
    <>
      <Header />
      <div>
        <h3>content</h3>
      </div>
      <Footer/>
    </>
  );
}

export default App;
