# Belkavpn SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

BelkavpnUtility.registrar = ->(u) {
  u.clean = BelkavpnUtilities::Clean
  u.done = BelkavpnUtilities::Done
  u.make_error = BelkavpnUtilities::MakeError
  u.feature_add = BelkavpnUtilities::FeatureAdd
  u.feature_hook = BelkavpnUtilities::FeatureHook
  u.feature_init = BelkavpnUtilities::FeatureInit
  u.fetcher = BelkavpnUtilities::Fetcher
  u.make_fetch_def = BelkavpnUtilities::MakeFetchDef
  u.make_context = BelkavpnUtilities::MakeContext
  u.make_options = BelkavpnUtilities::MakeOptions
  u.make_request = BelkavpnUtilities::MakeRequest
  u.make_response = BelkavpnUtilities::MakeResponse
  u.make_result = BelkavpnUtilities::MakeResult
  u.make_point = BelkavpnUtilities::MakePoint
  u.make_spec = BelkavpnUtilities::MakeSpec
  u.make_url = BelkavpnUtilities::MakeUrl
  u.param = BelkavpnUtilities::Param
  u.prepare_auth = BelkavpnUtilities::PrepareAuth
  u.prepare_body = BelkavpnUtilities::PrepareBody
  u.prepare_headers = BelkavpnUtilities::PrepareHeaders
  u.prepare_method = BelkavpnUtilities::PrepareMethod
  u.prepare_params = BelkavpnUtilities::PrepareParams
  u.prepare_path = BelkavpnUtilities::PreparePath
  u.prepare_query = BelkavpnUtilities::PrepareQuery
  u.graphql_body = BelkavpnUtilities::GraphqlBody
  u.graphql_errors = BelkavpnUtilities::GraphqlErrors
  u.result_basic = BelkavpnUtilities::ResultBasic
  u.result_body = BelkavpnUtilities::ResultBody
  u.result_headers = BelkavpnUtilities::ResultHeaders
  u.transform_request = BelkavpnUtilities::TransformRequest
  u.transform_response = BelkavpnUtilities::TransformResponse
}
