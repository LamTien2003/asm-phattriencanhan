import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const Blog = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-blog')}>
                <h2 className={cx('title')}>Inside Design: Stories and interviews</h2>
                <p className={cx('sub-title')}>
                    Subscribe to learn about new products fetures, the lasted in tegnology, and updates.
                </p>
                <button>Add New Post</button>
            </div>
            <div className={cx('title-post')}>Recent blog posts</div>
            <div className={cx('bot-blog')}>
                <div className={cx('left')}>
                    <div className={cx('item')}>
                        <img src={images.blogAnimal2} alt="" />
                        <p className={cx('date')}>20 Jan 2023</p>
                        <h3 className={cx('title')}>Chú chó Tiến tội nghiệp</h3>
                        <div className={cx('des')}>
                            Có thể nói bé cún này rất tội nghiệp, đáng thương bị chủ bỏ đói không được ăn uống đầy đủ.
                            Các bạn hãy nhận nuôi bé nhé!!!
                        </div>
                        <NavLink to="/detailBlog">
                            <button>Research</button>
                        </NavLink>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('item')}>
                        <img src={images.blogAnimal3} alt="" />
                        <div className={cx('info')}>
                            <p className={cx('date')}>20 Jan 2023</p>
                            <h3 className={cx('title')}>Chú chó Tiến tội nghiệp</h3>
                            <div className={cx('des')}>
                                Có thể nói bé cún này rất tội nghiệp, đáng thương bị chủ bỏ đói không được ăn uống đầy
                                đủ. Các bạn hãy nhận nuôi bé nhé!!!
                            </div>
                            <NavLink to="/detailBlog">
                            <button>Research</button>
                        </NavLink>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <img src={images.blogAnimal4} alt="" />
                        <div className={cx('info')}>
                            <p className={cx('date')}>20 Jan 2023</p>
                            <h3 className={cx('title')}>Chú chó Tiến tội nghiệp</h3>
                            <div className={cx('des')}>
                                Có thể nói bé cún này rất tội nghiệp, đáng thương bị chủ bỏ đói không được ăn uống đầy
                                đủ. Các bạn hãy nhận nuôi bé nhé!!!
                            </div>
                             <NavLink to="/detailBlog">
                            <button>Research</button>
                        </NavLink>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <img src={images.blogAnimal5} alt="" />
                        <div className={cx('info')}>
                            <p className={cx('date')}>20 Jan 2023</p>
                            <h3 className={cx('title')}>Chú chó Tiến tội nghiệp</h3>
                            <div className={cx('des')}>
                                Có thể nói bé cún này rất tội nghiệp, đáng thương bị chủ bỏ đói không được ăn uống đầy
                                đủ. Các bạn hãy nhận nuôi bé nhé!!!
                            </div>
                             <NavLink to="/detailBlog">
                            <button>Research</button>
                        </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('pagination')}>
                <a href="#">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </a>
                <a href="#" className={cx('active')}>
                    1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">
                    <FontAwesomeIcon icon={faAngleRight} />{' '}
                </a>
            </div>
        </div>
    );
};

export default Blog;
