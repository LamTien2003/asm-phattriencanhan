import { useState } from 'react';
import styles from './AddBlog.module.scss';
import classNames from 'classnames/bind';
import './AddBlog.scss';

import Quill from 'quill';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/imageResize', ImageResize);

// import axiosClient from '@/api/axiosClient';

// import parse from 'html-react-parser';

const cx = classNames.bind(styles);

const AddBlog = () => {
    // eslint-disable-next-line no-unused-vars
    const [coverImage, setCoverImage] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ align: null }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, false] }],
            [{ size: ['small', 'medium', 'large', 'huge'] }],
            [{ color: [] }, { background: [] }],
            ['link', 'image'],
            ['clean'],
        ],
        imageDrop: true,
        imageResize: {
            parchment: Quill.import('parchment'),
            handleStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white',
            },
        },
    };

    const formats = [
        'header',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'link',
        'color',
        'background',
        'font',
        'align',
        'image',
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(coverImage);
        console.log(content);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('form-group')}>
                    <div className={cx('form-control')}>
                        <label htmlFor="titleInput">Chọn ảnh bìa của bài viết</label>
                        <input
                            id="titleInput"
                            type="file"
                            onChange={(e) => {
                                setCoverImage(e.target.files[0]);
                            }}
                            className={cx('title-input')}
                        />
                    </div>
                    <div className={cx('form-control')}>
                        <label htmlFor="titleInput">Nhập tiêu đề của bài viết</label>
                        <input
                            id="titleInput"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={cx('title-input')}
                        />
                    </div>
                </div>
                <div className={cx('form')}>
                    <ReactQuill
                        theme="snow"
                        className={cx('quill')}
                        value={content}
                        onChange={setContent}
                        modules={modules}
                        formats={formats}
                        placeholder="Nội dung bài viết ..."
                    />
                </div>
                {/* <div className={cx('content')}>{parse(value)}</div> */}
            </div>
            <button onClick={handleSubmit}>Thêm bài viết</button>
        </div>
    );
};
export default AddBlog;
