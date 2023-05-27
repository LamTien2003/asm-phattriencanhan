import classNames from 'classnames';
import styles from './Home.module.scss';

import Banner from '@/page/Home/components/Banner';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <div>Vào trang Home viết tiếp nha</div>
        </div>
    );
};
export default Home;
