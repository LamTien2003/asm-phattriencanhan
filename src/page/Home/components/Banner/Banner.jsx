import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>FIND & ADOPT A PET</h2>
            <div className={cx('content')}>
                <p className={cx('content-title')}> TOGETHER, WE CAN SAVE ANIMALS</p>
                <p className={cx('content-description')}>
                    We are working to protect animals currently threatened with extinction
                </p>
            </div>
            <div className={cx('donate')}>
                <NavLink to="/" className={cx('donate-button')}>
                    Donate
                </NavLink>
            </div>
        </div>
    );
};

export default Banner;
