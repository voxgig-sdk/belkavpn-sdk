<?php
declare(strict_types=1);

// Belkavpn SDK configuration

class BelkavpnConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Belkavpn",
                "slug" => "belkavpn",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.belkavpn.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "proxy_server" => [],
                ],
            ],
            "entity" => [
        'proxy_server' => [
          'fields' => [
            [
              'name' => 'country',
              'short' => 'The country where the proxy server is located',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'host',
              'short' => 'The hostname or IP address of the proxy server',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'port',
              'short' => 'The port number of the proxy server',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'status',
              'short' => 'The operational status of the proxy server',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'proxy_server',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/socks',
                  'parts' => [
                    'socks',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return BelkavpnFeatures::make_feature($name);
    }
}
