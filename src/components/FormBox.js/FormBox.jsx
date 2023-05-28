import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './FormBox.module.scss';
import images from '@/assets/images';

const cx = classNames.bind(styles);

const FormBox = ({ logo, animalImage, leftContent, children }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    {leftContent || (
                        <div>
                            <div className={cx('logo')}>
                                <img src={logo || images.blueLogo} alt="logo" />
                            </div>

                            <div className={cx('pet')}>
                                <img src={animalImage || images.animalForm} alt="pet" />
                            </div>
                        </div>
                    )}
                </div>
                <div className={cx('right')}>{children}</div>
            </div>
        </div>
    );
};
FormBox.propTypes = {
    children: PropTypes.node.isRequired,
    leftContent: PropTypes.node,
    logo: PropTypes.element,
    animalImage: PropTypes.element,
};
export default FormBox;
