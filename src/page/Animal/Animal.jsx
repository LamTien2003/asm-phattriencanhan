import { useParams } from 'react-router-dom';
import styles from './Animal.module.scss';
import classNames from 'classnames/bind';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useEffect, useState } from 'react';
import axiosClient from '@/api/axiosClient';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faUser, faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Loading from '@/components/Loading/Loading';

const cx = classNames.bind(styles);

const Animal = () => {
    const [status, setStatus] = useState('');
    const [isModal, setIsModal] = useState('');
    const [animal, setAnimal] = useState({ data: null, isLoading: false, isError: false });
    const { id } = useParams();

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            address: '',
            email: '',
        },
        validationSchema: yup.object({
            name: yup
                .string()
                .required('Không được để trống')
                .min(1, 'Tên phải lớn hơn 1 kí tự')
                .max(30, 'Không được vượt quá 30 kí tự'),

            address: yup.string().required('Không được để trống').max(50, 'Không được vượt quá 50 kí tự'),
            phone: yup.string().required('Không được để trống').max(10, 'SĐT không đúng').min(10, 'SĐT không đúng'),
            email: yup
                .string()
                .required('Không được để trống')
                .max(30, 'Không được vượt quá 30 kí tự')
                .email('Email không đúng'),
        }),
        onSubmit: async (values) => {
            try {
                setStatus('pending');
                const response = await axiosClient.post(`animal/${id}`, values);
                setStatus('');
                alert('Đăng ký tìm chủ nhân thành công');
                return response;
            } catch (err) {
                setStatus('error');
                alert(err);
            }
        },
    });

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setAnimal({ data: null, isLoading: true, isError: false });
                const response = await axiosClient.get(`animal/${id}`);
                setAnimal({ data: response.data, isLoading: false, isError: false });
            } catch (err) {
                console.log(err);
                setAnimal({ data: null, isLoading: false, isError: true });
            }
        };
        fetchApi();
    }, []);
    const Modal = () => {
        return (
            <div className={cx('modal-container')} style={{ visibility: isModal === 'adopt' ? 'visible' : 'hidden' }}>
                <div className={cx('modal')} onClick={(e) => e.stopPropagation()}>
                    {status === 'pending' && <Loading />}
                    <span className={cx('back-btn')} onClick={() => setIsModal(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                    <div className={cx('wp-form')}>
                        <div className={cx('title')}>
                            <h4 className={cx('top-title')}>Nơi cung cấp thông tin</h4>
                        </div>
                        <div className={cx('form-group')}>
                            <input
                                className={cx('form-control')}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Họ và tên"
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
                        <div className={cx('wp-btn')}>
                            <button type="submit" onClick={formik.handleSubmit}>
                                Đăng ký nhận nuôi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const ModalInfo = () => {
        return (
            <div className={cx('modal-container')} style={{ visibility: isModal === 'info' ? 'visible' : 'hidden' }}>
                <div className={cx('modal')} onClick={(e) => e.stopPropagation()}>
                    <span className={cx('back-btn')} onClick={() => setIsModal(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                    <div className={cx('information')}>
                        <img
                            className={cx('image-profile')}
                            src="https://th.bing.com/th/id/R.2a42d7b274bb96d8cc0976555277bea8?rik=78P3LjqrXSkA5Q&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fcool-profile-icons-69.png&ehk=wSrAuMrucfij0k%2bWLPOJBjzoYz1%2bz4pIUyFZ44rWOzg%3d&risl=&pid=ImgRaw&r=0"
                            alt=""
                        />
                        <div className={cx('text')}>
                            <p>
                                <span className={cx('icon-info')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />:{' '}
                                    {animal?.data?.owner?.name}
                                </span>
                            </p>
                            <p>
                                <span className={cx('icon-info')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faPhone} />:{' '}
                                    {animal?.data?.owner?.phone}
                                </span>
                            </p>
                            <p>
                                <span className={cx('icon-info')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />:{' '}
                                    {animal?.data?.owner?.address}
                                </span>
                            </p>
                            <p>
                                <span className={cx('icon-info')}>
                                    <span>
                                        <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                                    </span>
                                    : {animal?.data?.owner?.email}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div
            className={cx('wrapper')}
            onClick={(e) => {
                e.stopPropagation();
                if (isModal) {
                    setIsModal(false);
                }
            }}
        >
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('detail-info')}>
                        <img className={cx('image')} src={animal?.data?.image} />
                        <div className={cx('info')}>
                            <h3 className={cx('name')}>{animal?.data?.name}</h3>
                            <p className={cx('origin')}>Vị trí: {animal?.data?.owner.address}</p>
                            <div className={cx('line')}></div>
                            <div className={cx('character')}>
                                <ul className={cx('list-info')}>
                                    <li className={cx('pet-age')}>{animal?.data?.species.toUpperCase()}</li>
                                    <li className={cx('pet-sex')}>{animal?.data?.gender}</li>
                                    <li className={cx('pet-size')}>Small</li>
                                </ul>
                            </div>
                            <div className={cx('line')}></div>
                            <div className={cx('about')}>
                                <h3 className={cx('about-title')}>Mô Tả</h3>
                                {/* <h4 className={cx('health')}>HEALTH</h4> */}
                                <ul className={cx('health-info-list')}>
                                    <li className={cx('health-info')}>{animal?.data?.description}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={cx('note')}>
                        <div className={cx('line')}></div>
                        <p className={cx('note-content')}>
                            {' '}
                            Lovely Pet khuyên bạn nên luôn thực hiện các bước bảo mật hợp lý trước khi thực hiện thanh
                            toán trực tuyến.
                        </p>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('up')}>
                        <p className={cx('up-title')}>Hãy để lại liên hệ nếu bạn muốn nhận nuôi bé</p>

                        {!animal?.data?.newOwner ? (
                            <button className={cx('inquiry-btn')} onClick={() => setIsModal('adopt')}>
                                Nhận nuôi
                            </button>
                        ) : (
                            <p className={cx('sub-title')}> Đã được nhận nuôi</p>
                        )}

                        <button className={cx('inquiry-btn')} onClick={() => setIsModal('info')}>
                            Thông tin chủ nhân
                        </button>
                        <p className={cx('description-title')}>
                            Lovely Pet hi vọng sẽ giúp ích được cho cộng đồng và đồng thời có thể đem tới những giá trị
                            tích cực đến cho mọi người{' '}
                        </p>
                    </div>
                </div>
            </div>

            {Modal()}
            {ModalInfo()}
        </div>
    );
};

export default Animal;
