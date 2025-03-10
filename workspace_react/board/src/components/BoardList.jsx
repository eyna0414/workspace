import React, { useEffect, useState } from 'react'
import styles from './boardList.module.css'
import axios from 'axios';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';

const BoardList = () => {
  
  // QuertString 연습
  const [data, setData] = useState({
    age : '',
    name : ''
  });

  const changeData = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  const nav = useNavigate();

  //조회한 게시글 목록을 저장할 state 변수
  const [boardList, setBoardList] = useState([]);

  //게시글 목록 조회
  useEffect(() => {
    axios.get('/api/boards')
    .then((res) => {
      console.log(res.data);
      setBoardList(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);


  //검색 창에 입력한 데이터를 저장할 변수
  const [searchData, setSearchData] = useState({
    searchKeyword : 'TITLE',
    searchValue : ''
  });


  //검색 창 내용 변경 시 실행되는 함수
  const changeSearchData = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name] : e.target.value
    });
  }

  console.log(searchData);

  //검색 버튼 클릭 시 실행 함수 
  const searchList = () => {
    axios.get(`/api/boards?searchKeyword=${searchData.searchKeyword}&searchValue=${searchData.searchValue}`)
    .then(res => setBoardList(res.data))
    .catch(error => console.log(error))
  }

  return (
    <>
      <div className= {styles.container}>
        {/* className = {styles.search} */}
        <div className={styles.search}>
          <div>
            <select name='searchKeyword' value={searchData.searchKeyword} 
                    onChange={e => changeSearchData(e)}>
              <option value="TITLE">제목</option>
              <option value="WRITER">작성자</option>
            </select>
          </div>
          <div>
            <input type="text" name='searchValue' value={searchData.searchValue} onChange={e => changeSearchData(e)}/>
          </div>
          <div>
            <button type='button' onClick={e => searchList()}>검색</button>
          </div>
        </div>
      </div>

      <div>
        <table className={[styles.list_table]}>
          {/* 스타일 두 가지 이상 줄 때 
          className={[styles.list_table, styles.second].join(' ')} */}
          <thead>
            <tr>
              <th>NO</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {
              boardList.length === 0
              ?
              <tr>
                <td colSpan={5}>등록된 게시글이 없습니다.</td>
              </tr>
              :
              boardList.map((board, i) => {
                return(
                  <tr key={i}>
                    <td>{boardList.length - i}</td>
                    <td>
                      {/* <Link to={`/detail/${board.boardNum}`}> */}
                      <span onClick={(e)=> {nav(`/detail/${board.boardNum}`)}}>{board.title}</span> 
                      {/* </Link> */}
                    </td>
                    <td>{board.writer}</td>
                    <td>{dayjs(board.regDate).format('YYYY년 MM월 DD일')}</td>
                    <td>{board.readCnt}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      {/* 글쓰기 페이지로 이동 */}
      <button type='button' onClick={(e) => {
        nav('/join')
      }}>글쓰기</button>



      {/* 아래 나이, 이름 입력삾을 Quert String 방식으로 
          버튼 클릭 시 /test url로 전달하세요. */}
      <div>Quert String 실습</div>
      <div>나이 : <input type="text" name='age' value={data.age} 
      onChange={(e) => {changeData(e)}}/></div>
      <div>이름 : <input type="text" name='name' value={data.name}
      onChange={(e) => {changeData(e)}}/></div>
      
      <button type='button' onClick={(e) => {
        nav(`/test?age=${data.age}&name=${data.name}`);
      }}>Quert String 실행</button>


    </>
  )
}

export default BoardList