import {useEffect, useState} from 'react';

import zomato from '../api/zomato';

export default () => {
  const [result, setResult] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchapi = async (searchTerm) => {
    try {
      const response = await zomato.get('/search', {
        params: {
          q: searchTerm,
          count: 50,
        },
      });
      setResult(response.data.restaurants);
    } catch (err) {
      setErrorMsg('Something went wrong');
    }
  };

  useEffect(() => {
    searchapi('pizza');
  }, []);

  return [searchapi, result, errorMsg];
};

// const yyyymmdd = () => {
//   const x = new Date();
//   const y = x.getFullYear().toString();
//   let m = (x.getMonth() + 1).toString();
//   let d = x.getDate().toString();
//   d.length == 1 && (d = '0' + d);
//   m.length == 1 && (m = '0' + m);
//   const yyyymmdd = y + m + d;
//   return yyyymmdd;
// };

// params: {
//   client_id: 'DH3YNNS0L0XYL25BBWMYYWQNFHFUB0HJKR2WYGAJ5OX5C00N',
//   client_secret: 'Q0UTPVTGRCSNTPC3ZQV0HL3VKLN0QH41KMIQDZRNCLYLINGL',
//   categoryId: '4d4b7105d754a06374d81259',
//   v: yyyymmdd(),
//   limit: 50,
//   query: searchTerm,
//   near: 'san jose',
// },
