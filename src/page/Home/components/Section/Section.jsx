import classNames from 'classnames/bind';
import styles from './Section.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Section = ({ style, children }) => {
    console.log(style);
    return (
        <div className={cx('wrapper')} style={style}>
            <div className={cx('content')}>{children}</div>
        </div>
    );
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};

export default Section;
