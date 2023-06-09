import { useFormik } from 'formik';
import { useRef } from 'react';
import * as yup from 'yup';

import classNames from 'classnames/bind';
import styles from './FindPet.module.scss';
import images from '@/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import FormBox from '@/components/FormBox/FormBox';
import { useState } from 'react';
import axiosClient from '@/api/axiosClient';
import { useNavigate } from 'react-router-dom';
import Loading from '@/components/Loading/Loading';

const cx = classNames.bind(styles);

const FindPet = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const fileInputRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            species: '',
            gender: '',
            ownerName: '',
            description: '',
            email: '',
            address: '',
            phone: '',
            image: null,
        },
        validationSchema: yup.object({
            name: yup
                .string()
                .required('Không được để trống')
                .min(1, 'Tên phải lớn hơn 1 kí tự')
                .max(30, 'Không được vượt quá 30 kí tự'),
            ownerName: yup
                .string()
                .required('Không được để trống')
                .min(1, 'Tên phải lớn hơn 1 kí tự')
                .max(30, 'Không được vượt quá 30 kí tự'),
            species: yup.string().required('Không được để trống'),
            gender: yup.string().required('Không được để trống'),
            address: yup.string().required('Không được để trống').max(50, 'Không được vượt quá 50 kí tự'),
            phone: yup.string().required('Không được để trống').max(10, 'SĐT không đúng').min(10, 'SĐT không đúng'),
            email: yup
                .string()
                .required('Không được để trống')
                .max(30, 'Không được vượt quá 30 kí tự')
                .email('Email không đúng'),
            image: yup.mixed().required('Không được để trống'),
        }),
        onSubmit: async (values) => {
            try {
                const form = new FormData();
                form.append('name', values.name);
                form.append('species', values.species);
                form.append('gender', values.gender);
                form.append('description', values.description);
                form.append('image', values.image);
                form.append('owner[name]', values.ownerName);
                form.append('owner[phone]', values.phone);
                form.append('owner[email]', values.email);
                form.append('owner[address]', values.address);
                setStatus('pending');
                const response = await axiosClient.post('animal', form);
                setStatus('');
                alert('Đăng ký tìm chủ nhân thành công');
                navigate('/animals');
                return response;
            } catch (err) {
                setStatus('error');
                console.log(err);
            }
        },
    });

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        formik.setFieldValue('image', selectedFile);
        setPreviewImage(URL.createObjectURL(selectedFile));
    };

    const LeftContent = () => {
        return (
            <>
                <div className={cx('logo')}>
                    <img src={images.yellowLogo} alt="logo" />
                </div>
                <div className={cx('pet')}>
                    <h3>HÃY CÙNG NHAU TÌM CHỦ MỚI CHO THÚ CƯNG</h3>
                </div>
                <div className={cx('title')}>
                    <h4 className={cx('top-title')}>Cung cấp thông tin cơ bản. Cảm ơn!</h4>
                </div>
                <div className={cx('file-upload')}>
                    <input ref={fileInputRef} type="file" id="image" name="image" onChange={handleFileChange} />
                    <label htmlFor="image">
                        <FontAwesomeIcon icon={faUpload} />
                    </label>
                    {Boolean(formik.errors.image) && formik.touched.image && (
                        <p className={cx('error', 'errorImage')}>{formik.errors.image}</p>
                    )}
                    <div className={cx('preview-image')} onClick={handleImageClick}>
                        <img src={previewImage} alt="" />
                    </div>
                </div>
            </>
        );
    };
    return (
        <FormBox logo={images.blueLogo} animalImage={images.animalForm} leftContent={<LeftContent />}>
            {status === 'pending' && <Loading />}
            {status === 'error' && <p>Something is wrong</p>}
            <div className={cx('wp-form')}>
                <div action="#">
                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tên thú cưng"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {Boolean(formik.errors.name) && formik.touched.name && (
                            <p className={cx('error')}>{formik.errors.name}</p>
                        )}
                    </div>

                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            type="text"
                            id="species"
                            name="species"
                            placeholder="Loại thú cưng, VD: Chó Phốc Lai"
                            value={formik.values.species}
                            onChange={formik.handleChange}
                        ></input>
                        {Boolean(formik.errors.species) && formik.touched.species && (
                            <p className={cx('error')}>{formik.errors.species}</p>
                        )}
                    </div>
                    <div className={cx('form-group')}>
                        <select
                            className={cx('form-control')}
                            type="text"
                            id="gender"
                            name="gender"
                            placeholder="Giới tính"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                        >
                            <option value="">-- Chọn giới tính</option>
                            <option value="male">Giới Tính Đực</option>
                            <option value="female">Giới Tính Cái</option>
                        </select>
                        {Boolean(formik.errors.gender) && formik.touched.gender && (
                            <p className={cx('error')}>{formik.errors.gender}</p>
                        )}
                    </div>

                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            type="text"
                            id="ownerName"
                            name="ownerName"
                            placeholder="Tên liên hệ"
                            value={formik.values.ownerName}
                            onChange={formik.handleChange}
                        />
                        {Boolean(formik.errors.ownerName) && formik.touched.ownerName && (
                            <p className={cx('error')}>{formik.errors.ownerName}</p>
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
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Địa chỉ"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                        />
                        {Boolean(formik.errors.address) && formik.touched.address && (
                            <p className={cx('error')}>{formik.errors.address}</p>
                        )}
                    </div>

                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Số điện thoại"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />
                        {Boolean(formik.errors.phone) && formik.touched.phone && (
                            <p className={cx('error')}>{formik.errors.phone}</p>
                        )}
                    </div>

                    <div className={cx('form-group')}>
                        <textarea
                            className={cx('form-control')}
                            id="description"
                            name="description"
                            placeholder="Nhập mô tả vế thú cưng"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />
                        {Boolean(formik.errors.description) && formik.touched.description && (
                            <p className={cx('error')}>{formik.errors.description}</p>
                        )}
                    </div>

                    <div className={cx('wp-btn')}>
                        <button type="submit" onClick={formik.handleSubmit}>
                            ĐĂNG KÝ TÌM CHỦ
                        </button>
                    </div>
                </div>
            </div>
        </FormBox>
    );
};
export default FindPet;
