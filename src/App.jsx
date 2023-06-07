import { Routes, Route } from 'react-router-dom';

import DefaultLayout from '@/layout/DefaultLayout';
import Home from '@/page/Home';
import Blog from '@/page/Blog';
import AddBlog from '@/page/AddBlog';
import Login from '@/page/Login';
import Register from '@/page/Register';
import FindPet from '@/page/FindPet';
import Animals from '@/page/Animals';
import Animal from '@/page/Animal';

import DetailBlog from '@/page/DetailBlog';
import { useEffect } from 'react';
import { getTokens } from './utils/storage';
import axiosClient from './api/axiosClient';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/authSlice';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = getTokens();
        if (token) {
            const fetchApi = async () => {
                const response = await axiosClient.get('user/getme');
                dispatch(login(response));
            };
            fetchApi();
        }
    }, []);
    return (
        <Routes>
            <Route path="" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="addBlog" element={<AddBlog />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="findPet" element={<FindPet />} />

                <Route path="animals">
                    <Route index element={<Animals />} />
                    <Route path=":id" element={<Animal />} />
                </Route>
                <Route path="blog">
                    <Route index element={<Blog />} />
                    <Route path=":id" element={<DetailBlog />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
