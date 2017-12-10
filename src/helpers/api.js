import { select } from 'react-cookie';
import qs from 'qs';

export const getOptions = params => ({
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: qs.stringify(params, { addQueryPrefix: true }),
  mode: 'cors',
  credentials: 'same-origin'
});

const getCookiesData = () => {
  // let cookies = select();
  // let string = '';
  // for (let i in cookies) {
  //   if (Object.prototype.hasOwnProperty.call(cookies, i)) {
  //     string += `${i}=${cookies[i]}; `;
  //   }
  // }
  // return string;
};

//https://github.com/alexolefirenko/react-isomorphic-tools/blob/v2/src/lib/Fetcher/FetcherClass.js
