import AirtableError from './airtable_error';
import Table from './table';
import runAction from './run_action';
import Airtable from './airtable';
import { AirtableBase } from './airtable_base';
import { FieldSet } from './field_set';
declare type BaseBody = any;
interface BaseRequestOptions {
    method?: string;
    path?: string;
    qs?: Record<string, BaseBody>;
    headers?: Record<string, string>;
    body?: BaseBody;
    _numAttempts?: number;
}
interface BaseResponse {
    statusCode: Response['status'];
    headers: Response['headers'];
    body: BaseBody;
}
declare class Base {
    readonly _airtable: Airtable;
    readonly _id: string;
    constructor(airtable: Airtable, baseId: string);
    table<TFields extends FieldSet>(tableName: string): Table<TFields>;
    makeRequest(options?: BaseRequestOptions): Promise<BaseResponse>;
    /**
     * @deprecated This method is deprecated.
     */
    runAction(method: string, path: string, queryParams: runAction.Params, bodyData: runAction.Body, callback: runAction.Callback): void;
    _getRequestHeaders(headers: {
        [key: string]: string;
    }): {
        [key: string]: string;
    };
    _checkStatusForError(statusCode: number, body?: BaseBody): null | AirtableError;
    doCall<TFields extends FieldSet>(tableName: string): Table<TFields>;
    getId(): string;
    static createFunctor(airtable: Airtable, baseId: string): AirtableBase;
}
export = Base;
