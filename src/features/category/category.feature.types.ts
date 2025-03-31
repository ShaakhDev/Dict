import {Category, Department, Word} from '@/types';
/// ================= request types =================
export type GetCategoryListRequest = {
  department?: string;
};
export type GetDepartmentRequest = string;
export type GetCategoryRequest = string;
export type GetWordRequest = string;
export type GetWordListRequest = {
  category?: string;
  search?: string;
};
export type SearchWordRequest = {
  search: string;
};
/// ================= response types =================
export type GetDepartmentListResponse = {
  success: boolean;
  data: Array<Department>;
};

export type GetCategoryListResponse = {
  success: boolean;
  data: Array<Category>;
};
export type GetDepartmentResponse = {
  success: boolean;
  data: Department;
};
export type GetCategoryResponse = {
  success: boolean;
  data: Category;
};

export type GetWordListResponse = {
  success: boolean;
  data: Array<Word>;
};
export type GetWordResponse = {
  success: boolean;
  data: Word;
};
