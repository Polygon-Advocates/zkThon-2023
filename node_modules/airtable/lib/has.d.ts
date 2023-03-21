declare type HasValue = any;
declare function has<O, P extends string>(object: O, property: P): object is O & {
    [key in P]: HasValue;
};
export = has;
