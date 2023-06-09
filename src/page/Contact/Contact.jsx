import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faPinterest, faAmazon } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);

const Contact = () => {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Thông tin liên hệ</h3>
            <div className={cx('info')}>
                <div className={cx('info-tel')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
                    <label htmlFor="#">Số điện thoại</label>
                    <p className={cx('text')}>
                        No comments yet! Add one to start the conversation. No comments yet! Add one to start the
                        conversation.
                    </p>
                </div>
                <span></span>
                <div className={cx('info-address')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                    <label htmlFor="#">Địa chỉ</label>
                    <p className={cx('text')}>
                        No comments yet! Add one to start the conversation. No comments yet! Add one to start the
                        conversation.
                    </p>
                </div>
                <span></span>
                <div className={cx('info-email')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                    <label htmlFor="#">Email</label>
                    <p className={cx('text')}>
                        No comments yet! Add one to start the conversation. No comments yet! Add one to start the
                        conversation.
                    </p>
                </div>
            </div>
            <h4>BẠN THÁCH MẮC GÌ HÃY LIÊN HỆ VỚI CHUNG TÔI!</h4>
            <form action="#">
                <div className={cx('form-group')}>
                    <input className={cx('form-control')} id="password" type="text" placeholder="Họ và tên" required />
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control')}
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <textarea
                        className={cx('form-control')}
                        rows="5"
                        cols="50"
                        placeholder="Thông tin liên hệ!"
                        required
                    ></textarea>
                </div>

                <div className={cx('wp-btn')}>
                    <button type="submit">LIÊN HỆ</button>
                </div>
            </form>
            <div className={cx('social')}>
                <h4>Kết nối với LovelyPet</h4>
                <div className={cx('wp-icon')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faPinterest} />
                    <FontAwesomeIcon className={cx('icon')} icon={faAmazon} />
                    <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                    <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
                    <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                </div>
            </div>
        </div>
    );
};

export default Contact;
