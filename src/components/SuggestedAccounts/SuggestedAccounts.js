import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountsItem from './AccountItem';
const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('labed')}>{label}</p>
            <AccountsItem />
            <AccountsItem />
            <AccountsItem />
            <AccountsItem />
            <AccountsItem />
            <AccountsItem />
            <p className={cx('see-all')}>See all</p>
        </div>
    );
}

SuggestedAccounts.prototypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
