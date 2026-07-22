# ProjectName SDK exists test

import pytest
from belkavpn_sdk import BelkavpnSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BelkavpnSDK.test(None, None)
        assert testsdk is not None
