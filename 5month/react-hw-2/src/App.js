import { useCallback, useMemo, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import Hooks from './components/Hooks';
import Layout from './components/Layout';
import HooksProvider from './hoc/HooksProvider';

function App() {

  const [ count, setCount ] = useState(0)

  const logMemoSm = useCallback((text) => {
    console.log(text)
  }, [])

  return (
    <div className="App">
      
    <NavLink to='/'>Main page</NavLink>
    <NavLink to='/about'>About page</NavLink>
    <NavLink to='/news'>News page</NavLink>

    <button onClick={() => setCount(prev => prev + 1)}>RENDER</button>

    <HooksProvider>
      <Hooks logSm={logMemoSm}/>
    </HooksProvider>

    <div className='page_wrapper'>
      <Layout/>
    </div>

    {/* <AppRouter/> */}
      {/* <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/news/:id' element={<NewsPage/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
