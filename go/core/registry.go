package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewProxyServerEntityFunc func(client *BelkavpnSDK, entopts map[string]any) BelkavpnEntity

