import { FieldSet } from './field_set';
import Table from './table';
declare type RecordError = any;
declare type RecordJson = any;
declare type OptionalParameters = {
    typecast: boolean;
};
interface RecordCallback<TFields extends FieldSet> {
    (error: null, record: Record<TFields>): void;
    (error: RecordError): void;
}
interface RecordActionMethod<TFields extends FieldSet> {
    (): Promise<Record<TFields>>;
    (done: RecordCallback<TFields>): void;
}
interface RecordChangeMethod<TFields extends FieldSet> {
    (cellValuesByName: TFields, done: RecordCallback<TFields>): void;
    (cellValuesByName: TFields, opts: OptionalParameters, done: RecordCallback<TFields>): void;
    (cellValuesByName: TFields, opts?: OptionalParameters): Promise<Record<TFields>>;
}
declare class Record<TFields extends FieldSet> {
    readonly _table: Table<TFields>;
    _rawJson: RecordJson;
    readonly id: string;
    fields: TFields;
    readonly save: RecordActionMethod<TFields>;
    readonly patchUpdate: RecordChangeMethod<TFields>;
    readonly putUpdate: RecordChangeMethod<TFields>;
    readonly destroy: RecordActionMethod<TFields>;
    readonly fetch: RecordActionMethod<TFields>;
    readonly updateFields: RecordChangeMethod<TFields>;
    readonly replaceFields: RecordChangeMethod<TFields>;
    constructor(table: Table<TFields>, recordId: string, recordJson?: RecordJson);
    getId(): string;
    get<Field extends keyof TFields>(columnName: Field): TFields[Field];
    set<Field extends keyof TFields>(columnName: Field, columnValue: TFields[Field]): void;
    setRawJson(rawJson: RecordJson): void;
}
export = Record;
