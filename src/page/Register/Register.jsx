import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import images from '@/assets/images';

const cx = classNames.bind(styles);

const Register = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('right')}>
                    <div className={cx('logo')}>
                        <img src={images.blueLogo} alt="logo" />
                    </div>
                    <div className={cx('pet')}>
                        <h3>Yay, WE LOVE YOUR PETS!</h3>
                        <img src={images.animalForm} alt="pet" />
                    </div>
                </div>
                <div className={cx('left')}>
                    <div className={cx('title')}>
                        <h4 className={cx('top-title')}>Cung cấp thông tin cơ bản. Cảm ơn!</h4>
                    </div>

                    <div className={cx('wp-form')}>
                        <form action="#">
                            <div className={cx('form-group')}>
                                <input
                                    className={cx('form-control')}
                                    type="text"
                                    name="fullname"
                                    placeholder="Họ và tên"
                                />
                            </div>

                            <div className={cx('form-group')}>
                                <input
                                    className={cx('form-control')}
                                    type="text"
                                    name="username"
                                    placeholder="Tài khoản"
                                />
                            </div>

                            <div className={cx('form-group')}>
                                <input
                                    className={cx('form-control')}
                                    type="password"
                                    name="password"
                                    placeholder="Mật khẩu"
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
                                <input className={cx('form-control')} type="text" name='tel'
                                    placeholder="Số điện thoại" />
                            </div>

                            <div className={cx('wp-btn')}>
                                <button type="submit">ĐĂNG KÝ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
