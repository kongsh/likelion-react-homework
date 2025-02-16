import { tm } from '@/utils/tw-merge';
import { BookListItem } from '../types';

interface CardProps {
  item: BookListItem;
}

function Card({ item }: CardProps) {
  const { readTime, tags, title, description, writeTime } = item;
  return (
    <li
      className={tm(
        'flex flex-col p-6 gap-2.5 content-start',
        'bg-white',
        'rounded-lg border border-search-gray-200'
      )}
    >
      <h3 className="font-semibold text-lg text-search-gray-900">{title}</h3>
      <p className="text-search-gray-500">{description}</p>
      <div className="flex gap-2 text-xs text-search-gray-800 font-medium">
        {tags.map((item) => (
          <span
            key={item}
            className={tm(
              'bg-search-gray-300 px-2 py-1 rounded-sm',
              'flex flex-col'
            )}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="text-search-gray-400 text-sm flex gap-5">
        <span className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="none"
            version="1.1"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <defs>
              <clipPath id="master_svg0_1_243">
                <rect x="0" y="0" width="14" height="14" rx="0" />
              </clipPath>
            </defs>
            <g clipPath="url(#master_svg0_1_243)">
              <g transform="matrix(1,0,0,-1,0,28.4375)">
                <g>
                  <path
                    d="M12.6875,21.21875Q12.6875,19.66016,11.9219,18.375Q11.1836,17.08984,9.84375,16.29687Q8.50391,15.53125,7,15.53125Q5.49609,15.53125,4.15625,16.29687Q2.81641,17.08984,2.07812,18.375Q1.3125,19.66016,1.3125,21.21875Q1.3125,22.777340000000002,2.07812,24.0625Q2.81641,25.34765,4.15625,26.14065Q5.49609,26.90625,7,26.90625Q8.50391,26.90625,9.84375,26.14065Q11.1836,25.34765,11.9219,24.0625Q12.6875,22.777340000000002,12.6875,21.21875ZM0,21.21875Q0.0273438,19.30469,0.929688,17.71875Q1.85938,16.13281,3.5,15.148438Q5.16797,14.21875,7,14.21875Q8.83203,14.21875,10.5,15.148438Q12.1406,16.13281,13.0703,17.71875Q13.9727,19.30469,14,21.21875Q13.9727,23.13281,13.0703,24.71875Q12.1406,26.304650000000002,10.5,27.28905Q8.83203,28.21875,7,28.21875Q5.16797,28.21875,3.5,27.28905Q1.85938,26.304650000000002,0.929688,24.71875Q0.0273438,23.13281,0,21.21875ZM6.34375,24.93755L6.34375,21.21875L6.34375,24.93755L6.34375,21.21875Q6.34375,20.86328,6.64453,20.67187L9.26953,18.92187Q9.78906,18.62109,10.1719,19.11328Q10.4727,19.63281,9.98047,20.01563L7.65625,21.57422L7.65625,24.93755Q7.60156,25.53905,7,25.59375Q6.39844,25.53905,6.34375,24.93755Z"
                    fill="#6B7280"
                    fillOpacity="1"
                  />
                </g>
              </g>
            </g>
          </svg>
          <time dateTime={readTime}>몇분전</time>
        </span>
        <span className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="none"
            version="1.1"
            width="12.25"
            height="14"
            viewBox="0 0 12.25 14"
          >
            <defs>
              <clipPath id="master_svg0_1_248">
                <rect x="0" y="0" width="12.25" height="14" rx="0" />
              </clipPath>
            </defs>
            <g clipPath="url(#master_svg0_1_248)">
              <g transform="matrix(1,0,0,-1,0,28.4375)">
                <g>
                  <path
                    d="M4.15625,27.56255Q4.10156,28.16405,3.5,28.21875Q2.89844,28.16405,2.84375,27.56255L2.84375,26.46875L1.75,26.46875Q1.01172,26.44145,0.519531,25.94925Q0.0273438,25.457050000000002,0,24.71875L0,24.28125L0,22.96875L0,15.96875Q0.0273438,15.23047,0.519531,14.738281Q1.01172,14.2460938,1.75,14.21875L10.5,14.21875Q11.2383,14.2460938,11.7305,14.738281Q12.2227,15.23047,12.25,15.96875L12.25,22.96875L12.25,24.28125L12.25,24.71875Q12.2227,25.457050000000002,11.7305,25.94925Q11.2383,26.44145,10.5,26.46875L9.40625,26.46875L9.40625,27.56255Q9.35156,28.16405,8.75,28.21875Q8.14844,28.16405,8.09375,27.56255L8.09375,26.46875L4.15625,26.46875L4.15625,27.56255ZM1.3125,22.96875L10.9375,22.96875L1.3125,22.96875L10.9375,22.96875L10.9375,15.96875Q10.9102,15.55859,10.5,15.53125L1.75,15.53125Q1.33984,15.55859,1.3125,15.96875L1.3125,22.96875Z"
                    fill="#6B7280"
                    fillOpacity="1"
                  />
                </g>
              </g>
            </g>
          </svg>
          <time dateTime={writeTime}>Mar 15, 2024</time>
        </span>
      </div>
    </li>
  );
}

export default Card;
