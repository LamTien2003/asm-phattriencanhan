import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import images from '@/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <img className={cx('footer-image')} src={images.imageAnimal5} alt="" />
            <div className={cx('q-and-a')}>
                <p className={cx('title-footer')}>For questions and suggestions</p>
                <p className={cx('p')}>Email:</p>
                <p className={cx('p')}>Phone number:</p>
                <p className={cx('p')}>Facebook:</p>
            </div>
        </footer>
    );
}

export default Footer;
