<?php
declare(strict_types=1);

// Belkavpn SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BelkavpnMakeContext
{
    public static function call(array $ctxmap, ?BelkavpnContext $basectx): BelkavpnContext
    {
        return new BelkavpnContext($ctxmap, $basectx);
    }
}
