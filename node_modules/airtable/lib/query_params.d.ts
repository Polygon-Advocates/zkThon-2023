export declare const paramValidators: {
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
        direction?: 'asc' | 'desc';
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
export declare const URL_CHARACTER_LENGTH_LIMIT = 15000;
export declare const shouldListRecordsParamBePassedAsParameter: (paramName: string) => boolean;
export interface SortParameter<TFields> {
    field: keyof TFields;
    direction?: 'asc' | 'desc';
}
export interface QueryParams<TFields> {
    fields?: (keyof TFields)[];
    filterByFormula?: string;
    maxRecords?: number;
    pageSize?: number;
    offset?: number;
    sort?: SortParameter<TFields>[];
    view?: string;
    cellFormat?: 'json' | 'string';
    timeZone?: string;
    userLocale?: string;
    method?: string;
    returnFieldsByFieldId?: boolean;
}
