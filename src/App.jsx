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


function App() {
    return (
        <Routes>
            
            <Route path="" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="animals/id" element={<Animal />} />
                <Route path="animals" element={<Animals />} />
                <Route path="blog" element={<Blog />} />
                <Route path="addBlog" element={<AddBlog />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="findPet" element={<FindPet />} />


        </Routes>
    );
}

export default App;
