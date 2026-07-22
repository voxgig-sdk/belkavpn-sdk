<?php
declare(strict_types=1);

// Belkavpn SDK exists test

require_once __DIR__ . '/../belkavpn_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = BelkavpnSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
