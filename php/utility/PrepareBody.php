<?php
declare(strict_types=1);

// Belkavpn SDK utility: prepare_body

class BelkavpnPrepareBody
{
    public static function call(BelkavpnContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
