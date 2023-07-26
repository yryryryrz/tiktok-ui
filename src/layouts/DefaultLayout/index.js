import Header from '../componentsHeader/Header';
import Sidebar from './Sidebar';
import stypes from './DefaultLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(stypes)

function defaultLayout({ children }) {
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

export default defaultLayout;
