import Record from './record';
import { FieldSet } from './field_set';
export declare type Records<TFields extends FieldSet> = ReadonlyArray<Record<TFields>>;
