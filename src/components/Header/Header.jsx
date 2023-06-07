import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import images from '@/assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/authSlice';
const cx = classNames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };
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
                    to="/animals"
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
                {user && user.role === 'admin' && (
                    <NavLink
                        to="/addBlog"
                        className={(nav) =>
                            cx('navbar-item', {
                                active: nav.isActive,
                            })
                        }
                    >
                        Thêm bài viết
                    </NavLink>
                )}
            </div>

            {user ? (
                <div to="/login">
                    <div className={cx('button')}>
                        <button onClick={handleLogout}>Đăng xuất</button>
                    </div>
                </div>
            ) : (
                <NavLink to="/login">
                    <div className={cx('button')}>
                        <button>Đăng nhập</button>
                    </div>
                </NavLink>
            )}
        </header>
    );
}

export default Header;
