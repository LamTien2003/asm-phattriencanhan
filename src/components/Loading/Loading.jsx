import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Loading.module.scss';

const cx = classNames.bind(styles);


function Loading() {
    return (
        <p className={cx('loadLogin')}>
            <FontAwesomeIcon icon={faSpinner} />
        </p>
    );
}

export default Loading;
