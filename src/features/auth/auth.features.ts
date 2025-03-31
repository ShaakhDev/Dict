import {authApi} from '../api';
import * as Types from './auth.features.types';

const AuthEndpoints = authApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<Types.LoginResponse, Types.LoginRequest>({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    register: build.mutation<Types.RegisterResponse, Types.RegisterRequest>({
      query: body => ({
        url: '/signup',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useLoginMutation, useRegisterMutation} = AuthEndpoints;
