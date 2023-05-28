import { useFormik } from 'formik';
import * as yup from 'yup';

import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import images from '@/assets/images';

import FormBox from '@/components/FormBox.js/FormBox';
const cx = classNames.bind(styles);

const Register = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            photo: null,
        },
        validationSchema: yup.object({
            firstName: yup.string().required('Không được để trống').max(30, 'Không được vượt quá 30 kí tự'),
            lastName: yup.string().required('Không được để trống').max(30, 'Không được vượt quá 30 kí tự'),
            password: yup.string().required('Không được để trống').min(8, 'Mật khẩu phải có ít nhất 8 kí tự'),
            passwordConfirm: yup
                .string()
                .required('Không được để trống')
                .oneOf([yup.ref('password'), null], 'Mật khẩu không trùng khớp'),
            email: yup
                .string()
                .required('Không được để trống')
                .max(30, 'Không được vượt quá 30 kí tự')
                .email('Email không đúng'),
            photo: yup.mixed().nullable(),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <FormBox logo={images.blueLogo} animalImage={images.animalForm}>
            <div className={cx('title')}>
                <h4 className={cx('top-title')}>Cung cấp thông tin cơ bản. Cảm ơn!</h4>
            </div>

            <div className={cx('wp-form')}>
                <form action="#">
                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Họ"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                        />
                        {Boolean(formik.errors.firstName) && formik.touched.firstName && (
                            <p className={cx('error')}>{formik.errors.firstName}</p>
                        )}
                    </div>

                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Tên"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                        />
                        {Boolean(formik.errors.lastName) && formik.touched.lastName && (
                            <p className={cx('error')}>{formik.errors.lastName}</p>
                        )}
                    </div>

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
                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            type="password"
                            id="passwordConfirm"
                            name="passwordConfirm"
                            placeholder="Nhập lại Mật khẩu"
                            value={formik.values.passwordConfirm}
                            onChange={formik.handleChange}
                        />
                        {Boolean(formik.errors.passwordConfirm) && formik.touched.passwordConfirm && (
                            <p className={cx('error')}>{formik.errors.passwordConfirm}</p>
                        )}
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="photo">Chọn ảnh đại diện</label>
                        <input
                            className={cx('form-control')}
                            type="file"
                            name="photo"
                            placeholder="Địa chỉ"
                            onChange={(e) => {
                                formik.setFieldValue('photo', e.target.files[0]);
                            }}
                        />
                        {Boolean(formik.errors.photo) && formik.touched.photo && (
                            <p className={cx('error')}>{formik.errors.photo}</p>
                        )}
                    </div>

                    <div className={cx('wp-btn')}>
                        <button type="submit" onClick={formik.handleSubmit}>
                            ĐĂNG KÝ
                        </button>
                    </div>
                </form>
            </div>
        </FormBox>
    );
};
export default Register;
