export interface PageAble<T> {
  items: T[]
  total: number
  page: number
  pages: number
  size: number
}
