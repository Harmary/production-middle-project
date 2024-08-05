import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authtorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
});
