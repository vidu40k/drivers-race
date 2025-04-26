export interface State<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
  page: number;
  limit: number;
  total: number;
}

export interface Response<T> {
  data: T[];
  total: number;
  limit: number;
  offset: number;
}
