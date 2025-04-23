type Person = {
  name: string;
  name1: string;
  isActive: boolean;
};

type Primitive = string | boolean | number;

type PickByType<T extends Person, V extends Primitive> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
};

type StringProperties = PickByType<Person, string>; // op { name: string, name1: string }
type BooleanProperties = PickByType<Person, boolean>; // op { isActive: boolean }
type NumberProperties = PickByType<Person, number>; // op {}
