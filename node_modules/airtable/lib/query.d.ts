import Table from './table';
import { QueryParams } from './query_params';
import { FieldSet } from './field_set';
import { Records } from './records';
declare type CallbackError = any;
declare type PageCallback<TFields extends FieldSet> = (records: Records<TFields>, processNextPage: () => void) => void;
declare type RecordCollectionCallback<TFields extends FieldSet> = (error: CallbackError, records?: Records<TFields>) => void;
declare type DoneCallback = (error: CallbackError) => void;
interface RecordCollectionRequestMethod<TFields extends FieldSet> {
    (): Promise<Records<TFields>>;
    (done: RecordCollectionCallback<TFields>): void;
}
interface RecordPageIteratationMethod<TFields extends FieldSet> {
    (pageCallback: PageCallback<TFields>): Promise<void>;
    (pageCallback: PageCallback<TFields>, done: DoneCallback): void;
}
/**
 * Builds a query object. Won't fetch until `firstPage` or
 * or `eachPage` is called.
 *
 * Params should be validated prior to being passed to Query
 * with `Query.validateParams`.
 */
declare class Query<TFields extends FieldSet> {
    readonly _table: Table<TFields>;
    readonly _params: QueryParams<TFields>;
    readonly firstPage: RecordCollectionRequestMethod<TFields>;
    readonly eachPage: RecordPageIteratationMethod<TFields>;
    readonly all: RecordCollectionRequestMethod<TFields>;
    static paramValidators: {
        fields: (value: string[]) => {
            pass: true;
        } | {
            pass: false;
            error: string;
        };
        filterByFormula: (value: string) => {
            pass: true;
        } | {
            pass: false;
            error: string;
        };
        maxRecords: (value: number) => {
            pass: true;
        } | {
            pass: false;
            error: string;
        };
        pageSize: (value: number) => {
            pass: true;
        } | {
            pass: false;
            error: string;
        };
        offset: (value: number) => {
            pass: true;
        } | {
            pass: false;
            error: string;
        };
        sort: (value: {
            field: string;
            direction?: "desc" | "asc";
        }[]) => {
            pass: true;
        } | {
            pass: false;
            error: string;
        };
        view: (value: string) => {
            pass: true;
        } | {
            pass: false;
            error: string;
        };
        cellFormat: (value: "string" | "json") => {
            pass: true;
        } | {
            pass: false;
            error: string;
        };
        timeZone: (value: string) => {
            pass: true;
        } | {
            pass: false;
            error: string;
        };
        userLocale: (value: string) => {
            pass: true;
        } | {
            pass: false;
            error: string;
        };
        method: (value: "string" | "json") => {
            pass: true;
        } | {
            pass: false;
            error: string;
        };
        returnFieldsByFieldId: (value: boolean) => {
            pass: true;
        } | {
            pass: false;
            error: string;
        };
    };
    constructor(table: Table<TFields>, params: QueryParams<TFields>);
    /**
     * Validates the parameters for passing to the Query constructor.
     *
     * @params {object} params parameters to validate
     *
     * @return an object with two keys:
     *  validParams: the object that should be passed to the constructor.
     *  ignoredKeys: a list of keys that will be ignored.
     *  errors: a list of error messages.
     */
    static validateParams<TFields extends FieldSet, Params extends QueryParams<TFields> = QueryParams<TFields>>(params: Params): {
        validParams: QueryParams<TFields>;
        ignoredKeys: string[];
        errors: string[];
    };
}
export = Query;
