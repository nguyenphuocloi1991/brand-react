import ReactDOM from 'react-dom/client';
import {Navigate, BrowserRouter, Route, Routes} from 'react-router-dom';
import Index from '@pages/shop/Index';
import Login from '@pages/shop/login';
import Register from '@pages/shop/register';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            
        </Routes>  
    </BrowserRouter>
);

