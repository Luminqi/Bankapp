import { CHANGETAB } from './actionTypes.js';

export const changetab = (key) => ({
    type: CHANGETAB,
    key: key
});

// export const changetab = (key) => {
//     console.log(key, typeof(key));
//     return {
//         type: CHANGETAB,
//         key: key
//     };
// };
