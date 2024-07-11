export interface Filter {
  id: any;
  name: string;
  code: string;
  key: number;
  description: string;
  type: string;
  sub?: Filter[];
  text: string;
  img?: string;
}
