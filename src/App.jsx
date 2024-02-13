import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavBar from './components/navbar'
import Home from './pages/home';
import Cart from './pages/cart'; 

function App() {
  return (
      <div className='container'>
        <div className='container-fluid'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </div>
      </div>
   
  )
}

export default App
