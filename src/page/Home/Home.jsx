import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Banner from '@/page/Home/components/Banner';
import Section from '@/page/Home/components/Section';
import images from '@/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const Home = () => {
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
            <Section style={{ backgroundColor: '#dfdfdf' }}>
                <div className={cx('unowned-pets')}>
                    <h3 className={cx('heading-section-2')}>OUR FRIENDS WHO ARE LOOKING FOR A HOME</h3>

                    <div className={cx('slides')}>
                        <div className={cx('card')}>
                            <img className={cx('image')} src={images.imageAnimal6} alt="" />
                            <p className={cx('name')}>Loki</p>
                            <a className={cx('button-more')} href="#">
                                Learn more
                            </a>
                        </div>
                        <div className={cx('card')}>
                            <img className={cx('image')} src={images.imageAnimal7} alt="" />
                            <p className={cx('name')}>Loki</p>
                            <a className={cx('button-more')} href="#">
                                Learn more
                            </a>
                        </div>
                        <div className={cx('card')}>
                            <img className={cx('image')} src={images.imageAnimal8} alt="" />
                            <p className={cx('name')}>Loki</p>
                            <a className={cx('button-more')} href="#">
                                Learn more
                            </a>
                        </div>
                        <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" />
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
