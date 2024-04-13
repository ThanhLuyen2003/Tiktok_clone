import classNames from "classnames/bind";
import styles from './SugAcount.module.scss'
import Tippy from "@tippyjs/react/headless";
import { Wrapper } from "../../../../Poper";
import Button from "../../../../Button";

const cx = classNames.bind(styles);

function AccountItem({ data }) {

    const renderPreview = () => {

        return (
            <Wrapper >
                <div className={cx('header')}>
                    <img
                        src="https://anhanime.com/wp-content/uploads/2022/05/anh-zoro-1.jpg"
                        alt=""
                        className={cx('avatarr')}
                    />
                    <Button small={true} primary={true} >Follow</Button>
                </div>

                <div className={cx('item-info')}>
                    <p className={cx('nickName')}>
                        <strong>ThanhLuyen070303 </strong>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(79, 206, 223)" width={13} height={13} viewBox="0 0 512 512">
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                        </svg>
                    </p>
                    <p className={cx('name')}> Vũ Thanh Luyện  </p>
                </div>

                <div style={{ display: 'flex', padding: 5, marginLeft: 8 }}>
                    <h4>6.7M</h4>
                    <p style={{ marginLeft: 5 }}>Followers</p>
                    <h4 style={{ marginLeft: 15 }}>999M</h4>
                    <p style={{ marginLeft: 5 }}>Likes</p>
                </div>

            </Wrapper>
        )
    }

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                placement="bottom-start"
                render={renderPreview}
            >
                <div className={cx('account-item')}>

                    <img
                        src="https://anhanime.com/wp-content/uploads/2022/05/anh-zoro-1.jpg"
                        alt=""
                        className={cx('avatar')}
                    />

                    <div className={cx('item-info')}>
                        <p className={cx('nickName')}>
                            <strong>ThanhLuyen070303 </strong>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(79, 206, 223)" width={13} height={13} viewBox="0 0 512 512">
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                            </svg>
                        </p>
                        <p className={cx('name')}> Vũ Thanh Luyện  </p>
                    </div>

                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;