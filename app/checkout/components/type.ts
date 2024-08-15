export type ThrottleType = {
  inputValue: string;
  resolve: any;
  fetchFn: (inputValue: string) => any;
  generateOptionsFn:(data: any) => any;
};