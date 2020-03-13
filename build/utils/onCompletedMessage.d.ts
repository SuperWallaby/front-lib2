export declare const isIncludeKr: (str: string | null) => boolean;
declare type Err = {
    msg: string | null;
    code: String | null;
};
interface result {
    error: string | null | Err;
    ok: boolean | null;
    [data: string]: any;
}
declare const onCompletedMessage: (result: result, resultOK?: string | undefined, resultFale?: string | undefined, queryName?: string | undefined) => void;
export default onCompletedMessage;
