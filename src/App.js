import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import NoteState from './Context/notes/NoteState';
import {Provider} from 'react-redux'
import store from '../src/Services/Store/Store'
import Product from './Components/Product/Product';
import MainLayout from './Components/MainLayout/MainLayout';
import Pos from './Components/POS/Pos';
import ProductAdd from './Components/Product/ProductAdd';
import ProductEdit from './Components/Product/ProductEdit';
import User from './Components/User/User';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
        < Routes>
          <Route exact path='/login' element={<Login/>} />
          <Route path="/" element={<MainLayout/>}>
          <Route exact path='/dashboard' element={<Dashboard/>} />
          <Route exact path='/product' element={<Product/>}/>
          <Route exact path='/productadd'  element={<ProductAdd/>}/>
          <Route exact path='/productedit' element={<ProductEdit/>}/>
          <Route exact path='/pos' element={<Pos/>}/>
          <Route exact path='/user' element={<User/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
