import { useEffect, useRef, useState } from 'react'

import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'

import * as searchServices from '~/services/searchService'

import 'tippy.js/dist/tippy.css'

import styles from './Search.module.scss'
import { Wrapper as PoperWrapper } from '~/components/Poper'
import AccountItem from '../AccountItem'
import { useDebounce } from '~/hooks'
import { SearchIcon } from '~/components/Icons'

const cx = classNames.bind(styles)
function Search() {
   const [searchValue, setSearchValue] = useState('')
   const [searchResult, setSearchResult] = useState([])
   const [showResult, setShowResult] = useState(true)
   const [loading, setLoading] = useState(false)

   const debounced = useDebounce(searchValue, 500)

   const inputRef = useRef()
   useEffect(() => {
      if (!debounced.trim()) {
         setSearchResult([])
         return
      }

      const fetchApi = async () => {
         setLoading(true)
         const result = await searchServices.search(debounced)
         setSearchResult(result)
         setLoading(false)
      }

      fetchApi()
   }, [debounced])

   // fectch
   //     fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
   //         .then((res) => res.json())
   //         .then((res) => {
   //             setSearchResult(res.data);
   //             setLoading(false);
   //         })
   //         .catch(() => {
   //             setLoading(false);
   //         });
   // }, [debounced]);

   const handleClear = () => {
      setSearchValue('')
      setSearchResult([])
      inputRef.current.focus()
   }
   const handleHideResult = () => {
      setShowResult(false)
   }
   const handleChange = (e) => {
      const searchValue = e.target.value

      if (!searchValue.startsWith(' ')) {
         setSearchValue(searchValue)
      }
   }

   return (
      //warnning tippy
      <div>
         <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            placement="auto"
            render={(attrs) => (
               <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                  <PoperWrapper>
                     <h4 className={cx('search-title')}>Account</h4>
                     {searchResult.map((result) => (
                        <AccountItem key={result.id} data={result} />
                     ))}
                  </PoperWrapper>
               </div>
            )}
            onClickOutside={handleHideResult}
         >
            <div className={cx('search')}>
               <input
                  ref={inputRef}
                  value={searchValue}
                  placeholder="Search accounts and video"
                  spellCheck={false}
                  onChange={handleChange}
                  onFocus={() => setShowResult(true)}
               />
               {!!searchValue && !loading && (
                  <button className={cx('clear')} onClick={handleClear}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
               )}
               {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
               <button
                  className={cx('search-btn')}
                  onMouseDown={(e) => e.preventDefault()}
               >
                  <SearchIcon />
                  {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
               </button>
            </div>
         </HeadlessTippy>
      </div>
   )
}

export default Search
