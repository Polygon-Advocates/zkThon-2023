import Query from './query';
import { QueryParams } from './query_params';
import Record from './record';
import Base from './base';
import { Records } from './records';
import { FieldSet } from './field_set';
import { RecordData } from './record_data';
declare type TableError = any;
declare type CreateRecord<TFields> = Pick<RecordData<Partial<TFields>>, 'fields'>;
declare type CreateRecords<TFields> = string[] | Partial<TFields>[] | CreateRecord<TFields>[];
declare type OptionalParameters = {
    typecast?: boolean;
    method?: 'get' | 'post';
};
declare type RecordCollectionCallback<TFields extends FieldSet> = (error: TableError, records?: Records<TFields>) => void;
declare type RecordCallback<TFields extends FieldSet> = (error: TableError, record?: Record<TFields>) => void;
declare type RecordListCallback<TFields extends FieldSet> = (error: TableError, records?: Records<TFields>, offset?: number) => void;
declare type RecordForEachCallback<TFields extends FieldSet> = (record: Record<TFields>) => void;
declare type RecordForEachDoneCallback = (error?: TableError) => void;
interface TableFindRecord<TFields extends FieldSet> {
    (recordId: string): Promise<Record<TFields>>;
    (recordId: string, done: RecordCallback<TFields>): void;
}
interface TableSelectRecord<TFields extends FieldSet> {
    (params?: QueryParams<TFields>): Query<TFields>;
}
interface TableCreateRecords<TFields extends FieldSet> {
    (recordsData: CreateRecords<TFields>, optionalParameters?: OptionalParameters): Promise<Records<TFields>>;
    (recordsData: CreateRecords<TFields>, optionalParameters: OptionalParameters, done: RecordCollectionCallback<TFields>): void;
    (recordsData: CreateRecords<TFields>, done: RecordCollectionCallback<TFields>): void;
    (recordData: string | Partial<TFields>, optionalParameters?: OptionalParameters): Promise<Record<TFields>>;
    (recordData: string | Partial<TFields>, optionalParameters: OptionalParameters, done: RecordCallback<TFields>): void;
    (recordData: string | Partial<TFields>, done: RecordCallback<TFields>): void;
}
interface TableChangeRecords<TFields extends FieldSet> {
    (recordId: string, recordData: Partial<TFields>, opts?: OptionalParameters): Promise<Record<TFields>>;
    (recordId: string, recordData: Partial<TFields>, opts: OptionalParameters, done: RecordCallback<TFields>): void;
    (recordId: string, recordData: Partial<TFields>, done: RecordCallback<TFields>): void;
    (recordsData: RecordData<Partial<TFields>>[], opts?: OptionalParameters): Promise<Records<TFields>>;
    (recordsData: RecordData<Partial<TFields>>[], opts: OptionalParameters, done: RecordCollectionCallback<TFields>): void;
    (recordsData: RecordData<Partial<TFields>>[], done: RecordCollectionCallback<TFields>): void;
}
interface TableDestroyRecords<TFields extends FieldSet> {
    (recordId: string): Promise<Record<TFields>>;
    (recordId: string, done: RecordCallback<TFields>): void;
    (recordIds: string[]): Promise<Records<TFields>>;
    (recordIds: string[], done: RecordCollectionCallback<TFields>): void;
}
declare class Table<TFields extends FieldSet> {
    readonly _base: Base;
    readonly id: string;
    readonly name: string;
    readonly find: TableFindRecord<TFields>;
    readonly select: TableSelectRecord<TFields>;
    readonly create: TableCreateRecords<TFields>;
    readonly update: TableChangeRecords<TFields>;
    readonly replace: TableChangeRecords<TFields>;
    readonly destroy: TableDestroyRecords<TFields>;
    /** @deprecated */
    readonly list: any;
    /** @deprecated */
    readonly forEach: any;
    static __recordsPerPageForIteration: number;
    constructor(base: Base, tableId: string, tableName: string);
    _findRecordById(recordId: string, done: RecordCallback<TFields>): void;
    _selectRecords(params?: QueryParams<TFields>): Query<TFields>;
    _urlEncodedNameOrId(): string;
    _createRecords(recordData: TFields, done: RecordCallback<TFields>): void;
    _createRecords(recordData: TFields, optionalParameters: OptionalParameters, done: RecordCallback<TFields>): void;
    _createRecords(recordsData: TFields[], done: RecordCollectionCallback<TFields>): void;
    _createRecords(recordsData: TFields[], optionalParameters: OptionalParameters, done: RecordCollectionCallback<TFields>): void;
    _updateRecords(isDestructiveUpdate: boolean, recordId: string, recordData: TFields, done: RecordCallback<TFields>): void;
    _updateRecords(isDestructiveUpdate: boolean, recordId: string, recordData: TFields, opts: OptionalParameters, done: RecordCallback<TFields>): void;
    _updateRecords(isDestructiveUpdate: boolean, recordsData: TFields[], done: RecordCollectionCallback<TFields>): void;
    _updateRecords(isDestructiveUpdate: boolean, recordsData: TFields[], opts: OptionalParameters, done: RecordCollectionCallback<TFields>): void;
    _destroyRecord(recordId: string, done: RecordCallback<TFields>): void;
    _destroyRecord(recordIds: string[], done: RecordCollectionCallback<TFields>): void;
    _listRecords(pageSize: number, offset: number, opts: OptionalParameters | RecordListCallback<TFields>, done?: RecordListCallback<TFields>): void;
    _forEachRecord(opts: OptionalParameters, callback: RecordForEachCallback<TFields>, done: RecordForEachDoneCallback): void;
}
export = Table;
