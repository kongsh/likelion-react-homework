import { tm } from '@/utils/tw-merge';
import { BookListItem } from '../types';
import getMatches from '../utils/get-matches';
import Card from './card';

interface SearchedListProps {
  query: string;
  list: BookListItem[];
}

function SearchList({ query, list }: SearchedListProps) {
  const filteredList = getMatches(list, query);

  const filteredCount = filteredList.length;
  const isEmpty = filteredCount === 0;

  return (
    <div>
      <h3 className="sr-only">검색된 리스트</h3>

      {isEmpty && (
        <p className="text-xl text-slate-700 font-semibold text-center mt-8">
          &quot;{query}&quot;에 대한 검색된 정보가 없습니다. 😥
        </p>
      )}

      {!isEmpty && (
        <>
          <p className="text-sm text-search-gray-500 mb-6 mt-8">
            {filteredCount}개 검색됨
          </p>
          <ul className={tm('flex flex-col gap-6')}>
            {filteredList.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default SearchList;
