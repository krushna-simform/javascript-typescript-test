type ReverseString<
  T extends string,
  K extends string = ""
> = T extends `${infer A}${infer B}`
  ? B extends ""
    ? `${A}${K}`
    : ReverseString<B, `${A}${K}`>
  : never;

type Rev1 = ReverseString<"abc">;
