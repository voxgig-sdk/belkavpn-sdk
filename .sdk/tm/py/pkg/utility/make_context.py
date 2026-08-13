# Belkavpn SDK utility: make_context

from projectname_sdk.core.context import BelkavpnContext


def make_context_util(ctxmap, basectx):
    return BelkavpnContext(ctxmap, basectx)
