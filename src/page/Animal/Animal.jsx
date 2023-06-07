import { useParams } from 'react-router-dom';
import styles from './Animal.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axiosClient from '@/api/axiosClient';

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
                    Nút ẩn modal ở đây
                </span>
                <p>Viết form nhập thông tin liên hệ vào đây</p>
            </div>
        );
    };
    const ModalInfo = () => {
        return (
            <div className={cx('modal')} onClick={(e) => e.stopPropagation()}>
                <span className={cx('back-btn')} onClick={() => setIsModal(false)}>
                    Nút ẩn modal ở đây
                </span>
                <p>{animal?.data?.owner?.name}</p>
                <p>{animal?.data?.owner?.phone}</p>
                <p>{animal?.data?.owner?.address}</p>
                <p>{animal?.data?.owner?.email}</p>
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
