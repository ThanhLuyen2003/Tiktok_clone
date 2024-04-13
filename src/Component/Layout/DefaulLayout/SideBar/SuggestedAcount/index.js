import classNames from "classnames/bind";
import styles from './SugAcount.module.scss'
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestedAcount({ label }) {
    return (
        <div className={cx('wrapperr')}>
            <p className={cx('label')}>{label} </p>
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <div className={cx('more-btn')}>See all</div>

        </div>
    );
}

export default SuggestedAcount;