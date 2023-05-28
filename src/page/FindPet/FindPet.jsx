import { useFormik } from 'formik';
import {useRef} from 'react'
import * as yup from 'yup';

import classNames from 'classnames/bind';
import styles from './FindPet.module.scss';
import images from '@/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import FormBox from '@/components/FormBox.js/FormBox';
import { useState } from 'react';

const cx = classNames.bind(styles);

const FindPet = () => {
    const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    formik.setFieldValue('image', selectedFile);
    setPreviewImage(URL.createObjectURL(selectedFile));
  };
    const [previewImage, setPreviewImage] = useState('');
    const formik = useFormik({
        initialValues: {
            petName: '',
            species: '',
            email: '',
            address: '',
            phone: '',
            image: null,
        },
        validationSchema: yup.object({
            petName: yup
                .string()
                .required('Không được để trống')
                .min(10, 'Tên phải lớn hơn 10 kí tự')
                .max(30, 'Không được vượt quá 30 kí tự'),
            species: yup.string().required('Không được để trống').max(30, 'Không được vượt quá 30 kí tự'),
            address: yup.string().required('Không được để trống').max(50, 'Không được vượt quá 50 kí tự'),
            phone: yup.string().required('Không được để trống').max(10, 'SĐT không đúng').min(10, 'SĐT không đúng'),
            email: yup
                .string()
                .required('Không được để trống')
                .max(30, 'Không được vượt quá 30 kí tự')
                .email('Email không đúng'),
            image: yup.mixed().required('Không được để trống'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const LeftContent = () => {
        return (
            <>
                <div className={cx('logo')}>
                    <img src={images.yellowLogo} alt="logo" />
                </div>
                <div className={cx('pet')}>
                    <h3>HÃY CÙNG NHAU TÌM CHỦ MỚI CHO THÚ CƯNG</h3>
                </div>
                <div className={cx('file-upload')}>
                    <input
                    ref={fileInputRef}
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="image">
                        <FontAwesomeIcon icon={faUpload} />
                    </label>
                    {Boolean(formik.errors.image) && formik.touched.image && (
                        <p className={cx('error')}>{formik.errors.image}</p>
                    )}
                    <div className={cx('preview-image')} onClick={handleImageClick} >
                        <img src={previewImage} alt=""  />
                    </div>
                </div>
            </>
        );
    };
    return (
        <FormBox logo={images.blueLogo} animalImage={images.animalForm} leftContent={<LeftContent />}>
            <div className={cx('wp-form')}>
                <div action="#">
                    <div className={cx('title')}>
                        <h4 className={cx('top-title')}>Cung cấp thông tin cơ bản. Cảm ơn!</h4>
                    </div>
                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            type="text"
                            id="petName"
                            name="petName"
                            placeholder="Tên thú cưng"
                            value={formik.values.petName}
                            onChange={formik.handleChange}
                        />
                        {Boolean(formik.errors.petName) && formik.touched.petName && (
                            <p className={cx('error')}>{formik.errors.petName}</p>
                        )}
                    </div>

                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            type="text"
                            id="species"
                            name="species"
                            placeholder="Loại thú cưng"
                            value={formik.values.species}
                            onChange={formik.handleChange}
                        />
                        {Boolean(formik.errors.species) && formik.touched.species && (
                            <p className={cx('error')}>{formik.errors.species}</p>
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

                    <div className={cx('wp-btn')}>
                        <button type="submit" onClick={formik.handleSubmit}>
                            TÌM KIẾM
                        </button>
                    </div>
                </div>
            </div>
        </FormBox>
    );
};
export default FindPet;
