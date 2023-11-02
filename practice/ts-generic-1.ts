// 泛型就是型別的參數

/*
// 改寫與統整以下型別為泛型
  type StrList = string[];
  type NumList = number[];
  type BoolList = boolean[];

  type GenericList<T> = ???
*/

// ans
type GenericList<T> = T[];
const myList: GenericList<string> = ["A"];

// ---------------------
/*
// 改寫與統整以下型別為泛型
  type ValueA = {
    key: string;
    value: number;
  };
  type NodeA = {
    root: ValueA;
    children: NodeA[];
  };

  type ValueB = {
    key: string;
    value: string[];
  };
  type NodeB = {
    root: ValueB;
    children: NodeB[];
  };

  type Value<> = ???
  type TreeNode<> = ???
*/

// ans
type Value<V> = {
  key: string;
  value: V;
};
type TreeNode<Val> = {
  root: Val;
  children: TreeNode<Val>[];
};
