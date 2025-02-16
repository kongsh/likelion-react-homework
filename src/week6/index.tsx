import { useEffect, useState } from 'react';
import SearchForm from './components/search-form';
import SearchList from './components/search-list';
import bookList from './data/book-list';
import { deleteQueryParam, getQueryParam } from './utils/search-params';

const getQueryState = () => getQueryParam() ?? '';

function SearchPage() {
  const [query, setQuery] = useState(getQueryState);

  useEffect(() => {
    const handlePopState = () => {
      setQuery(getQueryState);
    };

    globalThis.addEventListener('popstate', handlePopState);

    return () => {
      globalThis.removeEventListener('popstate', handlePopState);
      deleteQueryParam();
    };
  }, []);

  return (
    <section className="bg-search-gray-300 px-8 py-12 w-dvw flex flex-col items-center gap-2.5">
      <h2 className="font-bold text-4xl text-search-gray-900">
        Find Books! 📚
      </h2>
      <p className="text-search-gray-500 text-lg mb-[38px]">
        찾고 싶은 책의 작가, 장르, 간단한 내용을 검색해보세요
      </p>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchList query={query} list={bookList} />
    </section>
  );
}

export default SearchPage;
