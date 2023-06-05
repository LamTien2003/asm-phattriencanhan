
import styles from './Animal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Animal = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('detail-info')}>
                        <img 
                            className={cx('image')}
                            src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48100346/1/?bust=1591093605&width=450" 
                        />
                        <div className={cx('info')}>
                            <h3 className={cx('name')}>Mocha</h3>
                            <p className={cx('origin')}>Pug & Affenpinscher Mix  Mangilao, GU</p>
                            <div className={cx('line')}></div>
                            <p className={cx('character')}>
                                <ul className={cx('list-info')}>
                                    <li className={cx('pet-age')}>Young</li>
                                    <li className={cx('pet-sex')}>Female</li>
                                    <li className={cx('pet-size')}>Small</li>
                                </ul>
                            </p>
                            <div className={cx('line')}></div>
                            <div className={cx('about')}>
                                <h3 className={cx('about-title')}>About</h3>
                                <h4 className={cx('health')}>HEALTH</h4>
                                <ul className={cx('health-info-list')}>
                                    <li className={cx('health-info')}>Vaccinations up to date.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className={cx('note')}>
                        <div className={cx('line')}></div>
                        <p className={cx('note-content')}> Strava recommends that you should always take reasonable security steps before making online payments.</p>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('up')}>
                        <p className={cx('up-title')}>Considering Mocha for adoption?</p>
                        <a className={cx('inquiry-btn')}>Start your inquiry</a> <br />
                        <a className={cx('faqs-btn')}>read faqs</a>
                    </div>
                    <div className={cx('down')}>
                        <a className={cx('sponsor-btn')}>Sponsor</a>
                        <a className={cx('favorite-btn')}>Favorite</a>
                    </div>
                    <div className={cx('right-down')}>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Animal;
