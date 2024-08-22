

export type SortType = {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
};

export type PageableType = {
  pageNumber: number;
  pageSize: number;
  sort: SortType;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};


