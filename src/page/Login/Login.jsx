import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import images from '@/assets/images';

const cx = classNames.bind(styles);

const Login = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('right')}>
                    <div className={cx('logo')}>
                        <img src={images.blueLogo} alt="logo" />
                    </div>

                    <div className={cx('pet')}>
                        <img src={images.animalForm} alt="pet" />
                    </div>
                </div>
                <div className={cx('left')}>
                    <div className={cx('title')}>
                        <h4 className={cx('top-title')}>Welcome to</h4>
                        <h2 className={cx('bot-title')}>LOVELY PET</h2>
                    </div>

                    <div className={cx('wp-form')}>
                        <form action="#">
                            <div className={cx('form-group')}>
                                <input
                                    className={cx('form-control')}
                                    type="text"
                                    name="username"
                                    placeholder="Nhập tài khoản"
                                />
                            </div>

                            <div className={cx('form-group')}>
                                <input
                                    className={cx('form-control')}
                                    type="password"
                                    name="password"
                                    placeholder="Nhập mật khẩu"
                                />
                            </div>

                            <div className={cx('wp-btn')}>
                                <button type="submit">ĐĂNG NHẬP</button>
                                <a href="#">Quên mật khẩu?</a>
                            </div>
                        </form>
                    </div>
                    <NavLink to="/register">
                        <div className={cx('message')}>
                            <a href="#">Create my LOVELY PET account!</a>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
export default Login;
