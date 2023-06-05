import { Routes, Route } from 'react-router-dom';

import DefaultLayout from '@/layout/DefaultLayout';
import Home from '@/page/Home';
import Blog from '@/page/Blog';
import AddBlog from '@/page/AddBlog';
import Login from '@/page/Login';
import Register from '@/page/Register';
import FindPet from '@/page/FindPet';
<<<<<<< HEAD
import Animals from '@/page/Animals';
import Animal from '@/page/Animal';

=======
import DetailBlog from '@/page/DetailBlog';
>>>>>>> 91ac28ae32196200b7c98c3194acdafaca789766

function App() {
    return (
        <Routes>
            <Route path="" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="animals/id" element={<Animal />} />
                <Route path="animals" element={<Animals />} />
                <Route path="blog" element={<Blog />} />
                <Route path="detailBlog" element={<DetailBlog />} />

                <Route path="addBlog" element={<AddBlog />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="findPet" element={<FindPet />} />
            </Route>
        </Routes>
    );
}

export default App;
