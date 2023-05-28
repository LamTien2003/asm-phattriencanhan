import classNames from 'classnames/bind';
import styles from './FindPet.module.scss';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const Register = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* <div className={cx('right')}>
                    <div className={cx('logo')}>
                        <img src={images.yellowLogo} alt="logo" />
                    </div>
                    <div className={cx('pet')}>
                        <h3>Yay, WE LOVE YOUR PETS!</h3>
                        <img src={images.animalForm} alt="pet" />
                    </div>
                </div>
                <div className={cx('left')}>
                    <div className={cx('title')}>
                        <h4 className={cx('top-title')}>Cung cấp thông tin cơ bản. Cảm ơn!</h4>
                    </div> */}

                <div className={cx('wp-form')}>
                    <form action="#">
                        <div className={cx('right')}>
                            <div className={cx('logo')}>
                                <img src={images.yellowLogo} alt="logo" />
                            </div>
                            <div className={cx('pet')}>
                                <h3>HÃY CÙNG NHAU TÌM CHỦ MỚI CHO THÚ CƯNG</h3>
                            </div>
                            <div className={cx('file-upload')}>
                                <input type="file" id="file-upload" />
                                <label htmlFor="file-upload">
                                    

                                        <FontAwesomeIcon icon={faUpload} />

                                   
                                </label>
                            </div>
                        </div>
                        <div className={cx('left')}>
                            <div className={cx('title')}>
                                <h4 className={cx('top-title')}>Cung cấp thông tin cơ bản. Cảm ơn!</h4>
                            </div>
                            <div className={cx('form-group')}>
                                <input
                                    className={cx('form-control')}
                                    type="text"
                                    name="petName"
                                    placeholder="Tên thú cưng"
                                />
                            </div>

                            <div className={cx('form-group')}>
                                <input
                                    className={cx('form-control')}
                                    type="text"
                                    name="type"
                                    placeholder="Loại thú cưng"
                                />
                            </div>

                            <div className={cx('form-group')}>
                                <input
                                    className={cx('form-control')}
                                    type="text"
                                    name="status"
                                    placeholder="Tình trạng thú cưng"
                                />
                            </div>

                            <div className={cx('form-group')}>
                                <input className={cx('form-control')} type="text" name="email" placeholder="Email" />
                            </div>

                            <div className={cx('form-group')}>
                                <input
                                    className={cx('form-control')}
                                    type="text"
                                    name="address"
                                    placeholder="Địa chỉ"
                                />
                            </div>

                            <div className={cx('form-group')}>
                                <input
                                    className={cx('form-control')}
                                    type="text"
                                    name="tel"
                                    placeholder="Số điện thoại"
                                />
                            </div>

                            <div className={cx('wp-btn')}>
                                <button type="submit">TÌM KIẾM</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        // </div>
    );
};
export default Register;
