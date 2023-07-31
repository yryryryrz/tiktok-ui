import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UseGroupIcon,
    UseGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
} from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UseGroupIcon />}
                    activeIcon={<UseGroupActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
            </Menu>
            <SuggestedAccounts label={'Suggested accounts'} />
            {/* <SuggestedAccounts label={'Following accounts'} /> */}
        </aside>
    );
}

export default Sidebar;
