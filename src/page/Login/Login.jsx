import { useDispatch, useSelector } from 'react-redux';
import { handleLogin } from '@/redux/authSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import images from '@/assets/images';

import FormBox from '@/components/FormBox/FormBox';

const cx = classNames.bind(styles);

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            password: yup.string().required('Không được để trống').min(8, 'Mật khẩu phải có ít nhất 8 kí tự'),
            email: yup
                .string()
                .required('Không được để trống')
                .max(30, 'Không được vượt quá 30 kí tự')
                .email('Email không đúng'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await dispatch(handleLogin(values));
                if (response.payload.status === 'fail') throw Error(response.payload?.msg);
                navigate('/');
            } catch (err) {
                console.log(err);
            }
        },
    });
    return (
        <FormBox logo={images.blueLogo} animalImage={images.animalForm}>
            {user.error && <p>{user.error}</p>}
            {user.pending && <p>Đang load</p>}
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
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {Boolean(formik.errors.email) && formik.touched.email && (
                            <p className={cx('error')}>{formik.errors.email}</p>
                        )}
                    </div>

                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {Boolean(formik.errors.password) && formik.touched.password && (
                            <p className={cx('error')}>{formik.errors.password}</p>
                        )}
                    </div>

                    <div className={cx('wp-btn')}>
                        <button type="submit" onClick={formik.handleSubmit}>
                            ĐĂNG NHẬP
                        </button>
                    </div>
                </form>
            </div>
            <NavLink to="/register" className={cx('message')}>
                Đăng ký tài khoản tại đây
            </NavLink>
        </FormBox>
    );
};
export default Login;
