export interface Category {
  id: any;
  name: string;
  code: string;
  key: number;
  description: string;
  type: string;
  sub?: Category[];
  text: string;
  img?: string;
}
