import { useEffect, useState } from 'react';
import { useRef } from 'react';

import { NavLink } from 'react-router-dom';
import axiosClient from '@/api/axiosClient';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Banner from '@/page/Home/components/Banner';
import Section from '@/page/Home/components/Section';
import images from '@/assets/images';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Home = () => {
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
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <Section>
                <div className={cx('about-pet')}>
                    <div className={cx('left')}>
                        <h3>VỀ NHỮNG CHÚ THÚ CƯNG</h3>
                        <p className={cx('p-1')}>
                            Nếu bạn lo lắng về những chú chó mèo cơ nhỡ không có nơi nương tựa, đây là trang web có thể giúp bạn.
                        </p>
                        <p className={cx('p-2')}>
                            Trách nhiệm của chúng tôi là giải cứu động vật, tạo dựng nên một cộng đồng dành cho những người yêu thích động vật
                            . Từ đó nâng cao nhận thức xã hội về những vấn đề liên quan tới động vật
                        </p>
                    </div>
                    <div className={cx('right')}>
                        <img className={cx('image-section-1')} src={images.imageAnimal3} alt="" />
                    </div>
                </div>
            </Section>
            <Section style={{ backgroundColor: '#dfdfdf', position: 'relative' }}>
                <div className={cx('unowned-pets')}>
                    <h3 className={cx('heading-section-2')}>NHỮNG CHÚ BÉ HIỆN ĐANG CHƯA CÓ GIA ĐÌNH</h3>

                    <Swiper
                        className={cx('slides')}
                        modules={[Pagination, Navigation, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                    >
                        {animals.data.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={cx('card')}>
                                        <img className={cx('image')} src={item.image} alt="" />
                                        <p className={cx('name')}>{item.name}</p>
                                        <NavLink to={`/animal/${item.id}`} className={cx('button-more')} href="#">
                                            Xem chi tiết
                                        </NavLink>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div ref={navigationPrevRef} className={cx('btn-prev')}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div ref={navigationNextRef} className={cx('btn-next')}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </Section>
            <Section>
                <div className={cx('donation')} id="donate">
                    <div className={cx('left')}>
                        <h3 className={cx('heading-section-3')}>
                            NGOÀI RA, <br/>BẠN CŨNG CÓ THỂ ĐÓNG GÓP
                        </h3>
                        <div className={cx('bank-info')}>bank account: 9999 9999 9999</div>
                        <p className={cx('p-3')}>
                            Cảm ơn bạn vì đã dành sự quan tâm đến động vật <br />
                            Chúng tôi sẽ cố gắng hết sức để không phụ lòng bạn.
                        </p>
                    </div>
                    <img className={cx('image')} src={images.imageAnimal4} alt="" />
                </div>
            </Section>
        </div>
    );
};
export default Home;
