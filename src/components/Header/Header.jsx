import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import images from '@/assets/images';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('logo')}>
                <img src={images.blueLogo} alt="" />
            </div>
            <div className={cx('navbar')}>
                <NavLink
                    to="/"
                    className={(nav) =>
                        cx('navbar-item', {
                            active: nav.isActive,
                        })
                    }
                >
                    Trang chủ
                </NavLink>
                <NavLink
                    to="/findPet"
                    className={(nav) =>
                        cx('navbar-item', {
                            active: nav.isActive,
                        })
                    }
                >
                    Tìm chủ nhân
                </NavLink>
                <NavLink
                    to="/adoptPet"
                    className={(nav) =>
                        cx('navbar-item', {
                            active: nav.isActive,
                        })
                    }
                >
                    Thú cưng đang tìm chủ
                </NavLink>
                <NavLink
                    to="/blog"
                    className={(nav) =>
                        cx('navbar-item', {
                            active: nav.isActive,
                        })
                    }
                >
                    Tin tức
                </NavLink>

                <NavLink
                    to="/contact"
                    className={(nav) =>
                        cx('navbar-item', {
                            active: nav.isActive,
                        })
                    }
                >
                    Liên Hệ
                </NavLink>
            </div>

            <NavLink to="/login">
                <div className={cx('button')}>
                    <button>Đăng nhập</button>
                </div>
            </NavLink>
        </header>
    );
}

export default Header;
