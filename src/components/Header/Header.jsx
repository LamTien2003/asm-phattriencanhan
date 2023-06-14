import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import images from '@/assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };
    useEffect(() => {
        const handleClick = () => {
            if (isMobile) {
                setIsMobile(false);
            }
            console.log(isMobile);
        };
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isMobile]);
    console.log(isMobile);
    return (
        <header className={cx('header')}>
            <div
                className={cx('menu-mobile')}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsMobile(true);
                }}
            >
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={cx('logo')}>
                <img src={images.blueLogo} alt="" />
            </div>
            <div
                className={cx('navbar', {
                    activeModal: isMobile,
                })}
                onClick={(e) => e.stopPropagation()}
            >
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
                <div className={cx('info')}>
                    <div className={cx('button')}>
                        <button onClick={handleLogout}>Đăng xuất</button>
                    </div>
                    <div className={cx('container')}>
                        <p className={cx('name')}>{`${user.firstName} ${user.lastName}`}</p>
                        <div className={cx('avatar')}>
                            <img src={user?.photo} alt="" />
                        </div>
                    </div>
                </div>
            ) : (
                <NavLink to="/login" className={cx('info')}>
                    <div className={cx('button')}>
                        <button>Đăng nhập</button>
                    </div>
                </NavLink>
            )}
        </header>
    );
}

export default Header;
