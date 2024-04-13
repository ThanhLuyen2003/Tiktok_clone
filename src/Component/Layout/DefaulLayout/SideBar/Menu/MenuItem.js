import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ title, to, icon }) {
    return (
        <nav>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
                {icon}
                <span className={cx('title')}>{title} </span>
            </NavLink>
        </nav>
    );
}

export default MenuItem;