import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { logoutReducer } from '../redux/authSlice';

const Header = () => {
  //store에 저장된 token 가져오기
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  return (
    <div style={{border:'1px solid black'}}>
      <div>
        <h2>헤더입니다</h2>
      </div>
      
    
        <div style={{display:'flex', gap : '20px', justifyContent : 'end'}}>
          {
            token === null
            ?
            <>
              <p>
                <Link to={'/login'}>login</Link>
              </p>
              <p>
                <Link to={'/join'}>join</Link>
              </p>
            </>
            :
            <p onClick={() => {
              dispatch(logoutReducer());
            }}>logout</p>
          }
          
        </div>
      
      
    </div>
  )
}

export default Header