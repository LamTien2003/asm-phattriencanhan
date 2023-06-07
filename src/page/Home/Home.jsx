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
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Home = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <Section>
                <div className={cx('about-pet')}>
                    <div className={cx('left')}>
                        <h3>ABOUT THE LOVELY PET</h3>
                        <p className={cx('p-1')}>
                            If you are worried about stray dogs and cats in the community, this is a website that can
                            help you.
                        </p>
                        <p className={cx('p-2')}>
                            We have pactical works such as animal rescue, connecting the community of animal lovers,
                            thereby raising social awareness about animal issues.
                        </p>
                    </div>
                    <div className={cx('right')}>
                        <img className={cx('image-section-1')} src={images.imageAnimal3} alt="" />
                    </div>
                </div>
            </Section>
            <Section style={{ backgroundColor: '#dfdfdf', position: 'relative' }}>
                <div className={cx('unowned-pets')}>
                    <h3 className={cx('heading-section-2')}>OUR FRIENDS WHO ARE LOOKING FOR A HOME</h3>

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
                        <SwiperSlide>
                            <div className={cx('card')}>
                                <img className={cx('image')} src={images.imageAnimal6} alt="" />
                                <p className={cx('name')}>Loki</p>
                                <a className={cx('button-more')} href="#">
                                    Learn more
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cx('card')}>
                                <img className={cx('image')} src={images.imageAnimal6} alt="" />
                                <p className={cx('name')}>Loki</p>
                                <a className={cx('button-more')} href="#">
                                    Learn more
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cx('card')}>
                                <img className={cx('image')} src={images.imageAnimal6} alt="" />
                                <p className={cx('name')}>Loki</p>
                                <a className={cx('button-more')} href="#">
                                    Learn more
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cx('card')}>
                                <img className={cx('image')} src={images.imageAnimal6} alt="" />
                                <p className={cx('name')}>Loki</p>
                                <a className={cx('button-more')} href="#">
                                    Learn more
                                </a>
                            </div>
                        </SwiperSlide>
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
                <div className={cx('donation')}>
                    <div className={cx('left')}>
                        <h3 className={cx('heading-section-3')}>
                            IN ADDITION, <br></br>YOU CAN MAKE A DONATION
                        </h3>
                        <div className={cx('bank-info')}>bank account: 9999 9999 9999</div>
                        <p className={cx('p-3')}>
                            Thank you for the love you have for animals. <br />
                            We will take care of and help animals for you.
                        </p>
                    </div>
                    <img className={cx('image')} src={images.imageAnimal4} alt="" />
                </div>
            </Section>
        </div>
    );
};
export default Home;
