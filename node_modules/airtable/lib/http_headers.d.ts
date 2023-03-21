declare class HttpHeaders {
    _headersByLowercasedKey: any;
    constructor();
    set(headerKey: string, headerValue: string): void;
    toJSON(): {
        [key: string]: string;
    };
}
export = HttpHeaders;
