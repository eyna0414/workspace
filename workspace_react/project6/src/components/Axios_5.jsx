import React, { useEffect, useState } from 'react'
import './Axios_5.css'
import axios from 'axios';

const Axios_5 = () => {
  const [personList, setPersonList] = useState([]);
  const [studentList, setStudentList] = useState([]);


  const getPersonList = () => {
    axios.get('/api/t4')
      .then((res) => {
        console.log(res.data);
        setPersonList(res.data);
      })
      .catch((error) => {
        console.log('오류 발생');
        console.log(error); 
      });
  };

  const getStudentList = () => {
    axios.get('/api/t5')
    .then((res) => {
      console.log(res.data)
      setStudentList(res.data)
    })
    .catch((error) => {
      console.log('오류 발생')
      console.log(error);
    });
  };

  

  return (
    <>
      <div>Axios_5</div>
      <table className='t1'>
        <colgroup>
          <col width={'50%'}/>
          <col width={'50%'}/>
        </colgroup>
        <tbody>
          <tr className="t1-tr">
            <td>
              <button type='button' onClick={(e) => {
                getPersonList();
              }}>버튼1</button>

              <table border={1}>
                <thead>
                  <tr>
                    <td>이름</td>
                    <td>나이</td>
                    <td>주소</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    personList.length === 0
                    ?
                    <tr>
                      <td colSpan={3}>
                        버튼1을 클릭하면 데이터가 조회됩니다
                        </td>
                    </tr>
                    :
                    personList.map((person, i) => {
                      return (
                        <tr key={i}>
                          <td>{person.name}</td>
                          <td>{person.age}</td>
                          <td>{person.addr}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
                
              </table>
            </td>
            
            <td>
              <button type='button' onClick={(e) => {
                getStudentList();
              }}>버튼2</button>

              <table border={1}>
                <thead>
                  <tr>
                    <td>이름</td>
                    <td>국어</td>
                    <td>영어</td>
                    <td>수학</td>
                    <td>총점</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    studentList.length === 0
                    ?
                    <tr>
                      <td colSpan={5}>
                        버튼2을 클릭하면 데이터가 조회됩니다
                        </td>
                    </tr>
                    :
                    studentList.map((student, i) => {
                      return (
                        <tr key={i}>
                          <td>{student.name}</td>
                          <td>{student.korScore}</td>
                          <td>{student.engScore}</td>
                          <td>{student.mathScore}</td>
                          <td>{student.korScore + student.engScore + student.mathScore}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
                
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Axios_5