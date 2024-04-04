import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2.jpg"
                alt="cc" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span></span>hehe
                </p>
                <span className={cx('username')}>hehe</span>
            </div>
        </div>
    );
}

export default AccountItem;