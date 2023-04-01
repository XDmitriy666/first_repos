import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postFetch } from 'store/slices/postSlice';
import { userActions } from 'store/slices/userSlice';
import './App.css';

function App() {
  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')

  // const loginUser = () => {
  //   const body = {
  //     username: value,
  //     password: value2
  //   }
  //   dispatch(authThunkToken(body))
  // }

  // const getPostsFetch = () => {
  //   dispatch(postThunk())
  // }

  return (
    <div className="App">
        <div className='page_wrapper'>
          <input value={value} onChange={(e) => setValue(e.target.value)}/>
          <input value={value2} onChange={(e) => setValue2(e.target.value)}/>
          {/* <button onClick={loginUser}>AUTH</button> */}
        </div>
        <button onClick={() => dispatch(postFetch())}>get posts</button>
    </div>
  );
}

export default App;
