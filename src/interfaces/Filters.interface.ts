export type Category = 'experts' | 'card' | 'party' | 'all';

export interface FiltersInterface {
  search: string;
  priceRange: [number, number];
  category: Category;
}