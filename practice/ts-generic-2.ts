// https://www.youtube.com/watch?v=pRbpMmCkOpo
// 完成以下的型別 type MyMap
/*
  tpye MyMap = <T,P>() =>  //...  
  const map: MyMap = (dataList, cb) => dataList.map(cb);
  map([123], (d) => `${d}`);
  
  const res1 = map([""], (data) => !!data);
  type Boolist = typeof res1; // boolean[]
  
  const res2 = map([123, 456], (data) => String(data));
  type StrList = typeof res2; // string[]
*/
// 主要暸解回傳值便可以設定型別
type MyMap = <T, P>(dataList: T[], cb: (data: T) => P) => P[];
