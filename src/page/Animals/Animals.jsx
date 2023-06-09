import { NavLink } from 'react-router-dom';

import styles from './Animals.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axiosClient from '@/api/axiosClient';

import Loading from '@/components/Loading';
const cx = classNames.bind(styles);

const Animals = () => {
    const [animals, setAnimals] = useState({ data: [], isLoading: false, isError: false });

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setAnimals({ data: [], isLoading: true, isError: false });
                const response = await axiosClient.get('animal');
                console.log(response);
                setAnimals({ data: response.data, isLoading: false, isError: false });
            } catch (err) {
                setAnimals({ data: [], isLoading: false, isError: true });
                console.log(err);
            }
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>TÌM THÚ CƯNG PHÙ HỢP CHO BẠN</h2>
            {animals.isLoading && <Loading />}

            <div className={cx('cards')}>
                {animals.data.map((item, index) => {
                    return (
                        <NavLink to={`/animals/${item.id}`} className={cx('card')} key={index}>
                            <div className={cx('like-btn')}></div>
                            <div>
                                <img className={cx('image')} src={item.image} />
                            </div>
                            <h4 className={cx('name')}>{item.name}</h4>
                            <p className={cx('info')}>{item?.description || 'Không có mô tả'}</p>
                            <NavLink to={`/animals/${item.id}`} className={cx('button')}>
                                Xem chi tiết
                            </NavLink>
                        </NavLink>
                    );
                })}
            </div>
            {animals.isError && <p>Có lỗi xảy ra </p>}
        </div>
    );
};

export default Animals;
