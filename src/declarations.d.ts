// This file holds ambient type declarations.
declare module '*.png';

type StrNum = string | number;

type ReqOptions = {
  method: 'POST' | 'GET';
  headers?: { [key: string]: string };
  body?: string;
};
