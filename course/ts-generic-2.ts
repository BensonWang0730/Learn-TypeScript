// https://www.youtube.com/watch?v=7yA4ALLoSxY
// 函式使用泛型

// ---
// const fn = (param: string | number): (string | number)[] => [param];
// fn(123);
// fn("123");

// 改寫成泛型 (用泛型會變得很彈性)
type ans = string | number;
const fn2 = <T>(param: T): T[] => [param];
fn2<ans>(123);
fn2("123");

// ---
// const fn3 = <T>(param: T): T[] => {
//   return [param];
// };

// 加入 type
type GenericFn = <T>(param: T) => T[];
const fn4: GenericFn = (param) => {
  return [param];
};

// 比較 <T> 的位置，FnType6 需要指定型別，FnType5 則是隨參數而變(動態)
type FnType5 = <T>(param: T) => T[];
type FnType6<T> = (param: T) => T[];

const fn5: FnType5 = (a) => [a];
const fn6: FnType6<string> = (a) => [a];

fn5(123);
fn6("123");

// ---
// type 搭配泛型，用 extends keyof，這種方式很適合用在 api
type GenericKeyValObj<T extends keyof any, P> = {
  [key in T]: P;
};
type ApiKey = "user" | "id" | "password";
type UserApiData = GenericKeyValObj<ApiKey, string>;

// ---
// interface ＆ type 用在函式
interface FnI {
  <T>(param: T): T[];
}
type FnT = <T>(param: T) => T[];

const fn: FnI = (a) => [a];
