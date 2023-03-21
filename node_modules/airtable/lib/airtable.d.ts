import Base from './base';
import AirtableRecord from './record';
import AirtableTable from './table';
import AirtableError from './airtable_error';
import AirtableQuery from './query';
import { AirtableBase } from './airtable_base';
import { ObjectMap } from './object_map';
import { FieldSet as AirtableFieldSet } from './field_set';
import { Collaborator as AirtableCollaborator } from './collaborator';
import { Thumbnail as AirtableThumbnail } from './thumbnail';
import { Attachment as AirtableAttachment } from './attachment';
import { Records as AirtableRecords } from './records';
import { RecordData as AirtableRecordData } from './record_data';
import { QueryParams as AirtableSelectOptions } from './query_params';
declare type CustomHeaders = ObjectMap<string, string | number | boolean>;
declare class Airtable {
    readonly _apiKey: string;
    readonly _apiVersion: string;
    readonly _apiVersionMajor: string;
    readonly _customHeaders: CustomHeaders;
    readonly _endpointUrl: string;
    readonly _noRetryIfRateLimited: boolean;
    readonly _requestTimeout: number;
    static Base: typeof Base;
    static Record: typeof AirtableRecord;
    static Table: typeof AirtableTable;
    static Error: typeof AirtableError;
    static apiKey: string;
    static apiVersion: string;
    static endpointUrl: string;
    static noRetryIfRateLimited: boolean;
    static requestTimeout: number;
    constructor(opts?: Airtable.AirtableOptions);
    base(baseId: string): Airtable.Base;
    static default_config(): Airtable.AirtableOptions;
    static configure({ apiKey, endpointUrl, apiVersion, noRetryIfRateLimited, requestTimeout, }: Pick<Airtable.AirtableOptions, 'apiKey' | 'endpointUrl' | 'apiVersion' | 'noRetryIfRateLimited' | 'requestTimeout'>): void;
    static base(baseId: string): Airtable.Base;
}
declare namespace Airtable {
    interface AirtableOptions {
        apiKey?: string;
        apiVersion?: string;
        customHeaders?: CustomHeaders;
        endpointUrl?: string;
        noRetryIfRateLimited?: boolean;
        requestTimeout?: number;
    }
    type FieldSet = AirtableFieldSet;
    type Collaborator = AirtableCollaborator;
    type Attachment = AirtableAttachment;
    type Thumbnail = AirtableThumbnail;
    type Base = AirtableBase;
    type Error = AirtableError;
    type Table<TFields extends AirtableFieldSet> = AirtableTable<TFields>;
    type SelectOptions<TFields> = AirtableSelectOptions<TFields>;
    type Query<TFields extends AirtableFieldSet> = AirtableQuery<TFields>;
    type Record<TFields extends AirtableFieldSet> = AirtableRecord<TFields>;
    type RecordData<TFields extends AirtableFieldSet> = AirtableRecordData<TFields>;
    type Records<TFields extends AirtableFieldSet> = AirtableRecords<TFields>;
}
export = Airtable;
