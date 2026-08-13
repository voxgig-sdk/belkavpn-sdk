# Belkavpn SDK utility: make_context

from belkavpn_sdk.core.context import BelkavpnContext


def make_context_util(ctxmap, basectx):
    return BelkavpnContext(ctxmap, basectx)
