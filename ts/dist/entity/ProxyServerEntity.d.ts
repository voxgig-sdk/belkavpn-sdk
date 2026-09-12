import { BelkavpnEntityBase } from '../BelkavpnEntityBase';
import type { BelkavpnSDK } from '../BelkavpnSDK';
import type { Control } from '../types';
import type { ProxyServer, ProxyServerListMatch } from '../BelkavpnTypes';
declare class ProxyServerEntity extends BelkavpnEntityBase<ProxyServer> {
    constructor(client: BelkavpnSDK, entopts: any);
    make(this: ProxyServerEntity): ProxyServerEntity;
    list(this: any, reqmatch?: ProxyServerListMatch, ctrl?: Control): Promise<ProxyServerEntity[]>;
}
export { ProxyServerEntity };
