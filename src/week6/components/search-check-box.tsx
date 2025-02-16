import { tm } from '@/utils/tw-merge';

interface SearchCheckBoxProps {
  tag: string;
  words: string[];
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchCheckBox({ tag, words, handleCheck }: SearchCheckBoxProps) {
  const checked = words.includes(tag);

  return (
    <label
      className={tm(
        'cursor-pointer',
        'inline-flex gap-1 items-center',
        'bg-white px-4 py-2 border border-search-gray-200 rounded-sm',
        'has-checked:bg-black has-checked:text-white'
      )}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={handleCheck}
      />
      {tag}
    </label>
  );
}

export default SearchCheckBox;
