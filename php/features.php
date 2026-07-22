<?php
declare(strict_types=1);

// Belkavpn SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class BelkavpnFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new BelkavpnBaseFeature();
            case "test":
                return new BelkavpnTestFeature();
            default:
                return new BelkavpnBaseFeature();
        }
    }
}
