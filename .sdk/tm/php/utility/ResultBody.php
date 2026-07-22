<?php
declare(strict_types=1);

// Belkavpn SDK utility: result_body

class BelkavpnResultBody
{
    public static function call(BelkavpnContext $ctx): ?BelkavpnResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
