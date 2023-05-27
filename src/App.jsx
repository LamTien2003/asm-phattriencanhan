import { Routes, Route } from 'react-router-dom';

import DefaultLayout from '@/layout/DefaultLayout';
import Home from '@/page/Home';
import Blog from '@/page/Blog';
import AddBlog from '@/page/AddBlog';
function App() {
    return (
        <Routes>
            <Route path="" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="addBlog" element={<AddBlog />} />
            </Route>
        </Routes>
    );
}

export default App;
