export interface IProps {
  options?: any;
  placeholder: string;
  id: string;
  onChange: (val: any) => any;
  value?: { value: string; label: string };
}
