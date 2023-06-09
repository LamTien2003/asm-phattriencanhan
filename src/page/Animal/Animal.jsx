import { useParams } from 'react-router-dom';
import styles from './Animal.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axiosClient from '@/api/axiosClient';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faUser, faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Animal = () => {
    const [isModal, setIsModal] = useState('');
    const [animal, setAnimal] = useState({ data: null, isLoading: false, isError: false });
    const { id } = useParams();

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
            <div className={cx('modal')} onClick={(e) => e.stopPropagation()}>
                <span className={cx('back-btn')} onClick={() => setIsModal(false)}>
                    <FontAwesomeIcon icon={faXmark}/>
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
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Số điện thoại"
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Địa chỉ"
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-control')}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="email"
                        />  
                    </div>
                    <div className={cx('wp-btn')}>
                        <button type="submit" >
                            TÌM KIẾM
                        </button>
                    </div>
                </div>
            </div>
        );
    };
    const ModalInfo = () => {
        return (
            <div className={cx('modal')} onClick={(e) => e.stopPropagation()}>
                <span className={cx('back-btn')} onClick={() => setIsModal(false)}>
                    <FontAwesomeIcon icon={faXmark}/>
                </span>
                <div className={cx('information')}>
                    <img className={cx('image-profile')} src="https://th.bing.com/th/id/R.2a42d7b274bb96d8cc0976555277bea8?rik=78P3LjqrXSkA5Q&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fcool-profile-icons-69.png&ehk=wSrAuMrucfij0k%2bWLPOJBjzoYz1%2bz4pIUyFZ44rWOzg%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    <div className={cx('text')}>
                        <p><span className={cx('icon-info')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUser}/>
                            : {animal?.data?.owner?.name}
                        </span></p>
                        <p><span className={cx('icon-info')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faPhone}/>
                            : {animal?.data?.owner?.phone}
                        </span></p>
                        <p><span className={cx('icon-info')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faLocationDot}/>
                            : {animal?.data?.owner?.address}
                        </span></p>
                        <p><span className={cx('icon-info')}>
                            <span><FontAwesomeIcon className={cx('icon')} icon={faEnvelope}/></span>
                            : {animal?.data?.owner?.email}
                        </span></p>
                    </div>
                </div>
                
            </div>
        );
    };
    console.log(animal);
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
                                    <li className={cx('pet-sex')}>Female</li>
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
                            Strava recommends that you should always take reasonable security steps before making online
                            payments.
                        </p>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('up')}>
                        <p className={cx('up-title')}>Hãy để lại liên hệ nếu bạn muốn nhận nuôi bé</p>
                        <button className={cx('inquiry-btn')} onClick={() => setIsModal('adopt')}>
                            Nhận nuôi
                        </button>{' '}
                        <br />
                        <button className={cx('inquiry-btn')} onClick={() => setIsModal('info')}>
                            Thông tin chủ nhân
                        </button>
                    </div>

                    <div className={cx('right-down')}></div>
                </div>
            </div>
            {isModal === 'adopt' && <Modal />}
            {isModal === 'info' && <ModalInfo />}
        </div>
    );
};

export default Animal;
