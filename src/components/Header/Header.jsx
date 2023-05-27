import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { NavLink } from 'react-router-dom';
import images from '@/assets/images';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="" />
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
                    to="/animals"
                    className={(nav) =>
                        cx('navbar-item', {
                            active: nav.isActive,
                        })
                    }
                >
                    Cứu hộ động vật
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
                    to="/about"
                    className={(nav) =>
                        cx('navbar-item', {
                            active: nav.isActive,
                        })
                    }
                >
                    Về chúng tôi
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
            <div className={cx('button')}>
                <button>LOG IN</button>
            </div>
        </header>
    );
}

export default Header;
