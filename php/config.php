<?php
declare(strict_types=1);

// Belkavpn SDK configuration

class BelkavpnConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Belkavpn",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'active' => true,
              'name' => 'country',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'host',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'port',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
          ],
          'name' => 'proxy_server',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
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
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
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
