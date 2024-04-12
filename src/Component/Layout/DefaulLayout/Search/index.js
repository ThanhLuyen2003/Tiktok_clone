import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper } from '../../../Poper';
import AccountItem from '../../../AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { useEffect, useRef, useState } from 'react';
import useDebounce from '../../../../Hooks/useDebounce';
import axios from 'axios'
const cx = classNames.bind(styles)

function Search() {

    const [searchValue, setsearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setloading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {

        if (!debounce.trim()) {
            setSearchResult([])
            return;
        }

        setloading(true);
        axios.get(`https://tiktok.fullstack.edu.vn/api/users/search`,
            {
                params: {
                    q: debounce,
                    type: 'less'
                }
            })
            .then(res => {
                setSearchResult(res.data.data);
                setloading(false)
            })
            .catch(e => {
                setloading(false)
            })
    }, [debounce])

    const handlerChange = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setsearchValue(value);
        }
    }


    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0 && showResult}
            render={attts => (
                <div className={cx('search-result')} tabIndex={-1} {...attts}>
                    <Wrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {searchResult.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}

                    </Wrapper>
                </div>
            )}

            onClickOutside={() => {
                setShowResult(false)
            }}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder='Search accounts and videos'
                    onChange={handlerChange}
                    value={searchValue}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading &&

                    // clear
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            inputRef.current.focus();
                            setsearchValue('');
                            setSearchResult([]);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill='rgba(22, 24, 35, 0.6)' width="14" height="14" viewBox="0 0 512 512">
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                        </svg>
                    </button>
                }

                {/* Loading */}
                {loading &&
                    <div className={cx('loading')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill='rgba(22, 24, 35, 0.6)' width="14" height="14" viewBox="0 0 512 512">
                            <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                        </svg>
                    </div>}
                <span className={cx('span')} ></span>


                <button className={cx('search-btn')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='rgba(22, 24, 35, 0.6)' width="18" height="18" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                </button>

            </div>
        </HeadlessTippy>

    );
}

export default Search;