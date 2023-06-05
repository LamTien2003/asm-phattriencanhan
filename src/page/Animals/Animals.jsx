import { NavLink } from 'react-router-dom';

import styles from './Animals.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Animals = () => {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>FIND YOUR BEST MATCH</h2>
            <div className={cx('cards')}>
                <div className={cx('card')}>    
                    <div className={cx('like-btn')}></div>
                    <NavLink to="/animals/id">
                        <img 
                            className={cx('image')} 
                            src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48100346/1/?bust=1591093605&width=450'
                        />
                    </NavLink>
                    <h4 className={cx('name')}>Mocha</h4>
                    <p className={cx('info')}><p>Young, Pug & Affenpinscher</p> <p>9 miles away</p></p>
                </div>
                <div className={cx('card')}>    
                <div className={cx('like-btn')}></div>
                    <NavLink to="/animals/id">
                        <img 
                            className={cx('image')} 
                            src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48100346/1/?bust=1591093605&width=450'
                        />
                    </NavLink>
                    <h4 className={cx('name')}>Kimble</h4>
                    <p className={cx('info')}><p>Puppy, Chihuahua</p> <p>9 miles away</p></p>
                </div>
                <div className={cx('card')}>    
                <div className={cx('like-btn')}></div>
                    <NavLink to="/animals/id">
                        <img 
                            className={cx('image')} 
                            src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48100346/1/?bust=1591093605&width=450'
                        />
                    </NavLink>
                    <h4 className={cx('name')}>Sailor Moon</h4>
                    <p className={cx('info')}><p>Young, Affenpinscher</p> <p>9 miles away</p></p>
                </div>
                <div className={cx('card')}>    
                <div className={cx('like-btn')}></div>
                    <NavLink to="/animals/id">
                        <img 
                            className={cx('image')} 
                            src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48100346/1/?bust=1591093605&width=450'
                        />
                    </NavLink>
                    <h4 className={cx('name')}>Boo</h4>
                    <p className={cx('info')}><p>Adult, Lhasa Apso</p> <p>9 miles away</p></p>
                </div>
                <div className={cx('card')}>    
                <div className={cx('like-btn')}></div>
                    <NavLink to="/animals/id">
                        <img 
                            className={cx('image')} 
                            src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48100346/1/?bust=1591093605&width=450'
                        />
                    </NavLink>
                    <h4 className={cx('name')}>Mamba</h4>
                    <p className={cx('info')}><p>Puppy, Affenpinscher</p> <p>9 miles away</p></p>
                </div>
                <div className={cx('card')}>    
                <div className={cx('like-btn')}></div>
                    <NavLink to="/animals/id">
                        <img 
                            className={cx('image')} 
                            src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48100346/1/?bust=1591093605&width=450'
                        />
                    </NavLink>
                    <h4 className={cx('name')}>Pebbles</h4>
                    <p className={cx('info')}><p>Puppy, Affenpinscher</p> <p>9 miles away</p></p>
                </div>
                <div className={cx('card')}>    
                <div className={cx('like-btn')}></div>
                    <NavLink to="/animals/id">
                        <img 
                            className={cx('image')} 
                            src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48100346/1/?bust=1591093605&width=450'
                        />
                    </NavLink>
                    <h4 className={cx('name')}>Rambo</h4>
                    <p className={cx('info')}><p>Puppy, Affenpinscher</p> <p>9 miles away</p></p>
                </div>
                <div className={cx('card')}>    
                <div className={cx('like-btn')}></div>
                    <NavLink to="/animals/id">
                        <img 
                            className={cx('image')} 
                            src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48100346/1/?bust=1591093605&width=450'
                        />
                    </NavLink>
                    <h4 className={cx('name')}>Cookie</h4>
                    <p className={cx('info')}><p>Puppy, Affenpinscher</p> <p>9 miles away</p></p>
                </div>
            </div>
        </div>
    )
};

export default Animals;
