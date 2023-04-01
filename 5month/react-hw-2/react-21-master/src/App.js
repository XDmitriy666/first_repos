import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { api } from './config/requester';
import { useCount } from './providers/AppProvider/hooks/useCount';
import { actions } from './store/reducers/countReducer';
import { actionsUsers, usersDelete, usersPush } from './store/reducers/usersReducers';
import { authThunk } from './store/thunks/authThunk';

function App() {
  // const { count, increment, decrement } = useCount()

  const dispatch = useDispatch()
  const { count } = useSelector(state => state.count)
  const { users } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(authThunk())
    // api.get('posts')
    //   .then((data) => {
    //     console.log(data)
    //   })
  }, [ dispatch ])

  function increment() {
    dispatch({ type: actions.INC })
  }

  function decrement() {
    dispatch({ type: actions.DEC })
  }

  function addElement() {
    dispatch(usersPush('Smith'))
  }

  function deleteElm() {
    dispatch(usersDelete('Smith'))
  }

  return (
    <div className="App">
        <div className='page_wrapper'>
          <h1 onClick={deleteElm}>
          {count}
          </h1>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
        </div>
        <div>
          {users.map((item, i) =>
            <h1 key={i} onClick={addElement}>{item}</h1>
          )}
        </div>
    </div>
  );
}

export default App;
