import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '~/layouts/Sidebar';

const cx = classNames.bind(styles);

function DeafaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DeafaultLayout;
