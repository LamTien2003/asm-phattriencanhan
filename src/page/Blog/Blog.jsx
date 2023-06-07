import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { convert } from 'html-to-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useMemo, useState } from 'react';
import axiosClient from '@/api/axiosClient';
import Loading from '@/components/Loading';
const cx = classNames.bind(styles);

const Blog = () => {
    const limit = 4;
    const [status, setStatus] = useState({
        isPending: false,
        isError: false,
    });
    const [page, setPage] = useState(1);
    const [totalBlog, setTotalBlog] = useState(0);
    const [[firstBlog, ...restBlog], setBlogs] = useState([]);

    const countPage = useMemo(() => {
        return Math.ceil(totalBlog / limit);
    }, [totalBlog, limit]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setStatus({ isPending: true, isError: false });
                const response = await axiosClient.get('blog', {
                    params: {
                        page,
                        limit,
                    },
                });
                setTotalBlog(response.countBlogs);
                setBlogs(response.data);
                setStatus({ isPending: false, isError: false });
            } catch (err) {
                console.log(err);
                setStatus({ isPending: false, isError: true });
            }
        };
        fetchApi();
    }, [page, limit]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title-post')}>Recent blog posts</div>
            {status.isPending && (
                <div className={cx('loading')}>
                    <Loading />
                </div>
            )}
            <div className={cx('bot-blog')}>
                {firstBlog && (
                    <NavLink to={`/blog/${firstBlog.id}`} className={cx('left')}>
                        <div className={cx('item')}>
                            <img src={firstBlog?.coverImage} alt="" />
                            <p className={cx('date')}>{firstBlog?.createdAt}</p>
                            <h3 className={cx('title')}>{firstBlog?.title}</h3>
                            <div className={cx('des')}>{convert(firstBlog?.content).slice(0, 50)}</div>
                        </div>
                    </NavLink>
                )}
                <div className={cx('right')}>
                    {restBlog.map((item, index) => {
                        return (
                            <NavLink to={`/blog/${item.id}`} className={cx('item')} key={index}>
                                <div className={cx('cover-image')}>
                                    <img src={item?.coverImage} alt="" />
                                </div>
                                <div className={cx('info')}>
                                    <p className={cx('date')}>{item?.createdAt}</p>
                                    <h3 className={cx('title')}>{item?.title}</h3>
                                    <div className={cx('des')}>{convert(item?.content).slice(0, 50)}</div>
                                    <NavLink to="/detailBlog"></NavLink>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>

            <div className={cx('pagination')}>
                <div
                    onClick={() =>
                        setPage((prev) => {
                            if (prev <= 1) {
                                return 1;
                            }
                            return prev - 1;
                        })
                    }
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                {[...Array(countPage)].map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={cx({ active: index + 1 === page })}
                            onClick={() => {
                                setPage(index + 1);
                            }}
                        >
                            {index + 1}
                        </div>
                    );
                })}
                <div
                    onClick={() =>
                        setPage((prev) => {
                            if (prev >= countPage) {
                                return countPage;
                            }
                            return prev + 1;
                        })
                    }
                >
                    <FontAwesomeIcon icon={faAngleRight} />{' '}
                </div>
            </div>
        </div>
    );
};

export default Blog;
