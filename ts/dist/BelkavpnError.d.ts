import { Context } from './Context';
declare class BelkavpnError extends Error {
    isBelkavpnError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { BelkavpnError };
