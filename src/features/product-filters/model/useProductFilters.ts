import { useAppDispatch, useAppSelector } from '@/app/providers/store';
import { selectCategory, selectSearch } from './selectors';
import { setCategory, setSearch } from './slice';

export function useProductFilters() {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);
  const category = useAppSelector(selectCategory);

  return {
    search,
    category,
    setSearch: (value: string) => dispatch(setSearch(value)),
    setCategory: (value: string) => dispatch(setCategory(value)),
  };
}
