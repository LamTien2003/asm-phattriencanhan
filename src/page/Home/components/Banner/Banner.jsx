import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

import images from '@/assets/images';
const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <div className={cx('wrapper')}>
            <img src={images.backGroundBanner1} alt="" className={cx('background-banner-left')} />
            <div className={cx('main-content')}>
                <h2 className={cx('title')}>FIND & ADOPT A PET</h2>
                <div className={cx('content')}>
                    <p className={cx('content-title')}> TOGETHER, WE CAN SAVE ANIMALS</p>
                    <p className={cx('content-description')}>
                        We are working to protect animals currently threatened with extinction
                    </p>
                </div>
                <div className={cx('donate')}>
                    <a href="#donate" className={cx('donate-button')}>
                        Donate
                    </a>
                </div>
            </div>
            <img src={images.backGroundBanner2} alt="" className={cx('background-banner-right')} />
        </div>
    );
};

export default Banner;
