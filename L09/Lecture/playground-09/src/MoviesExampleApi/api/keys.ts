const moviesKeys = {
  all: ["movies"] as const,
  lists: () => [...moviesKeys.all, "list"] as const,
  list: (search: string) => [...moviesKeys.lists(), { search }] as const,
  details: () => [...moviesKeys.all, "detail"] as const,
  detail: (id: string) => [...moviesKeys.details(), id] as const,

  movieCategories: (id: string) =>
    [...moviesKeys.detail(id), "categories"] as const,
};

export default moviesKeys;
