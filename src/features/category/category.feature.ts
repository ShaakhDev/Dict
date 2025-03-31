import {baseApi} from '../api';
import {EndpointNames} from '@/constants';
import * as Types from './category.feature.types';
import {setIsFetching, setSearchResults} from '@/store';

const CategoryEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getDepartmentList: build.query<Types.GetDepartmentListResponse, void>({
      query: () => ({
        url: EndpointNames.GET_DEPARTMENT_LIST,
        method: 'GET',
      }),
    }),
    getDepartment: build.query<
      Types.GetDepartmentResponse,
      Types.GetDepartmentRequest
    >({
      query: departmentId => ({
        url: `${EndpointNames.GET_DEPARTMENT}/${departmentId}`,
        method: 'GET',
      }),
    }),
    getCategoryList: build.query<
      Types.GetCategoryListResponse,
      Types.GetCategoryListRequest
    >({
      query: params => ({
        url: EndpointNames.GET_CATEGORY_LIST,
        method: 'GET',
        params,
      }),
    }),
    getCategory: build.query<
      Types.GetCategoryResponse,
      Types.GetCategoryRequest
    >({
      query: departmentId => ({
        url: `${EndpointNames.GET_DEPARTMENT}/${departmentId}`,
        method: 'GET',
      }),
    }),
    getWordList: build.query<
      Types.GetWordListResponse,
      Types.GetWordListRequest
    >({
      query: params => ({
        url: EndpointNames.GET_WORD_LIST,
        method: 'GET',
        params,
      }),
    }),
    getWord: build.query<Types.GetWordResponse, Types.GetWordRequest>({
      query: wordId => ({
        url: `${EndpointNames.GET_WORD}/${wordId}`,
        method: 'GET',
      }),
    }),
    searchWord: build.query<Types.GetWordListResponse, Types.SearchWordRequest>(
      {
        query: params => ({
          url: EndpointNames.SEARCH_WORD,
          method: 'GET',
          params,
        }),
        onQueryStarted: async (args, {dispatch, queryFulfilled}) => {
          dispatch(setIsFetching(true));
          const response = await queryFulfilled;

          if (response.data) {
            dispatch(setSearchResults(response.data.data));
          }
        },
      },
    ),
  }),
  overrideExisting: true,
});

export const {
  useGetDepartmentListQuery,
  useGetCategoryListQuery,
  useGetDepartmentQuery,
  useGetCategoryQuery,
  useGetWordListQuery,
  useGetWordQuery,
  useSearchWordQuery,
} = CategoryEndpoints;
