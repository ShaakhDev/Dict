import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import Config from '@/config';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL + '/api',
});

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
});

const authBaseQuery = fetchBaseQuery({
  baseUrl: 'https://api.lacarea.com/auth',
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: authBaseQuery,
  endpoints: () => ({}),
});
