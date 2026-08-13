# Belkavpn SDK feature factory

from belkavpn_sdk.feature.base_feature import BelkavpnBaseFeature
from belkavpn_sdk.feature.test_feature import BelkavpnTestFeature


def _make_feature(name):
    features = {
        "base": lambda: BelkavpnBaseFeature(),
        "test": lambda: BelkavpnTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
