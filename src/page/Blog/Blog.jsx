import styles from './Blog.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Blog = () => {
    return <div className={cx('wrapper')}>Blog Page</div>;
};

export default Blog;
