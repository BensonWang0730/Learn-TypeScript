// 預設泛型型別 <T = 型別>
type GenericTypeWithDefaultType<Val = string> = {
  [key: string]: Val;
};

type StrValObj = GenericTypeWithDefaultType;
type NumValObj = GenericTypeWithDefaultType<number>;

const StrValObj: StrValObj = {
  a: "",
};
const NumValObj: NumValObj = {
  a: 123,
};

// extends 限縮型別
// <type>  ->  限縮 string | number
type CustomKeyObj<Key extends string | number, Val = any> = {
  [key in Key]: Val;
};

type UserApiDataKey = "user_info" | "email";
type UserApiData2 = CustomKeyObj<UserApiDataKey, string>;

const mockUserApiData: UserApiData2 = {
  user_info: "",
  email: "",
};
