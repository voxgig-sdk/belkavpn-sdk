"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ProxyServerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BELKAVPN_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BELKAVPN_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BelkavpnSDK.test();
        const ent = testsdk.ProxyServer();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BELKAVPN_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'proxy_server.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "country", "req": false, "short": "The country where the proxy server is located", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "host", "req": false, "short": "The hostname or IP address of the proxy server", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "port", "req": false, "short": "The port number of the proxy server", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "status", "req": false, "short": "The operational status of the proxy server", "type": "`$STRING`", "index$": 3 }], "name": "proxy_server", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /socks", "json": "{\"operationId\":\"getSocks5List\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"proxyList\":{\"summary\":\"Example proxy server list\",\"value\":[{\"country\":\"US\",\"host\":\"proxy1.belkavpn.com\",\"port\":1080,\"status\":\"active\"},{\"country\":\"UK\",\"host\":\"proxy2.belkavpn.com\",\"port\":1080,\"status\":\"active\"}]}},\"schema\":{\"items\":{\"properties\":{\"country\":{\"description\":\"The country where the proxy server is located\",\"example\":\"US\",\"type\":\"string\"},\"host\":{\"description\":\"The hostname or IP address of the proxy server\",\"example\":\"proxy1.belkavpn.com\",\"type\":\"string\"},\"port\":{\"description\":\"The port number of the proxy server\",\"example\":1080,\"type\":\"integer\"},\"status\":{\"description\":\"The operational status of the proxy server\",\"enum\":[\"active\",\"inactive\",\"maintenance\"],\"example\":\"active\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successfully retrieved the list of SOCKS5 proxy servers\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"example\":\"Failed to retrieve proxy server list\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message indicating service unavailability\",\"example\":\"Service temporarily unavailable\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Service unavailable\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/socks", "segments": [{ "lit": "socks" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "proxy_server", "name__orig": "proxy_server", "Name": "ProxyServer", "name_": "proxy_server", "name-": "proxy-server", "NAME": "PROXY_SERVER", "index$": 0 }, { "active": true, "entity": "proxy_server", "key$": "BasicProxyServerFlow", "kind": "basic", "name": "BasicProxyServerFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "proxy_server_ref01" } }], "index$": 0 }] }, 'ProxyServer');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let proxy_server_ref01_data = Object.values(setup.data.existing.proxy_server)[0];
        // LIST
        const proxy_server_ref01_ent = client.ProxyServer();
        const proxy_server_ref01_match = {};
        const proxy_server_ref01_list = (await proxy_server_ref01_ent.list(proxy_server_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/proxy_server/ProxyServerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BelkavpnSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['proxy_server01', 'proxy_server02', 'proxy_server03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BELKAVPN_TEST_PROXY_SERVER_ENTID': idmap,
        'BELKAVPN_TEST_LIVE': 'FALSE',
        'BELKAVPN_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['BELKAVPN_TEST_PROXY_SERVER_ENTID'];
    const live = 'TRUE' === env.BELKAVPN_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BELKAVPN_TEST_PROXY_SERVER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.BelkavpnSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.BELKAVPN_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ProxyServerEntity.test.js.map