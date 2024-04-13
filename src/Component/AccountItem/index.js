import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={data.avatar}
                alt="cc" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name} </span>
                    {data.tick &&
                        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(79, 206, 223)" width={13} height={13} viewBox="0 0 512 512">
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                        </svg>
                    }
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>

        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object
}

export default AccountItem;