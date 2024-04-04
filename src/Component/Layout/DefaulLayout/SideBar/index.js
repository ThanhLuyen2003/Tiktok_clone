import styles from './SideBar.model.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>sidebar</h2>
        </aside>
    );
}

export default SideBar;