import styles from './DetailBlog.module.scss';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosClient from '@/api/axiosClient';
import parse from 'html-react-parser';

const cx = classNames.bind(styles);

const DetailBlog = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await axiosClient.get(`blog/${id}`);
                setBlog(response.data);
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        };
        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <img src={blog?.coverImage} alt="" />
            <div className={cx('info')}>
                {/* <p className={cx('slogan')}>{Lovely Pet mang đến yêu thương !}</p> */}
                <h3 className={cx('title')}>{blog.title}</h3>
                <p className={cx('date')}>{blog.createdAt}</p>
            </div>

            <div className={cx('wp-story')}>
                {parse(blog.content || '')}
                {/* <h3 className={cx('title-story')}>Brushing</h3>
                <p className={cx('text-story')}>
                    Whether your dog is an obsessive groomer or wants to roll in every mud puddle, every pooch requires
                    regular grooming to look and feel their best. Here’s how to do all the basics at home! Pet grooming
                    can feel a little intimidating! Between your dog running for the hills every time they hear the bath
                    running and the dizzying array of brushes available at the pet store, it can be hard to know where
                    to start. Keep reading to learn the basic grooming supplies you should have on hand and how to use
                    them right to keep your dog in tip-top shape!
                </p> */}
            </div>
        </div>
    );
};

export default DetailBlog;
