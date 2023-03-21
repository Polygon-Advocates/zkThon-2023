import Base from './base';
declare type ActionBody = any;
declare type ActionError = any;
declare type ActionParams = {
    [key: string]: ActionBody;
};
declare type ActionResponse = {
    -readonly [key in keyof Response]: Response[key];
} & {
    statusCode: number;
};
declare type ActionCallback = (error: ActionError, response?: ActionResponse, body?: ActionBody) => void;
declare function runAction(base: Base, method: string, path: string, queryParams: ActionParams, bodyData: ActionBody, callback: ActionCallback, numAttempts: number): void;
declare namespace runAction {
    type Body = ActionBody;
    type Params = ActionParams;
    type Callback = ActionCallback;
}
export = runAction;
