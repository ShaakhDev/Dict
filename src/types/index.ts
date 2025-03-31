import {ImageSourcePropType} from 'react-native';

export type MainCategory = {
  name: string;
  image: string;
  id: string;
};

export type Department = {
  _id: string;
  name: string;
  image: string;
};

export type Category = {
  _id: string;
  name: string;
  deparment: Department;
};

export type Word = {
  _id: string;
  category: Category;
  name: string;
  desc: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type Theme = 'light' | 'dark';
