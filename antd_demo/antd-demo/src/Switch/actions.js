import { CHANGELOCALE } from './actionTypes.js';

export const changelocale = (locale, messages) => ({
    type: CHANGELOCALE,
    locales: locale,
    messages: messages
});
