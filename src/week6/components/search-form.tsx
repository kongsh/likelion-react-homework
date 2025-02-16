import { tm } from '@/utils/tw-merge';
import { useId } from 'react';
import { deleteQueryParam, setQueryParam } from '../utils/search-params';
import SearchCheckBox from './search-check-box';

const BOOK_TAGS = ['국내', '해외', '시/희곡', '소설'];

const convertQueryString = (queryArray: string[]) =>
  queryArray.filter(Boolean).join(' ').trim();

interface SearchFormProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function SearchForm({ query, setQuery }: SearchFormProps) {
  const searchInputId = useId();

  const words = query.split(' ').filter(Boolean);

  const isEnabledSearch = words.length > 0;

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleSearch = () => {
    if (words.length > 0) {
      setQueryParam(convertQueryString(words));
    } else {
      deleteQueryParam();
    }
  };

  const handleCheck = (tag: string, isChecked: boolean) => {
    const newWords = isChecked
      ? [...words, tag]
      : words.filter((word) => word !== tag);
    const nextQuery = convertQueryString(newWords);
    setQuery(nextQuery);
  };

  return (
    <form action={handleSearch}>
      <label htmlFor={searchInputId} className="sr-only">
        책 검색
      </label>
      <div className="relative">
        <input
          type="search"
          name="query"
          id={searchInputId}
          className={tm(
            'flex flex-col py-4 pl-5 pr-30',
            'bg-white border border-search-gray-200',
            'w-3xl'
          )}
          placeholder="검색어를 입력해주세요."
          value={query}
          onChange={handleQuery}
        />
        <button
          type="submit"
          aria-disabled={!isEnabledSearch}
          className={tm(
            'cursor-pointer opacity-80',
            'bg-black text-white',
            'flex gap-2 items-center',
            'px-4 py-2 rounded-sm',
            'absolute right-2 top-[9px]',
            'aria-disabled:cursor-not-allowed not-aria-disabled:hover:opacity-100'
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="none"
            version="1.1"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <defs>
              <clipPath id="master_svg0_1_238">
                <rect x="0" y="0" width="16" height="16" rx="0" />
              </clipPath>
            </defs>
            <g clipPath="url(#master_svg0_1_238)">
              <g transform="matrix(1,0,0,-1,0,32.6875)">
                <g>
                  <path
                    d="M13,25.84375Q12.9688,23.65625,11.75,22L15.7188,18.0625Q16,17.75,16,17.34375Q16,16.9375,15.7188,16.625Q15.4062,16.34375,15,16.34375Q14.5938,16.34375,14.2812,16.625L10.3438,20.59375Q8.6875,19.375,6.5,19.34375Q3.75,19.40625,1.90625,21.25Q0.0625,23.09375,0,25.84375Q0.0625,28.59375,1.90625,30.43755Q3.75,32.28125,6.5,32.34375Q9.25,32.28125,11.0938,30.43755Q12.9375,28.59375,13,25.84375ZM6.5,21.34375Q7.71875,21.34375,8.75,21.9375Q9.78125,22.53125,10.4062,23.59375Q11,24.65625,11,25.84375Q11,27.03125,10.4062,28.09375Q9.78125,29.15625,8.75,29.74995Q7.71875,30.34375,6.5,30.34375Q5.28125,30.34375,4.25,29.74995Q3.21875,29.15625,2.59375,28.09375Q2,27.03125,2,25.84375Q2,24.65625,2.59375,23.59375Q3.21875,22.53125,4.25,21.9375Q5.28125,21.34375,6.5,21.34375Z"
                    fill="#FFFFFF"
                    fillOpacity="1"
                  />
                </g>
              </g>
            </g>
          </svg>
          <span>Search</span>
        </button>
      </div>
      <div className="flex gap-4 mt-8">
        {BOOK_TAGS.map((tag) => (
          <SearchCheckBox
            key={tag}
            tag={tag}
            words={words}
            handleCheck={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleCheck(tag, e.currentTarget.checked)
            }
          />
        ))}
      </div>
    </form>
  );
}

export default SearchForm;
