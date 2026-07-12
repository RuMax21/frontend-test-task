import { useAppSelector } from '@/app/providers/store';
import { selectCategory, selectSearch } from '@/features/product-filters/model';
import { useProductFilters } from '@/features/product-filters/model/useProductFilters';
import { Catalog } from '@/widgets/catalog/ui/Catalog';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router';

export default function CatalogPage() {
  const search = useAppSelector(selectSearch);
  const category = useAppSelector(selectCategory);
  const [searchParams, setSearchParams] = useSearchParams();
  const { hydrateFilters } = useProductFilters();
  const hydrated = useRef(false);

  useEffect(() => {
    const urlSearch = searchParams.get('search') ?? '';
    const urlCategory = searchParams.get('category') ?? 'all';

    hydrateFilters({ search: urlSearch, category: urlCategory });
    hydrated.current = true;
  }, []);

  useEffect(() => {
    console.log('search from store:', search);
    if (!hydrated.current) return;

    const next = new URLSearchParams();
    if (search) next.set('search', search);
    if (category !== 'all') next.set('category', category);
    setSearchParams(next, { replace: true });
  }, [search, category]);

  return <Catalog />;
}
