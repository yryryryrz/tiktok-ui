import PropTypes from 'prop-types';
import Header from '../componentsHeader/Header/Header';
import Sidebar from './Sidebar/Sidebar';
import stypes from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(stypes);

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

defaultLayout.prototypes = {
    children: PropTypes.node.isRequired,
};

export default defaultLayout;
