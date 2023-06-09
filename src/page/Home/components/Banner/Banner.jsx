import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

import images from '@/assets/images';
const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <div className={cx('wrapper')}>
            <img src={images.backGroundBanner1} alt="" className={cx('background-banner-left')} />
            <div className={cx('main-content')}>
                <h2 className={cx('title')}>TÌM VÀ CỨU GIÚP ĐỘNG VẬT</h2>
                <div className={cx('content')}>
                    <p className={cx('content-title')}>CHUNG TAY GÓP SỨC BẢO VỆ ĐỘNG VẬT</p>
                    <p className={cx('content-description')}>
                        Lovely Pet hi vọng sẽ giúp ích và đem tới những giá trị tích cực đến cho cộng đồng.
                    </p>
                </div>
                <div className={cx('donate')}>
                    <a href="#donate" className={cx('donate-button')}>
                        Ủng hộ
                    </a>
                </div>
            </div>
            <img src={images.backGroundBanner2} alt="" className={cx('background-banner-right')} />
        </div>
    );
};

export default Banner;
