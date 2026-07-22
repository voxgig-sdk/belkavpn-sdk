<?php
declare(strict_types=1);

// Belkavpn SDK utility: result_headers

class BelkavpnResultHeaders
{
    public static function call(BelkavpnContext $ctx): ?BelkavpnResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
