
export const data = [
  {
    id : 1,
    item : '달걀 한 판'
  },
  {
    id : 2,
    item : '라면 한 묶음'
  },
  {
    id : 3,
    item : '주방세제'
  }
]


//cartList에서 id가 2인 데이터 찾기
//e : 배열에 있는 데이터 하나하나
//find : return에 작성한 조건문과 일치하는 데이터만 리턴해준다.
const aaa1 = data.find((e) => {return e.id === 2});
//return 있으면 중괄호와 함께 생략가능
const aaa2 = data.find(e => e.id === 2);

//find <-> filter
//return에 작성한 조건과 일치하는 데이터를 제외
data.filter(() => {});
const aaa3 = data.filter((e) => {return e.id === 2});
const aaa4 = data.filter(e => e.id === 2);

data.map((e, i)=> {});
//cartList에서 id가 2인 데이터 찾기
for(const e of data){
  if(e.id ===2){
    //찾음
  }
}