import { routes } from '../../../../config/routes';
import { HomeIcon, LiveIcon, UserGroupIcon } from '../../../Icon/Icon';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import styles from './SideBar.model.scss'
import classNames from 'classnames/bind';
import SuggestedAcount from './SuggestedAcount';

const cx = classNames.bind(styles)

function SideBar() {
    return (
        <aside className={cx('wrappe')}>
            <Menu>
                <MenuItem title="For you" to={routes.home} icon={<HomeIcon width={15} height={15} />} />
                <MenuItem title="Following" to={routes.following} icon={<UserGroupIcon width={15} height={15} />} />
                <MenuItem title="Live" to={routes.live} icon={<LiveIcon width={15} height={15} />} />
            </Menu>

            <SuggestedAcount label='Suggested accounts' />
            <SuggestedAcount label='Following accounts' />

        </aside>
    );
}

export default SideBar;