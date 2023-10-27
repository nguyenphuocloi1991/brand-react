import ReactDOM from 'react-dom/client';
import {Navigate, BrowserRouter, Route, Routes} from 'react-router-dom';
import Index from '@pages/shop/Index';
import Login from '@pages/shop/login';
import List from '@pages/manager/list';
import Register from '@pages/shop/register';
import Auth from '@pages/auth/AuthWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route element={<Auth />}>
                <Route path={"/manager/list"} element={<List />} />
            </Route>
        </Routes>  
    </BrowserRouter>
);

