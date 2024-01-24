
var Module = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(moduleArg = {}) {

var Module = moduleArg;

var readyPromiseResolve, readyPromiseReject;

Module["ready"] = new Promise(((resolve, reject) => {
 readyPromiseResolve = resolve;
 readyPromiseReject = reject;
}));

[ "_main", "_php_time", "_gettimeofday", "_time", "_php_date_get_date_ce", "_php_date_get_immutable_ce", "_php_date_get_interface_ce", "_php_date_get_timezone_ce", "_php_date_get_interval_ce", "_php_date_get_period_ce", "_zend_register_ini_entries_ex", "_zend_unregister_ini_entries_ex", "__efree", "_php_info_print_table_start", "_php_info_print_table_row", "_php_info_print_table_end", "_display_ini_entries", "_zend_hash_destroy", "__efree_48", "_zend_register_string_constant", "_zend_register_long_constant", "_strlen", "_cfg_get_entry", "__emalloc_48", "__zend_hash_init", "_zend_hash_str_find", "_zend_hash_str_add", "_get_timezone_info", "_zend_throw_error", "_php_format_date", "__estrdup", "__emalloc_16", "_abs", "_ap_php_snprintf", "_ap_php_slprintf", "_strcmp", "_smart_str_realloc", "_smart_str_erealloc", "_php_idate", "_zend_wrong_parameters_count_error", "_zend_parse_arg_str_slow", "_zend_parse_arg_long_slow", "_zend_wrong_parameter_error", "_php_error_docref", "_php_date_set_tzdb", "_php_version_compare", "_php_parse_date", "_php_mktime", "_php_strftime", "___zend_malloc", "__emalloc", "___zend_realloc", "__erealloc", "_zend_wrong_parameters_none_error", "_zend_parse_arg_bool_slow", "__zend_new_array_0", "_add_assoc_long_ex", "_add_next_index_long", "_add_assoc_string_ex", "_add_index_long", "__emalloc_96", "_zend_iterator_init", "_zend_hash_str_update", "_php_date_instantiate", "_object_init_ex", "_php_date_initialize", "_zend_throw_exception_ex", "_instanceof_function_slow", "_zval_ptr_dtor", "_zend_string_concat3", "_zend_std_get_properties", "_zend_hash_add", "_add_index_string", "_add_assoc_zval_ex", "_add_assoc_bool_ex", "_add_assoc_double_ex", "_zend_parse_method_parameters", "_memset", "_zend_parse_parameters", "_zend_value_error", "__ecalloc", "_zend_replace_error_handling", "_zend_restore_error_handling", "_add_assoc_str_ex", "_zend_hash_next_index_insert", "_zval_get_long_func", "_zval_get_double_func", "_zend_dval_to_lval_slow", "_zval_get_string_func", "_strtoll", "_zend_parse_parameters_ex", "_zend_type_error", "_get_active_function_or_method_name", "_rebuild_object_properties", "_zend_create_internal_iterator_zval", "_zend_argument_value_error", "_add_next_index_string", "_strncasecmp", "_add_assoc_null_ex", "__estrndup", "_zend_parse_arg_double_slow", "_zend_ini_double", "_zend_strpprintf", "_OnUpdateString", "_zend_std_write_property", "_zend_register_internal_interface", "_zend_declare_class_constant_ex", "_zend_error", "_zend_register_internal_class_ex", "_zend_class_implements", "_zend_object_std_init", "_object_properties_init", "_zend_object_std_dtor", "_zend_objects_clone_members", "_zend_std_compare_objects", "_zend_std_get_properties_for", "_zend_array_dup", "_zend_std_has_property", "_zend_is_true", "_zend_std_read_property", "_zend_std_get_property_ptr_ptr", "_zend_declare_typed_property", "_zend_unmangle_property_name_ex", "_zend_lookup_class", "_zend_update_property", "_sin", "_cos", "_acos", "_atan2", "_isdigit", "_strtol", "_isspace", "_pow", "_strchr", "_strtod", "_printf", "_snprintf", "__emalloc_8", "_toupper", "_llabs", "_php_libxml_initialize", "_php_libxml_error_handler", "_xmlSetGenericErrorFunc", "_xmlParserInputBufferCreateFilenameDefault", "_xmlOutputBufferCreateFilenameDefault", "_php_libxml_shutdown", "_rc_dtor_func", "_xmlSetStructuredErrorFunc", "_zend_llist_destroy", "_xmlResetLastError", "_php_libxml_node_free_list", "_xmlRemoveID", "_xmlUnlinkNode", "_xmlFreeProp", "_xmlFreeNs", "_xmlFreeNode", "_php_libxml_issue_error", "_xmlCopyError", "_xmlStrdup", "_zend_llist_add_element", "_php_libxml_ctx_error", "_zend_vspprintf", "_php_libxml_ctx_warning", "_php_libxml_structured_error_handler", "_xmlInitParser", "_xmlGetExternalEntityLoader", "_xmlSetExternalEntityLoader", "_xmlRelaxNGCleanupTypes", "_php_libxml_switch_context", "__emalloc_32", "_zend_llist_init", "_xmlResetError", "_xmlGetLastError", "_add_property_long_ex", "_add_property_string_ex", "_add_property_stringl_ex", "_zend_llist_get_first_ex", "_zend_llist_get_next_ex", "_zend_llist_clean", "_php_libxml_disable_entity_loader", "_zend_fcall_info_init", "_zend_release_fcall_info_cache", "_php_libxml_xmlCheckUTF8", "_php_libxml_register_export", "_php_libxml_import_node", "_zend_hash_find", "_php_libxml_increment_node_ptr", "_php_libxml_decrement_node_ptr", "_php_libxml_increment_doc_ref", "_php_libxml_decrement_doc_ref", "_xmlFreeDoc", "_php_libxml_node_free_resource", "_php_libxml_node_decrement_resource", "_zend_call_function", "_php_file_le_stream", "_php_file_le_pstream", "_zend_fetch_resource2_ex", "_xmlAllocParserInputBuffer", "_xmlNewIOInputStream", "_xmlFreeParserInputBuffer", "__try_convert_to_string", "_xmlNewInputFromFile", "__php_stream_read", "__php_stream_free", "_zend_binary_strncasecmp", "_php_stristr", "_xmlParseCharEncoding", "_strstr", "_xmlParseURI", "_xmlURIUnescapeString", "_xmlFreeURI", "_xmlAllocOutputBuffer", "_xmlStrncmp", "_php_stream_locate_url_wrapper", "_php_le_stream_context", "_zend_fetch_resource_ex", "_php_stream_context_alloc", "__php_stream_open_wrapper_ex", "__php_stream_write", "_php_pcre2_code_copy", "_php_pcre2_code_copy_with_tables", "_php_pcre2_code_free", "_php_pcre2_compile", "_memmove", "_tolower", "_php_pcre2_config", "_php_pcre2_general_context_create", "_php_pcre2_compile_context_create", "_php_pcre2_match_context_create", "_php_pcre2_convert_context_create", "_php_pcre2_general_context_copy", "_php_pcre2_compile_context_copy", "_php_pcre2_match_context_copy", "_php_pcre2_convert_context_copy", "_php_pcre2_general_context_free", "_php_pcre2_compile_context_free", "_php_pcre2_match_context_free", "_php_pcre2_convert_context_free", "_php_pcre2_set_character_tables", "_php_pcre2_set_bsr", "_php_pcre2_set_max_pattern_length", "_php_pcre2_set_newline", "_php_pcre2_set_parens_nest_limit", "_php_pcre2_set_compile_extra_options", "_php_pcre2_set_compile_recursion_guard", "_php_pcre2_set_callout", "_pcre2_set_substitute_callout_8", "_php_pcre2_set_heap_limit", "_php_pcre2_set_match_limit", "_php_pcre2_set_depth_limit", "_php_pcre2_set_offset_limit", "_php_pcre2_set_recursion_limit", "_php_pcre2_set_recursion_memory_management", "_php_pcre2_set_glob_separator", "_php_pcre2_set_glob_escape", "_ispunct", "_php_pcre2_dfa_match", "_memchr", "_php_pcre2_get_error_message", "_php_pcre2_jit_compile", "_php_pcre2_jit_match", "_php_pcre2_jit_free_unused_memory", "_php_pcre2_jit_stack_create", "_php_pcre2_jit_stack_assign", "_php_pcre2_jit_stack_free", "_php_pcre2_maketables", "_islower", "_isupper", "_isalnum", "_isxdigit", "_isgraph", "_isprint", "_iscntrl", "_isalpha", "_pcre2_maketables_free_8", "_php_pcre2_match", "_php_pcre2_match_data_create", "_php_pcre2_match_data_create_from_pattern", "_php_pcre2_match_data_free", "_php_pcre2_get_mark", "_php_pcre2_get_ovector_pointer", "_php_pcre2_get_ovector_count", "_php_pcre2_get_startchar", "_pcre2_get_match_data_size_8", "_php_pcre2_pattern_info", "_php_pcre2_callout_enumerate", "_php_pcre2_serialize_encode", "_php_pcre2_serialize_decode", "_php_pcre2_serialize_get_number_of_codes", "_php_pcre2_serialize_free", "_php_pcre2_substitute", "_php_pcre2_substring_nametable_scan", "_php_pcre2_substring_length_bynumber", "_php_pcre2_substring_copy_byname", "_php_pcre2_substring_copy_bynumber", "_php_pcre2_substring_get_byname", "_php_pcre2_substring_get_bynumber", "_php_pcre2_substring_free", "_php_pcre2_substring_length_byname", "_php_pcre2_substring_list_get", "_php_pcre2_substring_list_free", "_php_pcre2_substring_number_from_name", "_pcre2_pattern_convert_8", "_pcre2_converted_pattern_free_8", "_pcre_get_compiled_regex_cache_ex", "_zend_string_concat2", "_zend_hash_apply_with_argument", "_zend_hash_add_new", "_pcre_get_compiled_regex_cache", "_pcre_get_compiled_regex", "_pcre_get_compiled_regex_ex", "_php_pcre_create_match_data", "_php_pcre_free_match_data", "_php_pcre_match_impl", "__zend_new_array", "_zend_try_assign_typed_ref_arr", "__safe_emalloc", "_zend_hash_next_index_insert_new", "_add_next_index_null", "_add_next_index_str", "_zend_hash_update", "__is_numeric_string_ex", "_zend_new_pair", "_php_pcre_replace", "_php_pcre_replace_impl", "_zend_error_noreturn", "_zend_argument_type_error", "_zend_hash_index_add_new", "_zend_try_assign_typed_ref_long", "_zend_is_callable_ex", "_zend_array_destroy", "_php_pcre_split_impl", "__safe_malloc", "_php_pcre_grep_impl", "_zend_hash_index_update", "_php_pcre_mctx", "_php_pcre_gctx", "_php_pcre_cctx", "_php_pcre_pce_incref", "_php_pcre_pce_decref", "_php_pcre_pce_re", "_zend_register_bool_constant", "_OnUpdateLong", "_zend_throw_exception", "_expand_filepath", "_php_check_open_basedir", "_sqlite3_open_v2", "_sqlite3_errmsg", "_sqlite3_close", "_sqlite3_set_authorizer", "_sqlite3_db_config", "_strncmp", "_zend_fcall_info_args_clear", "_sqlite3_exec", "_sqlite3_free", "_sqlite3_libversion", "_sqlite3_libversion_number", "_sqlite3_last_insert_rowid", "_sqlite3_errcode", "_sqlite3_extended_errcode", "_sqlite3_extended_result_codes", "_sqlite3_busy_timeout", "_zend_spprintf", "_tsrm_realpath", "_sqlite3_enable_load_extension", "_sqlite3_load_extension", "_sqlite3_changes", "_sqlite3_mprintf", "_sqlite3_prepare_v2", "__emalloc_24", "_sqlite3_step", "_sqlite3_reset", "_sqlite3_finalize", "_sqlite3_data_count", "_sqlite3_column_name", "_sqlite3_column_type", "_sqlite3_column_int64", "_sqlite3_column_text", "_sqlite3_column_bytes", "_sqlite3_column_double", "_sqlite3_column_blob", "_sqlite3_create_function", "_sqlite3_user_data", "_sqlite3_aggregate_context", "_sqlite3_create_collation", "_sqlite3_blob_open", "_sqlite3_blob_bytes", "__php_stream_alloc", "_sqlite3_backup_init", "_sqlite3_backup_step", "_sqlite3_backup_finish", "_sqlite3_bind_parameter_count", "_zend_llist_del_element", "_sqlite3_db_handle", "_sqlite3_clear_bindings", "_sqlite3_stmt_readonly", "_sqlite3_sql", "_sqlite3_bind_null", "_convert_to_long", "_sqlite3_bind_int", "_convert_to_double", "_sqlite3_bind_double", "__php_stream_copy_to_mem", "_sqlite3_bind_blob", "_zval_try_get_string_func", "_sqlite3_bind_text", "_zend_parse_arg_str_or_long_slow", "_sqlite3_column_count", "__zend_handle_numeric_str_ex", "_zend_std_get_gc", "_zend_get_gc_buffer_create", "_zend_get_gc_buffer_grow", "_php_info_print_table_header", "_sqlite3_value_type", "_sqlite3_value_int", "_sqlite3_value_double", "_sqlite3_value_text", "_sqlite3_value_bytes", "_sqlite3_result_int", "_sqlite3_result_null", "_sqlite3_result_double", "_sqlite3_result_text", "_sqlite3_result_error", "_sqlite3_blob_write", "_sqlite3_blob_read", "_sqlite3_blob_close", "_sqlite3_bind_parameter_index", "_zend_hash_index_del", "_OnUpdateBool", "_zend_ini_boolean_displayer_cb", "_zend_ini_parse_quantity_warn", "_zend_long_to_str", "_zend_alter_ini_entry", "_putchar", "_strcpy", "_localtime_r", "_mktime", "_zend_zval_type_name", "_zend_hash_del", "_dom_object_get_node", "_php_dom_object_get_data", "_zend_get_property_info", "_zend_verify_property_type", "_php_dom_create_object", "_zend_hash_merge", "_xmlDocCopyNode", "_zend_declare_property_ex", "_xmlXPathFreeContext", "__emalloc_40", "_zend_binary_strcasecmp", "_xmlStrEqual", "_xmlNodeGetContent", "_xmlNodeAddContent", "_xmlSearchNsByHref", "_xmlDOMWrapReconcileNamespaces", "_xmlSplitQName2", "_xmlValidateQName", "_xmlNewNs", "_xmlNewDocNode", "_zend_hash_copy", "_xmlValidateName", "_xmlNewProp", "_xmlNodeSetContentLen", "_xmlGetIntSubset", "_xmlDocGetRootElement", "_xmlFindCharEncodingHandler", "_xmlCharEncCloseFunc", "_xmlNewDocFragment", "_xmlNewDocText", "_xmlNewDocComment", "_xmlNewCDataBlock", "_xmlNewPI", "_xmlNewDocProp", "_xmlNewReference", "_xmlCharStrndup", "_xmlSetNs", "_xmlGetID", "_xmlNewDoc", "_xmlCreateURI", "_xmlURIEscapeStr", "_xmlParseURIReference", "_xmlSaveFormatFileEnc", "_xmlBufferCreate", "_xmlNodeDump", "_xmlBufferContent", "_xmlBufferFree", "_xmlDocDumpFormatMemory", "_xmlPedanticParserDefault", "_xmlSubstituteEntitiesDefault", "_xmlLineNumbersDefault", "_xmlKeepBlanksDefault", "_xmlXIncludeProcessFlags", "_xmlNewValidCtxt", "_xmlValidateDocument", "_xmlFreeValidCtxt", "_xmlSchemaNewParserCtxt", "_xmlSchemaNewMemParserCtxt", "_xmlSchemaSetParserErrors", "_xmlSchemaParse", "_xmlSchemaFreeParserCtxt", "_xmlSchemaNewValidCtxt", "_xmlSchemaFree", "_xmlSchemaSetValidOptions", "_xmlSchemaSetValidErrors", "_xmlSchemaValidateDoc", "_xmlSchemaFreeValidCtxt", "_xmlRelaxNGNewParserCtxt", "_xmlRelaxNGNewMemParserCtxt", "_xmlRelaxNGSetParserErrors", "_xmlRelaxNGParse", "_xmlRelaxNGFreeParserCtxt", "_xmlRelaxNGNewValidCtxt", "_xmlRelaxNGFree", "_xmlRelaxNGSetValidErrors", "_xmlRelaxNGValidateDoc", "_xmlRelaxNGFreeValidCtxt", "_htmlCreateFileParserCtxt", "_htmlCreateMemoryParserCtxt", "_htmlCtxtUseOptions", "_htmlParseDocument", "_htmlFreeParserCtxt", "_htmlGetMetaEncoding", "_htmlSaveFileFormat", "_xmlOutputBufferCreateBuffer", "_htmlNodeDumpFormatOutput", "_xmlOutputBufferFlush", "_xmlBufferLength", "_xmlOutputBufferClose", "_htmlDocDumpMemoryFormat", "_zend_argument_error", "_xmlCreateFileParserCtxt", "_xmlCreateMemoryParserCtxt", "_getcwd", "_xmlCanonicPath", "_xmlCtxtUseOptions", "_xmlParseDocument", "_xmlFreeParserCtxt", "_xmlSetTreeDoc", "_xmlCopyNode", "_xmlAddChild", "_xmlParseBalancedChunkMemory", "_xmlAddChildList", "_xmlStrchr", "_xmlCreateIntSubset", "_xmlDocSetRootElement", "_xmlNewNode", "_xmlStrcat", "_xmlNodeListGetString", "_xmlSplitQName3", "_xmlStrndup", "_xmlSearchNs", "_xmlHasNsProp", "_xmlSetProp", "_xmlHasProp", "_xmlGetNsProp", "_xmlReconciliateNs", "_xmlSetNsProp", "_xmlAddID", "_xmlNodeGetBase", "_xmlNewText", "_xmlNodeSetContent", "_xmlAddPrevSibling", "_xmlReplaceNode", "_xmlCopyNamespaceList", "_xmlCopyPropList", "_xmlXPathNewContext", "_xmlXPathEvalExpression", "_xmlXPathFreeObject", "_xmlXPathRegisterNs", "_xmlOutputBufferCreateFilename", "_xmlC14NDocSaveTo", "_xmlOutputBufferGetSize", "_xmlOutputBufferGetContent", "_xmlGetNodePath", "_xmlGetLineNo", "_xmlUTF8Strlen", "_xmlUTF8Strsub", "_xmlTextConcat", "_xmlUTF8Strndup", "_xmlNodeDumpOutput", "_xmlHashSize", "_zend_hash_index_find", "_xmlAddNextSibling", "_xmlIsBlankNode", "_xmlNewComment", "_xmlXPathRegisterFuncNS", "_xmlGetNsList", "_zend_is_executing", "_valuePop", "_xmlXPathCastToString", "_zend_make_callable", "_xmlXPathNewNodeSet", "_valuePush", "_xmlXPathNewBoolean", "_xmlXPathNewString", "_xmlHashScan", "_zend_hash_internal_pointer_reset_ex", "_zend_hash_get_current_data_ex", "_xmlStrlen", "_zend_hash_move_forward_ex", "_xmlHashLookup", "_sapi_register_input_filter", "_php_register_variable_ex", "_zend_is_auto_global", "_strcasecmp", "_atoi", "__convert_to_string", "_php_strip_tags_ex", "_php_escape_html_entities_ex", "_php_addslashes", "_get_active_function_name", "_strpbrk", "_php_url_parse_ex", "_php_url_free", "_zend_is_callable", "__call_user_function_impl", "_php_hash_fetch_ops", "_zend_string_tolower_ex", "_php_hash_register_algo", "_zend_str_tolower_dup", "_php_hash_copy", "_php_hash_serialize_spec", "_php_hash_unserialize_spec", "_php_hash_serialize", "_php_hash_unserialize", "_explicit_bzero", "_php_safe_bcmp", "_object_properties_load", "_zend_add_attribute", "_PHP_MD4InitArgs", "_PHP_MD4Update", "_PHP_MD4Final", "_PHP_MD2InitArgs", "_PHP_MD2Update", "_PHP_MD2Final", "_PHP_MD5InitArgs", "_PHP_MD5Update", "_PHP_MD5Final", "_PHP_SHA256InitArgs", "_PHP_SHA256Update", "_PHP_SHA256Final", "_PHP_SHA224InitArgs", "_PHP_SHA224Update", "_PHP_SHA224Final", "_PHP_SHA384InitArgs", "_PHP_SHA384Update", "_PHP_SHA384Final", "_PHP_SHA512InitArgs", "_PHP_SHA512_256InitArgs", "_PHP_SHA512_224InitArgs", "_PHP_SHA512Update", "_PHP_SHA512Final", "_PHP_SHA512_256Final", "_PHP_SHA512_224Final", "_PHP_SHA1InitArgs", "_PHP_SHA1Update", "_PHP_SHA1Final", "_PHP_RIPEMD128Init", "_PHP_RIPEMD128Update", "_PHP_RIPEMD128Final", "_PHP_RIPEMD160Init", "_PHP_RIPEMD160Update", "_PHP_RIPEMD160Final", "_PHP_RIPEMD256Init", "_PHP_RIPEMD256Update", "_PHP_RIPEMD256Final", "_PHP_RIPEMD320Init", "_PHP_RIPEMD320Update", "_PHP_RIPEMD320Final", "_PHP_3HAVAL128Init", "_PHP_HAVALUpdate", "_PHP_HAVAL128Final", "_PHP_3HAVAL160Init", "_PHP_HAVAL160Final", "_PHP_3HAVAL192Init", "_PHP_HAVAL192Final", "_PHP_3HAVAL224Init", "_PHP_HAVAL224Final", "_PHP_3HAVAL256Init", "_PHP_HAVAL256Final", "_PHP_4HAVAL128Init", "_PHP_4HAVAL160Init", "_PHP_4HAVAL192Init", "_PHP_4HAVAL224Init", "_PHP_4HAVAL256Init", "_PHP_5HAVAL128Init", "_PHP_5HAVAL160Init", "_PHP_5HAVAL192Init", "_PHP_5HAVAL224Init", "_PHP_5HAVAL256Init", "_PHP_3TIGERInit", "_PHP_4TIGERInit", "_PHP_TIGERUpdate", "_PHP_TIGER128Final", "_PHP_TIGER160Final", "_PHP_TIGER192Final", "_PHP_GOSTInit", "_PHP_GOSTInitCrypto", "_PHP_GOSTUpdate", "_PHP_GOSTFinal", "_PHP_SNEFRUInit", "_PHP_SNEFRUUpdate", "_PHP_SNEFRUFinal", "_PHP_WHIRLPOOLInit", "_PHP_WHIRLPOOLUpdate", "_PHP_WHIRLPOOLFinal", "_PHP_ADLER32Init", "_PHP_ADLER32Update", "_PHP_ADLER32Final", "_PHP_ADLER32Copy", "_PHP_CRC32Init", "_PHP_CRC32Update", "_PHP_CRC32BUpdate", "_PHP_CRC32CUpdate", "_PHP_CRC32LEFinal", "_PHP_CRC32BEFinal", "_PHP_CRC32Copy", "_PHP_FNV132Init", "_PHP_FNV132Update", "_PHP_FNV132Final", "_PHP_FNV1a32Update", "_PHP_FNV164Init", "_PHP_FNV164Update", "_PHP_FNV164Final", "_PHP_FNV1a64Update", "_PHP_JOAATInit", "_PHP_JOAATUpdate", "_PHP_JOAATFinal", "_PHP_SHA3224Init", "_PHP_SHA3224Update", "_PHP_SHA3256Init", "_PHP_SHA3256Update", "_PHP_SHA3384Init", "_PHP_SHA3384Update", "_PHP_SHA3512Init", "_PHP_SHA3512Update", "_PHP_MURMUR3AInit", "_PHP_MURMUR3AUpdate", "_PHP_MURMUR3AFinal", "_PHP_MURMUR3ACopy", "_PHP_MURMUR3CInit", "_PHP_MURMUR3CUpdate", "_PHP_MURMUR3CFinal", "_PHP_MURMUR3CCopy", "_PHP_MURMUR3FInit", "_PHP_MURMUR3FUpdate", "_PHP_MURMUR3FFinal", "_PHP_MURMUR3FCopy", "_PHP_XXH32Init", "_PHP_XXH32Update", "_PHP_XXH32Final", "_PHP_XXH32Copy", "_PHP_XXH64Init", "_PHP_XXH64Update", "_PHP_XXH64Final", "_PHP_XXH64Copy", "_PHP_XXH3_64_Init", "_PHP_XXH3_64_Update", "_PHP_XXH3_64_Final", "_PHP_XXH3_64_Copy", "_PHP_XXH3_128_Init", "_PHP_XXH3_128_Update", "_PHP_XXH3_128_Final", "_PHP_XXH3_128_Copy", "_php_output_handler_alias_register", "_php_output_handler_conflict_register", "_zend_get_constant_str", "_php_stream_filter_register_factory", "_php_output_handler_create_internal", "_php_output_get_level", "_php_output_handler_conflict", "_php_stream_filter_unregister_factory", "_php_iconv_string", "_libiconv_open", "_libiconv", "_libiconv_close", "_php_get_internal_encoding", "_php_base64_encode", "_php_quot_print_decode", "_add_next_index_stringl", "_add_assoc_stringl_ex", "_php_get_input_encoding", "_php_get_output_encoding", "_php_output_get_status", "_sapi_add_header_ex", "_php_output_handler_hook", "_php_base64_decode_ex", "__emalloc_160", "__php_stream_filter_alloc", "_php_stream_bucket_unlink", "_php_stream_bucket_delref", "_php_stream_bucket_new", "_php_stream_bucket_append", "_php_json_encode_string", "_php_json_encode_ex", "_php_json_encode", "_php_json_decode_ex", "_php_json_parser_init", "_php_json_parser_error_code", "_php_next_utf8_char", "___extenddftf2", "___fpclassifyl", "_zend_gcvt", "_zend_get_properties_for", "_object_init", "_php_json_parser_init_ex", "_php_json_parse", "_zend_strtod", "_mbstr_treat_data", "_sapi_register_treat_data", "_sapi_register_post_entries", "_zend_multibyte_set_functions", "_php_rfc1867_set_multibyte_callbacks", "_zend_multibyte_restore_functions", "_zend_multibyte_set_internal_encoding", "_mbfl_buffer_illegalchars", "_mbfl_buffer_converter_delete", "_php_mb_mbchar_bytes", "_php_mb_safe_strrchr", "_mbfl_no2encoding", "_mbfl_no_language2name", "_mbfl_name2encoding", "_mbfl_memory_device_init", "_mbfl_memory_device_strcat", "_mbfl_memory_device_output", "_mbfl_memory_device_unput", "_mbfl_memory_device_result", "_mbfl_string_clear", "___zend_calloc", "_mbfl_name2no_encoding", "_mbfl_no2preferred_mime_name", "_mbfl_buffer_converter_new", "_mbfl_buffer_converter_illegal_mode", "_mbfl_buffer_converter_illegal_substchar", "_mbfl_string_init", "_mbfl_buffer_converter_feed", "_mbfl_buffer_converter_flush", "_mbfl_buffer_converter_result", "_mbfl_convert_filter_new", "_mbfl_convert_filter_delete", "_mbfl_memory_device_clear", "_mbfl_convert_filter_flush", "_mbfl_strpos", "_php_mb_stripos", "_mbfl_string_init_set", "_mbfl_substr", "_mbfl_substr_count", "_mbfl_strlen", "_mbfl_strcut", "_php_mb_convert_encoding_ex", "_mb_fast_convert", "_php_mb_convert_encoding", "_mbfl_identify_encoding", "_php_mb_convert_encoding_recursive", "_zend_hash_index_add", "_php_unicode_convert_case", "_php_mb_check_encoding", "_mbfl_get_supported_encodings", "_mbfl_no2language", "_mbfl_mime_header_encode", "_mbfl_mime_header_decode", "_mbfl_encoding_detector_new", "_mbfl_encoding_detector_judge", "_mbfl_encoding_detector_delete", "_mbfl_encoding_detector_feed", "_mbfl_buffer_converter_feed_result", "_zend_ini_string_ex", "_php_trim", "_php_mail_build_headers", "_strtok_r", "_mbfl_convert_encoding", "_mbfl_memory_device_strncat", "_mbfl_encoding_preferred_mime_name", "_php_escape_shell_cmd", "_php_mail", "_zend_str_tolower", "_zend_ini_string", "_mbfl_no_encoding2name", "_mbfl_name2no_language", "_sapi_unregister_post_entry", "_sapi_read_standard_form_data", "_rfc1867_post_handler", "_php_std_post_handler", "_php_unicode_is_prop1", "_php_unicode_is_prop", "_php_default_treat_data", "_sapi_handle_post", "_php_url_decode", "_php_register_variable_safe", "__php_stream_seek", "_mbfl_filt_conv_illegal_output", "_mb_illegal_output", "_mbfl_filt_conv_common_ctor", "_mbfl_filt_conv_common_flush", "_mbfl_convert_filter_get_vtbl", "_mbfl_memory_device_realloc", "_zend_memnstr_ex", "_memrchr", "_zend_memnrstr_ex", "_mbfl_wchar_device_init", "_mbfl_wchar_device_output", "_mbfl_convert_filter_feed_string", "_mbfl_wchar_device_clear", "_mbfl_filter_output_null", "_mbfl_convert_filter_copy", "_mime_header_encoder_result", "_mbfl_memory_device_devcat", "_mbfl_memory_device_reset", "_mime_header_encoder_new", "__emalloc_256", "_mbfl_filter_output_pipe", "_mime_header_encoder_delete", "_mbfl_convert_filter_devcat", "_mime_header_decoder_result", "_mime_header_decoder_new", "__emalloc_64", "_mime_header_decoder_delete", "_mbfl_convert_filter_reset", "_mbfl_filt_conv_pass", "_mbfl_convert_filter_new2", "_mbfl_convert_filter_feed", "_mbfl_convert_filter_strcat", "_mbfl_name2language", "_php_pdo_get_dbh_ce", "_php_pdo_get_exception", "_zend_register_list_destructors_ex", "_php_pdo_register_driver", "_php_pdo_unregister_driver", "_zend_hash_str_del", "_php_pdo_parse_data_source", "_pdo_throw_exception", "_zend_update_property_long", "_zend_update_property_string", "_zend_throw_exception_object", "_pdo_raise_impl_error", "_pdo_handle_error", "_zend_update_property_str", "_cfg_get_string", "_zend_list_close", "___zend_strdup", "_zend_register_persistent_resource", "__php_stream_get_line", "_pdo_get_long_param", "_pdo_get_bool_param", "_strlcpy", "_zend_fcall_info_args", "_is_numeric_str_function", "_zend_internal_run_time_cache_reserved_size", "_zend_set_function_arg_flags", "_zend_str_tolower_copy", "_zend_objects_not_comparable", "_zend_std_get_method", "_php_pdo_stmt_set_column_count", "_pdo_parse_params", "_convert_to_boolean", "_zend_update_property_ex", "_zend_parse_arg_class", "_convert_to_null", "__php_stream_memory_open", "_zend_fetch_class", "_zend_argument_count_error", "_zend_fcall_info_args_ex", "__php_stream_printf", "_php_pdo_free_statement", "_zend_objects_store_del", "_gc_possible_root", "_zend_std_unset_property", "_zend_std_cast_object_tostring", "_zend_object_is_true", "_strncpy", "_zend_declare_class_constant_long", "_sqlite3_snprintf", "_zend_i64_to_str", "_sqlite3_column_decltype", "_php_random_status_alloc", "_php_random_status_copy", "_php_random_status_free", "_php_random_engine_common_init", "_php_random_engine_common_free_object", "_php_random_engine_common_clone_object", "_php_random_range", "_php_random_default_algo", "_php_random_default_status", "_php_random_mt19937_seed_default", "_php_random_bin2hex_le", "_php_random_hex2bin_le", "_php_combined_lcg", "_php_random_combinedlcg_seed_default", "_php_mt_srand", "_php_mt_rand", "_php_mt_rand_range", "_php_mt_rand_common", "_php_srand", "_php_rand", "_php_random_bytes", "_open", "_strerror", "_fstat", "_close", "_read", "_php_random_int", "_getpid", "_php_random_pcgoneseq128xslrr64_advance", "___multi3", "_php_random_xoshiro256starstar_jump", "_php_random_xoshiro256starstar_jump_long", "_zend_call_known_function", "_php_array_data_shuffle", "_php_binary_string_shuffle", "_php_array_pick_keys", "_zend_read_property", "_zend_reflection_class_factory", "_zend_get_closure_method_def", "_zend_fetch_function", "_smart_str_append_printf", "_zend_type_to_string", "_zend_get_closure_this_ptr", "_zend_create_fake_closure", "_zval_update_constant_ex", "_zval_add_ref", "__efree_32", "_zend_generator_update_root", "_zend_generator_update_current", "_zend_fetch_debug_backtrace", "_zend_get_closure_invoke_method", "_zend_get_default_from_internal_arg_info", "_zend_separate_class_constants_table", "_zval_copy_ctor_func", "_zend_update_class_constants", "_zend_class_init_statics", "_zend_std_get_static_property", "_zend_std_get_static_property_with_info", "_zend_clear_exception", "_zend_verify_ref_assignable_zval", "_zend_fetch_class_by_name", "_zend_read_static_property_ex", "_zend_read_property_ex", "_zend_update_static_property_ex", "_php_info_print_module", "_zend_get_extension", "_smart_str_append_scalar", "_smart_str_append_escaped", "_zend_ast_export", "_zend_is_attribute_repeated", "_zend_get_attribute_value", "_zend_get_attribute_str", "_zend_get_attribute_target_names", "_zend_vm_stack_extend", "_zend_lookup_class_ex", "_testSetjmp", "_saveSetjmp", "__zend_bailout", "_emscripten_longjmp", "_php_session_destroy", "_php_add_session_var", "_php_set_session_var", "_php_get_session_var", "_php_session_create_id", "_php_session_valid_key", "_php_var_serialize_init", "_php_var_serialize", "_php_var_serialize_destroy", "_php_var_unserialize_init", "_php_var_unserialize", "_php_var_unserialize_destroy", "_zend_hash_update_ind", "_var_tmp_var", "_php_session_register_serializer", "_php_session_register_module", "_php_session_validate_sid", "_php_session_update_timestamp", "__php_find_ps_module", "__php_find_ps_serializer", "_php_session_reset_id", "_zend_register_stringl_constant", "_php_url_scanner_reset_session_var", "_php_url_scanner_add_session_var", "_php_output_get_start_filename", "_php_output_get_start_lineno", "_php_url_encode", "_php_session_start", "_php_session_flush", "_session_adapt_url", "_php_url_scanner_adapt_single_url", "_zend_alter_ini_entry_chars", "_register_user_shutdown_function", "_remove_user_shutdown_function", "_zend_wrong_param_count", "_zend_get_callable_name", "_zend_hash_clean", "_zend_alter_ini_entry_ex", "_append_user_shutdown_function", "_zend_register_auto_global", "_sapi_free_header", "_zend_delete_global_variable", "_gmtime_r", "_stat", "_sapi_get_request_time", "_OnUpdateStringUnempty", "_atol", "_OnUpdateLongGEZero", "_OnUpdateReal", "_php_get_temporary_directory", "_lseek", "_unlink", "_access", "_utime", "_getuid", "_geteuid", "_flock", "_fcntl", "_ftruncate", "_write", "_opendir", "_closedir", "_readdir", "_sxe_get_element_class_entry", "_xmlXPathEval", "_xmlSaveFile", "_xmlDocDumpMemoryEnc", "_xmlNewChild", "_xmlNewNsProp", "_php_sxe_rewind_iterator", "_php_sxe_move_forward_iterator", "_sxe_object_new", "_xmlReadFile", "_xmlReadMemory", "__emalloc_80", "_xmlStrcmp", "_xmlCopyDoc", "_zend_call_method", "_convert_scalar_to_number", "_xmlNewTextChild", "_xmlEncodeEntitiesReentrant", "_zend_stream_init_filename_ex", "_php_stream_open_for_zend_ex", "_zend_execute", "_destroy_op_array", "_zend_destroy_file_handle", "_zend_hash_real_init_mixed", "_zend_hash_rehash", "_zend_hash_del_bucket", "_add_next_index_object", "_php_spl_object_hash", "_zend_mangle_property_name", "_zend_iterator_dtor", "_zend_call_known_instance_method_with_2_params", "_array_set_zval_key", "_spl_iterator_apply", "_zend_is_iterable", "_zend_array_to_list", "_zend_fcall_info_call", "_zend_hash_iterator_del", "_zend_hash_get_current_key_type_ex", "_zend_hash_get_current_key_zval_ex", "_zend_proptable_to_symtable", "_zend_compare_symbol_tables", "_zend_use_resource_as_offset", "_zend_incompatible_double_to_long_error", "_zend_hash_get_current_key_ex", "_zend_ref_add_type_source", "_zend_hash_get_current_pos", "_zend_hash_iterator_add", "_spl_filesystem_object_get_path", "__php_glob_stream_get_path", "__php_stream_opendir", "__php_stream_readdir", "_php_basename", "_php_stat", "_expand_filepath_with_mode", "_readlink", "_php_dirname", "__php_glob_stream_get_count", "__php_stream_eof", "_php_fgetcsv", "_php_bc_fgetcsv_empty_line", "_php_fputcsv", "_php_flock_common", "__php_stream_flush", "__php_stream_tell", "__php_stream_getc", "__php_stream_passthru", "_php_sscanf_internal", "_php_stream_read_to_str", "_php_fstat", "__php_stream_set_option", "__php_stream_truncate_set_size", "_zend_objects_destroy_object", "_zend_hash_index_lookup", "_php_count_recursive", "_var_push_dtor", "_var_replace", "_zend_is_identical", "_zend_hash_compare", "_zend_std_read_dimension", "_zend_std_write_dimension", "_zend_std_has_dimension", "_zend_std_unset_dimension", "_zend_compare", "__safe_erealloc", "_zend_user_it_invalidate_current", "_zend_hash_packed_to_hash", "_strtoul", "_strcspn", "_realloc", "_strcat", "_zend_sort", "_zend_hash_sort_ex", "_zend_hash_internal_pointer_end_ex", "_zend_hash_move_backwards_ex", "_zend_hash_minmax", "_is_smaller_function", "_is_smaller_or_equal_function", "_zend_hash_iterator_pos_ex", "_zend_hash_iterator_pos", "_zendi_smart_streq", "_php_prefix_varname", "_zend_rebuild_symbol_table", "_zend_hash_find_known_hash", "_zend_try_assign_typed_ref_zval_ex", "_zend_get_this_object", "_zend_hash_real_init_packed", "_zend_parse_arg_number_slow", "__php_math_round", "_zend_hash_to_packed", "_zend_hash_iterators_lower_pos", "__zend_hash_iterators_update", "_zend_hash_packed_del_val", "_zend_hash_iterators_advance", "_convert_to_array", "_php_array_merge_recursive", "_zend_cannot_add_element", "_php_array_merge", "_zend_hash_extend", "_php_array_replace_recursive", "_zend_string_hash_func", "_zend_string_toupper_ex", "_zend_hash_add_empty_element", "_zend_hash_bucket_swap", "_php_multisort_compare", "_add_function", "_zend_hash_real_init", "_zend_binary_strcasecmp_l", "_zend_binary_strcmp", "_strcoll", "_zendi_smart_strcmp", "_strnatcmp_ex", "_numeric_compare_function", "_string_case_compare_function", "_string_compare_function", "_string_locale_compare_function", "_php_register_incomplete_class_handlers", "_php_register_url_stream_wrapper", "_php_unregister_url_stream_wrapper", "_umask", "_setlocale", "_zend_reset_lc_ctype_locale", "_zend_update_current_locale", "_php_get_nan", "_php_get_inf", "_zend_register_double_constant", "_putenv", "_unsetenv", "_tzset", "_zend_get_executed_scope", "_zend_get_constant_ex", "_inet_ntop", "_inet_pton", "_ntohl", "_php_getenv", "_getenv", "_sapi_getenv", "_zend_strndup", "_php_getopt", "_sapi_flush", "_usleep", "_nanosleep", "_php_get_current_user", "_cfg_get_entry_ex", "__php_error_log_ex", "_php_log_err_with_severity", "__php_error_log", "_zend_get_called_scope", "_php_call_shutdown_functions", "_zend_hash_apply", "_php_free_shutdown_functions", "_zend_fcall_info_argp", "_php_get_highlight_struct", "_php_output_start_default", "_highlight_file", "_php_output_end", "_php_output_get_contents", "_php_output_discard", "_zend_save_lexical_state", "_open_file_for_scanning", "_zend_restore_lexical_state", "_zend_strip", "_zend_make_compiled_string_description", "_highlight_string", "_zend_ini_parse_quantity", "_zend_ini_get_value", "_zend_ini_sort_entries", "_zend_restore_ini_entry", "_zend_print_zval_r_to_str", "_zend_print_zval_r", "_getservbyname", "_getservbyport", "_php_add_tick_function", "_zend_llist_apply", "_zend_binary_zval_strcmp", "_zend_compare_arrays", "_zend_compare_objects", "_rename", "_chmod", "_php_copy_file_ex", "_zend_parse_ini_file", "_zend_parse_ini_string", "_add_index_double", "_zif_rewind", "_zif_fclose", "_zif_feof", "_zif_fgetc", "_zif_fgets", "_zif_fread", "_zif_fpassthru", "_zif_fseek", "_zif_ftell", "_zif_fflush", "_zif_fwrite", "_fopen", "_zend_stream_init_fp", "_object_and_properties_init", "__safe_realloc", "_php_crc32_bulk_update", "_php_crc32_stream_bulk_update", "_php_crypt", "__emalloc_128", "_php_std_date", "_zend_fetch_resource", "_zend_list_delete", "_chroot", "_php_clear_stat_cache", "_chdir", "_glob", "_php_check_open_basedir_ex", "_globfree", "_php_stream_dirent_alphasort", "__php_stream_scandir", "_php_stream_dirent_alphasortr", "_zif_dl", "_php_dl", "_php_load_extension", "_php_load_shlib", "_dlopen", "_dlerror", "_dlsym", "_dlclose", "_zend_next_free_module", "_zend_register_module_ex", "_zend_startup_module_ex", "_gethostname", "_php_network_gethostbyname", "_sysconf", "_php_exec", "_popen", "__php_stream_fopen_from_pipe", "__emalloc_large", "_php_output_write", "_mblen", "_php_escape_shell_arg", "_nice", "_php_stream_context_free", "_zend_fetch_resource2", "__php_stream_copy_to_stream_ex", "_php_stream_locate_eol", "_add_index_stringl", "_php_open_temporary_fd_ex", "__php_stream_fopen_tmpfile", "_php_error_docref2", "_php_mkdir_ex", "_mkdir", "_php_mkdir", "__php_stream_mkdir", "__php_stream_rmdir", "__php_stream_sync", "__php_stream_stat", "_zend_hash_str_add_new", "_php_copy_file_ctx", "__php_stream_stat_path", "_php_copy_file", "_fnmatch", "_zend_ini_parse_bool", "_statvfs", "_php_get_gid_by_name", "_getgrnam", "_lchown", "_chown", "_php_get_uid_by_name", "_getpwnam", "_fclose", "_realpath_cache_del", "_realpath_cache_clean", "_getgid", "_getgroups", "_realpath_cache_size", "_realpath_cache_get_buckets", "_realpath_cache_max_buckets", "_php_flock", "_localeconv", "_php_conv_fp", "__php_stream_xport_create", "_zend_try_assign_typed_ref_str", "_zend_try_assign_typed_ref_empty_string", "_sapi_header_op", "_php_header", "_sapi_send_headers", "_php_setcookie", "_php_raw_url_encode", "_difftime", "_zend_try_assign_typed_ref_string", "_zend_llist_apply_with_argument", "_php_unescape_html_entities", "_php_escape_html_entities", "_php_is_image_avif", "_php_image_type_to_mime_type", "_php_getimagetype", "_sscanf", "_strrchr", "_php_info_print_style", "_php_info_print_css", "_php_info_html_esc", "_php_get_uname", "_uname", "_php_print_info_htmlhead", "_php_print_info", "_get_zend_version", "_php_info_print_box_start", "_php_info_print_box_end", "_is_zend_mm", "_zend_multibyte_get_functions", "__php_stream_get_url_stream_wrappers_hash", "_php_stream_xport_get_hash", "__php_get_stream_filters_hash", "_zend_html_puts", "_php_info_print_hr", "_php_print_credits", "_php_info_print_table_colspan_header", "_php_info_print_table_row_ex", "_zend_get_module_version", "_fgetc", "_getc", "_lstat", "_expand_filepath_ex", "_symlink", "_link", "_zend_get_executed_filename", "_zend_get_executed_lineno", "_pclose", "_fprintf", "_php_syslog", "_log10", "_tan", "_asin", "_atan", "_sinh", "_cosh", "_tanh", "_asinh", "_acosh", "_atanh", "_pow_function", "_exp", "_expm1", "_log1p", "_log", "_log2", "_hypot", "__php_math_basetolong", "__php_math_basetozval", "__php_math_longtobase", "__php_math_zvaltobase", "_fmod", "__php_math_number_format", "__php_math_number_format_ex", "_make_digest", "_make_digest_ex", "_getrusage", "_php_statpage", "_sapi_get_stat", "_php_getlastmod", "_php_quot_print_encode", "_localeconv_r", "_php_strspn", "_php_strcspn", "_nl_langinfo", "_php_explode", "_zend_hash_packed_grow", "_php_explode_negative_limit", "_php_implode", "_php_strtoupper", "_zend_str_toupper", "_php_string_toupper", "_php_strtolower", "_php_string_tolower", "_zend_dirname", "_add_index_str", "_php_strtr", "_php_str_to_str", "_zend_try_assign_typed_ref_double", "_php_addcslashes_str", "_sprintf", "_php_stripcslashes", "_php_stripslashes", "_php_addcslashes", "_zend_str_tolower_dup_ex", "__emalloc_1024", "_php_strip_tags", "_zend_binary_strncmp", "_zend_binary_strncasecmp_l", "_ValidateFormat", "_zend_try_assign_typed_ref_stringl", "_php_openlog", "_php_closelog", "_php_syslog_str", "_zend_zval_get_legacy_type", "_zend_rsrc_list_get_rsrc_type", "_convert_to_object", "_zend_try_assign_typed_ref", "_zend_is_countable", "_php_replace_controlchars_ex", "_php_replace_controlchars", "_php_url_parse", "_php_url_parse_ex2", "_php_raw_url_decode", "_php_var_dump", "_php_printf", "_php_printf_unchecked", "_zend_array_count", "_php_debug_zval_dump", "_php_var_export_ex", "_smart_str_append_double", "_php_var_export", "_php_lookup_class_name", "_php_unserialize_with_options", "_php_var_unserialize_get_allowed_classes", "_php_var_unserialize_get_max_depth", "_php_var_unserialize_get_cur_depth", "_php_var_unserialize_set_allowed_classes", "_php_var_unserialize_set_max_depth", "_php_var_unserialize_set_cur_depth", "_zend_memory_usage", "_zend_memory_peak_usage", "_zend_memory_reset_peak_usage", "_php_canonicalize_version", "_zend_throw_exception_internal", "_zend_exception_error", "_zend_throw_unwind_exit", "_zend_objects_new", "_php_store_class_name", "_php_output_start_internal", "_php_url_scanner_add_var", "_php_url_scanner_reset_session_vars", "_php_url_scanner_reset_vars", "_php_url_scanner_reset_var", "_php_stream_wrapper_log_error", "_php_stream_context_get_option", "_php_stream_notification_notify", "_php_stream_context_set", "_php_stream_xport_crypto_setup", "_php_stream_xport_crypto_enable", "__php_stream_sock_open_host", "_zend_set_local_var_str", "_php_stream_context_set_option", "_php_stream_filter_create", "_php_stream_filter_free", "__php_stream_filter_append", "_sapi_read_post_block", "_php_stream_mode_from_str", "__php_stream_temp_create", "__php_stream_memory_create", "__php_stream_temp_create_ex", "_dup", "__php_stream_sock_open_from_socket", "__php_stream_fopen_from_file", "__php_stream_fopen_from_fd", "_var_destroy", "__efree_large", "_zend_is_valid_class_name", "_zend_hash_lookup", "_zend_ref_del_type_source", "_zend_verify_prop_assignable_by_ref", "_make_sha1_digest", "_zend_register_resource", "_php_stream_bucket_make_writeable", "_add_property_zval_ex", "_php_stream_bucket_prepend", "_php_stream_filter_register_factory_volatile", "_add_property_null_ex", "_zend_call_method_if_exists", "_php_uuencode", "_php_uudecode", "_waitpid", "_kill", "_fork", "__exit", "_execvp", "_execle", "_execl", "__php_stream_cast", "_dup2", "_pipe", "_socketpair", "_php_socket_error_str", "_openpty", "_php_socket_strerror", "_add_next_index_resource", "_php_stream_xport_accept", "_php_stream_xport_get_name", "_php_network_parse_network_address_with_port", "_php_stream_xport_sendto", "_zend_try_assign_typed_ref_null", "_php_stream_xport_recvfrom", "_select", "__php_emit_fd_setsize_warning", "_php_stream_notification_free", "_php_stream_notification_alloc", "_php_stream_filter_append_ex", "_php_stream_filter_prepend_ex", "_php_stream_filter_remove", "_php_file_le_stream_filter", "__php_stream_filter_flush", "_php_stream_get_record", "_isatty", "_php_stream_xport_shutdown", "_php_url_encode_hash_ex", "_zend_check_property_access", "_php_password_algo_register", "_php_password_algo_unregister", "_php_password_algo_default", "_php_password_algo_find", "_php_password_algo_extract_ident", "_php_password_algo_identify_ex", "_php_inet_ntop", "_getifaddrs", "_freeifaddrs", "_clock_gettime", "_php_hrtime_current", "_tidySetMallocCall", "_tidySetReallocCall", "_tidySetFreeCall", "_tidySetPanicCall", "_zend_ini_long", "_tidyLibraryVersion", "_tidyReleaseDate", "_tidyLoadConfig", "_tidySetCharEncoding", "_tidyBufInit", "_tidyBufAttach", "_tidyParseBuffer", "_tidySaveBuffer", "_tidyBufFree", "_tidyCleanAndRepair", "_zend_update_property_stringl", "_tidyCreate", "_tidySetErrorBuffer", "_tidyRelease", "_tidyOptSetBool", "_tidyRunDiagnostics", "_tidyGetOptionByName", "_tidyOptGetDoc", "_tidyGetOptionList", "_tidyGetNextOption", "_tidyOptGetName", "_tidyOptGetType", "_tidyOptGetId", "_tidyOptGetValue", "_tidyOptGetInt", "_tidyOptGetBool", "_tidyStatus", "_tidyDetectedHtmlVersion", "_tidyDetectedXhtml", "_tidyDetectedGenericXml", "_tidyErrorCount", "_tidyWarningCount", "_tidyAccessWarningCount", "_tidyConfigErrorCount", "_tidyGetRoot", "_tidyGetHtml", "_tidyGetHead", "_tidyGetBody", "_tidyGetChild", "_tidyGetNext", "_tidyNodeGetType", "_tidyGetParent", "_tidyNodeGetText", "_tidyNodeGetName", "_tidyNodeLine", "_tidyNodeColumn", "_tidyNodeIsProp", "_zend_update_property_bool", "_zend_update_property_null", "_tidyNodeGetId", "_tidyAttrFirst", "_tidyAttrName", "_tidyAttrValue", "_tidyAttrNext", "_php_output_handler_started", "_php_output_handler_start", "_tidyOptIsReadOnly", "_tidyOptSetValue", "_tidyOptSetInt", "_zend_prepare_string_for_scanning", "_zendparse", "_zend_ast_destroy", "_lex_scan", "_vrzno_expose_inc_zrefcount", "_vrzno_expose_dec_zrefcount", "_vrzno_expose_zrefcount", "_vrzno_expose_inc_crefcount", "_vrzno_expose_dec_crefcount", "_vrzno_expose_crefcount", "_vrzno_expose_efree", "_vrzno_expose_create_bool", "_vrzno_expose_create_null", "_vrzno_expose_create_undef", "_vrzno_expose_create_long", "_vrzno_expose_create_double", "_vrzno_expose_create_string", "_vrzno_expose_create_object_for_target", "_vrzno_expose_create_params", "_vrzno_expose_set_param", "_vrzno_expose_zval_is_target", "_vrzno_expose_object_keys", "_vrzno_expose_zval_dump", "_vrzno_expose_type", "_vrzno_expose_callable", "_vrzno_expose_long", "_vrzno_expose_double", "_vrzno_expose_string", "_vrzno_expose_property_type", "_vrzno_expose_property_callable", "_vrzno_expose_property_long", "_vrzno_expose_property_double", "_vrzno_expose_property_string", "_vrzno_expose_property_pointer", "_zend_register_internal_class", "_vrzno_exec_callback", "_vrzno_del_callback", "_zend_ulong_to_str", "_php_XML_ParserFree", "_XML_GetUserData", "_php_XML_ParserCreate_MM", "_php_XML_SetUserData", "_php_XML_SetElementHandler", "_php_XML_SetCharacterDataHandler", "_php_XML_SetProcessingInstructionHandler", "_php_XML_SetDefaultHandler", "_php_XML_SetUnparsedEntityDeclHandler", "_php_XML_SetNotationDeclHandler", "_php_XML_SetExternalEntityRefHandler", "_php_XML_SetStartNamespaceDeclHandler", "_php_XML_SetEndNamespaceDeclHandler", "_php_XML_Parse", "_php_XML_GetErrorCode", "_php_XML_ErrorString", "_php_XML_GetCurrentLineNumber", "_php_XML_GetCurrentColumnNumber", "_php_XML_GetCurrentByteIndex", "_php_XML_ParserCreate", "_xmlCreatePushParserCtxt", "_php_XML_ParserCreateNS", "_php_XML_SetCommentHandler", "_xmlParseChunk", "_php_XML_GetCurrentByteCount", "_php_XML_ExpatVersion", "_xmlGetPredefinedEntity", "_xmlGetDocEntity", "_xmlStrncatNew", "_xmlStrncat", "_xmlStopParser", "_zip_libzip_version", "_zip_open", "_zip_get_num_entries", "_zip_stat_index", "_zip_fopen_index", "_zip_fread", "_zip_close", "_zip_set_default_password", "_zip_strerror", "_zip_get_error", "_zip_error_code_zip", "_zip_error_code_system", "_zip_error_fini", "_zip_discard", "_zip_error_clear", "_zip_error_strerror", "_zip_error_init", "_zip_error_set", "_zip_dir_add", "_zip_set_file_compression", "_zip_source_file", "_zip_file_replace", "_zip_source_free", "_zip_file_add", "_zip_source_buffer", "_zip_stat", "_zip_name_locate", "_zip_get_name", "_zip_set_archive_comment", "_zip_get_archive_comment", "_zip_file_set_comment", "_zip_file_set_external_attributes", "_zip_file_get_external_attributes", "_zip_file_get_comment", "_zip_delete", "_zip_file_rename", "_zip_unchange", "_zip_unchange_all", "_zip_unchange_archive", "_virtual_file_ex", "_zip_fopen", "_zip_fclose", "_zip_file_get_error", "_zip_fseek", "_zip_ftell", "_zip_file_is_seekable", "_php_during_module_startup", "_php_during_module_shutdown", "_php_get_module_initialized", "_php_write", "_php_verror", "_get_active_class_name", "_zend_error_zstr", "_php_error_docref1", "_php_html_puts", "_getpwuid", "_zend_alter_ini_entry_chars_ex", "_php_request_startup", "_zend_interned_strings_activate", "_php_output_activate", "_zend_activate", "_sapi_activate", "_zend_set_timeout", "_php_output_start_user", "_php_output_set_implicit_flush", "_php_hash_environment", "_zend_activate_modules", "_php_request_shutdown", "_zend_observer_fcall_end_all", "_zend_call_destructors", "_php_output_end_all", "_zend_unset_timeout", "_php_output_deactivate", "_zend_deactivate_modules", "_shutdown_memory_manager", "_zend_set_memory_limit", "_zend_interned_strings_deactivate", "_sapi_deactivate_module", "_sapi_deactivate_destroy", "_virtual_cwd_deactivate", "_zend_post_deactivate_modules", "_zend_deactivate", "_php_com_initialize", "_php_register_extensions", "_zend_register_internal_module", "_php_module_startup", "_sapi_initialize_empty_request", "_php_output_startup", "_php_printf_to_smart_string", "_php_printf_to_smart_str", "_zend_observer_startup", "_php_output_register_constants", "_zend_startup_modules", "_zend_collect_module_handlers", "_zend_register_functions", "_zend_disable_functions", "_zend_observer_post_startup", "_cfg_get_long", "_sapi_deactivate", "_virtual_cwd_activate", "_zend_interned_strings_switch_storage", "_zend_throw_error_exception", "_zend_alloc_in_memory_limit_error_reporting", "_php_output_discard_all", "_zend_objects_store_mark_destructed", "__php_stream_open_wrapper_as_file", "_php_strip_url_passwd", "_asctime_r", "_php_resolve_path", "_strdup", "_zend_disable_class", "_php_module_shutdown_wrapper", "_php_module_shutdown", "_zend_ini_shutdown", "_php_output_shutdown", "_zend_interned_strings_dtor", "_zend_observer_shutdown", "_php_execute_script", "_virtual_chdir_file", "_zend_stream_init_filename", "_zend_execute_scripts", "_php_execute_simple_script", "_php_handle_aborted_connection", "_php_output_set_status", "_php_handle_auth_data", "_php_lint_script", "_zend_ini_parse_uquantity_warn", "_php_register_internal_extensions", "_zend_ini_color_displayer_cb", "_OnUpdateBaseDir", "_ap_php_conv_10", "_ap_php_conv_p2", "_ap_php_vslprintf", "_ap_php_vsnprintf", "_ap_php_vasprintf", "_ap_php_asprintf", "_vasprintf", "_zend_dtoa", "_zend_freedtoa", "_isascii", "___trunctfdf2", "__smart_string_alloc_persistent", "__smart_string_alloc", "_strnlen", "_php_check_specific_open_basedir", "_php_fopen_primary_script", "_zend_stream_open", "_zend_get_executed_filename_ex", "_php_fopen_with_path", "_php_ini_builder_prepend", "_php_ini_builder_unquoted", "_php_ini_builder_quoted", "_php_ini_builder_define", "_config_zval_dtor", "_free_estring", "_strlcat", "_alphasort", "_scandir", "_zend_load_extension", "_zend_load_extension_handle", "_php_parse_user_ini_file", "_php_ini_activate_config", "_php_ini_has_per_dir_config", "_php_ini_activate_per_dir_config", "_php_ini_has_per_host_config", "_php_ini_activate_per_host_config", "_cfg_get_double", "_php_ini_get_configuration_hash", "_sapi_startup", "_sapi_shutdown", "_sapi_get_default_content_type", "_sapi_get_default_content_type_header", "_sapi_apply_default_charset", "_sapi_activate_headers_only", "_destroy_uploaded_files_hash", "_sapi_register_post_entry", "_sapi_register_default_post_reader", "_sapi_get_fd", "_sapi_force_http_10", "_sapi_get_target_uid", "_sapi_get_target_gid", "_sapi_terminate_process", "_sapi_add_request_header", "_zend_multibyte_get_internal_encoding", "_zend_multibyte_encoding_converter", "_zend_multibyte_encoding_detector", "_zend_hash_str_add_empty_element", "_php_default_post_reader", "_php_default_input_filter", "_php_register_variable", "_zend_hash_str_update_ind", "_php_register_known_variable", "_php_build_argv", "_zend_activate_auto_globals", "_php_remove_tick_function", "_php_network_freeaddresses", "_php_network_getaddresses", "_socket", "_gai_strerror", "_freeaddrinfo", "_php_network_connect_socket", "_connect", "_getsockopt", "_poll", "_php_network_bind_socket_to_local_addr", "_setsockopt", "_bind", "_php_network_populate_name_from_sockaddr", "_php_network_get_peer_name", "_getpeername", "_php_network_get_sock_name", "_getsockname", "_php_network_accept_incoming", "_accept", "_php_network_connect_socket_to_host", "_php_any_addr", "_php_sockaddr_size", "_php_set_sock_blocking", "_mkstemp", "_php_open_temporary_fd", "_php_open_temporary_file", "_fdopen", "_php_odbc_connstr_is_quoted", "_php_odbc_connstr_should_quote", "_php_odbc_connstr_estimate_quote_length", "_php_odbc_connstr_quote", "_fwrite", "_zend_stack_init", "_zend_stack_top", "_php_output_handler_free", "_zend_stack_del_top", "_zend_stack_destroy", "_zend_is_compiling", "_zend_get_compiled_filename", "_zend_get_compiled_lineno", "_php_output_handler_dtor", "_php_output_write_unbuffered", "_zend_stack_count", "_zend_stack_apply_with_argument", "_php_output_flush", "_zend_stack_push", "_zend_fcall_info_argn", "_php_output_flush_all", "_php_output_clean", "_php_output_clean_all", "_php_output_get_length", "_php_output_get_active_handler", "_php_output_start_devnull", "_php_output_handler_create_user", "_php_output_handler_alias", "_php_output_handler_set_context", "_zend_stack_base", "_php_output_handler_reverse_conflict_register", "_syslog", "_openlog", "_closelog", "_zend_vstrpprintf", "_php_stream_get_url_stream_wrappers_hash_global", "_php_stream_encloses", "_php_stream_from_persistent_id", "__php_stream_free_enclosed", "__php_stream_fill_read_buffer", "__php_stream_putc", "__php_stream_puts", "_fflush", "__php_stream_mmap_range", "__php_stream_mmap_unmap_ex", "__php_stream_mmap_unmap", "__php_stream_copy_to_stream", "_php_get_stream_filters_hash_global", "_php_stream_generic_socket_factory", "_php_stream_xport_register", "_php_register_url_stream_wrapper_volatile", "_php_unregister_url_stream_wrapper_volatile", "_zend_llist_count", "__php_stream_make_seekable", "_qsort", "_fopencookie", "_fseek", "__php_stream_mode_to_str", "__php_stream_memory_get_buffer", "__php_stream_fopen_temporary_file", "__php_stream_temp_open", "_php_stream_bucket_split", "__emalloc_56", "__php_stream_filter_prepend", "_php_stream_parse_fopen_modes", "_ftell", "_fread", "_feof", "_munmap", "_setvbuf", "_mmap", "__php_stream_fopen", "__php_stream_fopen_with_path", "_fdatasync", "_fsync", "_rmdir", "_rewinddir", "_add_property_resource_ex", "_php_stream_xport_unregister", "_php_stream_xport_connect", "_php_stream_xport_bind", "_php_stream_xport_listen", "_send", "_recv", "_listen", "_shutdown", "_sendto", "_recvfrom", "__php_glob_stream_get_pattern", "_zend_lex_tstring", "_zend_ast_create_zval", "_zend_ast_list_add", "_zend_ast_create_list_0", "_zend_ast_create_2", "_zend_ast_create_list_1", "_zend_get_scanned_file_offset", "_zend_ast_create_zval_from_long", "_zend_ast_create_1", "_zend_ast_create_4", "_zend_ast_create_3", "_zend_ast_create_decl", "_zend_ast_create_zval_from_str", "_zend_ast_create_5", "_zend_ast_create_0", "_zend_ast_create_list_2", "_zend_ast_create_zval_ex", "_zend_ast_create_class_const_or_name", "_zend_ptr_stack_init", "_zend_ptr_stack_clean", "_zend_ptr_stack_destroy", "_zend_restore_compiled_filename", "_zend_multibyte_set_filter", "_zend_multibyte_check_lexer_compatibility", "_zend_stream_fixup", "_zend_multibyte_get_encoding_name", "_zend_set_compiled_filename", "_compile_file", "_zend_message_dispatcher", "_init_op_array", "_pass_two", "_zend_compile_string_to_ast", "_compile_filename", "_compile_string", "_zend_highlight", "_zend_multibyte_yyinput_again", "_zend_stack_is_empty", "_zend_ptr_stack_reverse_apply", "_zend_exception_save", "_zend_exception_restore", "_zend_bin_strtod", "_zend_oct_strtod", "_zend_hex_strtod", "_zend_ast_create_zval_with_lineno", "_zend_get_configuration_directive", "_zend_get_constant", "_zend_mm_gc", "_zend_mm_shutdown", "__zend_mm_alloc", "__zend_mm_free", "__zend_mm_realloc", "__zend_mm_realloc2", "__zend_mm_block_size", "_is_zend_ptr", "__emalloc_112", "__emalloc_192", "__emalloc_224", "__emalloc_320", "__emalloc_384", "__emalloc_448", "__emalloc_512", "__emalloc_640", "__emalloc_768", "__emalloc_896", "__emalloc_1280", "__emalloc_1536", "__emalloc_1792", "__emalloc_2048", "__emalloc_2560", "__emalloc_3072", "__emalloc_huge", "__efree_8", "__efree_16", "__efree_24", "__efree_40", "__efree_56", "__efree_64", "__efree_80", "__efree_96", "__efree_112", "__efree_128", "__efree_160", "__efree_192", "__efree_224", "__efree_256", "__efree_320", "__efree_384", "__efree_448", "__efree_512", "__efree_640", "__efree_768", "__efree_896", "__efree_1024", "__efree_1280", "__efree_1536", "__efree_1792", "__efree_2048", "__efree_2560", "__efree_3072", "__efree_huge", "__erealloc2", "__zend_mem_block_size", "_start_memory_manager", "_zend_mm_set_heap", "_zend_mm_get_heap", "_zend_mm_is_custom_heap", "_zend_mm_set_custom_handlers", "_zend_mm_get_custom_handlers", "_zend_mm_get_storage", "_zend_mm_startup", "_zend_mm_startup_ex", "_madvise", "_zend_init_rsrc_list", "_zend_create_member_string", "_zend_hash_str_find_ptr_lc", "_zend_hash_find_ptr_lc", "_function_add_ref", "_do_bind_function", "__zend_observer_function_declared_notify", "_zend_bind_class_in_slot", "_zend_hash_set_bucket_key", "_zend_get_object_type_case", "_zend_do_link_class", "__zend_observer_class_linked_notify", "_do_bind_class", "_zend_is_auto_global_str", "_zend_initialize_class_data", "_zend_function_dtor", "_zend_get_compiled_variable_name", "_zend_is_smart_branch", "_zend_get_call_op", "_execute_ex", "_zend_vm_set_opcode_handler", "_zend_multibyte_fetch_encoding", "_zend_is_op_long_compatible", "_zend_binary_op_produces_error", "_zend_unary_op_produces_error", "_zend_ast_copy", "_zend_ast_apply", "_zend_check_magic_method_implementation", "_zend_alloc_ce_cache", "_zend_map_ptr_new", "_zend_try_early_bind", "_zend_ast_create_constant", "__zend_get_special_const", "_zend_add_magic_method", "_zend_internal_attribute_get", "_zend_get_type_by_const", "_zend_type_release", "_zend_ast_create_znode", "_zend_check_protected", "_concat_function", "_get_binary_op", "_get_unary_op", "_zval_internal_ptr_dtor", "_zend_register_null_constant", "_zend_register_constant", "_zend_verify_const_access", "_zend_get_class_constant_ex", "_zend_init_fpu", "_zend_vm_stack_init", "_zend_objects_store_init", "_zend_hash_reverse_apply", "_zend_objects_store_call_destructors", "_zend_shutdown_executor_values", "_zend_hash_graceful_reverse_destroy", "_zend_hash_discard", "_zend_cleanup_internal_class_data", "_zend_stack_clean", "_zend_cleanup_mutable_class_data", "_zend_objects_store_free_object_storage", "_zend_vm_stack_destroy", "_destroy_zend_class", "_zend_objects_store_destroy", "_zend_shutdown_fpu", "_get_function_or_method_name", "_get_active_function_arg_name", "_get_function_arg_name", "_zend_ast_evaluate", "_zval_update_constant", "_zend_get_callable_name_ex", "_zend_deprecated_function", "_zend_handle_undef_args", "_zend_init_func_execute_data", "_zend_observer_fcall_begin", "_zend_observer_fcall_end", "_zend_timeout", "_zend_hash_index_add_empty_element", "_zend_eval_stringl", "_zend_destroy_static_vars", "_zend_eval_string", "_zend_eval_stringl_ex", "_zend_eval_string_ex", "_setitimer", "_zend_signal", "_zend_fetch_class_with_scope", "_zend_hash_del_ind", "_zend_attach_symbol_table", "_zend_detach_symbol_table", "_zend_set_local_var", "_zend_hash_func", "_zend_html_putc", "_zend_llist_prepend_element", "_zend_llist_remove_tail", "_zend_llist_copy", "_zend_llist_apply_with_del", "_zend_llist_sort", "_zend_llist_apply_with_arguments", "_zend_llist_get_last_ex", "_zend_llist_get_prev_ex", "_zend_get_opcode_name", "_zend_get_opcode_flags", "_zend_get_opcode_id", "_destroy_zend_function", "_zend_recalc_live_ranges", "_bitwise_not_function", "_boolean_not_function", "_sub_function", "_mul_function", "_div_function", "_mod_function", "_shift_left_function", "_shift_right_function", "_is_identical_function", "_is_not_identical_function", "_is_equal_function", "_is_not_equal_function", "_compare_function", "_bitwise_or_function", "_bitwise_and_function", "_bitwise_xor_function", "_boolean_xor_function", "_zend_atol", "_zend_atoi", "_zend_double_to_str", "_zend_std_build_object_properties_array", "_zend_symtable_to_proptable", "_zend_error_unchecked", "_zend_incompatible_string_to_long_error", "_string_compare_function_ex", "_zend_class_implements_interface", "_increment_function", "_decrement_function", "___ctype_get_mb_cur_max", "_zend_str_toupper_copy", "_zend_str_toupper_dup", "_zend_str_toupper_dup_ex", "_zend_binary_zval_strncmp", "_zend_u64_to_str", "_zend_ptr_stack_init_ex", "_zend_ptr_stack_n_push", "_zend_ptr_stack_n_pop", "_zend_ptr_stack_apply", "_zend_ptr_stack_num_elements", "_zend_stack_int_top", "_zend_stack_apply", "_zend_list_free", "_zend_ast_ref_destroy", "_zend_spprintf_unchecked", "_zend_strpprintf_unchecked", "_zend_make_printable_zval", "_zend_print_zval", "_zend_print_flat_zval_r", "_virtual_cwd_startup", "_zend_startup_strtod", "_zend_gc_collect_cycles", "_zend_interned_strings_init", "_zend_ini_startup", "_zend_destroy_modules", "_virtual_cwd_shutdown", "_zend_shutdown_strtod", "_zend_output_debug_string", "_gc_protect", "_zend_get_page_size", "_zend_append_version_info", "_strncat", "_zend_init_internal_run_time_cache", "_zend_observer_activate", "_zend_ini_deactivate", "_zend_map_ptr_reset", "_zend_error_zstr_at", "__zend_observer_error_notify", "_zend_error_at", "_zend_error_at_noreturn", "_zend_strerror_noreturn", "_strerror_r", "_zend_begin_record_errors", "_zend_emit_recorded_errors", "_zend_free_recorded_errors", "_zend_user_exception_handler", "_zend_is_unwind_exit", "_zend_map_ptr_extend", "_gc_enable", "_gc_enabled", "_zend_multibyte_set_script_encoding_by_string", "_zend_get_parameters_array_ex", "_zend_copy_parameters_array", "_zend_wrong_property_read", "_zend_wrong_callback_error", "_zend_wrong_callback_or_null_error", "_zend_wrong_parameter_class_error", "_zend_wrong_parameter_class_or_null_error", "_zend_wrong_parameter_class_or_string_error", "_zend_wrong_parameter_class_or_string_or_null_error", "_zend_wrong_parameter_class_or_long_error", "_zend_wrong_parameter_class_or_long_or_null_error", "_zend_wrong_parameter_type_error", "_zend_unexpected_extra_named_error", "_zend_argument_error_variadic", "_zend_parse_arg_bool_weak", "_zend_parse_arg_long_weak", "_zend_parse_arg_double_weak", "_zend_parse_arg_str_weak", "_zend_parse_parameter", "_zend_parse_method_parameters_ex", "_zend_merge_properties", "_object_properties_init_ex", "_add_assoc_resource_ex", "_add_assoc_array_ex", "_add_assoc_object_ex", "_add_assoc_reference_ex", "_add_index_null", "_add_index_bool", "_add_index_resource", "_add_index_array", "_add_index_object", "_add_index_reference", "_add_next_index_bool", "_add_next_index_double", "_add_next_index_array", "_add_next_index_reference", "_add_property_bool_ex", "_add_property_double_ex", "_add_property_str_ex", "_add_property_array_ex", "_add_property_object_ex", "_add_property_reference_ex", "_zend_unregister_functions", "_zend_startup_module", "_zend_get_module_started", "_zend_do_inheritance_ex", "_zend_do_implement_interface", "_zend_register_class_alias_ex", "_zend_set_hash_symbol", "_zend_is_callable_at_frame", "_zend_get_call_trampoline_func", "_zend_std_get_static_method", "_zend_fcall_info_args_save", "_zend_fcall_info_args_restore", "_zend_fcall_info_argv", "_zend_try_assign_typed_ref_ex", "_zend_try_assign_typed_ref_bool", "_zend_try_assign_typed_ref_res", "_zend_try_assign_typed_ref_zval", "_zend_declare_property", "_zend_declare_property_null", "_zend_declare_property_bool", "_zend_declare_property_long", "_zend_declare_property_double", "_zend_declare_property_string", "_zend_declare_property_stringl", "_zend_declare_class_constant", "_zend_declare_class_constant_null", "_zend_declare_class_constant_bool", "_zend_declare_class_constant_double", "_zend_declare_class_constant_stringl", "_zend_declare_class_constant_string", "_zend_unset_property", "_zend_update_property_double", "_zend_assign_to_typed_ref", "_zend_update_static_property", "_zend_update_static_property_null", "_zend_update_static_property_bool", "_zend_update_static_property_long", "_zend_update_static_property_double", "_zend_update_static_property_string", "_zend_update_static_property_stringl", "_zend_read_static_property", "_zend_save_error_handling", "_zend_register_extension", "_zend_extension_dispatch_message", "_zend_get_resource_handle", "_zend_add_system_entropy", "_zend_get_op_array_extension_handle", "_zend_get_op_array_extension_handles", "_zend_extensions_op_array_persist_calc", "_zend_extensions_op_array_persist", "_zend_hash_add_or_update", "_zend_hash_str_add_or_update", "_zend_hash_index_add_or_update", "_zend_hash_str_del_ind", "_gc_remove_from_buffer", "_zend_symtable_clean", "_zend_hash_graceful_destroy", "_zend_hash_apply_with_arguments", "_zend_hash_merge_ex", "__zend_hash_index_find", "_zend_hash_bucket_renum_swap", "_zend_hash_bucket_packed_swap", "_zend_list_insert", "_zend_fetch_list_dtor_id", "_zend_register_persistent_resource_ex", "_zend_register_default_classes", "_zend_gc_get_status", "_zend_trace_to_string", "_zend_generator_check_placeholder_frame", "_zend_std_get_class_name", "_zend_get_parameter_attribute_str", "_zend_get_attribute", "_zend_get_parameter_attribute", "_zend_mark_internal_attribute", "_zend_internal_attribute_register", "_zend_vm_stack_init_ex", "_zend_get_compiled_variable_value", "_zend_gcc_global_regs", "_zend_cannot_pass_by_reference", "_zend_verify_arg_error", "_zend_verify_scalar_type_hint", "_zend_readonly_property_modification_error", "_zend_readonly_property_indirect_modification_error", "_zend_check_user_type_slow", "_zend_missing_arg_error", "_zend_verify_return_error", "_zend_verify_never_error", "_zend_wrong_string_offset_error", "_zend_false_to_array_deprecated", "_zend_undefined_offset_write", "_zend_undefined_index_write", "_zend_fetch_dimension_const", "_zend_verify_ref_array_assignable", "_zend_throw_ref_type_error_type", "_zend_throw_ref_type_error_zval", "_zend_throw_conflicting_coercion_error", "_execute_internal", "_zend_clean_and_cache_symbol_table", "_zend_free_compiled_variables", "_zend_fetch_function_str", "_zend_init_func_run_time_cache", "_zend_init_code_execute_data", "_zend_init_execute_data", "_zend_unfinished_calls_gc", "_zend_cleanup_unfinished_execution", "_zend_free_extra_named_params", "_zend_unfinished_execution_gc", "_zend_unfinished_execution_gc_ex", "_zend_fiber_switch_block", "_zend_fiber_switch_unblock", "_zend_iterator_unwrap", "_zend_create_closure", "_zend_generator_close", "_zend_std_unset_static_property", "_zend_serialize_opcode_handler", "_zend_deserialize_opcode_handler", "_zend_get_opcode_handler_func", "_zend_get_halt_op", "_zend_vm_kind", "_zend_vm_set_opcode_handler_ex", "_zend_vm_call_opcode_handler", "_zend_set_user_opcode_handler", "_zend_get_user_opcode_handler", "_zend_get_zval_ptr", "_zend_is_graceful_exit", "_zend_exception_set_previous", "_zend_ini_dtor", "_zend_ini_global_shutdown", "_zend_register_ini_entries", "_zend_unregister_ini_entries", "_zend_ini_register_displayer", "_zend_ini_parse_uquantity", "_display_link_numbers", "_OnUpdateStr", "_OnUpdateStrNotEmpty", "_zend_insert_sort", "_zend_multibyte_set_script_encoding", "_zend_multibyte_parse_encoding_list", "_zend_multibyte_get_script_encoding", "_zend_register_iterator_wrapper", "_zend_user_it_new_iterator", "_zend_user_it_valid", "_zend_user_it_get_current_data", "_zend_user_it_get_current_key", "_zend_user_it_move_forward", "_zend_user_it_rewind", "_zend_user_it_get_gc", "_zend_user_it_get_new_iterator", "_zend_user_serialize", "_zend_user_unserialize", "_zend_register_interfaces", "_zend_get_exception_base", "_zend_exception_get_default", "_zend_get_error_exception", "_zend_create_unwind_exit", "_zend_create_graceful_exit", "_zend_throw_graceful_exit", "_gc_protected", "_zend_weakrefs_hash_add", "_zend_weakrefs_hash_del", "_zend_weakrefs_notify", "_zend_ensure_fpu_mode", "_zend_interned_string_find_permanent", "_zend_interned_strings_set_request_storage_handlers", "__vgr00000ZU_NONE_zend_string_equal_val", "_sigaction", "_sigemptyset", "_sigaddset", "_sigprocmask", "_zend_signal_handler_unblock", "_zend_sigaction", "_zend_signal_startup", "_sigfillset", "_sigdelset", "_zend_generator_restore_call_stack", "_zend_generator_freeze_call_stack", "_zend_generator_resume", "_zend_observer_generator_resume", "_virtual_getcwd_ex", "_virtual_getcwd", "_realpath_cache_lookup", "_virtual_chdir", "_virtual_realpath", "_virtual_filepath_ex", "_virtual_filepath", "_virtual_fopen", "_virtual_access", "_virtual_utime", "_virtual_chmod", "_virtual_chown", "_virtual_open", "_virtual_creat", "_creat", "_virtual_rename", "_virtual_stat", "_virtual_lstat", "_virtual_unlink", "_virtual_mkdir", "_virtual_rmdir", "_virtual_opendir", "_virtual_popen", "_zend_objects_store_put", "_zend_objects_clone_obj", "_zend_std_get_debug_info", "_zend_get_property_guard", "_zend_std_get_constructor", "_zend_std_get_closure", "_smart_str_append_escaped_truncated", "_zend_cpu_supports", "___jit_debug_register_code", "_zend_gdb_register_code", "_zend_gdb_unregister_all", "_zend_gdb_present", "_zend_observer_fcall_register", "_zend_observer_add_begin_handler", "_zend_observer_remove_begin_handler", "_zend_observer_add_end_handler", "_zend_observer_remove_end_handler", "_zend_observer_function_declared_register", "_zend_observer_class_linked_register", "_zend_observer_error_register", "_zend_observer_fiber_init_register", "_zend_observer_fiber_switch_register", "_zend_observer_fiber_destroy_register", "_zend_observer_fiber_init_notify", "_zend_observer_fiber_switch_notify", "_zend_observer_fiber_destroy_notify", "_zend_enum_get_case_by_value", "_zend_register_internal_enum", "_zend_enum_add_case", "_zend_enum_add_case_cstr", "_zend_enum_get_case", "_zend_enum_get_case_cstr", "_zend_fiber_switch_blocked", "_zend_fiber_init_context", "_mprotect", "_zend_fiber_destroy_context", "_zend_fiber_switch_context", "_zend_atomic_bool_init", "_zend_atomic_bool_exchange", "_zend_atomic_bool_store", "_zend_atomic_bool_load", "_zend_optimize_script", "_zend_build_call_graph", "_zend_analyze_call_graph", "_zend_build_call_map", "_zend_init_func_return_info", "_zend_dump_op_array", "_zend_array_type_info", "_zend_optimizer_register_pass", "_zend_optimizer_unregister_pass", "_zend_build_cfg", "_zend_cfg_build_predecessors", "_zend_cfg_compute_dominators_tree", "_zend_cfg_identify_loops", "_zend_dfg_add_use_def_op", "_zend_build_ssa", "_zend_ssa_compute_use_def_chains", "_zend_ssa_find_false_dependencies", "_zend_ssa_find_sccs", "_zend_ssa_inference", "_zend_may_throw", "_zend_ssa_rename_op", "_zend_inference_propagate_range", "_zend_array_element_type", "_zend_fetch_arg_info_type", "_zend_update_type_info", "_zend_get_func_info", "_zend_may_throw_ex", "_zend_analyze_calls", "_zend_dump_var", "_zend_dump_ssa_var", "_zend_dump_op", "_zend_dump_op_line", "_vfprintf", "_calloc", "_signal", "_setsid", "_getpgrp", "_perror", "_wait", "_setenv", "_zip_source_error", "_zip_error_set_from_source", "_zip_source_begin_write_cloning", "_zip_source_begin_write", "_zip_source_tell_write", "_zip_source_zip_file_create", "_zip_source_seek", "_zip_source_commit_write", "_zip_source_rollback_write", "_zip_source_stat", "_zip_source_keep", "_zip_stat_init", "_zip_source_open", "_zip_source_read", "_zip_source_close", "_zip_source_get_file_attributes", "_zip_source_seek_write", "_crc32", "_zip_error_init_with_code", "_zip_error_system_type", "_zip_error_to_data", "_zip_error_get", "_zError", "_zip_fopen_index_encrypted", "_zip_source_is_seekable", "_zip_source_tell", "_zip_encryption_method_supported", "_zip_source_write", "_zip_source_file_create", "_zip_open_from_source", "_zip_register_progress_callback_with_state", "_zip_register_cancel_callback_with_state", "_zip_register_progress_callback", "_zip_compression_method_supported", "_zip_source_buffer_create", "_zip_file_attributes_init", "_zip_source_function_create", "_zip_source_buffer_fragment", "_zip_source_buffer_fragment_create", "_zip_source_seek_compute_offset", "_zip_source_make_command_bitmap", "_deflateInit2_", "_inflateInit2_", "_deflateEnd", "_inflateEnd", "_deflate", "_inflate", "_zip_source_layered", "_zip_source_pass_to_lower_layer", "_zip_source_layered_create", "_zip_source_filep", "_zip_source_filep_create", "_zip_source_function", "_zip_secure_random", "_zip_source_window_create", "_zip_source_zip_file", "_fchmod", "_remove", "_clearerr", "_ferror", "_fseeko", "_ftello", "_srand", "_rand", "_prvTidyAccessibilityChecks", "_prvTidyNodeAttributeVersions", "_prvTidyAttributeIsProprietary", "_prvTidyAttributeIsMismatched", "_prvTidyAttrGetById", "_prvTidyFindAttribute", "_prvTidyGetAttrByName", "_prvTidyDropAttrByName", "_prvTidyAddAttribute", "_prvTidyRepairAttrValue", "_prvTidyFreeAttrPriorityList", "_prvTidyDefinePriorityAttribute", "_prvTidygetPriorityAttrList", "_prvTidygetNextPriorityAttr", "_prvTidyIsUrl", "_prvTidyCheckUrl", "_prvTidyIsScript", "_prvTidyIsAnchorElement", "_prvTidyIsCSS1Selector", "_prvTidyRemoveAnchorByNode", "_prvTidyFreeAnchors", "_prvTidyInitAttrs", "_prvTidyFreeAttrTable", "_prvTidyAppendToClassAttr", "_prvTidyRepairDuplicateAttributes", "_prvTidyCheckAttribute", "_prvTidyIsBoolAttribute", "_prvTidyattrIsEvent", "_prvTidyIsValidHTMLID", "_prvTidyIsValidXMLID", "_prvTidySortAttributes", "_prvTidyDupAttrs", "_prvTidyPushInline", "_prvTidyIsPushed", "_prvTidyPopInline", "_prvTidyIsPushedLast", "_prvTidyInlineDup", "_prvTidyDeferDup", "_prvTidyInsertedToken", "_prvTidySwitchInline", "_prvTidyInlineDup1", "_prvTidyCheckNodeIntegrity", "_prvTidyIsNewNode", "_prvTidyCoerceNode", "_prvTidyRemoveNode", "_prvTidyDiscardElement", "_prvTidyInsertNodeAtStart", "_prvTidyInsertNodeAtEnd", "_prvTidyInsertNodeBeforeElement", "_prvTidyInsertNodeAfterElement", "_prvTidyTrimEmptyElement", "_prvTidyDropEmptyElements", "_prvTidyIsBlank", "_prvTidyParseBlock", "_prvTidyParseList", "_prvTidyParsePre", "_prvTidyParseNamespace", "_prvTidyParseInline", "_prvTidyParseEmpty", "_prvTidyParseDefList", "_prvTidyParseRow", "_prvTidyParseRowGroup", "_prvTidyParseColGroup", "_prvTidyParseTableTag", "_prvTidyParseOptGroup", "_prvTidyParseSelect", "_prvTidyParseDatalist", "_prvTidyParseText", "_prvTidyParseTitle", "_prvTidyParseScript", "_prvTidyIsJavaScript", "_prvTidyParseHead", "_prvTidyFindNodeWithId", "_prvTidyFindNodeById", "_prvTidyParseBody", "_prvTidyParseNoFrames", "_prvTidyParseFrameSet", "_prvTidyParseHTML", "_prvTidyParseDocument", "_prvTidyXMLPreserveWhiteSpace", "_prvTidyParseXMLDocument", "_prvTidyDeclareUserTag", "_prvTidyDefineTag", "_prvTidyFindTag", "_prvTidynodeIsAutonomousCustomTag", "_prvTidyLookupTagDef", "_prvTidyFindParser", "_prvTidyGetDeclaredTagList", "_prvTidyGetNextDeclaredTag", "_prvTidyInitTags", "_prvTidyFreeDeclaredTags", "_prvTidyAdjustTags", "_prvTidyIsHTML5Mode", "_prvTidyResetTags", "_prvTidyFreeTags", "_prvTidyCheckAttributes", "_prvTidynodeIsText", "_prvTidynodeHasText", "_prvTidynodeIsElement", "_prvTidyelementIsAutonomousCustomFormat", "_prvTidynodeIsAutonomousCustomFormat", "_prvTidynodeHasCM", "_prvTidynodeCMIsBlock", "_prvTidynodeCMIsInline", "_prvTidynodeCMIsEmpty", "_prvTidynodeIsHeader", "_prvTidynodeHeaderLevel", "_prvTidyTraverseNodeTree", "_prvTidyEntityInfo", "_prvTidyEntityName", "_prvTidyHTMLVersion", "_prvTidyConstrainVersion", "_prvTidyIsWhite", "_prvTidyIsNewline", "_prvTidyIsDigit", "_prvTidyIsLetter", "_prvTidyIsHTMLSpace", "_prvTidyIsNamechar", "_prvTidyIsXMLLetter", "_prvTidyIsXMLNamechar", "_prvTidyIsUpper", "_prvTidyToLower", "_prvTidyToUpper", "_prvTidyNewLexer", "_prvTidyFreeLexer", "_prvTidyFreeNode", "_prvTidyAddCharToLexer", "_prvTidyNewNode", "_prvTidyCloneNode", "_prvTidyFreeAttrs", "_prvTidyFreeAttribute", "_prvTidyDetachAttribute", "_prvTidyRemoveAttribute", "_prvTidyTextToken", "_prvTidyNewLineNode", "_prvTidyNewLiteralTextNode", "_prvTidyAddStringLiteral", "_prvTidyFindDocType", "_prvTidyFindContainer", "_prvTidyFindHTML", "_prvTidyFindXmlDecl", "_prvTidyFindHEAD", "_prvTidyFindTITLE", "_prvTidyFindBody", "_prvTidyAddGenerator", "_prvTidyInferredTag", "_prvTidyApparentVersion", "_prvTidyHTMLVersionNameFromCode", "_prvTidyHTMLVersionNumberFromCode", "_prvTidyWarnMissingSIInEmittedDocType", "_prvTidySetXHTMLDocType", "_prvTidyFixDocType", "_prvTidyFixXmlDecl", "_prvTidyUngetToken", "_prvTidyGetToken", "_prvTidyInitMap", "_prvTidyNewAttribute", "_prvTidyNewAttributeEx", "_prvTidyInsertAttributeAtEnd", "_prvTidyInsertAttributeAtStart", "_prvTidyPPrintTabs", "_prvTidyPPrintSpaces", "_prvTidyInitPrintBuf", "_prvTidyFreePrintBuf", "_prvTidyPFlushLine", "_prvTidyPFlushLineSmart", "_prvTidyTextNodeEndWithSpace", "_prvTidyPrintBody", "_prvTidyPPrintTree", "_prvTidyPPrintXMLTree", "_prvTidyFreeStyles", "_prvTidyAddStyleAsClass", "_prvTidyFixNodeLinks", "_prvTidyAddStyleProperty", "_prvTidyCleanDocument", "_prvTidyNestedEmphasis", "_prvTidyEmFromI", "_prvTidyList2BQ", "_prvTidyBQ2Div", "_prvTidyDropSections", "_prvTidyNormalizeSpaces", "_prvTidyCleanWord2000", "_prvTidyIsWord2000", "_prvTidyBumpObject", "_prvTidyTidyMetaCharset", "_prvTidyDropComments", "_prvTidyDropFontElements", "_prvTidyWbrToSpace", "_prvTidyDowngradeTypography", "_prvTidyReplacePreformattedSpaces", "_prvTidyConvertCDATANodes", "_prvTidyFixLanguageInformation", "_prvTidyFixXhtmlNamespace", "_prvTidyFixAnchors", "_prvTidyCleanStyle", "_prvTidyReleaseDate", "_prvTidytidyLibraryVersion", "_prvTidyReport", "_prvTidyReportAccessError", "_prvTidyReportAttrError", "_prvTidyReportBadArgument", "_prvTidyReportEntityError", "_prvTidyReportFileError", "_prvTidyReportEncodingError", "_prvTidyReportEncodingWarning", "_prvTidyReportMissingAttr", "_prvTidyReportSurrogateError", "_prvTidyReportUnknownOption", "_formatDialogue", "_prvTidyDialogue", "_prvTidyErrorSummary", "_prvTidyReportMarkupVersion", "_prvTidyReportNumWarnings", "_prvTidyFreeMutedMessageList", "_prvTidyDefineMutedMessage", "_prvTidytidyErrorCodeFromKey", "_prvTidygetMutedMessageList", "_prvTidygetNextMutedMessage", "_prvTidytidyErrorCodeAsKey", "_prvTidygetErrorCodeList", "_prvTidygetNextErrorCode", "_prvTidyOptGetDocDesc", "_prvTidyInitConfig", "_prvTidyResetConfigToDefault", "_prvTidyFreeConfig", "_prvTidyTakeConfigSnapshot", "_prvTidylookupOption", "_prvTidygetOption", "_prvTidygetOptionIsList", "_prvTidyDeclareListItem", "_prvTidyGetPickListLabelForPick", "_prvTidySetOptionInt", "_prvTidySetOptionBool", "_prvTidyResetOptionToDefault", "_prvTidyResetConfigToSnapshot", "_prvTidyParseConfigValue", "_prvTidyCopyConfig", "_tidyFileExists", "_prvTidyParseConfigFile", "_prvTidyParseConfigFileEnc", "_prvTidyCharEncodingId", "_prvTidyParseConfigOption", "_prvTidyAdjustCharEncoding", "_prvTidyAdjustConfig", "_prvTidyCharEncodingName", "_prvTidyCharEncodingOptName", "_prvTidygetOptionList", "_prvTidygetNextOption", "_prvTidygetOptionPickList", "_prvTidygetNextOptionPick", "_prvTidyConfigDiffThanSnapshot", "_prvTidyConfigDiffThanDefault", "_prvTidySaveConfigFile", "_prvTidySaveConfigSink", "_fiprintf", "_tidyInitInputBuffer", "_tidyInitOutputBuffer", "_tidyBufInitWithAllocator", "_tidyBufAlloc", "_tidyBufAllocWithAllocator", "_tidyBufCheckAlloc", "_tidyBufClear", "_tidyBufDetach", "_tidyBufAppend", "_tidyBufPutByte", "_tidyBufPopByte", "_tidyBufGetByte", "_tidyBufEndOfInput", "_tidyBufUngetByte", "_prvTidyinitStdIOFileSource", "_prvTidyfreeStdIOFileSource", "_prvTidyfilesink_putByte", "_prvTidyinitFileSink", "_prvTidyStdErrOutput", "_prvTidyReleaseStreamOut", "_prvTidyinitStreamIn", "_prvTidyfreeStreamIn", "_prvTidyFileInput", "_prvTidyBufferInput", "_prvTidyUserInput", "_prvTidyReadBOMEncoding", "_prvTidyReadChar", "_prvTidyUngetChar", "_prvTidyDecodeMacRoman", "_prvTidyDecodeWin1252", "_prvTidyFileOutput", "_prvTidyBufferOutput", "_prvTidyUserOutput", "_prvTidyWriteChar", "_tidyInitSource", "_tidyInitSink", "_tidyGetByte", "_tidyIsEOF", "_tidyUngetByte", "_tidyPutByte", "_prvTidyIsEOF", "_prvTidyoutBOM", "_prvTidyGetEncodingNameFromTidyId", "_prvTidyGetEncodingOptNameFromTidyId", "_prvTidyGetCharEncodingFromOptName", "_prvTidytmbstrdup", "_prvTidytmbstrlen", "_prvTidytmbstrndup", "_prvTidytmbstrncpy", "_prvTidytmbstrcpy", "_prvTidytmbstrcat", "_prvTidytmbstrcmp", "_prvTidytmbstrcasecmp", "_prvTidytmbstrncmp", "_prvTidytmbstrncasecmp", "_prvTidytmbsubstrn", "_prvTidytmbsubstr", "_prvTidytmbstrtolower", "_prvTidytmbstrtoupper", "_prvTidytmbvsnprintf", "_prvTidytmbsnprintf", "_prvTidyDecodeUTF8BytesToChar", "_prvTidyEncodeCharToUTF8Bytes", "_prvTidyGetUTF8", "_prvTidyPutUTF8", "_prvTidyIsValidUTF16FromUCS4", "_prvTidyIsHighSurrogate", "_prvTidyIsLowSurrogate", "_prvTidyCombineSurrogatePair", "_prvTidySplitSurrogatePair", "_prvTidyIsValidCombinedChar", "_prvTidyIsCombinedChar", "_vsnprintf", "_prvTidytidyMessageCreate", "_tidyLocalizedStringN", "_prvTidyinitFileSource", "_fputc", "_prvTidytidyMessageRelease", "_tidyLocalizedString", "_prvTidytidyMessageCreateWithNode", "_prvTidytidyMessageCreateWithLexer", "_prvTidyfreeFileSource", "_siprintf", "_strtok", "_prvTidytidyGetLanguageSetByUser", "_prvTidytidySetLanguage", "_tidyCreateWithAllocator", "_tidySetAppData", "_tidyGetAppData", "_tidyPlatform", "_tidySetOptionCallback", "_tidySetConfigCallback", "_tidySetConfigChangeCallback", "_tidyLoadConfigEnc", "_tidySetInCharEncoding", "_tidySetOutCharEncoding", "_tidyOptGetIdForName", "_tidyGetOption", "_tidyOptionIsList", "_tidyOptGetCategory", "_tidyOptGetDefault", "_tidyOptGetDefaultInt", "_tidyOptGetDefaultBool", "_tidyOptGetPickList", "_tidyOptGetNextPick", "_tidyOptParseValue", "_tidyOptGetEncName", "_tidyOptGetCurrPick", "_tidyOptGetDeclTagList", "_tidyOptGetNextDeclTag", "_tidyOptGetPriorityAttrList", "_tidyOptGetNextPriorityAttr", "_tidyOptGetMutedMessageList", "_tidyOptGetNextMutedMessage", "_prvTidytidyLocalizedString", "_tidyOptGetDocLinksList", "_tidyOptGetNextDocLinks", "_tidyOptSaveFile", "_tidyOptSaveSink", "_tidyOptSnapshot", "_tidyOptResetToSnapshot", "_tidyOptResetAllToDefault", "_tidyOptResetToDefault", "_tidyOptDiffThanDefault", "_tidyOptDiffThanSnapshot", "_tidyOptCopyConfig", "_tidySetEmacsFile", "_tidyGetEmacsFile", "_tidySetReportFilter", "_tidySetReportCallback", "_tidySetMessageCallback", "_tidyGetMessageDoc", "_prvTidygetMessageDoc", "_tidyGetMessageCode", "_prvTidygetMessageCode", "_tidyGetMessageKey", "_prvTidygetMessageKey", "_tidyGetMessageLine", "_prvTidygetMessageLine", "_tidyGetMessageColumn", "_prvTidygetMessageColumn", "_tidyGetMessageLevel", "_prvTidygetMessageLevel", "_tidyGetMessageIsMuted", "_prvTidygetMessageIsMuted", "_tidyGetMessageFormatDefault", "_prvTidygetMessageFormatDefault", "_tidyGetMessageFormat", "_prvTidygetMessageFormat", "_tidyGetMessageDefault", "_prvTidygetMessageDefault", "_tidyGetMessage", "_prvTidygetMessage", "_tidyGetMessagePosDefault", "_prvTidygetMessagePosDefault", "_tidyGetMessagePos", "_prvTidygetMessagePos", "_tidyGetMessagePrefixDefault", "_prvTidygetMessagePrefixDefault", "_tidyGetMessagePrefix", "_prvTidygetMessagePrefix", "_tidyGetMessageOutputDefault", "_prvTidygetMessageOutputDefault", "_tidyGetMessageOutput", "_prvTidygetMessageOutput", "_tidyGetMessageArguments", "_prvTidygetMessageArguments", "_tidyGetNextMessageArgument", "_prvTidygetNextMessageArgument", "_tidyGetArgType", "_prvTidygetArgType", "_tidyGetArgFormat", "_prvTidygetArgFormat", "_tidyGetArgValueString", "_prvTidygetArgValueString", "_tidyGetArgValueUInt", "_prvTidygetArgValueUInt", "_tidyGetArgValueInt", "_prvTidygetArgValueInt", "_tidyGetArgValueDouble", "_prvTidygetArgValueDouble", "_tidySetErrorFile", "_tidySetErrorSink", "_tidySetPrettyPrinterCallback", "_tidyErrorSummary", "_tidyGeneralInfo", "_tidyParseFile", "_prvTidyDocParseStream", "_tidyParseStdin", "_tidyParseString", "_tidyParseSource", "_tidySaveFile", "_tidySaveStdout", "_tidySaveString", "_tidySaveSink", "_prvTidyCleanGoogleDocument", "_prvTidyCheckHTML5", "_prvTidyCheckHTMLTagsAttribsVersions", "_tidyReportDoctype", "_inRemovedInfo", "_tidyDiscardElement", "_tidyGetPrev", "_tidyNodeHasText", "_tidyNodeGetValue", "_tidyAttrDiscard", "_tidyAttrGetId", "_tidyAttrGetById", "_tidyAttrIsEvent", "_tidyErrorCodeAsKey", "_tidyErrorCodeFromKey", "_getErrorCodeList", "_getNextErrorCode", "_tidySetLanguage", "_prvTidytidySetLanguageSetByUser", "_tidyGetLanguage", "_prvTidytidyGetLanguage", "_prvTidytidyLocalizedStringN", "_tidyDefaultString", "_prvTidytidyDefaultString", "_getStringKeyList", "_prvTidygetStringKeyList", "_getNextStringKey", "_prvTidygetNextStringKey", "_getWindowsLanguageList", "_prvTidygetWindowsLanguageList", "_getNextWindowsLanguage", "_prvTidygetNextWindowsLanguage", "_TidyLangWindowsName", "_prvTidyTidyLangWindowsName", "_TidyLangPosixName", "_prvTidyTidyLangPosixName", "_getInstalledLanguageList", "_prvTidygetInstalledLanguageList", "_getNextInstalledLanguage", "_prvTidygetNextInstalledLanguage", "_prvTidytidyNormalizedLocaleName", "_prvTidytidyTestLanguage", "_locale_charset", "_mbrtowc", "_wcrtomb", "_libiconv_open_into", "_libiconvctl", "_libiconvlist", "_iconv_canonicalize", "_initxmlDefaultSAXHandler", "_inithtmlDefaultSAXHandler", "_initdocbDefaultSAXHandler", "_xmlAddDtdEntity", "___xmlSimpleError", "_xmlHashCreateDict", "_xmlHashAddEntry", "_xmlAddDocEntity", "_xmlNewEntity", "_xmlDictLookup", "_xmlGetParameterEntity", "_xmlGetDtdEntity", "_xmlEncodeAttributeEntities", "_xmlStrstr", "_xmlEncodeSpecialChars", "_xmlCreateEntitiesTable", "_xmlHashCreate", "_xmlFreeEntitiesTable", "_xmlHashFree", "_xmlCopyEntitiesTable", "_xmlHashCopy", "_xmlDumpEntityDecl", "_xmlBufferWriteChar", "_xmlBufferWriteCHAR", "_xmlBufferWriteQuotedString", "_xmlBufferCCat", "_xmlBufferAdd", "_xmlDumpEntitiesTable", "_xmlFreeNodeList", "_xmlDictOwns", "_isolat1ToUTF8", "_UTF8Toisolat1", "_xmlDetectCharEncoding", "_xmlCleanupEncodingAliases", "_xmlGetEncodingAlias", "_xmlAddEncodingAlias", "_xmlDelEncodingAlias", "_xmlGetCharEncodingName", "_xmlNewCharEncodingHandler", "_xmlInitCharEncodingHandlers", "___xmlRaiseError", "_xmlRegisterCharEncodingHandler", "_UTF8ToHtml", "_xmlCleanupCharEncodingHandlers", "_xmlGetCharEncodingHandler", "_iconv_open", "_iconv_close", "_xmlCharEncFirstLineInt", "_xmlBufferGrow", "_xmlBufferShrink", "_xmlCharEncFirstLine", "_xmlCharEncFirstLineInput", "_xmlBufUse", "_xmlBufAvail", "_xmlBufGrow", "_xmlBufEnd", "_xmlBufContent", "_xmlBufShrink", "_xmlBufAddLen", "_xmlCharEncInput", "_xmlCharEncInFunc", "_xmlCharEncOutput", "_xmlGetUTF8Char", "_xmlBufGetAllocationScheme", "_xmlCharEncOutFunc", "_xmlByteConsumed", "_iconv", "_xmlGenericErrorDefaultFunc", "_initGenericErrorDefaultFunc", "_xmlParserPrintFileInfo", "_xmlParserPrintFileContext", "_xmlGetProp", "_xmlParserValidityWarning", "_xmlParserValidityError", "_xmlParserError", "_xmlParserWarning", "_xmlCtxtGetLastError", "_xmlCtxtResetLastError", "_xmlCheckVersion", "_xmlErrMemory", "___xmlErrEncoding", "_xmlIsLetter", "_xmlParserInputRead", "_xmlParserInputGrow", "_xmlParserInputShrink", "_xmlNextChar", "_xmlCurrentChar", "_xmlStringCurrentChar", "_xmlCopyCharMultiByte", "_xmlCopyChar", "_xmlSwitchEncoding", "_xmlSwitchInputEncoding", "_xmlSwitchToEncoding", "_xmlFreeInputStream", "_xmlNewInputStream", "_xmlCharInRange", "_xmlParserInputBufferGrow", "_xmlParserInputBufferRead", "_xmlBufIsEmpty", "_xmlBufCreate", "_xmlBufResetInput", "_xmlNewEntityInputStream", "_xmlLoadExternalEntity", "_xmlNewStringInputStream", "_xmlParserInputBufferCreateFilename", "___xmlLoaderErr", "_xmlCheckHTTPInput", "_xmlParserGetDirectory", "_xmlInitParserCtxt", "_xmlDefaultSAXHandlerInit", "_xmlDictCreate", "_xmlDictSetLimit", "_xmlSAXVersion", "_inputPop", "_xmlSAX2IgnorableWhitespace", "_xmlInitNodeInfoSeq", "_xmlDictFree", "_xmlHashDefaultDeallocator", "_xmlCatalogFreeLocal", "_xmlNewParserCtxt", "_xmlClearParserCtxt", "_xmlCtxtReset", "_xmlClearNodeInfoSeq", "_xmlParserFindNodeInfo", "_xmlParserFindNodeInfoIndex", "_xmlParserAddNodeInfo", "_xmlHasFeature", "_xmlCheckLanguageID", "_inputPush", "_nodePush", "_nodePop", "_namePush", "_namePop", "_xmlSkipBlankChars", "_xmlParsePEReference", "_xmlPopInput", "_xmlParseName", "_xmlPushInput", "_xmlParseTextDecl", "_xmlInputReadCallbackNop", "_xmlParseCharRef", "_xmlParserHandlePEReference", "_xmlStringLenDecodeEntities", "_xmlSAX2GetEntity", "_xmlStringDecodeEntities", "_xmlSplitQName", "_xmlParseNmtoken", "_xmlParseEntityValue", "_xmlParseAttValue", "_xmlParseEntityRef", "_xmlParseSystemLiteral", "_xmlParsePubidLiteral", "_xmlParseCharData", "_xmlIsMixedElement", "_xmlGetLastChild", "_xmlNodeIsText", "_xmlParseExternalID", "_xmlParseComment", "_xmlParsePITarget", "_xmlParsePI", "_xmlCatalogGetDefaults", "_xmlCatalogAddLocal", "_xmlParseNotationDecl", "_xmlParseEntityDecl", "_xmlNewDtd", "_xmlSAX2EntityDecl", "_xmlParseDefaultDecl", "_xmlParseNotationType", "_xmlCreateEnumeration", "_xmlFreeEnumeration", "_xmlParseEnumerationType", "_xmlParseEnumeratedType", "_xmlParseAttributeType", "_xmlParseAttributeListDecl", "_xmlHashLookup2", "_xmlHashUpdateEntry2", "_xmlHashAddEntry2", "_xmlParseElementMixedContentDecl", "_xmlNewDocElementContent", "_xmlFreeDocElementContent", "_xmlParseElementChildrenContentDecl", "_xmlParseElementContentDecl", "_xmlParseElementDecl", "_xmlParseMarkupDecl", "_xmlParseVersionInfo", "_xmlCharStrdup", "_xmlParseEncodingDecl", "_xmlParseVersionNum", "_xmlParseEncName", "_xmlStrcasecmp", "_xmlParseExternalSubset", "_xmlParseReference", "_xmlDictReference", "_xmlParseContent", "_xmlValidateElement", "_xmlParseDocTypeDecl", "_xmlParseAttribute", "_xmlParseStartTag", "_xmlParseEndTag", "_xmlParseCDSect", "_xmlValidateRoot", "_xmlParseElement", "_xmlParseSDDecl", "_xmlParseXMLDecl", "_xmlParseMisc", "_xmlInitThreads", "_xmlInitGlobals", "_xmlInitMemory", "_xmlInitializeDict", "_xmlRegisterDefaultInputCallbacks", "_xmlRegisterDefaultOutputCallbacks", "_htmlInitAutoClose", "_htmlDefaultSAXHandlerInit", "_xmlXPathInit", "_xmlHashScanFull", "_xmlParseExtParsedEnt", "_xmlBufGetInputBase", "_xmlStrcasestr", "_xmlParserInputBufferPush", "_xmlBufSetInputBaseCur", "_xmlCreateIOParserCtxt", "_xmlParserInputBufferCreateIO", "_xmlIOParseDTD", "_xmlSAXParseDTD", "_xmlParseDTD", "_xmlParseCtxtExternalEntity", "_xmlBuildURI", "_xmlParseExternalEntity", "_xmlParseBalancedChunkMemoryRecover", "_xmlParseInNodeContext", "___htmlParseContent", "_xmlParserInputBufferCreateMem", "_xmlSAX2EndElement", "_xmlSAX2StartElement", "_xmlSAXParseEntity", "_xmlCreateURLParserCtxt", "_xmlParseEntity", "_xmlCreateEntityParserCtxt", "_xmlSAXParseFileWithData", "_xmlSAXParseFile", "_xmlRecoverDoc", "_xmlSAXParseDoc", "_xmlParseFile", "_xmlRecoverFile", "_xmlSetupParserForBuffer", "_xmlSAXUserParseFile", "_xmlSAXParseMemoryWithData", "_xmlSAXParseMemory", "_xmlParseMemory", "_xmlRecoverMemory", "_xmlSAXUserParseMemory", "_xmlCreateDocParserCtxt", "_xmlParseDoc", "_xmlSetEntityReferenceFunc", "_xmlCleanupParser", "_xmlCatalogCleanup", "_xmlDictCleanup", "_xmlCleanupInputCallbacks", "_xmlCleanupOutputCallbacks", "_xmlSchemaCleanupTypes", "_xmlCleanupGlobals", "_xmlCleanupThreads", "_xmlCleanupMemory", "_xmlCtxtResetPush", "_xmlReadDoc", "_xmlReadFd", "_xmlParserInputBufferCreateFd", "_xmlReadIO", "_xmlCtxtReadDoc", "_xmlCtxtReadFile", "_xmlCtxtReadMemory", "_xmlCtxtReadFd", "_xmlCtxtReadIO", "_xmlHashQLookup2", "_xmlBuildQName", "_xmlHashRemoveEntry2", "_xmlValidateNCName", "_xmlValidateNMToken", "_xmlSetBufferAllocationScheme", "_xmlGetBufferAllocationScheme", "_xmlFreeNsList", "_xmlFreeDtd", "_xmlFreeNotationTable", "_xmlFreeElementTable", "_xmlFreeAttributeTable", "_xmlHashRemoveEntry", "_xmlFreeIDTable", "_xmlFreeRefTable", "_xmlStringLenGetNodeList", "_xmlBufCreateSize", "_xmlBufSetAllocationScheme", "_xmlBufAdd", "_xmlBufCat", "_xmlBufDetach", "_xmlStringGetNodeList", "_xmlBufFree", "_xmlNodeAddContentLen", "_xmlNodeListGetRawString", "_xmlCheckUTF8", "_xmlIsID", "_xmlNewNsPropEatName", "_xmlFreePropList", "_xmlRemoveProp", "_xmlNewDocPI", "_xmlNewNodeEatName", "_xmlNewDocNodeEatName", "_xmlNewDocRawNode", "_xmlNewCharRef", "_xmlNewTextLen", "_xmlNewDocTextLen", "_xmlSetListDoc", "_xmlAddSibling", "_xmlChildElementCount", "_xmlFirstElementChild", "_xmlLastElementChild", "_xmlPreviousElementSibling", "_xmlNextElementSibling", "_xmlCopyNamespace", "_xmlCopyProp", "_xmlCopyDtd", "_xmlDocCopyNodeList", "_xmlCopyNodeList", "_xmlCopyNotationTable", "_xmlCopyElementTable", "_xmlCopyAttributeTable", "_xmlGetDtdQElementDesc", "_xmlGetDtdQAttrDesc", "_xmlNodeSetLang", "_xmlNodeGetLang", "_xmlNodeSetSpacePreserve", "_xmlNodeGetSpacePreserve", "_xmlNodeSetName", "_xmlNodeSetBase", "_xmlPathToURI", "_xmlNodeBufGetContent", "_xmlBufFromBuffer", "_xmlBufGetNodeContent", "_xmlBufBackToBuffer", "_xmlTextMerge", "_xmlGetDtdAttrDesc", "_xmlGetNoNsProp", "_xmlUnsetProp", "_xmlUnsetNsProp", "_xmlBufferCreateSize", "_xmlBufferDetach", "_xmlBufferCreateStatic", "_xmlBufferSetAllocationScheme", "_xmlBufferEmpty", "_xmlBufferDump", "_xmlBufferResize", "_xmlBufferAddHead", "_xmlBufferCat", "_xmlGetDocCompressMode", "_xmlSetDocCompressMode", "_xmlGetCompressMode", "_xmlSetCompressMode", "_xmlDOMWrapNewCtxt", "_xmlDOMWrapFreeCtxt", "_xmlDOMWrapRemoveNode", "_xmlDOMWrapCloneNode", "_xmlDOMWrapAdoptNode", "___xmlRandom", "_xmlHashAddEntry3", "_xmlHashUpdateEntry", "_xmlHashUpdateEntry3", "_xmlHashLookup3", "_xmlHashQLookup", "_xmlHashQLookup3", "_xmlStrQEqual", "_xmlHashScan3", "_xmlHashScanFull3", "_xmlHashRemoveEntry3", "_xmlListCreate", "_xmlListSearch", "_xmlListReverseSearch", "_xmlListInsert", "_xmlListAppend", "_xmlListDelete", "_xmlListClear", "_xmlListRemoveFirst", "_xmlListRemoveLast", "_xmlListRemoveAll", "_xmlListEmpty", "_xmlListFront", "_xmlListEnd", "_xmlListSize", "_xmlListPopFront", "_xmlListPopBack", "_xmlListPushFront", "_xmlListPushBack", "_xmlLinkGetData", "_xmlListReverse", "_xmlListSort", "_xmlListCopy", "_xmlListDup", "_xmlListMerge", "_xmlListWalk", "_xmlListReverseWalk", "___xmlIOErr", "_xmlNormalizeWindowsPath", "_xmlPopInputCallbacks", "_xmlCheckFilename", "_xmlFileMatch", "_xmlFileOpen", "_xmlStrncasecmp", "_xmlFileRead", "_xmlFileClose", "_xmlRegisterInputCallbacks", "_xmlRegisterOutputCallbacks", "_gzread", "_gzclose", "_xmlAllocOutputBufferInternal", "___xmlParserInputBufferCreateFilename", "_gzdirect", "___xmlOutputBufferCreateFilename", "_gzdopen", "_gzopen", "_gzwrite", "_xmlParserInputBufferCreateFile", "_xmlOutputBufferCreateFile", "_xmlOutputBufferCreateIO", "_xmlParserInputBufferCreateStatic", "_xmlBufCreateStatic", "_xmlOutputBufferCreateFd", "_xmlOutputBufferWrite", "_xmlOutputBufferWriteEscape", "_xmlOutputBufferWriteString", "_xmlNoNetExternalEntityLoader", "_xmlCatalogLocalResolve", "_xmlCatalogResolve", "_xmlCatalogLocalResolveURI", "_xmlCatalogResolveURI", "_xmlMallocBreakpoint", "_xmlMallocLoc", "_xmlNewMutex", "_xmlMutexLock", "_xmlMutexUnlock", "_xmlMemoryDump", "_xmlMallocAtomicLoc", "_xmlMemMalloc", "_xmlReallocLoc", "_xmlMemRealloc", "_xmlMemFree", "_xmlMemStrdupLoc", "_xmlMemoryStrdup", "_xmlMemUsed", "_xmlMemBlocks", "_xmlMemDisplayLast", "_xmlMemDisplay", "_xmlMemShow", "_xmlFreeMutex", "_xmlMemSetup", "_xmlMemGet", "_xmlGcMemSetup", "_xmlGcMemGet", "_xmlParseURIRaw", "_xmlSaveUri", "_xmlPrintURI", "_fputs", "_xmlNormalizeURIPath", "_xmlURIEscape", "_xmlBuildRelativeURI", "_xmlValidBuildContentModel", "_xmlSnprintfElementContent", "_xmlRegexpIsDeterminist", "_xmlNewAutomata", "_xmlAutomataGetInitState", "_xmlAutomataSetFinalState", "_xmlAutomataCompile", "_xmlFreeAutomata", "_xmlAutomataNewTransition", "_xmlAutomataNewEpsilon", "_xmlAutomataNewState", "_xmlNewElementContent", "_xmlCopyDocElementContent", "_xmlCopyElementContent", "_xmlFreeElementContent", "_xmlSprintfElementContent", "_xmlAddElementDecl", "_xmlRegFreeRegexp", "_xmlDumpElementDecl", "_xmlDumpElementTable", "_xmlCopyEnumeration", "_xmlAddAttributeDecl", "_xmlDumpAttributeDecl", "_xmlDumpAttributeTable", "_xmlAddNotationDecl", "_xmlDumpNotationDecl", "_xmlDumpNotationTable", "_xmlAddRef", "_xmlIsRef", "_xmlRemoveRef", "_xmlGetRefs", "_xmlGetDtdElementDesc", "_xmlGetDtdNotationDesc", "_xmlValidateNotationUse", "_xmlValidateNameValue", "_xmlValidateNamesValue", "_xmlValidateNmtokenValue", "_xmlValidateNmtokensValue", "_xmlValidateNotationDecl", "_xmlValidateAttributeValue", "_xmlValidCtxtNormalizeAttributeValue", "_xmlValidNormalizeAttributeValue", "_xmlValidateAttributeDecl", "_xmlValidateElementDecl", "_xmlValidateOneAttribute", "_xmlValidateOneNamespace", "_xmlValidatePushElement", "_xmlRegExecPushString", "_xmlRegNewExecCtxt", "_xmlValidatePushCData", "_xmlValidatePopElement", "_xmlRegFreeExecCtxt", "_xmlValidateOneElement", "_xmlValidateDocumentFinal", "_xmlValidateDtd", "_xmlValidateDtdFinal", "_xmlValidGetPotentialChildren", "_xmlValidGetValidElements", "_htmlTagLookup", "_htmlAutoCloseTag", "_htmlIsAutoClosed", "_htmlIsScriptAttribute", "_htmlEntityLookup", "_htmlEntityValueLookup", "_htmlEncodeEntities", "_htmlNewDocNoDtD", "_htmlNewDoc", "_htmlParseEntityRef", "_htmlParseCharRef", "_htmlParseElement", "_htmlNewParserCtxt", "_htmlParseChunk", "_htmlCreatePushParserCtxt", "_htmlSAXParseDoc", "_htmlParseDoc", "_htmlSAXParseFile", "_htmlParseFile", "_htmlHandleOmittedElem", "_htmlElementAllowedHere", "_htmlElementStatusHere", "_htmlAttrAllowed", "_htmlNodeStatus", "_htmlCtxtReset", "_htmlReadDoc", "_htmlReadFile", "_htmlReadMemory", "_htmlReadFd", "_htmlReadIO", "_htmlCtxtReadDoc", "_htmlCtxtReadFile", "_htmlCtxtReadMemory", "_htmlCtxtReadFd", "_htmlCtxtReadIO", "_htmlSetMetaEncoding", "_htmlIsBooleanAttr", "_htmlNodeDump", "_htmlNodeDumpFileFormat", "_htmlDocContentDumpFormatOutput", "_xmlNsListDumpOutput", "_htmlNodeDumpFile", "_xmlBufWriteQuotedString", "_htmlDocDumpMemory", "_htmlDocContentDumpOutput", "_xmlBufCCat", "_htmlNodeDumpOutput", "_htmlDocDump", "_htmlSaveFile", "_htmlSaveFileEnc", "_xmlDebugDumpString", "_xmlDebugDumpAttr", "_xmlDebugDumpEntities", "_xmlDebugDumpAttrList", "_xmlDebugDumpOneNode", "_xmlDebugDumpNode", "_xmlDebugDumpNodeList", "_xmlDebugDumpDocumentHead", "_xmlDebugDumpDocument", "_xmlDebugDumpDTD", "_xmlDebugCheckDocument", "_xmlLsCountNode", "_xmlLsOneNode", "_xmlBoolToText", "_xmlShellPrintXPathError", "_xmlShellPrintNode", "_xmlShellPrintXPathResult", "_xmlShellList", "_xmlShellBase", "_xmlShellDir", "_xmlShellCat", "_xmlShellLoad", "_xmlShellWrite", "_xmlShellSave", "_xmlShellValidate", "_xmlShellDu", "_xmlShellPwd", "_xmlShell", "_libxml_domnode_binary_insertion_sort", "_libxml_domnode_tim_sort", "_xmlXPathIsNaN", "_xmlXPathIsInf", "_xmlXPathErr", "_xmlXPatherror", "_xmlXPathFreeCompExpr", "_xmlFreePatternList", "_xmlXPtrFreeLocationSet", "_xmlXPathDebugDumpObject", "_xmlDocDump", "_xmlElemDump", "___small_fprintf", "_xmlXPathDebugDumpCompExpr", "_xmlXPathContextSetCache", "_xmlXPathPopBoolean", "_xmlXPathCastToBoolean", "_xmlXPathFreeNodeSet", "_xmlXPathNodeSetFreeNs", "_xmlXPathPopNumber", "_xmlXPathCastToNumber", "_xmlXPathStringEvalNumber", "_xmlXPathPopString", "_xmlXPathCastNumberToString", "_xmlXPathPopNodeSet", "_xmlXPathPopExternal", "_xmlXPathOrderDocElems", "_xmlXPathCmpNodes", "_xmlXPathNodeSetSort", "_xmlXPathNodeSetCreate", "_xmlStrPrintf", "_xmlXPathNodeSetContains", "_xmlXPathNodeSetAddNs", "_xmlXPathNodeSetAdd", "_xmlXPathNodeSetAddUnique", "_xmlXPathNodeSetMerge", "_xmlXPathNodeSetDel", "_xmlXPathNodeSetRemove", "_xmlXPathNewValueTree", "_xmlXPathNewNodeSetList", "_xmlXPathWrapNodeSet", "_xmlXPathFreeNodeSetList", "_xmlXPathDifference", "_xmlXPathIntersection", "_xmlXPathDistinctSorted", "_xmlXPathCastNodeToString", "_xmlXPathDistinct", "_xmlXPathHasSameNodes", "_xmlXPathNodeLeadingSorted", "_xmlXPathNodeLeading", "_xmlXPathLeadingSorted", "_xmlXPathLeading", "_xmlXPathNodeTrailingSorted", "_xmlXPathNodeTrailing", "_xmlXPathTrailingSorted", "_xmlXPathTrailing", "_xmlXPathRegisterFunc", "_xmlXPathRegisterFuncLookup", "_xmlXPathFunctionLookup", "_xmlXPathFunctionLookupNS", "_xmlXPathRegisteredFuncsCleanup", "_xmlXPathRegisterVariable", "_xmlXPathRegisterVariableNS", "_xmlXPathRegisterVariableLookup", "_xmlXPathVariableLookup", "_xmlXPathVariableLookupNS", "_xmlXPathObjectCopy", "_xmlXPathRegisteredVariablesCleanup", "_xmlXPathNsLookup", "_xmlXPathRegisteredNsCleanup", "_xmlXPathNewFloat", "_xmlXPathWrapString", "_xmlXPathNewCString", "_xmlXPathWrapCString", "_xmlXPathWrapExternal", "_xmlXPtrLocationSetMerge", "_xmlXPathCastBooleanToString", "_xmlXPathCastNodeSetToString", "_xmlXPathConvertString", "_xmlXPathCastBooleanToNumber", "_xmlXPathCastStringToNumber", "_xmlXPathCastNodeToNumber", "_xmlXPathCastNodeSetToNumber", "_xmlXPathConvertNumber", "_xmlXPathCastNumberToBoolean", "_xmlXPathCastStringToBoolean", "_xmlXPathCastNodeSetToBoolean", "_xmlXPathConvertBoolean", "_xmlXPathRegisterAllFunctions", "_xmlXPathBooleanFunction", "_xmlXPathCeilingFunction", "_xmlXPathCountFunction", "_xmlXPathConcatFunction", "_xmlXPathContainsFunction", "_xmlXPathIdFunction", "_xmlXPathFalseFunction", "_xmlXPathFloorFunction", "_xmlXPathLastFunction", "_xmlXPathLangFunction", "_xmlXPathLocalNameFunction", "_xmlXPathNotFunction", "_xmlXPathNamespaceURIFunction", "_xmlXPathNormalizeFunction", "_xmlXPathNumberFunction", "_xmlXPathPositionFunction", "_xmlXPathRoundFunction", "_xmlXPathStringFunction", "_xmlXPathStringLengthFunction", "_xmlXPathStartsWithFunction", "_xmlXPathSubstringFunction", "_xmlXPathSubstringBeforeFunction", "_xmlXPathSubstringAfterFunction", "_xmlXPathSumFunction", "_xmlXPathTrueFunction", "_xmlXPathTranslateFunction", "_xmlXPathNewParserContext", "_xmlXPathFreeParserContext", "_xmlXPathEqualValues", "_xmlXPathNotEqualValues", "_xmlXPathCompareValues", "_xmlXPathValueFlipSign", "_xmlXPathAddValues", "_xmlXPathSubValues", "_xmlXPathMultValues", "_xmlXPathDivValues", "_xmlXPathModValues", "_xmlXPathNextSelf", "_xmlXPathNextChild", "_xmlXPathNextDescendant", "_xmlXPathNextDescendantOrSelf", "_xmlXPathNextParent", "_xmlXPathNextAncestor", "_xmlXPathNextAncestorOrSelf", "_xmlXPathNextFollowingSibling", "_xmlXPathNextPrecedingSibling", "_xmlXPathNextFollowing", "_xmlXPathNextPreceding", "_xmlXPathNextNamespace", "_xmlXPathNextAttribute", "_xmlXPathRoot", "_xmlUTF8Strloc", "_xmlUTF8Strpos", "_xmlUTF8Strsize", "_xmlXPathParseNCName", "_xmlXPathParseName", "_xmlXPathIsNodeType", "_xmlXPathEvalPredicate", "_xmlXPathEvaluatePredicateResult", "_xmlXPathCtxtCompile", "_xmlPatterncompile", "_xmlPatternStreamable", "_xmlFreePattern", "_xmlXPathCompile", "_xmlXPathCompiledEval", "_xmlXPathCompiledEvalToBoolean", "_xmlXPathEvalExpr", "_xmlXPathSetContextNode", "_xmlXPathNodeEval", "_xmlPatternMaxDepth", "_xmlPatternMinDepth", "_xmlPatternFromRoot", "_xmlPatternGetStreamCtxt", "_xmlStreamWantsAnyNode", "_xmlStreamPush", "_xmlStreamPop", "_xmlStreamPushNode", "_xmlFreeStreamCtxt", "_xmlXPtrLocationSetCreate", "_xmlXPtrNewRange", "_xmlXPtrLocationSetAdd", "_xmlXPtrNewRangeNodeObject", "_xmlXPtrWrapLocationSet", "_xmlXPtrNewRangePoints", "_xmlXPtrNewRangePointNode", "_xmlXPtrNewRangeNodePoint", "_xmlXPtrNewRangeNodes", "_xmlXPtrNewCollapsedRange", "_xmlXPtrLocationSetDel", "_xmlXPtrLocationSetRemove", "_xmlXPtrNewLocationSetNodes", "_xmlXPtrNewLocationSetNodeSet", "_xmlXPtrNewContext", "_xmlXPtrEval", "_xmlXPtrBuildNodeList", "_xmlXPtrRangeToFunction", "_xmlXPtrAdvanceNode", "_xmlXPtrEvalRangePredicate", "_xmlXIncludeNewContext", "_xmlXIncludeFreeContext", "_xmlXIncludeSetFlags", "_xmlXIncludeProcessTreeFlagsData", "_xmlXIncludeProcessFlagsData", "_xmlBufLength", "_xmlXIncludeProcess", "_xmlXIncludeProcessTreeFlags", "_xmlXIncludeProcessTree", "_xmlXIncludeProcessNode", "_xmlFreeCatalog", "_xmlConvertSGMLCatalog", "_xmlParseCatalogFile", "_xmlLoadSGMLSuperCatalog", "_xmlLoadACatalog", "_xmlACatalogResolveSystem", "_xmlACatalogResolvePublic", "_xmlACatalogResolve", "_xmlACatalogResolveURI", "_xmlACatalogDump", "_xmlACatalogAdd", "_xmlACatalogRemove", "_xmlNewCatalog", "_xmlCatalogIsEmpty", "_xmlInitializeCatalog", "_xmlLoadCatalog", "_xmlLoadCatalogs", "_xmlSaveFormatFileTo", "_xmlNewRMutex", "_xmlRMutexLock", "_xmlRMutexUnlock", "_xmlFreeRMutex", "_xmlCatalogResolveSystem", "_xmlCatalogResolvePublic", "_xmlCatalogDump", "_xmlCatalogAdd", "_xmlCatalogRemove", "_xmlCatalogConvert", "_xmlCatalogSetDefaults", "_xmlCatalogSetDefaultPrefer", "_xmlCatalogSetDebug", "_xmlCatalogGetSystem", "_xmlCatalogGetPublic", "_xmlGetThreadId", "___xmlGlobalInitMutexDestroy", "_xmlInitializeGlobalState", "_xmlSAX2ExternalSubset", "_xmlSAX2InternalSubset", "_xmlSAX2GetParameterEntity", "_xmlSAX2ResolveEntity", "_xmlSAX2HasExternalSubset", "_xmlSAX2HasInternalSubset", "_xmlSAX2IsStandalone", "_xmlSAX2ElementDecl", "_xmlSAX2AttributeDecl", "_xmlSAX2CDataBlock", "_xmlSAX2Characters", "_xmlSAX2Reference", "_xmlSAX2EndDocument", "_xmlSAX2StartDocument", "_xmlSAX2SetDocumentLocator", "_xmlSAX2UnparsedEntityDecl", "_xmlSAX2NotationDecl", "_xmlSAX2ProcessingInstruction", "_xmlSAX2Comment", "_xmlSAX2GetColumnNumber", "_xmlSAX2GetLineNumber", "_xmlSAX2GetSystemId", "_xmlSAX2GetPublicId", "_xmlThrDefSetGenericErrorFunc", "_xmlThrDefSetStructuredErrorFunc", "_xmlRegisterNodeDefault", "_xmlThrDefRegisterNodeDefault", "_xmlDeregisterNodeDefault", "_xmlThrDefDeregisterNodeDefault", "_xmlThrDefParserInputBufferCreateFilenameDefault", "_xmlThrDefOutputBufferCreateFilenameDefault", "___docbDefaultSAXHandler", "___htmlDefaultSAXHandler", "___xmlLastError", "___oldXMLWDcompatibility", "___xmlBufferAllocScheme", "_xmlThrDefBufferAllocScheme", "___xmlDefaultBufferSize", "_xmlThrDefDefaultBufferSize", "___xmlDefaultSAXHandler", "___xmlDefaultSAXLocator", "___xmlDoValidityCheckingDefaultValue", "_xmlThrDefDoValidityCheckingDefaultValue", "___xmlGenericError", "___xmlStructuredError", "___xmlGenericErrorContext", "___xmlStructuredErrorContext", "___xmlGetWarningsDefaultValue", "_xmlThrDefGetWarningsDefaultValue", "___xmlIndentTreeOutput", "_xmlThrDefIndentTreeOutput", "___xmlTreeIndentString", "_xmlThrDefTreeIndentString", "___xmlKeepBlanksDefaultValue", "_xmlThrDefKeepBlanksDefaultValue", "___xmlLineNumbersDefaultValue", "_xmlThrDefLineNumbersDefaultValue", "___xmlLoadExtDtdDefaultValue", "_xmlThrDefLoadExtDtdDefaultValue", "___xmlParserDebugEntities", "_xmlThrDefParserDebugEntities", "___xmlParserVersion", "___xmlPedanticParserDefaultValue", "_xmlThrDefPedanticParserDefaultValue", "___xmlSaveNoEmptyTags", "_xmlThrDefSaveNoEmptyTags", "___xmlSubstituteEntitiesDefaultValue", "_xmlThrDefSubstituteEntitiesDefaultValue", "___xmlRegisterNodeDefaultValue", "___xmlDeregisterNodeDefaultValue", "___xmlParserInputBufferCreateFilenameValue", "___xmlOutputBufferCreateFilenameValue", "___xmlGlobalInitMutexLock", "___xmlGlobalInitMutexUnlock", "_xmlGetGlobalState", "_xmlIsMainThread", "_xmlLockLibrary", "_xmlUnlockLibrary", "_xmlC14NExecute", "_xmlC14NDocDumpMemory", "_xmlC14NDocSave", "_xmlStrsub", "_xmlStrVPrintf", "_xmlUTF8Size", "_xmlUTF8Charcmp", "_xmlEscapeFormatString", "_xmlBufEmpty", "_xmlBufInflate", "_xmlBufDump", "_xmlBufErase", "_xmlBufResize", "_xmlBufAddHead", "_xmlBufWriteCHAR", "_xmlBufWriteChar", "_xmlBufMergeBuffer", "_xmlRegExecPushString2", "_xmlRegExecNextValues", "_xmlRegExecErrInfo", "_xmlRegexpPrint", "_xmlRegexpCompile", "_xmlRegexpExec", "_xmlAutomataSetFlags", "_xmlAutomataNewTransition2", "_xmlAutomataNewNegTrans", "_xmlAutomataNewCountTrans2", "_xmlAutomataNewCountTrans", "_xmlAutomataNewOnceTrans2", "_xmlAutomataNewOnceTrans", "_xmlAutomataNewAllTrans", "_xmlAutomataNewCounter", "_xmlAutomataNewCountedTrans", "_xmlAutomataNewCounterTrans", "_xmlAutomataIsDeterminist", "_puts", "_xmlUCSIsCatNd", "_xmlUCSIsCatP", "_xmlUCSIsCatZ", "_xmlUCSIsCatC", "_xmlUCSIsCatL", "_xmlUCSIsCatLu", "_xmlUCSIsCatLl", "_xmlUCSIsCatLt", "_xmlUCSIsCatLm", "_xmlUCSIsCatLo", "_xmlUCSIsCatM", "_xmlUCSIsCatMn", "_xmlUCSIsCatMc", "_xmlUCSIsCatMe", "_xmlUCSIsCatN", "_xmlUCSIsCatNl", "_xmlUCSIsCatNo", "_xmlUCSIsCatPc", "_xmlUCSIsCatPd", "_xmlUCSIsCatPs", "_xmlUCSIsCatPe", "_xmlUCSIsCatPi", "_xmlUCSIsCatPf", "_xmlUCSIsCatPo", "_xmlUCSIsCatZs", "_xmlUCSIsCatZl", "_xmlUCSIsCatZp", "_xmlUCSIsCatS", "_xmlUCSIsCatSm", "_xmlUCSIsCatSc", "_xmlUCSIsCatSk", "_xmlUCSIsCatSo", "_xmlUCSIsCatCc", "_xmlUCSIsCatCf", "_xmlUCSIsCatCo", "_xmlUCSIsBlock", "_xmlSchemaNewFacet", "_xmlSchemaFreeWildcard", "_xmlSchemaFreeFacet", "_xmlSchemaFreeType", "_xmlSchemaFreeValue", "_xmlSchemaDump", "_xmlSchemaNewDocParserCtxt", "_xmlSchemaCheckFacet", "_xmlSchemaGetBuiltInType", "_xmlSchemaValidatePredefinedType", "_xmlSchemaCollapseString", "_xmlSchemaWhiteSpaceReplace", "_xmlSchemaNewQNameValue", "_xmlSchemaValPredefTypeNodeNoNorm", "_xmlSchemaValueAppend", "_xmlSchemaInitTypes", "_xmlSchemaSetParserStructuredErrors", "_xmlSchemaSetValidStructuredErrors", "_xmlSchemaGetParserErrors", "_xmlSchemaValidateSetFilename", "_xmlSchemaIsValid", "_xmlSchemaGetValidErrors", "_xmlSchemaValidCtxtGetOptions", "_xmlSchemaValidateOneElement", "_xmlSchemaSAXPlug", "_xmlSchemaSAXUnplug", "_xmlSchemaValidateSetLocator", "_xmlSchemaValidateStream", "_xmlSchemaValidateFile", "_xmlSchemaValidCtxtGetParserCtxt", "_xmlSchemaValPredefTypeNode", "_xmlSchemaGetPredefinedType", "_xmlSchemaIsBuiltInTypeFacet", "_xmlSchemaCompareValues", "_xmlSchemaGetValType", "_xmlSchemaValueGetAsString", "_xmlSchemaCompareValuesWhtsp", "_xmlSchemaValueGetNext", "_xmlSchemaNewNOTATIONValue", "_xmlSchemaValidateLengthFacetWhtsp", "_xmlSchemaValidateFacetWhtsp", "_xmlSchemaValidateListSimpleTypeFacet", "_xmlTextReaderLookupNamespace", "_xmlSchemaGetFacetValueAsULong", "_xmlSchemaGetCanonValue", "_xmlSchemaValueGetAsBoolean", "_xmlStreamPushAttr", "_xmlSchemaCopyValue", "_xmlSchemaNewStringValue", "_xmlSchemaGetBuiltInListSimpleTypeItemType", "_xmlSchemaValidateFacet", "_xmlSchemaValidateLengthFacet", "_xmlSchemaGetCanonValueWhtsp", "_xmlUCSIsAegeanNumbers", "_xmlUCSIsAlphabeticPresentationForms", "_xmlUCSIsArabic", "_xmlUCSIsArabicPresentationFormsA", "_xmlUCSIsArabicPresentationFormsB", "_xmlUCSIsArmenian", "_xmlUCSIsArrows", "_xmlUCSIsBasicLatin", "_xmlUCSIsBengali", "_xmlUCSIsBlockElements", "_xmlUCSIsBopomofo", "_xmlUCSIsBopomofoExtended", "_xmlUCSIsBoxDrawing", "_xmlUCSIsBraillePatterns", "_xmlUCSIsBuhid", "_xmlUCSIsByzantineMusicalSymbols", "_xmlUCSIsCJKCompatibility", "_xmlUCSIsCJKCompatibilityForms", "_xmlUCSIsCJKCompatibilityIdeographs", "_xmlUCSIsCJKCompatibilityIdeographsSupplement", "_xmlUCSIsCJKRadicalsSupplement", "_xmlUCSIsCJKSymbolsandPunctuation", "_xmlUCSIsCJKUnifiedIdeographs", "_xmlUCSIsCJKUnifiedIdeographsExtensionA", "_xmlUCSIsCJKUnifiedIdeographsExtensionB", "_xmlUCSIsCherokee", "_xmlUCSIsCombiningDiacriticalMarks", "_xmlUCSIsCombiningDiacriticalMarksforSymbols", "_xmlUCSIsCombiningHalfMarks", "_xmlUCSIsCombiningMarksforSymbols", "_xmlUCSIsControlPictures", "_xmlUCSIsCurrencySymbols", "_xmlUCSIsCypriotSyllabary", "_xmlUCSIsCyrillic", "_xmlUCSIsCyrillicSupplement", "_xmlUCSIsDeseret", "_xmlUCSIsDevanagari", "_xmlUCSIsDingbats", "_xmlUCSIsEnclosedAlphanumerics", "_xmlUCSIsEnclosedCJKLettersandMonths", "_xmlUCSIsEthiopic", "_xmlUCSIsGeneralPunctuation", "_xmlUCSIsGeometricShapes", "_xmlUCSIsGeorgian", "_xmlUCSIsGothic", "_xmlUCSIsGreek", "_xmlUCSIsGreekExtended", "_xmlUCSIsGreekandCoptic", "_xmlUCSIsGujarati", "_xmlUCSIsGurmukhi", "_xmlUCSIsHalfwidthandFullwidthForms", "_xmlUCSIsHangulCompatibilityJamo", "_xmlUCSIsHangulJamo", "_xmlUCSIsHangulSyllables", "_xmlUCSIsHanunoo", "_xmlUCSIsHebrew", "_xmlUCSIsHighPrivateUseSurrogates", "_xmlUCSIsHighSurrogates", "_xmlUCSIsHiragana", "_xmlUCSIsIPAExtensions", "_xmlUCSIsIdeographicDescriptionCharacters", "_xmlUCSIsKanbun", "_xmlUCSIsKangxiRadicals", "_xmlUCSIsKannada", "_xmlUCSIsKatakana", "_xmlUCSIsKatakanaPhoneticExtensions", "_xmlUCSIsKhmer", "_xmlUCSIsKhmerSymbols", "_xmlUCSIsLao", "_xmlUCSIsLatin1Supplement", "_xmlUCSIsLatinExtendedA", "_xmlUCSIsLatinExtendedB", "_xmlUCSIsLatinExtendedAdditional", "_xmlUCSIsLetterlikeSymbols", "_xmlUCSIsLimbu", "_xmlUCSIsLinearBIdeograms", "_xmlUCSIsLinearBSyllabary", "_xmlUCSIsLowSurrogates", "_xmlUCSIsMalayalam", "_xmlUCSIsMathematicalAlphanumericSymbols", "_xmlUCSIsMathematicalOperators", "_xmlUCSIsMiscellaneousMathematicalSymbolsA", "_xmlUCSIsMiscellaneousMathematicalSymbolsB", "_xmlUCSIsMiscellaneousSymbols", "_xmlUCSIsMiscellaneousSymbolsandArrows", "_xmlUCSIsMiscellaneousTechnical", "_xmlUCSIsMongolian", "_xmlUCSIsMusicalSymbols", "_xmlUCSIsMyanmar", "_xmlUCSIsNumberForms", "_xmlUCSIsOgham", "_xmlUCSIsOldItalic", "_xmlUCSIsOpticalCharacterRecognition", "_xmlUCSIsOriya", "_xmlUCSIsOsmanya", "_xmlUCSIsPhoneticExtensions", "_xmlUCSIsPrivateUse", "_xmlUCSIsPrivateUseArea", "_xmlUCSIsRunic", "_xmlUCSIsShavian", "_xmlUCSIsSinhala", "_xmlUCSIsSmallFormVariants", "_xmlUCSIsSpacingModifierLetters", "_xmlUCSIsSpecials", "_xmlUCSIsSuperscriptsandSubscripts", "_xmlUCSIsSupplementalArrowsA", "_xmlUCSIsSupplementalArrowsB", "_xmlUCSIsSupplementalMathematicalOperators", "_xmlUCSIsSupplementaryPrivateUseAreaA", "_xmlUCSIsSupplementaryPrivateUseAreaB", "_xmlUCSIsSyriac", "_xmlUCSIsTagalog", "_xmlUCSIsTagbanwa", "_xmlUCSIsTags", "_xmlUCSIsTaiLe", "_xmlUCSIsTaiXuanJingSymbols", "_xmlUCSIsTamil", "_xmlUCSIsTelugu", "_xmlUCSIsThaana", "_xmlUCSIsThai", "_xmlUCSIsTibetan", "_xmlUCSIsUgaritic", "_xmlUCSIsUnifiedCanadianAboriginalSyllabics", "_xmlUCSIsVariationSelectors", "_xmlUCSIsVariationSelectorsSupplement", "_xmlUCSIsYiRadicals", "_xmlUCSIsYiSyllables", "_xmlUCSIsYijingHexagramSymbols", "_xmlUCSIsCatCs", "_xmlUCSIsCat", "_xmlTextReaderRead", "_xmlTextReaderExpand", "_xmlTextReaderPreserve", "_xmlTextReaderReadState", "_xmlTextReaderNext", "_xmlTextReaderReadInnerXml", "_xmlTextReaderReadOuterXml", "_xmlTextReaderReadString", "_xmlTextReaderNextSibling", "_xmlNewTextReader", "_xmlNewTextReaderFilename", "_xmlFreeTextReader", "_xmlTextReaderClose", "_xmlTextReaderGetAttributeNo", "_xmlTextReaderGetAttribute", "_xmlTextReaderGetAttributeNs", "_xmlTextReaderGetRemainder", "_xmlPatternMatch", "_xmlRelaxNGValidatePopElement", "_xmlRelaxNGValidatePushCData", "_xmlRelaxNGValidatePushElement", "_xmlRelaxNGValidateFullElement", "_xmlTextReaderMoveToAttributeNo", "_xmlTextReaderMoveToAttribute", "_xmlTextReaderMoveToAttributeNs", "_xmlTextReaderMoveToFirstAttribute", "_xmlTextReaderMoveToNextAttribute", "_xmlTextReaderMoveToElement", "_xmlTextReaderReadAttributeValue", "_xmlTextReaderConstEncoding", "_xmlTextReaderAttributeCount", "_xmlTextReaderNodeType", "_xmlTextReaderIsEmptyElement", "_xmlTextReaderLocalName", "_xmlTextReaderName", "_xmlTextReaderConstLocalName", "_xmlTextReaderConstName", "_xmlDictQLookup", "_xmlTextReaderPrefix", "_xmlTextReaderConstPrefix", "_xmlTextReaderNamespaceUri", "_xmlTextReaderConstNamespaceUri", "_xmlTextReaderBaseUri", "_xmlTextReaderConstBaseUri", "_xmlTextReaderDepth", "_xmlTextReaderHasAttributes", "_xmlTextReaderHasValue", "_xmlTextReaderValue", "_xmlTextReaderConstValue", "_xmlTextReaderIsDefault", "_xmlTextReaderQuoteChar", "_xmlTextReaderXmlLang", "_xmlTextReaderConstXmlLang", "_xmlTextReaderConstString", "_xmlTextReaderNormalization", "_xmlTextReaderSetParserProp", "_xmlTextReaderGetParserProp", "_xmlTextReaderGetParserLineNumber", "_xmlTextReaderGetParserColumnNumber", "_xmlTextReaderCurrentNode", "_xmlTextReaderPreservePattern", "_xmlTextReaderCurrentDoc", "_xmlTextReaderRelaxNGSetSchema", "_xmlRelaxNGSetValidStructuredErrors", "_xmlTextReaderSetSchema", "_xmlTextReaderSchemaValidateCtxt", "_xmlTextReaderSchemaValidate", "_xmlTextReaderRelaxNGValidateCtxt", "_xmlTextReaderRelaxNGValidate", "_xmlTextReaderIsNamespaceDecl", "_xmlTextReaderConstXmlVersion", "_xmlTextReaderStandalone", "_xmlTextReaderLocatorLineNumber", "_xmlTextReaderLocatorBaseURI", "_xmlTextReaderSetErrorHandler", "_xmlTextReaderSetStructuredErrorHandler", "_xmlTextReaderIsValid", "_xmlTextReaderGetErrorHandler", "_xmlTextReaderSetup", "_xmlTextReaderByteConsumed", "_xmlReaderWalker", "_xmlReaderForDoc", "_xmlReaderForMemory", "_xmlReaderForFile", "_xmlReaderForFd", "_xmlReaderForIO", "_xmlReaderNewWalker", "_xmlReaderNewDoc", "_xmlReaderNewMemory", "_xmlReaderNewFile", "_xmlReaderNewFd", "_xmlReaderNewIO", "_xmlRelaxParserSetFlag", "_xmlRelaxNGInitTypes", "_xmlRelaxNGNewDocParserCtxt", "_xmlRelaxNGGetParserErrors", "_xmlRelaxNGSetParserStructuredErrors", "_xmlRelaxNGDump", "_xmlRelaxNGDumpTree", "_xmlRelaxNGGetValidErrors", "___xmlInitializeDict", "_rand_r", "_xmlDictCreateSub", "_xmlDictExists", "_xmlDictSize", "_xmlDictGetUsage", "_xmlSAX2StartElementNs", "_xmlSAX2EndElementNs", "_xmlSAXDefaultVersion", "_xmlSAX2InitDefaultSAXHandler", "_xmlSAX2InitHtmlDefaultSAXHandler", "_xmlSAX2InitDocbDefaultSAXHandler", "_docbDefaultSAXHandlerInit", "_xmlIsBaseChar", "_xmlIsBlank", "_xmlIsChar", "_xmlIsCombining", "_xmlIsDigit", "_xmlIsExtender", "_xmlIsIdeographic", "_xmlIsPubidChar", "_xmlIsXHTML", "_xmlBufDumpNotationTable", "_xmlBufDumpElementDecl", "_xmlBufDumpAttributeDecl", "_xmlBufDumpEntityDecl", "_xmlSaveToFd", "_xmlSaveToFilename", "_xmlSaveToBuffer", "_xmlSaveToIO", "_xmlSaveDoc", "_xmlSaveTree", "_xmlSaveFlush", "_xmlSaveClose", "_xmlSaveSetEscape", "_xmlSaveSetAttrEscape", "_xmlBufAttrSerializeTxtContent", "_xmlAttrSerializeTxtContent", "_xmlBufNodeDump", "_xmlDocDumpFormatMemoryEnc", "_xmlDocDumpMemory", "_xmlDocFormatDump", "_xmlSaveFileTo", "_xmlSaveFileEnc", "_xmlSaveFormatFile", "_sqlite3_status64", "_sqlite3_mutex_enter", "_sqlite3_mutex_leave", "_sqlite3_status", "_sqlite3_db_status", "_sqlite3_msize", "_sqlite3_vfs_find", "_sqlite3_initialize", "_sqlite3_mutex_free", "_sqlite3_vfs_register", "_sqlite3_vfs_unregister", "_sqlite3_mutex_alloc", "_sqlite3_mutex_try", "_sqlite3_release_memory", "_sqlite3_memory_alarm", "_sqlite3_soft_heap_limit64", "_sqlite3_memory_used", "_sqlite3_soft_heap_limit", "_sqlite3_hard_heap_limit64", "_sqlite3_memory_highwater", "_sqlite3_malloc", "_sqlite3_malloc64", "_sqlite3_realloc", "_sqlite3_realloc64", "_sqlite3_str_vappendf", "_sqlite3_str_append", "___lttf2", "___multf3", "___addtf3", "___gttf2", "___getf2", "___divtf3", "_sqlite3_str_appendchar", "_sqlite3_str_appendall", "_sqlite3_str_appendf", "_sqlite3_value_int64", "___fixtfsi", "___floatsitf", "___subtf3", "_sqlite3_str_reset", "_sqlite3_str_finish", "_sqlite3_str_errcode", "_sqlite3_str_length", "_sqlite3_str_value", "_sqlite3_str_new", "_sqlite3_vmprintf", "_sqlite3_vsnprintf", "_sqlite3_log", "_sqlite3_randomness", "_sqlite3_stricmp", "_sqlite3_strnicmp", "_sqlite3_os_init", "_sqlite3_os_end", "_sqlite3_serialize", "_sqlite3_column_int", "_sqlite3_file_control", "_sqlite3_deserialize", "_sqlite3_database_file_object", "_sqlite3_enable_shared_cache", "_sqlite3_backup_remaining", "_sqlite3_backup_pagecount", "_sqlite3_expired", "_sqlite3_value_blob", "_sqlite3_value_bytes16", "_sqlite3_value_subtype", "_sqlite3_value_pointer", "_sqlite3_value_text16", "_sqlite3_value_text16be", "_sqlite3_value_text16le", "_sqlite3_value_encoding", "_sqlite3_value_nochange", "_sqlite3_value_frombind", "_sqlite3_value_dup", "_sqlite3_value_free", "_sqlite3_result_blob", "_sqlite3_result_error_toobig", "_sqlite3_result_error_nomem", "_sqlite3_result_blob64", "_sqlite3_result_error16", "_sqlite3_result_int64", "_sqlite3_result_pointer", "_sqlite3_result_subtype", "_sqlite3_result_text64", "_sqlite3_result_text16", "_sqlite3_result_text16be", "_sqlite3_result_text16le", "_sqlite3_result_value", "_sqlite3_result_zeroblob", "_sqlite3_result_zeroblob64", "_sqlite3_result_error_code", "_sqlite3_context_db_handle", "_sqlite3_vtab_nochange", "_sqlite3_vtab_in_first", "_sqlite3_vtab_in_next", "_sqlite3_get_auxdata", "_sqlite3_set_auxdata", "_sqlite3_aggregate_count", "_sqlite3_column_bytes16", "_sqlite3_column_value", "_sqlite3_column_text16", "_sqlite3_column_name16", "_sqlite3_column_decltype16", "_sqlite3_bind_blob64", "_sqlite3_bind_int64", "_sqlite3_bind_pointer", "_sqlite3_bind_text64", "_sqlite3_bind_text16", "_sqlite3_bind_value", "_sqlite3_bind_zeroblob", "_sqlite3_bind_zeroblob64", "_sqlite3_bind_parameter_name", "_sqlite3_transfer_bindings", "_sqlite3_stmt_isexplain", "_sqlite3_stmt_busy", "_sqlite3_next_stmt", "_sqlite3_stmt_status", "_sqlite3_expanded_sql", "_sqlite3_value_numeric_type", "_sqlite3_blob_reopen", "_sqlite3_strglob", "_sqlite3_strlike", "_sqlite3_auto_extension", "_sqlite3_cancel_auto_extension", "_sqlite3_reset_auto_extension", "_sqlite3_prepare", "_sqlite3_prepare_v3", "_sqlite3_prepare16", "_sqlite3_prepare16_v2", "_sqlite3_prepare16_v3", "_sqlite3_get_table", "_sqlite3_free_table", "_sqlite3_create_module", "_sqlite3_create_module_v2", "_sqlite3_drop_modules", "_sqlite3_declare_vtab", "_sqlite3_vtab_on_conflict", "_sqlite3_vtab_config", "_sqlite3_vtab_collation", "_sqlite3_vtab_in", "_sqlite3_vtab_rhs_value", "_sqlite3_vtab_distinct", "_sqlite3_keyword_name", "_sqlite3_keyword_count", "_sqlite3_keyword_check", "_sqlite3_complete", "_sqlite3_complete16", "_sqlite3_threadsafe", "_sqlite3_shutdown", "_sqlite3_config", "_sqlite3_db_mutex", "_sqlite3_db_release_memory", "_sqlite3_db_cacheflush", "_sqlite3_set_last_insert_rowid", "_sqlite3_changes64", "_sqlite3_total_changes64", "_sqlite3_total_changes", "_sqlite3_txn_state", "_sqlite3_close_v2", "_sqlite3_busy_handler", "_sqlite3_progress_handler", "_sqlite3_interrupt", "_sqlite3_is_interrupted", "_sqlite3_create_function_v2", "_sqlite3_create_window_function", "_sqlite3_create_function16", "_sqlite3_overload_function", "_sqlite3_trace", "_sqlite3_trace_v2", "_sqlite3_profile", "_sqlite3_commit_hook", "_sqlite3_update_hook", "_sqlite3_rollback_hook", "_sqlite3_autovacuum_pages", "_sqlite3_wal_autocheckpoint", "_sqlite3_wal_hook", "_sqlite3_wal_checkpoint", "_sqlite3_wal_checkpoint_v2", "_sqlite3_error_offset", "_sqlite3_errmsg16", "_sqlite3_system_errno", "_sqlite3_errstr", "_sqlite3_limit", "_sqlite3_open", "_sqlite3_free_filename", "_sqlite3_open16", "_sqlite3_create_collation_v2", "_sqlite3_create_collation16", "_sqlite3_collation_needed", "_sqlite3_collation_needed16", "_sqlite3_global_recover", "_sqlite3_get_autocommit", "_sqlite3_thread_cleanup", "_sqlite3_table_column_metadata", "_sqlite3_sleep", "_sqlite3_test_control", "_sqlite3_create_filename", "_sqlite3_uri_parameter", "_sqlite3_uri_key", "_sqlite3_uri_boolean", "_sqlite3_uri_int64", "_sqlite3_filename_database", "_sqlite3_filename_journal", "_sqlite3_filename_wal", "_sqlite3_db_name", "_sqlite3_db_filename", "_sqlite3_db_readonly", "_sqlite3_compileoption_used", "_sqlite3_compileoption_get", "_sqlite3_rtree_geometry_callback", "_sqlite3_rtree_query_callback", "_sqlite3_sourceid", "_pthread_mutexattr_init", "_pthread_mutexattr_settype", "_pthread_mutex_init", "_pthread_mutexattr_destroy", "_pthread_mutex_destroy", "_pthread_mutex_lock", "_pthread_mutex_trylock", "_pthread_mutex_unlock", "_utimes", "_pthread_join", "___floatditf", "_pthread_create", "_posix_fallocate", "_fchown", "_trunc", "_sqrt", "_adler32_z", "_adler32", "_adler32_combine", "_adler32_combine64", "_get_crc_table", "_crc32_z", "_crc32_combine64", "_crc32_combine", "_crc32_combine_gen64", "_crc32_combine_gen", "_crc32_combine_op", "_deflateInit_", "_zcalloc", "_zcfree", "_deflateReset", "_deflateResetKeep", "_deflateSetDictionary", "_deflateGetDictionary", "__tr_init", "_deflateSetHeader", "_deflatePending", "_deflatePrime", "__tr_flush_bits", "_deflateParams", "__tr_align", "__tr_stored_block", "_deflateTune", "_deflateBound", "__tr_flush_block", "_deflateCopy", "_gzclose_r", "_gzclose_w", "_gzopen64", "_gzbuffer", "_gzrewind", "_gzseek64", "_gz_error", "_gzseek", "_gztell64", "_gztell", "_gzoffset64", "_gzoffset", "_gzeof", "_gzerror", "_gzclearerr", "_gzfread", "_gzgetc", "_gzgetc_", "_gzungetc", "_gzgets", "_inflateReset", "_gzfwrite", "_gzputc", "_gzputs", "_gzvprintf", "_gzprintf", "_gzflush", "_gzsetparams", "_inflate_fast", "_inflateResetKeep", "_inflateReset2", "_inflateInit_", "_inflatePrime", "_inflate_table", "_inflateGetDictionary", "_inflateSetDictionary", "_inflateGetHeader", "_inflateSync", "_inflateSyncPoint", "_inflateCopy", "_inflateUndermine", "_inflateValidate", "_inflateMark", "_inflateCodesUsed", "__tr_tally", "_zlibVersion", "_zlibCompileFlags", "_waitid", "_times", "_getdate", "_stime", "_clock_getcpuclockid", "_getpwnam_r", "_getpwuid_r", "_setpwent", "_endpwent", "_getpwent", "_getgrgid", "_getgrnam_r", "_getgrgid_r", "_getgrent", "_endgrent", "_setgrent", "_execve", "_vfork", "_posix_spawn", "_setgroups", "_sigaltstack", "___dlsym", "___syscall_uname", "___syscall_setpgid", "___syscall_sync", "___syscall_getsid", "___syscall_getpgid", "___syscall_getpid", "___syscall_getppid", "___syscall_linkat", "___syscall_getgroups32", "___syscall_setsid", "___syscall_umask", "___syscall_setrlimit", "___syscall_getrusage", "___syscall_getpriority", "___syscall_setpriority", "___syscall_setdomainname", "___syscall_getuid32", "___syscall_getgid32", "___syscall_geteuid32", "___syscall_getegid32", "___syscall_getresuid32", "___syscall_getresgid32", "___syscall_pause", "___syscall_madvise", "___syscall_mlock", "___syscall_munlock", "___syscall_mprotect", "___syscall_mremap", "___syscall_mlockall", "___syscall_munlockall", "___syscall_prlimit64", "___syscall_ugetrlimit", "___syscall_setsockopt", "___syscall_acct", "___syscall_mincore", "___syscall_pipe2", "___syscall_pselect6", "___syscall_recvmmsg", "___syscall_sendmmsg", "___syscall_shutdown", "___syscall_socketpair", "___syscall_wait4", "__Exit", "___get_tp", "___emscripten_environ_constructor", "_emscripten_builtin_malloc", "___fmodeflags", "___mo_lookup", "___overflow", "___randname", "___wasi_syscall_ret", "___uflow", "_alphasort64", "___nl_langinfo_l", "_fabs", "_clearerr_unlocked", "_clock_nanosleep", "_copysignl", "_scalbn", "_floor", "_creat64", "___lock", "___unlock", "___libc_free", "___libc_malloc", "_dprintf", "___wasi_fd_is_valid", "_emscripten_get_heap_size", "_emscripten_builtin_memcpy", "___memset", "_emscripten_builtin_memset", "___syscall_munmap", "___syscall_msync", "___syscall_mmap2", "___clock", "___time", "___clock_getres", "___gettimeofday", "_dysize", "_clock", "_clock_getres", "_execv", "_execvpe", "_fabsl", "_feof_unlocked", "__IO_feof_unlocked", "_ferror_unlocked", "__IO_ferror_unlocked", "_fflush_unlocked", "_emscripten_futex_wake", "_fgets", "_fgets_unlocked", "_fileno_unlocked", "_fmodl", "_mbtowc", "_towupper", "_towlower", "_wctype", "_iswctype", "_fopen64", "_vfiprintf", "___small_vfprintf", "_fputs_unlocked", "_fread_unlocked", "_frexp", "_fseeko64", "_fstatat", "_fstat64", "_fstatat64", "_ftello64", "_ftruncate64", "_futimesat", "_fwrite_unlocked", "__IO_getc", "_getpriority", "_getservbyname_r", "_getservbyport_r", "_glob64", "_globfree64", "_wctomb", "_strspn", "___intscan", "_ioctl", "___isalnum_l", "_isalnum_l", "___isalpha_l", "_isalpha_l", "_isblank", "___isblank_l", "_isblank_l", "___iscntrl_l", "_iscntrl_l", "___isdigit_l", "_isdigit_l", "___isgraph_l", "_isgraph_l", "___islower_l", "_islower_l", "___isprint_l", "_isprint_l", "___ispunct_l", "_ispunct_l", "___isspace_l", "_isspace_l", "___isupper_l", "_isupper_l", "_iswalnum", "___iswalnum_l", "_iswalnum_l", "_iswalpha", "___iswalpha_l", "_iswalpha_l", "_iswblank", "___iswblank_l", "_iswblank_l", "_iswcntrl", "___iswcntrl_l", "_iswcntrl_l", "_iswdigit", "_iswgraph", "_iswlower", "_iswprint", "_iswpunct", "_iswspace", "_iswupper", "_iswxdigit", "___iswctype_l", "___wctype_l", "_iswctype_l", "_wctype_l", "___iswdigit_l", "_iswdigit_l", "___iswgraph_l", "_iswgraph_l", "___iswlower_l", "_iswlower_l", "___iswprint_l", "_iswprint_l", "___iswpunct_l", "_iswpunct_l", "_wcschr", "___iswspace_l", "_iswspace_l", "___iswupper_l", "_iswupper_l", "___iswxdigit_l", "_iswxdigit_l", "___isxdigit_l", "_isxdigit_l", "_raise", "___nl_langinfo", "_nl_langinfo_l", "_emscripten_has_threading_support", "_emscripten_num_logical_cores", "_emscripten_force_num_logical_cores", "_emscripten_futex_wait", "_emscripten_is_main_runtime_thread", "_emscripten_main_thread_process_queued_calls", "_emscripten_current_thread_process_queued_calls", "__emscripten_yield", "__emscripten_check_timers", "_pthread_mutex_consistent", "_pthread_barrier_init", "_pthread_barrier_destroy", "_pthread_barrier_wait", "_pthread_getspecific", "_pthread_setspecific", "_pthread_cond_wait", "_pthread_cond_signal", "_pthread_cond_broadcast", "_pthread_cond_init", "_pthread_cond_destroy", "_pthread_atfork", "_pthread_cancel", "_pthread_testcancel", "___pthread_detach", "_pthread_equal", "_pthread_mutexattr_setprotocol", "_pthread_mutexattr_setpshared", "_pthread_condattr_init", "_pthread_condattr_destroy", "_pthread_condattr_setclock", "_pthread_condattr_setpshared", "_pthread_getattr_np", "_pthread_setcancelstate", "_pthread_setcanceltype", "_pthread_rwlock_init", "_pthread_rwlock_destroy", "_pthread_rwlock_rdlock", "_pthread_rwlock_tryrdlock", "_pthread_rwlock_timedrdlock", "_pthread_rwlock_wrlock", "_pthread_rwlock_trywrlock", "_pthread_rwlock_timedwrlock", "_pthread_rwlock_unlock", "_pthread_rwlockattr_init", "_pthread_rwlockattr_destroy", "_pthread_rwlockattr_setpshared", "_pthread_spin_init", "_pthread_spin_destroy", "_pthread_spin_lock", "_pthread_spin_trylock", "_pthread_spin_unlock", "_sem_init", "_sem_post", "_sem_wait", "_sem_trywait", "_sem_destroy", "_emscripten_thread_sleep", "_pthread_mutex_timedlock", "_emscripten_builtin_pthread_create", "_emscripten_builtin_pthread_join", "_pthread_key_delete", "_pthread_key_create", "_pthread_once", "_pthread_cond_timedwait", "_pthread_exit", "_emscripten_builtin_pthread_detach", "_pthread_detach", "_thrd_detach", "_lseek64", "_lstat64", "_mbsinit", "_mkostemps", "_mkostemps64", "_mkstemp64", "_timegm", "_emscripten_builtin_free", "_emscripten_builtin_mmap", "_mmap64", "_emscripten_builtin_munmap", "_setpriority", "_open64", "_tcsetattr", "_posix_fallocate64", "_iprintf", "___small_printf", "_emscripten_main_runtime_thread_id", "___sig_is_blocked", "_pthread_sigmask", "_sigpending", "_qsort_r", "_sigismember", "_sigorset", "_sigandset", "_readdir64", "_emscripten_get_sbrk_ptr", "_sbrk", "_brk", "_scalbnl", "_scandir64", "___getitimer", "_bsd_signal", "___sysv_signal", "_vsprintf", "_vsiprintf", "___small_sprintf", "___small_vsprintf", "_vsscanf", "___isoc99_sscanf", "_stat64", "_fstatvfs", "_statfs", "_fstatfs", "_statvfs64", "_statfs64", "_fstatvfs64", "_fstatfs64", "_stpcpy", "_stpncpy", "___strcasecmp_l", "_strcasecmp_l", "_strchrnul", "___strcoll_l", "_strcoll_l", "___strerror_l", "_strerror_l", "___xpg_strerror_r", "___strncasecmp_l", "_strncasecmp_l", "_strtof", "___trunctfsf2", "___extendsftf2", "___netf2", "___floatunsitf", "___eqtf2", "___letf2", "_strtold", "_strtoull", "_strtoimax", "_strtoumax", "___strtol_internal", "___strtoul_internal", "___strtoll_internal", "___strtoull_internal", "___strtoimax_internal", "___strtoumax_internal", "_setlogmask", "_vdprintf", "_vsyslog", "___tolower_l", "_tolower_l", "___toupper_l", "_toupper_l", "___towupper_l", "___towlower_l", "_towupper_l", "_towlower_l", "_utimensat", "___vfprintf_internal", "_vfscanf", "___isoc99_vfscanf", "_vsniprintf", "___small_vsnprintf", "___isoc99_vsscanf", "_wcslen", "___libc_calloc", "___libc_realloc", "_realloc_in_place", "_memalign", "_posix_memalign", "_valloc", "_pvalloc", "_mallinfo", "_mallopt", "_malloc_trim", "_malloc_usable_size", "_malloc_footprint", "_malloc_max_footprint", "_malloc_footprint_limit", "_malloc_set_footprint_limit", "_independent_calloc", "_independent_comalloc", "_bulk_free", "___ashlti3", "___lshrti3", "___fe_getround", "___fe_raise_inexact", "___unordtf2", "_emscripten_stack_set_limits", "onRuntimeInitialized" ].forEach((prop => {
 if (!Object.getOwnPropertyDescriptor(Module["ready"], prop)) {
  Object.defineProperty(Module["ready"], prop, {
   get: () => abort("You are getting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),
   set: () => abort("You are setting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
  });
 }
}));

Module.WeakerMap = Module.WeakerMap || class WeakerMap {
 constructor(entries) {
  this.registry = new FinReg((held => this.delete(held)));
  this.map = new Map;
  entries && entries.forEach((([key, value]) => this.set(key, value)));
 }
 get size() {
  return this.map.size;
 }
 clear() {
  this.map.clear();
 }
 delete(key) {
  this.map.delete(key);
 }
 [Symbol.iterator]() {
  const mapIterator = this.map[Symbol.iterator]();
  return {
   next: () => {
    do {
     const entry = mapIterator.next();
     if (entry.done) {
      return {
       done: true
      };
     }
     const [key, ref] = entry.value;
     const value = ref.deref();
     if (!value) {
      this.map.delete(key);
      continue;
     }
     return {
      done: false,
      value: [ key, value ]
     };
    } while (true);
   }
  };
 }
 entries() {
  return {
   [Symbol.iterator]: () => this[Symbol.iterator]()
  };
 }
 forEach(callback) {
  for (const [k, v] of this) {
   callback(v, k, this);
  }
 }
 get(key) {
  if (!this.has(key)) {
   return;
  }
  return this.map.get(key).deref();
 }
 has(key) {
  if (!this.map.has(key)) {
   return false;
  }
  const result = this.map.get(key).deref();
  if (!result) {
   this.map.delete(key);
  }
  return result;
 }
 keys() {
  return [ ...this ].map((v => v[0]));
 }
 set(key, value) {
  if (typeof value !== "function" && typeof value !== "object") {
   throw new Error("WeakerMap values must be objects.");
  }
  if (this.map.has(key)) {
   this.registry.unregister(this.get(key));
  }
  this.registry.register(value, key, value);
  return this.map.set(key, new wRef(value));
 }
 values() {
  return [ ...this ].map((v => v[1]));
 }
};

const FinReg = globalThis.FinalizationRegistry || class {
 register() {}
 unregister() {}
};

const wRef = globalThis.WeakRef || class {
 constructor(val) {
  this.val = val;
 }
 deref() {
  return this.val;
 }
};

Module.UniqueIndex = Module.UniqueIndex || class UniqueIndex {
 constructor() {
  this.byObject = new WeakMap;
  this.byInteger = new Module.WeakerMap;
  this.id = 0;
  Object.defineProperty(this, "clear", {
   configurable: false,
   writable: false,
   value: () => {
    this.byInteger.clear();
   }
  });
  Object.defineProperty(this, "add", {
   configurable: false,
   writable: false,
   value: callback => {
    if (this.byObject.has(callback)) {
     const id = this.byObject.get(callback);
     return id;
    }
    const newid = ++this.id;
    this.byObject.set(callback, newid);
    this.byInteger.set(newid, callback);
    return newid;
   }
  });
  Object.defineProperty(this, "has", {
   configurable: false,
   writable: false,
   value: obj => {
    if (this.byObject.has(obj)) {
     return this.byObject.get(obj);
    }
   }
  });
  Object.defineProperty(this, "hasId", {
   configurable: false,
   writable: false,
   value: address => {
    if (this.byInteger.has(address)) {
     return this.byInteger.get(address);
    }
   }
  });
  Object.defineProperty(this, "get", {
   configurable: false,
   writable: false,
   value: address => {
    if (this.byInteger.has(address)) {
     return this.byInteger.get(address);
    }
   }
  });
  Object.defineProperty(this, "getId", {
   configurable: false,
   writable: false,
   value: obj => {
    if (this.byObject.has(obj)) {
     return this.byObject.get(obj);
    }
   }
  });
  Object.defineProperty(this, "remove", {
   configurable: false,
   writable: false,
   value: address => {
    const obj = this.byInteger.get(address);
    if (obj) {
     this.byObject.delete(obj);
     this.byInteger.delete(address);
    }
   }
  });
 }
};

const zvalSym = Symbol("ZVAL");

Module.marshalObject = zvalPtr => {
 const nativeTarget = Module.ccall("vrzno_expose_zval_is_target", "number", [ "number" ], [ zvalPtr ]);
 if (nativeTarget && Module.targets.hasId(nativeTarget)) {
  return Module.targets.get(nativeTarget);
 }
 const proxy = new Proxy({}, {
  ownKeys: target => {
   const keysLoc = Module.ccall("vrzno_expose_object_keys", "number", [ "number" ], [ zvalPtr ]);
   const keyJson = UTF8ToString(keysLoc);
   const keys = JSON.parse(keyJson);
   keys.push(...Reflect.ownKeys(target));
   return keys;
  },
  has: (target, prop) => {
   if (typeof prop === "symbol") {
    return false;
   }
   const len = lengthBytesUTF8(prop) + 1;
   const namePtr = _malloc(len);
   stringToUTF8(prop, namePtr, len);
   const retPtr = Module.ccall("vrzno_expose_property_pointer", "number", [ "number", "number" ], [ zvalPtr, namePtr ]);
   return !!retPtr;
  },
  get: (target, prop, receiver) => {
   if (typeof prop === "symbol") {
    return target[prop];
   }
   const len = lengthBytesUTF8(prop) + 1;
   const namePtr = _malloc(len);
   stringToUTF8(prop, namePtr, len);
   const retPtr = Module.ccall("vrzno_expose_property_pointer", "number", [ "number", "number" ], [ zvalPtr, namePtr ]);
   const proxy = Module.zvalToJS(retPtr);
   if (proxy && [ "function", "object" ].includes(typeof proxy)) {
    Module.zvalMap.set(proxy, retPtr);
    Module._zvalMap.set(retPtr, proxy);
   }
   _free(namePtr);
   return proxy ?? Reflect.get(target, prop);
  },
  getOwnPropertyDescriptor: (target, prop) => {
   if (typeof prop === "symbol" || prop in target) {
    return Reflect.getOwnPropertyDescriptor(target, prop);
   }
   const len = lengthBytesUTF8(prop) + 1;
   const namePtr = _malloc(len);
   stringToUTF8(prop, namePtr, len);
   const retPtr = Module.ccall("vrzno_expose_property_pointer", "number", [ "number", "number" ], [ zvalPtr, namePtr ]);
   const proxy = Module.zvalToJS(retPtr);
   if (proxy && [ "function", "object" ].includes(typeof proxy)) {
    Module.zvalMap.set(proxy, retPtr);
    Module._zvalMap.set(retPtr, proxy);
   }
   _free(namePtr);
   return {
    configurable: true,
    enumerable: true,
    value: target[prop]
   };
  }
 });
 Object.defineProperty(proxy, zvalSym, {
  value: `PHP_@{${zvalPtr}}`
 });
 Module.zvalMap.set(proxy, zvalPtr);
 Module._zvalMap.set(zvalPtr, proxy);
 if (!Module.targets.has(proxy)) {
  Module.targets.add(proxy);
  Module.ccall("vrzno_expose_inc_zrefcount", "number", [ "number" ], [ zvalPtr ]);
  Module.fRegistry.register(proxy, zvalPtr, proxy);
 }
 return proxy;
};

Module.callableToJs = Module.callableToJs || (funcPtr => {
 if (Module.callables.has(funcPtr)) {
  return Module.callables.get(funcPtr);
 }
 const wrapped = (...args) => {
  let paramPtrs = [], paramsPtr = null;
  if (args.length) {
   paramsPtr = Module.ccall("vrzno_expose_create_params", "number", [ "number" ], [ args.length ]);
   paramPtrs = args.map((a => Module.jsToZval(a)));
   paramPtrs.forEach(((paramPtr, i) => {
    Module.ccall("vrzno_expose_set_param", "number", [ "number", "number", "number" ], [ paramsPtr, i, paramPtr ]);
   }));
  }
  const zvalPtr = Module.ccall("vrzno_exec_callback", "number", [ "number", "number", "number" ], [ funcPtr, paramsPtr, args.length ]);
  if (args.length) {
   paramPtrs.forEach(((p, i) => {}));
   Module.ccall("vrzno_expose_efree", "number", [ "number", "number" ], [ paramsPtr, false ]);
  }
  if (zvalPtr) {
   return Module.zvalToJS(zvalPtr);
  }
 };
 Object.defineProperty(wrapped, "name", {
  value: `PHP_@{${funcPtr}}`
 });
 Module.ccall("vrzno_expose_inc_crefcount", "number", [ "number" ], [ funcPtr ]);
 Module.callables.set(funcPtr, wrapped);
 return wrapped;
});

Module.zvalToJS = Module.zvalToJS || (zvalPtr => {
 if (Module._zvalMap.has(zvalPtr)) {
  return Module._zvalMap.get(zvalPtr);
 }
 const IS_UNDEF = 0;
 const IS_NULL = 1;
 const IS_FALSE = 2;
 const IS_TRUE = 3;
 const IS_LONG = 4;
 const IS_DOUBLE = 5;
 const IS_STRING = 6;
 const IS_ARRAY = 7;
 const IS_OBJECT = 8;
 const callable = Module.ccall("vrzno_expose_callable", "number", [ "number" ], [ zvalPtr ]);
 let valPtr;
 if (callable) {
  const nativeTarget = Module.ccall("vrzno_expose_zval_is_target", "number", [ "number" ], [ zvalPtr ]);
  if (nativeTarget) {
   return Module.targets.get(nativeTarget);
  }
  const wrapped = nativeTarget ? Module.targets.get(nativeTarget) : Module.callableToJs(callable);
  if (!Module.targets.has(wrapped)) {
   Module.targets.add(wrapped);
   Module.ccall("vrzno_expose_inc_zrefcount", "number", [ "number" ], [ zvalPtr ]);
  }
  Module.zvalMap.set(wrapped, zvalPtr);
  Module._zvalMap.set(zvalPtr, wrapped);
  Module.fRegistry.register(wrapped, zvalPtr, wrapped);
  return wrapped;
 }
 const type = Module.ccall("vrzno_expose_type", "number", [ "number" ], [ zvalPtr ]);
 switch (type) {
 case IS_UNDEF:
  return undefined;
  break;

 case IS_NULL:
  return null;
  break;

 case IS_TRUE:
  return true;
  break;

 case IS_FALSE:
  return false;
  break;

 case IS_LONG:
  return Module.ccall("vrzno_expose_long", "number", [ "number" ], [ zvalPtr ]);
  break;

 case IS_DOUBLE:
  valPtr = Module.ccall("vrzno_expose_double", "number", [ "number" ], [ zvalPtr ]);
  if (!valPtr) {
   return null;
  }
  return getValue(valPtr, "double");
  break;

 case IS_STRING:
  valPtr = Module.ccall("vrzno_expose_string", "number", [ "number" ], [ zvalPtr ]);
  if (!valPtr) {
   return null;
  }
  return UTF8ToString(valPtr);
  break;

 case IS_OBJECT:
  const proxy = Module.marshalObject(zvalPtr);
  return proxy;
  break;

 default:
  return null;
  break;
 }
});

Module.jsToZval = Module.jsToZval || (value => {
 let zvalPtr;
 if (typeof value === "undefined") {
  zvalPtr = Module.ccall("vrzno_expose_create_undef", "number", [], []);
 } else if (value === null) {
  zvalPtr = Module.ccall("vrzno_expose_create_null", "number", [], []);
 } else if ([ true, false ].includes(value)) {
  zvalPtr = Module.ccall("vrzno_expose_create_bool", "number", [ "number" ], [ value ]);
 } else if (value && [ "function", "object" ].includes(typeof value)) {
  let index, existed;
  if (!Module.targets.has(value)) {
   index = Module.targets.add(value);
   existed = false;
  } else {
   index = Module.targets.getId(value);
   existed = true;
  }
  const isFunction = typeof value === "function" ? index : 0;
  const isConstructor = isFunction && !!(value.prototype && value.prototype.constructor);
  zvalPtr = Module.ccall("vrzno_expose_create_object_for_target", "number", [ "number", "number", "number" ], [ index, isFunction, isConstructor ]);
  Module.zvalMap.set(value, zvalPtr);
  Module._zvalMap.set(zvalPtr, value);
  if (!existed) {
   Module.ccall("vrzno_expose_inc_zrefcount", "number", [ "number" ], [ zvalPtr ]);
   Module.fRegistry.register(value, zvalPtr, value);
  }
 } else if (typeof value === "number") {
  if (Number.isInteger(value)) {
   zvalPtr = Module.ccall("vrzno_expose_create_long", "number", [ "number" ], [ value ]);
  } else if (Number.isFinite(value)) {
   zvalPtr = Module.ccall("vrzno_expose_create_double", "number", [ "number" ], [ value ]);
  }
 } else if (typeof value === "string") {
  const len = lengthBytesUTF8(value) + 1;
  const strLoc = _malloc(len);
  stringToUTF8(value, strLoc, len);
  zvalPtr = Module.ccall("vrzno_expose_create_string", "number", [ "number" ], [ strLoc ]);
  _free(strLoc);
 }
 return zvalPtr;
});

Module.PdoD1Driver = Module.PdoD1Driver || class PdoD1Driver {
 prepare(db, query) {
  console.log("prepare", {
   db: db,
   query: query
  });
  return db.prepare(query);
 }
 doer(db, query) {
  console.log("doer", {
   db: db,
   query: query
  });
 }
};

HEAP8 = new Int8Array(1);

Module.zvalMap = new WeakMap;

Module._zvalMap = Module._zvalMap || new Module.WeakerMap;

Module.fRegistry = Module.fRegistry || new FinReg((zvalPtr => {
 console.log("Garbage collecting! zVal@" + zvalPtr);
 Module.ccall("vrzno_expose_dec_zrefcount", "number", [ "number" ], [ zvalPtr ]);
}));

Module.bufferMaps = new WeakMap;

Module.callables = Module.callables || new Module.WeakerMap;

Module.targets = Module.targets || new Module.UniqueIndex;

Module.classes = Module.classes || new WeakMap;

Module._classes = Module._classes || new Module.WeakerMap;

Module.PdoParams = new WeakMap;

Module.pdoDriver = Module.pdoDriver || new Module.PdoD1Driver;

Module.targets.add(globalThis);

Module.onRefresh = Module.onRefresh || new Set;

Module.onRefresh.add((() => {
 console.log("VRZNO refresh callback");
 Module.callables.clear();
 Module.targets.clear();
 Module._classes.clear();
 Module._zvalMap.clear();
 Module.targets.byObject.set(globalThis, 1);
 Module.targets.byInteger.set(1, globalThis);
}));

var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];

var thisProgram = "./this.program";

var quit_ = (status, toThrow) => {
 throw toThrow;
};

var ENVIRONMENT_IS_WEB = false;

var ENVIRONMENT_IS_WORKER = true;

var ENVIRONMENT_IS_NODE = false;

var ENVIRONMENT_IS_SHELL = false;

if (Module["ENVIRONMENT"]) {
 throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
}

var scriptDirectory = "";

function locateFile(path) {
 if (Module["locateFile"]) {
  return Module["locateFile"](path, scriptDirectory);
 }
 return scriptDirectory + path;
}

var read_, readAsync, readBinary, setWindowTitle;

if (ENVIRONMENT_IS_SHELL) {
 if (typeof process == "object" && typeof require === "function" || typeof window == "object" || typeof importScripts == "function") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
 if (typeof read != "undefined") {
  read_ = f => read(f);
 }
 readBinary = f => {
  let data;
  if (typeof readbuffer == "function") {
   return new Uint8Array(readbuffer(f));
  }
  data = read(f, "binary");
  assert(typeof data == "object");
  return data;
 };
 readAsync = (f, onload, onerror) => {
  setTimeout((() => onload(readBinary(f))));
 };
 if (typeof clearTimeout == "undefined") {
  globalThis.clearTimeout = id => {};
 }
 if (typeof setTimeout == "undefined") {
  globalThis.setTimeout = f => typeof f == "function" ? f() : abort();
 }
 if (typeof scriptArgs != "undefined") {
  arguments_ = scriptArgs;
 } else if (typeof arguments != "undefined") {
  arguments_ = arguments;
 }
 if (typeof quit == "function") {
  quit_ = (status, toThrow) => {
   setTimeout((() => {
    if (!(toThrow instanceof ExitStatus)) {
     let toLog = toThrow;
     if (toThrow && typeof toThrow == "object" && toThrow.stack) {
      toLog = [ toThrow, toThrow.stack ];
     }
     err(`exiting due to exception: ${toLog}`);
    }
    quit(status);
   }));
   throw toThrow;
  };
 }
 if (typeof print != "undefined") {
  if (typeof console == "undefined") console = {};
  console.log = print;
  console.warn = console.error = typeof printErr != "undefined" ? printErr : print;
 }
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
 if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = self.location.href;
 } else if (typeof document != "undefined" && document.currentScript) {
  scriptDirectory = document.currentScript.src;
 }
 if (_scriptDir) {
  scriptDirectory = _scriptDir;
 }
 if (scriptDirectory.indexOf("blob:") !== 0) {
  scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
 } else {
  scriptDirectory = "";
 }
 if (!(typeof window == "object" || typeof importScripts == "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
 {
  read_ = url => {
   var xhr = new XMLHttpRequest;
   xhr.open("GET", url, false);
   xhr.send(null);
   return xhr.responseText;
  };
  if (ENVIRONMENT_IS_WORKER) {
   readBinary = url => {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", url, false);
    xhr.responseType = "arraybuffer";
    xhr.send(null);
    return new Uint8Array(xhr.response);
   };
  }
  readAsync = (url, onload, onerror) => {
   var xhr = new XMLHttpRequest;
   xhr.open("GET", url, true);
   xhr.responseType = "arraybuffer";
   xhr.onload = () => {
    if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
     onload(xhr.response);
     return;
    }
    onerror();
   };
   xhr.onerror = onerror;
   xhr.send(null);
  };
 }
 setWindowTitle = title => document.title = title;
} else {
 throw new Error("environment detection error");
}

var out = Module["print"] || console.log.bind(console);

var err = Module["printErr"] || console.error.bind(console);

Object.assign(Module, moduleOverrides);

moduleOverrides = null;

checkIncomingModuleAPI();

if (Module["arguments"]) arguments_ = Module["arguments"];

legacyModuleProp("arguments", "arguments_");

if (Module["thisProgram"]) thisProgram = Module["thisProgram"];

legacyModuleProp("thisProgram", "thisProgram");

if (Module["quit"]) quit_ = Module["quit"];

legacyModuleProp("quit", "quit_");

assert(typeof Module["memoryInitializerPrefixURL"] == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["pthreadMainPrefixURL"] == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["cdInitializerPrefixURL"] == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["filePackagePrefixURL"] == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["read"] == "undefined", "Module.read option was removed (modify read_ in JS)");

assert(typeof Module["readAsync"] == "undefined", "Module.readAsync option was removed (modify readAsync in JS)");

assert(typeof Module["readBinary"] == "undefined", "Module.readBinary option was removed (modify readBinary in JS)");

assert(typeof Module["setWindowTitle"] == "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");

assert(typeof Module["TOTAL_MEMORY"] == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");

legacyModuleProp("read", "read_");

legacyModuleProp("readAsync", "readAsync");

legacyModuleProp("readBinary", "readBinary");

legacyModuleProp("setWindowTitle", "setWindowTitle");

var PROXYFS = "PROXYFS is no longer included by default; build with -lproxyfs.js";

var WORKERFS = "WORKERFS is no longer included by default; build with -lworkerfs.js";

var NODEFS = "NODEFS is no longer included by default; build with -lnodefs.js";

assert(!ENVIRONMENT_IS_WEB, "web environment detected but not enabled at build time.  Add 'web' to `-sENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");

var wasmBinary;

if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];

legacyModuleProp("wasmBinary", "wasmBinary");

var noExitRuntime = Module["noExitRuntime"] || true;

legacyModuleProp("noExitRuntime", "noExitRuntime");

if (typeof WebAssembly != "object") {
 abort("no native wasm support detected");
}

var wasmMemory;

var ABORT = false;

var EXITSTATUS;

function assert(condition, text) {
 if (!condition) {
  abort("Assertion failed" + (text ? ": " + text : ""));
 }
}

var HEAP, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateMemoryViews() {
 var b = wasmMemory.buffer;
 Module["HEAP8"] = HEAP8 = new Int8Array(b);
 Module["HEAP16"] = HEAP16 = new Int16Array(b);
 Module["HEAP32"] = HEAP32 = new Int32Array(b);
 Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
 Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
 Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
 Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
 Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
}

assert(!Module["STACK_SIZE"], "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");

assert(typeof Int32Array != "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined, "JS engine does not provide full typed array support");

assert(!Module["wasmMemory"], "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");

assert(!Module["INITIAL_MEMORY"], "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");

var wasmTable;

function writeStackCookie() {
 var max = _emscripten_stack_get_end();
 assert((max & 3) == 0);
 if (max == 0) {
  max += 4;
 }
 HEAPU32[max >>> 2] = 34821223;
 HEAPU32[max + 4 >>> 2] = 2310721022;
 HEAPU32[0 >>> 2] = 1668509029;
}

function checkStackCookie() {
 if (ABORT) return;
 var max = _emscripten_stack_get_end();
 if (max == 0) {
  max += 4;
 }
 var cookie1 = HEAPU32[max >>> 2];
 var cookie2 = HEAPU32[max + 4 >>> 2];
 if (cookie1 != 34821223 || cookie2 != 2310721022) {
  abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`);
 }
 if (HEAPU32[0 >>> 2] != 1668509029) {
  abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
 }
}

(function() {
 var h16 = new Int16Array(1);
 var h8 = new Int8Array(h16.buffer);
 h16[0] = 25459;
 if (h8[0] !== 115 || h8[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
})();

var __ATPRERUN__ = [];

var __ATINIT__ = [];

var __ATMAIN__ = [];

var __ATEXIT__ = [];

var __ATPOSTRUN__ = [];

var runtimeInitialized = false;

var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
 return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {
 if (Module["preRun"]) {
  if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
  while (Module["preRun"].length) {
   addOnPreRun(Module["preRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
 assert(!runtimeInitialized);
 runtimeInitialized = true;
 checkStackCookie();
 if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
 FS.ignorePermissions = false;
 TTY.init();
 SOCKFS.root = FS.mount(SOCKFS, {}, null);
 PIPEFS.root = FS.mount(PIPEFS, {}, null);
 callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
 checkStackCookie();
 callRuntimeCallbacks(__ATMAIN__);
}

function postRun() {
 checkStackCookie();
 if (Module["postRun"]) {
  if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
  while (Module["postRun"].length) {
   addOnPostRun(Module["postRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
 __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
 __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
 __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {}

function addOnPostRun(cb) {
 __ATPOSTRUN__.unshift(cb);
}

assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

var runDependencies = 0;

var runDependencyWatcher = null;

var dependenciesFulfilled = null;

var runDependencyTracking = {};

function getUniqueRunDependency(id) {
 var orig = id;
 while (1) {
  if (!runDependencyTracking[id]) return id;
  id = orig + Math.random();
 }
}

function addRunDependency(id) {
 runDependencies++;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (id) {
  assert(!runDependencyTracking[id]);
  runDependencyTracking[id] = 1;
  if (runDependencyWatcher === null && typeof setInterval != "undefined") {
   runDependencyWatcher = setInterval((() => {
    if (ABORT) {
     clearInterval(runDependencyWatcher);
     runDependencyWatcher = null;
     return;
    }
    var shown = false;
    for (var dep in runDependencyTracking) {
     if (!shown) {
      shown = true;
      err("still waiting on run dependencies:");
     }
     err("dependency: " + dep);
    }
    if (shown) {
     err("(end of list)");
    }
   }), 1e4);
  }
 } else {
  err("warning: run dependency added without ID");
 }
}

function removeRunDependency(id) {
 runDependencies--;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (id) {
  assert(runDependencyTracking[id]);
  delete runDependencyTracking[id];
 } else {
  err("warning: run dependency removed without ID");
 }
 if (runDependencies == 0) {
  if (runDependencyWatcher !== null) {
   clearInterval(runDependencyWatcher);
   runDependencyWatcher = null;
  }
  if (dependenciesFulfilled) {
   var callback = dependenciesFulfilled;
   dependenciesFulfilled = null;
   callback();
  }
 }
}

function abort(what) {
 if (Module["onAbort"]) {
  Module["onAbort"](what);
 }
 what = "Aborted(" + what + ")";
 err(what);
 ABORT = true;
 EXITSTATUS = 1;
 var e = new WebAssembly.RuntimeError(what);
 readyPromiseReject(e);
 throw e;
}

var dataURIPrefix = "data:application/octet-stream;base64,";

function isDataURI(filename) {
 return filename.startsWith(dataURIPrefix);
}

function isFileURI(filename) {
 return filename.startsWith("file://");
}

function createExportWrapper(name, fixedasm) {
 return function() {
  var displayName = name;
  var asm = fixedasm;
  if (!fixedasm) {
   asm = Module["asm"];
  }
  assert(runtimeInitialized, "native function `" + displayName + "` called before runtime initialization");
  if (!asm[name]) {
   assert(asm[name], "exported native function `" + displayName + "` not found");
  }
  return asm[name].apply(null, arguments);
 };
}

var wasmBinaryFile;

wasmBinaryFile = "php-cgi.wasm";

if (!isDataURI(wasmBinaryFile)) {
 wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinarySync(file) {
 if (file == wasmBinaryFile && wasmBinary) {
  return new Uint8Array(wasmBinary);
 }
 if (readBinary) {
  return readBinary(file);
 }
 throw "both async and sync fetching of the wasm failed";
}

function getBinaryPromise(binaryFile) {
 if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
  if (typeof fetch == "function") {
   return fetch(binaryFile, {
    credentials: "same-origin"
   }).then((response => {
    if (!response["ok"]) {
     throw "failed to load wasm binary file at '" + binaryFile + "'";
    }
    return response["arrayBuffer"]();
   })).catch((() => getBinarySync(binaryFile)));
  }
 }
 return Promise.resolve().then((() => getBinarySync(binaryFile)));
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
 return getBinaryPromise(binaryFile).then((binary => WebAssembly.instantiate(binary, imports))).then((instance => instance)).then(receiver, (reason => {
  err("failed to asynchronously prepare wasm: " + reason);
  if (isFileURI(wasmBinaryFile)) {
   err("warning: Loading from a file URI (" + wasmBinaryFile + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
  }
  abort(reason);
 }));
}

function instantiateAsync(binary, binaryFile, imports, callback) {
 if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && typeof fetch == "function") {
  return fetch(binaryFile, {
   credentials: "same-origin"
  }).then((response => {
   var result = WebAssembly.instantiateStreaming(response, imports);
   return result.then(callback, (function(reason) {
    err("wasm streaming compile failed: " + reason);
    err("falling back to ArrayBuffer instantiation");
    return instantiateArrayBuffer(binaryFile, imports, callback);
   }));
  }));
 }
 return instantiateArrayBuffer(binaryFile, imports, callback);
}

function createWasm() {
 var info = {
  "env": wasmImports,
  "wasi_snapshot_preview1": wasmImports
 };
 function receiveInstance(instance, module) {
  var exports = instance.exports;
  exports = applySignatureConversions(exports);
  Module["asm"] = exports;
  wasmMemory = Module["asm"]["memory"];
  assert(wasmMemory, "memory not found in wasm exports");
  updateMemoryViews();
  wasmTable = Module["asm"]["__indirect_function_table"];
  assert(wasmTable, "table not found in wasm exports");
  addOnInit(Module["asm"]["__wasm_call_ctors"]);
  removeRunDependency("wasm-instantiate");
  return exports;
 }
 addRunDependency("wasm-instantiate");
 var trueModule = Module;
 function receiveInstantiationResult(result) {
  assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
  trueModule = null;
  receiveInstance(result["instance"]);
 }
 if (Module["instantiateWasm"]) {
  try {
   return Module["instantiateWasm"](info, receiveInstance);
  } catch (e) {
   err("Module.instantiateWasm callback failed with error: " + e);
   readyPromiseReject(e);
  }
 }
 instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
 return {};
}

var tempDouble;

var tempI64;

function legacyModuleProp(prop, newName) {
 if (!Object.getOwnPropertyDescriptor(Module, prop)) {
  Object.defineProperty(Module, prop, {
   configurable: true,
   get() {
    abort("Module." + prop + " has been replaced with plain " + newName + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
   }
  });
 }
}

function ignoredModuleProp(prop) {
 if (Object.getOwnPropertyDescriptor(Module, prop)) {
  abort("`Module." + prop + "` was supplied but `" + prop + "` not included in INCOMING_MODULE_JS_API");
 }
}

function isExportedByForceFilesystem(name) {
 return name === "FS_createPath" || name === "FS_createDataFile" || name === "FS_createPreloadedFile" || name === "FS_unlink" || name === "addRunDependency" || name === "FS_createLazyFile" || name === "FS_createDevice" || name === "removeRunDependency";
}

function missingGlobal(sym, msg) {
 if (typeof globalThis !== "undefined") {
  Object.defineProperty(globalThis, sym, {
   configurable: true,
   get() {
    warnOnce("`" + sym + "` is not longer defined by emscripten. " + msg);
    return undefined;
   }
  });
 }
}

missingGlobal("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");

function missingLibrarySymbol(sym) {
 if (typeof globalThis !== "undefined" && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
  Object.defineProperty(globalThis, sym, {
   configurable: true,
   get() {
    var msg = "`" + sym + "` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line";
    var librarySymbol = sym;
    if (!librarySymbol.startsWith("_")) {
     librarySymbol = "$" + sym;
    }
    msg += " (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='" + librarySymbol + "')";
    if (isExportedByForceFilesystem(sym)) {
     msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
    }
    warnOnce(msg);
    return undefined;
   }
  });
 }
 unexportedRuntimeSymbol(sym);
}

function unexportedRuntimeSymbol(sym) {
 if (!Object.getOwnPropertyDescriptor(Module, sym)) {
  Object.defineProperty(Module, sym, {
   configurable: true,
   get() {
    var msg = "'" + sym + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)";
    if (isExportedByForceFilesystem(sym)) {
     msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
    }
    abort(msg);
   }
  });
 }
}

function dbg(text) {
 console.warn.apply(console, arguments);
}

var ASM_CONSTS = {
 3609908: ($0, $1) => {
  const target = Module.targets.get($0);
  const property = UTF8ToString($1);
  if (!(property in target)) {
   return Module.jsToZval(undefined);
  }
  if (target[property] === null) {
   return Module.jsToZval(null);
  }
  const result = target[property];
  if (!result || ![ "function", "object" ].includes(typeof result)) {
   return Module.jsToZval(result);
  }
  return 0;
 },
 3610256: ($0, $1, $2) => {
  const target = Module.targets.get($0);
  const property = UTF8ToString($1);
  const result = target[property];
  const zvalPtr = $2;
  if (result && [ "function", "object" ].includes(typeof result)) {
   let index = Module.targets.getId(result);
   if (!Module.targets.has(result)) {
    index = Module.targets.add(result);
    Module.zvalMap.set(result, zvalPtr);
    Module._zvalMap.set(zvalPtr, result);
   }
   return index;
  }
  return 0;
 },
 3610664: $0 => "function" === typeof Module.targets.get($0) ? $0 : 0,
 3610732: $0 => !!(Module.targets.get($0).prototype && Module.targets.get($0).prototype.constructor),
 3610833: ($0, $1, $2) => {
  (() => {
   const target = Module.targets.get($0);
   const property = UTF8ToString($1);
   const newValue = $2;
  })();
 },
 3610945: ($0, $1, $2, $3, $4) => {
  (() => {
   const target = Module.targets.get($0);
   const property = UTF8ToString($1);
   const funcPtr = $2;
   const zvalPtr = $3;
   const paramCount = $4;
   target[property] = Module.callableToJs(funcPtr);
  })();
 },
 3611148: ($0, $1, $2) => {
  (() => {
   const target = Module.targets.get($0);
   const property = UTF8ToString($1);
   const zvalPtr = $2;
   if (!Module.targets.has(target[property])) {
    target[property] = Module.marshalObject(zvalPtr);
   }
  })();
 },
 3611355: ($0, $1) => {
  (() => {
   const target = Module.targets.get($0);
   const property = UTF8ToString($1);
   delete target[property];
  })();
 },
 3611471: ($0, $1) => {
  (() => {
   const target = Module.targets.get($0);
   const property = UTF8ToString($1);
   target[property] = null;
  })();
 },
 3611587: ($0, $1) => {
  (() => {
   const target = Module.targets.get($0);
   const property = UTF8ToString($1);
   target[property] = false;
  })();
 },
 3611704: ($0, $1) => {
  (() => {
   const target = Module.targets.get($0);
   const property = UTF8ToString($1);
   target[property] = true;
  })();
 },
 3611820: ($0, $1, $2) => {
  (() => {
   const target = Module.targets.get($0);
   const property = UTF8ToString($1);
   target[property] = $2;
  })();
 },
 3611934: ($0, $1, $2) => {
  (() => {
   const target = Module.targets.get($0);
   const property = UTF8ToString($1);
   target[property] = $2;
  })();
 },
 3612048: ($0, $1, $2) => {
  (() => {
   const target = Module.targets.get($0);
   const property = UTF8ToString($1);
   const newValue = UTF8ToString($2);
   target[property] = newValue;
  })();
 },
 3612203: ($0, $1) => {
  let target = Module.targets.get($0);
  const property = $1;
  if (target instanceof ArrayBuffer) {
   if (!Module.bufferMaps.has(target)) {
    Module.bufferMaps.set(target, new Uint8Array(target));
   }
   target = Module.bufferMaps.get(target);
  }
  if (!(property in target)) {
   const jsRet = "UN";
   const len = lengthBytesUTF8(jsRet) + 1;
   const strLoc = _malloc(len);
   stringToUTF8(jsRet, strLoc, len);
   return strLoc;
  }
  if (target[property] === null) {
   const jsRet = "NU";
   const len = lengthBytesUTF8(jsRet) + 1;
   const strLoc = _malloc(len);
   stringToUTF8(jsRet, strLoc, len);
   return strLoc;
  }
  const result = target[property];
  if (!result || ![ "function", "object" ].includes(typeof result)) {
   const jsRet = "OK" + String(result);
   const len = lengthBytesUTF8(jsRet) + 1;
   const strLoc = _malloc(len);
   stringToUTF8(jsRet, strLoc, len);
   return strLoc;
  }
  const jsRet = "XX";
  const len = lengthBytesUTF8(jsRet) + 1;
  const strLoc = _malloc(len);
  stringToUTF8(jsRet, strLoc, len);
  return strLoc;
 },
 3613169: ($0, $1, $2) => {
  const target = Module.targets.get($0);
  const property = UTF8ToString($1);
  const result = target[property];
  const zvalPtr = $2;
  if (result && [ "function", "object" ].includes(typeof result)) {
   let index = Module.targets.getId(result);
   if (!Module.targets.has(result)) {
    index = Module.targets.add(result);
    Module.zvalMap.set(result, zvalPtr);
    Module._zvalMap.set(zvalPtr, result);
   }
   return index;
  }
  return 0;
 },
 3613577: $0 => "function" === typeof Module.targets.get($0) ? $0 : 0,
 3613645: $0 => !!(Module.targets.get($0).prototype && Module.targets.get($0).prototype.constructor),
 3613746: ($0, $1, $2) => {
  (() => {
   const target = Module.targets.get($0);
   const property = $1;
   const newValue = $2;
  })();
 },
 3613844: ($0, $1, $2, $3) => {
  (() => {
   const target = Module.targets.get($0);
   const property = $1;
   const funcPtr = $2;
   const zvalPtr = $3;
   target[property] = Module.callableToJs(funcPtr);
  })();
 },
 3614010: ($0, $1, $2) => {
  (() => {
   const target = Module.targets.get($0);
   const property = $1;
   const zvalPtr = $2;
   if (!Module.targets.has(target[property])) {
    target[property] = Module.marshalObject(zvalPtr);
   }
  })();
 },
 3614203: ($0, $1) => {
  (() => {
   const target = Module.targets.get($0);
   const property = $1;
   delete target[property];
  })();
 },
 3614305: ($0, $1) => {
  (() => {
   const target = Module.targets.get($0);
   const property = $1;
   target[property] = null;
  })();
 },
 3614407: ($0, $1) => {
  (() => {
   const target = Module.targets.get($0);
   const property = $1;
   target[property] = false;
  })();
 },
 3614510: ($0, $1) => {
  (() => {
   const target = Module.targets.get($0);
   const property = $1;
   target[property] = true;
  })();
 },
 3614612: ($0, $1, $2) => {
  (() => {
   const target = Module.targets.get($0);
   const property = $1;
   target[property] = $2;
  })();
 },
 3614712: ($0, $1, $2) => {
  (() => {
   const target = Module.targets.get($0);
   const property = $1;
   target[property] = $2;
  })();
 },
 3614812: ($0, $1, $2) => {
  (() => {
   const target = Module.targets.get($0);
   const property = $1;
   const newValue = UTF8ToString($2);
   target[property] = newValue;
  })();
 },
 3614953: ($0, $1, $2) => {
  const target = Module.targets.get($0);
  const property = $1;
  const check_empty = $2;
  if (Array.isArray(target)) {
   return typeof target[property] !== "undefined";
  }
  if (target instanceof ArrayBuffer) {
   if (!Module.bufferMaps.has(target)) {
    Module.bufferMaps.set(target, new Uint8Array(target));
   }
   const targetBytes = Module.bufferMaps.get(target);
   return targetBytes[property] !== "undefined";
  }
  if (!check_empty) {
   return property in target;
  } else {
   return !!target[property];
  }
 },
 3615432: ($0, $1) => {
  (() => {
   const target = Module.targets.get($0);
   const property = UTF8ToString($1);
   delete target[property];
  })();
 },
 3615548: ($0, $1) => {
  (() => {
   const target = Module.targets.get($0);
   const property = $1;
   delete target[property];
  })();
 },
 3615650: $0 => {
  const target = Module.targets.get($0);
  let json;
  if (typeof target === "function") {
   json = JSON.stringify({});
  } else {
   try {
    json = JSON.stringify({
     ...target
    });
   } catch {
    json = JSON.stringify({});
   }
  }
  const jsRet = String(json);
  const len = lengthBytesUTF8(jsRet) + 1;
  const strLoc = _malloc(len);
  stringToUTF8(jsRet, strLoc, len);
  return strLoc;
 },
 3616002: ($0, $1) => {
  const target = Module.targets.get($0);
  const property = UTF8ToString($1);
  return property in target;
 },
 3616107: $0 => {
  const target = Module.targets.get($0);
  const name = target.constructor && target.constructor.name || "Object";
  const len = lengthBytesUTF8(name) + 1;
  const namePtr = _malloc(name);
  stringToUTF8(name, namePtr, len);
  return namePtr;
 },
 3616344: ($0, $1, $2, $3, $4) => {
  const target = Module.targets.get($0);
  const method_name = UTF8ToString($1);
  const argv = $2;
  const argc = $3;
  const size = $4;
  const args = [];
  for (let i = 0; i < argc; i++) {
   const loc = argv + i * size;
   const ptr = Module.getValue(loc, "*");
   const arg = Module.zvalToJS(ptr);
   args.push(arg);
  }
  const jsRet = target[method_name](...args);
  const retZval = Module.jsToZval(jsRet);
  return retZval;
 },
 3616745: ($0, $1, $2, $3) => {
  const target = Module.targets.get($0);
  const argv = $1;
  const argc = $2;
  const size = $3;
  const args = [];
  for (let i = 0; i < argc; i++) {
   args.push(Module.zvalToJS(argv + i * size));
  }
  const jsRet = target(...args);
  return Module.jsToZval(jsRet);
 },
 3616997: ($0, $1) => {
  const target = Module.targets.get($0);
  const property_name = UTF8ToString($1);
  const jsRet = target[property_name];
  return Module.jsToZval(jsRet);
 },
 3617148: ($0, $1, $2, $3) => {
  const _class = Module._classes.get($0);
  const argv = $1;
  const argc = $2;
  const size = $3;
  const args = [];
  for (let i = 0; i < argc; i++) {
   args.push(Module.zvalToJS(argv + i * size));
  }
  const _object = new _class(...args);
  const index = Module.targets.add(_object);
  return index;
 },
 3617433: $0 => {
  const jsRet = String(eval(UTF8ToString($0)));
  const len = lengthBytesUTF8(jsRet) + 1;
  const strLoc = _malloc(len);
  stringToUTF8(jsRet, strLoc, len);
  return strLoc;
 },
 3617601: ($0, $1) => {
  const funcName = UTF8ToString($0);
  const argJson = UTF8ToString($1);
  const func = globalThis[funcName];
  const args = JSON.parse(argJson || "[]") || [];
  const jsRet = String(func(...args));
  const len = lengthBytesUTF8(jsRet) + 1;
  const strLoc = _malloc(len);
  stringToUTF8(jsRet, strLoc, len);
  return strLoc;
 },
 3617912: ($0, $1) => {
  const timeout = Number(UTF8ToString($0));
  const funcPtr = $1;
  setTimeout((() => {
   Module.ccall("vrzno_exec_callback", "number", [ "number", "number", "number" ], [ funcPtr, null, 0 ]);
   Module.ccall("vrzno_del_callback", "number", [ "number" ], [ funcPtr ]);
  }), timeout);
 },
 3618184: $0 => Module.jsToZval(Module[UTF8ToString($0)]),
 3618238: ($0, $1, $2, $3) => {
  const _class = Module.targets.get($0);
  const argv = $1;
  const argc = $2;
  const size = $3;
  const args = [];
  for (let i = 0; i < argc; i++) {
   args.push(Module.zvalToJS(argv + i * size));
  }
  const _object = new _class(...args);
  return Module.jsToZval(_object);
 },
 3618498: $0 => {
  const name = UTF8ToString($0);
  return Module.jsToZval(import(name));
 },
 3618571: $0 => {
  const target = Module.targets.get($0);
  return Module.classes.get(target);
 },
 3618649: ($0, $1) => {
  const target = Module.targets.get($0);
  Module.classes.set(target, $1);
  Module._classes.set($1, target);
 },
 3618757: $0 => {
  const results = Module.targets.get($0);
  if (results) {
   return results.length;
  }
  return 0;
 },
 3618850: $0 => {
  const results = Module.targets.get($0);
  if (results.length) {
   return Object.keys(results[0]).length;
  }
  return 0;
 },
 3618966: ($0, $1) => {
  const targetId = $0;
  const target = Module.targets.get(targetId);
  const current = $1;
  if (current >= target.length) {
   return null;
  }
  return Module.jsToZval(target[current]);
 },
 3619143: ($0, $1) => {
  const results = Module.targets.get($0);
  if (results.length) {
   const jsRet = Object.keys(results[0])[$1];
   const len = lengthBytesUTF8(jsRet) + 1;
   const strLoc = _malloc(len);
   stringToUTF8(jsRet, strLoc, len);
   return strLoc;
  }
  return 0;
 },
 3619381: ($0, $1, $2) => {
  const results = Module.targets.get($0);
  const current = -1 + $1;
  const colno = $2;
  if (current >= results.length) {
   return null;
  }
  const result = results[current];
  const key = Object.keys(result)[$2];
  const zval = Module.jsToZval(result[key]);
  return zval;
 },
 3619641: ($0, $1) => {
  const statement = Module.targets.get($0);
  const paramVal = Module.zvalToJS($1);
  if (!Module.PdoParams.has(statement)) {
   Module.PdoParams.set(statement, []);
  }
  const paramList = Module.PdoParams.get(statement);
  paramList.push(paramVal);
 },
 3619880: ($0, $1, $2) => {
  console.log("GET ATTR", $0, $1, $2);
 },
 3619921: ($0, $1, $2) => {
  console.log("COL META", $0, $1, $2);
 },
 3619962: ($0, $1, $2) => {
  console.log("CLOSE", $0, $1, $2);
 },
 362e4: $0 => {
  console.log("CLOSE", $0);
 },
 3620030: ($0, $1) => {
  const target = Module.targets.get($0);
  const query = UTF8ToString($1);
  if (Module.pdoDriver && Module.pdoDriver.prepare) {
   const prepared = Module.pdoDriver.prepare(target, query);
   const zval = Module.jsToZval(prepared);
   return zval;
  }
  return null;
 },
 3620282: ($0, $1) => {
  console.log("DO", $0, UTF8ToString($1));
  const target = Module.targets.get($0);
  const query = UTF8ToString($1);
  if (Module.pdoDriver && Module.pdoDriver.doer) {
   return Module.pdoDriver.doer(target, query);
  }
  return 1;
 },
 3620503: $0 => {
  console.log("BEGIN TXN", $0);
  return true;
 },
 3620550: $0 => {
  console.log("COMMIT TXN", $0);
  return true;
 },
 3620598: $0 => {
  console.log("ROLLBACK TXN", $0);
  return true;
 },
 3620648: ($0, $1, $2) => {
  console.log("SET ATTR", $0, $1, $2);
  return true;
 },
 3620702: ($0, $1) => {
  console.log("LAST INSERT ID", $0, UTF8ToString($1));
  return 0;
 },
 3620769: ($0, $1, $2) => {
  console.log("FETCH ERROR FUNC", $0, $1, $2);
 },
 3620818: ($0, $1, $2) => {
  console.log("GET ATTR", $0, $1, $2);
  return 0;
 },
 3620869: $0 => {
  console.log("SHUTDOWN", $0);
 },
 3620902: ($0, $1) => {
  console.log("GET GC", $0, $1);
 },
 3620937: () => Module.targets.getId(globalThis),
 3620982: ($0, $1) => {
  let target = Module.targets.get($0);
  const property = $1;
  if (target instanceof ArrayBuffer) {
   if (!Module.bufferMaps.has(target)) {
    Module.bufferMaps.set(target, new Uint8Array(target));
   }
   target = Module.bufferMaps.get(target);
  }
  if (Array.isArray(target) || ArrayBuffer.isView(target)) {
   if (property >= 0 && property < target.length) {
    return 1;
   }
  }
  return 0;
 },
 3621345: ($0, $1) => {
  let target = Module.targets.get($0);
  const property = $1;
  if (target instanceof ArrayBuffer) {
   if (!Module.bufferMaps.has(target)) {
    Module.bufferMaps.set(target, new Uint8Array(target));
   }
   target = Module.bufferMaps.get(target);
  }
  return Module.jsToZval(target[property]);
 }
};

function __asyncjs__vrzno_await_internal(targetId) {
 return Asyncify.handleAsync((async () => {
  const target = Module.targets.get(targetId);
  const result = await target;
  return Module.jsToZval(result);
 }));
}

function __asyncjs__pdo_vrzno_real_stmt_execute(targetId) {
 return Asyncify.handleAsync((async () => {
  let statement = Module.targets.get(targetId);
  if (!Module.PdoParams.has(statement)) {
   Module.PdoParams.set(statement, []);
  }
  const paramList = Module.PdoParams.get(statement);
  const bound = paramList.length ? statement.bind(...paramList) : statement;
  const result = await bound.run();
  Module.PdoParams.delete(statement);
  if (!result.success) {
   return false;
  }
  return Module.jsToZval(result.results);
 }));
}

function ExitStatus(status) {
 this.name = "ExitStatus";
 this.message = `Program terminated with exit(${status})`;
 this.status = status;
}

var callRuntimeCallbacks = callbacks => {
 while (callbacks.length > 0) {
  callbacks.shift()(Module);
 }
};

function getValue(ptr, type = "i8") {
 if (type.endsWith("*")) type = "*";
 switch (type) {
 case "i1":
  return HEAP8[ptr >>> 0];

 case "i8":
  return HEAP8[ptr >>> 0];

 case "i16":
  return HEAP16[ptr >>> 1];

 case "i32":
  return HEAP32[ptr >>> 2];

 case "i64":
  abort("to do getValue(i64) use WASM_BIGINT");

 case "float":
  return HEAPF32[ptr >>> 2];

 case "double":
  return HEAPF64[ptr >>> 3];

 case "*":
  return HEAPU32[ptr >>> 2];

 default:
  abort(`invalid type for getValue: ${type}`);
 }
}

var ptrToString = ptr => {
 assert(typeof ptr === "number");
 return "0x" + ptr.toString(16).padStart(8, "0");
};

function setValue(ptr, value, type = "i8") {
 if (type.endsWith("*")) type = "*";
 switch (type) {
 case "i1":
  HEAP8[ptr >>> 0] = value;
  break;

 case "i8":
  HEAP8[ptr >>> 0] = value;
  break;

 case "i16":
  HEAP16[ptr >>> 1] = value;
  break;

 case "i32":
  HEAP32[ptr >>> 2] = value;
  break;

 case "i64":
  abort("to do setValue(i64) use WASM_BIGINT");

 case "float":
  HEAPF32[ptr >>> 2] = value;
  break;

 case "double":
  HEAPF64[ptr >>> 3] = value;
  break;

 case "*":
  HEAPU32[ptr >>> 2] = value;
  break;

 default:
  abort(`invalid type for setValue: ${type}`);
 }
}

var warnOnce = text => {
 if (!warnOnce.shown) warnOnce.shown = {};
 if (!warnOnce.shown[text]) {
  warnOnce.shown[text] = 1;
  err(text);
 }
};

function convertI32PairToI53Checked(lo, hi) {
 assert(lo == lo >>> 0 || lo == (lo | 0));
 assert(hi === (hi | 0));
 return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
}

var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;

var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
 idx >>>= 0;
 var endIdx = idx + maxBytesToRead;
 var endPtr = idx;
 while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
 if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
  return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
 }
 var str = "";
 while (idx < endPtr) {
  var u0 = heapOrArray[idx++];
  if (!(u0 & 128)) {
   str += String.fromCharCode(u0);
   continue;
  }
  var u1 = heapOrArray[idx++] & 63;
  if ((u0 & 224) == 192) {
   str += String.fromCharCode((u0 & 31) << 6 | u1);
   continue;
  }
  var u2 = heapOrArray[idx++] & 63;
  if ((u0 & 240) == 224) {
   u0 = (u0 & 15) << 12 | u1 << 6 | u2;
  } else {
   if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte " + ptrToString(u0) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
   u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
  }
  if (u0 < 65536) {
   str += String.fromCharCode(u0);
  } else {
   var ch = u0 - 65536;
   str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
  }
 }
 return str;
};

var UTF8ToString = (ptr, maxBytesToRead) => {
 assert(typeof ptr == "number");
 ptr >>>= 0;
 return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
};

function ___assert_fail(condition, filename, line, func) {
 condition >>>= 0;
 filename >>>= 0;
 func >>>= 0;
 abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [ filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function" ]);
}

var wasmTableMirror = [];

var getWasmTableEntry = funcPtr => {
 var func = wasmTableMirror[funcPtr];
 if (!func) {
  if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
  wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
 }
 assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
 return func;
};

function ___call_sighandler(fp, sig) {
 fp >>>= 0;
 return getWasmTableEntry(fp)(sig);
}

var PATH = {
 isAbs: path => path.charAt(0) === "/",
 splitPath: filename => {
  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  return splitPathRe.exec(filename).slice(1);
 },
 normalizeArray: (parts, allowAboveRoot) => {
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
   var last = parts[i];
   if (last === ".") {
    parts.splice(i, 1);
   } else if (last === "..") {
    parts.splice(i, 1);
    up++;
   } else if (up) {
    parts.splice(i, 1);
    up--;
   }
  }
  if (allowAboveRoot) {
   for (;up; up--) {
    parts.unshift("..");
   }
  }
  return parts;
 },
 normalize: path => {
  var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/";
  path = PATH.normalizeArray(path.split("/").filter((p => !!p)), !isAbsolute).join("/");
  if (!path && !isAbsolute) {
   path = ".";
  }
  if (path && trailingSlash) {
   path += "/";
  }
  return (isAbsolute ? "/" : "") + path;
 },
 dirname: path => {
  var result = PATH.splitPath(path), root = result[0], dir = result[1];
  if (!root && !dir) {
   return ".";
  }
  if (dir) {
   dir = dir.substr(0, dir.length - 1);
  }
  return root + dir;
 },
 basename: path => {
  if (path === "/") return "/";
  path = PATH.normalize(path);
  path = path.replace(/\/$/, "");
  var lastSlash = path.lastIndexOf("/");
  if (lastSlash === -1) return path;
  return path.substr(lastSlash + 1);
 },
 join: function() {
  var paths = Array.prototype.slice.call(arguments);
  return PATH.normalize(paths.join("/"));
 },
 join2: (l, r) => PATH.normalize(l + "/" + r)
};

var initRandomFill = () => {
 if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
  return view => crypto.getRandomValues(view);
 } else abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
};

var randomFill = view => (randomFill = initRandomFill())(view);

var PATH_FS = {
 resolve: function() {
  var resolvedPath = "", resolvedAbsolute = false;
  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
   var path = i >= 0 ? arguments[i] : FS.cwd();
   if (typeof path != "string") {
    throw new TypeError("Arguments to path.resolve must be strings");
   } else if (!path) {
    return "";
   }
   resolvedPath = path + "/" + resolvedPath;
   resolvedAbsolute = PATH.isAbs(path);
  }
  resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter((p => !!p)), !resolvedAbsolute).join("/");
  return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
 },
 relative: (from, to) => {
  from = PATH_FS.resolve(from).substr(1);
  to = PATH_FS.resolve(to).substr(1);
  function trim(arr) {
   var start = 0;
   for (;start < arr.length; start++) {
    if (arr[start] !== "") break;
   }
   var end = arr.length - 1;
   for (;end >= 0; end--) {
    if (arr[end] !== "") break;
   }
   if (start > end) return [];
   return arr.slice(start, end - start + 1);
  }
  var fromParts = trim(from.split("/"));
  var toParts = trim(to.split("/"));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
   if (fromParts[i] !== toParts[i]) {
    samePartsLength = i;
    break;
   }
  }
  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
   outputParts.push("..");
  }
  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join("/");
 }
};

var FS_stdin_getChar_buffer = [];

var lengthBytesUTF8 = str => {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var c = str.charCodeAt(i);
  if (c <= 127) {
   len++;
  } else if (c <= 2047) {
   len += 2;
  } else if (c >= 55296 && c <= 57343) {
   len += 4;
   ++i;
  } else {
   len += 3;
  }
 }
 return len;
};

var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
 outIdx >>>= 0;
 assert(typeof str === "string");
 if (!(maxBytesToWrite > 0)) return 0;
 var startIdx = outIdx;
 var endIdx = outIdx + maxBytesToWrite - 1;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) {
   var u1 = str.charCodeAt(++i);
   u = 65536 + ((u & 1023) << 10) | u1 & 1023;
  }
  if (u <= 127) {
   if (outIdx >= endIdx) break;
   heap[outIdx++ >>> 0] = u;
  } else if (u <= 2047) {
   if (outIdx + 1 >= endIdx) break;
   heap[outIdx++ >>> 0] = 192 | u >> 6;
   heap[outIdx++ >>> 0] = 128 | u & 63;
  } else if (u <= 65535) {
   if (outIdx + 2 >= endIdx) break;
   heap[outIdx++ >>> 0] = 224 | u >> 12;
   heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
   heap[outIdx++ >>> 0] = 128 | u & 63;
  } else {
   if (outIdx + 3 >= endIdx) break;
   if (u > 1114111) warnOnce("Invalid Unicode code point " + ptrToString(u) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
   heap[outIdx++ >>> 0] = 240 | u >> 18;
   heap[outIdx++ >>> 0] = 128 | u >> 12 & 63;
   heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
   heap[outIdx++ >>> 0] = 128 | u & 63;
  }
 }
 heap[outIdx >>> 0] = 0;
 return outIdx - startIdx;
};

function intArrayFromString(stringy, dontAddNull, length) {
 var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
 var u8array = new Array(len);
 var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
 if (dontAddNull) u8array.length = numBytesWritten;
 return u8array;
}

var FS_stdin_getChar = () => {
 if (!FS_stdin_getChar_buffer.length) {
  var result = null;
  if (typeof window != "undefined" && typeof window.prompt == "function") {
   result = window.prompt("Input: ");
   if (result !== null) {
    result += "\n";
   }
  } else if (typeof readline == "function") {
   result = readline();
   if (result !== null) {
    result += "\n";
   }
  }
  if (!result) {
   return null;
  }
  FS_stdin_getChar_buffer = intArrayFromString(result, true);
 }
 return FS_stdin_getChar_buffer.shift();
};

var TTY = {
 ttys: [],
 init: function() {},
 shutdown: function() {},
 register: function(dev, ops) {
  TTY.ttys[dev] = {
   input: [],
   output: [],
   ops: ops
  };
  FS.registerDevice(dev, TTY.stream_ops);
 },
 stream_ops: {
  open: function(stream) {
   var tty = TTY.ttys[stream.node.rdev];
   if (!tty) {
    throw new FS.ErrnoError(43);
   }
   stream.tty = tty;
   stream.seekable = false;
  },
  close: function(stream) {
   stream.tty.ops.fsync(stream.tty);
  },
  fsync: function(stream) {
   stream.tty.ops.fsync(stream.tty);
  },
  read: function(stream, buffer, offset, length, pos) {
   if (!stream.tty || !stream.tty.ops.get_char) {
    throw new FS.ErrnoError(60);
   }
   var bytesRead = 0;
   for (var i = 0; i < length; i++) {
    var result;
    try {
     result = stream.tty.ops.get_char(stream.tty);
    } catch (e) {
     throw new FS.ErrnoError(29);
    }
    if (result === undefined && bytesRead === 0) {
     throw new FS.ErrnoError(6);
    }
    if (result === null || result === undefined) break;
    bytesRead++;
    buffer[offset + i] = result;
   }
   if (bytesRead) {
    stream.node.timestamp = Date.now();
   }
   return bytesRead;
  },
  write: function(stream, buffer, offset, length, pos) {
   if (!stream.tty || !stream.tty.ops.put_char) {
    throw new FS.ErrnoError(60);
   }
   try {
    for (var i = 0; i < length; i++) {
     stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
    }
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
   if (length) {
    stream.node.timestamp = Date.now();
   }
   return i;
  }
 },
 default_tty_ops: {
  get_char: function(tty) {
   return FS_stdin_getChar();
  },
  put_char: function(tty, val) {
   if (val === null || val === 10) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  fsync: function(tty) {
   if (tty.output && tty.output.length > 0) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  },
  ioctl_tcgets: function(tty) {
   return {
    c_iflag: 25856,
    c_oflag: 5,
    c_cflag: 191,
    c_lflag: 35387,
    c_cc: [ 3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
   };
  },
  ioctl_tcsets: function(tty, optional_actions, data) {
   return 0;
  },
  ioctl_tiocgwinsz: function(tty) {
   return [ 24, 80 ];
  }
 },
 default_tty1_ops: {
  put_char: function(tty, val) {
   if (val === null || val === 10) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  fsync: function(tty) {
   if (tty.output && tty.output.length > 0) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  }
 }
};

var zeroMemory = (address, size) => {
 HEAPU8.fill(0, address, address + size);
 return address;
};

var alignMemory = (size, alignment) => {
 assert(alignment, "alignment argument is required");
 return Math.ceil(size / alignment) * alignment;
};

var mmapAlloc = size => {
 size = alignMemory(size, 65536);
 var ptr = _emscripten_builtin_memalign(65536, size);
 if (!ptr) return 0;
 return zeroMemory(ptr, size);
};

var MEMFS = {
 ops_table: null,
 mount(mount) {
  return MEMFS.createNode(null, "/", 16384 | 511, 0);
 },
 createNode(parent, name, mode, dev) {
  if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
   throw new FS.ErrnoError(63);
  }
  if (!MEMFS.ops_table) {
   MEMFS.ops_table = {
    dir: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr,
      lookup: MEMFS.node_ops.lookup,
      mknod: MEMFS.node_ops.mknod,
      rename: MEMFS.node_ops.rename,
      unlink: MEMFS.node_ops.unlink,
      rmdir: MEMFS.node_ops.rmdir,
      readdir: MEMFS.node_ops.readdir,
      symlink: MEMFS.node_ops.symlink
     },
     stream: {
      llseek: MEMFS.stream_ops.llseek
     }
    },
    file: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr
     },
     stream: {
      llseek: MEMFS.stream_ops.llseek,
      read: MEMFS.stream_ops.read,
      write: MEMFS.stream_ops.write,
      allocate: MEMFS.stream_ops.allocate,
      mmap: MEMFS.stream_ops.mmap,
      msync: MEMFS.stream_ops.msync
     }
    },
    link: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr,
      readlink: MEMFS.node_ops.readlink
     },
     stream: {}
    },
    chrdev: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr
     },
     stream: FS.chrdev_stream_ops
    }
   };
  }
  var node = FS.createNode(parent, name, mode, dev);
  if (FS.isDir(node.mode)) {
   node.node_ops = MEMFS.ops_table.dir.node;
   node.stream_ops = MEMFS.ops_table.dir.stream;
   node.contents = {};
  } else if (FS.isFile(node.mode)) {
   node.node_ops = MEMFS.ops_table.file.node;
   node.stream_ops = MEMFS.ops_table.file.stream;
   node.usedBytes = 0;
   node.contents = null;
  } else if (FS.isLink(node.mode)) {
   node.node_ops = MEMFS.ops_table.link.node;
   node.stream_ops = MEMFS.ops_table.link.stream;
  } else if (FS.isChrdev(node.mode)) {
   node.node_ops = MEMFS.ops_table.chrdev.node;
   node.stream_ops = MEMFS.ops_table.chrdev.stream;
  }
  node.timestamp = Date.now();
  if (parent) {
   parent.contents[name] = node;
   parent.timestamp = node.timestamp;
  }
  return node;
 },
 getFileDataAsTypedArray(node) {
  if (!node.contents) return new Uint8Array(0);
  if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
  return new Uint8Array(node.contents);
 },
 expandFileStorage(node, newCapacity) {
  var prevCapacity = node.contents ? node.contents.length : 0;
  if (prevCapacity >= newCapacity) return;
  var CAPACITY_DOUBLING_MAX = 1024 * 1024;
  newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
  if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
  var oldContents = node.contents;
  node.contents = new Uint8Array(newCapacity);
  if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
 },
 resizeFileStorage(node, newSize) {
  if (node.usedBytes == newSize) return;
  if (newSize == 0) {
   node.contents = null;
   node.usedBytes = 0;
  } else {
   var oldContents = node.contents;
   node.contents = new Uint8Array(newSize);
   if (oldContents) {
    node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
   }
   node.usedBytes = newSize;
  }
 },
 node_ops: {
  getattr(node) {
   var attr = {};
   attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
   attr.ino = node.id;
   attr.mode = node.mode;
   attr.nlink = 1;
   attr.uid = 0;
   attr.gid = 0;
   attr.rdev = node.rdev;
   if (FS.isDir(node.mode)) {
    attr.size = 4096;
   } else if (FS.isFile(node.mode)) {
    attr.size = node.usedBytes;
   } else if (FS.isLink(node.mode)) {
    attr.size = node.link.length;
   } else {
    attr.size = 0;
   }
   attr.atime = new Date(node.timestamp);
   attr.mtime = new Date(node.timestamp);
   attr.ctime = new Date(node.timestamp);
   attr.blksize = 4096;
   attr.blocks = Math.ceil(attr.size / attr.blksize);
   return attr;
  },
  setattr(node, attr) {
   if (attr.mode !== undefined) {
    node.mode = attr.mode;
   }
   if (attr.timestamp !== undefined) {
    node.timestamp = attr.timestamp;
   }
   if (attr.size !== undefined) {
    MEMFS.resizeFileStorage(node, attr.size);
   }
  },
  lookup(parent, name) {
   throw FS.genericErrors[44];
  },
  mknod(parent, name, mode, dev) {
   return MEMFS.createNode(parent, name, mode, dev);
  },
  rename(old_node, new_dir, new_name) {
   if (FS.isDir(old_node.mode)) {
    var new_node;
    try {
     new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (new_node) {
     for (var i in new_node.contents) {
      throw new FS.ErrnoError(55);
     }
    }
   }
   delete old_node.parent.contents[old_node.name];
   old_node.parent.timestamp = Date.now();
   old_node.name = new_name;
   new_dir.contents[new_name] = old_node;
   new_dir.timestamp = old_node.parent.timestamp;
   old_node.parent = new_dir;
  },
  unlink(parent, name) {
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  rmdir(parent, name) {
   var node = FS.lookupNode(parent, name);
   for (var i in node.contents) {
    throw new FS.ErrnoError(55);
   }
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  readdir(node) {
   var entries = [ ".", ".." ];
   for (var key in node.contents) {
    if (!node.contents.hasOwnProperty(key)) {
     continue;
    }
    entries.push(key);
   }
   return entries;
  },
  symlink(parent, newname, oldpath) {
   var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
   node.link = oldpath;
   return node;
  },
  readlink(node) {
   if (!FS.isLink(node.mode)) {
    throw new FS.ErrnoError(28);
   }
   return node.link;
  }
 },
 stream_ops: {
  read(stream, buffer, offset, length, position) {
   var contents = stream.node.contents;
   if (position >= stream.node.usedBytes) return 0;
   var size = Math.min(stream.node.usedBytes - position, length);
   assert(size >= 0);
   if (size > 8 && contents.subarray) {
    buffer.set(contents.subarray(position, position + size), offset);
   } else {
    for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
   }
   return size;
  },
  write(stream, buffer, offset, length, position, canOwn) {
   assert(!(buffer instanceof ArrayBuffer));
   if (buffer.buffer === HEAP8.buffer) {
    canOwn = false;
   }
   if (!length) return 0;
   var node = stream.node;
   node.timestamp = Date.now();
   if (buffer.subarray && (!node.contents || node.contents.subarray)) {
    if (canOwn) {
     assert(position === 0, "canOwn must imply no weird position inside the file");
     node.contents = buffer.subarray(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (node.usedBytes === 0 && position === 0) {
     node.contents = buffer.slice(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (position + length <= node.usedBytes) {
     node.contents.set(buffer.subarray(offset, offset + length), position);
     return length;
    }
   }
   MEMFS.expandFileStorage(node, position + length);
   if (node.contents.subarray && buffer.subarray) {
    node.contents.set(buffer.subarray(offset, offset + length), position);
   } else {
    for (var i = 0; i < length; i++) {
     node.contents[position + i] = buffer[offset + i];
    }
   }
   node.usedBytes = Math.max(node.usedBytes, position + length);
   return length;
  },
  llseek(stream, offset, whence) {
   var position = offset;
   if (whence === 1) {
    position += stream.position;
   } else if (whence === 2) {
    if (FS.isFile(stream.node.mode)) {
     position += stream.node.usedBytes;
    }
   }
   if (position < 0) {
    throw new FS.ErrnoError(28);
   }
   return position;
  },
  allocate(stream, offset, length) {
   MEMFS.expandFileStorage(stream.node, offset + length);
   stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
  },
  mmap(stream, length, position, prot, flags) {
   if (!FS.isFile(stream.node.mode)) {
    throw new FS.ErrnoError(43);
   }
   var ptr;
   var allocated;
   var contents = stream.node.contents;
   if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
    allocated = false;
    ptr = contents.byteOffset;
   } else {
    if (position > 0 || position + length < contents.length) {
     if (contents.subarray) {
      contents = contents.subarray(position, position + length);
     } else {
      contents = Array.prototype.slice.call(contents, position, position + length);
     }
    }
    allocated = true;
    ptr = mmapAlloc(length);
    if (!ptr) {
     throw new FS.ErrnoError(48);
    }
    HEAP8.set(contents, ptr >>> 0);
   }
   return {
    ptr: ptr,
    allocated: allocated
   };
  },
  msync(stream, buffer, offset, length, mmapFlags) {
   MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
   return 0;
  }
 }
};

var asyncLoad = (url, onload, onerror, noRunDep) => {
 var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : "";
 readAsync(url, (arrayBuffer => {
  assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
  onload(new Uint8Array(arrayBuffer));
  if (dep) removeRunDependency(dep);
 }), (event => {
  if (onerror) {
   onerror();
  } else {
   throw `Loading data file "${url}" failed.`;
  }
 }));
 if (dep) addRunDependency(dep);
};

var preloadPlugins = Module["preloadPlugins"] || [];

function FS_handledByPreloadPlugin(byteArray, fullname, finish, onerror) {
 if (typeof Browser != "undefined") Browser.init();
 var handled = false;
 preloadPlugins.forEach((function(plugin) {
  if (handled) return;
  if (plugin["canHandle"](fullname)) {
   plugin["handle"](byteArray, fullname, finish, onerror);
   handled = true;
  }
 }));
 return handled;
}

function FS_createPreloadedFile(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
 var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
 var dep = getUniqueRunDependency(`cp ${fullname}`);
 function processData(byteArray) {
  function finish(byteArray) {
   if (preFinish) preFinish();
   if (!dontCreateFile) {
    FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
   }
   if (onload) onload();
   removeRunDependency(dep);
  }
  if (FS_handledByPreloadPlugin(byteArray, fullname, finish, (() => {
   if (onerror) onerror();
   removeRunDependency(dep);
  }))) {
   return;
  }
  finish(byteArray);
 }
 addRunDependency(dep);
 if (typeof url == "string") {
  asyncLoad(url, (byteArray => processData(byteArray)), onerror);
 } else {
  processData(url);
 }
}

function FS_modeStringToFlags(str) {
 var flagModes = {
  "r": 0,
  "r+": 2,
  "w": 512 | 64 | 1,
  "w+": 512 | 64 | 2,
  "a": 1024 | 64 | 1,
  "a+": 1024 | 64 | 2
 };
 var flags = flagModes[str];
 if (typeof flags == "undefined") {
  throw new Error(`Unknown file open mode: ${str}`);
 }
 return flags;
}

function FS_getMode(canRead, canWrite) {
 var mode = 0;
 if (canRead) mode |= 292 | 73;
 if (canWrite) mode |= 146;
 return mode;
}

var IDBFS = {
 dbs: {},
 indexedDB: () => {
  if (typeof indexedDB != "undefined") return indexedDB;
  var ret = null;
  if (typeof window == "object") ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  assert(ret, "IDBFS used, but indexedDB not supported");
  return ret;
 },
 DB_VERSION: 21,
 DB_STORE_NAME: "FILE_DATA",
 mount: function(mount) {
  return MEMFS.mount.apply(null, arguments);
 },
 syncfs: (mount, populate, callback) => {
  IDBFS.getLocalSet(mount, ((err, local) => {
   if (err) return callback(err);
   IDBFS.getRemoteSet(mount, ((err, remote) => {
    if (err) return callback(err);
    var src = populate ? remote : local;
    var dst = populate ? local : remote;
    IDBFS.reconcile(src, dst, callback);
   }));
  }));
 },
 quit: () => {
  Object.values(IDBFS.dbs).forEach((value => value.close()));
  IDBFS.dbs = {};
 },
 getDB: (name, callback) => {
  var db = IDBFS.dbs[name];
  if (db) {
   return callback(null, db);
  }
  var req;
  try {
   req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
  } catch (e) {
   return callback(e);
  }
  if (!req) {
   return callback("Unable to connect to IndexedDB");
  }
  req.onupgradeneeded = e => {
   var db = e.target.result;
   var transaction = e.target.transaction;
   var fileStore;
   if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
    fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
   } else {
    fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
   }
   if (!fileStore.indexNames.contains("timestamp")) {
    fileStore.createIndex("timestamp", "timestamp", {
     unique: false
    });
   }
  };
  req.onsuccess = () => {
   db = req.result;
   IDBFS.dbs[name] = db;
   callback(null, db);
  };
  req.onerror = e => {
   callback(e.target.error);
   e.preventDefault();
  };
 },
 getLocalSet: (mount, callback) => {
  var entries = {};
  function isRealDir(p) {
   return p !== "." && p !== "..";
  }
  function toAbsolute(root) {
   return p => PATH.join2(root, p);
  }
  var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
  while (check.length) {
   var path = check.pop();
   var stat;
   try {
    stat = FS.stat(path);
   } catch (e) {
    return callback(e);
   }
   if (FS.isDir(stat.mode)) {
    check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
   }
   entries[path] = {
    "timestamp": stat.mtime
   };
  }
  return callback(null, {
   type: "local",
   entries: entries
  });
 },
 getRemoteSet: (mount, callback) => {
  var entries = {};
  IDBFS.getDB(mount.mountpoint, ((err, db) => {
   if (err) return callback(err);
   try {
    var transaction = db.transaction([ IDBFS.DB_STORE_NAME ], "readonly");
    transaction.onerror = e => {
     callback(e.target.error);
     e.preventDefault();
    };
    var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
    var index = store.index("timestamp");
    index.openKeyCursor().onsuccess = event => {
     var cursor = event.target.result;
     if (!cursor) {
      return callback(null, {
       type: "remote",
       db: db,
       entries: entries
      });
     }
     entries[cursor.primaryKey] = {
      "timestamp": cursor.key
     };
     cursor.continue();
    };
   } catch (e) {
    return callback(e);
   }
  }));
 },
 loadLocalEntry: (path, callback) => {
  var stat, node;
  try {
   var lookup = FS.lookupPath(path);
   node = lookup.node;
   stat = FS.stat(path);
  } catch (e) {
   return callback(e);
  }
  if (FS.isDir(stat.mode)) {
   return callback(null, {
    "timestamp": stat.mtime,
    "mode": stat.mode
   });
  } else if (FS.isFile(stat.mode)) {
   node.contents = MEMFS.getFileDataAsTypedArray(node);
   return callback(null, {
    "timestamp": stat.mtime,
    "mode": stat.mode,
    "contents": node.contents
   });
  } else {
   return callback(new Error("node type not supported"));
  }
 },
 storeLocalEntry: (path, entry, callback) => {
  try {
   if (FS.isDir(entry["mode"])) {
    FS.mkdirTree(path, entry["mode"]);
   } else if (FS.isFile(entry["mode"])) {
    FS.writeFile(path, entry["contents"], {
     canOwn: true
    });
   } else {
    return callback(new Error("node type not supported"));
   }
   FS.chmod(path, entry["mode"]);
   FS.utime(path, entry["timestamp"], entry["timestamp"]);
  } catch (e) {
   return callback(e);
  }
  callback(null);
 },
 removeLocalEntry: (path, callback) => {
  try {
   var stat = FS.stat(path);
   if (FS.isDir(stat.mode)) {
    FS.rmdir(path);
   } else if (FS.isFile(stat.mode)) {
    FS.unlink(path);
   }
  } catch (e) {
   return callback(e);
  }
  callback(null);
 },
 loadRemoteEntry: (store, path, callback) => {
  var req = store.get(path);
  req.onsuccess = event => {
   callback(null, event.target.result);
  };
  req.onerror = e => {
   callback(e.target.error);
   e.preventDefault();
  };
 },
 storeRemoteEntry: (store, path, entry, callback) => {
  try {
   var req = store.put(entry, path);
  } catch (e) {
   callback(e);
   return;
  }
  req.onsuccess = () => {
   callback(null);
  };
  req.onerror = e => {
   callback(e.target.error);
   e.preventDefault();
  };
 },
 removeRemoteEntry: (store, path, callback) => {
  var req = store.delete(path);
  req.onsuccess = () => {
   callback(null);
  };
  req.onerror = e => {
   callback(e.target.error);
   e.preventDefault();
  };
 },
 reconcile: (src, dst, callback) => {
  var total = 0;
  var create = [];
  Object.keys(src.entries).forEach((function(key) {
   var e = src.entries[key];
   var e2 = dst.entries[key];
   if (!e2 || e["timestamp"].getTime() != e2["timestamp"].getTime()) {
    create.push(key);
    total++;
   }
  }));
  var remove = [];
  Object.keys(dst.entries).forEach((function(key) {
   if (!src.entries[key]) {
    remove.push(key);
    total++;
   }
  }));
  if (!total) {
   return callback(null);
  }
  var errored = false;
  var db = src.type === "remote" ? src.db : dst.db;
  var transaction = db.transaction([ IDBFS.DB_STORE_NAME ], "readwrite");
  var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
  function done(err) {
   if (err && !errored) {
    errored = true;
    return callback(err);
   }
  }
  transaction.onerror = e => {
   done(this.error);
   e.preventDefault();
  };
  transaction.oncomplete = e => {
   if (!errored) {
    callback(null);
   }
  };
  create.sort().forEach((path => {
   if (dst.type === "local") {
    IDBFS.loadRemoteEntry(store, path, ((err, entry) => {
     if (err) return done(err);
     IDBFS.storeLocalEntry(path, entry, done);
    }));
   } else {
    IDBFS.loadLocalEntry(path, ((err, entry) => {
     if (err) return done(err);
     IDBFS.storeRemoteEntry(store, path, entry, done);
    }));
   }
  }));
  remove.sort().reverse().forEach((path => {
   if (dst.type === "local") {
    IDBFS.removeLocalEntry(path, done);
   } else {
    IDBFS.removeRemoteEntry(store, path, done);
   }
  }));
 }
};

var ERRNO_MESSAGES = {
 0: "Success",
 1: "Arg list too long",
 2: "Permission denied",
 3: "Address already in use",
 4: "Address not available",
 5: "Address family not supported by protocol family",
 6: "No more processes",
 7: "Socket already connected",
 8: "Bad file number",
 9: "Trying to read unreadable message",
 10: "Mount device busy",
 11: "Operation canceled",
 12: "No children",
 13: "Connection aborted",
 14: "Connection refused",
 15: "Connection reset by peer",
 16: "File locking deadlock error",
 17: "Destination address required",
 18: "Math arg out of domain of func",
 19: "Quota exceeded",
 20: "File exists",
 21: "Bad address",
 22: "File too large",
 23: "Host is unreachable",
 24: "Identifier removed",
 25: "Illegal byte sequence",
 26: "Connection already in progress",
 27: "Interrupted system call",
 28: "Invalid argument",
 29: "I/O error",
 30: "Socket is already connected",
 31: "Is a directory",
 32: "Too many symbolic links",
 33: "Too many open files",
 34: "Too many links",
 35: "Message too long",
 36: "Multihop attempted",
 37: "File or path name too long",
 38: "Network interface is not configured",
 39: "Connection reset by network",
 40: "Network is unreachable",
 41: "Too many open files in system",
 42: "No buffer space available",
 43: "No such device",
 44: "No such file or directory",
 45: "Exec format error",
 46: "No record locks available",
 47: "The link has been severed",
 48: "Not enough core",
 49: "No message of desired type",
 50: "Protocol not available",
 51: "No space left on device",
 52: "Function not implemented",
 53: "Socket is not connected",
 54: "Not a directory",
 55: "Directory not empty",
 56: "State not recoverable",
 57: "Socket operation on non-socket",
 59: "Not a typewriter",
 60: "No such device or address",
 61: "Value too large for defined data type",
 62: "Previous owner died",
 63: "Not super-user",
 64: "Broken pipe",
 65: "Protocol error",
 66: "Unknown protocol",
 67: "Protocol wrong type for socket",
 68: "Math result not representable",
 69: "Read only file system",
 70: "Illegal seek",
 71: "No such process",
 72: "Stale file handle",
 73: "Connection timed out",
 74: "Text file busy",
 75: "Cross-device link",
 100: "Device not a stream",
 101: "Bad font file fmt",
 102: "Invalid slot",
 103: "Invalid request code",
 104: "No anode",
 105: "Block device required",
 106: "Channel number out of range",
 107: "Level 3 halted",
 108: "Level 3 reset",
 109: "Link number out of range",
 110: "Protocol driver not attached",
 111: "No CSI structure available",
 112: "Level 2 halted",
 113: "Invalid exchange",
 114: "Invalid request descriptor",
 115: "Exchange full",
 116: "No data (for no delay io)",
 117: "Timer expired",
 118: "Out of streams resources",
 119: "Machine is not on the network",
 120: "Package not installed",
 121: "The object is remote",
 122: "Advertise error",
 123: "Srmount error",
 124: "Communication error on send",
 125: "Cross mount point (not really error)",
 126: "Given log. name not unique",
 127: "f.d. invalid for this operation",
 128: "Remote address changed",
 129: "Can   access a needed shared lib",
 130: "Accessing a corrupted shared lib",
 131: ".lib section in a.out corrupted",
 132: "Attempting to link in too many libs",
 133: "Attempting to exec a shared library",
 135: "Streams pipe error",
 136: "Too many users",
 137: "Socket type not supported",
 138: "Not supported",
 139: "Protocol family not supported",
 140: "Can't send after socket shutdown",
 141: "Too many references",
 142: "Host is down",
 148: "No medium (in tape drive)",
 156: "Level 2 not synchronized"
};

var ERRNO_CODES = {};

function demangle(func) {
 warnOnce("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling");
 return func;
}

function demangleAll(text) {
 var regex = /\b_Z[\w\d_]+/g;
 return text.replace(regex, (function(x) {
  var y = demangle(x);
  return x === y ? x : y + " [" + x + "]";
 }));
}

var FS = {
 root: null,
 mounts: [],
 devices: {},
 streams: [],
 nextInode: 1,
 nameTable: null,
 currentPath: "/",
 initialized: false,
 ignorePermissions: true,
 ErrnoError: null,
 genericErrors: {},
 filesystems: null,
 syncFSRequests: 0,
 lookupPath: (path, opts = {}) => {
  path = PATH_FS.resolve(path);
  if (!path) return {
   path: "",
   node: null
  };
  var defaults = {
   follow_mount: true,
   recurse_count: 0
  };
  opts = Object.assign(defaults, opts);
  if (opts.recurse_count > 8) {
   throw new FS.ErrnoError(32);
  }
  var parts = path.split("/").filter((p => !!p));
  var current = FS.root;
  var current_path = "/";
  for (var i = 0; i < parts.length; i++) {
   var islast = i === parts.length - 1;
   if (islast && opts.parent) {
    break;
   }
   current = FS.lookupNode(current, parts[i]);
   current_path = PATH.join2(current_path, parts[i]);
   if (FS.isMountpoint(current)) {
    if (!islast || islast && opts.follow_mount) {
     current = current.mounted.root;
    }
   }
   if (!islast || opts.follow) {
    var count = 0;
    while (FS.isLink(current.mode)) {
     var link = FS.readlink(current_path);
     current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
     var lookup = FS.lookupPath(current_path, {
      recurse_count: opts.recurse_count + 1
     });
     current = lookup.node;
     if (count++ > 40) {
      throw new FS.ErrnoError(32);
     }
    }
   }
  }
  return {
   path: current_path,
   node: current
  };
 },
 getPath: node => {
  var path;
  while (true) {
   if (FS.isRoot(node)) {
    var mount = node.mount.mountpoint;
    if (!path) return mount;
    return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path;
   }
   path = path ? `${node.name}/${path}` : node.name;
   node = node.parent;
  }
 },
 hashName: (parentid, name) => {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
   hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
  }
  return (parentid + hash >>> 0) % FS.nameTable.length;
 },
 hashAddNode: node => {
  var hash = FS.hashName(node.parent.id, node.name);
  node.name_next = FS.nameTable[hash];
  FS.nameTable[hash] = node;
 },
 hashRemoveNode: node => {
  var hash = FS.hashName(node.parent.id, node.name);
  if (FS.nameTable[hash] === node) {
   FS.nameTable[hash] = node.name_next;
  } else {
   var current = FS.nameTable[hash];
   while (current) {
    if (current.name_next === node) {
     current.name_next = node.name_next;
     break;
    }
    current = current.name_next;
   }
  }
 },
 lookupNode: (parent, name) => {
  var errCode = FS.mayLookup(parent);
  if (errCode) {
   throw new FS.ErrnoError(errCode, parent);
  }
  var hash = FS.hashName(parent.id, name);
  for (var node = FS.nameTable[hash]; node; node = node.name_next) {
   var nodeName = node.name;
   if (node.parent.id === parent.id && nodeName === name) {
    return node;
   }
  }
  return FS.lookup(parent, name);
 },
 createNode: (parent, name, mode, rdev) => {
  assert(typeof parent == "object");
  var node = new FS.FSNode(parent, name, mode, rdev);
  FS.hashAddNode(node);
  return node;
 },
 destroyNode: node => {
  FS.hashRemoveNode(node);
 },
 isRoot: node => node === node.parent,
 isMountpoint: node => !!node.mounted,
 isFile: mode => (mode & 61440) === 32768,
 isDir: mode => (mode & 61440) === 16384,
 isLink: mode => (mode & 61440) === 40960,
 isChrdev: mode => (mode & 61440) === 8192,
 isBlkdev: mode => (mode & 61440) === 24576,
 isFIFO: mode => (mode & 61440) === 4096,
 isSocket: mode => (mode & 49152) === 49152,
 flagsToPermissionString: flag => {
  var perms = [ "r", "w", "rw" ][flag & 3];
  if (flag & 512) {
   perms += "w";
  }
  return perms;
 },
 nodePermissions: (node, perms) => {
  if (FS.ignorePermissions) {
   return 0;
  }
  if (perms.includes("r") && !(node.mode & 292)) {
   return 2;
  } else if (perms.includes("w") && !(node.mode & 146)) {
   return 2;
  } else if (perms.includes("x") && !(node.mode & 73)) {
   return 2;
  }
  return 0;
 },
 mayLookup: dir => {
  var errCode = FS.nodePermissions(dir, "x");
  if (errCode) return errCode;
  if (!dir.node_ops.lookup) return 2;
  return 0;
 },
 mayCreate: (dir, name) => {
  try {
   var node = FS.lookupNode(dir, name);
   return 20;
  } catch (e) {}
  return FS.nodePermissions(dir, "wx");
 },
 mayDelete: (dir, name, isdir) => {
  var node;
  try {
   node = FS.lookupNode(dir, name);
  } catch (e) {
   return e.errno;
  }
  var errCode = FS.nodePermissions(dir, "wx");
  if (errCode) {
   return errCode;
  }
  if (isdir) {
   if (!FS.isDir(node.mode)) {
    return 54;
   }
   if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
    return 10;
   }
  } else {
   if (FS.isDir(node.mode)) {
    return 31;
   }
  }
  return 0;
 },
 mayOpen: (node, flags) => {
  if (!node) {
   return 44;
  }
  if (FS.isLink(node.mode)) {
   return 32;
  } else if (FS.isDir(node.mode)) {
   if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
    return 31;
   }
  }
  return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
 },
 MAX_OPEN_FDS: 4096,
 nextfd: () => {
  for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
   if (!FS.streams[fd]) {
    return fd;
   }
  }
  throw new FS.ErrnoError(33);
 },
 getStreamChecked: fd => {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  return stream;
 },
 getStream: fd => FS.streams[fd],
 createStream: (stream, fd = -1) => {
  if (!FS.FSStream) {
   FS.FSStream = function() {
    this.shared = {};
   };
   FS.FSStream.prototype = {};
   Object.defineProperties(FS.FSStream.prototype, {
    object: {
     get() {
      return this.node;
     },
     set(val) {
      this.node = val;
     }
    },
    isRead: {
     get() {
      return (this.flags & 2097155) !== 1;
     }
    },
    isWrite: {
     get() {
      return (this.flags & 2097155) !== 0;
     }
    },
    isAppend: {
     get() {
      return this.flags & 1024;
     }
    },
    flags: {
     get() {
      return this.shared.flags;
     },
     set(val) {
      this.shared.flags = val;
     }
    },
    position: {
     get() {
      return this.shared.position;
     },
     set(val) {
      this.shared.position = val;
     }
    }
   });
  }
  stream = Object.assign(new FS.FSStream, stream);
  if (fd == -1) {
   fd = FS.nextfd();
  }
  stream.fd = fd;
  FS.streams[fd] = stream;
  return stream;
 },
 closeStream: fd => {
  FS.streams[fd] = null;
 },
 chrdev_stream_ops: {
  open: stream => {
   var device = FS.getDevice(stream.node.rdev);
   stream.stream_ops = device.stream_ops;
   if (stream.stream_ops.open) {
    stream.stream_ops.open(stream);
   }
  },
  llseek: () => {
   throw new FS.ErrnoError(70);
  }
 },
 major: dev => dev >> 8,
 minor: dev => dev & 255,
 makedev: (ma, mi) => ma << 8 | mi,
 registerDevice: (dev, ops) => {
  FS.devices[dev] = {
   stream_ops: ops
  };
 },
 getDevice: dev => FS.devices[dev],
 getMounts: mount => {
  var mounts = [];
  var check = [ mount ];
  while (check.length) {
   var m = check.pop();
   mounts.push(m);
   check.push.apply(check, m.mounts);
  }
  return mounts;
 },
 syncfs: (populate, callback) => {
  if (typeof populate == "function") {
   callback = populate;
   populate = false;
  }
  FS.syncFSRequests++;
  if (FS.syncFSRequests > 1) {
   err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
  }
  var mounts = FS.getMounts(FS.root.mount);
  var completed = 0;
  function doCallback(errCode) {
   assert(FS.syncFSRequests > 0);
   FS.syncFSRequests--;
   return callback(errCode);
  }
  function done(errCode) {
   if (errCode) {
    if (!done.errored) {
     done.errored = true;
     return doCallback(errCode);
    }
    return;
   }
   if (++completed >= mounts.length) {
    doCallback(null);
   }
  }
  mounts.forEach((mount => {
   if (!mount.type.syncfs) {
    return done(null);
   }
   mount.type.syncfs(mount, populate, done);
  }));
 },
 mount: (type, opts, mountpoint) => {
  if (typeof type == "string") {
   throw type;
  }
  var root = mountpoint === "/";
  var pseudo = !mountpoint;
  var node;
  if (root && FS.root) {
   throw new FS.ErrnoError(10);
  } else if (!root && !pseudo) {
   var lookup = FS.lookupPath(mountpoint, {
    follow_mount: false
   });
   mountpoint = lookup.path;
   node = lookup.node;
   if (FS.isMountpoint(node)) {
    throw new FS.ErrnoError(10);
   }
   if (!FS.isDir(node.mode)) {
    throw new FS.ErrnoError(54);
   }
  }
  var mount = {
   type: type,
   opts: opts,
   mountpoint: mountpoint,
   mounts: []
  };
  var mountRoot = type.mount(mount);
  mountRoot.mount = mount;
  mount.root = mountRoot;
  if (root) {
   FS.root = mountRoot;
  } else if (node) {
   node.mounted = mount;
   if (node.mount) {
    node.mount.mounts.push(mount);
   }
  }
  return mountRoot;
 },
 unmount: mountpoint => {
  var lookup = FS.lookupPath(mountpoint, {
   follow_mount: false
  });
  if (!FS.isMountpoint(lookup.node)) {
   throw new FS.ErrnoError(28);
  }
  var node = lookup.node;
  var mount = node.mounted;
  var mounts = FS.getMounts(mount);
  Object.keys(FS.nameTable).forEach((hash => {
   var current = FS.nameTable[hash];
   while (current) {
    var next = current.name_next;
    if (mounts.includes(current.mount)) {
     FS.destroyNode(current);
    }
    current = next;
   }
  }));
  node.mounted = null;
  var idx = node.mount.mounts.indexOf(mount);
  assert(idx !== -1);
  node.mount.mounts.splice(idx, 1);
 },
 lookup: (parent, name) => parent.node_ops.lookup(parent, name),
 mknod: (path, mode, dev) => {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  if (!name || name === "." || name === "..") {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.mayCreate(parent, name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.mknod) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.mknod(parent, name, mode, dev);
 },
 create: (path, mode) => {
  mode = mode !== undefined ? mode : 438;
  mode &= 4095;
  mode |= 32768;
  return FS.mknod(path, mode, 0);
 },
 mkdir: (path, mode) => {
  mode = mode !== undefined ? mode : 511;
  mode &= 511 | 512;
  mode |= 16384;
  return FS.mknod(path, mode, 0);
 },
 mkdirTree: (path, mode) => {
  var dirs = path.split("/");
  var d = "";
  for (var i = 0; i < dirs.length; ++i) {
   if (!dirs[i]) continue;
   d += "/" + dirs[i];
   try {
    FS.mkdir(d, mode);
   } catch (e) {
    if (e.errno != 20) throw e;
   }
  }
 },
 mkdev: (path, mode, dev) => {
  if (typeof dev == "undefined") {
   dev = mode;
   mode = 438;
  }
  mode |= 8192;
  return FS.mknod(path, mode, dev);
 },
 symlink: (oldpath, newpath) => {
  if (!PATH_FS.resolve(oldpath)) {
   throw new FS.ErrnoError(44);
  }
  var lookup = FS.lookupPath(newpath, {
   parent: true
  });
  var parent = lookup.node;
  if (!parent) {
   throw new FS.ErrnoError(44);
  }
  var newname = PATH.basename(newpath);
  var errCode = FS.mayCreate(parent, newname);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.symlink) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.symlink(parent, newname, oldpath);
 },
 rename: (old_path, new_path) => {
  var old_dirname = PATH.dirname(old_path);
  var new_dirname = PATH.dirname(new_path);
  var old_name = PATH.basename(old_path);
  var new_name = PATH.basename(new_path);
  var lookup, old_dir, new_dir;
  lookup = FS.lookupPath(old_path, {
   parent: true
  });
  old_dir = lookup.node;
  lookup = FS.lookupPath(new_path, {
   parent: true
  });
  new_dir = lookup.node;
  if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
  if (old_dir.mount !== new_dir.mount) {
   throw new FS.ErrnoError(75);
  }
  var old_node = FS.lookupNode(old_dir, old_name);
  var relative = PATH_FS.relative(old_path, new_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(28);
  }
  relative = PATH_FS.relative(new_path, old_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(55);
  }
  var new_node;
  try {
   new_node = FS.lookupNode(new_dir, new_name);
  } catch (e) {}
  if (old_node === new_node) {
   return;
  }
  var isdir = FS.isDir(old_node.mode);
  var errCode = FS.mayDelete(old_dir, old_name, isdir);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!old_dir.node_ops.rename) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
   throw new FS.ErrnoError(10);
  }
  if (new_dir !== old_dir) {
   errCode = FS.nodePermissions(old_dir, "w");
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  FS.hashRemoveNode(old_node);
  try {
   old_dir.node_ops.rename(old_node, new_dir, new_name);
  } catch (e) {
   throw e;
  } finally {
   FS.hashAddNode(old_node);
  }
 },
 rmdir: path => {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, true);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.rmdir) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  parent.node_ops.rmdir(parent, name);
  FS.destroyNode(node);
 },
 readdir: path => {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  if (!node.node_ops.readdir) {
   throw new FS.ErrnoError(54);
  }
  return node.node_ops.readdir(node);
 },
 unlink: path => {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  if (!parent) {
   throw new FS.ErrnoError(44);
  }
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, false);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.unlink) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  parent.node_ops.unlink(parent, name);
  FS.destroyNode(node);
 },
 readlink: path => {
  var lookup = FS.lookupPath(path);
  var link = lookup.node;
  if (!link) {
   throw new FS.ErrnoError(44);
  }
  if (!link.node_ops.readlink) {
   throw new FS.ErrnoError(28);
  }
  return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
 },
 stat: (path, dontFollow) => {
  var lookup = FS.lookupPath(path, {
   follow: !dontFollow
  });
  var node = lookup.node;
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (!node.node_ops.getattr) {
   throw new FS.ErrnoError(63);
  }
  return node.node_ops.getattr(node);
 },
 lstat: path => FS.stat(path, true),
 chmod: (path, mode, dontFollow) => {
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   mode: mode & 4095 | node.mode & ~4095,
   timestamp: Date.now()
  });
 },
 lchmod: (path, mode) => {
  FS.chmod(path, mode, true);
 },
 fchmod: (fd, mode) => {
  var stream = FS.getStreamChecked(fd);
  FS.chmod(stream.node, mode);
 },
 chown: (path, uid, gid, dontFollow) => {
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   timestamp: Date.now()
  });
 },
 lchown: (path, uid, gid) => {
  FS.chown(path, uid, gid, true);
 },
 fchown: (fd, uid, gid) => {
  var stream = FS.getStreamChecked(fd);
  FS.chown(stream.node, uid, gid);
 },
 truncate: (path, len) => {
  if (len < 0) {
   throw new FS.ErrnoError(28);
  }
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: true
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isDir(node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!FS.isFile(node.mode)) {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.nodePermissions(node, "w");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  node.node_ops.setattr(node, {
   size: len,
   timestamp: Date.now()
  });
 },
 ftruncate: (fd, len) => {
  var stream = FS.getStreamChecked(fd);
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(28);
  }
  FS.truncate(stream.node, len);
 },
 utime: (path, atime, mtime) => {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  node.node_ops.setattr(node, {
   timestamp: Math.max(atime, mtime)
  });
 },
 open: (path, flags, mode) => {
  if (path === "") {
   throw new FS.ErrnoError(44);
  }
  flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
  mode = typeof mode == "undefined" ? 438 : mode;
  if (flags & 64) {
   mode = mode & 4095 | 32768;
  } else {
   mode = 0;
  }
  var node;
  if (typeof path == "object") {
   node = path;
  } else {
   path = PATH.normalize(path);
   try {
    var lookup = FS.lookupPath(path, {
     follow: !(flags & 131072)
    });
    node = lookup.node;
   } catch (e) {}
  }
  var created = false;
  if (flags & 64) {
   if (node) {
    if (flags & 128) {
     throw new FS.ErrnoError(20);
    }
   } else {
    node = FS.mknod(path, mode, 0);
    created = true;
   }
  }
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (FS.isChrdev(node.mode)) {
   flags &= ~512;
  }
  if (flags & 65536 && !FS.isDir(node.mode)) {
   throw new FS.ErrnoError(54);
  }
  if (!created) {
   var errCode = FS.mayOpen(node, flags);
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  if (flags & 512 && !created) {
   FS.truncate(node, 0);
  }
  flags &= ~(128 | 512 | 131072);
  var stream = FS.createStream({
   node: node,
   path: FS.getPath(node),
   flags: flags,
   seekable: true,
   position: 0,
   stream_ops: node.stream_ops,
   ungotten: [],
   error: false
  });
  if (stream.stream_ops.open) {
   stream.stream_ops.open(stream);
  }
  if (Module["logReadFiles"] && !(flags & 1)) {
   if (!FS.readFiles) FS.readFiles = {};
   if (!(path in FS.readFiles)) {
    FS.readFiles[path] = 1;
   }
  }
  return stream;
 },
 close: stream => {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (stream.getdents) stream.getdents = null;
  try {
   if (stream.stream_ops.close) {
    stream.stream_ops.close(stream);
   }
  } catch (e) {
   throw e;
  } finally {
   FS.closeStream(stream.fd);
  }
  stream.fd = null;
 },
 isClosed: stream => stream.fd === null,
 llseek: (stream, offset, whence) => {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (!stream.seekable || !stream.stream_ops.llseek) {
   throw new FS.ErrnoError(70);
  }
  if (whence != 0 && whence != 1 && whence != 2) {
   throw new FS.ErrnoError(28);
  }
  stream.position = stream.stream_ops.llseek(stream, offset, whence);
  stream.ungotten = [];
  return stream.position;
 },
 read: (stream, buffer, offset, length, position) => {
  assert(offset >= 0);
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.read) {
   throw new FS.ErrnoError(28);
  }
  var seeking = typeof position != "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
  if (!seeking) stream.position += bytesRead;
  return bytesRead;
 },
 write: (stream, buffer, offset, length, position, canOwn) => {
  assert(offset >= 0);
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.write) {
   throw new FS.ErrnoError(28);
  }
  if (stream.seekable && stream.flags & 1024) {
   FS.llseek(stream, 0, 2);
  }
  var seeking = typeof position != "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
  if (!seeking) stream.position += bytesWritten;
  return bytesWritten;
 },
 allocate: (stream, offset, length) => {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (offset < 0 || length <= 0) {
   throw new FS.ErrnoError(28);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(43);
  }
  if (!stream.stream_ops.allocate) {
   throw new FS.ErrnoError(138);
  }
  stream.stream_ops.allocate(stream, offset, length);
 },
 mmap: (stream, length, position, prot, flags) => {
  if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
   throw new FS.ErrnoError(2);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(2);
  }
  if (!stream.stream_ops.mmap) {
   throw new FS.ErrnoError(43);
  }
  return stream.stream_ops.mmap(stream, length, position, prot, flags);
 },
 msync: (stream, buffer, offset, length, mmapFlags) => {
  assert(offset >= 0);
  if (!stream.stream_ops.msync) {
   return 0;
  }
  return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
 },
 munmap: stream => 0,
 ioctl: (stream, cmd, arg) => {
  if (!stream.stream_ops.ioctl) {
   throw new FS.ErrnoError(59);
  }
  return stream.stream_ops.ioctl(stream, cmd, arg);
 },
 readFile: (path, opts = {}) => {
  opts.flags = opts.flags || 0;
  opts.encoding = opts.encoding || "binary";
  if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
   throw new Error(`Invalid encoding type "${opts.encoding}"`);
  }
  var ret;
  var stream = FS.open(path, opts.flags);
  var stat = FS.stat(path);
  var length = stat.size;
  var buf = new Uint8Array(length);
  FS.read(stream, buf, 0, length, 0);
  if (opts.encoding === "utf8") {
   ret = UTF8ArrayToString(buf, 0);
  } else if (opts.encoding === "binary") {
   ret = buf;
  }
  FS.close(stream);
  return ret;
 },
 writeFile: (path, data, opts = {}) => {
  opts.flags = opts.flags || 577;
  var stream = FS.open(path, opts.flags, opts.mode);
  if (typeof data == "string") {
   var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
   var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
   FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
  } else if (ArrayBuffer.isView(data)) {
   FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
  } else {
   throw new Error("Unsupported data type");
  }
  FS.close(stream);
 },
 cwd: () => FS.currentPath,
 chdir: path => {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  if (lookup.node === null) {
   throw new FS.ErrnoError(44);
  }
  if (!FS.isDir(lookup.node.mode)) {
   throw new FS.ErrnoError(54);
  }
  var errCode = FS.nodePermissions(lookup.node, "x");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  FS.currentPath = lookup.path;
 },
 createDefaultDirectories: () => {
  FS.mkdir("/tmp");
  FS.mkdir("/home");
  FS.mkdir("/home/web_user");
 },
 createDefaultDevices: () => {
  FS.mkdir("/dev");
  FS.registerDevice(FS.makedev(1, 3), {
   read: () => 0,
   write: (stream, buffer, offset, length, pos) => length
  });
  FS.mkdev("/dev/null", FS.makedev(1, 3));
  TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
  TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
  FS.mkdev("/dev/tty", FS.makedev(5, 0));
  FS.mkdev("/dev/tty1", FS.makedev(6, 0));
  var randomBuffer = new Uint8Array(1024), randomLeft = 0;
  var randomByte = () => {
   if (randomLeft === 0) {
    randomLeft = randomFill(randomBuffer).byteLength;
   }
   return randomBuffer[--randomLeft];
  };
  FS.createDevice("/dev", "random", randomByte);
  FS.createDevice("/dev", "urandom", randomByte);
  FS.mkdir("/dev/shm");
  FS.mkdir("/dev/shm/tmp");
 },
 createSpecialDirectories: () => {
  FS.mkdir("/proc");
  var proc_self = FS.mkdir("/proc/self");
  FS.mkdir("/proc/self/fd");
  FS.mount({
   mount: () => {
    var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
    node.node_ops = {
     lookup: (parent, name) => {
      var fd = +name;
      var stream = FS.getStreamChecked(fd);
      var ret = {
       parent: null,
       mount: {
        mountpoint: "fake"
       },
       node_ops: {
        readlink: () => stream.path
       }
      };
      ret.parent = ret;
      return ret;
     }
    };
    return node;
   }
  }, {}, "/proc/self/fd");
 },
 createStandardStreams: () => {
  if (Module["stdin"]) {
   FS.createDevice("/dev", "stdin", Module["stdin"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdin");
  }
  if (Module["stdout"]) {
   FS.createDevice("/dev", "stdout", null, Module["stdout"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdout");
  }
  if (Module["stderr"]) {
   FS.createDevice("/dev", "stderr", null, Module["stderr"]);
  } else {
   FS.symlink("/dev/tty1", "/dev/stderr");
  }
  var stdin = FS.open("/dev/stdin", 0);
  var stdout = FS.open("/dev/stdout", 1);
  var stderr = FS.open("/dev/stderr", 1);
  assert(stdin.fd === 0, `invalid handle for stdin (${stdin.fd})`);
  assert(stdout.fd === 1, `invalid handle for stdout (${stdout.fd})`);
  assert(stderr.fd === 2, `invalid handle for stderr (${stderr.fd})`);
 },
 ensureErrnoError: () => {
  if (FS.ErrnoError) return;
  FS.ErrnoError = function ErrnoError(errno, node) {
   this.name = "ErrnoError";
   this.node = node;
   this.setErrno = function(errno) {
    this.errno = errno;
    for (var key in ERRNO_CODES) {
     if (ERRNO_CODES[key] === errno) {
      this.code = key;
      break;
     }
    }
   };
   this.setErrno(errno);
   this.message = ERRNO_MESSAGES[errno];
   if (this.stack) {
    Object.defineProperty(this, "stack", {
     value: (new Error).stack,
     writable: true
    });
    this.stack = demangleAll(this.stack);
   }
  };
  FS.ErrnoError.prototype = new Error;
  FS.ErrnoError.prototype.constructor = FS.ErrnoError;
  [ 44 ].forEach((code => {
   FS.genericErrors[code] = new FS.ErrnoError(code);
   FS.genericErrors[code].stack = "<generic error, no stack>";
  }));
 },
 staticInit: () => {
  FS.ensureErrnoError();
  FS.nameTable = new Array(4096);
  FS.mount(MEMFS, {}, "/");
  FS.createDefaultDirectories();
  FS.createDefaultDevices();
  FS.createSpecialDirectories();
  FS.filesystems = {
   "MEMFS": MEMFS,
   "IDBFS": IDBFS
  };
 },
 init: (input, output, error) => {
  assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  FS.init.initialized = true;
  FS.ensureErrnoError();
  Module["stdin"] = input || Module["stdin"];
  Module["stdout"] = output || Module["stdout"];
  Module["stderr"] = error || Module["stderr"];
  FS.createStandardStreams();
 },
 quit: () => {
  FS.init.initialized = false;
  _fflush(0);
  for (var i = 0; i < FS.streams.length; i++) {
   var stream = FS.streams[i];
   if (!stream) {
    continue;
   }
   FS.close(stream);
  }
 },
 findObject: (path, dontResolveLastLink) => {
  var ret = FS.analyzePath(path, dontResolveLastLink);
  if (!ret.exists) {
   return null;
  }
  return ret.object;
 },
 analyzePath: (path, dontResolveLastLink) => {
  try {
   var lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   path = lookup.path;
  } catch (e) {}
  var ret = {
   isRoot: false,
   exists: false,
   error: 0,
   name: null,
   path: null,
   object: null,
   parentExists: false,
   parentPath: null,
   parentObject: null
  };
  try {
   var lookup = FS.lookupPath(path, {
    parent: true
   });
   ret.parentExists = true;
   ret.parentPath = lookup.path;
   ret.parentObject = lookup.node;
   ret.name = PATH.basename(path);
   lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   ret.exists = true;
   ret.path = lookup.path;
   ret.object = lookup.node;
   ret.name = lookup.node.name;
   ret.isRoot = lookup.path === "/";
  } catch (e) {
   ret.error = e.errno;
  }
  return ret;
 },
 createPath: (parent, path, canRead, canWrite) => {
  parent = typeof parent == "string" ? parent : FS.getPath(parent);
  var parts = path.split("/").reverse();
  while (parts.length) {
   var part = parts.pop();
   if (!part) continue;
   var current = PATH.join2(parent, part);
   try {
    FS.mkdir(current);
   } catch (e) {}
   parent = current;
  }
  return current;
 },
 createFile: (parent, name, properties, canRead, canWrite) => {
  var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
  var mode = FS_getMode(canRead, canWrite);
  return FS.create(path, mode);
 },
 createDataFile: (parent, name, data, canRead, canWrite, canOwn) => {
  var path = name;
  if (parent) {
   parent = typeof parent == "string" ? parent : FS.getPath(parent);
   path = name ? PATH.join2(parent, name) : parent;
  }
  var mode = FS_getMode(canRead, canWrite);
  var node = FS.create(path, mode);
  if (data) {
   if (typeof data == "string") {
    var arr = new Array(data.length);
    for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
    data = arr;
   }
   FS.chmod(node, mode | 146);
   var stream = FS.open(node, 577);
   FS.write(stream, data, 0, data.length, 0, canOwn);
   FS.close(stream);
   FS.chmod(node, mode);
  }
  return node;
 },
 createDevice: (parent, name, input, output) => {
  var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
  var mode = FS_getMode(!!input, !!output);
  if (!FS.createDevice.major) FS.createDevice.major = 64;
  var dev = FS.makedev(FS.createDevice.major++, 0);
  FS.registerDevice(dev, {
   open: stream => {
    stream.seekable = false;
   },
   close: stream => {
    if (output && output.buffer && output.buffer.length) {
     output(10);
    }
   },
   read: (stream, buffer, offset, length, pos) => {
    var bytesRead = 0;
    for (var i = 0; i < length; i++) {
     var result;
     try {
      result = input();
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
     if (result === undefined && bytesRead === 0) {
      throw new FS.ErrnoError(6);
     }
     if (result === null || result === undefined) break;
     bytesRead++;
     buffer[offset + i] = result;
    }
    if (bytesRead) {
     stream.node.timestamp = Date.now();
    }
    return bytesRead;
   },
   write: (stream, buffer, offset, length, pos) => {
    for (var i = 0; i < length; i++) {
     try {
      output(buffer[offset + i]);
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
    }
    if (length) {
     stream.node.timestamp = Date.now();
    }
    return i;
   }
  });
  return FS.mkdev(path, mode, dev);
 },
 forceLoadFile: obj => {
  if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
  if (typeof XMLHttpRequest != "undefined") {
   throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
  } else if (read_) {
   try {
    obj.contents = intArrayFromString(read_(obj.url), true);
    obj.usedBytes = obj.contents.length;
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
  } else {
   throw new Error("Cannot load without read() or XMLHttpRequest.");
  }
 },
 createLazyFile: (parent, name, url, canRead, canWrite) => {
  function LazyUint8Array() {
   this.lengthKnown = false;
   this.chunks = [];
  }
  LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
   if (idx > this.length - 1 || idx < 0) {
    return undefined;
   }
   var chunkOffset = idx % this.chunkSize;
   var chunkNum = idx / this.chunkSize | 0;
   return this.getter(chunkNum)[chunkOffset];
  };
  LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
   this.getter = getter;
  };
  LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
   var xhr = new XMLHttpRequest;
   xhr.open("HEAD", url, false);
   xhr.send(null);
   if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
   var datalength = Number(xhr.getResponseHeader("Content-length"));
   var header;
   var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
   var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
   var chunkSize = 1024 * 1024;
   if (!hasByteServing) chunkSize = datalength;
   var doXHR = (from, to) => {
    if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
    if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
    var xhr = new XMLHttpRequest;
    xhr.open("GET", url, false);
    if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
    xhr.responseType = "arraybuffer";
    if (xhr.overrideMimeType) {
     xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
    xhr.send(null);
    if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
    if (xhr.response !== undefined) {
     return new Uint8Array(xhr.response || []);
    }
    return intArrayFromString(xhr.responseText || "", true);
   };
   var lazyArray = this;
   lazyArray.setDataGetter((chunkNum => {
    var start = chunkNum * chunkSize;
    var end = (chunkNum + 1) * chunkSize - 1;
    end = Math.min(end, datalength - 1);
    if (typeof lazyArray.chunks[chunkNum] == "undefined") {
     lazyArray.chunks[chunkNum] = doXHR(start, end);
    }
    if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
    return lazyArray.chunks[chunkNum];
   }));
   if (usesGzip || !datalength) {
    chunkSize = datalength = 1;
    datalength = this.getter(0).length;
    chunkSize = datalength;
    out("LazyFiles on gzip forces download of the whole file when length is accessed");
   }
   this._length = datalength;
   this._chunkSize = chunkSize;
   this.lengthKnown = true;
  };
  if (typeof XMLHttpRequest != "undefined") {
   if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
   var lazyArray = new LazyUint8Array;
   Object.defineProperties(lazyArray, {
    length: {
     get: function() {
      if (!this.lengthKnown) {
       this.cacheLength();
      }
      return this._length;
     }
    },
    chunkSize: {
     get: function() {
      if (!this.lengthKnown) {
       this.cacheLength();
      }
      return this._chunkSize;
     }
    }
   });
   var properties = {
    isDevice: false,
    contents: lazyArray
   };
  } else {
   var properties = {
    isDevice: false,
    url: url
   };
  }
  var node = FS.createFile(parent, name, properties, canRead, canWrite);
  if (properties.contents) {
   node.contents = properties.contents;
  } else if (properties.url) {
   node.contents = null;
   node.url = properties.url;
  }
  Object.defineProperties(node, {
   usedBytes: {
    get: function() {
     return this.contents.length;
    }
   }
  });
  var stream_ops = {};
  var keys = Object.keys(node.stream_ops);
  keys.forEach((key => {
   var fn = node.stream_ops[key];
   stream_ops[key] = function forceLoadLazyFile() {
    FS.forceLoadFile(node);
    return fn.apply(null, arguments);
   };
  }));
  function writeChunks(stream, buffer, offset, length, position) {
   var contents = stream.node.contents;
   if (position >= contents.length) return 0;
   var size = Math.min(contents.length - position, length);
   assert(size >= 0);
   if (contents.slice) {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents[position + i];
    }
   } else {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents.get(position + i);
    }
   }
   return size;
  }
  stream_ops.read = (stream, buffer, offset, length, position) => {
   FS.forceLoadFile(node);
   return writeChunks(stream, buffer, offset, length, position);
  };
  stream_ops.mmap = (stream, length, position, prot, flags) => {
   FS.forceLoadFile(node);
   var ptr = mmapAlloc(length);
   if (!ptr) {
    throw new FS.ErrnoError(48);
   }
   writeChunks(stream, HEAP8, ptr, length, position);
   return {
    ptr: ptr,
    allocated: true
   };
  };
  node.stream_ops = stream_ops;
  return node;
 },
 absolutePath: () => {
  abort("FS.absolutePath has been removed; use PATH_FS.resolve instead");
 },
 createFolder: () => {
  abort("FS.createFolder has been removed; use FS.mkdir instead");
 },
 createLink: () => {
  abort("FS.createLink has been removed; use FS.symlink instead");
 },
 joinPath: () => {
  abort("FS.joinPath has been removed; use PATH.join instead");
 },
 mmapAlloc: () => {
  abort("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
 },
 standardizePath: () => {
  abort("FS.standardizePath has been removed; use PATH.normalize instead");
 }
};

var SYSCALLS = {
 DEFAULT_POLLMASK: 5,
 calculateAt: function(dirfd, path, allowEmpty) {
  if (PATH.isAbs(path)) {
   return path;
  }
  var dir;
  if (dirfd === -100) {
   dir = FS.cwd();
  } else {
   var dirstream = SYSCALLS.getStreamFromFD(dirfd);
   dir = dirstream.path;
  }
  if (path.length == 0) {
   if (!allowEmpty) {
    throw new FS.ErrnoError(44);
   }
   return dir;
  }
  return PATH.join2(dir, path);
 },
 doStat: function(func, path, buf) {
  try {
   var stat = func(path);
  } catch (e) {
   if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
    return -54;
   }
   throw e;
  }
  HEAP32[buf >>> 2] = stat.dev;
  HEAP32[buf + 4 >>> 2] = stat.mode;
  HEAPU32[buf + 8 >>> 2] = stat.nlink;
  HEAP32[buf + 12 >>> 2] = stat.uid;
  HEAP32[buf + 16 >>> 2] = stat.gid;
  HEAP32[buf + 20 >>> 2] = stat.rdev;
  tempI64 = [ stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  HEAP32[buf + 24 >>> 2] = tempI64[0], HEAP32[buf + 28 >>> 2] = tempI64[1];
  HEAP32[buf + 32 >>> 2] = 4096;
  HEAP32[buf + 36 >>> 2] = stat.blocks;
  var atime = stat.atime.getTime();
  var mtime = stat.mtime.getTime();
  var ctime = stat.ctime.getTime();
  tempI64 = [ Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), 
  +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  HEAP32[buf + 40 >>> 2] = tempI64[0], HEAP32[buf + 44 >>> 2] = tempI64[1];
  HEAPU32[buf + 48 >>> 2] = atime % 1e3 * 1e3;
  tempI64 = [ Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), 
  +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  HEAP32[buf + 56 >>> 2] = tempI64[0], HEAP32[buf + 60 >>> 2] = tempI64[1];
  HEAPU32[buf + 64 >>> 2] = mtime % 1e3 * 1e3;
  tempI64 = [ Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), 
  +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  HEAP32[buf + 72 >>> 2] = tempI64[0], HEAP32[buf + 76 >>> 2] = tempI64[1];
  HEAPU32[buf + 80 >>> 2] = ctime % 1e3 * 1e3;
  tempI64 = [ stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  HEAP32[buf + 88 >>> 2] = tempI64[0], HEAP32[buf + 92 >>> 2] = tempI64[1];
  return 0;
 },
 doMsync: function(addr, stream, len, flags, offset) {
  if (!FS.isFile(stream.node.mode)) {
   throw new FS.ErrnoError(43);
  }
  if (flags & 2) {
   return 0;
  }
  var buffer = HEAPU8.slice(addr, addr + len);
  FS.msync(stream, buffer, offset, len, flags);
 },
 varargs: undefined,
 get() {
  assert(SYSCALLS.varargs != undefined);
  SYSCALLS.varargs += 4;
  var ret = HEAP32[SYSCALLS.varargs - 4 >>> 2];
  return ret;
 },
 getStr(ptr) {
  var ret = UTF8ToString(ptr);
  return ret;
 },
 getStreamFromFD: function(fd) {
  var stream = FS.getStreamChecked(fd);
  return stream;
 }
};

function ___syscall__newselect(nfds, readfds, writefds, exceptfds, timeout) {
 readfds >>>= 0;
 writefds >>>= 0;
 exceptfds >>>= 0;
 timeout >>>= 0;
 try {
  assert(nfds <= 64, "nfds must be less than or equal to 64");
  assert(!exceptfds, "exceptfds not supported");
  var total = 0;
  var srcReadLow = readfds ? HEAP32[readfds >>> 2] : 0, srcReadHigh = readfds ? HEAP32[readfds + 4 >>> 2] : 0;
  var srcWriteLow = writefds ? HEAP32[writefds >>> 2] : 0, srcWriteHigh = writefds ? HEAP32[writefds + 4 >>> 2] : 0;
  var srcExceptLow = exceptfds ? HEAP32[exceptfds >>> 2] : 0, srcExceptHigh = exceptfds ? HEAP32[exceptfds + 4 >>> 2] : 0;
  var dstReadLow = 0, dstReadHigh = 0;
  var dstWriteLow = 0, dstWriteHigh = 0;
  var dstExceptLow = 0, dstExceptHigh = 0;
  var allLow = (readfds ? HEAP32[readfds >>> 2] : 0) | (writefds ? HEAP32[writefds >>> 2] : 0) | (exceptfds ? HEAP32[exceptfds >>> 2] : 0);
  var allHigh = (readfds ? HEAP32[readfds + 4 >>> 2] : 0) | (writefds ? HEAP32[writefds + 4 >>> 2] : 0) | (exceptfds ? HEAP32[exceptfds + 4 >>> 2] : 0);
  var check = function(fd, low, high, val) {
   return fd < 32 ? low & val : high & val;
  };
  for (var fd = 0; fd < nfds; fd++) {
   var mask = 1 << fd % 32;
   if (!check(fd, allLow, allHigh, mask)) {
    continue;
   }
   var stream = SYSCALLS.getStreamFromFD(fd);
   var flags = SYSCALLS.DEFAULT_POLLMASK;
   if (stream.stream_ops.poll) {
    var timeoutInMillis = -1;
    if (timeout) {
     var tv_sec = readfds ? HEAP32[timeout >>> 2] : 0, tv_usec = readfds ? HEAP32[timeout + 8 >>> 2] : 0;
     timeoutInMillis = (tv_sec + tv_usec / 1e6) * 1e3;
    }
    flags = stream.stream_ops.poll(stream, timeoutInMillis);
   }
   if (flags & 1 && check(fd, srcReadLow, srcReadHigh, mask)) {
    fd < 32 ? dstReadLow = dstReadLow | mask : dstReadHigh = dstReadHigh | mask;
    total++;
   }
   if (flags & 4 && check(fd, srcWriteLow, srcWriteHigh, mask)) {
    fd < 32 ? dstWriteLow = dstWriteLow | mask : dstWriteHigh = dstWriteHigh | mask;
    total++;
   }
   if (flags & 2 && check(fd, srcExceptLow, srcExceptHigh, mask)) {
    fd < 32 ? dstExceptLow = dstExceptLow | mask : dstExceptHigh = dstExceptHigh | mask;
    total++;
   }
  }
  if (readfds) {
   HEAP32[readfds >>> 2] = dstReadLow;
   HEAP32[readfds + 4 >>> 2] = dstReadHigh;
  }
  if (writefds) {
   HEAP32[writefds >>> 2] = dstWriteLow;
   HEAP32[writefds + 4 >>> 2] = dstWriteHigh;
  }
  if (exceptfds) {
   HEAP32[exceptfds >>> 2] = dstExceptLow;
   HEAP32[exceptfds + 4 >>> 2] = dstExceptHigh;
  }
  return total;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

var SOCKFS = {
 mount(mount) {
  Module["websocket"] = Module["websocket"] && "object" === typeof Module["websocket"] ? Module["websocket"] : {};
  Module["websocket"]._callbacks = {};
  Module["websocket"]["on"] = function(event, callback) {
   if ("function" === typeof callback) {
    this._callbacks[event] = callback;
   }
   return this;
  };
  Module["websocket"].emit = function(event, param) {
   if ("function" === typeof this._callbacks[event]) {
    this._callbacks[event].call(this, param);
   }
  };
  return FS.createNode(null, "/", 16384 | 511, 0);
 },
 createSocket(family, type, protocol) {
  type &= ~526336;
  var streaming = type == 1;
  if (streaming && protocol && protocol != 6) {
   throw new FS.ErrnoError(66);
  }
  var sock = {
   family: family,
   type: type,
   protocol: protocol,
   server: null,
   error: null,
   peers: {},
   pending: [],
   recv_queue: [],
   sock_ops: SOCKFS.websocket_sock_ops
  };
  var name = SOCKFS.nextname();
  var node = FS.createNode(SOCKFS.root, name, 49152, 0);
  node.sock = sock;
  var stream = FS.createStream({
   path: name,
   node: node,
   flags: 2,
   seekable: false,
   stream_ops: SOCKFS.stream_ops
  });
  sock.stream = stream;
  return sock;
 },
 getSocket(fd) {
  var stream = FS.getStream(fd);
  if (!stream || !FS.isSocket(stream.node.mode)) {
   return null;
  }
  return stream.node.sock;
 },
 stream_ops: {
  poll(stream) {
   var sock = stream.node.sock;
   return sock.sock_ops.poll(sock);
  },
  ioctl(stream, request, varargs) {
   var sock = stream.node.sock;
   return sock.sock_ops.ioctl(sock, request, varargs);
  },
  read(stream, buffer, offset, length, position) {
   var sock = stream.node.sock;
   var msg = sock.sock_ops.recvmsg(sock, length);
   if (!msg) {
    return 0;
   }
   buffer.set(msg.buffer, offset);
   return msg.buffer.length;
  },
  write(stream, buffer, offset, length, position) {
   var sock = stream.node.sock;
   return sock.sock_ops.sendmsg(sock, buffer, offset, length);
  },
  close(stream) {
   var sock = stream.node.sock;
   sock.sock_ops.close(sock);
  }
 },
 nextname() {
  if (!SOCKFS.nextname.current) {
   SOCKFS.nextname.current = 0;
  }
  return "socket[" + SOCKFS.nextname.current++ + "]";
 },
 websocket_sock_ops: {
  createPeer(sock, addr, port) {
   var ws;
   if (typeof addr == "object") {
    ws = addr;
    addr = null;
    port = null;
   }
   if (ws) {
    if (ws._socket) {
     addr = ws._socket.remoteAddress;
     port = ws._socket.remotePort;
    } else {
     var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
     if (!result) {
      throw new Error("WebSocket URL must be in the format ws(s)://address:port");
     }
     addr = result[1];
     port = parseInt(result[2], 10);
    }
   } else {
    try {
     var runtimeConfig = Module["websocket"] && "object" === typeof Module["websocket"];
     var url = "ws:#".replace("#", "//");
     if (runtimeConfig) {
      if ("string" === typeof Module["websocket"]["url"]) {
       url = Module["websocket"]["url"];
      }
     }
     if (url === "ws://" || url === "wss://") {
      var parts = addr.split("/");
      url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/");
     }
     var subProtocols = "binary";
     if (runtimeConfig) {
      if ("string" === typeof Module["websocket"]["subprotocol"]) {
       subProtocols = Module["websocket"]["subprotocol"];
      }
     }
     var opts = undefined;
     if (subProtocols !== "null") {
      subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
      opts = subProtocols;
     }
     if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
      subProtocols = "null";
      opts = undefined;
     }
     var WebSocketConstructor;
     {
      WebSocketConstructor = WebSocket;
     }
     ws = new WebSocketConstructor(url, opts);
     ws.binaryType = "arraybuffer";
    } catch (e) {
     throw new FS.ErrnoError(23);
    }
   }
   var peer = {
    addr: addr,
    port: port,
    socket: ws,
    dgram_send_queue: []
   };
   SOCKFS.websocket_sock_ops.addPeer(sock, peer);
   SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
   if (sock.type === 2 && typeof sock.sport != "undefined") {
    peer.dgram_send_queue.push(new Uint8Array([ 255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (sock.sport & 65280) >> 8, sock.sport & 255 ]));
   }
   return peer;
  },
  getPeer(sock, addr, port) {
   return sock.peers[addr + ":" + port];
  },
  addPeer(sock, peer) {
   sock.peers[peer.addr + ":" + peer.port] = peer;
  },
  removePeer(sock, peer) {
   delete sock.peers[peer.addr + ":" + peer.port];
  },
  handlePeerEvents(sock, peer) {
   var first = true;
   var handleOpen = function() {
    Module["websocket"].emit("open", sock.stream.fd);
    try {
     var queued = peer.dgram_send_queue.shift();
     while (queued) {
      peer.socket.send(queued);
      queued = peer.dgram_send_queue.shift();
     }
    } catch (e) {
     peer.socket.close();
    }
   };
   function handleMessage(data) {
    if (typeof data == "string") {
     var encoder = new TextEncoder;
     data = encoder.encode(data);
    } else {
     assert(data.byteLength !== undefined);
     if (data.byteLength == 0) {
      return;
     }
     data = new Uint8Array(data);
    }
    var wasfirst = first;
    first = false;
    if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
     var newport = data[8] << 8 | data[9];
     SOCKFS.websocket_sock_ops.removePeer(sock, peer);
     peer.port = newport;
     SOCKFS.websocket_sock_ops.addPeer(sock, peer);
     return;
    }
    sock.recv_queue.push({
     addr: peer.addr,
     port: peer.port,
     data: data
    });
    Module["websocket"].emit("message", sock.stream.fd);
   }
   if (ENVIRONMENT_IS_NODE) {
    peer.socket.on("open", handleOpen);
    peer.socket.on("message", (function(data, isBinary) {
     if (!isBinary) {
      return;
     }
     handleMessage(new Uint8Array(data).buffer);
    }));
    peer.socket.on("close", (function() {
     Module["websocket"].emit("close", sock.stream.fd);
    }));
    peer.socket.on("error", (function(error) {
     sock.error = 14;
     Module["websocket"].emit("error", [ sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused" ]);
    }));
   } else {
    peer.socket.onopen = handleOpen;
    peer.socket.onclose = function() {
     Module["websocket"].emit("close", sock.stream.fd);
    };
    peer.socket.onmessage = function peer_socket_onmessage(event) {
     handleMessage(event.data);
    };
    peer.socket.onerror = function(error) {
     sock.error = 14;
     Module["websocket"].emit("error", [ sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused" ]);
    };
   }
  },
  poll(sock) {
   if (sock.type === 1 && sock.server) {
    return sock.pending.length ? 64 | 1 : 0;
   }
   var mask = 0;
   var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
   if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
    mask |= 64 | 1;
   }
   if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
    mask |= 4;
   }
   if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
    mask |= 16;
   }
   return mask;
  },
  ioctl(sock, request, arg) {
   switch (request) {
   case 21531:
    var bytes = 0;
    if (sock.recv_queue.length) {
     bytes = sock.recv_queue[0].data.length;
    }
    HEAP32[arg >>> 2] = bytes;
    return 0;

   default:
    return 28;
   }
  },
  close(sock) {
   if (sock.server) {
    try {
     sock.server.close();
    } catch (e) {}
    sock.server = null;
   }
   var peers = Object.keys(sock.peers);
   for (var i = 0; i < peers.length; i++) {
    var peer = sock.peers[peers[i]];
    try {
     peer.socket.close();
    } catch (e) {}
    SOCKFS.websocket_sock_ops.removePeer(sock, peer);
   }
   return 0;
  },
  bind(sock, addr, port) {
   if (typeof sock.saddr != "undefined" || typeof sock.sport != "undefined") {
    throw new FS.ErrnoError(28);
   }
   sock.saddr = addr;
   sock.sport = port;
   if (sock.type === 2) {
    if (sock.server) {
     sock.server.close();
     sock.server = null;
    }
    try {
     sock.sock_ops.listen(sock, 0);
    } catch (e) {
     if (!(e.name === "ErrnoError")) throw e;
     if (e.errno !== 138) throw e;
    }
   }
  },
  connect(sock, addr, port) {
   if (sock.server) {
    throw new FS.ErrnoError(138);
   }
   if (typeof sock.daddr != "undefined" && typeof sock.dport != "undefined") {
    var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
    if (dest) {
     if (dest.socket.readyState === dest.socket.CONNECTING) {
      throw new FS.ErrnoError(7);
     } else {
      throw new FS.ErrnoError(30);
     }
    }
   }
   var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
   sock.daddr = peer.addr;
   sock.dport = peer.port;
   throw new FS.ErrnoError(26);
  },
  listen(sock, backlog) {
   if (!ENVIRONMENT_IS_NODE) {
    throw new FS.ErrnoError(138);
   }
  },
  accept(listensock) {
   if (!listensock.server || !listensock.pending.length) {
    throw new FS.ErrnoError(28);
   }
   var newsock = listensock.pending.shift();
   newsock.stream.flags = listensock.stream.flags;
   return newsock;
  },
  getname(sock, peer) {
   var addr, port;
   if (peer) {
    if (sock.daddr === undefined || sock.dport === undefined) {
     throw new FS.ErrnoError(53);
    }
    addr = sock.daddr;
    port = sock.dport;
   } else {
    addr = sock.saddr || 0;
    port = sock.sport || 0;
   }
   return {
    addr: addr,
    port: port
   };
  },
  sendmsg(sock, buffer, offset, length, addr, port) {
   if (sock.type === 2) {
    if (addr === undefined || port === undefined) {
     addr = sock.daddr;
     port = sock.dport;
    }
    if (addr === undefined || port === undefined) {
     throw new FS.ErrnoError(17);
    }
   } else {
    addr = sock.daddr;
    port = sock.dport;
   }
   var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
   if (sock.type === 1) {
    if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
     throw new FS.ErrnoError(53);
    } else if (dest.socket.readyState === dest.socket.CONNECTING) {
     throw new FS.ErrnoError(6);
    }
   }
   if (ArrayBuffer.isView(buffer)) {
    offset += buffer.byteOffset;
    buffer = buffer.buffer;
   }
   var data;
   data = buffer.slice(offset, offset + length);
   if (sock.type === 2) {
    if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
     if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
      dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
     }
     dest.dgram_send_queue.push(data);
     return length;
    }
   }
   try {
    dest.socket.send(data);
    return length;
   } catch (e) {
    throw new FS.ErrnoError(28);
   }
  },
  recvmsg(sock, length) {
   if (sock.type === 1 && sock.server) {
    throw new FS.ErrnoError(53);
   }
   var queued = sock.recv_queue.shift();
   if (!queued) {
    if (sock.type === 1) {
     var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
     if (!dest) {
      throw new FS.ErrnoError(53);
     }
     if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
      return null;
     }
     throw new FS.ErrnoError(6);
    }
    throw new FS.ErrnoError(6);
   }
   var queuedLength = queued.data.byteLength || queued.data.length;
   var queuedOffset = queued.data.byteOffset || 0;
   var queuedBuffer = queued.data.buffer || queued.data;
   var bytesRead = Math.min(length, queuedLength);
   var res = {
    buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
    addr: queued.addr,
    port: queued.port
   };
   if (sock.type === 1 && bytesRead < queuedLength) {
    var bytesRemaining = queuedLength - bytesRead;
    queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
    sock.recv_queue.unshift(queued);
   }
   return res;
  }
 }
};

function getSocketFromFD(fd) {
 var socket = SOCKFS.getSocket(fd);
 if (!socket) throw new FS.ErrnoError(8);
 return socket;
}

var setErrNo = value => {
 HEAP32[___errno_location() >>> 2] = value;
 return value;
};

var Sockets = {
 BUFFER_SIZE: 10240,
 MAX_BUFFER_SIZE: 10485760,
 nextFd: 1,
 fds: {},
 nextport: 1,
 maxport: 65535,
 peer: null,
 connections: {},
 portmap: {},
 localAddr: 4261412874,
 addrPool: [ 33554442, 50331658, 67108874, 83886090, 100663306, 117440522, 134217738, 150994954, 167772170, 184549386, 201326602, 218103818, 234881034 ]
};

var inetPton4 = str => {
 var b = str.split(".");
 for (var i = 0; i < 4; i++) {
  var tmp = Number(b[i]);
  if (isNaN(tmp)) return null;
  b[i] = tmp;
 }
 return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
};

var jstoi_q = str => parseInt(str);

var inetPton6 = str => {
 var words;
 var w, offset, z, i;
 var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
 var parts = [];
 if (!valid6regx.test(str)) {
  return null;
 }
 if (str === "::") {
  return [ 0, 0, 0, 0, 0, 0, 0, 0 ];
 }
 if (str.startsWith("::")) {
  str = str.replace("::", "Z:");
 } else {
  str = str.replace("::", ":Z:");
 }
 if (str.indexOf(".") > 0) {
  str = str.replace(new RegExp("[.]", "g"), ":");
  words = str.split(":");
  words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
  words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
  words = words.slice(0, words.length - 2);
 } else {
  words = str.split(":");
 }
 offset = 0;
 z = 0;
 for (w = 0; w < words.length; w++) {
  if (typeof words[w] == "string") {
   if (words[w] === "Z") {
    for (z = 0; z < 8 - words.length + 1; z++) {
     parts[w + z] = 0;
    }
    offset = z - 1;
   } else {
    parts[w + offset] = _htons(parseInt(words[w], 16));
   }
  } else {
   parts[w + offset] = words[w];
  }
 }
 return [ parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6] ];
};

var writeSockaddr = (sa, family, addr, port, addrlen) => {
 switch (family) {
 case 2:
  addr = inetPton4(addr);
  zeroMemory(sa, 16);
  if (addrlen) {
   HEAP32[addrlen >>> 2] = 16;
  }
  HEAP16[sa >>> 1] = family;
  HEAP32[sa + 4 >>> 2] = addr;
  HEAP16[sa + 2 >>> 1] = _htons(port);
  break;

 case 10:
  addr = inetPton6(addr);
  zeroMemory(sa, 28);
  if (addrlen) {
   HEAP32[addrlen >>> 2] = 28;
  }
  HEAP32[sa >>> 2] = family;
  HEAP32[sa + 8 >>> 2] = addr[0];
  HEAP32[sa + 12 >>> 2] = addr[1];
  HEAP32[sa + 16 >>> 2] = addr[2];
  HEAP32[sa + 20 >>> 2] = addr[3];
  HEAP16[sa + 2 >>> 1] = _htons(port);
  break;

 default:
  return 5;
 }
 return 0;
};

var DNS = {
 address_map: {
  id: 1,
  addrs: {},
  names: {}
 },
 lookup_name: name => {
  var res = inetPton4(name);
  if (res !== null) {
   return name;
  }
  res = inetPton6(name);
  if (res !== null) {
   return name;
  }
  var addr;
  if (DNS.address_map.addrs[name]) {
   addr = DNS.address_map.addrs[name];
  } else {
   var id = DNS.address_map.id++;
   assert(id < 65535, "exceeded max address mappings of 65535");
   addr = "172.29." + (id & 255) + "." + (id & 65280);
   DNS.address_map.names[addr] = name;
   DNS.address_map.addrs[name] = addr;
  }
  return addr;
 },
 lookup_addr: addr => {
  if (DNS.address_map.names[addr]) {
   return DNS.address_map.names[addr];
  }
  return null;
 }
};

function ___syscall_accept4(fd, addr, addrlen, flags, d1, d2) {
 addr >>>= 0;
 addrlen >>>= 0;
 try {
  var sock = getSocketFromFD(fd);
  var newsock = sock.sock_ops.accept(sock);
  if (addr) {
   var errno = writeSockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport, addrlen);
   assert(!errno);
  }
  return newsock.stream.fd;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

var inetNtop4 = addr => (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);

var inetNtop6 = ints => {
 var str = "";
 var word = 0;
 var longest = 0;
 var lastzero = 0;
 var zstart = 0;
 var len = 0;
 var i = 0;
 var parts = [ ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16 ];
 var hasipv4 = true;
 var v4part = "";
 for (i = 0; i < 5; i++) {
  if (parts[i] !== 0) {
   hasipv4 = false;
   break;
  }
 }
 if (hasipv4) {
  v4part = inetNtop4(parts[6] | parts[7] << 16);
  if (parts[5] === -1) {
   str = "::ffff:";
   str += v4part;
   return str;
  }
  if (parts[5] === 0) {
   str = "::";
   if (v4part === "0.0.0.0") v4part = "";
   if (v4part === "0.0.0.1") v4part = "1";
   str += v4part;
   return str;
  }
 }
 for (word = 0; word < 8; word++) {
  if (parts[word] === 0) {
   if (word - lastzero > 1) {
    len = 0;
   }
   lastzero = word;
   len++;
  }
  if (len > longest) {
   longest = len;
   zstart = word - longest + 1;
  }
 }
 for (word = 0; word < 8; word++) {
  if (longest > 1) {
   if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
    if (word === zstart) {
     str += ":";
     if (zstart === 0) str += ":";
    }
    continue;
   }
  }
  str += Number(_ntohs(parts[word] & 65535)).toString(16);
  str += word < 7 ? ":" : "";
 }
 return str;
};

var readSockaddr = (sa, salen) => {
 var family = HEAP16[sa >>> 1];
 var port = _ntohs(HEAPU16[sa + 2 >>> 1]);
 var addr;
 switch (family) {
 case 2:
  if (salen !== 16) {
   return {
    errno: 28
   };
  }
  addr = HEAP32[sa + 4 >>> 2];
  addr = inetNtop4(addr);
  break;

 case 10:
  if (salen !== 28) {
   return {
    errno: 28
   };
  }
  addr = [ HEAP32[sa + 8 >>> 2], HEAP32[sa + 12 >>> 2], HEAP32[sa + 16 >>> 2], HEAP32[sa + 20 >>> 2] ];
  addr = inetNtop6(addr);
  break;

 default:
  return {
   errno: 5
  };
 }
 return {
  family: family,
  addr: addr,
  port: port
 };
};

function getSocketAddress(addrp, addrlen, allowNull) {
 if (allowNull && addrp === 0) return null;
 var info = readSockaddr(addrp, addrlen);
 if (info.errno) throw new FS.ErrnoError(info.errno);
 info.addr = DNS.lookup_addr(info.addr) || info.addr;
 return info;
}

function ___syscall_bind(fd, addr, addrlen, d1, d2, d3) {
 addr >>>= 0;
 addrlen >>>= 0;
 try {
  var sock = getSocketFromFD(fd);
  var info = getSocketAddress(addr, addrlen);
  sock.sock_ops.bind(sock, info.addr, info.port);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_chdir(path) {
 path >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  FS.chdir(path);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_chmod(path, mode) {
 path >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  FS.chmod(path, mode);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_connect(fd, addr, addrlen, d1, d2, d3) {
 addr >>>= 0;
 addrlen >>>= 0;
 try {
  var sock = getSocketFromFD(fd);
  var info = getSocketAddress(addr, addrlen);
  sock.sock_ops.connect(sock, info.addr, info.port);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_dup(fd) {
 try {
  var old = SYSCALLS.getStreamFromFD(fd);
  return FS.createStream(old).fd;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_dup3(fd, newfd, flags) {
 try {
  var old = SYSCALLS.getStreamFromFD(fd);
  assert(!flags);
  if (old.fd === newfd) return -28;
  var existing = FS.getStream(newfd);
  if (existing) FS.close(existing);
  return FS.createStream(old, newfd).fd;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_faccessat(dirfd, path, amode, flags) {
 path >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  assert(flags === 0);
  path = SYSCALLS.calculateAt(dirfd, path);
  if (amode & ~7) {
   return -28;
  }
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  if (!node) {
   return -44;
  }
  var perms = "";
  if (amode & 4) perms += "r";
  if (amode & 2) perms += "w";
  if (amode & 1) perms += "x";
  if (perms && FS.nodePermissions(node, perms)) {
   return -2;
  }
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_fallocate(fd, mode, offset_low, offset_high, len_low, len_high) {
 var offset = convertI32PairToI53Checked(offset_low, offset_high);
 var len = convertI32PairToI53Checked(len_low, len_high);
 try {
  if (isNaN(offset)) return 61;
  var stream = SYSCALLS.getStreamFromFD(fd);
  assert(mode === 0);
  FS.allocate(stream, offset, len);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_fchmod(fd, mode) {
 try {
  FS.fchmod(fd, mode);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_fchown32(fd, owner, group) {
 try {
  FS.fchown(fd, owner, group);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_fchownat(dirfd, path, owner, group, flags) {
 path >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  var nofollow = flags & 256;
  flags = flags & ~256;
  assert(flags === 0);
  path = SYSCALLS.calculateAt(dirfd, path);
  (nofollow ? FS.lchown : FS.chown)(path, owner, group);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_fcntl64(fd, cmd, varargs) {
 varargs >>>= 0;
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  switch (cmd) {
  case 0:
   {
    var arg = SYSCALLS.get();
    if (arg < 0) {
     return -28;
    }
    var newStream;
    newStream = FS.createStream(stream, arg);
    return newStream.fd;
   }

  case 1:
  case 2:
   return 0;

  case 3:
   return stream.flags;

  case 4:
   {
    var arg = SYSCALLS.get();
    stream.flags |= arg;
    return 0;
   }

  case 5:
   {
    var arg = SYSCALLS.get();
    var offset = 0;
    HEAP16[arg + offset >>> 1] = 2;
    return 0;
   }

  case 6:
  case 7:
   return 0;

  case 16:
  case 8:
   return -28;

  case 9:
   setErrNo(28);
   return -1;

  default:
   {
    return -28;
   }
  }
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_fdatasync(fd) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_fstat64(fd, buf) {
 buf >>>= 0;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  return SYSCALLS.doStat(FS.stat, stream.path, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_statfs64(path, size, buf) {
 path >>>= 0;
 size >>>= 0;
 buf >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  assert(size === 64);
  HEAP32[buf + 4 >>> 2] = 4096;
  HEAP32[buf + 40 >>> 2] = 4096;
  HEAP32[buf + 8 >>> 2] = 1e6;
  HEAP32[buf + 12 >>> 2] = 5e5;
  HEAP32[buf + 16 >>> 2] = 5e5;
  HEAP32[buf + 20 >>> 2] = FS.nextInode;
  HEAP32[buf + 24 >>> 2] = 1e6;
  HEAP32[buf + 28 >>> 2] = 42;
  HEAP32[buf + 44 >>> 2] = 2;
  HEAP32[buf + 36 >>> 2] = 255;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_fstatfs64(fd, size, buf) {
 size >>>= 0;
 buf >>>= 0;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  return ___syscall_statfs64(0, size, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_ftruncate64(fd, length_low, length_high) {
 var length = convertI32PairToI53Checked(length_low, length_high);
 try {
  if (isNaN(length)) return 61;
  FS.ftruncate(fd, length);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
 assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
};

function ___syscall_getcwd(buf, size) {
 buf >>>= 0;
 size >>>= 0;
 try {
  if (size === 0) return -28;
  var cwd = FS.cwd();
  var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
  if (size < cwdLengthInBytes) return -68;
  stringToUTF8(cwd, buf, size);
  return cwdLengthInBytes;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_getdents64(fd, dirp, count) {
 dirp >>>= 0;
 count >>>= 0;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  if (!stream.getdents) {
   stream.getdents = FS.readdir(stream.path);
  }
  var struct_size = 280;
  var pos = 0;
  var off = FS.llseek(stream, 0, 1);
  var idx = Math.floor(off / struct_size);
  while (idx < stream.getdents.length && pos + struct_size <= count) {
   var id;
   var type;
   var name = stream.getdents[idx];
   if (name === ".") {
    id = stream.node.id;
    type = 4;
   } else if (name === "..") {
    var lookup = FS.lookupPath(stream.path, {
     parent: true
    });
    id = lookup.node.id;
    type = 4;
   } else {
    var child = FS.lookupNode(stream.node, name);
    id = child.id;
    type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8;
   }
   assert(id);
   tempI64 = [ id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
   HEAP32[dirp + pos >>> 2] = tempI64[0], HEAP32[dirp + pos + 4 >>> 2] = tempI64[1];
   tempI64 = [ (idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, 
   +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
   HEAP32[dirp + pos + 8 >>> 2] = tempI64[0], HEAP32[dirp + pos + 12 >>> 2] = tempI64[1];
   HEAP16[dirp + pos + 16 >>> 1] = 280;
   HEAP8[dirp + pos + 18 >>> 0] = type;
   stringToUTF8(name, dirp + pos + 19, 256);
   pos += struct_size;
   idx += 1;
  }
  FS.llseek(stream, idx * struct_size, 0);
  return pos;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_getpeername(fd, addr, addrlen, d1, d2, d3) {
 addr >>>= 0;
 addrlen >>>= 0;
 try {
  var sock = getSocketFromFD(fd);
  if (!sock.daddr) {
   return -53;
  }
  var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport, addrlen);
  assert(!errno);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_getsockname(fd, addr, addrlen, d1, d2, d3) {
 addr >>>= 0;
 addrlen >>>= 0;
 try {
  var sock = getSocketFromFD(fd);
  var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || "0.0.0.0"), sock.sport, addrlen);
  assert(!errno);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_getsockopt(fd, level, optname, optval, optlen, d1) {
 optval >>>= 0;
 optlen >>>= 0;
 try {
  var sock = getSocketFromFD(fd);
  if (level === 1) {
   if (optname === 4) {
    HEAP32[optval >>> 2] = sock.error;
    HEAP32[optlen >>> 2] = 4;
    sock.error = null;
    return 0;
   }
  }
  return -50;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_ioctl(fd, op, varargs) {
 varargs >>>= 0;
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  switch (op) {
  case 21509:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21505:
   {
    if (!stream.tty) return -59;
    if (stream.tty.ops.ioctl_tcgets) {
     var termios = stream.tty.ops.ioctl_tcgets(stream);
     var argp = SYSCALLS.get();
     HEAP32[argp >>> 2] = termios.c_iflag || 0;
     HEAP32[argp + 4 >>> 2] = termios.c_oflag || 0;
     HEAP32[argp + 8 >>> 2] = termios.c_cflag || 0;
     HEAP32[argp + 12 >>> 2] = termios.c_lflag || 0;
     for (var i = 0; i < 32; i++) {
      HEAP8[argp + i + 17 >>> 0] = termios.c_cc[i] || 0;
     }
     return 0;
    }
    return 0;
   }

  case 21510:
  case 21511:
  case 21512:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21506:
  case 21507:
  case 21508:
   {
    if (!stream.tty) return -59;
    if (stream.tty.ops.ioctl_tcsets) {
     var argp = SYSCALLS.get();
     var c_iflag = HEAP32[argp >>> 2];
     var c_oflag = HEAP32[argp + 4 >>> 2];
     var c_cflag = HEAP32[argp + 8 >>> 2];
     var c_lflag = HEAP32[argp + 12 >>> 2];
     var c_cc = [];
     for (var i = 0; i < 32; i++) {
      c_cc.push(HEAP8[argp + i + 17 >>> 0]);
     }
     return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
      c_iflag: c_iflag,
      c_oflag: c_oflag,
      c_cflag: c_cflag,
      c_lflag: c_lflag,
      c_cc: c_cc
     });
    }
    return 0;
   }

  case 21519:
   {
    if (!stream.tty) return -59;
    var argp = SYSCALLS.get();
    HEAP32[argp >>> 2] = 0;
    return 0;
   }

  case 21520:
   {
    if (!stream.tty) return -59;
    return -28;
   }

  case 21531:
   {
    var argp = SYSCALLS.get();
    return FS.ioctl(stream, op, argp);
   }

  case 21523:
   {
    if (!stream.tty) return -59;
    if (stream.tty.ops.ioctl_tiocgwinsz) {
     var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
     var argp = SYSCALLS.get();
     HEAP16[argp >>> 1] = winsize[0];
     HEAP16[argp + 2 >>> 1] = winsize[1];
    }
    return 0;
   }

  case 21524:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21515:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  default:
   return -28;
  }
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_listen(fd, backlog) {
 try {
  var sock = getSocketFromFD(fd);
  sock.sock_ops.listen(sock, backlog);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_lstat64(path, buf) {
 path >>>= 0;
 buf >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doStat(FS.lstat, path, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_mkdirat(dirfd, path, mode) {
 path >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  path = SYSCALLS.calculateAt(dirfd, path);
  path = PATH.normalize(path);
  if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
  FS.mkdir(path, mode, 0);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_newfstatat(dirfd, path, buf, flags) {
 path >>>= 0;
 buf >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  var nofollow = flags & 256;
  var allowEmpty = flags & 4096;
  flags = flags & ~6400;
  assert(!flags, `unknown flags in __syscall_newfstatat: ${flags}`);
  path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
  return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_openat(dirfd, path, flags, varargs) {
 path >>>= 0;
 varargs >>>= 0;
 SYSCALLS.varargs = varargs;
 try {
  path = SYSCALLS.getStr(path);
  path = SYSCALLS.calculateAt(dirfd, path);
  var mode = varargs ? SYSCALLS.get() : 0;
  return FS.open(path, flags, mode).fd;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

var PIPEFS = {
 BUCKET_BUFFER_SIZE: 8192,
 mount(mount) {
  return FS.createNode(null, "/", 16384 | 511, 0);
 },
 createPipe() {
  var pipe = {
   buckets: [],
   refcnt: 2
  };
  pipe.buckets.push({
   buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
   offset: 0,
   roffset: 0
  });
  var rName = PIPEFS.nextname();
  var wName = PIPEFS.nextname();
  var rNode = FS.createNode(PIPEFS.root, rName, 4096, 0);
  var wNode = FS.createNode(PIPEFS.root, wName, 4096, 0);
  rNode.pipe = pipe;
  wNode.pipe = pipe;
  var readableStream = FS.createStream({
   path: rName,
   node: rNode,
   flags: 0,
   seekable: false,
   stream_ops: PIPEFS.stream_ops
  });
  rNode.stream = readableStream;
  var writableStream = FS.createStream({
   path: wName,
   node: wNode,
   flags: 1,
   seekable: false,
   stream_ops: PIPEFS.stream_ops
  });
  wNode.stream = writableStream;
  return {
   readable_fd: readableStream.fd,
   writable_fd: writableStream.fd
  };
 },
 stream_ops: {
  poll(stream) {
   var pipe = stream.node.pipe;
   if ((stream.flags & 2097155) === 1) {
    return 256 | 4;
   }
   if (pipe.buckets.length > 0) {
    for (var i = 0; i < pipe.buckets.length; i++) {
     var bucket = pipe.buckets[i];
     if (bucket.offset - bucket.roffset > 0) {
      return 64 | 1;
     }
    }
   }
   return 0;
  },
  ioctl(stream, request, varargs) {
   return 28;
  },
  fsync(stream) {
   return 28;
  },
  read(stream, buffer, offset, length, position) {
   var pipe = stream.node.pipe;
   var currentLength = 0;
   for (var i = 0; i < pipe.buckets.length; i++) {
    var bucket = pipe.buckets[i];
    currentLength += bucket.offset - bucket.roffset;
   }
   assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
   var data = buffer.subarray(offset, offset + length);
   if (length <= 0) {
    return 0;
   }
   if (currentLength == 0) {
    throw new FS.ErrnoError(6);
   }
   var toRead = Math.min(currentLength, length);
   var totalRead = toRead;
   var toRemove = 0;
   for (var i = 0; i < pipe.buckets.length; i++) {
    var currBucket = pipe.buckets[i];
    var bucketSize = currBucket.offset - currBucket.roffset;
    if (toRead <= bucketSize) {
     var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
     if (toRead < bucketSize) {
      tmpSlice = tmpSlice.subarray(0, toRead);
      currBucket.roffset += toRead;
     } else {
      toRemove++;
     }
     data.set(tmpSlice);
     break;
    } else {
     var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
     data.set(tmpSlice);
     data = data.subarray(tmpSlice.byteLength);
     toRead -= tmpSlice.byteLength;
     toRemove++;
    }
   }
   if (toRemove && toRemove == pipe.buckets.length) {
    toRemove--;
    pipe.buckets[toRemove].offset = 0;
    pipe.buckets[toRemove].roffset = 0;
   }
   pipe.buckets.splice(0, toRemove);
   return totalRead;
  },
  write(stream, buffer, offset, length, position) {
   var pipe = stream.node.pipe;
   assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
   var data = buffer.subarray(offset, offset + length);
   var dataLen = data.byteLength;
   if (dataLen <= 0) {
    return 0;
   }
   var currBucket = null;
   if (pipe.buckets.length == 0) {
    currBucket = {
     buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
     offset: 0,
     roffset: 0
    };
    pipe.buckets.push(currBucket);
   } else {
    currBucket = pipe.buckets[pipe.buckets.length - 1];
   }
   assert(currBucket.offset <= PIPEFS.BUCKET_BUFFER_SIZE);
   var freeBytesInCurrBuffer = PIPEFS.BUCKET_BUFFER_SIZE - currBucket.offset;
   if (freeBytesInCurrBuffer >= dataLen) {
    currBucket.buffer.set(data, currBucket.offset);
    currBucket.offset += dataLen;
    return dataLen;
   } else if (freeBytesInCurrBuffer > 0) {
    currBucket.buffer.set(data.subarray(0, freeBytesInCurrBuffer), currBucket.offset);
    currBucket.offset += freeBytesInCurrBuffer;
    data = data.subarray(freeBytesInCurrBuffer, data.byteLength);
   }
   var numBuckets = data.byteLength / PIPEFS.BUCKET_BUFFER_SIZE | 0;
   var remElements = data.byteLength % PIPEFS.BUCKET_BUFFER_SIZE;
   for (var i = 0; i < numBuckets; i++) {
    var newBucket = {
     buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
     offset: PIPEFS.BUCKET_BUFFER_SIZE,
     roffset: 0
    };
    pipe.buckets.push(newBucket);
    newBucket.buffer.set(data.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE));
    data = data.subarray(PIPEFS.BUCKET_BUFFER_SIZE, data.byteLength);
   }
   if (remElements > 0) {
    var newBucket = {
     buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
     offset: data.byteLength,
     roffset: 0
    };
    pipe.buckets.push(newBucket);
    newBucket.buffer.set(data);
   }
   return dataLen;
  },
  close(stream) {
   var pipe = stream.node.pipe;
   pipe.refcnt--;
   if (pipe.refcnt === 0) {
    pipe.buckets = null;
   }
  }
 },
 nextname() {
  if (!PIPEFS.nextname.current) {
   PIPEFS.nextname.current = 0;
  }
  return "pipe[" + PIPEFS.nextname.current++ + "]";
 }
};

function ___syscall_pipe(fdPtr) {
 fdPtr >>>= 0;
 try {
  if (fdPtr == 0) {
   throw new FS.ErrnoError(21);
  }
  var res = PIPEFS.createPipe();
  HEAP32[fdPtr >>> 2] = res.readable_fd;
  HEAP32[fdPtr + 4 >>> 2] = res.writable_fd;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_poll(fds, nfds, timeout) {
 fds >>>= 0;
 try {
  var nonzero = 0;
  for (var i = 0; i < nfds; i++) {
   var pollfd = fds + 8 * i;
   var fd = HEAP32[pollfd >>> 2];
   var events = HEAP16[pollfd + 4 >>> 1];
   var mask = 32;
   var stream = FS.getStream(fd);
   if (stream) {
    mask = SYSCALLS.DEFAULT_POLLMASK;
    if (stream.stream_ops.poll) {
     mask = stream.stream_ops.poll(stream, -1);
    }
   }
   mask &= events | 8 | 16;
   if (mask) nonzero++;
   HEAP16[pollfd + 6 >>> 1] = mask;
  }
  return nonzero;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_readlinkat(dirfd, path, buf, bufsize) {
 path >>>= 0;
 buf >>>= 0;
 bufsize >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  path = SYSCALLS.calculateAt(dirfd, path);
  if (bufsize <= 0) return -28;
  var ret = FS.readlink(path);
  var len = Math.min(bufsize, lengthBytesUTF8(ret));
  var endChar = HEAP8[buf + len >>> 0];
  stringToUTF8(ret, buf, bufsize + 1);
  HEAP8[buf + len >>> 0] = endChar;
  return len;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
 buf >>>= 0;
 len >>>= 0;
 addr >>>= 0;
 addrlen >>>= 0;
 try {
  var sock = getSocketFromFD(fd);
  var msg = sock.sock_ops.recvmsg(sock, len);
  if (!msg) return 0;
  if (addr) {
   var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
   assert(!errno);
  }
  HEAPU8.set(msg.buffer, buf >>> 0);
  return msg.buffer.byteLength;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
 oldpath >>>= 0;
 newpath >>>= 0;
 try {
  oldpath = SYSCALLS.getStr(oldpath);
  newpath = SYSCALLS.getStr(newpath);
  oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
  newpath = SYSCALLS.calculateAt(newdirfd, newpath);
  FS.rename(oldpath, newpath);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_rmdir(path) {
 path >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  FS.rmdir(path);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
 message >>>= 0;
 length >>>= 0;
 addr >>>= 0;
 addr_len >>>= 0;
 try {
  var sock = getSocketFromFD(fd);
  var dest = getSocketAddress(addr, addr_len, true);
  if (!dest) {
   return FS.write(sock.stream, HEAP8, message, length);
  }
  return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port);
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_socket(domain, type, protocol) {
 try {
  var sock = SOCKFS.createSocket(domain, type, protocol);
  assert(sock.stream.fd < 64);
  return sock.stream.fd;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_stat64(path, buf) {
 path >>>= 0;
 buf >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doStat(FS.stat, path, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_symlink(target, linkpath) {
 target >>>= 0;
 linkpath >>>= 0;
 try {
  target = SYSCALLS.getStr(target);
  linkpath = SYSCALLS.getStr(linkpath);
  FS.symlink(target, linkpath);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_unlinkat(dirfd, path, flags) {
 path >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  path = SYSCALLS.calculateAt(dirfd, path);
  if (flags === 0) {
   FS.unlink(path);
  } else if (flags === 512) {
   FS.rmdir(path);
  } else {
   abort("Invalid flags passed to unlinkat");
  }
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function readI53FromI64(ptr) {
 return HEAPU32[ptr >>> 2] + HEAP32[ptr + 4 >>> 2] * 4294967296;
}

function ___syscall_utimensat(dirfd, path, times, flags) {
 path >>>= 0;
 times >>>= 0;
 try {
  path = SYSCALLS.getStr(path);
  assert(flags === 0);
  path = SYSCALLS.calculateAt(dirfd, path, true);
  if (!times) {
   var atime = Date.now();
   var mtime = atime;
  } else {
   var seconds = readI53FromI64(times);
   var nanoseconds = HEAP32[times + 8 >>> 2];
   atime = seconds * 1e3 + nanoseconds / (1e3 * 1e3);
   times += 16;
   seconds = readI53FromI64(times);
   nanoseconds = HEAP32[times + 8 >>> 2];
   mtime = seconds * 1e3 + nanoseconds / (1e3 * 1e3);
  }
  FS.utime(path, atime, mtime);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

var nowIsMonotonic = true;

var __emscripten_get_now_is_monotonic = () => nowIsMonotonic;

var __emscripten_throw_longjmp = () => {
 throw Infinity;
};

function __gmtime_js(time_low, time_high, tmPtr) {
 var time = convertI32PairToI53Checked(time_low, time_high);
 tmPtr >>>= 0;
 var date = new Date(time * 1e3);
 HEAP32[tmPtr >>> 2] = date.getUTCSeconds();
 HEAP32[tmPtr + 4 >>> 2] = date.getUTCMinutes();
 HEAP32[tmPtr + 8 >>> 2] = date.getUTCHours();
 HEAP32[tmPtr + 12 >>> 2] = date.getUTCDate();
 HEAP32[tmPtr + 16 >>> 2] = date.getUTCMonth();
 HEAP32[tmPtr + 20 >>> 2] = date.getUTCFullYear() - 1900;
 HEAP32[tmPtr + 24 >>> 2] = date.getUTCDay();
 var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
 var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
 HEAP32[tmPtr + 28 >>> 2] = yday;
}

var isLeapYear = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

var MONTH_DAYS_LEAP_CUMULATIVE = [ 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335 ];

var MONTH_DAYS_REGULAR_CUMULATIVE = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ];

var ydayFromDate = date => {
 var leap = isLeapYear(date.getFullYear());
 var monthDaysCumulative = leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE;
 var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
 return yday;
};

function __localtime_js(time_low, time_high, tmPtr) {
 var time = convertI32PairToI53Checked(time_low, time_high);
 tmPtr >>>= 0;
 var date = new Date(time * 1e3);
 HEAP32[tmPtr >>> 2] = date.getSeconds();
 HEAP32[tmPtr + 4 >>> 2] = date.getMinutes();
 HEAP32[tmPtr + 8 >>> 2] = date.getHours();
 HEAP32[tmPtr + 12 >>> 2] = date.getDate();
 HEAP32[tmPtr + 16 >>> 2] = date.getMonth();
 HEAP32[tmPtr + 20 >>> 2] = date.getFullYear() - 1900;
 HEAP32[tmPtr + 24 >>> 2] = date.getDay();
 var yday = ydayFromDate(date) | 0;
 HEAP32[tmPtr + 28 >>> 2] = yday;
 HEAP32[tmPtr + 36 >>> 2] = -(date.getTimezoneOffset() * 60);
 var start = new Date(date.getFullYear(), 0, 1);
 var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
 var winterOffset = start.getTimezoneOffset();
 var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
 HEAP32[tmPtr + 32 >>> 2] = dst;
}

var __mktime_js = function(tmPtr) {
 tmPtr >>>= 0;
 var ret = (() => {
  var date = new Date(HEAP32[tmPtr + 20 >>> 2] + 1900, HEAP32[tmPtr + 16 >>> 2], HEAP32[tmPtr + 12 >>> 2], HEAP32[tmPtr + 8 >>> 2], HEAP32[tmPtr + 4 >>> 2], HEAP32[tmPtr >>> 2], 0);
  var dst = HEAP32[tmPtr + 32 >>> 2];
  var guessedOffset = date.getTimezoneOffset();
  var start = new Date(date.getFullYear(), 0, 1);
  var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  var winterOffset = start.getTimezoneOffset();
  var dstOffset = Math.min(winterOffset, summerOffset);
  if (dst < 0) {
   HEAP32[tmPtr + 32 >>> 2] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
  } else if (dst > 0 != (dstOffset == guessedOffset)) {
   var nonDstOffset = Math.max(winterOffset, summerOffset);
   var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
   date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4);
  }
  HEAP32[tmPtr + 24 >>> 2] = date.getDay();
  var yday = ydayFromDate(date) | 0;
  HEAP32[tmPtr + 28 >>> 2] = yday;
  HEAP32[tmPtr >>> 2] = date.getSeconds();
  HEAP32[tmPtr + 4 >>> 2] = date.getMinutes();
  HEAP32[tmPtr + 8 >>> 2] = date.getHours();
  HEAP32[tmPtr + 12 >>> 2] = date.getDate();
  HEAP32[tmPtr + 16 >>> 2] = date.getMonth();
  HEAP32[tmPtr + 20 >>> 2] = date.getYear();
  return date.getTime() / 1e3;
 })();
 return setTempRet0((tempDouble = ret, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)), 
 ret >>> 0;
};

function __mmap_js(len, prot, flags, fd, offset_low, offset_high, allocated, addr) {
 len >>>= 0;
 var offset = convertI32PairToI53Checked(offset_low, offset_high);
 allocated >>>= 0;
 addr >>>= 0;
 try {
  if (isNaN(offset)) return 61;
  var stream = SYSCALLS.getStreamFromFD(fd);
  var res = FS.mmap(stream, len, offset, prot, flags);
  var ptr = res.ptr;
  HEAP32[allocated >>> 2] = res.allocated;
  HEAPU32[addr >>> 2] = ptr;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function __msync_js(addr, len, prot, flags, fd, offset_low, offset_high) {
 addr >>>= 0;
 len >>>= 0;
 var offset = convertI32PairToI53Checked(offset_low, offset_high);
 try {
  if (isNaN(offset)) return 61;
  SYSCALLS.doMsync(addr, SYSCALLS.getStreamFromFD(fd), len, flags, offset);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function __munmap_js(addr, len, prot, flags, fd, offset_low, offset_high) {
 addr >>>= 0;
 len >>>= 0;
 var offset = convertI32PairToI53Checked(offset_low, offset_high);
 try {
  if (isNaN(offset)) return 61;
  var stream = SYSCALLS.getStreamFromFD(fd);
  if (prot & 2) {
   SYSCALLS.doMsync(addr, stream, len, flags, offset);
  }
  FS.munmap(stream);
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

var timers = {};

var handleException = e => {
 if (e instanceof ExitStatus || e == "unwind") {
  return EXITSTATUS;
 }
 checkStackCookie();
 if (e instanceof WebAssembly.RuntimeError) {
  if (_emscripten_stack_get_current() <= 0) {
   err("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 65536)");
  }
 }
 quit_(1, e);
};

var _proc_exit = code => {
 EXITSTATUS = code;
 if (!keepRuntimeAlive()) {
  if (Module["onExit"]) Module["onExit"](code);
  ABORT = true;
 }
 quit_(code, new ExitStatus(code));
};

var exitJS = (status, implicit) => {
 EXITSTATUS = status;
 checkUnflushedContent();
 if (keepRuntimeAlive() && !implicit) {
  var msg = `program exited (with status: ${status}), but keepRuntimeAlive() is set (counter=${runtimeKeepaliveCounter}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;
  readyPromiseReject(msg);
  err(msg);
 }
 _proc_exit(status);
};

var _exit = exitJS;

var maybeExit = () => {
 if (!keepRuntimeAlive()) {
  try {
   _exit(EXITSTATUS);
  } catch (e) {
   handleException(e);
  }
 }
};

var callUserCallback = func => {
 if (ABORT) {
  err("user callback triggered after runtime exited or application aborted.  Ignoring.");
  return;
 }
 try {
  func();
  maybeExit();
 } catch (e) {
  handleException(e);
 }
};

var _emscripten_get_now;

_emscripten_get_now = () => performance.now();

var __setitimer_js = (which, timeout_ms) => {
 if (timers[which]) {
  clearTimeout(timers[which].id);
  delete timers[which];
 }
 if (!timeout_ms) return 0;
 var id = setTimeout((() => {
  assert(which in timers);
  delete timers[which];
  callUserCallback((() => __emscripten_timeout(which, _emscripten_get_now())));
 }), timeout_ms);
 timers[which] = {
  id: id,
  timeout_ms: timeout_ms
 };
 return 0;
};

var __timegm_js = function(tmPtr) {
 tmPtr >>>= 0;
 var ret = (() => {
  var time = Date.UTC(HEAP32[tmPtr + 20 >>> 2] + 1900, HEAP32[tmPtr + 16 >>> 2], HEAP32[tmPtr + 12 >>> 2], HEAP32[tmPtr + 8 >>> 2], HEAP32[tmPtr + 4 >>> 2], HEAP32[tmPtr >>> 2], 0);
  var date = new Date(time);
  HEAP32[tmPtr + 24 >>> 2] = date.getUTCDay();
  var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
  var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
  HEAP32[tmPtr + 28 >>> 2] = yday;
  return date.getTime() / 1e3;
 })();
 return setTempRet0((tempDouble = ret, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)), 
 ret >>> 0;
};

var stringToNewUTF8 = str => {
 var size = lengthBytesUTF8(str) + 1;
 var ret = _malloc(size);
 if (ret) stringToUTF8(str, ret, size);
 return ret;
};

function __tzset_js(timezone, daylight, tzname) {
 timezone >>>= 0;
 daylight >>>= 0;
 tzname >>>= 0;
 var currentYear = (new Date).getFullYear();
 var winter = new Date(currentYear, 0, 1);
 var summer = new Date(currentYear, 6, 1);
 var winterOffset = winter.getTimezoneOffset();
 var summerOffset = summer.getTimezoneOffset();
 var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
 HEAPU32[timezone >>> 2] = stdTimezoneOffset * 60;
 HEAP32[daylight >>> 2] = Number(winterOffset != summerOffset);
 function extractZone(date) {
  var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
  return match ? match[1] : "GMT";
 }
 var winterName = extractZone(winter);
 var summerName = extractZone(summer);
 var winterNamePtr = stringToNewUTF8(winterName);
 var summerNamePtr = stringToNewUTF8(summerName);
 if (summerOffset < winterOffset) {
  HEAPU32[tzname >>> 2] = winterNamePtr;
  HEAPU32[tzname + 4 >>> 2] = summerNamePtr;
 } else {
  HEAPU32[tzname >>> 2] = summerNamePtr;
  HEAPU32[tzname + 4 >>> 2] = winterNamePtr;
 }
}

var _abort = () => {
 abort("native code called abort()");
};

var readEmAsmArgsArray = [];

var readEmAsmArgs = (sigPtr, buf) => {
 assert(Array.isArray(readEmAsmArgsArray));
 assert(buf % 16 == 0);
 readEmAsmArgsArray.length = 0;
 var ch;
 buf >>= 2;
 while (ch = HEAPU8[sigPtr++ >>> 0]) {
  var chr = String.fromCharCode(ch);
  var validChars = [ "d", "f", "i" ];
  assert(validChars.includes(chr), `Invalid character ${ch}("${chr}") in readEmAsmArgs! Use only [${validChars}], and do not specify "v" for void return argument.`);
  buf += ch != 105 & buf;
  readEmAsmArgsArray.push(ch == 105 ? HEAP32[buf >>> 0] : HEAPF64[buf++ >>> 1]);
  ++buf;
 }
 return readEmAsmArgsArray;
};

var runEmAsmFunction = (code, sigPtr, argbuf) => {
 var args = readEmAsmArgs(sigPtr, argbuf);
 if (!ASM_CONSTS.hasOwnProperty(code)) abort(`No EM_ASM constant found at address ${code}`);
 return ASM_CONSTS[code].apply(null, args);
};

function _emscripten_asm_const_int(code, sigPtr, argbuf) {
 code >>>= 0;
 sigPtr >>>= 0;
 argbuf >>>= 0;
 return runEmAsmFunction(code, sigPtr, argbuf);
}

function _emscripten_asm_const_ptr(code, sigPtr, argbuf) {
 code >>>= 0;
 sigPtr >>>= 0;
 argbuf >>>= 0;
 return runEmAsmFunction(code, sigPtr, argbuf);
}

function _emscripten_console_error(str) {
 str >>>= 0;
 assert(typeof str == "number");
 console.error(UTF8ToString(str));
}

function _emscripten_date_now() {
 return Date.now();
}

var getHeapMax = () => 4294901760;

function _emscripten_get_heap_max() {
 return getHeapMax();
}

var _emscripten_get_now_res = () => 1e3;

function _emscripten_memcpy_big(dest, src, num) {
 dest >>>= 0;
 src >>>= 0;
 num >>>= 0;
 return HEAPU8.copyWithin(dest >>> 0, src >>> 0, src + num >>> 0);
}

var growMemory = size => {
 var b = wasmMemory.buffer;
 var pages = size - b.byteLength + 65535 >>> 16;
 try {
  wasmMemory.grow(pages);
  updateMemoryViews();
  return 1;
 } catch (e) {
  err(`growMemory: Attempted to grow heap from ${b.byteLength} bytes to ${size} bytes, but got error: ${e}`);
 }
};

function _emscripten_resize_heap(requestedSize) {
 requestedSize >>>= 0;
 var oldSize = HEAPU8.length;
 assert(requestedSize > oldSize);
 var maxHeapSize = getHeapMax();
 if (requestedSize > maxHeapSize) {
  err(`Cannot enlarge memory, asked to go up to ${requestedSize} bytes, but the limit is ${maxHeapSize} bytes!`);
  return false;
 }
 var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
 for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
  var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
  overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
  var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  var replacement = growMemory(newSize);
  if (replacement) {
   return true;
  }
 }
 err(`Failed to grow the heap from ${oldSize} bytes to ${newSize} bytes, not enough memory!`);
 return false;
}

var ENV = {};

var getExecutableName = () => thisProgram || "./this.program";

var getEnvStrings = () => {
 if (!getEnvStrings.strings) {
  var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
  var env = {
   "USER": "web_user",
   "LOGNAME": "web_user",
   "PATH": "/",
   "PWD": "/",
   "HOME": "/home/web_user",
   "LANG": lang,
   "_": getExecutableName()
  };
  for (var x in ENV) {
   if (ENV[x] === undefined) delete env[x]; else env[x] = ENV[x];
  }
  var strings = [];
  for (var x in env) {
   strings.push(`${x}=${env[x]}`);
  }
  getEnvStrings.strings = strings;
 }
 return getEnvStrings.strings;
};

var stringToAscii = (str, buffer) => {
 for (var i = 0; i < str.length; ++i) {
  assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255));
  HEAP8[buffer++ >>> 0] = str.charCodeAt(i);
 }
 HEAP8[buffer >>> 0] = 0;
};

function _environ_get(__environ, environ_buf) {
 __environ >>>= 0;
 environ_buf >>>= 0;
 var bufSize = 0;
 getEnvStrings().forEach((function(string, i) {
  var ptr = environ_buf + bufSize;
  HEAPU32[__environ + i * 4 >>> 2] = ptr;
  stringToAscii(string, ptr);
  bufSize += string.length + 1;
 }));
 return 0;
}

function _environ_sizes_get(penviron_count, penviron_buf_size) {
 penviron_count >>>= 0;
 penviron_buf_size >>>= 0;
 var strings = getEnvStrings();
 HEAPU32[penviron_count >>> 2] = strings.length;
 var bufSize = 0;
 strings.forEach((function(string) {
  bufSize += string.length + 1;
 }));
 HEAPU32[penviron_buf_size >>> 2] = bufSize;
 return 0;
}

function _fd_close(fd) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  FS.close(stream);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

function _fd_fdstat_get(fd, pbuf) {
 pbuf >>>= 0;
 try {
  var rightsBase = 0;
  var rightsInheriting = 0;
  var flags = 0;
  {
   var stream = SYSCALLS.getStreamFromFD(fd);
   var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
  }
  HEAP8[pbuf >>> 0] = type;
  HEAP16[pbuf + 2 >>> 1] = flags;
  tempI64 = [ rightsBase >>> 0, (tempDouble = rightsBase, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  HEAP32[pbuf + 8 >>> 2] = tempI64[0], HEAP32[pbuf + 12 >>> 2] = tempI64[1];
  tempI64 = [ rightsInheriting >>> 0, (tempDouble = rightsInheriting, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  HEAP32[pbuf + 16 >>> 2] = tempI64[0], HEAP32[pbuf + 20 >>> 2] = tempI64[1];
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

var doReadv = (stream, iov, iovcnt, offset) => {
 var ret = 0;
 for (var i = 0; i < iovcnt; i++) {
  var ptr = HEAPU32[iov >>> 2];
  var len = HEAPU32[iov + 4 >>> 2];
  iov += 8;
  var curr = FS.read(stream, HEAP8, ptr, len, offset);
  if (curr < 0) return -1;
  ret += curr;
  if (curr < len) break;
  if (typeof offset !== "undefined") {
   offset += curr;
  }
 }
 return ret;
};

function _fd_read(fd, iov, iovcnt, pnum) {
 iov >>>= 0;
 iovcnt >>>= 0;
 pnum >>>= 0;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = doReadv(stream, iov, iovcnt);
  HEAPU32[pnum >>> 2] = num;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
 var offset = convertI32PairToI53Checked(offset_low, offset_high);
 newOffset >>>= 0;
 try {
  if (isNaN(offset)) return 61;
  var stream = SYSCALLS.getStreamFromFD(fd);
  FS.llseek(stream, offset, whence);
  tempI64 = [ stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  HEAP32[newOffset >>> 2] = tempI64[0], HEAP32[newOffset + 4 >>> 2] = tempI64[1];
  if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

function _fd_sync(fd) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  if (stream.stream_ops && stream.stream_ops.fsync) {
   return stream.stream_ops.fsync(stream);
  }
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

var doWritev = (stream, iov, iovcnt, offset) => {
 var ret = 0;
 for (var i = 0; i < iovcnt; i++) {
  var ptr = HEAPU32[iov >>> 2];
  var len = HEAPU32[iov + 4 >>> 2];
  iov += 8;
  var curr = FS.write(stream, HEAP8, ptr, len, offset);
  if (curr < 0) return -1;
  ret += curr;
  if (typeof offset !== "undefined") {
   offset += curr;
  }
 }
 return ret;
};

function _fd_write(fd, iov, iovcnt, pnum) {
 iov >>>= 0;
 iovcnt >>>= 0;
 pnum >>>= 0;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = doWritev(stream, iov, iovcnt);
  HEAPU32[pnum >>> 2] = num;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

function _getaddrinfo(node, service, hint, out) {
 node >>>= 0;
 service >>>= 0;
 hint >>>= 0;
 out >>>= 0;
 var addrs = [];
 var canon = null;
 var addr = 0;
 var port = 0;
 var flags = 0;
 var family = 0;
 var type = 0;
 var proto = 0;
 var ai, last;
 function allocaddrinfo(family, type, proto, canon, addr, port) {
  var sa, salen, ai;
  var errno;
  salen = family === 10 ? 28 : 16;
  addr = family === 10 ? inetNtop6(addr) : inetNtop4(addr);
  sa = _malloc(salen);
  errno = writeSockaddr(sa, family, addr, port);
  assert(!errno);
  ai = _malloc(32);
  HEAP32[ai + 4 >>> 2] = family;
  HEAP32[ai + 8 >>> 2] = type;
  HEAP32[ai + 12 >>> 2] = proto;
  HEAPU32[ai + 24 >>> 2] = canon;
  HEAPU32[ai + 20 >>> 2] = sa;
  if (family === 10) {
   HEAP32[ai + 16 >>> 2] = 28;
  } else {
   HEAP32[ai + 16 >>> 2] = 16;
  }
  HEAP32[ai + 28 >>> 2] = 0;
  return ai;
 }
 if (hint) {
  flags = HEAP32[hint >>> 2];
  family = HEAP32[hint + 4 >>> 2];
  type = HEAP32[hint + 8 >>> 2];
  proto = HEAP32[hint + 12 >>> 2];
 }
 if (type && !proto) {
  proto = type === 2 ? 17 : 6;
 }
 if (!type && proto) {
  type = proto === 17 ? 2 : 1;
 }
 if (proto === 0) {
  proto = 6;
 }
 if (type === 0) {
  type = 1;
 }
 if (!node && !service) {
  return -2;
 }
 if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
  return -1;
 }
 if (hint !== 0 && HEAP32[hint >>> 2] & 2 && !node) {
  return -1;
 }
 if (flags & 32) {
  return -2;
 }
 if (type !== 0 && type !== 1 && type !== 2) {
  return -7;
 }
 if (family !== 0 && family !== 2 && family !== 10) {
  return -6;
 }
 if (service) {
  service = UTF8ToString(service);
  port = parseInt(service, 10);
  if (isNaN(port)) {
   if (flags & 1024) {
    return -2;
   }
   return -8;
  }
 }
 if (!node) {
  if (family === 0) {
   family = 2;
  }
  if ((flags & 1) === 0) {
   if (family === 2) {
    addr = _htonl(2130706433);
   } else {
    addr = [ 0, 0, 0, 1 ];
   }
  }
  ai = allocaddrinfo(family, type, proto, null, addr, port);
  HEAPU32[out >>> 2] = ai;
  return 0;
 }
 node = UTF8ToString(node);
 addr = inetPton4(node);
 if (addr !== null) {
  if (family === 0 || family === 2) {
   family = 2;
  } else if (family === 10 && flags & 8) {
   addr = [ 0, 0, _htonl(65535), addr ];
   family = 10;
  } else {
   return -2;
  }
 } else {
  addr = inetPton6(node);
  if (addr !== null) {
   if (family === 0 || family === 10) {
    family = 10;
   } else {
    return -2;
   }
  }
 }
 if (addr != null) {
  ai = allocaddrinfo(family, type, proto, node, addr, port);
  HEAPU32[out >>> 2] = ai;
  return 0;
 }
 if (flags & 4) {
  return -2;
 }
 node = DNS.lookup_name(node);
 addr = inetPton4(node);
 if (family === 0) {
  family = 2;
 } else if (family === 10) {
  addr = [ 0, 0, _htonl(65535), addr ];
 }
 ai = allocaddrinfo(family, type, proto, null, addr, port);
 HEAPU32[out >>> 2] = ai;
 return 0;
}

function _getcontext() {
 err("missing function: getcontext");
 abort(-1);
}

function _getdtablesize() {
 err("missing function: getdtablesize");
 abort(-1);
}

var getHostByName = name => {
 var ret = _malloc(20);
 var nameBuf = stringToNewUTF8(name);
 HEAPU32[ret >>> 2] = nameBuf;
 var aliasesBuf = _malloc(4);
 HEAPU32[aliasesBuf >>> 2] = 0;
 HEAPU32[ret + 4 >>> 2] = aliasesBuf;
 var afinet = 2;
 HEAP32[ret + 8 >>> 2] = afinet;
 HEAP32[ret + 12 >>> 2] = 4;
 var addrListBuf = _malloc(12);
 HEAPU32[addrListBuf >>> 2] = addrListBuf + 8;
 HEAPU32[addrListBuf + 4 >>> 2] = 0;
 HEAP32[addrListBuf + 8 >>> 2] = inetPton4(DNS.lookup_name(name));
 HEAPU32[ret + 16 >>> 2] = addrListBuf;
 return ret;
};

function _gethostbyname(name) {
 name >>>= 0;
 return getHostByName(UTF8ToString(name));
}

function _gethostbyname_r(name, ret, buf, buflen, out, err) {
 name >>>= 0;
 ret >>>= 0;
 buf >>>= 0;
 buflen >>>= 0;
 out >>>= 0;
 err >>>= 0;
 var data = _gethostbyname(name);
 _memcpy(ret, data, 20);
 _free(data);
 HEAP32[err >>> 2] = 0;
 HEAPU32[out >>> 2] = ret;
 return 0;
}

function _getloadavg(loadavg, nelem) {
 loadavg >>>= 0;
 var limit = Math.min(nelem, 3);
 var doubleSize = 8;
 for (var i = 0; i < limit; i++) {
  HEAPF64[loadavg + i * doubleSize >>> 3] = .1;
 }
 return limit;
}

function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
 sa >>>= 0;
 node >>>= 0;
 serv >>>= 0;
 var info = readSockaddr(sa, salen);
 if (info.errno) {
  return -6;
 }
 var port = info.port;
 var addr = info.addr;
 var overflowed = false;
 if (node && nodelen) {
  var lookup;
  if (flags & 1 || !(lookup = DNS.lookup_addr(addr))) {
   if (flags & 8) {
    return -2;
   }
  } else {
   addr = lookup;
  }
  var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
  if (numBytesWrittenExclNull + 1 >= nodelen) {
   overflowed = true;
  }
 }
 if (serv && servlen) {
  port = "" + port;
  var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
  if (numBytesWrittenExclNull + 1 >= servlen) {
   overflowed = true;
  }
 }
 if (overflowed) {
  return -12;
 }
 return 0;
}

var Protocols = {
 list: [],
 map: {}
};

var _setprotoent = stayopen => {
 function allocprotoent(name, proto, aliases) {
  var nameBuf = _malloc(name.length + 1);
  stringToAscii(name, nameBuf);
  var j = 0;
  var length = aliases.length;
  var aliasListBuf = _malloc((length + 1) * 4);
  for (var i = 0; i < length; i++, j += 4) {
   var alias = aliases[i];
   var aliasBuf = _malloc(alias.length + 1);
   stringToAscii(alias, aliasBuf);
   HEAPU32[aliasListBuf + j >>> 2] = aliasBuf;
  }
  HEAPU32[aliasListBuf + j >>> 2] = 0;
  var pe = _malloc(12);
  HEAPU32[pe >>> 2] = nameBuf;
  HEAPU32[pe + 4 >>> 2] = aliasListBuf;
  HEAP32[pe + 8 >>> 2] = proto;
  return pe;
 }
 var list = Protocols.list;
 var map = Protocols.map;
 if (list.length === 0) {
  var entry = allocprotoent("tcp", 6, [ "TCP" ]);
  list.push(entry);
  map["tcp"] = map["6"] = entry;
  entry = allocprotoent("udp", 17, [ "UDP" ]);
  list.push(entry);
  map["udp"] = map["17"] = entry;
 }
 _setprotoent.index = 0;
};

function _getprotobyname(name) {
 name >>>= 0;
 name = UTF8ToString(name);
 _setprotoent(true);
 var result = Protocols.map[name];
 return result;
}

function _getprotobynumber(number) {
 _setprotoent(true);
 var result = Protocols.map[number];
 return result;
}

function _makecontext() {
 err("missing function: makecontext");
 abort(-1);
}

var arraySum = (array, index) => {
 var sum = 0;
 for (var i = 0; i <= index; sum += array[i++]) {}
 return sum;
};

var MONTH_DAYS_LEAP = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

var MONTH_DAYS_REGULAR = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

var addDays = (date, days) => {
 var newDate = new Date(date.getTime());
 while (days > 0) {
  var leap = isLeapYear(newDate.getFullYear());
  var currentMonth = newDate.getMonth();
  var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
  if (days > daysInCurrentMonth - newDate.getDate()) {
   days -= daysInCurrentMonth - newDate.getDate() + 1;
   newDate.setDate(1);
   if (currentMonth < 11) {
    newDate.setMonth(currentMonth + 1);
   } else {
    newDate.setMonth(0);
    newDate.setFullYear(newDate.getFullYear() + 1);
   }
  } else {
   newDate.setDate(newDate.getDate() + days);
   return newDate;
  }
 }
 return newDate;
};

var writeArrayToMemory = (array, buffer) => {
 assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
 HEAP8.set(array, buffer >>> 0);
};

function _strftime(s, maxsize, format, tm) {
 s >>>= 0;
 maxsize >>>= 0;
 format >>>= 0;
 tm >>>= 0;
 var tm_zone = HEAP32[tm + 40 >>> 2];
 var date = {
  tm_sec: HEAP32[tm >>> 2],
  tm_min: HEAP32[tm + 4 >>> 2],
  tm_hour: HEAP32[tm + 8 >>> 2],
  tm_mday: HEAP32[tm + 12 >>> 2],
  tm_mon: HEAP32[tm + 16 >>> 2],
  tm_year: HEAP32[tm + 20 >>> 2],
  tm_wday: HEAP32[tm + 24 >>> 2],
  tm_yday: HEAP32[tm + 28 >>> 2],
  tm_isdst: HEAP32[tm + 32 >>> 2],
  tm_gmtoff: HEAP32[tm + 36 >>> 2],
  tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
 };
 var pattern = UTF8ToString(format);
 var EXPANSION_RULES_1 = {
  "%c": "%a %b %d %H:%M:%S %Y",
  "%D": "%m/%d/%y",
  "%F": "%Y-%m-%d",
  "%h": "%b",
  "%r": "%I:%M:%S %p",
  "%R": "%H:%M",
  "%T": "%H:%M:%S",
  "%x": "%m/%d/%y",
  "%X": "%H:%M:%S",
  "%Ec": "%c",
  "%EC": "%C",
  "%Ex": "%m/%d/%y",
  "%EX": "%H:%M:%S",
  "%Ey": "%y",
  "%EY": "%Y",
  "%Od": "%d",
  "%Oe": "%e",
  "%OH": "%H",
  "%OI": "%I",
  "%Om": "%m",
  "%OM": "%M",
  "%OS": "%S",
  "%Ou": "%u",
  "%OU": "%U",
  "%OV": "%V",
  "%Ow": "%w",
  "%OW": "%W",
  "%Oy": "%y"
 };
 for (var rule in EXPANSION_RULES_1) {
  pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
 }
 var WEEKDAYS = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
 var MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
 function leadingSomething(value, digits, character) {
  var str = typeof value == "number" ? value.toString() : value || "";
  while (str.length < digits) {
   str = character[0] + str;
  }
  return str;
 }
 function leadingNulls(value, digits) {
  return leadingSomething(value, digits, "0");
 }
 function compareByDay(date1, date2) {
  function sgn(value) {
   return value < 0 ? -1 : value > 0 ? 1 : 0;
  }
  var compare;
  if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
   if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
    compare = sgn(date1.getDate() - date2.getDate());
   }
  }
  return compare;
 }
 function getFirstWeekStartDate(janFourth) {
  switch (janFourth.getDay()) {
  case 0:
   return new Date(janFourth.getFullYear() - 1, 11, 29);

  case 1:
   return janFourth;

  case 2:
   return new Date(janFourth.getFullYear(), 0, 3);

  case 3:
   return new Date(janFourth.getFullYear(), 0, 2);

  case 4:
   return new Date(janFourth.getFullYear(), 0, 1);

  case 5:
   return new Date(janFourth.getFullYear() - 1, 11, 31);

  case 6:
   return new Date(janFourth.getFullYear() - 1, 11, 30);
  }
 }
 function getWeekBasedYear(date) {
  var thisDate = addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
  var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
  var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
  var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
  var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
   if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
    return thisDate.getFullYear() + 1;
   }
   return thisDate.getFullYear();
  }
  return thisDate.getFullYear() - 1;
 }
 var EXPANSION_RULES_2 = {
  "%a": date => WEEKDAYS[date.tm_wday].substring(0, 3),
  "%A": date => WEEKDAYS[date.tm_wday],
  "%b": date => MONTHS[date.tm_mon].substring(0, 3),
  "%B": date => MONTHS[date.tm_mon],
  "%C": date => {
   var year = date.tm_year + 1900;
   return leadingNulls(year / 100 | 0, 2);
  },
  "%d": date => leadingNulls(date.tm_mday, 2),
  "%e": date => leadingSomething(date.tm_mday, 2, " "),
  "%g": date => getWeekBasedYear(date).toString().substring(2),
  "%G": date => getWeekBasedYear(date),
  "%H": date => leadingNulls(date.tm_hour, 2),
  "%I": date => {
   var twelveHour = date.tm_hour;
   if (twelveHour == 0) twelveHour = 12; else if (twelveHour > 12) twelveHour -= 12;
   return leadingNulls(twelveHour, 2);
  },
  "%j": date => leadingNulls(date.tm_mday + arraySum(isLeapYear(date.tm_year + 1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date.tm_mon - 1), 3),
  "%m": date => leadingNulls(date.tm_mon + 1, 2),
  "%M": date => leadingNulls(date.tm_min, 2),
  "%n": () => "\n",
  "%p": date => {
   if (date.tm_hour >= 0 && date.tm_hour < 12) {
    return "AM";
   }
   return "PM";
  },
  "%S": date => leadingNulls(date.tm_sec, 2),
  "%t": () => "\t",
  "%u": date => date.tm_wday || 7,
  "%U": date => {
   var days = date.tm_yday + 7 - date.tm_wday;
   return leadingNulls(Math.floor(days / 7), 2);
  },
  "%V": date => {
   var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7) / 7);
   if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
    val++;
   }
   if (!val) {
    val = 52;
    var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
    if (dec31 == 4 || dec31 == 5 && isLeapYear(date.tm_year % 400 - 1)) {
     val++;
    }
   } else if (val == 53) {
    var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
    if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date.tm_year))) val = 1;
   }
   return leadingNulls(val, 2);
  },
  "%w": date => date.tm_wday,
  "%W": date => {
   var days = date.tm_yday + 7 - (date.tm_wday + 6) % 7;
   return leadingNulls(Math.floor(days / 7), 2);
  },
  "%y": date => (date.tm_year + 1900).toString().substring(2),
  "%Y": date => date.tm_year + 1900,
  "%z": date => {
   var off = date.tm_gmtoff;
   var ahead = off >= 0;
   off = Math.abs(off) / 60;
   off = off / 60 * 100 + off % 60;
   return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
  },
  "%Z": date => date.tm_zone,
  "%%": () => "%"
 };
 pattern = pattern.replace(/%%/g, "\0\0");
 for (var rule in EXPANSION_RULES_2) {
  if (pattern.includes(rule)) {
   pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
  }
 }
 pattern = pattern.replace(/\0\0/g, "%");
 var bytes = intArrayFromString(pattern, false);
 if (bytes.length > maxsize) {
  return 0;
 }
 writeArrayToMemory(bytes, s);
 return bytes.length - 1;
}

function _strptime(buf, format, tm) {
 buf >>>= 0;
 format >>>= 0;
 tm >>>= 0;
 var pattern = UTF8ToString(format);
 var SPECIAL_CHARS = "\\!@#$^&*()+=-[]/{}|:<>?,.";
 for (var i = 0, ii = SPECIAL_CHARS.length; i < ii; ++i) {
  pattern = pattern.replace(new RegExp("\\" + SPECIAL_CHARS[i], "g"), "\\" + SPECIAL_CHARS[i]);
 }
 var EQUIVALENT_MATCHERS = {
  "%A": "%a",
  "%B": "%b",
  "%c": "%a %b %d %H:%M:%S %Y",
  "%D": "%m\\/%d\\/%y",
  "%e": "%d",
  "%F": "%Y-%m-%d",
  "%h": "%b",
  "%R": "%H\\:%M",
  "%r": "%I\\:%M\\:%S\\s%p",
  "%T": "%H\\:%M\\:%S",
  "%x": "%m\\/%d\\/(?:%y|%Y)",
  "%X": "%H\\:%M\\:%S"
 };
 for (var matcher in EQUIVALENT_MATCHERS) {
  pattern = pattern.replace(matcher, EQUIVALENT_MATCHERS[matcher]);
 }
 var DATE_PATTERNS = {
  "%a": "(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)",
  "%b": "(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)",
  "%C": "\\d\\d",
  "%d": "0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31",
  "%H": "\\d(?!\\d)|[0,1]\\d|20|21|22|23",
  "%I": "\\d(?!\\d)|0\\d|10|11|12",
  "%j": "00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d",
  "%m": "0[1-9]|[1-9](?!\\d)|10|11|12",
  "%M": "0\\d|\\d(?!\\d)|[1-5]\\d",
  "%n": "\\s",
  "%p": "AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.",
  "%S": "0\\d|\\d(?!\\d)|[1-5]\\d|60",
  "%U": "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",
  "%W": "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",
  "%w": "[0-6]",
  "%y": "\\d\\d",
  "%Y": "\\d\\d\\d\\d",
  "%%": "%",
  "%t": "\\s"
 };
 var MONTH_NUMBERS = {
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4,
  JUN: 5,
  JUL: 6,
  AUG: 7,
  SEP: 8,
  OCT: 9,
  NOV: 10,
  DEC: 11
 };
 var DAY_NUMBERS_SUN_FIRST = {
  SUN: 0,
  MON: 1,
  TUE: 2,
  WED: 3,
  THU: 4,
  FRI: 5,
  SAT: 6
 };
 var DAY_NUMBERS_MON_FIRST = {
  MON: 0,
  TUE: 1,
  WED: 2,
  THU: 3,
  FRI: 4,
  SAT: 5,
  SUN: 6
 };
 for (var datePattern in DATE_PATTERNS) {
  pattern = pattern.replace(datePattern, "(" + datePattern + DATE_PATTERNS[datePattern] + ")");
 }
 var capture = [];
 for (var i = pattern.indexOf("%"); i >= 0; i = pattern.indexOf("%")) {
  capture.push(pattern[i + 1]);
  pattern = pattern.replace(new RegExp("\\%" + pattern[i + 1], "g"), "");
 }
 var matches = new RegExp("^" + pattern, "i").exec(UTF8ToString(buf));
 function initDate() {
  function fixup(value, min, max) {
   return typeof value != "number" || isNaN(value) ? min : value >= min ? value <= max ? value : max : min;
  }
  return {
   year: fixup(HEAP32[tm + 20 >>> 2] + 1900, 1970, 9999),
   month: fixup(HEAP32[tm + 16 >>> 2], 0, 11),
   day: fixup(HEAP32[tm + 12 >>> 2], 1, 31),
   hour: fixup(HEAP32[tm + 8 >>> 2], 0, 23),
   min: fixup(HEAP32[tm + 4 >>> 2], 0, 59),
   sec: fixup(HEAP32[tm >>> 2], 0, 59)
  };
 }
 if (matches) {
  var date = initDate();
  var value;
  var getMatch = symbol => {
   var pos = capture.indexOf(symbol);
   if (pos >= 0) {
    return matches[pos + 1];
   }
   return;
  };
  if (value = getMatch("S")) {
   date.sec = jstoi_q(value);
  }
  if (value = getMatch("M")) {
   date.min = jstoi_q(value);
  }
  if (value = getMatch("H")) {
   date.hour = jstoi_q(value);
  } else if (value = getMatch("I")) {
   var hour = jstoi_q(value);
   if (value = getMatch("p")) {
    hour += value.toUpperCase()[0] === "P" ? 12 : 0;
   }
   date.hour = hour;
  }
  if (value = getMatch("Y")) {
   date.year = jstoi_q(value);
  } else if (value = getMatch("y")) {
   var year = jstoi_q(value);
   if (value = getMatch("C")) {
    year += jstoi_q(value) * 100;
   } else {
    year += year < 69 ? 2e3 : 1900;
   }
   date.year = year;
  }
  if (value = getMatch("m")) {
   date.month = jstoi_q(value) - 1;
  } else if (value = getMatch("b")) {
   date.month = MONTH_NUMBERS[value.substring(0, 3).toUpperCase()] || 0;
  }
  if (value = getMatch("d")) {
   date.day = jstoi_q(value);
  } else if (value = getMatch("j")) {
   var day = jstoi_q(value);
   var leapYear = isLeapYear(date.year);
   for (var month = 0; month < 12; ++month) {
    var daysUntilMonth = arraySum(leapYear ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, month - 1);
    if (day <= daysUntilMonth + (leapYear ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[month]) {
     date.day = day - daysUntilMonth;
    }
   }
  } else if (value = getMatch("a")) {
   var weekDay = value.substring(0, 3).toUpperCase();
   if (value = getMatch("U")) {
    var weekDayNumber = DAY_NUMBERS_SUN_FIRST[weekDay];
    var weekNumber = jstoi_q(value);
    var janFirst = new Date(date.year, 0, 1);
    var endDate;
    if (janFirst.getDay() === 0) {
     endDate = addDays(janFirst, weekDayNumber + 7 * (weekNumber - 1));
    } else {
     endDate = addDays(janFirst, 7 - janFirst.getDay() + weekDayNumber + 7 * (weekNumber - 1));
    }
    date.day = endDate.getDate();
    date.month = endDate.getMonth();
   } else if (value = getMatch("W")) {
    var weekDayNumber = DAY_NUMBERS_MON_FIRST[weekDay];
    var weekNumber = jstoi_q(value);
    var janFirst = new Date(date.year, 0, 1);
    var endDate;
    if (janFirst.getDay() === 1) {
     endDate = addDays(janFirst, weekDayNumber + 7 * (weekNumber - 1));
    } else {
     endDate = addDays(janFirst, 7 - janFirst.getDay() + 1 + weekDayNumber + 7 * (weekNumber - 1));
    }
    date.day = endDate.getDate();
    date.month = endDate.getMonth();
   }
  }
  var fullDate = new Date(date.year, date.month, date.day, date.hour, date.min, date.sec, 0);
  HEAP32[tm >>> 2] = fullDate.getSeconds();
  HEAP32[tm + 4 >>> 2] = fullDate.getMinutes();
  HEAP32[tm + 8 >>> 2] = fullDate.getHours();
  HEAP32[tm + 12 >>> 2] = fullDate.getDate();
  HEAP32[tm + 16 >>> 2] = fullDate.getMonth();
  HEAP32[tm + 20 >>> 2] = fullDate.getFullYear() - 1900;
  HEAP32[tm + 24 >>> 2] = fullDate.getDay();
  HEAP32[tm + 28 >>> 2] = arraySum(isLeapYear(fullDate.getFullYear()) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, fullDate.getMonth() - 1) + fullDate.getDate() - 1;
  HEAP32[tm + 32 >>> 2] = 0;
  return buf + intArrayFromString(matches[0]).length - 1;
 }
 return 0;
}

function _swapcontext() {
 err("missing function: swapcontext");
 abort(-1);
}

var stringToUTF8OnStack = str => {
 var size = lengthBytesUTF8(str) + 1;
 var ret = stackAlloc(size);
 stringToUTF8(str, ret, size);
 return ret;
};

var FSNode = function(parent, name, mode, rdev) {
 if (!parent) {
  parent = this;
 }
 this.parent = parent;
 this.mount = parent.mount;
 this.mounted = null;
 this.id = FS.nextInode++;
 this.name = name;
 this.mode = mode;
 this.node_ops = {};
 this.stream_ops = {};
 this.rdev = rdev;
};

var readMode = 292 | 73;

var writeMode = 146;

Object.defineProperties(FSNode.prototype, {
 read: {
  get: function() {
   return (this.mode & readMode) === readMode;
  },
  set: function(val) {
   val ? this.mode |= readMode : this.mode &= ~readMode;
  }
 },
 write: {
  get: function() {
   return (this.mode & writeMode) === writeMode;
  },
  set: function(val) {
   val ? this.mode |= writeMode : this.mode &= ~writeMode;
  }
 },
 isFolder: {
  get: function() {
   return FS.isDir(this.mode);
  }
 },
 isDevice: {
  get: function() {
   return FS.isChrdev(this.mode);
  }
 }
});

FS.FSNode = FSNode;

FS.createPreloadedFile = FS_createPreloadedFile;

FS.staticInit();

Module["FS_createPath"] = FS.createPath;

Module["FS_createDataFile"] = FS.createDataFile;

Module["FS_createPreloadedFile"] = FS.createPreloadedFile;

Module["FS_unlink"] = FS.unlink;

Module["FS_createLazyFile"] = FS.createLazyFile;

Module["FS_createDevice"] = FS.createDevice;

ERRNO_CODES = {
 "EPERM": 63,
 "ENOENT": 44,
 "ESRCH": 71,
 "EINTR": 27,
 "EIO": 29,
 "ENXIO": 60,
 "E2BIG": 1,
 "ENOEXEC": 45,
 "EBADF": 8,
 "ECHILD": 12,
 "EAGAIN": 6,
 "EWOULDBLOCK": 6,
 "ENOMEM": 48,
 "EACCES": 2,
 "EFAULT": 21,
 "ENOTBLK": 105,
 "EBUSY": 10,
 "EEXIST": 20,
 "EXDEV": 75,
 "ENODEV": 43,
 "ENOTDIR": 54,
 "EISDIR": 31,
 "EINVAL": 28,
 "ENFILE": 41,
 "EMFILE": 33,
 "ENOTTY": 59,
 "ETXTBSY": 74,
 "EFBIG": 22,
 "ENOSPC": 51,
 "ESPIPE": 70,
 "EROFS": 69,
 "EMLINK": 34,
 "EPIPE": 64,
 "EDOM": 18,
 "ERANGE": 68,
 "ENOMSG": 49,
 "EIDRM": 24,
 "ECHRNG": 106,
 "EL2NSYNC": 156,
 "EL3HLT": 107,
 "EL3RST": 108,
 "ELNRNG": 109,
 "EUNATCH": 110,
 "ENOCSI": 111,
 "EL2HLT": 112,
 "EDEADLK": 16,
 "ENOLCK": 46,
 "EBADE": 113,
 "EBADR": 114,
 "EXFULL": 115,
 "ENOANO": 104,
 "EBADRQC": 103,
 "EBADSLT": 102,
 "EDEADLOCK": 16,
 "EBFONT": 101,
 "ENOSTR": 100,
 "ENODATA": 116,
 "ETIME": 117,
 "ENOSR": 118,
 "ENONET": 119,
 "ENOPKG": 120,
 "EREMOTE": 121,
 "ENOLINK": 47,
 "EADV": 122,
 "ESRMNT": 123,
 "ECOMM": 124,
 "EPROTO": 65,
 "EMULTIHOP": 36,
 "EDOTDOT": 125,
 "EBADMSG": 9,
 "ENOTUNIQ": 126,
 "EBADFD": 127,
 "EREMCHG": 128,
 "ELIBACC": 129,
 "ELIBBAD": 130,
 "ELIBSCN": 131,
 "ELIBMAX": 132,
 "ELIBEXEC": 133,
 "ENOSYS": 52,
 "ENOTEMPTY": 55,
 "ENAMETOOLONG": 37,
 "ELOOP": 32,
 "EOPNOTSUPP": 138,
 "EPFNOSUPPORT": 139,
 "ECONNRESET": 15,
 "ENOBUFS": 42,
 "EAFNOSUPPORT": 5,
 "EPROTOTYPE": 67,
 "ENOTSOCK": 57,
 "ENOPROTOOPT": 50,
 "ESHUTDOWN": 140,
 "ECONNREFUSED": 14,
 "EADDRINUSE": 3,
 "ECONNABORTED": 13,
 "ENETUNREACH": 40,
 "ENETDOWN": 38,
 "ETIMEDOUT": 73,
 "EHOSTDOWN": 142,
 "EHOSTUNREACH": 23,
 "EINPROGRESS": 26,
 "EALREADY": 7,
 "EDESTADDRREQ": 17,
 "EMSGSIZE": 35,
 "EPROTONOSUPPORT": 66,
 "ESOCKTNOSUPPORT": 137,
 "EADDRNOTAVAIL": 4,
 "ENETRESET": 39,
 "EISCONN": 30,
 "ENOTCONN": 53,
 "ETOOMANYREFS": 141,
 "EUSERS": 136,
 "EDQUOT": 19,
 "ESTALE": 72,
 "ENOTSUP": 138,
 "ENOMEDIUM": 148,
 "EILSEQ": 25,
 "EOVERFLOW": 61,
 "ECANCELED": 11,
 "ENOTRECOVERABLE": 56,
 "EOWNERDEAD": 62,
 "ESTRPIPE": 135
};

function checkIncomingModuleAPI() {
 ignoredModuleProp("fetchSettings");
}

var wasmImports = {
 __assert_fail: ___assert_fail,
 __asyncjs__pdo_vrzno_real_stmt_execute: __asyncjs__pdo_vrzno_real_stmt_execute,
 __asyncjs__vrzno_await_internal: __asyncjs__vrzno_await_internal,
 __call_sighandler: ___call_sighandler,
 __syscall__newselect: ___syscall__newselect,
 __syscall_accept4: ___syscall_accept4,
 __syscall_bind: ___syscall_bind,
 __syscall_chdir: ___syscall_chdir,
 __syscall_chmod: ___syscall_chmod,
 __syscall_connect: ___syscall_connect,
 __syscall_dup: ___syscall_dup,
 __syscall_dup3: ___syscall_dup3,
 __syscall_faccessat: ___syscall_faccessat,
 __syscall_fallocate: ___syscall_fallocate,
 __syscall_fchmod: ___syscall_fchmod,
 __syscall_fchown32: ___syscall_fchown32,
 __syscall_fchownat: ___syscall_fchownat,
 __syscall_fcntl64: ___syscall_fcntl64,
 __syscall_fdatasync: ___syscall_fdatasync,
 __syscall_fstat64: ___syscall_fstat64,
 __syscall_fstatfs64: ___syscall_fstatfs64,
 __syscall_ftruncate64: ___syscall_ftruncate64,
 __syscall_getcwd: ___syscall_getcwd,
 __syscall_getdents64: ___syscall_getdents64,
 __syscall_getpeername: ___syscall_getpeername,
 __syscall_getsockname: ___syscall_getsockname,
 __syscall_getsockopt: ___syscall_getsockopt,
 __syscall_ioctl: ___syscall_ioctl,
 __syscall_listen: ___syscall_listen,
 __syscall_lstat64: ___syscall_lstat64,
 __syscall_mkdirat: ___syscall_mkdirat,
 __syscall_newfstatat: ___syscall_newfstatat,
 __syscall_openat: ___syscall_openat,
 __syscall_pipe: ___syscall_pipe,
 __syscall_poll: ___syscall_poll,
 __syscall_readlinkat: ___syscall_readlinkat,
 __syscall_recvfrom: ___syscall_recvfrom,
 __syscall_renameat: ___syscall_renameat,
 __syscall_rmdir: ___syscall_rmdir,
 __syscall_sendto: ___syscall_sendto,
 __syscall_socket: ___syscall_socket,
 __syscall_stat64: ___syscall_stat64,
 __syscall_statfs64: ___syscall_statfs64,
 __syscall_symlink: ___syscall_symlink,
 __syscall_unlinkat: ___syscall_unlinkat,
 __syscall_utimensat: ___syscall_utimensat,
 _emscripten_get_now_is_monotonic: __emscripten_get_now_is_monotonic,
 _emscripten_throw_longjmp: __emscripten_throw_longjmp,
 _gmtime_js: __gmtime_js,
 _localtime_js: __localtime_js,
 _mktime_js: __mktime_js,
 _mmap_js: __mmap_js,
 _msync_js: __msync_js,
 _munmap_js: __munmap_js,
 _setitimer_js: __setitimer_js,
 _timegm_js: __timegm_js,
 _tzset_js: __tzset_js,
 abort: _abort,
 emscripten_asm_const_int: _emscripten_asm_const_int,
 emscripten_asm_const_ptr: _emscripten_asm_const_ptr,
 emscripten_console_error: _emscripten_console_error,
 emscripten_date_now: _emscripten_date_now,
 emscripten_get_heap_max: _emscripten_get_heap_max,
 emscripten_get_now: _emscripten_get_now,
 emscripten_get_now_res: _emscripten_get_now_res,
 emscripten_memcpy_big: _emscripten_memcpy_big,
 emscripten_resize_heap: _emscripten_resize_heap,
 environ_get: _environ_get,
 environ_sizes_get: _environ_sizes_get,
 exit: _exit,
 fd_close: _fd_close,
 fd_fdstat_get: _fd_fdstat_get,
 fd_read: _fd_read,
 fd_seek: _fd_seek,
 fd_sync: _fd_sync,
 fd_write: _fd_write,
 getaddrinfo: _getaddrinfo,
 getcontext: _getcontext,
 getdtablesize: _getdtablesize,
 gethostbyname_r: _gethostbyname_r,
 getloadavg: _getloadavg,
 getnameinfo: _getnameinfo,
 getprotobyname: _getprotobyname,
 getprotobynumber: _getprotobynumber,
 invoke_i: invoke_i,
 invoke_ii: invoke_ii,
 invoke_iii: invoke_iii,
 invoke_iiii: invoke_iiii,
 invoke_iiiii: invoke_iiiii,
 invoke_iiiiii: invoke_iiiiii,
 invoke_iiiiiii: invoke_iiiiiii,
 invoke_iiiiiiii: invoke_iiiiiiii,
 invoke_iiiiiiiiii: invoke_iiiiiiiiii,
 invoke_v: invoke_v,
 invoke_vi: invoke_vi,
 invoke_vii: invoke_vii,
 invoke_viidii: invoke_viidii,
 invoke_viii: invoke_viii,
 invoke_viiii: invoke_viiii,
 invoke_viiiii: invoke_viiiii,
 invoke_viiiiii: invoke_viiiiii,
 makecontext: _makecontext,
 proc_exit: _proc_exit,
 strftime: _strftime,
 strptime: _strptime,
 swapcontext: _swapcontext
};

var asm = createWasm();

var ___wasm_call_ctors = createExportWrapper("__wasm_call_ctors");

var _php_time = Module["_php_time"] = createExportWrapper("php_time");

var _gettimeofday = Module["_gettimeofday"] = createExportWrapper("gettimeofday");

var _time = Module["_time"] = createExportWrapper("time");

var _php_date_get_date_ce = Module["_php_date_get_date_ce"] = createExportWrapper("php_date_get_date_ce");

var _php_date_get_immutable_ce = Module["_php_date_get_immutable_ce"] = createExportWrapper("php_date_get_immutable_ce");

var _php_date_get_interface_ce = Module["_php_date_get_interface_ce"] = createExportWrapper("php_date_get_interface_ce");

var _php_date_get_timezone_ce = Module["_php_date_get_timezone_ce"] = createExportWrapper("php_date_get_timezone_ce");

var _php_date_get_interval_ce = Module["_php_date_get_interval_ce"] = createExportWrapper("php_date_get_interval_ce");

var _php_date_get_period_ce = Module["_php_date_get_period_ce"] = createExportWrapper("php_date_get_period_ce");

var _zend_register_ini_entries_ex = Module["_zend_register_ini_entries_ex"] = createExportWrapper("zend_register_ini_entries_ex");

var _zend_unregister_ini_entries_ex = Module["_zend_unregister_ini_entries_ex"] = createExportWrapper("zend_unregister_ini_entries_ex");

var __efree = Module["__efree"] = createExportWrapper("_efree");

var _php_info_print_table_start = Module["_php_info_print_table_start"] = createExportWrapper("php_info_print_table_start");

var _php_info_print_table_row = Module["_php_info_print_table_row"] = createExportWrapper("php_info_print_table_row");

var _php_info_print_table_end = Module["_php_info_print_table_end"] = createExportWrapper("php_info_print_table_end");

var _display_ini_entries = Module["_display_ini_entries"] = createExportWrapper("display_ini_entries");

var _zend_hash_destroy = Module["_zend_hash_destroy"] = createExportWrapper("zend_hash_destroy");

var __efree_48 = Module["__efree_48"] = createExportWrapper("_efree_48");

var _memcpy = createExportWrapper("memcpy");

var _zend_register_string_constant = Module["_zend_register_string_constant"] = createExportWrapper("zend_register_string_constant");

var _zend_register_long_constant = Module["_zend_register_long_constant"] = createExportWrapper("zend_register_long_constant");

var _strlen = Module["_strlen"] = createExportWrapper("strlen");

var _cfg_get_entry = Module["_cfg_get_entry"] = createExportWrapper("cfg_get_entry");

var __emalloc_48 = Module["__emalloc_48"] = createExportWrapper("_emalloc_48");

var __zend_hash_init = Module["__zend_hash_init"] = createExportWrapper("_zend_hash_init");

var _zend_hash_str_find = Module["_zend_hash_str_find"] = createExportWrapper("zend_hash_str_find");

var _zend_hash_str_add = Module["_zend_hash_str_add"] = createExportWrapper("zend_hash_str_add");

var _get_timezone_info = Module["_get_timezone_info"] = createExportWrapper("get_timezone_info");

var _zend_throw_error = Module["_zend_throw_error"] = createExportWrapper("zend_throw_error");

var _php_format_date = Module["_php_format_date"] = createExportWrapper("php_format_date");

var __estrdup = Module["__estrdup"] = createExportWrapper("_estrdup");

var __emalloc_16 = Module["__emalloc_16"] = createExportWrapper("_emalloc_16");

var _abs = Module["_abs"] = createExportWrapper("abs");

var _ap_php_snprintf = Module["_ap_php_snprintf"] = createExportWrapper("ap_php_snprintf");

var _ap_php_slprintf = Module["_ap_php_slprintf"] = createExportWrapper("ap_php_slprintf");

var _strcmp = Module["_strcmp"] = createExportWrapper("strcmp");

var _smart_str_realloc = Module["_smart_str_realloc"] = createExportWrapper("smart_str_realloc");

var _smart_str_erealloc = Module["_smart_str_erealloc"] = createExportWrapper("smart_str_erealloc");

var _php_idate = Module["_php_idate"] = createExportWrapper("php_idate");

var _zend_wrong_parameters_count_error = Module["_zend_wrong_parameters_count_error"] = createExportWrapper("zend_wrong_parameters_count_error");

var _zend_parse_arg_str_slow = Module["_zend_parse_arg_str_slow"] = createExportWrapper("zend_parse_arg_str_slow");

var _zend_parse_arg_long_slow = Module["_zend_parse_arg_long_slow"] = createExportWrapper("zend_parse_arg_long_slow");

var _zend_wrong_parameter_error = Module["_zend_wrong_parameter_error"] = createExportWrapper("zend_wrong_parameter_error");

var _php_error_docref = Module["_php_error_docref"] = createExportWrapper("php_error_docref");

var _php_date_set_tzdb = Module["_php_date_set_tzdb"] = createExportWrapper("php_date_set_tzdb");

var _php_version_compare = Module["_php_version_compare"] = createExportWrapper("php_version_compare");

var _php_parse_date = Module["_php_parse_date"] = createExportWrapper("php_parse_date");

var _php_mktime = Module["_php_mktime"] = createExportWrapper("php_mktime");

var _php_strftime = Module["_php_strftime"] = createExportWrapper("php_strftime");

var ___zend_malloc = Module["___zend_malloc"] = createExportWrapper("__zend_malloc");

var __emalloc = Module["__emalloc"] = createExportWrapper("_emalloc");

var ___zend_realloc = Module["___zend_realloc"] = createExportWrapper("__zend_realloc");

var __erealloc = Module["__erealloc"] = createExportWrapper("_erealloc");

var _zend_wrong_parameters_none_error = Module["_zend_wrong_parameters_none_error"] = createExportWrapper("zend_wrong_parameters_none_error");

var _zend_parse_arg_bool_slow = Module["_zend_parse_arg_bool_slow"] = createExportWrapper("zend_parse_arg_bool_slow");

var __zend_new_array_0 = Module["__zend_new_array_0"] = createExportWrapper("_zend_new_array_0");

var _add_assoc_long_ex = Module["_add_assoc_long_ex"] = createExportWrapper("add_assoc_long_ex");

var _add_next_index_long = Module["_add_next_index_long"] = createExportWrapper("add_next_index_long");

var _add_assoc_string_ex = Module["_add_assoc_string_ex"] = createExportWrapper("add_assoc_string_ex");

var _add_index_long = Module["_add_index_long"] = createExportWrapper("add_index_long");

var __emalloc_96 = Module["__emalloc_96"] = createExportWrapper("_emalloc_96");

var _zend_iterator_init = Module["_zend_iterator_init"] = createExportWrapper("zend_iterator_init");

var _zend_hash_str_update = Module["_zend_hash_str_update"] = createExportWrapper("zend_hash_str_update");

var _php_date_instantiate = Module["_php_date_instantiate"] = createExportWrapper("php_date_instantiate");

var _object_init_ex = Module["_object_init_ex"] = createExportWrapper("object_init_ex");

var _php_date_initialize = Module["_php_date_initialize"] = createExportWrapper("php_date_initialize");

var _zend_throw_exception_ex = Module["_zend_throw_exception_ex"] = createExportWrapper("zend_throw_exception_ex");

var _memcmp = createExportWrapper("memcmp");

var _instanceof_function_slow = Module["_instanceof_function_slow"] = createExportWrapper("instanceof_function_slow");

var _zval_ptr_dtor = Module["_zval_ptr_dtor"] = createExportWrapper("zval_ptr_dtor");

var _zend_string_concat3 = Module["_zend_string_concat3"] = createExportWrapper("zend_string_concat3");

var _free = createExportWrapper("free");

var _zend_std_get_properties = Module["_zend_std_get_properties"] = createExportWrapper("zend_std_get_properties");

var _zend_hash_add = Module["_zend_hash_add"] = createExportWrapper("zend_hash_add");

var _add_index_string = Module["_add_index_string"] = createExportWrapper("add_index_string");

var _add_assoc_zval_ex = Module["_add_assoc_zval_ex"] = createExportWrapper("add_assoc_zval_ex");

var _add_assoc_bool_ex = Module["_add_assoc_bool_ex"] = createExportWrapper("add_assoc_bool_ex");

var _add_assoc_double_ex = Module["_add_assoc_double_ex"] = createExportWrapper("add_assoc_double_ex");

var _zend_parse_method_parameters = Module["_zend_parse_method_parameters"] = createExportWrapper("zend_parse_method_parameters");

var _memset = Module["_memset"] = createExportWrapper("memset");

var _zend_parse_parameters = Module["_zend_parse_parameters"] = createExportWrapper("zend_parse_parameters");

var _zend_value_error = Module["_zend_value_error"] = createExportWrapper("zend_value_error");

var __ecalloc = Module["__ecalloc"] = createExportWrapper("_ecalloc");

var _zend_replace_error_handling = Module["_zend_replace_error_handling"] = createExportWrapper("zend_replace_error_handling");

var _zend_restore_error_handling = Module["_zend_restore_error_handling"] = createExportWrapper("zend_restore_error_handling");

var _add_assoc_str_ex = Module["_add_assoc_str_ex"] = createExportWrapper("add_assoc_str_ex");

var _zend_hash_next_index_insert = Module["_zend_hash_next_index_insert"] = createExportWrapper("zend_hash_next_index_insert");

var _zval_get_long_func = Module["_zval_get_long_func"] = createExportWrapper("zval_get_long_func");

var _zval_get_double_func = Module["_zval_get_double_func"] = createExportWrapper("zval_get_double_func");

var _zend_dval_to_lval_slow = Module["_zend_dval_to_lval_slow"] = createExportWrapper("zend_dval_to_lval_slow");

var _zval_get_string_func = Module["_zval_get_string_func"] = createExportWrapper("zval_get_string_func");

var _strtoll = Module["_strtoll"] = createExportWrapper("strtoll");

var _zend_parse_parameters_ex = Module["_zend_parse_parameters_ex"] = createExportWrapper("zend_parse_parameters_ex");

var _zend_type_error = Module["_zend_type_error"] = createExportWrapper("zend_type_error");

var _get_active_function_or_method_name = Module["_get_active_function_or_method_name"] = createExportWrapper("get_active_function_or_method_name");

var _rebuild_object_properties = Module["_rebuild_object_properties"] = createExportWrapper("rebuild_object_properties");

var _zend_create_internal_iterator_zval = Module["_zend_create_internal_iterator_zval"] = createExportWrapper("zend_create_internal_iterator_zval");

var _zend_argument_value_error = Module["_zend_argument_value_error"] = createExportWrapper("zend_argument_value_error");

var _add_next_index_string = Module["_add_next_index_string"] = createExportWrapper("add_next_index_string");

var _strncasecmp = Module["_strncasecmp"] = createExportWrapper("strncasecmp");

var _add_assoc_null_ex = Module["_add_assoc_null_ex"] = createExportWrapper("add_assoc_null_ex");

var __estrndup = Module["__estrndup"] = createExportWrapper("_estrndup");

var _zend_parse_arg_double_slow = Module["_zend_parse_arg_double_slow"] = createExportWrapper("zend_parse_arg_double_slow");

var _zend_ini_double = Module["_zend_ini_double"] = createExportWrapper("zend_ini_double");

var _zend_strpprintf = Module["_zend_strpprintf"] = createExportWrapper("zend_strpprintf");

var _OnUpdateString = Module["_OnUpdateString"] = createExportWrapper("OnUpdateString");

var _zend_std_write_property = Module["_zend_std_write_property"] = createExportWrapper("zend_std_write_property");

var _zend_register_internal_interface = Module["_zend_register_internal_interface"] = createExportWrapper("zend_register_internal_interface");

var _zend_declare_class_constant_ex = Module["_zend_declare_class_constant_ex"] = createExportWrapper("zend_declare_class_constant_ex");

var _zend_error = Module["_zend_error"] = createExportWrapper("zend_error");

var _zend_register_internal_class_ex = Module["_zend_register_internal_class_ex"] = createExportWrapper("zend_register_internal_class_ex");

var _zend_class_implements = Module["_zend_class_implements"] = createExportWrapper("zend_class_implements");

var _zend_object_std_init = Module["_zend_object_std_init"] = createExportWrapper("zend_object_std_init");

var _object_properties_init = Module["_object_properties_init"] = createExportWrapper("object_properties_init");

var _zend_object_std_dtor = Module["_zend_object_std_dtor"] = createExportWrapper("zend_object_std_dtor");

var _zend_objects_clone_members = Module["_zend_objects_clone_members"] = createExportWrapper("zend_objects_clone_members");

var _zend_std_compare_objects = Module["_zend_std_compare_objects"] = createExportWrapper("zend_std_compare_objects");

var _zend_std_get_properties_for = Module["_zend_std_get_properties_for"] = createExportWrapper("zend_std_get_properties_for");

var _zend_array_dup = Module["_zend_array_dup"] = createExportWrapper("zend_array_dup");

var _zend_std_has_property = Module["_zend_std_has_property"] = createExportWrapper("zend_std_has_property");

var _zend_is_true = Module["_zend_is_true"] = createExportWrapper("zend_is_true");

var _zend_std_read_property = Module["_zend_std_read_property"] = createExportWrapper("zend_std_read_property");

var _zend_std_get_property_ptr_ptr = Module["_zend_std_get_property_ptr_ptr"] = createExportWrapper("zend_std_get_property_ptr_ptr");

var _zend_declare_typed_property = Module["_zend_declare_typed_property"] = createExportWrapper("zend_declare_typed_property");

var _zend_unmangle_property_name_ex = Module["_zend_unmangle_property_name_ex"] = createExportWrapper("zend_unmangle_property_name_ex");

var _zend_lookup_class = Module["_zend_lookup_class"] = createExportWrapper("zend_lookup_class");

var _zend_update_property = Module["_zend_update_property"] = createExportWrapper("zend_update_property");

var _sin = Module["_sin"] = createExportWrapper("sin");

var _cos = Module["_cos"] = createExportWrapper("cos");

var _acos = Module["_acos"] = createExportWrapper("acos");

var _atan2 = Module["_atan2"] = createExportWrapper("atan2");

var _isdigit = Module["_isdigit"] = createExportWrapper("isdigit");

var _strtol = Module["_strtol"] = createExportWrapper("strtol");

var _isspace = Module["_isspace"] = createExportWrapper("isspace");

var _pow = Module["_pow"] = createExportWrapper("pow");

var _strchr = Module["_strchr"] = createExportWrapper("strchr");

var ___errno_location = createExportWrapper("__errno_location");

var _strtod = Module["_strtod"] = createExportWrapper("strtod");

var _printf = Module["_printf"] = createExportWrapper("printf");

var _snprintf = Module["_snprintf"] = createExportWrapper("snprintf");

var __emalloc_8 = Module["__emalloc_8"] = createExportWrapper("_emalloc_8");

var _toupper = Module["_toupper"] = createExportWrapper("toupper");

var _llabs = Module["_llabs"] = createExportWrapper("llabs");

var _php_libxml_initialize = Module["_php_libxml_initialize"] = createExportWrapper("php_libxml_initialize");

var _php_libxml_error_handler = Module["_php_libxml_error_handler"] = createExportWrapper("php_libxml_error_handler");

var _xmlSetGenericErrorFunc = Module["_xmlSetGenericErrorFunc"] = createExportWrapper("xmlSetGenericErrorFunc");

var _xmlParserInputBufferCreateFilenameDefault = Module["_xmlParserInputBufferCreateFilenameDefault"] = createExportWrapper("xmlParserInputBufferCreateFilenameDefault");

var _xmlOutputBufferCreateFilenameDefault = Module["_xmlOutputBufferCreateFilenameDefault"] = createExportWrapper("xmlOutputBufferCreateFilenameDefault");

var _php_libxml_shutdown = Module["_php_libxml_shutdown"] = createExportWrapper("php_libxml_shutdown");

var _rc_dtor_func = Module["_rc_dtor_func"] = createExportWrapper("rc_dtor_func");

var _xmlSetStructuredErrorFunc = Module["_xmlSetStructuredErrorFunc"] = createExportWrapper("xmlSetStructuredErrorFunc");

var _zend_llist_destroy = Module["_zend_llist_destroy"] = createExportWrapper("zend_llist_destroy");

var _xmlResetLastError = Module["_xmlResetLastError"] = createExportWrapper("xmlResetLastError");

var _php_libxml_node_free_list = Module["_php_libxml_node_free_list"] = createExportWrapper("php_libxml_node_free_list");

var _xmlRemoveID = Module["_xmlRemoveID"] = createExportWrapper("xmlRemoveID");

var _xmlUnlinkNode = Module["_xmlUnlinkNode"] = createExportWrapper("xmlUnlinkNode");

var _xmlFreeProp = Module["_xmlFreeProp"] = createExportWrapper("xmlFreeProp");

var _xmlFreeNs = Module["_xmlFreeNs"] = createExportWrapper("xmlFreeNs");

var _xmlFreeNode = Module["_xmlFreeNode"] = createExportWrapper("xmlFreeNode");

var _php_libxml_issue_error = Module["_php_libxml_issue_error"] = createExportWrapper("php_libxml_issue_error");

var _xmlCopyError = Module["_xmlCopyError"] = createExportWrapper("xmlCopyError");

var _xmlStrdup = Module["_xmlStrdup"] = createExportWrapper("xmlStrdup");

var _zend_llist_add_element = Module["_zend_llist_add_element"] = createExportWrapper("zend_llist_add_element");

var _php_libxml_ctx_error = Module["_php_libxml_ctx_error"] = createExportWrapper("php_libxml_ctx_error");

var _zend_vspprintf = Module["_zend_vspprintf"] = createExportWrapper("zend_vspprintf");

var _php_libxml_ctx_warning = Module["_php_libxml_ctx_warning"] = createExportWrapper("php_libxml_ctx_warning");

var _php_libxml_structured_error_handler = Module["_php_libxml_structured_error_handler"] = createExportWrapper("php_libxml_structured_error_handler");

var _xmlInitParser = Module["_xmlInitParser"] = createExportWrapper("xmlInitParser");

var _xmlGetExternalEntityLoader = Module["_xmlGetExternalEntityLoader"] = createExportWrapper("xmlGetExternalEntityLoader");

var _xmlSetExternalEntityLoader = Module["_xmlSetExternalEntityLoader"] = createExportWrapper("xmlSetExternalEntityLoader");

var _xmlRelaxNGCleanupTypes = Module["_xmlRelaxNGCleanupTypes"] = createExportWrapper("xmlRelaxNGCleanupTypes");

var _php_libxml_switch_context = Module["_php_libxml_switch_context"] = createExportWrapper("php_libxml_switch_context");

var __emalloc_32 = Module["__emalloc_32"] = createExportWrapper("_emalloc_32");

var _zend_llist_init = Module["_zend_llist_init"] = createExportWrapper("zend_llist_init");

var _xmlResetError = Module["_xmlResetError"] = createExportWrapper("xmlResetError");

var _xmlGetLastError = Module["_xmlGetLastError"] = createExportWrapper("xmlGetLastError");

var _add_property_long_ex = Module["_add_property_long_ex"] = createExportWrapper("add_property_long_ex");

var _add_property_string_ex = Module["_add_property_string_ex"] = createExportWrapper("add_property_string_ex");

var _add_property_stringl_ex = Module["_add_property_stringl_ex"] = createExportWrapper("add_property_stringl_ex");

var _zend_llist_get_first_ex = Module["_zend_llist_get_first_ex"] = createExportWrapper("zend_llist_get_first_ex");

var _zend_llist_get_next_ex = Module["_zend_llist_get_next_ex"] = createExportWrapper("zend_llist_get_next_ex");

var _zend_llist_clean = Module["_zend_llist_clean"] = createExportWrapper("zend_llist_clean");

var _php_libxml_disable_entity_loader = Module["_php_libxml_disable_entity_loader"] = createExportWrapper("php_libxml_disable_entity_loader");

var _zend_fcall_info_init = Module["_zend_fcall_info_init"] = createExportWrapper("zend_fcall_info_init");

var _zend_release_fcall_info_cache = Module["_zend_release_fcall_info_cache"] = createExportWrapper("zend_release_fcall_info_cache");

var _php_libxml_xmlCheckUTF8 = Module["_php_libxml_xmlCheckUTF8"] = createExportWrapper("php_libxml_xmlCheckUTF8");

var _php_libxml_register_export = Module["_php_libxml_register_export"] = createExportWrapper("php_libxml_register_export");

var _php_libxml_import_node = Module["_php_libxml_import_node"] = createExportWrapper("php_libxml_import_node");

var _zend_hash_find = Module["_zend_hash_find"] = createExportWrapper("zend_hash_find");

var _php_libxml_increment_node_ptr = Module["_php_libxml_increment_node_ptr"] = createExportWrapper("php_libxml_increment_node_ptr");

var _php_libxml_decrement_node_ptr = Module["_php_libxml_decrement_node_ptr"] = createExportWrapper("php_libxml_decrement_node_ptr");

var _php_libxml_increment_doc_ref = Module["_php_libxml_increment_doc_ref"] = createExportWrapper("php_libxml_increment_doc_ref");

var _php_libxml_decrement_doc_ref = Module["_php_libxml_decrement_doc_ref"] = createExportWrapper("php_libxml_decrement_doc_ref");

var _xmlFreeDoc = Module["_xmlFreeDoc"] = createExportWrapper("xmlFreeDoc");

var _php_libxml_node_free_resource = Module["_php_libxml_node_free_resource"] = createExportWrapper("php_libxml_node_free_resource");

var _php_libxml_node_decrement_resource = Module["_php_libxml_node_decrement_resource"] = createExportWrapper("php_libxml_node_decrement_resource");

var _zend_call_function = Module["_zend_call_function"] = createExportWrapper("zend_call_function");

var _php_file_le_stream = Module["_php_file_le_stream"] = createExportWrapper("php_file_le_stream");

var _php_file_le_pstream = Module["_php_file_le_pstream"] = createExportWrapper("php_file_le_pstream");

var _zend_fetch_resource2_ex = Module["_zend_fetch_resource2_ex"] = createExportWrapper("zend_fetch_resource2_ex");

var _xmlAllocParserInputBuffer = Module["_xmlAllocParserInputBuffer"] = createExportWrapper("xmlAllocParserInputBuffer");

var _xmlNewIOInputStream = Module["_xmlNewIOInputStream"] = createExportWrapper("xmlNewIOInputStream");

var _xmlFreeParserInputBuffer = Module["_xmlFreeParserInputBuffer"] = createExportWrapper("xmlFreeParserInputBuffer");

var __try_convert_to_string = Module["__try_convert_to_string"] = createExportWrapper("_try_convert_to_string");

var _xmlNewInputFromFile = Module["_xmlNewInputFromFile"] = createExportWrapper("xmlNewInputFromFile");

var __php_stream_read = Module["__php_stream_read"] = createExportWrapper("_php_stream_read");

var __php_stream_free = Module["__php_stream_free"] = createExportWrapper("_php_stream_free");

var _zend_binary_strncasecmp = Module["_zend_binary_strncasecmp"] = createExportWrapper("zend_binary_strncasecmp");

var _php_stristr = Module["_php_stristr"] = createExportWrapper("php_stristr");

var _xmlParseCharEncoding = Module["_xmlParseCharEncoding"] = createExportWrapper("xmlParseCharEncoding");

var _strstr = Module["_strstr"] = createExportWrapper("strstr");

var _xmlParseURI = Module["_xmlParseURI"] = createExportWrapper("xmlParseURI");

var _xmlURIUnescapeString = Module["_xmlURIUnescapeString"] = createExportWrapper("xmlURIUnescapeString");

var _xmlFreeURI = Module["_xmlFreeURI"] = createExportWrapper("xmlFreeURI");

var _xmlAllocOutputBuffer = Module["_xmlAllocOutputBuffer"] = createExportWrapper("xmlAllocOutputBuffer");

var _xmlStrncmp = Module["_xmlStrncmp"] = createExportWrapper("xmlStrncmp");

var _php_stream_locate_url_wrapper = Module["_php_stream_locate_url_wrapper"] = createExportWrapper("php_stream_locate_url_wrapper");

var _php_le_stream_context = Module["_php_le_stream_context"] = createExportWrapper("php_le_stream_context");

var _zend_fetch_resource_ex = Module["_zend_fetch_resource_ex"] = createExportWrapper("zend_fetch_resource_ex");

var _php_stream_context_alloc = Module["_php_stream_context_alloc"] = createExportWrapper("php_stream_context_alloc");

var __php_stream_open_wrapper_ex = Module["__php_stream_open_wrapper_ex"] = createExportWrapper("_php_stream_open_wrapper_ex");

var __php_stream_write = Module["__php_stream_write"] = createExportWrapper("_php_stream_write");

var _php_pcre2_code_copy = Module["_php_pcre2_code_copy"] = createExportWrapper("php_pcre2_code_copy");

var _php_pcre2_code_copy_with_tables = Module["_php_pcre2_code_copy_with_tables"] = createExportWrapper("php_pcre2_code_copy_with_tables");

var _php_pcre2_code_free = Module["_php_pcre2_code_free"] = createExportWrapper("php_pcre2_code_free");

var _php_pcre2_compile = Module["_php_pcre2_compile"] = createExportWrapper("php_pcre2_compile");

var _memmove = Module["_memmove"] = createExportWrapper("memmove");

var _tolower = Module["_tolower"] = createExportWrapper("tolower");

var _php_pcre2_config = Module["_php_pcre2_config"] = createExportWrapper("php_pcre2_config");

var _malloc = createExportWrapper("malloc");

var _php_pcre2_general_context_create = Module["_php_pcre2_general_context_create"] = createExportWrapper("php_pcre2_general_context_create");

var _php_pcre2_compile_context_create = Module["_php_pcre2_compile_context_create"] = createExportWrapper("php_pcre2_compile_context_create");

var _php_pcre2_match_context_create = Module["_php_pcre2_match_context_create"] = createExportWrapper("php_pcre2_match_context_create");

var _php_pcre2_convert_context_create = Module["_php_pcre2_convert_context_create"] = createExportWrapper("php_pcre2_convert_context_create");

var _php_pcre2_general_context_copy = Module["_php_pcre2_general_context_copy"] = createExportWrapper("php_pcre2_general_context_copy");

var _php_pcre2_compile_context_copy = Module["_php_pcre2_compile_context_copy"] = createExportWrapper("php_pcre2_compile_context_copy");

var _php_pcre2_match_context_copy = Module["_php_pcre2_match_context_copy"] = createExportWrapper("php_pcre2_match_context_copy");

var _php_pcre2_convert_context_copy = Module["_php_pcre2_convert_context_copy"] = createExportWrapper("php_pcre2_convert_context_copy");

var _php_pcre2_general_context_free = Module["_php_pcre2_general_context_free"] = createExportWrapper("php_pcre2_general_context_free");

var _php_pcre2_compile_context_free = Module["_php_pcre2_compile_context_free"] = createExportWrapper("php_pcre2_compile_context_free");

var _php_pcre2_match_context_free = Module["_php_pcre2_match_context_free"] = createExportWrapper("php_pcre2_match_context_free");

var _php_pcre2_convert_context_free = Module["_php_pcre2_convert_context_free"] = createExportWrapper("php_pcre2_convert_context_free");

var _php_pcre2_set_character_tables = Module["_php_pcre2_set_character_tables"] = createExportWrapper("php_pcre2_set_character_tables");

var _php_pcre2_set_bsr = Module["_php_pcre2_set_bsr"] = createExportWrapper("php_pcre2_set_bsr");

var _php_pcre2_set_max_pattern_length = Module["_php_pcre2_set_max_pattern_length"] = createExportWrapper("php_pcre2_set_max_pattern_length");

var _php_pcre2_set_newline = Module["_php_pcre2_set_newline"] = createExportWrapper("php_pcre2_set_newline");

var _php_pcre2_set_parens_nest_limit = Module["_php_pcre2_set_parens_nest_limit"] = createExportWrapper("php_pcre2_set_parens_nest_limit");

var _php_pcre2_set_compile_extra_options = Module["_php_pcre2_set_compile_extra_options"] = createExportWrapper("php_pcre2_set_compile_extra_options");

var _php_pcre2_set_compile_recursion_guard = Module["_php_pcre2_set_compile_recursion_guard"] = createExportWrapper("php_pcre2_set_compile_recursion_guard");

var _php_pcre2_set_callout = Module["_php_pcre2_set_callout"] = createExportWrapper("php_pcre2_set_callout");

var _pcre2_set_substitute_callout_8 = Module["_pcre2_set_substitute_callout_8"] = createExportWrapper("pcre2_set_substitute_callout_8");

var _php_pcre2_set_heap_limit = Module["_php_pcre2_set_heap_limit"] = createExportWrapper("php_pcre2_set_heap_limit");

var _php_pcre2_set_match_limit = Module["_php_pcre2_set_match_limit"] = createExportWrapper("php_pcre2_set_match_limit");

var _php_pcre2_set_depth_limit = Module["_php_pcre2_set_depth_limit"] = createExportWrapper("php_pcre2_set_depth_limit");

var _php_pcre2_set_offset_limit = Module["_php_pcre2_set_offset_limit"] = createExportWrapper("php_pcre2_set_offset_limit");

var _php_pcre2_set_recursion_limit = Module["_php_pcre2_set_recursion_limit"] = createExportWrapper("php_pcre2_set_recursion_limit");

var _php_pcre2_set_recursion_memory_management = Module["_php_pcre2_set_recursion_memory_management"] = createExportWrapper("php_pcre2_set_recursion_memory_management");

var _php_pcre2_set_glob_separator = Module["_php_pcre2_set_glob_separator"] = createExportWrapper("php_pcre2_set_glob_separator");

var _php_pcre2_set_glob_escape = Module["_php_pcre2_set_glob_escape"] = createExportWrapper("php_pcre2_set_glob_escape");

var _ispunct = Module["_ispunct"] = createExportWrapper("ispunct");

var _php_pcre2_dfa_match = Module["_php_pcre2_dfa_match"] = createExportWrapper("php_pcre2_dfa_match");

var _memchr = Module["_memchr"] = createExportWrapper("memchr");

var _php_pcre2_get_error_message = Module["_php_pcre2_get_error_message"] = createExportWrapper("php_pcre2_get_error_message");

var _php_pcre2_jit_compile = Module["_php_pcre2_jit_compile"] = createExportWrapper("php_pcre2_jit_compile");

var _php_pcre2_jit_match = Module["_php_pcre2_jit_match"] = createExportWrapper("php_pcre2_jit_match");

var _php_pcre2_jit_free_unused_memory = Module["_php_pcre2_jit_free_unused_memory"] = createExportWrapper("php_pcre2_jit_free_unused_memory");

var _php_pcre2_jit_stack_create = Module["_php_pcre2_jit_stack_create"] = createExportWrapper("php_pcre2_jit_stack_create");

var _php_pcre2_jit_stack_assign = Module["_php_pcre2_jit_stack_assign"] = createExportWrapper("php_pcre2_jit_stack_assign");

var _php_pcre2_jit_stack_free = Module["_php_pcre2_jit_stack_free"] = createExportWrapper("php_pcre2_jit_stack_free");

var _php_pcre2_maketables = Module["_php_pcre2_maketables"] = createExportWrapper("php_pcre2_maketables");

var _islower = Module["_islower"] = createExportWrapper("islower");

var _isupper = Module["_isupper"] = createExportWrapper("isupper");

var _isalnum = Module["_isalnum"] = createExportWrapper("isalnum");

var _isxdigit = Module["_isxdigit"] = createExportWrapper("isxdigit");

var _isgraph = Module["_isgraph"] = createExportWrapper("isgraph");

var _isprint = Module["_isprint"] = createExportWrapper("isprint");

var _iscntrl = Module["_iscntrl"] = createExportWrapper("iscntrl");

var _isalpha = Module["_isalpha"] = createExportWrapper("isalpha");

var _pcre2_maketables_free_8 = Module["_pcre2_maketables_free_8"] = createExportWrapper("pcre2_maketables_free_8");

var _php_pcre2_match = Module["_php_pcre2_match"] = createExportWrapper("php_pcre2_match");

var _php_pcre2_match_data_create = Module["_php_pcre2_match_data_create"] = createExportWrapper("php_pcre2_match_data_create");

var _php_pcre2_match_data_create_from_pattern = Module["_php_pcre2_match_data_create_from_pattern"] = createExportWrapper("php_pcre2_match_data_create_from_pattern");

var _php_pcre2_match_data_free = Module["_php_pcre2_match_data_free"] = createExportWrapper("php_pcre2_match_data_free");

var _php_pcre2_get_mark = Module["_php_pcre2_get_mark"] = createExportWrapper("php_pcre2_get_mark");

var _php_pcre2_get_ovector_pointer = Module["_php_pcre2_get_ovector_pointer"] = createExportWrapper("php_pcre2_get_ovector_pointer");

var _php_pcre2_get_ovector_count = Module["_php_pcre2_get_ovector_count"] = createExportWrapper("php_pcre2_get_ovector_count");

var _php_pcre2_get_startchar = Module["_php_pcre2_get_startchar"] = createExportWrapper("php_pcre2_get_startchar");

var _pcre2_get_match_data_size_8 = Module["_pcre2_get_match_data_size_8"] = createExportWrapper("pcre2_get_match_data_size_8");

var _php_pcre2_pattern_info = Module["_php_pcre2_pattern_info"] = createExportWrapper("php_pcre2_pattern_info");

var _php_pcre2_callout_enumerate = Module["_php_pcre2_callout_enumerate"] = createExportWrapper("php_pcre2_callout_enumerate");

var _php_pcre2_serialize_encode = Module["_php_pcre2_serialize_encode"] = createExportWrapper("php_pcre2_serialize_encode");

var _php_pcre2_serialize_decode = Module["_php_pcre2_serialize_decode"] = createExportWrapper("php_pcre2_serialize_decode");

var _php_pcre2_serialize_get_number_of_codes = Module["_php_pcre2_serialize_get_number_of_codes"] = createExportWrapper("php_pcre2_serialize_get_number_of_codes");

var _php_pcre2_serialize_free = Module["_php_pcre2_serialize_free"] = createExportWrapper("php_pcre2_serialize_free");

var _php_pcre2_substitute = Module["_php_pcre2_substitute"] = createExportWrapper("php_pcre2_substitute");

var _php_pcre2_substring_nametable_scan = Module["_php_pcre2_substring_nametable_scan"] = createExportWrapper("php_pcre2_substring_nametable_scan");

var _php_pcre2_substring_length_bynumber = Module["_php_pcre2_substring_length_bynumber"] = createExportWrapper("php_pcre2_substring_length_bynumber");

var _php_pcre2_substring_copy_byname = Module["_php_pcre2_substring_copy_byname"] = createExportWrapper("php_pcre2_substring_copy_byname");

var _php_pcre2_substring_copy_bynumber = Module["_php_pcre2_substring_copy_bynumber"] = createExportWrapper("php_pcre2_substring_copy_bynumber");

var _php_pcre2_substring_get_byname = Module["_php_pcre2_substring_get_byname"] = createExportWrapper("php_pcre2_substring_get_byname");

var _php_pcre2_substring_get_bynumber = Module["_php_pcre2_substring_get_bynumber"] = createExportWrapper("php_pcre2_substring_get_bynumber");

var _php_pcre2_substring_free = Module["_php_pcre2_substring_free"] = createExportWrapper("php_pcre2_substring_free");

var _php_pcre2_substring_length_byname = Module["_php_pcre2_substring_length_byname"] = createExportWrapper("php_pcre2_substring_length_byname");

var _php_pcre2_substring_list_get = Module["_php_pcre2_substring_list_get"] = createExportWrapper("php_pcre2_substring_list_get");

var _php_pcre2_substring_list_free = Module["_php_pcre2_substring_list_free"] = createExportWrapper("php_pcre2_substring_list_free");

var _php_pcre2_substring_number_from_name = Module["_php_pcre2_substring_number_from_name"] = createExportWrapper("php_pcre2_substring_number_from_name");

var _pcre2_pattern_convert_8 = Module["_pcre2_pattern_convert_8"] = createExportWrapper("pcre2_pattern_convert_8");

var _pcre2_converted_pattern_free_8 = Module["_pcre2_converted_pattern_free_8"] = createExportWrapper("pcre2_converted_pattern_free_8");

var _pcre_get_compiled_regex_cache_ex = Module["_pcre_get_compiled_regex_cache_ex"] = createExportWrapper("pcre_get_compiled_regex_cache_ex");

var _zend_string_concat2 = Module["_zend_string_concat2"] = createExportWrapper("zend_string_concat2");

var _zend_hash_apply_with_argument = Module["_zend_hash_apply_with_argument"] = createExportWrapper("zend_hash_apply_with_argument");

var _zend_hash_add_new = Module["_zend_hash_add_new"] = createExportWrapper("zend_hash_add_new");

var _pcre_get_compiled_regex_cache = Module["_pcre_get_compiled_regex_cache"] = createExportWrapper("pcre_get_compiled_regex_cache");

var _pcre_get_compiled_regex = Module["_pcre_get_compiled_regex"] = createExportWrapper("pcre_get_compiled_regex");

var _pcre_get_compiled_regex_ex = Module["_pcre_get_compiled_regex_ex"] = createExportWrapper("pcre_get_compiled_regex_ex");

var _php_pcre_create_match_data = Module["_php_pcre_create_match_data"] = createExportWrapper("php_pcre_create_match_data");

var _php_pcre_free_match_data = Module["_php_pcre_free_match_data"] = createExportWrapper("php_pcre_free_match_data");

var _php_pcre_match_impl = Module["_php_pcre_match_impl"] = createExportWrapper("php_pcre_match_impl");

var __zend_new_array = Module["__zend_new_array"] = createExportWrapper("_zend_new_array");

var _zend_try_assign_typed_ref_arr = Module["_zend_try_assign_typed_ref_arr"] = createExportWrapper("zend_try_assign_typed_ref_arr");

var __safe_emalloc = Module["__safe_emalloc"] = createExportWrapper("_safe_emalloc");

var _zend_hash_next_index_insert_new = Module["_zend_hash_next_index_insert_new"] = createExportWrapper("zend_hash_next_index_insert_new");

var _add_next_index_null = Module["_add_next_index_null"] = createExportWrapper("add_next_index_null");

var _add_next_index_str = Module["_add_next_index_str"] = createExportWrapper("add_next_index_str");

var _zend_hash_update = Module["_zend_hash_update"] = createExportWrapper("zend_hash_update");

var __is_numeric_string_ex = Module["__is_numeric_string_ex"] = createExportWrapper("_is_numeric_string_ex");

var _zend_new_pair = Module["_zend_new_pair"] = createExportWrapper("zend_new_pair");

var _php_pcre_replace = Module["_php_pcre_replace"] = createExportWrapper("php_pcre_replace");

var _php_pcre_replace_impl = Module["_php_pcre_replace_impl"] = createExportWrapper("php_pcre_replace_impl");

var _zend_error_noreturn = Module["_zend_error_noreturn"] = createExportWrapper("zend_error_noreturn");

var _zend_argument_type_error = Module["_zend_argument_type_error"] = createExportWrapper("zend_argument_type_error");

var _zend_hash_index_add_new = Module["_zend_hash_index_add_new"] = createExportWrapper("zend_hash_index_add_new");

var _zend_try_assign_typed_ref_long = Module["_zend_try_assign_typed_ref_long"] = createExportWrapper("zend_try_assign_typed_ref_long");

var _zend_is_callable_ex = Module["_zend_is_callable_ex"] = createExportWrapper("zend_is_callable_ex");

var _zend_array_destroy = Module["_zend_array_destroy"] = createExportWrapper("zend_array_destroy");

var _php_pcre_split_impl = Module["_php_pcre_split_impl"] = createExportWrapper("php_pcre_split_impl");

var __safe_malloc = Module["__safe_malloc"] = createExportWrapper("_safe_malloc");

var _php_pcre_grep_impl = Module["_php_pcre_grep_impl"] = createExportWrapper("php_pcre_grep_impl");

var _zend_hash_index_update = Module["_zend_hash_index_update"] = createExportWrapper("zend_hash_index_update");

var _php_pcre_mctx = Module["_php_pcre_mctx"] = createExportWrapper("php_pcre_mctx");

var _php_pcre_gctx = Module["_php_pcre_gctx"] = createExportWrapper("php_pcre_gctx");

var _php_pcre_cctx = Module["_php_pcre_cctx"] = createExportWrapper("php_pcre_cctx");

var _php_pcre_pce_incref = Module["_php_pcre_pce_incref"] = createExportWrapper("php_pcre_pce_incref");

var _php_pcre_pce_decref = Module["_php_pcre_pce_decref"] = createExportWrapper("php_pcre_pce_decref");

var _php_pcre_pce_re = Module["_php_pcre_pce_re"] = createExportWrapper("php_pcre_pce_re");

var _zend_register_bool_constant = Module["_zend_register_bool_constant"] = createExportWrapper("zend_register_bool_constant");

var _OnUpdateLong = Module["_OnUpdateLong"] = createExportWrapper("OnUpdateLong");

var _zend_throw_exception = Module["_zend_throw_exception"] = createExportWrapper("zend_throw_exception");

var _expand_filepath = Module["_expand_filepath"] = createExportWrapper("expand_filepath");

var _php_check_open_basedir = Module["_php_check_open_basedir"] = createExportWrapper("php_check_open_basedir");

var _sqlite3_open_v2 = Module["_sqlite3_open_v2"] = createExportWrapper("sqlite3_open_v2");

var _sqlite3_errmsg = Module["_sqlite3_errmsg"] = createExportWrapper("sqlite3_errmsg");

var _sqlite3_close = Module["_sqlite3_close"] = createExportWrapper("sqlite3_close");

var _sqlite3_set_authorizer = Module["_sqlite3_set_authorizer"] = createExportWrapper("sqlite3_set_authorizer");

var _sqlite3_db_config = Module["_sqlite3_db_config"] = createExportWrapper("sqlite3_db_config");

var _strncmp = Module["_strncmp"] = createExportWrapper("strncmp");

var _zend_fcall_info_args_clear = Module["_zend_fcall_info_args_clear"] = createExportWrapper("zend_fcall_info_args_clear");

var _sqlite3_exec = Module["_sqlite3_exec"] = createExportWrapper("sqlite3_exec");

var _sqlite3_free = Module["_sqlite3_free"] = createExportWrapper("sqlite3_free");

var _sqlite3_libversion = Module["_sqlite3_libversion"] = createExportWrapper("sqlite3_libversion");

var _sqlite3_libversion_number = Module["_sqlite3_libversion_number"] = createExportWrapper("sqlite3_libversion_number");

var _sqlite3_last_insert_rowid = Module["_sqlite3_last_insert_rowid"] = createExportWrapper("sqlite3_last_insert_rowid");

var _sqlite3_errcode = Module["_sqlite3_errcode"] = createExportWrapper("sqlite3_errcode");

var _sqlite3_extended_errcode = Module["_sqlite3_extended_errcode"] = createExportWrapper("sqlite3_extended_errcode");

var _sqlite3_extended_result_codes = Module["_sqlite3_extended_result_codes"] = createExportWrapper("sqlite3_extended_result_codes");

var _sqlite3_busy_timeout = Module["_sqlite3_busy_timeout"] = createExportWrapper("sqlite3_busy_timeout");

var _zend_spprintf = Module["_zend_spprintf"] = createExportWrapper("zend_spprintf");

var _tsrm_realpath = Module["_tsrm_realpath"] = createExportWrapper("tsrm_realpath");

var _sqlite3_enable_load_extension = Module["_sqlite3_enable_load_extension"] = createExportWrapper("sqlite3_enable_load_extension");

var _sqlite3_load_extension = Module["_sqlite3_load_extension"] = createExportWrapper("sqlite3_load_extension");

var _sqlite3_changes = Module["_sqlite3_changes"] = createExportWrapper("sqlite3_changes");

var _sqlite3_mprintf = Module["_sqlite3_mprintf"] = createExportWrapper("sqlite3_mprintf");

var _sqlite3_prepare_v2 = Module["_sqlite3_prepare_v2"] = createExportWrapper("sqlite3_prepare_v2");

var __emalloc_24 = Module["__emalloc_24"] = createExportWrapper("_emalloc_24");

var _sqlite3_step = Module["_sqlite3_step"] = createExportWrapper("sqlite3_step");

var _sqlite3_reset = Module["_sqlite3_reset"] = createExportWrapper("sqlite3_reset");

var _sqlite3_finalize = Module["_sqlite3_finalize"] = createExportWrapper("sqlite3_finalize");

var _sqlite3_data_count = Module["_sqlite3_data_count"] = createExportWrapper("sqlite3_data_count");

var _sqlite3_column_name = Module["_sqlite3_column_name"] = createExportWrapper("sqlite3_column_name");

var _sqlite3_column_type = Module["_sqlite3_column_type"] = createExportWrapper("sqlite3_column_type");

var _sqlite3_column_int64 = Module["_sqlite3_column_int64"] = createExportWrapper("sqlite3_column_int64");

var _sqlite3_column_text = Module["_sqlite3_column_text"] = createExportWrapper("sqlite3_column_text");

var _sqlite3_column_bytes = Module["_sqlite3_column_bytes"] = createExportWrapper("sqlite3_column_bytes");

var _sqlite3_column_double = Module["_sqlite3_column_double"] = createExportWrapper("sqlite3_column_double");

var _sqlite3_column_blob = Module["_sqlite3_column_blob"] = createExportWrapper("sqlite3_column_blob");

var _sqlite3_create_function = Module["_sqlite3_create_function"] = createExportWrapper("sqlite3_create_function");

var _sqlite3_user_data = Module["_sqlite3_user_data"] = createExportWrapper("sqlite3_user_data");

var _sqlite3_aggregate_context = Module["_sqlite3_aggregate_context"] = createExportWrapper("sqlite3_aggregate_context");

var _sqlite3_create_collation = Module["_sqlite3_create_collation"] = createExportWrapper("sqlite3_create_collation");

var _sqlite3_blob_open = Module["_sqlite3_blob_open"] = createExportWrapper("sqlite3_blob_open");

var _sqlite3_blob_bytes = Module["_sqlite3_blob_bytes"] = createExportWrapper("sqlite3_blob_bytes");

var __php_stream_alloc = Module["__php_stream_alloc"] = createExportWrapper("_php_stream_alloc");

var _sqlite3_backup_init = Module["_sqlite3_backup_init"] = createExportWrapper("sqlite3_backup_init");

var _sqlite3_backup_step = Module["_sqlite3_backup_step"] = createExportWrapper("sqlite3_backup_step");

var _sqlite3_backup_finish = Module["_sqlite3_backup_finish"] = createExportWrapper("sqlite3_backup_finish");

var _sqlite3_bind_parameter_count = Module["_sqlite3_bind_parameter_count"] = createExportWrapper("sqlite3_bind_parameter_count");

var _zend_llist_del_element = Module["_zend_llist_del_element"] = createExportWrapper("zend_llist_del_element");

var _sqlite3_db_handle = Module["_sqlite3_db_handle"] = createExportWrapper("sqlite3_db_handle");

var _sqlite3_clear_bindings = Module["_sqlite3_clear_bindings"] = createExportWrapper("sqlite3_clear_bindings");

var _sqlite3_stmt_readonly = Module["_sqlite3_stmt_readonly"] = createExportWrapper("sqlite3_stmt_readonly");

var _sqlite3_sql = Module["_sqlite3_sql"] = createExportWrapper("sqlite3_sql");

var _sqlite3_bind_null = Module["_sqlite3_bind_null"] = createExportWrapper("sqlite3_bind_null");

var _convert_to_long = Module["_convert_to_long"] = createExportWrapper("convert_to_long");

var _sqlite3_bind_int = Module["_sqlite3_bind_int"] = createExportWrapper("sqlite3_bind_int");

var _convert_to_double = Module["_convert_to_double"] = createExportWrapper("convert_to_double");

var _sqlite3_bind_double = Module["_sqlite3_bind_double"] = createExportWrapper("sqlite3_bind_double");

var __php_stream_copy_to_mem = Module["__php_stream_copy_to_mem"] = createExportWrapper("_php_stream_copy_to_mem");

var _sqlite3_bind_blob = Module["_sqlite3_bind_blob"] = createExportWrapper("sqlite3_bind_blob");

var _zval_try_get_string_func = Module["_zval_try_get_string_func"] = createExportWrapper("zval_try_get_string_func");

var _sqlite3_bind_text = Module["_sqlite3_bind_text"] = createExportWrapper("sqlite3_bind_text");

var _zend_parse_arg_str_or_long_slow = Module["_zend_parse_arg_str_or_long_slow"] = createExportWrapper("zend_parse_arg_str_or_long_slow");

var _sqlite3_column_count = Module["_sqlite3_column_count"] = createExportWrapper("sqlite3_column_count");

var __zend_handle_numeric_str_ex = Module["__zend_handle_numeric_str_ex"] = createExportWrapper("_zend_handle_numeric_str_ex");

var _zend_std_get_gc = Module["_zend_std_get_gc"] = createExportWrapper("zend_std_get_gc");

var _zend_get_gc_buffer_create = Module["_zend_get_gc_buffer_create"] = createExportWrapper("zend_get_gc_buffer_create");

var _zend_get_gc_buffer_grow = Module["_zend_get_gc_buffer_grow"] = createExportWrapper("zend_get_gc_buffer_grow");

var _php_info_print_table_header = Module["_php_info_print_table_header"] = createExportWrapper("php_info_print_table_header");

var _sqlite3_value_type = Module["_sqlite3_value_type"] = createExportWrapper("sqlite3_value_type");

var _sqlite3_value_int = Module["_sqlite3_value_int"] = createExportWrapper("sqlite3_value_int");

var _sqlite3_value_double = Module["_sqlite3_value_double"] = createExportWrapper("sqlite3_value_double");

var _sqlite3_value_text = Module["_sqlite3_value_text"] = createExportWrapper("sqlite3_value_text");

var _sqlite3_value_bytes = Module["_sqlite3_value_bytes"] = createExportWrapper("sqlite3_value_bytes");

var _sqlite3_result_int = Module["_sqlite3_result_int"] = createExportWrapper("sqlite3_result_int");

var _sqlite3_result_null = Module["_sqlite3_result_null"] = createExportWrapper("sqlite3_result_null");

var _sqlite3_result_double = Module["_sqlite3_result_double"] = createExportWrapper("sqlite3_result_double");

var _sqlite3_result_text = Module["_sqlite3_result_text"] = createExportWrapper("sqlite3_result_text");

var _sqlite3_result_error = Module["_sqlite3_result_error"] = createExportWrapper("sqlite3_result_error");

var _sqlite3_blob_write = Module["_sqlite3_blob_write"] = createExportWrapper("sqlite3_blob_write");

var _sqlite3_blob_read = Module["_sqlite3_blob_read"] = createExportWrapper("sqlite3_blob_read");

var _sqlite3_blob_close = Module["_sqlite3_blob_close"] = createExportWrapper("sqlite3_blob_close");

var _sqlite3_bind_parameter_index = Module["_sqlite3_bind_parameter_index"] = createExportWrapper("sqlite3_bind_parameter_index");

var _zend_hash_index_del = Module["_zend_hash_index_del"] = createExportWrapper("zend_hash_index_del");

var _OnUpdateBool = Module["_OnUpdateBool"] = createExportWrapper("OnUpdateBool");

var _zend_ini_boolean_displayer_cb = Module["_zend_ini_boolean_displayer_cb"] = createExportWrapper("zend_ini_boolean_displayer_cb");

var _zend_ini_parse_quantity_warn = Module["_zend_ini_parse_quantity_warn"] = createExportWrapper("zend_ini_parse_quantity_warn");

var _zend_long_to_str = Module["_zend_long_to_str"] = createExportWrapper("zend_long_to_str");

var _zend_alter_ini_entry = Module["_zend_alter_ini_entry"] = createExportWrapper("zend_alter_ini_entry");

var _putchar = Module["_putchar"] = createExportWrapper("putchar");

var _strcpy = Module["_strcpy"] = createExportWrapper("strcpy");

var _localtime_r = Module["_localtime_r"] = createExportWrapper("localtime_r");

var _mktime = Module["_mktime"] = createExportWrapper("mktime");

var _zend_zval_type_name = Module["_zend_zval_type_name"] = createExportWrapper("zend_zval_type_name");

var _zend_hash_del = Module["_zend_hash_del"] = createExportWrapper("zend_hash_del");

var _dom_object_get_node = Module["_dom_object_get_node"] = createExportWrapper("dom_object_get_node");

var _php_dom_object_get_data = Module["_php_dom_object_get_data"] = createExportWrapper("php_dom_object_get_data");

var _zend_get_property_info = Module["_zend_get_property_info"] = createExportWrapper("zend_get_property_info");

var _zend_verify_property_type = Module["_zend_verify_property_type"] = createExportWrapper("zend_verify_property_type");

var _php_dom_create_object = Module["_php_dom_create_object"] = createExportWrapper("php_dom_create_object");

var _zend_hash_merge = Module["_zend_hash_merge"] = createExportWrapper("zend_hash_merge");

var _xmlDocCopyNode = Module["_xmlDocCopyNode"] = createExportWrapper("xmlDocCopyNode");

var _zend_declare_property_ex = Module["_zend_declare_property_ex"] = createExportWrapper("zend_declare_property_ex");

var _xmlXPathFreeContext = Module["_xmlXPathFreeContext"] = createExportWrapper("xmlXPathFreeContext");

var __emalloc_40 = Module["__emalloc_40"] = createExportWrapper("_emalloc_40");

var _zend_binary_strcasecmp = Module["_zend_binary_strcasecmp"] = createExportWrapper("zend_binary_strcasecmp");

var _xmlStrEqual = Module["_xmlStrEqual"] = createExportWrapper("xmlStrEqual");

var _xmlNodeGetContent = Module["_xmlNodeGetContent"] = createExportWrapper("xmlNodeGetContent");

var _xmlNodeAddContent = Module["_xmlNodeAddContent"] = createExportWrapper("xmlNodeAddContent");

var _xmlSearchNsByHref = Module["_xmlSearchNsByHref"] = createExportWrapper("xmlSearchNsByHref");

var _xmlDOMWrapReconcileNamespaces = Module["_xmlDOMWrapReconcileNamespaces"] = createExportWrapper("xmlDOMWrapReconcileNamespaces");

var _xmlSplitQName2 = Module["_xmlSplitQName2"] = createExportWrapper("xmlSplitQName2");

var _xmlValidateQName = Module["_xmlValidateQName"] = createExportWrapper("xmlValidateQName");

var _xmlNewNs = Module["_xmlNewNs"] = createExportWrapper("xmlNewNs");

var _xmlNewDocNode = Module["_xmlNewDocNode"] = createExportWrapper("xmlNewDocNode");

var _zend_hash_copy = Module["_zend_hash_copy"] = createExportWrapper("zend_hash_copy");

var _xmlValidateName = Module["_xmlValidateName"] = createExportWrapper("xmlValidateName");

var _xmlNewProp = Module["_xmlNewProp"] = createExportWrapper("xmlNewProp");

var _xmlNodeSetContentLen = Module["_xmlNodeSetContentLen"] = createExportWrapper("xmlNodeSetContentLen");

var _xmlGetIntSubset = Module["_xmlGetIntSubset"] = createExportWrapper("xmlGetIntSubset");

var _xmlDocGetRootElement = Module["_xmlDocGetRootElement"] = createExportWrapper("xmlDocGetRootElement");

var _xmlFindCharEncodingHandler = Module["_xmlFindCharEncodingHandler"] = createExportWrapper("xmlFindCharEncodingHandler");

var _xmlCharEncCloseFunc = Module["_xmlCharEncCloseFunc"] = createExportWrapper("xmlCharEncCloseFunc");

var _xmlNewDocFragment = Module["_xmlNewDocFragment"] = createExportWrapper("xmlNewDocFragment");

var _xmlNewDocText = Module["_xmlNewDocText"] = createExportWrapper("xmlNewDocText");

var _xmlNewDocComment = Module["_xmlNewDocComment"] = createExportWrapper("xmlNewDocComment");

var _xmlNewCDataBlock = Module["_xmlNewCDataBlock"] = createExportWrapper("xmlNewCDataBlock");

var _xmlNewPI = Module["_xmlNewPI"] = createExportWrapper("xmlNewPI");

var _xmlNewDocProp = Module["_xmlNewDocProp"] = createExportWrapper("xmlNewDocProp");

var _xmlNewReference = Module["_xmlNewReference"] = createExportWrapper("xmlNewReference");

var _xmlCharStrndup = Module["_xmlCharStrndup"] = createExportWrapper("xmlCharStrndup");

var _xmlSetNs = Module["_xmlSetNs"] = createExportWrapper("xmlSetNs");

var _xmlGetID = Module["_xmlGetID"] = createExportWrapper("xmlGetID");

var _xmlNewDoc = Module["_xmlNewDoc"] = createExportWrapper("xmlNewDoc");

var _xmlCreateURI = Module["_xmlCreateURI"] = createExportWrapper("xmlCreateURI");

var _xmlURIEscapeStr = Module["_xmlURIEscapeStr"] = createExportWrapper("xmlURIEscapeStr");

var _xmlParseURIReference = Module["_xmlParseURIReference"] = createExportWrapper("xmlParseURIReference");

var _xmlSaveFormatFileEnc = Module["_xmlSaveFormatFileEnc"] = createExportWrapper("xmlSaveFormatFileEnc");

var _xmlBufferCreate = Module["_xmlBufferCreate"] = createExportWrapper("xmlBufferCreate");

var _xmlNodeDump = Module["_xmlNodeDump"] = createExportWrapper("xmlNodeDump");

var _xmlBufferContent = Module["_xmlBufferContent"] = createExportWrapper("xmlBufferContent");

var _xmlBufferFree = Module["_xmlBufferFree"] = createExportWrapper("xmlBufferFree");

var _xmlDocDumpFormatMemory = Module["_xmlDocDumpFormatMemory"] = createExportWrapper("xmlDocDumpFormatMemory");

var _xmlPedanticParserDefault = Module["_xmlPedanticParserDefault"] = createExportWrapper("xmlPedanticParserDefault");

var _xmlSubstituteEntitiesDefault = Module["_xmlSubstituteEntitiesDefault"] = createExportWrapper("xmlSubstituteEntitiesDefault");

var _xmlLineNumbersDefault = Module["_xmlLineNumbersDefault"] = createExportWrapper("xmlLineNumbersDefault");

var _xmlKeepBlanksDefault = Module["_xmlKeepBlanksDefault"] = createExportWrapper("xmlKeepBlanksDefault");

var _xmlXIncludeProcessFlags = Module["_xmlXIncludeProcessFlags"] = createExportWrapper("xmlXIncludeProcessFlags");

var _xmlNewValidCtxt = Module["_xmlNewValidCtxt"] = createExportWrapper("xmlNewValidCtxt");

var _xmlValidateDocument = Module["_xmlValidateDocument"] = createExportWrapper("xmlValidateDocument");

var _xmlFreeValidCtxt = Module["_xmlFreeValidCtxt"] = createExportWrapper("xmlFreeValidCtxt");

var _xmlSchemaNewParserCtxt = Module["_xmlSchemaNewParserCtxt"] = createExportWrapper("xmlSchemaNewParserCtxt");

var _xmlSchemaNewMemParserCtxt = Module["_xmlSchemaNewMemParserCtxt"] = createExportWrapper("xmlSchemaNewMemParserCtxt");

var _xmlSchemaSetParserErrors = Module["_xmlSchemaSetParserErrors"] = createExportWrapper("xmlSchemaSetParserErrors");

var _xmlSchemaParse = Module["_xmlSchemaParse"] = createExportWrapper("xmlSchemaParse");

var _xmlSchemaFreeParserCtxt = Module["_xmlSchemaFreeParserCtxt"] = createExportWrapper("xmlSchemaFreeParserCtxt");

var _xmlSchemaNewValidCtxt = Module["_xmlSchemaNewValidCtxt"] = createExportWrapper("xmlSchemaNewValidCtxt");

var _xmlSchemaFree = Module["_xmlSchemaFree"] = createExportWrapper("xmlSchemaFree");

var _xmlSchemaSetValidOptions = Module["_xmlSchemaSetValidOptions"] = createExportWrapper("xmlSchemaSetValidOptions");

var _xmlSchemaSetValidErrors = Module["_xmlSchemaSetValidErrors"] = createExportWrapper("xmlSchemaSetValidErrors");

var _xmlSchemaValidateDoc = Module["_xmlSchemaValidateDoc"] = createExportWrapper("xmlSchemaValidateDoc");

var _xmlSchemaFreeValidCtxt = Module["_xmlSchemaFreeValidCtxt"] = createExportWrapper("xmlSchemaFreeValidCtxt");

var _xmlRelaxNGNewParserCtxt = Module["_xmlRelaxNGNewParserCtxt"] = createExportWrapper("xmlRelaxNGNewParserCtxt");

var _xmlRelaxNGNewMemParserCtxt = Module["_xmlRelaxNGNewMemParserCtxt"] = createExportWrapper("xmlRelaxNGNewMemParserCtxt");

var _xmlRelaxNGSetParserErrors = Module["_xmlRelaxNGSetParserErrors"] = createExportWrapper("xmlRelaxNGSetParserErrors");

var _xmlRelaxNGParse = Module["_xmlRelaxNGParse"] = createExportWrapper("xmlRelaxNGParse");

var _xmlRelaxNGFreeParserCtxt = Module["_xmlRelaxNGFreeParserCtxt"] = createExportWrapper("xmlRelaxNGFreeParserCtxt");

var _xmlRelaxNGNewValidCtxt = Module["_xmlRelaxNGNewValidCtxt"] = createExportWrapper("xmlRelaxNGNewValidCtxt");

var _xmlRelaxNGFree = Module["_xmlRelaxNGFree"] = createExportWrapper("xmlRelaxNGFree");

var _xmlRelaxNGSetValidErrors = Module["_xmlRelaxNGSetValidErrors"] = createExportWrapper("xmlRelaxNGSetValidErrors");

var _xmlRelaxNGValidateDoc = Module["_xmlRelaxNGValidateDoc"] = createExportWrapper("xmlRelaxNGValidateDoc");

var _xmlRelaxNGFreeValidCtxt = Module["_xmlRelaxNGFreeValidCtxt"] = createExportWrapper("xmlRelaxNGFreeValidCtxt");

var _htmlCreateFileParserCtxt = Module["_htmlCreateFileParserCtxt"] = createExportWrapper("htmlCreateFileParserCtxt");

var _htmlCreateMemoryParserCtxt = Module["_htmlCreateMemoryParserCtxt"] = createExportWrapper("htmlCreateMemoryParserCtxt");

var _htmlCtxtUseOptions = Module["_htmlCtxtUseOptions"] = createExportWrapper("htmlCtxtUseOptions");

var _htmlParseDocument = Module["_htmlParseDocument"] = createExportWrapper("htmlParseDocument");

var _htmlFreeParserCtxt = Module["_htmlFreeParserCtxt"] = createExportWrapper("htmlFreeParserCtxt");

var _htmlGetMetaEncoding = Module["_htmlGetMetaEncoding"] = createExportWrapper("htmlGetMetaEncoding");

var _htmlSaveFileFormat = Module["_htmlSaveFileFormat"] = createExportWrapper("htmlSaveFileFormat");

var _xmlOutputBufferCreateBuffer = Module["_xmlOutputBufferCreateBuffer"] = createExportWrapper("xmlOutputBufferCreateBuffer");

var _htmlNodeDumpFormatOutput = Module["_htmlNodeDumpFormatOutput"] = createExportWrapper("htmlNodeDumpFormatOutput");

var _xmlOutputBufferFlush = Module["_xmlOutputBufferFlush"] = createExportWrapper("xmlOutputBufferFlush");

var _xmlBufferLength = Module["_xmlBufferLength"] = createExportWrapper("xmlBufferLength");

var _xmlOutputBufferClose = Module["_xmlOutputBufferClose"] = createExportWrapper("xmlOutputBufferClose");

var _htmlDocDumpMemoryFormat = Module["_htmlDocDumpMemoryFormat"] = createExportWrapper("htmlDocDumpMemoryFormat");

var _zend_argument_error = Module["_zend_argument_error"] = createExportWrapper("zend_argument_error");

var _xmlCreateFileParserCtxt = Module["_xmlCreateFileParserCtxt"] = createExportWrapper("xmlCreateFileParserCtxt");

var _xmlCreateMemoryParserCtxt = Module["_xmlCreateMemoryParserCtxt"] = createExportWrapper("xmlCreateMemoryParserCtxt");

var _getcwd = Module["_getcwd"] = createExportWrapper("getcwd");

var _xmlCanonicPath = Module["_xmlCanonicPath"] = createExportWrapper("xmlCanonicPath");

var _xmlCtxtUseOptions = Module["_xmlCtxtUseOptions"] = createExportWrapper("xmlCtxtUseOptions");

var _xmlParseDocument = Module["_xmlParseDocument"] = createExportWrapper("xmlParseDocument");

var _xmlFreeParserCtxt = Module["_xmlFreeParserCtxt"] = createExportWrapper("xmlFreeParserCtxt");

var _xmlSetTreeDoc = Module["_xmlSetTreeDoc"] = createExportWrapper("xmlSetTreeDoc");

var _xmlCopyNode = Module["_xmlCopyNode"] = createExportWrapper("xmlCopyNode");

var _xmlAddChild = Module["_xmlAddChild"] = createExportWrapper("xmlAddChild");

var _xmlParseBalancedChunkMemory = Module["_xmlParseBalancedChunkMemory"] = createExportWrapper("xmlParseBalancedChunkMemory");

var _xmlAddChildList = Module["_xmlAddChildList"] = createExportWrapper("xmlAddChildList");

var _xmlStrchr = Module["_xmlStrchr"] = createExportWrapper("xmlStrchr");

var _xmlCreateIntSubset = Module["_xmlCreateIntSubset"] = createExportWrapper("xmlCreateIntSubset");

var _xmlDocSetRootElement = Module["_xmlDocSetRootElement"] = createExportWrapper("xmlDocSetRootElement");

var _xmlNewNode = Module["_xmlNewNode"] = createExportWrapper("xmlNewNode");

var _xmlStrcat = Module["_xmlStrcat"] = createExportWrapper("xmlStrcat");

var _xmlNodeListGetString = Module["_xmlNodeListGetString"] = createExportWrapper("xmlNodeListGetString");

var _xmlSplitQName3 = Module["_xmlSplitQName3"] = createExportWrapper("xmlSplitQName3");

var _xmlStrndup = Module["_xmlStrndup"] = createExportWrapper("xmlStrndup");

var _xmlSearchNs = Module["_xmlSearchNs"] = createExportWrapper("xmlSearchNs");

var _xmlHasNsProp = Module["_xmlHasNsProp"] = createExportWrapper("xmlHasNsProp");

var _xmlSetProp = Module["_xmlSetProp"] = createExportWrapper("xmlSetProp");

var _xmlHasProp = Module["_xmlHasProp"] = createExportWrapper("xmlHasProp");

var _xmlGetNsProp = Module["_xmlGetNsProp"] = createExportWrapper("xmlGetNsProp");

var _xmlReconciliateNs = Module["_xmlReconciliateNs"] = createExportWrapper("xmlReconciliateNs");

var _xmlSetNsProp = Module["_xmlSetNsProp"] = createExportWrapper("xmlSetNsProp");

var _xmlAddID = Module["_xmlAddID"] = createExportWrapper("xmlAddID");

var _xmlNodeGetBase = Module["_xmlNodeGetBase"] = createExportWrapper("xmlNodeGetBase");

var _xmlNewText = Module["_xmlNewText"] = createExportWrapper("xmlNewText");

var _xmlNodeSetContent = Module["_xmlNodeSetContent"] = createExportWrapper("xmlNodeSetContent");

var _xmlAddPrevSibling = Module["_xmlAddPrevSibling"] = createExportWrapper("xmlAddPrevSibling");

var _xmlReplaceNode = Module["_xmlReplaceNode"] = createExportWrapper("xmlReplaceNode");

var _xmlCopyNamespaceList = Module["_xmlCopyNamespaceList"] = createExportWrapper("xmlCopyNamespaceList");

var _xmlCopyPropList = Module["_xmlCopyPropList"] = createExportWrapper("xmlCopyPropList");

var _xmlXPathNewContext = Module["_xmlXPathNewContext"] = createExportWrapper("xmlXPathNewContext");

var _xmlXPathEvalExpression = Module["_xmlXPathEvalExpression"] = createExportWrapper("xmlXPathEvalExpression");

var _xmlXPathFreeObject = Module["_xmlXPathFreeObject"] = createExportWrapper("xmlXPathFreeObject");

var _xmlXPathRegisterNs = Module["_xmlXPathRegisterNs"] = createExportWrapper("xmlXPathRegisterNs");

var _xmlOutputBufferCreateFilename = Module["_xmlOutputBufferCreateFilename"] = createExportWrapper("xmlOutputBufferCreateFilename");

var _xmlC14NDocSaveTo = Module["_xmlC14NDocSaveTo"] = createExportWrapper("xmlC14NDocSaveTo");

var _xmlOutputBufferGetSize = Module["_xmlOutputBufferGetSize"] = createExportWrapper("xmlOutputBufferGetSize");

var _xmlOutputBufferGetContent = Module["_xmlOutputBufferGetContent"] = createExportWrapper("xmlOutputBufferGetContent");

var _xmlGetNodePath = Module["_xmlGetNodePath"] = createExportWrapper("xmlGetNodePath");

var _xmlGetLineNo = Module["_xmlGetLineNo"] = createExportWrapper("xmlGetLineNo");

var _xmlUTF8Strlen = Module["_xmlUTF8Strlen"] = createExportWrapper("xmlUTF8Strlen");

var _xmlUTF8Strsub = Module["_xmlUTF8Strsub"] = createExportWrapper("xmlUTF8Strsub");

var _xmlTextConcat = Module["_xmlTextConcat"] = createExportWrapper("xmlTextConcat");

var _xmlUTF8Strndup = Module["_xmlUTF8Strndup"] = createExportWrapper("xmlUTF8Strndup");

var _xmlNodeDumpOutput = Module["_xmlNodeDumpOutput"] = createExportWrapper("xmlNodeDumpOutput");

var _xmlHashSize = Module["_xmlHashSize"] = createExportWrapper("xmlHashSize");

var _zend_hash_index_find = Module["_zend_hash_index_find"] = createExportWrapper("zend_hash_index_find");

var _xmlAddNextSibling = Module["_xmlAddNextSibling"] = createExportWrapper("xmlAddNextSibling");

var _xmlIsBlankNode = Module["_xmlIsBlankNode"] = createExportWrapper("xmlIsBlankNode");

var _xmlNewComment = Module["_xmlNewComment"] = createExportWrapper("xmlNewComment");

var _xmlXPathRegisterFuncNS = Module["_xmlXPathRegisterFuncNS"] = createExportWrapper("xmlXPathRegisterFuncNS");

var _xmlGetNsList = Module["_xmlGetNsList"] = createExportWrapper("xmlGetNsList");

var _zend_is_executing = Module["_zend_is_executing"] = createExportWrapper("zend_is_executing");

var _valuePop = Module["_valuePop"] = createExportWrapper("valuePop");

var _xmlXPathCastToString = Module["_xmlXPathCastToString"] = createExportWrapper("xmlXPathCastToString");

var _zend_make_callable = Module["_zend_make_callable"] = createExportWrapper("zend_make_callable");

var _xmlXPathNewNodeSet = Module["_xmlXPathNewNodeSet"] = createExportWrapper("xmlXPathNewNodeSet");

var _valuePush = Module["_valuePush"] = createExportWrapper("valuePush");

var _xmlXPathNewBoolean = Module["_xmlXPathNewBoolean"] = createExportWrapper("xmlXPathNewBoolean");

var _xmlXPathNewString = Module["_xmlXPathNewString"] = createExportWrapper("xmlXPathNewString");

var _xmlHashScan = Module["_xmlHashScan"] = createExportWrapper("xmlHashScan");

var _zend_hash_internal_pointer_reset_ex = Module["_zend_hash_internal_pointer_reset_ex"] = createExportWrapper("zend_hash_internal_pointer_reset_ex");

var _zend_hash_get_current_data_ex = Module["_zend_hash_get_current_data_ex"] = createExportWrapper("zend_hash_get_current_data_ex");

var _xmlStrlen = Module["_xmlStrlen"] = createExportWrapper("xmlStrlen");

var _zend_hash_move_forward_ex = Module["_zend_hash_move_forward_ex"] = createExportWrapper("zend_hash_move_forward_ex");

var _xmlHashLookup = Module["_xmlHashLookup"] = createExportWrapper("xmlHashLookup");

var _sapi_register_input_filter = Module["_sapi_register_input_filter"] = createExportWrapper("sapi_register_input_filter");

var _php_register_variable_ex = Module["_php_register_variable_ex"] = createExportWrapper("php_register_variable_ex");

var _zend_is_auto_global = Module["_zend_is_auto_global"] = createExportWrapper("zend_is_auto_global");

var _strcasecmp = Module["_strcasecmp"] = createExportWrapper("strcasecmp");

var _atoi = Module["_atoi"] = createExportWrapper("atoi");

var __convert_to_string = Module["__convert_to_string"] = createExportWrapper("_convert_to_string");

var _php_strip_tags_ex = Module["_php_strip_tags_ex"] = createExportWrapper("php_strip_tags_ex");

var _php_escape_html_entities_ex = Module["_php_escape_html_entities_ex"] = createExportWrapper("php_escape_html_entities_ex");

var _php_addslashes = Module["_php_addslashes"] = createExportWrapper("php_addslashes");

var _get_active_function_name = Module["_get_active_function_name"] = createExportWrapper("get_active_function_name");

var _strpbrk = Module["_strpbrk"] = createExportWrapper("strpbrk");

var _php_url_parse_ex = Module["_php_url_parse_ex"] = createExportWrapper("php_url_parse_ex");

var _php_url_free = Module["_php_url_free"] = createExportWrapper("php_url_free");

var _zend_is_callable = Module["_zend_is_callable"] = createExportWrapper("zend_is_callable");

var __call_user_function_impl = Module["__call_user_function_impl"] = createExportWrapper("_call_user_function_impl");

var _php_hash_fetch_ops = Module["_php_hash_fetch_ops"] = createExportWrapper("php_hash_fetch_ops");

var _zend_string_tolower_ex = Module["_zend_string_tolower_ex"] = createExportWrapper("zend_string_tolower_ex");

var _php_hash_register_algo = Module["_php_hash_register_algo"] = createExportWrapper("php_hash_register_algo");

var _zend_str_tolower_dup = Module["_zend_str_tolower_dup"] = createExportWrapper("zend_str_tolower_dup");

var _php_hash_copy = Module["_php_hash_copy"] = createExportWrapper("php_hash_copy");

var _php_hash_serialize_spec = Module["_php_hash_serialize_spec"] = createExportWrapper("php_hash_serialize_spec");

var _php_hash_unserialize_spec = Module["_php_hash_unserialize_spec"] = createExportWrapper("php_hash_unserialize_spec");

var _php_hash_serialize = Module["_php_hash_serialize"] = createExportWrapper("php_hash_serialize");

var _php_hash_unserialize = Module["_php_hash_unserialize"] = createExportWrapper("php_hash_unserialize");

var _explicit_bzero = Module["_explicit_bzero"] = createExportWrapper("explicit_bzero");

var _php_safe_bcmp = Module["_php_safe_bcmp"] = createExportWrapper("php_safe_bcmp");

var _object_properties_load = Module["_object_properties_load"] = createExportWrapper("object_properties_load");

var _zend_add_attribute = Module["_zend_add_attribute"] = createExportWrapper("zend_add_attribute");

var _PHP_MD4InitArgs = Module["_PHP_MD4InitArgs"] = createExportWrapper("PHP_MD4InitArgs");

var _PHP_MD4Update = Module["_PHP_MD4Update"] = createExportWrapper("PHP_MD4Update");

var _PHP_MD4Final = Module["_PHP_MD4Final"] = createExportWrapper("PHP_MD4Final");

var _PHP_MD2InitArgs = Module["_PHP_MD2InitArgs"] = createExportWrapper("PHP_MD2InitArgs");

var _PHP_MD2Update = Module["_PHP_MD2Update"] = createExportWrapper("PHP_MD2Update");

var _PHP_MD2Final = Module["_PHP_MD2Final"] = createExportWrapper("PHP_MD2Final");

var _PHP_MD5InitArgs = Module["_PHP_MD5InitArgs"] = createExportWrapper("PHP_MD5InitArgs");

var _PHP_MD5Update = Module["_PHP_MD5Update"] = createExportWrapper("PHP_MD5Update");

var _PHP_MD5Final = Module["_PHP_MD5Final"] = createExportWrapper("PHP_MD5Final");

var _PHP_SHA256InitArgs = Module["_PHP_SHA256InitArgs"] = createExportWrapper("PHP_SHA256InitArgs");

var _PHP_SHA256Update = Module["_PHP_SHA256Update"] = createExportWrapper("PHP_SHA256Update");

var _PHP_SHA256Final = Module["_PHP_SHA256Final"] = createExportWrapper("PHP_SHA256Final");

var _PHP_SHA224InitArgs = Module["_PHP_SHA224InitArgs"] = createExportWrapper("PHP_SHA224InitArgs");

var _PHP_SHA224Update = Module["_PHP_SHA224Update"] = createExportWrapper("PHP_SHA224Update");

var _PHP_SHA224Final = Module["_PHP_SHA224Final"] = createExportWrapper("PHP_SHA224Final");

var _PHP_SHA384InitArgs = Module["_PHP_SHA384InitArgs"] = createExportWrapper("PHP_SHA384InitArgs");

var _PHP_SHA384Update = Module["_PHP_SHA384Update"] = createExportWrapper("PHP_SHA384Update");

var _PHP_SHA384Final = Module["_PHP_SHA384Final"] = createExportWrapper("PHP_SHA384Final");

var _PHP_SHA512InitArgs = Module["_PHP_SHA512InitArgs"] = createExportWrapper("PHP_SHA512InitArgs");

var _PHP_SHA512_256InitArgs = Module["_PHP_SHA512_256InitArgs"] = createExportWrapper("PHP_SHA512_256InitArgs");

var _PHP_SHA512_224InitArgs = Module["_PHP_SHA512_224InitArgs"] = createExportWrapper("PHP_SHA512_224InitArgs");

var _PHP_SHA512Update = Module["_PHP_SHA512Update"] = createExportWrapper("PHP_SHA512Update");

var _PHP_SHA512Final = Module["_PHP_SHA512Final"] = createExportWrapper("PHP_SHA512Final");

var _PHP_SHA512_256Final = Module["_PHP_SHA512_256Final"] = createExportWrapper("PHP_SHA512_256Final");

var _PHP_SHA512_224Final = Module["_PHP_SHA512_224Final"] = createExportWrapper("PHP_SHA512_224Final");

var _PHP_SHA1InitArgs = Module["_PHP_SHA1InitArgs"] = createExportWrapper("PHP_SHA1InitArgs");

var _PHP_SHA1Update = Module["_PHP_SHA1Update"] = createExportWrapper("PHP_SHA1Update");

var _PHP_SHA1Final = Module["_PHP_SHA1Final"] = createExportWrapper("PHP_SHA1Final");

var _PHP_RIPEMD128Init = Module["_PHP_RIPEMD128Init"] = createExportWrapper("PHP_RIPEMD128Init");

var _PHP_RIPEMD128Update = Module["_PHP_RIPEMD128Update"] = createExportWrapper("PHP_RIPEMD128Update");

var _PHP_RIPEMD128Final = Module["_PHP_RIPEMD128Final"] = createExportWrapper("PHP_RIPEMD128Final");

var _PHP_RIPEMD160Init = Module["_PHP_RIPEMD160Init"] = createExportWrapper("PHP_RIPEMD160Init");

var _PHP_RIPEMD160Update = Module["_PHP_RIPEMD160Update"] = createExportWrapper("PHP_RIPEMD160Update");

var _PHP_RIPEMD160Final = Module["_PHP_RIPEMD160Final"] = createExportWrapper("PHP_RIPEMD160Final");

var _PHP_RIPEMD256Init = Module["_PHP_RIPEMD256Init"] = createExportWrapper("PHP_RIPEMD256Init");

var _PHP_RIPEMD256Update = Module["_PHP_RIPEMD256Update"] = createExportWrapper("PHP_RIPEMD256Update");

var _PHP_RIPEMD256Final = Module["_PHP_RIPEMD256Final"] = createExportWrapper("PHP_RIPEMD256Final");

var _PHP_RIPEMD320Init = Module["_PHP_RIPEMD320Init"] = createExportWrapper("PHP_RIPEMD320Init");

var _PHP_RIPEMD320Update = Module["_PHP_RIPEMD320Update"] = createExportWrapper("PHP_RIPEMD320Update");

var _PHP_RIPEMD320Final = Module["_PHP_RIPEMD320Final"] = createExportWrapper("PHP_RIPEMD320Final");

var _PHP_3HAVAL128Init = Module["_PHP_3HAVAL128Init"] = createExportWrapper("PHP_3HAVAL128Init");

var _PHP_HAVALUpdate = Module["_PHP_HAVALUpdate"] = createExportWrapper("PHP_HAVALUpdate");

var _PHP_HAVAL128Final = Module["_PHP_HAVAL128Final"] = createExportWrapper("PHP_HAVAL128Final");

var _PHP_3HAVAL160Init = Module["_PHP_3HAVAL160Init"] = createExportWrapper("PHP_3HAVAL160Init");

var _PHP_HAVAL160Final = Module["_PHP_HAVAL160Final"] = createExportWrapper("PHP_HAVAL160Final");

var _PHP_3HAVAL192Init = Module["_PHP_3HAVAL192Init"] = createExportWrapper("PHP_3HAVAL192Init");

var _PHP_HAVAL192Final = Module["_PHP_HAVAL192Final"] = createExportWrapper("PHP_HAVAL192Final");

var _PHP_3HAVAL224Init = Module["_PHP_3HAVAL224Init"] = createExportWrapper("PHP_3HAVAL224Init");

var _PHP_HAVAL224Final = Module["_PHP_HAVAL224Final"] = createExportWrapper("PHP_HAVAL224Final");

var _PHP_3HAVAL256Init = Module["_PHP_3HAVAL256Init"] = createExportWrapper("PHP_3HAVAL256Init");

var _PHP_HAVAL256Final = Module["_PHP_HAVAL256Final"] = createExportWrapper("PHP_HAVAL256Final");

var _PHP_4HAVAL128Init = Module["_PHP_4HAVAL128Init"] = createExportWrapper("PHP_4HAVAL128Init");

var _PHP_4HAVAL160Init = Module["_PHP_4HAVAL160Init"] = createExportWrapper("PHP_4HAVAL160Init");

var _PHP_4HAVAL192Init = Module["_PHP_4HAVAL192Init"] = createExportWrapper("PHP_4HAVAL192Init");

var _PHP_4HAVAL224Init = Module["_PHP_4HAVAL224Init"] = createExportWrapper("PHP_4HAVAL224Init");

var _PHP_4HAVAL256Init = Module["_PHP_4HAVAL256Init"] = createExportWrapper("PHP_4HAVAL256Init");

var _PHP_5HAVAL128Init = Module["_PHP_5HAVAL128Init"] = createExportWrapper("PHP_5HAVAL128Init");

var _PHP_5HAVAL160Init = Module["_PHP_5HAVAL160Init"] = createExportWrapper("PHP_5HAVAL160Init");

var _PHP_5HAVAL192Init = Module["_PHP_5HAVAL192Init"] = createExportWrapper("PHP_5HAVAL192Init");

var _PHP_5HAVAL224Init = Module["_PHP_5HAVAL224Init"] = createExportWrapper("PHP_5HAVAL224Init");

var _PHP_5HAVAL256Init = Module["_PHP_5HAVAL256Init"] = createExportWrapper("PHP_5HAVAL256Init");

var _PHP_3TIGERInit = Module["_PHP_3TIGERInit"] = createExportWrapper("PHP_3TIGERInit");

var _PHP_4TIGERInit = Module["_PHP_4TIGERInit"] = createExportWrapper("PHP_4TIGERInit");

var _PHP_TIGERUpdate = Module["_PHP_TIGERUpdate"] = createExportWrapper("PHP_TIGERUpdate");

var _PHP_TIGER128Final = Module["_PHP_TIGER128Final"] = createExportWrapper("PHP_TIGER128Final");

var _PHP_TIGER160Final = Module["_PHP_TIGER160Final"] = createExportWrapper("PHP_TIGER160Final");

var _PHP_TIGER192Final = Module["_PHP_TIGER192Final"] = createExportWrapper("PHP_TIGER192Final");

var _PHP_GOSTInit = Module["_PHP_GOSTInit"] = createExportWrapper("PHP_GOSTInit");

var _PHP_GOSTInitCrypto = Module["_PHP_GOSTInitCrypto"] = createExportWrapper("PHP_GOSTInitCrypto");

var _PHP_GOSTUpdate = Module["_PHP_GOSTUpdate"] = createExportWrapper("PHP_GOSTUpdate");

var _PHP_GOSTFinal = Module["_PHP_GOSTFinal"] = createExportWrapper("PHP_GOSTFinal");

var _PHP_SNEFRUInit = Module["_PHP_SNEFRUInit"] = createExportWrapper("PHP_SNEFRUInit");

var _PHP_SNEFRUUpdate = Module["_PHP_SNEFRUUpdate"] = createExportWrapper("PHP_SNEFRUUpdate");

var _PHP_SNEFRUFinal = Module["_PHP_SNEFRUFinal"] = createExportWrapper("PHP_SNEFRUFinal");

var _PHP_WHIRLPOOLInit = Module["_PHP_WHIRLPOOLInit"] = createExportWrapper("PHP_WHIRLPOOLInit");

var _PHP_WHIRLPOOLUpdate = Module["_PHP_WHIRLPOOLUpdate"] = createExportWrapper("PHP_WHIRLPOOLUpdate");

var _PHP_WHIRLPOOLFinal = Module["_PHP_WHIRLPOOLFinal"] = createExportWrapper("PHP_WHIRLPOOLFinal");

var _PHP_ADLER32Init = Module["_PHP_ADLER32Init"] = createExportWrapper("PHP_ADLER32Init");

var _PHP_ADLER32Update = Module["_PHP_ADLER32Update"] = createExportWrapper("PHP_ADLER32Update");

var _PHP_ADLER32Final = Module["_PHP_ADLER32Final"] = createExportWrapper("PHP_ADLER32Final");

var _PHP_ADLER32Copy = Module["_PHP_ADLER32Copy"] = createExportWrapper("PHP_ADLER32Copy");

var _PHP_CRC32Init = Module["_PHP_CRC32Init"] = createExportWrapper("PHP_CRC32Init");

var _PHP_CRC32Update = Module["_PHP_CRC32Update"] = createExportWrapper("PHP_CRC32Update");

var _PHP_CRC32BUpdate = Module["_PHP_CRC32BUpdate"] = createExportWrapper("PHP_CRC32BUpdate");

var _PHP_CRC32CUpdate = Module["_PHP_CRC32CUpdate"] = createExportWrapper("PHP_CRC32CUpdate");

var _PHP_CRC32LEFinal = Module["_PHP_CRC32LEFinal"] = createExportWrapper("PHP_CRC32LEFinal");

var _PHP_CRC32BEFinal = Module["_PHP_CRC32BEFinal"] = createExportWrapper("PHP_CRC32BEFinal");

var _PHP_CRC32Copy = Module["_PHP_CRC32Copy"] = createExportWrapper("PHP_CRC32Copy");

var _PHP_FNV132Init = Module["_PHP_FNV132Init"] = createExportWrapper("PHP_FNV132Init");

var _PHP_FNV132Update = Module["_PHP_FNV132Update"] = createExportWrapper("PHP_FNV132Update");

var _PHP_FNV132Final = Module["_PHP_FNV132Final"] = createExportWrapper("PHP_FNV132Final");

var _PHP_FNV1a32Update = Module["_PHP_FNV1a32Update"] = createExportWrapper("PHP_FNV1a32Update");

var _PHP_FNV164Init = Module["_PHP_FNV164Init"] = createExportWrapper("PHP_FNV164Init");

var _PHP_FNV164Update = Module["_PHP_FNV164Update"] = createExportWrapper("PHP_FNV164Update");

var _PHP_FNV164Final = Module["_PHP_FNV164Final"] = createExportWrapper("PHP_FNV164Final");

var _PHP_FNV1a64Update = Module["_PHP_FNV1a64Update"] = createExportWrapper("PHP_FNV1a64Update");

var _PHP_JOAATInit = Module["_PHP_JOAATInit"] = createExportWrapper("PHP_JOAATInit");

var _PHP_JOAATUpdate = Module["_PHP_JOAATUpdate"] = createExportWrapper("PHP_JOAATUpdate");

var _PHP_JOAATFinal = Module["_PHP_JOAATFinal"] = createExportWrapper("PHP_JOAATFinal");

var _PHP_SHA3224Init = Module["_PHP_SHA3224Init"] = createExportWrapper("PHP_SHA3224Init");

var _PHP_SHA3224Update = Module["_PHP_SHA3224Update"] = createExportWrapper("PHP_SHA3224Update");

var _PHP_SHA3256Init = Module["_PHP_SHA3256Init"] = createExportWrapper("PHP_SHA3256Init");

var _PHP_SHA3256Update = Module["_PHP_SHA3256Update"] = createExportWrapper("PHP_SHA3256Update");

var _PHP_SHA3384Init = Module["_PHP_SHA3384Init"] = createExportWrapper("PHP_SHA3384Init");

var _PHP_SHA3384Update = Module["_PHP_SHA3384Update"] = createExportWrapper("PHP_SHA3384Update");

var _PHP_SHA3512Init = Module["_PHP_SHA3512Init"] = createExportWrapper("PHP_SHA3512Init");

var _PHP_SHA3512Update = Module["_PHP_SHA3512Update"] = createExportWrapper("PHP_SHA3512Update");

var _PHP_MURMUR3AInit = Module["_PHP_MURMUR3AInit"] = createExportWrapper("PHP_MURMUR3AInit");

var _PHP_MURMUR3AUpdate = Module["_PHP_MURMUR3AUpdate"] = createExportWrapper("PHP_MURMUR3AUpdate");

var _PHP_MURMUR3AFinal = Module["_PHP_MURMUR3AFinal"] = createExportWrapper("PHP_MURMUR3AFinal");

var _PHP_MURMUR3ACopy = Module["_PHP_MURMUR3ACopy"] = createExportWrapper("PHP_MURMUR3ACopy");

var _PHP_MURMUR3CInit = Module["_PHP_MURMUR3CInit"] = createExportWrapper("PHP_MURMUR3CInit");

var _PHP_MURMUR3CUpdate = Module["_PHP_MURMUR3CUpdate"] = createExportWrapper("PHP_MURMUR3CUpdate");

var _PHP_MURMUR3CFinal = Module["_PHP_MURMUR3CFinal"] = createExportWrapper("PHP_MURMUR3CFinal");

var _PHP_MURMUR3CCopy = Module["_PHP_MURMUR3CCopy"] = createExportWrapper("PHP_MURMUR3CCopy");

var _PHP_MURMUR3FInit = Module["_PHP_MURMUR3FInit"] = createExportWrapper("PHP_MURMUR3FInit");

var _PHP_MURMUR3FUpdate = Module["_PHP_MURMUR3FUpdate"] = createExportWrapper("PHP_MURMUR3FUpdate");

var _PHP_MURMUR3FFinal = Module["_PHP_MURMUR3FFinal"] = createExportWrapper("PHP_MURMUR3FFinal");

var _PHP_MURMUR3FCopy = Module["_PHP_MURMUR3FCopy"] = createExportWrapper("PHP_MURMUR3FCopy");

var _PHP_XXH32Init = Module["_PHP_XXH32Init"] = createExportWrapper("PHP_XXH32Init");

var _PHP_XXH32Update = Module["_PHP_XXH32Update"] = createExportWrapper("PHP_XXH32Update");

var _PHP_XXH32Final = Module["_PHP_XXH32Final"] = createExportWrapper("PHP_XXH32Final");

var _PHP_XXH32Copy = Module["_PHP_XXH32Copy"] = createExportWrapper("PHP_XXH32Copy");

var _PHP_XXH64Init = Module["_PHP_XXH64Init"] = createExportWrapper("PHP_XXH64Init");

var _PHP_XXH64Update = Module["_PHP_XXH64Update"] = createExportWrapper("PHP_XXH64Update");

var _PHP_XXH64Final = Module["_PHP_XXH64Final"] = createExportWrapper("PHP_XXH64Final");

var _PHP_XXH64Copy = Module["_PHP_XXH64Copy"] = createExportWrapper("PHP_XXH64Copy");

var _PHP_XXH3_64_Init = Module["_PHP_XXH3_64_Init"] = createExportWrapper("PHP_XXH3_64_Init");

var _PHP_XXH3_64_Update = Module["_PHP_XXH3_64_Update"] = createExportWrapper("PHP_XXH3_64_Update");

var _PHP_XXH3_64_Final = Module["_PHP_XXH3_64_Final"] = createExportWrapper("PHP_XXH3_64_Final");

var _PHP_XXH3_64_Copy = Module["_PHP_XXH3_64_Copy"] = createExportWrapper("PHP_XXH3_64_Copy");

var _PHP_XXH3_128_Init = Module["_PHP_XXH3_128_Init"] = createExportWrapper("PHP_XXH3_128_Init");

var _PHP_XXH3_128_Update = Module["_PHP_XXH3_128_Update"] = createExportWrapper("PHP_XXH3_128_Update");

var _PHP_XXH3_128_Final = Module["_PHP_XXH3_128_Final"] = createExportWrapper("PHP_XXH3_128_Final");

var _PHP_XXH3_128_Copy = Module["_PHP_XXH3_128_Copy"] = createExportWrapper("PHP_XXH3_128_Copy");

var _php_output_handler_alias_register = Module["_php_output_handler_alias_register"] = createExportWrapper("php_output_handler_alias_register");

var _php_output_handler_conflict_register = Module["_php_output_handler_conflict_register"] = createExportWrapper("php_output_handler_conflict_register");

var _zend_get_constant_str = Module["_zend_get_constant_str"] = createExportWrapper("zend_get_constant_str");

var _php_stream_filter_register_factory = Module["_php_stream_filter_register_factory"] = createExportWrapper("php_stream_filter_register_factory");

var _php_output_handler_create_internal = Module["_php_output_handler_create_internal"] = createExportWrapper("php_output_handler_create_internal");

var _php_output_get_level = Module["_php_output_get_level"] = createExportWrapper("php_output_get_level");

var _php_output_handler_conflict = Module["_php_output_handler_conflict"] = createExportWrapper("php_output_handler_conflict");

var _php_stream_filter_unregister_factory = Module["_php_stream_filter_unregister_factory"] = createExportWrapper("php_stream_filter_unregister_factory");

var _php_iconv_string = Module["_php_iconv_string"] = createExportWrapper("php_iconv_string");

var _libiconv_open = Module["_libiconv_open"] = createExportWrapper("libiconv_open");

var _libiconv = Module["_libiconv"] = createExportWrapper("libiconv");

var _libiconv_close = Module["_libiconv_close"] = createExportWrapper("libiconv_close");

var _php_get_internal_encoding = Module["_php_get_internal_encoding"] = createExportWrapper("php_get_internal_encoding");

var _php_base64_encode = Module["_php_base64_encode"] = createExportWrapper("php_base64_encode");

var _php_quot_print_decode = Module["_php_quot_print_decode"] = createExportWrapper("php_quot_print_decode");

var _add_next_index_stringl = Module["_add_next_index_stringl"] = createExportWrapper("add_next_index_stringl");

var _add_assoc_stringl_ex = Module["_add_assoc_stringl_ex"] = createExportWrapper("add_assoc_stringl_ex");

var _php_get_input_encoding = Module["_php_get_input_encoding"] = createExportWrapper("php_get_input_encoding");

var _php_get_output_encoding = Module["_php_get_output_encoding"] = createExportWrapper("php_get_output_encoding");

var _php_output_get_status = Module["_php_output_get_status"] = createExportWrapper("php_output_get_status");

var _sapi_add_header_ex = Module["_sapi_add_header_ex"] = createExportWrapper("sapi_add_header_ex");

var _php_output_handler_hook = Module["_php_output_handler_hook"] = createExportWrapper("php_output_handler_hook");

var _php_base64_decode_ex = Module["_php_base64_decode_ex"] = createExportWrapper("php_base64_decode_ex");

var __emalloc_160 = Module["__emalloc_160"] = createExportWrapper("_emalloc_160");

var __php_stream_filter_alloc = Module["__php_stream_filter_alloc"] = createExportWrapper("_php_stream_filter_alloc");

var _php_stream_bucket_unlink = Module["_php_stream_bucket_unlink"] = createExportWrapper("php_stream_bucket_unlink");

var _php_stream_bucket_delref = Module["_php_stream_bucket_delref"] = createExportWrapper("php_stream_bucket_delref");

var _php_stream_bucket_new = Module["_php_stream_bucket_new"] = createExportWrapper("php_stream_bucket_new");

var _php_stream_bucket_append = Module["_php_stream_bucket_append"] = createExportWrapper("php_stream_bucket_append");

var _php_json_encode_string = Module["_php_json_encode_string"] = createExportWrapper("php_json_encode_string");

var _php_json_encode_ex = Module["_php_json_encode_ex"] = createExportWrapper("php_json_encode_ex");

var _php_json_encode = Module["_php_json_encode"] = createExportWrapper("php_json_encode");

var _php_json_decode_ex = Module["_php_json_decode_ex"] = createExportWrapper("php_json_decode_ex");

var _php_json_parser_init = Module["_php_json_parser_init"] = createExportWrapper("php_json_parser_init");

var _php_json_parser_error_code = Module["_php_json_parser_error_code"] = createExportWrapper("php_json_parser_error_code");

var _php_next_utf8_char = Module["_php_next_utf8_char"] = createExportWrapper("php_next_utf8_char");

var ___extenddftf2 = Module["___extenddftf2"] = createExportWrapper("__extenddftf2");

var ___fpclassifyl = Module["___fpclassifyl"] = createExportWrapper("__fpclassifyl");

var _zend_gcvt = Module["_zend_gcvt"] = createExportWrapper("zend_gcvt");

var _zend_get_properties_for = Module["_zend_get_properties_for"] = createExportWrapper("zend_get_properties_for");

var _object_init = Module["_object_init"] = createExportWrapper("object_init");

var _php_json_parser_init_ex = Module["_php_json_parser_init_ex"] = createExportWrapper("php_json_parser_init_ex");

var _php_json_parse = Module["_php_json_parse"] = createExportWrapper("php_json_parse");

var _zend_strtod = Module["_zend_strtod"] = createExportWrapper("zend_strtod");

var _mbstr_treat_data = Module["_mbstr_treat_data"] = createExportWrapper("mbstr_treat_data");

var _sapi_register_treat_data = Module["_sapi_register_treat_data"] = createExportWrapper("sapi_register_treat_data");

var _sapi_register_post_entries = Module["_sapi_register_post_entries"] = createExportWrapper("sapi_register_post_entries");

var _zend_multibyte_set_functions = Module["_zend_multibyte_set_functions"] = createExportWrapper("zend_multibyte_set_functions");

var _php_rfc1867_set_multibyte_callbacks = Module["_php_rfc1867_set_multibyte_callbacks"] = createExportWrapper("php_rfc1867_set_multibyte_callbacks");

var _zend_multibyte_restore_functions = Module["_zend_multibyte_restore_functions"] = createExportWrapper("zend_multibyte_restore_functions");

var _zend_multibyte_set_internal_encoding = Module["_zend_multibyte_set_internal_encoding"] = createExportWrapper("zend_multibyte_set_internal_encoding");

var _mbfl_buffer_illegalchars = Module["_mbfl_buffer_illegalchars"] = createExportWrapper("mbfl_buffer_illegalchars");

var _mbfl_buffer_converter_delete = Module["_mbfl_buffer_converter_delete"] = createExportWrapper("mbfl_buffer_converter_delete");

var _php_mb_mbchar_bytes = Module["_php_mb_mbchar_bytes"] = createExportWrapper("php_mb_mbchar_bytes");

var _php_mb_safe_strrchr = Module["_php_mb_safe_strrchr"] = createExportWrapper("php_mb_safe_strrchr");

var _mbfl_no2encoding = Module["_mbfl_no2encoding"] = createExportWrapper("mbfl_no2encoding");

var _mbfl_no_language2name = Module["_mbfl_no_language2name"] = createExportWrapper("mbfl_no_language2name");

var _mbfl_name2encoding = Module["_mbfl_name2encoding"] = createExportWrapper("mbfl_name2encoding");

var _mbfl_memory_device_init = Module["_mbfl_memory_device_init"] = createExportWrapper("mbfl_memory_device_init");

var _mbfl_memory_device_strcat = Module["_mbfl_memory_device_strcat"] = createExportWrapper("mbfl_memory_device_strcat");

var _mbfl_memory_device_output = Module["_mbfl_memory_device_output"] = createExportWrapper("mbfl_memory_device_output");

var _mbfl_memory_device_unput = Module["_mbfl_memory_device_unput"] = createExportWrapper("mbfl_memory_device_unput");

var _mbfl_memory_device_result = Module["_mbfl_memory_device_result"] = createExportWrapper("mbfl_memory_device_result");

var _mbfl_string_clear = Module["_mbfl_string_clear"] = createExportWrapper("mbfl_string_clear");

var ___zend_calloc = Module["___zend_calloc"] = createExportWrapper("__zend_calloc");

var _mbfl_name2no_encoding = Module["_mbfl_name2no_encoding"] = createExportWrapper("mbfl_name2no_encoding");

var _mbfl_no2preferred_mime_name = Module["_mbfl_no2preferred_mime_name"] = createExportWrapper("mbfl_no2preferred_mime_name");

var _mbfl_buffer_converter_new = Module["_mbfl_buffer_converter_new"] = createExportWrapper("mbfl_buffer_converter_new");

var _mbfl_buffer_converter_illegal_mode = Module["_mbfl_buffer_converter_illegal_mode"] = createExportWrapper("mbfl_buffer_converter_illegal_mode");

var _mbfl_buffer_converter_illegal_substchar = Module["_mbfl_buffer_converter_illegal_substchar"] = createExportWrapper("mbfl_buffer_converter_illegal_substchar");

var _mbfl_string_init = Module["_mbfl_string_init"] = createExportWrapper("mbfl_string_init");

var _mbfl_buffer_converter_feed = Module["_mbfl_buffer_converter_feed"] = createExportWrapper("mbfl_buffer_converter_feed");

var _mbfl_buffer_converter_flush = Module["_mbfl_buffer_converter_flush"] = createExportWrapper("mbfl_buffer_converter_flush");

var _mbfl_buffer_converter_result = Module["_mbfl_buffer_converter_result"] = createExportWrapper("mbfl_buffer_converter_result");

var _mbfl_convert_filter_new = Module["_mbfl_convert_filter_new"] = createExportWrapper("mbfl_convert_filter_new");

var _mbfl_convert_filter_delete = Module["_mbfl_convert_filter_delete"] = createExportWrapper("mbfl_convert_filter_delete");

var _mbfl_memory_device_clear = Module["_mbfl_memory_device_clear"] = createExportWrapper("mbfl_memory_device_clear");

var _mbfl_convert_filter_flush = Module["_mbfl_convert_filter_flush"] = createExportWrapper("mbfl_convert_filter_flush");

var _mbfl_strpos = Module["_mbfl_strpos"] = createExportWrapper("mbfl_strpos");

var _php_mb_stripos = Module["_php_mb_stripos"] = createExportWrapper("php_mb_stripos");

var _mbfl_string_init_set = Module["_mbfl_string_init_set"] = createExportWrapper("mbfl_string_init_set");

var _mbfl_substr = Module["_mbfl_substr"] = createExportWrapper("mbfl_substr");

var _mbfl_substr_count = Module["_mbfl_substr_count"] = createExportWrapper("mbfl_substr_count");

var _mbfl_strlen = Module["_mbfl_strlen"] = createExportWrapper("mbfl_strlen");

var _mbfl_strcut = Module["_mbfl_strcut"] = createExportWrapper("mbfl_strcut");

var _php_mb_convert_encoding_ex = Module["_php_mb_convert_encoding_ex"] = createExportWrapper("php_mb_convert_encoding_ex");

var _mb_fast_convert = Module["_mb_fast_convert"] = createExportWrapper("mb_fast_convert");

var _php_mb_convert_encoding = Module["_php_mb_convert_encoding"] = createExportWrapper("php_mb_convert_encoding");

var _mbfl_identify_encoding = Module["_mbfl_identify_encoding"] = createExportWrapper("mbfl_identify_encoding");

var _php_mb_convert_encoding_recursive = Module["_php_mb_convert_encoding_recursive"] = createExportWrapper("php_mb_convert_encoding_recursive");

var _zend_hash_index_add = Module["_zend_hash_index_add"] = createExportWrapper("zend_hash_index_add");

var _php_unicode_convert_case = Module["_php_unicode_convert_case"] = createExportWrapper("php_unicode_convert_case");

var _php_mb_check_encoding = Module["_php_mb_check_encoding"] = createExportWrapper("php_mb_check_encoding");

var _mbfl_get_supported_encodings = Module["_mbfl_get_supported_encodings"] = createExportWrapper("mbfl_get_supported_encodings");

var _mbfl_no2language = Module["_mbfl_no2language"] = createExportWrapper("mbfl_no2language");

var _mbfl_mime_header_encode = Module["_mbfl_mime_header_encode"] = createExportWrapper("mbfl_mime_header_encode");

var _mbfl_mime_header_decode = Module["_mbfl_mime_header_decode"] = createExportWrapper("mbfl_mime_header_decode");

var _mbfl_encoding_detector_new = Module["_mbfl_encoding_detector_new"] = createExportWrapper("mbfl_encoding_detector_new");

var _mbfl_encoding_detector_judge = Module["_mbfl_encoding_detector_judge"] = createExportWrapper("mbfl_encoding_detector_judge");

var _mbfl_encoding_detector_delete = Module["_mbfl_encoding_detector_delete"] = createExportWrapper("mbfl_encoding_detector_delete");

var _mbfl_encoding_detector_feed = Module["_mbfl_encoding_detector_feed"] = createExportWrapper("mbfl_encoding_detector_feed");

var _mbfl_buffer_converter_feed_result = Module["_mbfl_buffer_converter_feed_result"] = createExportWrapper("mbfl_buffer_converter_feed_result");

var _zend_ini_string_ex = Module["_zend_ini_string_ex"] = createExportWrapper("zend_ini_string_ex");

var _php_trim = Module["_php_trim"] = createExportWrapper("php_trim");

var _php_mail_build_headers = Module["_php_mail_build_headers"] = createExportWrapper("php_mail_build_headers");

var _strtok_r = Module["_strtok_r"] = createExportWrapper("strtok_r");

var _mbfl_convert_encoding = Module["_mbfl_convert_encoding"] = createExportWrapper("mbfl_convert_encoding");

var _mbfl_memory_device_strncat = Module["_mbfl_memory_device_strncat"] = createExportWrapper("mbfl_memory_device_strncat");

var _mbfl_encoding_preferred_mime_name = Module["_mbfl_encoding_preferred_mime_name"] = createExportWrapper("mbfl_encoding_preferred_mime_name");

var _php_escape_shell_cmd = Module["_php_escape_shell_cmd"] = createExportWrapper("php_escape_shell_cmd");

var _php_mail = Module["_php_mail"] = createExportWrapper("php_mail");

var _zend_str_tolower = Module["_zend_str_tolower"] = createExportWrapper("zend_str_tolower");

var _zend_ini_string = Module["_zend_ini_string"] = createExportWrapper("zend_ini_string");

var _mbfl_no_encoding2name = Module["_mbfl_no_encoding2name"] = createExportWrapper("mbfl_no_encoding2name");

var _mbfl_name2no_language = Module["_mbfl_name2no_language"] = createExportWrapper("mbfl_name2no_language");

var _sapi_unregister_post_entry = Module["_sapi_unregister_post_entry"] = createExportWrapper("sapi_unregister_post_entry");

var _sapi_read_standard_form_data = Module["_sapi_read_standard_form_data"] = createExportWrapper("sapi_read_standard_form_data");

var _rfc1867_post_handler = Module["_rfc1867_post_handler"] = createExportWrapper("rfc1867_post_handler");

var _php_std_post_handler = Module["_php_std_post_handler"] = createExportWrapper("php_std_post_handler");

var _php_unicode_is_prop1 = Module["_php_unicode_is_prop1"] = createExportWrapper("php_unicode_is_prop1");

var _php_unicode_is_prop = Module["_php_unicode_is_prop"] = createExportWrapper("php_unicode_is_prop");

var _php_default_treat_data = Module["_php_default_treat_data"] = createExportWrapper("php_default_treat_data");

var _sapi_handle_post = Module["_sapi_handle_post"] = createExportWrapper("sapi_handle_post");

var _php_url_decode = Module["_php_url_decode"] = createExportWrapper("php_url_decode");

var _php_register_variable_safe = Module["_php_register_variable_safe"] = createExportWrapper("php_register_variable_safe");

var __php_stream_seek = Module["__php_stream_seek"] = createExportWrapper("_php_stream_seek");

var _mbfl_filt_conv_illegal_output = Module["_mbfl_filt_conv_illegal_output"] = createExportWrapper("mbfl_filt_conv_illegal_output");

var _mb_illegal_output = Module["_mb_illegal_output"] = createExportWrapper("mb_illegal_output");

var _mbfl_filt_conv_common_ctor = Module["_mbfl_filt_conv_common_ctor"] = createExportWrapper("mbfl_filt_conv_common_ctor");

var _mbfl_filt_conv_common_flush = Module["_mbfl_filt_conv_common_flush"] = createExportWrapper("mbfl_filt_conv_common_flush");

var _mbfl_convert_filter_get_vtbl = Module["_mbfl_convert_filter_get_vtbl"] = createExportWrapper("mbfl_convert_filter_get_vtbl");

var _mbfl_memory_device_realloc = Module["_mbfl_memory_device_realloc"] = createExportWrapper("mbfl_memory_device_realloc");

var _zend_memnstr_ex = Module["_zend_memnstr_ex"] = createExportWrapper("zend_memnstr_ex");

var _memrchr = Module["_memrchr"] = createExportWrapper("memrchr");

var _zend_memnrstr_ex = Module["_zend_memnrstr_ex"] = createExportWrapper("zend_memnrstr_ex");

var _mbfl_wchar_device_init = Module["_mbfl_wchar_device_init"] = createExportWrapper("mbfl_wchar_device_init");

var _mbfl_wchar_device_output = Module["_mbfl_wchar_device_output"] = createExportWrapper("mbfl_wchar_device_output");

var _mbfl_convert_filter_feed_string = Module["_mbfl_convert_filter_feed_string"] = createExportWrapper("mbfl_convert_filter_feed_string");

var _mbfl_wchar_device_clear = Module["_mbfl_wchar_device_clear"] = createExportWrapper("mbfl_wchar_device_clear");

var _mbfl_filter_output_null = Module["_mbfl_filter_output_null"] = createExportWrapper("mbfl_filter_output_null");

var _mbfl_convert_filter_copy = Module["_mbfl_convert_filter_copy"] = createExportWrapper("mbfl_convert_filter_copy");

var _mime_header_encoder_result = Module["_mime_header_encoder_result"] = createExportWrapper("mime_header_encoder_result");

var _mbfl_memory_device_devcat = Module["_mbfl_memory_device_devcat"] = createExportWrapper("mbfl_memory_device_devcat");

var _mbfl_memory_device_reset = Module["_mbfl_memory_device_reset"] = createExportWrapper("mbfl_memory_device_reset");

var _mime_header_encoder_new = Module["_mime_header_encoder_new"] = createExportWrapper("mime_header_encoder_new");

var __emalloc_256 = Module["__emalloc_256"] = createExportWrapper("_emalloc_256");

var _mbfl_filter_output_pipe = Module["_mbfl_filter_output_pipe"] = createExportWrapper("mbfl_filter_output_pipe");

var _mime_header_encoder_delete = Module["_mime_header_encoder_delete"] = createExportWrapper("mime_header_encoder_delete");

var _mbfl_convert_filter_devcat = Module["_mbfl_convert_filter_devcat"] = createExportWrapper("mbfl_convert_filter_devcat");

var _mime_header_decoder_result = Module["_mime_header_decoder_result"] = createExportWrapper("mime_header_decoder_result");

var _mime_header_decoder_new = Module["_mime_header_decoder_new"] = createExportWrapper("mime_header_decoder_new");

var __emalloc_64 = Module["__emalloc_64"] = createExportWrapper("_emalloc_64");

var _mime_header_decoder_delete = Module["_mime_header_decoder_delete"] = createExportWrapper("mime_header_decoder_delete");

var _mbfl_convert_filter_reset = Module["_mbfl_convert_filter_reset"] = createExportWrapper("mbfl_convert_filter_reset");

var _mbfl_filt_conv_pass = Module["_mbfl_filt_conv_pass"] = createExportWrapper("mbfl_filt_conv_pass");

var _mbfl_convert_filter_new2 = Module["_mbfl_convert_filter_new2"] = createExportWrapper("mbfl_convert_filter_new2");

var _mbfl_convert_filter_feed = Module["_mbfl_convert_filter_feed"] = createExportWrapper("mbfl_convert_filter_feed");

var _mbfl_convert_filter_strcat = Module["_mbfl_convert_filter_strcat"] = createExportWrapper("mbfl_convert_filter_strcat");

var _mbfl_name2language = Module["_mbfl_name2language"] = createExportWrapper("mbfl_name2language");

var _php_pdo_get_dbh_ce = Module["_php_pdo_get_dbh_ce"] = createExportWrapper("php_pdo_get_dbh_ce");

var _php_pdo_get_exception = Module["_php_pdo_get_exception"] = createExportWrapper("php_pdo_get_exception");

var _zend_register_list_destructors_ex = Module["_zend_register_list_destructors_ex"] = createExportWrapper("zend_register_list_destructors_ex");

var _php_pdo_register_driver = Module["_php_pdo_register_driver"] = createExportWrapper("php_pdo_register_driver");

var _php_pdo_unregister_driver = Module["_php_pdo_unregister_driver"] = createExportWrapper("php_pdo_unregister_driver");

var _zend_hash_str_del = Module["_zend_hash_str_del"] = createExportWrapper("zend_hash_str_del");

var _php_pdo_parse_data_source = Module["_php_pdo_parse_data_source"] = createExportWrapper("php_pdo_parse_data_source");

var _pdo_throw_exception = Module["_pdo_throw_exception"] = createExportWrapper("pdo_throw_exception");

var _zend_update_property_long = Module["_zend_update_property_long"] = createExportWrapper("zend_update_property_long");

var _zend_update_property_string = Module["_zend_update_property_string"] = createExportWrapper("zend_update_property_string");

var _zend_throw_exception_object = Module["_zend_throw_exception_object"] = createExportWrapper("zend_throw_exception_object");

var _pdo_raise_impl_error = Module["_pdo_raise_impl_error"] = createExportWrapper("pdo_raise_impl_error");

var _pdo_handle_error = Module["_pdo_handle_error"] = createExportWrapper("pdo_handle_error");

var _zend_update_property_str = Module["_zend_update_property_str"] = createExportWrapper("zend_update_property_str");

var _cfg_get_string = Module["_cfg_get_string"] = createExportWrapper("cfg_get_string");

var _zend_list_close = Module["_zend_list_close"] = createExportWrapper("zend_list_close");

var ___zend_strdup = Module["___zend_strdup"] = createExportWrapper("__zend_strdup");

var _zend_register_persistent_resource = Module["_zend_register_persistent_resource"] = createExportWrapper("zend_register_persistent_resource");

var __php_stream_get_line = Module["__php_stream_get_line"] = createExportWrapper("_php_stream_get_line");

var _pdo_get_long_param = Module["_pdo_get_long_param"] = createExportWrapper("pdo_get_long_param");

var _pdo_get_bool_param = Module["_pdo_get_bool_param"] = createExportWrapper("pdo_get_bool_param");

var _strlcpy = Module["_strlcpy"] = createExportWrapper("strlcpy");

var _zend_fcall_info_args = Module["_zend_fcall_info_args"] = createExportWrapper("zend_fcall_info_args");

var _is_numeric_str_function = Module["_is_numeric_str_function"] = createExportWrapper("is_numeric_str_function");

var _zend_internal_run_time_cache_reserved_size = Module["_zend_internal_run_time_cache_reserved_size"] = createExportWrapper("zend_internal_run_time_cache_reserved_size");

var _zend_set_function_arg_flags = Module["_zend_set_function_arg_flags"] = createExportWrapper("zend_set_function_arg_flags");

var _zend_str_tolower_copy = Module["_zend_str_tolower_copy"] = createExportWrapper("zend_str_tolower_copy");

var _zend_objects_not_comparable = Module["_zend_objects_not_comparable"] = createExportWrapper("zend_objects_not_comparable");

var _zend_std_get_method = Module["_zend_std_get_method"] = createExportWrapper("zend_std_get_method");

var _php_pdo_stmt_set_column_count = Module["_php_pdo_stmt_set_column_count"] = createExportWrapper("php_pdo_stmt_set_column_count");

var _pdo_parse_params = Module["_pdo_parse_params"] = createExportWrapper("pdo_parse_params");

var _convert_to_boolean = Module["_convert_to_boolean"] = createExportWrapper("convert_to_boolean");

var _zend_update_property_ex = Module["_zend_update_property_ex"] = createExportWrapper("zend_update_property_ex");

var _zend_parse_arg_class = Module["_zend_parse_arg_class"] = createExportWrapper("zend_parse_arg_class");

var _convert_to_null = Module["_convert_to_null"] = createExportWrapper("convert_to_null");

var __php_stream_memory_open = Module["__php_stream_memory_open"] = createExportWrapper("_php_stream_memory_open");

var _zend_fetch_class = Module["_zend_fetch_class"] = createExportWrapper("zend_fetch_class");

var _zend_argument_count_error = Module["_zend_argument_count_error"] = createExportWrapper("zend_argument_count_error");

var _zend_fcall_info_args_ex = Module["_zend_fcall_info_args_ex"] = createExportWrapper("zend_fcall_info_args_ex");

var __php_stream_printf = Module["__php_stream_printf"] = createExportWrapper("_php_stream_printf");

var _php_pdo_free_statement = Module["_php_pdo_free_statement"] = createExportWrapper("php_pdo_free_statement");

var _zend_objects_store_del = Module["_zend_objects_store_del"] = createExportWrapper("zend_objects_store_del");

var _gc_possible_root = Module["_gc_possible_root"] = createExportWrapper("gc_possible_root");

var _zend_std_unset_property = Module["_zend_std_unset_property"] = createExportWrapper("zend_std_unset_property");

var _zend_std_cast_object_tostring = Module["_zend_std_cast_object_tostring"] = createExportWrapper("zend_std_cast_object_tostring");

var _zend_object_is_true = Module["_zend_object_is_true"] = createExportWrapper("zend_object_is_true");

var _strncpy = Module["_strncpy"] = createExportWrapper("strncpy");

var _zend_declare_class_constant_long = Module["_zend_declare_class_constant_long"] = createExportWrapper("zend_declare_class_constant_long");

var _sqlite3_snprintf = Module["_sqlite3_snprintf"] = createExportWrapper("sqlite3_snprintf");

var _zend_i64_to_str = Module["_zend_i64_to_str"] = createExportWrapper("zend_i64_to_str");

var _sqlite3_column_decltype = Module["_sqlite3_column_decltype"] = createExportWrapper("sqlite3_column_decltype");

var _php_random_status_alloc = Module["_php_random_status_alloc"] = createExportWrapper("php_random_status_alloc");

var _php_random_status_copy = Module["_php_random_status_copy"] = createExportWrapper("php_random_status_copy");

var _php_random_status_free = Module["_php_random_status_free"] = createExportWrapper("php_random_status_free");

var _php_random_engine_common_init = Module["_php_random_engine_common_init"] = createExportWrapper("php_random_engine_common_init");

var _php_random_engine_common_free_object = Module["_php_random_engine_common_free_object"] = createExportWrapper("php_random_engine_common_free_object");

var _php_random_engine_common_clone_object = Module["_php_random_engine_common_clone_object"] = createExportWrapper("php_random_engine_common_clone_object");

var _php_random_range = Module["_php_random_range"] = createExportWrapper("php_random_range");

var _php_random_default_algo = Module["_php_random_default_algo"] = createExportWrapper("php_random_default_algo");

var _php_random_default_status = Module["_php_random_default_status"] = createExportWrapper("php_random_default_status");

var _php_random_mt19937_seed_default = Module["_php_random_mt19937_seed_default"] = createExportWrapper("php_random_mt19937_seed_default");

var _php_random_bin2hex_le = Module["_php_random_bin2hex_le"] = createExportWrapper("php_random_bin2hex_le");

var _php_random_hex2bin_le = Module["_php_random_hex2bin_le"] = createExportWrapper("php_random_hex2bin_le");

var _php_combined_lcg = Module["_php_combined_lcg"] = createExportWrapper("php_combined_lcg");

var _php_random_combinedlcg_seed_default = Module["_php_random_combinedlcg_seed_default"] = createExportWrapper("php_random_combinedlcg_seed_default");

var _php_mt_srand = Module["_php_mt_srand"] = createExportWrapper("php_mt_srand");

var _php_mt_rand = Module["_php_mt_rand"] = createExportWrapper("php_mt_rand");

var _php_mt_rand_range = Module["_php_mt_rand_range"] = createExportWrapper("php_mt_rand_range");

var _php_mt_rand_common = Module["_php_mt_rand_common"] = createExportWrapper("php_mt_rand_common");

var _php_srand = Module["_php_srand"] = createExportWrapper("php_srand");

var _php_rand = Module["_php_rand"] = createExportWrapper("php_rand");

var _php_random_bytes = Module["_php_random_bytes"] = createExportWrapper("php_random_bytes");

var _open = Module["_open"] = createExportWrapper("open");

var _strerror = Module["_strerror"] = createExportWrapper("strerror");

var _fstat = Module["_fstat"] = createExportWrapper("fstat");

var _close = Module["_close"] = createExportWrapper("close");

var _read = Module["_read"] = createExportWrapper("read");

var _php_random_int = Module["_php_random_int"] = createExportWrapper("php_random_int");

var _getpid = Module["_getpid"] = createExportWrapper("getpid");

var _php_random_pcgoneseq128xslrr64_advance = Module["_php_random_pcgoneseq128xslrr64_advance"] = createExportWrapper("php_random_pcgoneseq128xslrr64_advance");

var ___multi3 = Module["___multi3"] = createExportWrapper("__multi3");

var _php_random_xoshiro256starstar_jump = Module["_php_random_xoshiro256starstar_jump"] = createExportWrapper("php_random_xoshiro256starstar_jump");

var _php_random_xoshiro256starstar_jump_long = Module["_php_random_xoshiro256starstar_jump_long"] = createExportWrapper("php_random_xoshiro256starstar_jump_long");

var _zend_call_known_function = Module["_zend_call_known_function"] = createExportWrapper("zend_call_known_function");

var _php_array_data_shuffle = Module["_php_array_data_shuffle"] = createExportWrapper("php_array_data_shuffle");

var _php_binary_string_shuffle = Module["_php_binary_string_shuffle"] = createExportWrapper("php_binary_string_shuffle");

var _php_array_pick_keys = Module["_php_array_pick_keys"] = createExportWrapper("php_array_pick_keys");

var _zend_read_property = Module["_zend_read_property"] = createExportWrapper("zend_read_property");

var _zend_reflection_class_factory = Module["_zend_reflection_class_factory"] = createExportWrapper("zend_reflection_class_factory");

var _zend_get_closure_method_def = Module["_zend_get_closure_method_def"] = createExportWrapper("zend_get_closure_method_def");

var _zend_fetch_function = Module["_zend_fetch_function"] = createExportWrapper("zend_fetch_function");

var _smart_str_append_printf = Module["_smart_str_append_printf"] = createExportWrapper("smart_str_append_printf");

var _zend_type_to_string = Module["_zend_type_to_string"] = createExportWrapper("zend_type_to_string");

var _zend_get_closure_this_ptr = Module["_zend_get_closure_this_ptr"] = createExportWrapper("zend_get_closure_this_ptr");

var _zend_create_fake_closure = Module["_zend_create_fake_closure"] = createExportWrapper("zend_create_fake_closure");

var _zval_update_constant_ex = Module["_zval_update_constant_ex"] = createExportWrapper("zval_update_constant_ex");

var _zval_add_ref = Module["_zval_add_ref"] = createExportWrapper("zval_add_ref");

var __efree_32 = Module["__efree_32"] = createExportWrapper("_efree_32");

var _zend_generator_update_root = Module["_zend_generator_update_root"] = createExportWrapper("zend_generator_update_root");

var _zend_generator_update_current = Module["_zend_generator_update_current"] = createExportWrapper("zend_generator_update_current");

var _zend_fetch_debug_backtrace = Module["_zend_fetch_debug_backtrace"] = createExportWrapper("zend_fetch_debug_backtrace");

var _zend_get_closure_invoke_method = Module["_zend_get_closure_invoke_method"] = createExportWrapper("zend_get_closure_invoke_method");

var _zend_get_default_from_internal_arg_info = Module["_zend_get_default_from_internal_arg_info"] = createExportWrapper("zend_get_default_from_internal_arg_info");

var _zend_separate_class_constants_table = Module["_zend_separate_class_constants_table"] = createExportWrapper("zend_separate_class_constants_table");

var _zval_copy_ctor_func = Module["_zval_copy_ctor_func"] = createExportWrapper("zval_copy_ctor_func");

var _zend_update_class_constants = Module["_zend_update_class_constants"] = createExportWrapper("zend_update_class_constants");

var _zend_class_init_statics = Module["_zend_class_init_statics"] = createExportWrapper("zend_class_init_statics");

var _zend_std_get_static_property = Module["_zend_std_get_static_property"] = createExportWrapper("zend_std_get_static_property");

var _zend_std_get_static_property_with_info = Module["_zend_std_get_static_property_with_info"] = createExportWrapper("zend_std_get_static_property_with_info");

var _zend_clear_exception = Module["_zend_clear_exception"] = createExportWrapper("zend_clear_exception");

var _zend_verify_ref_assignable_zval = Module["_zend_verify_ref_assignable_zval"] = createExportWrapper("zend_verify_ref_assignable_zval");

var _zend_fetch_class_by_name = Module["_zend_fetch_class_by_name"] = createExportWrapper("zend_fetch_class_by_name");

var _zend_read_static_property_ex = Module["_zend_read_static_property_ex"] = createExportWrapper("zend_read_static_property_ex");

var _zend_read_property_ex = Module["_zend_read_property_ex"] = createExportWrapper("zend_read_property_ex");

var _zend_update_static_property_ex = Module["_zend_update_static_property_ex"] = createExportWrapper("zend_update_static_property_ex");

var _php_info_print_module = Module["_php_info_print_module"] = createExportWrapper("php_info_print_module");

var _zend_get_extension = Module["_zend_get_extension"] = createExportWrapper("zend_get_extension");

var _smart_str_append_scalar = Module["_smart_str_append_scalar"] = createExportWrapper("smart_str_append_scalar");

var _smart_str_append_escaped = Module["_smart_str_append_escaped"] = createExportWrapper("smart_str_append_escaped");

var _zend_ast_export = Module["_zend_ast_export"] = createExportWrapper("zend_ast_export");

var _zend_is_attribute_repeated = Module["_zend_is_attribute_repeated"] = createExportWrapper("zend_is_attribute_repeated");

var _zend_get_attribute_value = Module["_zend_get_attribute_value"] = createExportWrapper("zend_get_attribute_value");

var _zend_get_attribute_str = Module["_zend_get_attribute_str"] = createExportWrapper("zend_get_attribute_str");

var _zend_get_attribute_target_names = Module["_zend_get_attribute_target_names"] = createExportWrapper("zend_get_attribute_target_names");

var _zend_vm_stack_extend = Module["_zend_vm_stack_extend"] = createExportWrapper("zend_vm_stack_extend");

var _zend_lookup_class_ex = Module["_zend_lookup_class_ex"] = createExportWrapper("zend_lookup_class_ex");

var _testSetjmp = Module["_testSetjmp"] = createExportWrapper("testSetjmp");

var setTempRet0 = createExportWrapper("setTempRet0");

var getTempRet0 = createExportWrapper("getTempRet0");

var _saveSetjmp = Module["_saveSetjmp"] = createExportWrapper("saveSetjmp");

var __zend_bailout = Module["__zend_bailout"] = createExportWrapper("_zend_bailout");

var _emscripten_longjmp = Module["_emscripten_longjmp"] = createExportWrapper("emscripten_longjmp");

var _php_session_destroy = Module["_php_session_destroy"] = createExportWrapper("php_session_destroy");

var _php_add_session_var = Module["_php_add_session_var"] = createExportWrapper("php_add_session_var");

var _php_set_session_var = Module["_php_set_session_var"] = createExportWrapper("php_set_session_var");

var _php_get_session_var = Module["_php_get_session_var"] = createExportWrapper("php_get_session_var");

var _php_session_create_id = Module["_php_session_create_id"] = createExportWrapper("php_session_create_id");

var _php_session_valid_key = Module["_php_session_valid_key"] = createExportWrapper("php_session_valid_key");

var _php_var_serialize_init = Module["_php_var_serialize_init"] = createExportWrapper("php_var_serialize_init");

var _php_var_serialize = Module["_php_var_serialize"] = createExportWrapper("php_var_serialize");

var _php_var_serialize_destroy = Module["_php_var_serialize_destroy"] = createExportWrapper("php_var_serialize_destroy");

var _php_var_unserialize_init = Module["_php_var_unserialize_init"] = createExportWrapper("php_var_unserialize_init");

var _php_var_unserialize = Module["_php_var_unserialize"] = createExportWrapper("php_var_unserialize");

var _php_var_unserialize_destroy = Module["_php_var_unserialize_destroy"] = createExportWrapper("php_var_unserialize_destroy");

var _zend_hash_update_ind = Module["_zend_hash_update_ind"] = createExportWrapper("zend_hash_update_ind");

var _var_tmp_var = Module["_var_tmp_var"] = createExportWrapper("var_tmp_var");

var _php_session_register_serializer = Module["_php_session_register_serializer"] = createExportWrapper("php_session_register_serializer");

var _php_session_register_module = Module["_php_session_register_module"] = createExportWrapper("php_session_register_module");

var _php_session_validate_sid = Module["_php_session_validate_sid"] = createExportWrapper("php_session_validate_sid");

var _php_session_update_timestamp = Module["_php_session_update_timestamp"] = createExportWrapper("php_session_update_timestamp");

var __php_find_ps_module = Module["__php_find_ps_module"] = createExportWrapper("_php_find_ps_module");

var __php_find_ps_serializer = Module["__php_find_ps_serializer"] = createExportWrapper("_php_find_ps_serializer");

var _php_session_reset_id = Module["_php_session_reset_id"] = createExportWrapper("php_session_reset_id");

var _zend_register_stringl_constant = Module["_zend_register_stringl_constant"] = createExportWrapper("zend_register_stringl_constant");

var _php_url_scanner_reset_session_var = Module["_php_url_scanner_reset_session_var"] = createExportWrapper("php_url_scanner_reset_session_var");

var _php_url_scanner_add_session_var = Module["_php_url_scanner_add_session_var"] = createExportWrapper("php_url_scanner_add_session_var");

var _php_output_get_start_filename = Module["_php_output_get_start_filename"] = createExportWrapper("php_output_get_start_filename");

var _php_output_get_start_lineno = Module["_php_output_get_start_lineno"] = createExportWrapper("php_output_get_start_lineno");

var _php_url_encode = Module["_php_url_encode"] = createExportWrapper("php_url_encode");

var _php_session_start = Module["_php_session_start"] = createExportWrapper("php_session_start");

var _php_session_flush = Module["_php_session_flush"] = createExportWrapper("php_session_flush");

var _session_adapt_url = Module["_session_adapt_url"] = createExportWrapper("session_adapt_url");

var _php_url_scanner_adapt_single_url = Module["_php_url_scanner_adapt_single_url"] = createExportWrapper("php_url_scanner_adapt_single_url");

var _zend_alter_ini_entry_chars = Module["_zend_alter_ini_entry_chars"] = createExportWrapper("zend_alter_ini_entry_chars");

var _register_user_shutdown_function = Module["_register_user_shutdown_function"] = createExportWrapper("register_user_shutdown_function");

var _remove_user_shutdown_function = Module["_remove_user_shutdown_function"] = createExportWrapper("remove_user_shutdown_function");

var _zend_wrong_param_count = Module["_zend_wrong_param_count"] = createExportWrapper("zend_wrong_param_count");

var _zend_get_callable_name = Module["_zend_get_callable_name"] = createExportWrapper("zend_get_callable_name");

var _zend_hash_clean = Module["_zend_hash_clean"] = createExportWrapper("zend_hash_clean");

var _zend_alter_ini_entry_ex = Module["_zend_alter_ini_entry_ex"] = createExportWrapper("zend_alter_ini_entry_ex");

var _append_user_shutdown_function = Module["_append_user_shutdown_function"] = createExportWrapper("append_user_shutdown_function");

var _zend_register_auto_global = Module["_zend_register_auto_global"] = createExportWrapper("zend_register_auto_global");

var _sapi_free_header = Module["_sapi_free_header"] = createExportWrapper("sapi_free_header");

var _zend_delete_global_variable = Module["_zend_delete_global_variable"] = createExportWrapper("zend_delete_global_variable");

var _gmtime_r = Module["_gmtime_r"] = createExportWrapper("gmtime_r");

var _stat = Module["_stat"] = createExportWrapper("stat");

var _sapi_get_request_time = Module["_sapi_get_request_time"] = createExportWrapper("sapi_get_request_time");

var _OnUpdateStringUnempty = Module["_OnUpdateStringUnempty"] = createExportWrapper("OnUpdateStringUnempty");

var _atol = Module["_atol"] = createExportWrapper("atol");

var _OnUpdateLongGEZero = Module["_OnUpdateLongGEZero"] = createExportWrapper("OnUpdateLongGEZero");

var _OnUpdateReal = Module["_OnUpdateReal"] = createExportWrapper("OnUpdateReal");

var _php_get_temporary_directory = Module["_php_get_temporary_directory"] = createExportWrapper("php_get_temporary_directory");

var _lseek = Module["_lseek"] = createExportWrapper("lseek");

var _unlink = Module["_unlink"] = createExportWrapper("unlink");

var _access = Module["_access"] = createExportWrapper("access");

var _utime = Module["_utime"] = createExportWrapper("utime");

var _getuid = Module["_getuid"] = createExportWrapper("getuid");

var _geteuid = Module["_geteuid"] = createExportWrapper("geteuid");

var _flock = Module["_flock"] = createExportWrapper("flock");

var _fcntl = Module["_fcntl"] = createExportWrapper("fcntl");

var _ftruncate = Module["_ftruncate"] = createExportWrapper("ftruncate");

var _write = Module["_write"] = createExportWrapper("write");

var _opendir = Module["_opendir"] = createExportWrapper("opendir");

var _closedir = Module["_closedir"] = createExportWrapper("closedir");

var _readdir = Module["_readdir"] = createExportWrapper("readdir");

var _sxe_get_element_class_entry = Module["_sxe_get_element_class_entry"] = createExportWrapper("sxe_get_element_class_entry");

var _xmlXPathEval = Module["_xmlXPathEval"] = createExportWrapper("xmlXPathEval");

var _xmlSaveFile = Module["_xmlSaveFile"] = createExportWrapper("xmlSaveFile");

var _xmlDocDumpMemoryEnc = Module["_xmlDocDumpMemoryEnc"] = createExportWrapper("xmlDocDumpMemoryEnc");

var _xmlNewChild = Module["_xmlNewChild"] = createExportWrapper("xmlNewChild");

var _xmlNewNsProp = Module["_xmlNewNsProp"] = createExportWrapper("xmlNewNsProp");

var _php_sxe_rewind_iterator = Module["_php_sxe_rewind_iterator"] = createExportWrapper("php_sxe_rewind_iterator");

var _php_sxe_move_forward_iterator = Module["_php_sxe_move_forward_iterator"] = createExportWrapper("php_sxe_move_forward_iterator");

var _sxe_object_new = Module["_sxe_object_new"] = createExportWrapper("sxe_object_new");

var _xmlReadFile = Module["_xmlReadFile"] = createExportWrapper("xmlReadFile");

var _xmlReadMemory = Module["_xmlReadMemory"] = createExportWrapper("xmlReadMemory");

var __emalloc_80 = Module["__emalloc_80"] = createExportWrapper("_emalloc_80");

var _xmlStrcmp = Module["_xmlStrcmp"] = createExportWrapper("xmlStrcmp");

var _xmlCopyDoc = Module["_xmlCopyDoc"] = createExportWrapper("xmlCopyDoc");

var _zend_call_method = Module["_zend_call_method"] = createExportWrapper("zend_call_method");

var _convert_scalar_to_number = Module["_convert_scalar_to_number"] = createExportWrapper("convert_scalar_to_number");

var _xmlNewTextChild = Module["_xmlNewTextChild"] = createExportWrapper("xmlNewTextChild");

var _xmlEncodeEntitiesReentrant = Module["_xmlEncodeEntitiesReentrant"] = createExportWrapper("xmlEncodeEntitiesReentrant");

var _zend_stream_init_filename_ex = Module["_zend_stream_init_filename_ex"] = createExportWrapper("zend_stream_init_filename_ex");

var _php_stream_open_for_zend_ex = Module["_php_stream_open_for_zend_ex"] = createExportWrapper("php_stream_open_for_zend_ex");

var _zend_execute = Module["_zend_execute"] = createExportWrapper("zend_execute");

var _destroy_op_array = Module["_destroy_op_array"] = createExportWrapper("destroy_op_array");

var _zend_destroy_file_handle = Module["_zend_destroy_file_handle"] = createExportWrapper("zend_destroy_file_handle");

var _zend_hash_real_init_mixed = Module["_zend_hash_real_init_mixed"] = createExportWrapper("zend_hash_real_init_mixed");

var _zend_hash_rehash = Module["_zend_hash_rehash"] = createExportWrapper("zend_hash_rehash");

var _zend_hash_del_bucket = Module["_zend_hash_del_bucket"] = createExportWrapper("zend_hash_del_bucket");

var _add_next_index_object = Module["_add_next_index_object"] = createExportWrapper("add_next_index_object");

var _php_spl_object_hash = Module["_php_spl_object_hash"] = createExportWrapper("php_spl_object_hash");

var _zend_mangle_property_name = Module["_zend_mangle_property_name"] = createExportWrapper("zend_mangle_property_name");

var _zend_iterator_dtor = Module["_zend_iterator_dtor"] = createExportWrapper("zend_iterator_dtor");

var _zend_call_known_instance_method_with_2_params = Module["_zend_call_known_instance_method_with_2_params"] = createExportWrapper("zend_call_known_instance_method_with_2_params");

var _array_set_zval_key = Module["_array_set_zval_key"] = createExportWrapper("array_set_zval_key");

var _spl_iterator_apply = Module["_spl_iterator_apply"] = createExportWrapper("spl_iterator_apply");

var _zend_is_iterable = Module["_zend_is_iterable"] = createExportWrapper("zend_is_iterable");

var _zend_array_to_list = Module["_zend_array_to_list"] = createExportWrapper("zend_array_to_list");

var _zend_fcall_info_call = Module["_zend_fcall_info_call"] = createExportWrapper("zend_fcall_info_call");

var _zend_hash_iterator_del = Module["_zend_hash_iterator_del"] = createExportWrapper("zend_hash_iterator_del");

var _zend_hash_get_current_key_type_ex = Module["_zend_hash_get_current_key_type_ex"] = createExportWrapper("zend_hash_get_current_key_type_ex");

var _zend_hash_get_current_key_zval_ex = Module["_zend_hash_get_current_key_zval_ex"] = createExportWrapper("zend_hash_get_current_key_zval_ex");

var _zend_proptable_to_symtable = Module["_zend_proptable_to_symtable"] = createExportWrapper("zend_proptable_to_symtable");

var _zend_compare_symbol_tables = Module["_zend_compare_symbol_tables"] = createExportWrapper("zend_compare_symbol_tables");

var _zend_use_resource_as_offset = Module["_zend_use_resource_as_offset"] = createExportWrapper("zend_use_resource_as_offset");

var _zend_incompatible_double_to_long_error = Module["_zend_incompatible_double_to_long_error"] = createExportWrapper("zend_incompatible_double_to_long_error");

var _zend_hash_get_current_key_ex = Module["_zend_hash_get_current_key_ex"] = createExportWrapper("zend_hash_get_current_key_ex");

var _zend_ref_add_type_source = Module["_zend_ref_add_type_source"] = createExportWrapper("zend_ref_add_type_source");

var _zend_hash_get_current_pos = Module["_zend_hash_get_current_pos"] = createExportWrapper("zend_hash_get_current_pos");

var _zend_hash_iterator_add = Module["_zend_hash_iterator_add"] = createExportWrapper("zend_hash_iterator_add");

var _spl_filesystem_object_get_path = Module["_spl_filesystem_object_get_path"] = createExportWrapper("spl_filesystem_object_get_path");

var __php_glob_stream_get_path = Module["__php_glob_stream_get_path"] = createExportWrapper("_php_glob_stream_get_path");

var __php_stream_opendir = Module["__php_stream_opendir"] = createExportWrapper("_php_stream_opendir");

var __php_stream_readdir = Module["__php_stream_readdir"] = createExportWrapper("_php_stream_readdir");

var _php_basename = Module["_php_basename"] = createExportWrapper("php_basename");

var _php_stat = Module["_php_stat"] = createExportWrapper("php_stat");

var _expand_filepath_with_mode = Module["_expand_filepath_with_mode"] = createExportWrapper("expand_filepath_with_mode");

var _readlink = Module["_readlink"] = createExportWrapper("readlink");

var _php_dirname = Module["_php_dirname"] = createExportWrapper("php_dirname");

var __php_glob_stream_get_count = Module["__php_glob_stream_get_count"] = createExportWrapper("_php_glob_stream_get_count");

var __php_stream_eof = Module["__php_stream_eof"] = createExportWrapper("_php_stream_eof");

var _php_fgetcsv = Module["_php_fgetcsv"] = createExportWrapper("php_fgetcsv");

var _php_bc_fgetcsv_empty_line = Module["_php_bc_fgetcsv_empty_line"] = createExportWrapper("php_bc_fgetcsv_empty_line");

var _php_fputcsv = Module["_php_fputcsv"] = createExportWrapper("php_fputcsv");

var _php_flock_common = Module["_php_flock_common"] = createExportWrapper("php_flock_common");

var __php_stream_flush = Module["__php_stream_flush"] = createExportWrapper("_php_stream_flush");

var __php_stream_tell = Module["__php_stream_tell"] = createExportWrapper("_php_stream_tell");

var __php_stream_getc = Module["__php_stream_getc"] = createExportWrapper("_php_stream_getc");

var __php_stream_passthru = Module["__php_stream_passthru"] = createExportWrapper("_php_stream_passthru");

var _php_sscanf_internal = Module["_php_sscanf_internal"] = createExportWrapper("php_sscanf_internal");

var _php_stream_read_to_str = Module["_php_stream_read_to_str"] = createExportWrapper("php_stream_read_to_str");

var _php_fstat = Module["_php_fstat"] = createExportWrapper("php_fstat");

var __php_stream_set_option = Module["__php_stream_set_option"] = createExportWrapper("_php_stream_set_option");

var __php_stream_truncate_set_size = Module["__php_stream_truncate_set_size"] = createExportWrapper("_php_stream_truncate_set_size");

var _zend_objects_destroy_object = Module["_zend_objects_destroy_object"] = createExportWrapper("zend_objects_destroy_object");

var _zend_hash_index_lookup = Module["_zend_hash_index_lookup"] = createExportWrapper("zend_hash_index_lookup");

var _php_count_recursive = Module["_php_count_recursive"] = createExportWrapper("php_count_recursive");

var _var_push_dtor = Module["_var_push_dtor"] = createExportWrapper("var_push_dtor");

var _var_replace = Module["_var_replace"] = createExportWrapper("var_replace");

var _zend_is_identical = Module["_zend_is_identical"] = createExportWrapper("zend_is_identical");

var _zend_hash_compare = Module["_zend_hash_compare"] = createExportWrapper("zend_hash_compare");

var _zend_std_read_dimension = Module["_zend_std_read_dimension"] = createExportWrapper("zend_std_read_dimension");

var _zend_std_write_dimension = Module["_zend_std_write_dimension"] = createExportWrapper("zend_std_write_dimension");

var _zend_std_has_dimension = Module["_zend_std_has_dimension"] = createExportWrapper("zend_std_has_dimension");

var _zend_std_unset_dimension = Module["_zend_std_unset_dimension"] = createExportWrapper("zend_std_unset_dimension");

var _zend_compare = Module["_zend_compare"] = createExportWrapper("zend_compare");

var __safe_erealloc = Module["__safe_erealloc"] = createExportWrapper("_safe_erealloc");

var _zend_user_it_invalidate_current = Module["_zend_user_it_invalidate_current"] = createExportWrapper("zend_user_it_invalidate_current");

var _zend_hash_packed_to_hash = Module["_zend_hash_packed_to_hash"] = createExportWrapper("zend_hash_packed_to_hash");

var _strtoul = Module["_strtoul"] = createExportWrapper("strtoul");

var _strcspn = Module["_strcspn"] = createExportWrapper("strcspn");

var _realloc = Module["_realloc"] = createExportWrapper("realloc");

var _strcat = Module["_strcat"] = createExportWrapper("strcat");

var _zend_sort = Module["_zend_sort"] = createExportWrapper("zend_sort");

var _zend_hash_sort_ex = Module["_zend_hash_sort_ex"] = createExportWrapper("zend_hash_sort_ex");

var _zend_hash_internal_pointer_end_ex = Module["_zend_hash_internal_pointer_end_ex"] = createExportWrapper("zend_hash_internal_pointer_end_ex");

var _zend_hash_move_backwards_ex = Module["_zend_hash_move_backwards_ex"] = createExportWrapper("zend_hash_move_backwards_ex");

var _zend_hash_minmax = Module["_zend_hash_minmax"] = createExportWrapper("zend_hash_minmax");

var _is_smaller_function = Module["_is_smaller_function"] = createExportWrapper("is_smaller_function");

var _is_smaller_or_equal_function = Module["_is_smaller_or_equal_function"] = createExportWrapper("is_smaller_or_equal_function");

var _zend_hash_iterator_pos_ex = Module["_zend_hash_iterator_pos_ex"] = createExportWrapper("zend_hash_iterator_pos_ex");

var _zend_hash_iterator_pos = Module["_zend_hash_iterator_pos"] = createExportWrapper("zend_hash_iterator_pos");

var _zendi_smart_streq = Module["_zendi_smart_streq"] = createExportWrapper("zendi_smart_streq");

var _php_prefix_varname = Module["_php_prefix_varname"] = createExportWrapper("php_prefix_varname");

var _zend_rebuild_symbol_table = Module["_zend_rebuild_symbol_table"] = createExportWrapper("zend_rebuild_symbol_table");

var _zend_hash_find_known_hash = Module["_zend_hash_find_known_hash"] = createExportWrapper("zend_hash_find_known_hash");

var _zend_try_assign_typed_ref_zval_ex = Module["_zend_try_assign_typed_ref_zval_ex"] = createExportWrapper("zend_try_assign_typed_ref_zval_ex");

var _zend_get_this_object = Module["_zend_get_this_object"] = createExportWrapper("zend_get_this_object");

var _zend_hash_real_init_packed = Module["_zend_hash_real_init_packed"] = createExportWrapper("zend_hash_real_init_packed");

var _zend_parse_arg_number_slow = Module["_zend_parse_arg_number_slow"] = createExportWrapper("zend_parse_arg_number_slow");

var __php_math_round = Module["__php_math_round"] = createExportWrapper("_php_math_round");

var _zend_hash_to_packed = Module["_zend_hash_to_packed"] = createExportWrapper("zend_hash_to_packed");

var _zend_hash_iterators_lower_pos = Module["_zend_hash_iterators_lower_pos"] = createExportWrapper("zend_hash_iterators_lower_pos");

var __zend_hash_iterators_update = Module["__zend_hash_iterators_update"] = createExportWrapper("_zend_hash_iterators_update");

var _zend_hash_packed_del_val = Module["_zend_hash_packed_del_val"] = createExportWrapper("zend_hash_packed_del_val");

var _zend_hash_iterators_advance = Module["_zend_hash_iterators_advance"] = createExportWrapper("zend_hash_iterators_advance");

var _convert_to_array = Module["_convert_to_array"] = createExportWrapper("convert_to_array");

var _php_array_merge_recursive = Module["_php_array_merge_recursive"] = createExportWrapper("php_array_merge_recursive");

var _zend_cannot_add_element = Module["_zend_cannot_add_element"] = createExportWrapper("zend_cannot_add_element");

var _php_array_merge = Module["_php_array_merge"] = createExportWrapper("php_array_merge");

var _zend_hash_extend = Module["_zend_hash_extend"] = createExportWrapper("zend_hash_extend");

var _php_array_replace_recursive = Module["_php_array_replace_recursive"] = createExportWrapper("php_array_replace_recursive");

var _zend_string_hash_func = Module["_zend_string_hash_func"] = createExportWrapper("zend_string_hash_func");

var _zend_string_toupper_ex = Module["_zend_string_toupper_ex"] = createExportWrapper("zend_string_toupper_ex");

var _zend_hash_add_empty_element = Module["_zend_hash_add_empty_element"] = createExportWrapper("zend_hash_add_empty_element");

var _zend_hash_bucket_swap = Module["_zend_hash_bucket_swap"] = createExportWrapper("zend_hash_bucket_swap");

var _php_multisort_compare = Module["_php_multisort_compare"] = createExportWrapper("php_multisort_compare");

var _add_function = Module["_add_function"] = createExportWrapper("add_function");

var _zend_hash_real_init = Module["_zend_hash_real_init"] = createExportWrapper("zend_hash_real_init");

var _zend_binary_strcasecmp_l = Module["_zend_binary_strcasecmp_l"] = createExportWrapper("zend_binary_strcasecmp_l");

var _zend_binary_strcmp = Module["_zend_binary_strcmp"] = createExportWrapper("zend_binary_strcmp");

var _strcoll = Module["_strcoll"] = createExportWrapper("strcoll");

var _zendi_smart_strcmp = Module["_zendi_smart_strcmp"] = createExportWrapper("zendi_smart_strcmp");

var _strnatcmp_ex = Module["_strnatcmp_ex"] = createExportWrapper("strnatcmp_ex");

var _numeric_compare_function = Module["_numeric_compare_function"] = createExportWrapper("numeric_compare_function");

var _string_case_compare_function = Module["_string_case_compare_function"] = createExportWrapper("string_case_compare_function");

var _string_compare_function = Module["_string_compare_function"] = createExportWrapper("string_compare_function");

var _string_locale_compare_function = Module["_string_locale_compare_function"] = createExportWrapper("string_locale_compare_function");

var _php_register_incomplete_class_handlers = Module["_php_register_incomplete_class_handlers"] = createExportWrapper("php_register_incomplete_class_handlers");

var _php_register_url_stream_wrapper = Module["_php_register_url_stream_wrapper"] = createExportWrapper("php_register_url_stream_wrapper");

var _php_unregister_url_stream_wrapper = Module["_php_unregister_url_stream_wrapper"] = createExportWrapper("php_unregister_url_stream_wrapper");

var _umask = Module["_umask"] = createExportWrapper("umask");

var _setlocale = Module["_setlocale"] = createExportWrapper("setlocale");

var _zend_reset_lc_ctype_locale = Module["_zend_reset_lc_ctype_locale"] = createExportWrapper("zend_reset_lc_ctype_locale");

var _zend_update_current_locale = Module["_zend_update_current_locale"] = createExportWrapper("zend_update_current_locale");

var _php_get_nan = Module["_php_get_nan"] = createExportWrapper("php_get_nan");

var _php_get_inf = Module["_php_get_inf"] = createExportWrapper("php_get_inf");

var _zend_register_double_constant = Module["_zend_register_double_constant"] = createExportWrapper("zend_register_double_constant");

var _putenv = Module["_putenv"] = createExportWrapper("putenv");

var _unsetenv = Module["_unsetenv"] = createExportWrapper("unsetenv");

var _tzset = Module["_tzset"] = createExportWrapper("tzset");

var _zend_get_executed_scope = Module["_zend_get_executed_scope"] = createExportWrapper("zend_get_executed_scope");

var _zend_get_constant_ex = Module["_zend_get_constant_ex"] = createExportWrapper("zend_get_constant_ex");

var _inet_ntop = Module["_inet_ntop"] = createExportWrapper("inet_ntop");

var _inet_pton = Module["_inet_pton"] = createExportWrapper("inet_pton");

var _ntohl = Module["_ntohl"] = createExportWrapper("ntohl");

var _htonl = createExportWrapper("htonl");

var _php_getenv = Module["_php_getenv"] = createExportWrapper("php_getenv");

var _getenv = Module["_getenv"] = createExportWrapper("getenv");

var _sapi_getenv = Module["_sapi_getenv"] = createExportWrapper("sapi_getenv");

var _zend_strndup = Module["_zend_strndup"] = createExportWrapper("zend_strndup");

var _php_getopt = Module["_php_getopt"] = createExportWrapper("php_getopt");

var _sapi_flush = Module["_sapi_flush"] = createExportWrapper("sapi_flush");

var _sleep = createExportWrapper("sleep");

var _usleep = Module["_usleep"] = createExportWrapper("usleep");

var _nanosleep = Module["_nanosleep"] = createExportWrapper("nanosleep");

var _php_get_current_user = Module["_php_get_current_user"] = createExportWrapper("php_get_current_user");

var _cfg_get_entry_ex = Module["_cfg_get_entry_ex"] = createExportWrapper("cfg_get_entry_ex");

var __php_error_log_ex = Module["__php_error_log_ex"] = createExportWrapper("_php_error_log_ex");

var _php_log_err_with_severity = Module["_php_log_err_with_severity"] = createExportWrapper("php_log_err_with_severity");

var __php_error_log = Module["__php_error_log"] = createExportWrapper("_php_error_log");

var _zend_get_called_scope = Module["_zend_get_called_scope"] = createExportWrapper("zend_get_called_scope");

var _php_call_shutdown_functions = Module["_php_call_shutdown_functions"] = createExportWrapper("php_call_shutdown_functions");

var _zend_hash_apply = Module["_zend_hash_apply"] = createExportWrapper("zend_hash_apply");

var _php_free_shutdown_functions = Module["_php_free_shutdown_functions"] = createExportWrapper("php_free_shutdown_functions");

var _zend_fcall_info_argp = Module["_zend_fcall_info_argp"] = createExportWrapper("zend_fcall_info_argp");

var _php_get_highlight_struct = Module["_php_get_highlight_struct"] = createExportWrapper("php_get_highlight_struct");

var _php_output_start_default = Module["_php_output_start_default"] = createExportWrapper("php_output_start_default");

var _highlight_file = Module["_highlight_file"] = createExportWrapper("highlight_file");

var _php_output_end = Module["_php_output_end"] = createExportWrapper("php_output_end");

var _php_output_get_contents = Module["_php_output_get_contents"] = createExportWrapper("php_output_get_contents");

var _php_output_discard = Module["_php_output_discard"] = createExportWrapper("php_output_discard");

var _zend_save_lexical_state = Module["_zend_save_lexical_state"] = createExportWrapper("zend_save_lexical_state");

var _open_file_for_scanning = Module["_open_file_for_scanning"] = createExportWrapper("open_file_for_scanning");

var _zend_restore_lexical_state = Module["_zend_restore_lexical_state"] = createExportWrapper("zend_restore_lexical_state");

var _zend_strip = Module["_zend_strip"] = createExportWrapper("zend_strip");

var _zend_make_compiled_string_description = Module["_zend_make_compiled_string_description"] = createExportWrapper("zend_make_compiled_string_description");

var _highlight_string = Module["_highlight_string"] = createExportWrapper("highlight_string");

var _zend_ini_parse_quantity = Module["_zend_ini_parse_quantity"] = createExportWrapper("zend_ini_parse_quantity");

var _zend_ini_get_value = Module["_zend_ini_get_value"] = createExportWrapper("zend_ini_get_value");

var _zend_ini_sort_entries = Module["_zend_ini_sort_entries"] = createExportWrapper("zend_ini_sort_entries");

var _zend_restore_ini_entry = Module["_zend_restore_ini_entry"] = createExportWrapper("zend_restore_ini_entry");

var _zend_print_zval_r_to_str = Module["_zend_print_zval_r_to_str"] = createExportWrapper("zend_print_zval_r_to_str");

var _zend_print_zval_r = Module["_zend_print_zval_r"] = createExportWrapper("zend_print_zval_r");

var _getservbyname = Module["_getservbyname"] = createExportWrapper("getservbyname");

var _ntohs = createExportWrapper("ntohs");

var _htons = createExportWrapper("htons");

var _getservbyport = Module["_getservbyport"] = createExportWrapper("getservbyport");

var _php_add_tick_function = Module["_php_add_tick_function"] = createExportWrapper("php_add_tick_function");

var _zend_llist_apply = Module["_zend_llist_apply"] = createExportWrapper("zend_llist_apply");

var _zend_binary_zval_strcmp = Module["_zend_binary_zval_strcmp"] = createExportWrapper("zend_binary_zval_strcmp");

var _zend_compare_arrays = Module["_zend_compare_arrays"] = createExportWrapper("zend_compare_arrays");

var _zend_compare_objects = Module["_zend_compare_objects"] = createExportWrapper("zend_compare_objects");

var _rename = Module["_rename"] = createExportWrapper("rename");

var _chmod = Module["_chmod"] = createExportWrapper("chmod");

var _php_copy_file_ex = Module["_php_copy_file_ex"] = createExportWrapper("php_copy_file_ex");

var _zend_parse_ini_file = Module["_zend_parse_ini_file"] = createExportWrapper("zend_parse_ini_file");

var _zend_parse_ini_string = Module["_zend_parse_ini_string"] = createExportWrapper("zend_parse_ini_string");

var _add_index_double = Module["_add_index_double"] = createExportWrapper("add_index_double");

var _zif_rewind = Module["_zif_rewind"] = createExportWrapper("zif_rewind");

var _zif_fclose = Module["_zif_fclose"] = createExportWrapper("zif_fclose");

var _zif_feof = Module["_zif_feof"] = createExportWrapper("zif_feof");

var _zif_fgetc = Module["_zif_fgetc"] = createExportWrapper("zif_fgetc");

var _zif_fgets = Module["_zif_fgets"] = createExportWrapper("zif_fgets");

var _zif_fread = Module["_zif_fread"] = createExportWrapper("zif_fread");

var _zif_fpassthru = Module["_zif_fpassthru"] = createExportWrapper("zif_fpassthru");

var _zif_fseek = Module["_zif_fseek"] = createExportWrapper("zif_fseek");

var _zif_ftell = Module["_zif_ftell"] = createExportWrapper("zif_ftell");

var _zif_fflush = Module["_zif_fflush"] = createExportWrapper("zif_fflush");

var _zif_fwrite = Module["_zif_fwrite"] = createExportWrapper("zif_fwrite");

var _fopen = Module["_fopen"] = createExportWrapper("fopen");

var _zend_stream_init_fp = Module["_zend_stream_init_fp"] = createExportWrapper("zend_stream_init_fp");

var _object_and_properties_init = Module["_object_and_properties_init"] = createExportWrapper("object_and_properties_init");

var __safe_realloc = Module["__safe_realloc"] = createExportWrapper("_safe_realloc");

var _php_crc32_bulk_update = Module["_php_crc32_bulk_update"] = createExportWrapper("php_crc32_bulk_update");

var _php_crc32_stream_bulk_update = Module["_php_crc32_stream_bulk_update"] = createExportWrapper("php_crc32_stream_bulk_update");

var _php_crypt = Module["_php_crypt"] = createExportWrapper("php_crypt");

var __emalloc_128 = Module["__emalloc_128"] = createExportWrapper("_emalloc_128");

var _php_std_date = Module["_php_std_date"] = createExportWrapper("php_std_date");

var _zend_fetch_resource = Module["_zend_fetch_resource"] = createExportWrapper("zend_fetch_resource");

var _zend_list_delete = Module["_zend_list_delete"] = createExportWrapper("zend_list_delete");

var _chroot = Module["_chroot"] = createExportWrapper("chroot");

var _php_clear_stat_cache = Module["_php_clear_stat_cache"] = createExportWrapper("php_clear_stat_cache");

var _chdir = Module["_chdir"] = createExportWrapper("chdir");

var _glob = Module["_glob"] = createExportWrapper("glob");

var _php_check_open_basedir_ex = Module["_php_check_open_basedir_ex"] = createExportWrapper("php_check_open_basedir_ex");

var _globfree = Module["_globfree"] = createExportWrapper("globfree");

var _php_stream_dirent_alphasort = Module["_php_stream_dirent_alphasort"] = createExportWrapper("php_stream_dirent_alphasort");

var __php_stream_scandir = Module["__php_stream_scandir"] = createExportWrapper("_php_stream_scandir");

var _php_stream_dirent_alphasortr = Module["_php_stream_dirent_alphasortr"] = createExportWrapper("php_stream_dirent_alphasortr");

var _zif_dl = Module["_zif_dl"] = createExportWrapper("zif_dl");

var _php_dl = Module["_php_dl"] = createExportWrapper("php_dl");

var _php_load_extension = Module["_php_load_extension"] = createExportWrapper("php_load_extension");

var _php_load_shlib = Module["_php_load_shlib"] = createExportWrapper("php_load_shlib");

var _dlopen = Module["_dlopen"] = createExportWrapper("dlopen");

var _dlerror = Module["_dlerror"] = createExportWrapper("dlerror");

var _dlsym = Module["_dlsym"] = createExportWrapper("dlsym");

var _dlclose = Module["_dlclose"] = createExportWrapper("dlclose");

var _zend_next_free_module = Module["_zend_next_free_module"] = createExportWrapper("zend_next_free_module");

var _zend_register_module_ex = Module["_zend_register_module_ex"] = createExportWrapper("zend_register_module_ex");

var _zend_startup_module_ex = Module["_zend_startup_module_ex"] = createExportWrapper("zend_startup_module_ex");

var _gethostname = Module["_gethostname"] = createExportWrapper("gethostname");

var _php_network_gethostbyname = Module["_php_network_gethostbyname"] = createExportWrapper("php_network_gethostbyname");

var _sysconf = Module["_sysconf"] = createExportWrapper("sysconf");

var _php_exec = Module["_php_exec"] = createExportWrapper("php_exec");

var _popen = Module["_popen"] = createExportWrapper("popen");

var __php_stream_fopen_from_pipe = Module["__php_stream_fopen_from_pipe"] = createExportWrapper("_php_stream_fopen_from_pipe");

var __emalloc_large = Module["__emalloc_large"] = createExportWrapper("_emalloc_large");

var _php_output_write = Module["_php_output_write"] = createExportWrapper("php_output_write");

var _mblen = Module["_mblen"] = createExportWrapper("mblen");

var _php_escape_shell_arg = Module["_php_escape_shell_arg"] = createExportWrapper("php_escape_shell_arg");

var _nice = Module["_nice"] = createExportWrapper("nice");

var _php_stream_context_free = Module["_php_stream_context_free"] = createExportWrapper("php_stream_context_free");

var _zend_fetch_resource2 = Module["_zend_fetch_resource2"] = createExportWrapper("zend_fetch_resource2");

var __php_stream_copy_to_stream_ex = Module["__php_stream_copy_to_stream_ex"] = createExportWrapper("_php_stream_copy_to_stream_ex");

var _php_stream_locate_eol = Module["_php_stream_locate_eol"] = createExportWrapper("php_stream_locate_eol");

var _add_index_stringl = Module["_add_index_stringl"] = createExportWrapper("add_index_stringl");

var _php_open_temporary_fd_ex = Module["_php_open_temporary_fd_ex"] = createExportWrapper("php_open_temporary_fd_ex");

var __php_stream_fopen_tmpfile = Module["__php_stream_fopen_tmpfile"] = createExportWrapper("_php_stream_fopen_tmpfile");

var _php_error_docref2 = Module["_php_error_docref2"] = createExportWrapper("php_error_docref2");

var _php_mkdir_ex = Module["_php_mkdir_ex"] = createExportWrapper("php_mkdir_ex");

var _mkdir = Module["_mkdir"] = createExportWrapper("mkdir");

var _php_mkdir = Module["_php_mkdir"] = createExportWrapper("php_mkdir");

var __php_stream_mkdir = Module["__php_stream_mkdir"] = createExportWrapper("_php_stream_mkdir");

var __php_stream_rmdir = Module["__php_stream_rmdir"] = createExportWrapper("_php_stream_rmdir");

var __php_stream_sync = Module["__php_stream_sync"] = createExportWrapper("_php_stream_sync");

var __php_stream_stat = Module["__php_stream_stat"] = createExportWrapper("_php_stream_stat");

var _zend_hash_str_add_new = Module["_zend_hash_str_add_new"] = createExportWrapper("zend_hash_str_add_new");

var _php_copy_file_ctx = Module["_php_copy_file_ctx"] = createExportWrapper("php_copy_file_ctx");

var __php_stream_stat_path = Module["__php_stream_stat_path"] = createExportWrapper("_php_stream_stat_path");

var _php_copy_file = Module["_php_copy_file"] = createExportWrapper("php_copy_file");

var _fnmatch = Module["_fnmatch"] = createExportWrapper("fnmatch");

var _zend_ini_parse_bool = Module["_zend_ini_parse_bool"] = createExportWrapper("zend_ini_parse_bool");

var _statvfs = Module["_statvfs"] = createExportWrapper("statvfs");

var _php_get_gid_by_name = Module["_php_get_gid_by_name"] = createExportWrapper("php_get_gid_by_name");

var _getgrnam = Module["_getgrnam"] = createExportWrapper("getgrnam");

var _lchown = Module["_lchown"] = createExportWrapper("lchown");

var _chown = Module["_chown"] = createExportWrapper("chown");

var _php_get_uid_by_name = Module["_php_get_uid_by_name"] = createExportWrapper("php_get_uid_by_name");

var _getpwnam = Module["_getpwnam"] = createExportWrapper("getpwnam");

var _fclose = Module["_fclose"] = createExportWrapper("fclose");

var _realpath_cache_del = Module["_realpath_cache_del"] = createExportWrapper("realpath_cache_del");

var _realpath_cache_clean = Module["_realpath_cache_clean"] = createExportWrapper("realpath_cache_clean");

var _getgid = Module["_getgid"] = createExportWrapper("getgid");

var _getgroups = Module["_getgroups"] = createExportWrapper("getgroups");

var _realpath_cache_size = Module["_realpath_cache_size"] = createExportWrapper("realpath_cache_size");

var _realpath_cache_get_buckets = Module["_realpath_cache_get_buckets"] = createExportWrapper("realpath_cache_get_buckets");

var _realpath_cache_max_buckets = Module["_realpath_cache_max_buckets"] = createExportWrapper("realpath_cache_max_buckets");

var _php_flock = Module["_php_flock"] = createExportWrapper("php_flock");

var _localeconv = Module["_localeconv"] = createExportWrapper("localeconv");

var _php_conv_fp = Module["_php_conv_fp"] = createExportWrapper("php_conv_fp");

var __php_stream_xport_create = Module["__php_stream_xport_create"] = createExportWrapper("_php_stream_xport_create");

var _zend_try_assign_typed_ref_str = Module["_zend_try_assign_typed_ref_str"] = createExportWrapper("zend_try_assign_typed_ref_str");

var _zend_try_assign_typed_ref_empty_string = Module["_zend_try_assign_typed_ref_empty_string"] = createExportWrapper("zend_try_assign_typed_ref_empty_string");

var _sapi_header_op = Module["_sapi_header_op"] = createExportWrapper("sapi_header_op");

var _php_header = Module["_php_header"] = createExportWrapper("php_header");

var _sapi_send_headers = Module["_sapi_send_headers"] = createExportWrapper("sapi_send_headers");

var _php_setcookie = Module["_php_setcookie"] = createExportWrapper("php_setcookie");

var _php_raw_url_encode = Module["_php_raw_url_encode"] = createExportWrapper("php_raw_url_encode");

var _difftime = Module["_difftime"] = createExportWrapper("difftime");

var _zend_try_assign_typed_ref_string = Module["_zend_try_assign_typed_ref_string"] = createExportWrapper("zend_try_assign_typed_ref_string");

var _zend_llist_apply_with_argument = Module["_zend_llist_apply_with_argument"] = createExportWrapper("zend_llist_apply_with_argument");

var _php_unescape_html_entities = Module["_php_unescape_html_entities"] = createExportWrapper("php_unescape_html_entities");

var _php_escape_html_entities = Module["_php_escape_html_entities"] = createExportWrapper("php_escape_html_entities");

var _php_is_image_avif = Module["_php_is_image_avif"] = createExportWrapper("php_is_image_avif");

var _php_image_type_to_mime_type = Module["_php_image_type_to_mime_type"] = createExportWrapper("php_image_type_to_mime_type");

var _php_getimagetype = Module["_php_getimagetype"] = createExportWrapper("php_getimagetype");

var _sscanf = Module["_sscanf"] = createExportWrapper("sscanf");

var _strrchr = Module["_strrchr"] = createExportWrapper("strrchr");

var _php_info_print_style = Module["_php_info_print_style"] = createExportWrapper("php_info_print_style");

var _php_info_print_css = Module["_php_info_print_css"] = createExportWrapper("php_info_print_css");

var _php_info_html_esc = Module["_php_info_html_esc"] = createExportWrapper("php_info_html_esc");

var _php_get_uname = Module["_php_get_uname"] = createExportWrapper("php_get_uname");

var _uname = Module["_uname"] = createExportWrapper("uname");

var _php_print_info_htmlhead = Module["_php_print_info_htmlhead"] = createExportWrapper("php_print_info_htmlhead");

var _php_print_info = Module["_php_print_info"] = createExportWrapper("php_print_info");

var _get_zend_version = Module["_get_zend_version"] = createExportWrapper("get_zend_version");

var _php_info_print_box_start = Module["_php_info_print_box_start"] = createExportWrapper("php_info_print_box_start");

var _php_info_print_box_end = Module["_php_info_print_box_end"] = createExportWrapper("php_info_print_box_end");

var _is_zend_mm = Module["_is_zend_mm"] = createExportWrapper("is_zend_mm");

var _zend_multibyte_get_functions = Module["_zend_multibyte_get_functions"] = createExportWrapper("zend_multibyte_get_functions");

var __php_stream_get_url_stream_wrappers_hash = Module["__php_stream_get_url_stream_wrappers_hash"] = createExportWrapper("_php_stream_get_url_stream_wrappers_hash");

var _php_stream_xport_get_hash = Module["_php_stream_xport_get_hash"] = createExportWrapper("php_stream_xport_get_hash");

var __php_get_stream_filters_hash = Module["__php_get_stream_filters_hash"] = createExportWrapper("_php_get_stream_filters_hash");

var _zend_html_puts = Module["_zend_html_puts"] = createExportWrapper("zend_html_puts");

var _php_info_print_hr = Module["_php_info_print_hr"] = createExportWrapper("php_info_print_hr");

var _php_print_credits = Module["_php_print_credits"] = createExportWrapper("php_print_credits");

var _php_info_print_table_colspan_header = Module["_php_info_print_table_colspan_header"] = createExportWrapper("php_info_print_table_colspan_header");

var _php_info_print_table_row_ex = Module["_php_info_print_table_row_ex"] = createExportWrapper("php_info_print_table_row_ex");

var _zend_get_module_version = Module["_zend_get_module_version"] = createExportWrapper("zend_get_module_version");

var _fileno = createExportWrapper("fileno");

var _fgetc = Module["_fgetc"] = createExportWrapper("fgetc");

var _getc = Module["_getc"] = createExportWrapper("getc");

var _lstat = Module["_lstat"] = createExportWrapper("lstat");

var _expand_filepath_ex = Module["_expand_filepath_ex"] = createExportWrapper("expand_filepath_ex");

var _symlink = Module["_symlink"] = createExportWrapper("symlink");

var _link = Module["_link"] = createExportWrapper("link");

var _zend_get_executed_filename = Module["_zend_get_executed_filename"] = createExportWrapper("zend_get_executed_filename");

var _zend_get_executed_lineno = Module["_zend_get_executed_lineno"] = createExportWrapper("zend_get_executed_lineno");

var _pclose = Module["_pclose"] = createExportWrapper("pclose");

var _fprintf = Module["_fprintf"] = createExportWrapper("fprintf");

var _php_syslog = Module["_php_syslog"] = createExportWrapper("php_syslog");

var _log10 = Module["_log10"] = createExportWrapper("log10");

var _tan = Module["_tan"] = createExportWrapper("tan");

var _asin = Module["_asin"] = createExportWrapper("asin");

var _atan = Module["_atan"] = createExportWrapper("atan");

var _sinh = Module["_sinh"] = createExportWrapper("sinh");

var _cosh = Module["_cosh"] = createExportWrapper("cosh");

var _tanh = Module["_tanh"] = createExportWrapper("tanh");

var _asinh = Module["_asinh"] = createExportWrapper("asinh");

var _acosh = Module["_acosh"] = createExportWrapper("acosh");

var _atanh = Module["_atanh"] = createExportWrapper("atanh");

var _pow_function = Module["_pow_function"] = createExportWrapper("pow_function");

var _exp = Module["_exp"] = createExportWrapper("exp");

var _expm1 = Module["_expm1"] = createExportWrapper("expm1");

var _log1p = Module["_log1p"] = createExportWrapper("log1p");

var _log = Module["_log"] = createExportWrapper("log");

var _log2 = Module["_log2"] = createExportWrapper("log2");

var _hypot = Module["_hypot"] = createExportWrapper("hypot");

var __php_math_basetolong = Module["__php_math_basetolong"] = createExportWrapper("_php_math_basetolong");

var __php_math_basetozval = Module["__php_math_basetozval"] = createExportWrapper("_php_math_basetozval");

var __php_math_longtobase = Module["__php_math_longtobase"] = createExportWrapper("_php_math_longtobase");

var __php_math_zvaltobase = Module["__php_math_zvaltobase"] = createExportWrapper("_php_math_zvaltobase");

var _fmod = Module["_fmod"] = createExportWrapper("fmod");

var __php_math_number_format = Module["__php_math_number_format"] = createExportWrapper("_php_math_number_format");

var __php_math_number_format_ex = Module["__php_math_number_format_ex"] = createExportWrapper("_php_math_number_format_ex");

var _make_digest = Module["_make_digest"] = createExportWrapper("make_digest");

var _make_digest_ex = Module["_make_digest_ex"] = createExportWrapper("make_digest_ex");

var _getrusage = Module["_getrusage"] = createExportWrapper("getrusage");

var _php_statpage = Module["_php_statpage"] = createExportWrapper("php_statpage");

var _sapi_get_stat = Module["_sapi_get_stat"] = createExportWrapper("sapi_get_stat");

var _php_getlastmod = Module["_php_getlastmod"] = createExportWrapper("php_getlastmod");

var _php_quot_print_encode = Module["_php_quot_print_encode"] = createExportWrapper("php_quot_print_encode");

var _localeconv_r = Module["_localeconv_r"] = createExportWrapper("localeconv_r");

var _php_strspn = Module["_php_strspn"] = createExportWrapper("php_strspn");

var _php_strcspn = Module["_php_strcspn"] = createExportWrapper("php_strcspn");

var _nl_langinfo = Module["_nl_langinfo"] = createExportWrapper("nl_langinfo");

var _php_explode = Module["_php_explode"] = createExportWrapper("php_explode");

var _zend_hash_packed_grow = Module["_zend_hash_packed_grow"] = createExportWrapper("zend_hash_packed_grow");

var _php_explode_negative_limit = Module["_php_explode_negative_limit"] = createExportWrapper("php_explode_negative_limit");

var _php_implode = Module["_php_implode"] = createExportWrapper("php_implode");

var _php_strtoupper = Module["_php_strtoupper"] = createExportWrapper("php_strtoupper");

var _zend_str_toupper = Module["_zend_str_toupper"] = createExportWrapper("zend_str_toupper");

var _php_string_toupper = Module["_php_string_toupper"] = createExportWrapper("php_string_toupper");

var _php_strtolower = Module["_php_strtolower"] = createExportWrapper("php_strtolower");

var _php_string_tolower = Module["_php_string_tolower"] = createExportWrapper("php_string_tolower");

var _zend_dirname = Module["_zend_dirname"] = createExportWrapper("zend_dirname");

var _add_index_str = Module["_add_index_str"] = createExportWrapper("add_index_str");

var _php_strtr = Module["_php_strtr"] = createExportWrapper("php_strtr");

var _php_str_to_str = Module["_php_str_to_str"] = createExportWrapper("php_str_to_str");

var _zend_try_assign_typed_ref_double = Module["_zend_try_assign_typed_ref_double"] = createExportWrapper("zend_try_assign_typed_ref_double");

var _php_addcslashes_str = Module["_php_addcslashes_str"] = createExportWrapper("php_addcslashes_str");

var _sprintf = Module["_sprintf"] = createExportWrapper("sprintf");

var _php_stripcslashes = Module["_php_stripcslashes"] = createExportWrapper("php_stripcslashes");

var _php_stripslashes = Module["_php_stripslashes"] = createExportWrapper("php_stripslashes");

var _php_addcslashes = Module["_php_addcslashes"] = createExportWrapper("php_addcslashes");

var _zend_str_tolower_dup_ex = Module["_zend_str_tolower_dup_ex"] = createExportWrapper("zend_str_tolower_dup_ex");

var __emalloc_1024 = Module["__emalloc_1024"] = createExportWrapper("_emalloc_1024");

var _php_strip_tags = Module["_php_strip_tags"] = createExportWrapper("php_strip_tags");

var _zend_binary_strncmp = Module["_zend_binary_strncmp"] = createExportWrapper("zend_binary_strncmp");

var _zend_binary_strncasecmp_l = Module["_zend_binary_strncasecmp_l"] = createExportWrapper("zend_binary_strncasecmp_l");

var _ValidateFormat = Module["_ValidateFormat"] = createExportWrapper("ValidateFormat");

var _zend_try_assign_typed_ref_stringl = Module["_zend_try_assign_typed_ref_stringl"] = createExportWrapper("zend_try_assign_typed_ref_stringl");

var _php_openlog = Module["_php_openlog"] = createExportWrapper("php_openlog");

var _php_closelog = Module["_php_closelog"] = createExportWrapper("php_closelog");

var _php_syslog_str = Module["_php_syslog_str"] = createExportWrapper("php_syslog_str");

var _zend_zval_get_legacy_type = Module["_zend_zval_get_legacy_type"] = createExportWrapper("zend_zval_get_legacy_type");

var _zend_rsrc_list_get_rsrc_type = Module["_zend_rsrc_list_get_rsrc_type"] = createExportWrapper("zend_rsrc_list_get_rsrc_type");

var _convert_to_object = Module["_convert_to_object"] = createExportWrapper("convert_to_object");

var _zend_try_assign_typed_ref = Module["_zend_try_assign_typed_ref"] = createExportWrapper("zend_try_assign_typed_ref");

var _zend_is_countable = Module["_zend_is_countable"] = createExportWrapper("zend_is_countable");

var _php_replace_controlchars_ex = Module["_php_replace_controlchars_ex"] = createExportWrapper("php_replace_controlchars_ex");

var _php_replace_controlchars = Module["_php_replace_controlchars"] = createExportWrapper("php_replace_controlchars");

var _php_url_parse = Module["_php_url_parse"] = createExportWrapper("php_url_parse");

var _php_url_parse_ex2 = Module["_php_url_parse_ex2"] = createExportWrapper("php_url_parse_ex2");

var _php_raw_url_decode = Module["_php_raw_url_decode"] = createExportWrapper("php_raw_url_decode");

var _php_var_dump = Module["_php_var_dump"] = createExportWrapper("php_var_dump");

var _php_printf = Module["_php_printf"] = createExportWrapper("php_printf");

var _php_printf_unchecked = Module["_php_printf_unchecked"] = createExportWrapper("php_printf_unchecked");

var _zend_array_count = Module["_zend_array_count"] = createExportWrapper("zend_array_count");

var _php_debug_zval_dump = Module["_php_debug_zval_dump"] = createExportWrapper("php_debug_zval_dump");

var _php_var_export_ex = Module["_php_var_export_ex"] = createExportWrapper("php_var_export_ex");

var _smart_str_append_double = Module["_smart_str_append_double"] = createExportWrapper("smart_str_append_double");

var _php_var_export = Module["_php_var_export"] = createExportWrapper("php_var_export");

var _php_lookup_class_name = Module["_php_lookup_class_name"] = createExportWrapper("php_lookup_class_name");

var _php_unserialize_with_options = Module["_php_unserialize_with_options"] = createExportWrapper("php_unserialize_with_options");

var _php_var_unserialize_get_allowed_classes = Module["_php_var_unserialize_get_allowed_classes"] = createExportWrapper("php_var_unserialize_get_allowed_classes");

var _php_var_unserialize_get_max_depth = Module["_php_var_unserialize_get_max_depth"] = createExportWrapper("php_var_unserialize_get_max_depth");

var _php_var_unserialize_get_cur_depth = Module["_php_var_unserialize_get_cur_depth"] = createExportWrapper("php_var_unserialize_get_cur_depth");

var _php_var_unserialize_set_allowed_classes = Module["_php_var_unserialize_set_allowed_classes"] = createExportWrapper("php_var_unserialize_set_allowed_classes");

var _php_var_unserialize_set_max_depth = Module["_php_var_unserialize_set_max_depth"] = createExportWrapper("php_var_unserialize_set_max_depth");

var _php_var_unserialize_set_cur_depth = Module["_php_var_unserialize_set_cur_depth"] = createExportWrapper("php_var_unserialize_set_cur_depth");

var _zend_memory_usage = Module["_zend_memory_usage"] = createExportWrapper("zend_memory_usage");

var _zend_memory_peak_usage = Module["_zend_memory_peak_usage"] = createExportWrapper("zend_memory_peak_usage");

var _zend_memory_reset_peak_usage = Module["_zend_memory_reset_peak_usage"] = createExportWrapper("zend_memory_reset_peak_usage");

var _php_canonicalize_version = Module["_php_canonicalize_version"] = createExportWrapper("php_canonicalize_version");

var _zend_throw_exception_internal = Module["_zend_throw_exception_internal"] = createExportWrapper("zend_throw_exception_internal");

var _zend_exception_error = Module["_zend_exception_error"] = createExportWrapper("zend_exception_error");

var _zend_throw_unwind_exit = Module["_zend_throw_unwind_exit"] = createExportWrapper("zend_throw_unwind_exit");

var _zend_objects_new = Module["_zend_objects_new"] = createExportWrapper("zend_objects_new");

var _php_store_class_name = Module["_php_store_class_name"] = createExportWrapper("php_store_class_name");

var _php_output_start_internal = Module["_php_output_start_internal"] = createExportWrapper("php_output_start_internal");

var _php_url_scanner_add_var = Module["_php_url_scanner_add_var"] = createExportWrapper("php_url_scanner_add_var");

var _php_url_scanner_reset_session_vars = Module["_php_url_scanner_reset_session_vars"] = createExportWrapper("php_url_scanner_reset_session_vars");

var _php_url_scanner_reset_vars = Module["_php_url_scanner_reset_vars"] = createExportWrapper("php_url_scanner_reset_vars");

var _php_url_scanner_reset_var = Module["_php_url_scanner_reset_var"] = createExportWrapper("php_url_scanner_reset_var");

var _php_stream_wrapper_log_error = Module["_php_stream_wrapper_log_error"] = createExportWrapper("php_stream_wrapper_log_error");

var _php_stream_context_get_option = Module["_php_stream_context_get_option"] = createExportWrapper("php_stream_context_get_option");

var _php_stream_notification_notify = Module["_php_stream_notification_notify"] = createExportWrapper("php_stream_notification_notify");

var _php_stream_context_set = Module["_php_stream_context_set"] = createExportWrapper("php_stream_context_set");

var _php_stream_xport_crypto_setup = Module["_php_stream_xport_crypto_setup"] = createExportWrapper("php_stream_xport_crypto_setup");

var _php_stream_xport_crypto_enable = Module["_php_stream_xport_crypto_enable"] = createExportWrapper("php_stream_xport_crypto_enable");

var __php_stream_sock_open_host = Module["__php_stream_sock_open_host"] = createExportWrapper("_php_stream_sock_open_host");

var _zend_set_local_var_str = Module["_zend_set_local_var_str"] = createExportWrapper("zend_set_local_var_str");

var _php_stream_context_set_option = Module["_php_stream_context_set_option"] = createExportWrapper("php_stream_context_set_option");

var _php_stream_filter_create = Module["_php_stream_filter_create"] = createExportWrapper("php_stream_filter_create");

var _php_stream_filter_free = Module["_php_stream_filter_free"] = createExportWrapper("php_stream_filter_free");

var __php_stream_filter_append = Module["__php_stream_filter_append"] = createExportWrapper("_php_stream_filter_append");

var _sapi_read_post_block = Module["_sapi_read_post_block"] = createExportWrapper("sapi_read_post_block");

var _php_stream_mode_from_str = Module["_php_stream_mode_from_str"] = createExportWrapper("php_stream_mode_from_str");

var __php_stream_temp_create = Module["__php_stream_temp_create"] = createExportWrapper("_php_stream_temp_create");

var __php_stream_memory_create = Module["__php_stream_memory_create"] = createExportWrapper("_php_stream_memory_create");

var __php_stream_temp_create_ex = Module["__php_stream_temp_create_ex"] = createExportWrapper("_php_stream_temp_create_ex");

var _dup = Module["_dup"] = createExportWrapper("dup");

var __php_stream_sock_open_from_socket = Module["__php_stream_sock_open_from_socket"] = createExportWrapper("_php_stream_sock_open_from_socket");

var __php_stream_fopen_from_file = Module["__php_stream_fopen_from_file"] = createExportWrapper("_php_stream_fopen_from_file");

var __php_stream_fopen_from_fd = Module["__php_stream_fopen_from_fd"] = createExportWrapper("_php_stream_fopen_from_fd");

var _var_destroy = Module["_var_destroy"] = createExportWrapper("var_destroy");

var __efree_large = Module["__efree_large"] = createExportWrapper("_efree_large");

var _zend_is_valid_class_name = Module["_zend_is_valid_class_name"] = createExportWrapper("zend_is_valid_class_name");

var _zend_hash_lookup = Module["_zend_hash_lookup"] = createExportWrapper("zend_hash_lookup");

var _zend_ref_del_type_source = Module["_zend_ref_del_type_source"] = createExportWrapper("zend_ref_del_type_source");

var _zend_verify_prop_assignable_by_ref = Module["_zend_verify_prop_assignable_by_ref"] = createExportWrapper("zend_verify_prop_assignable_by_ref");

var _make_sha1_digest = Module["_make_sha1_digest"] = createExportWrapper("make_sha1_digest");

var _zend_register_resource = Module["_zend_register_resource"] = createExportWrapper("zend_register_resource");

var _php_stream_bucket_make_writeable = Module["_php_stream_bucket_make_writeable"] = createExportWrapper("php_stream_bucket_make_writeable");

var _add_property_zval_ex = Module["_add_property_zval_ex"] = createExportWrapper("add_property_zval_ex");

var _php_stream_bucket_prepend = Module["_php_stream_bucket_prepend"] = createExportWrapper("php_stream_bucket_prepend");

var _php_stream_filter_register_factory_volatile = Module["_php_stream_filter_register_factory_volatile"] = createExportWrapper("php_stream_filter_register_factory_volatile");

var _add_property_null_ex = Module["_add_property_null_ex"] = createExportWrapper("add_property_null_ex");

var _zend_call_method_if_exists = Module["_zend_call_method_if_exists"] = createExportWrapper("zend_call_method_if_exists");

var _php_uuencode = Module["_php_uuencode"] = createExportWrapper("php_uuencode");

var _php_uudecode = Module["_php_uudecode"] = createExportWrapper("php_uudecode");

var _waitpid = Module["_waitpid"] = createExportWrapper("waitpid");

var _kill = Module["_kill"] = createExportWrapper("kill");

var _fork = Module["_fork"] = createExportWrapper("fork");

var __exit = Module["__exit"] = createExportWrapper("_exit");

var _execvp = Module["_execvp"] = createExportWrapper("execvp");

var _execle = Module["_execle"] = createExportWrapper("execle");

var _execl = Module["_execl"] = createExportWrapper("execl");

var __php_stream_cast = Module["__php_stream_cast"] = createExportWrapper("_php_stream_cast");

var _dup2 = Module["_dup2"] = createExportWrapper("dup2");

var _pipe = Module["_pipe"] = createExportWrapper("pipe");

var _socketpair = Module["_socketpair"] = createExportWrapper("socketpair");

var _php_socket_error_str = Module["_php_socket_error_str"] = createExportWrapper("php_socket_error_str");

var _openpty = Module["_openpty"] = createExportWrapper("openpty");

var _php_socket_strerror = Module["_php_socket_strerror"] = createExportWrapper("php_socket_strerror");

var _add_next_index_resource = Module["_add_next_index_resource"] = createExportWrapper("add_next_index_resource");

var _php_stream_xport_accept = Module["_php_stream_xport_accept"] = createExportWrapper("php_stream_xport_accept");

var _php_stream_xport_get_name = Module["_php_stream_xport_get_name"] = createExportWrapper("php_stream_xport_get_name");

var _php_network_parse_network_address_with_port = Module["_php_network_parse_network_address_with_port"] = createExportWrapper("php_network_parse_network_address_with_port");

var _php_stream_xport_sendto = Module["_php_stream_xport_sendto"] = createExportWrapper("php_stream_xport_sendto");

var _zend_try_assign_typed_ref_null = Module["_zend_try_assign_typed_ref_null"] = createExportWrapper("zend_try_assign_typed_ref_null");

var _php_stream_xport_recvfrom = Module["_php_stream_xport_recvfrom"] = createExportWrapper("php_stream_xport_recvfrom");

var _select = Module["_select"] = createExportWrapper("select");

var __php_emit_fd_setsize_warning = Module["__php_emit_fd_setsize_warning"] = createExportWrapper("_php_emit_fd_setsize_warning");

var _php_stream_notification_free = Module["_php_stream_notification_free"] = createExportWrapper("php_stream_notification_free");

var _php_stream_notification_alloc = Module["_php_stream_notification_alloc"] = createExportWrapper("php_stream_notification_alloc");

var _php_stream_filter_append_ex = Module["_php_stream_filter_append_ex"] = createExportWrapper("php_stream_filter_append_ex");

var _php_stream_filter_prepend_ex = Module["_php_stream_filter_prepend_ex"] = createExportWrapper("php_stream_filter_prepend_ex");

var _php_stream_filter_remove = Module["_php_stream_filter_remove"] = createExportWrapper("php_stream_filter_remove");

var _php_file_le_stream_filter = Module["_php_file_le_stream_filter"] = createExportWrapper("php_file_le_stream_filter");

var __php_stream_filter_flush = Module["__php_stream_filter_flush"] = createExportWrapper("_php_stream_filter_flush");

var _php_stream_get_record = Module["_php_stream_get_record"] = createExportWrapper("php_stream_get_record");

var _isatty = Module["_isatty"] = createExportWrapper("isatty");

var _php_stream_xport_shutdown = Module["_php_stream_xport_shutdown"] = createExportWrapper("php_stream_xport_shutdown");

var _php_url_encode_hash_ex = Module["_php_url_encode_hash_ex"] = createExportWrapper("php_url_encode_hash_ex");

var _zend_check_property_access = Module["_zend_check_property_access"] = createExportWrapper("zend_check_property_access");

var _php_password_algo_register = Module["_php_password_algo_register"] = createExportWrapper("php_password_algo_register");

var _php_password_algo_unregister = Module["_php_password_algo_unregister"] = createExportWrapper("php_password_algo_unregister");

var _php_password_algo_default = Module["_php_password_algo_default"] = createExportWrapper("php_password_algo_default");

var _php_password_algo_find = Module["_php_password_algo_find"] = createExportWrapper("php_password_algo_find");

var _php_password_algo_extract_ident = Module["_php_password_algo_extract_ident"] = createExportWrapper("php_password_algo_extract_ident");

var _php_password_algo_identify_ex = Module["_php_password_algo_identify_ex"] = createExportWrapper("php_password_algo_identify_ex");

var _php_inet_ntop = Module["_php_inet_ntop"] = createExportWrapper("php_inet_ntop");

var _getifaddrs = Module["_getifaddrs"] = createExportWrapper("getifaddrs");

var _freeifaddrs = Module["_freeifaddrs"] = createExportWrapper("freeifaddrs");

var _clock_gettime = Module["_clock_gettime"] = createExportWrapper("clock_gettime");

var _php_hrtime_current = Module["_php_hrtime_current"] = createExportWrapper("php_hrtime_current");

var _tidySetMallocCall = Module["_tidySetMallocCall"] = createExportWrapper("tidySetMallocCall");

var _tidySetReallocCall = Module["_tidySetReallocCall"] = createExportWrapper("tidySetReallocCall");

var _tidySetFreeCall = Module["_tidySetFreeCall"] = createExportWrapper("tidySetFreeCall");

var _tidySetPanicCall = Module["_tidySetPanicCall"] = createExportWrapper("tidySetPanicCall");

var _zend_ini_long = Module["_zend_ini_long"] = createExportWrapper("zend_ini_long");

var _tidyLibraryVersion = Module["_tidyLibraryVersion"] = createExportWrapper("tidyLibraryVersion");

var _tidyReleaseDate = Module["_tidyReleaseDate"] = createExportWrapper("tidyReleaseDate");

var _tidyLoadConfig = Module["_tidyLoadConfig"] = createExportWrapper("tidyLoadConfig");

var _tidySetCharEncoding = Module["_tidySetCharEncoding"] = createExportWrapper("tidySetCharEncoding");

var _tidyBufInit = Module["_tidyBufInit"] = createExportWrapper("tidyBufInit");

var _tidyBufAttach = Module["_tidyBufAttach"] = createExportWrapper("tidyBufAttach");

var _tidyParseBuffer = Module["_tidyParseBuffer"] = createExportWrapper("tidyParseBuffer");

var _tidySaveBuffer = Module["_tidySaveBuffer"] = createExportWrapper("tidySaveBuffer");

var _tidyBufFree = Module["_tidyBufFree"] = createExportWrapper("tidyBufFree");

var _tidyCleanAndRepair = Module["_tidyCleanAndRepair"] = createExportWrapper("tidyCleanAndRepair");

var _zend_update_property_stringl = Module["_zend_update_property_stringl"] = createExportWrapper("zend_update_property_stringl");

var _tidyCreate = Module["_tidyCreate"] = createExportWrapper("tidyCreate");

var _tidySetErrorBuffer = Module["_tidySetErrorBuffer"] = createExportWrapper("tidySetErrorBuffer");

var _tidyRelease = Module["_tidyRelease"] = createExportWrapper("tidyRelease");

var _tidyOptSetBool = Module["_tidyOptSetBool"] = createExportWrapper("tidyOptSetBool");

var _tidyRunDiagnostics = Module["_tidyRunDiagnostics"] = createExportWrapper("tidyRunDiagnostics");

var _tidyGetOptionByName = Module["_tidyGetOptionByName"] = createExportWrapper("tidyGetOptionByName");

var _tidyOptGetDoc = Module["_tidyOptGetDoc"] = createExportWrapper("tidyOptGetDoc");

var _tidyGetOptionList = Module["_tidyGetOptionList"] = createExportWrapper("tidyGetOptionList");

var _tidyGetNextOption = Module["_tidyGetNextOption"] = createExportWrapper("tidyGetNextOption");

var _tidyOptGetName = Module["_tidyOptGetName"] = createExportWrapper("tidyOptGetName");

var _tidyOptGetType = Module["_tidyOptGetType"] = createExportWrapper("tidyOptGetType");

var _tidyOptGetId = Module["_tidyOptGetId"] = createExportWrapper("tidyOptGetId");

var _tidyOptGetValue = Module["_tidyOptGetValue"] = createExportWrapper("tidyOptGetValue");

var _tidyOptGetInt = Module["_tidyOptGetInt"] = createExportWrapper("tidyOptGetInt");

var _tidyOptGetBool = Module["_tidyOptGetBool"] = createExportWrapper("tidyOptGetBool");

var _tidyStatus = Module["_tidyStatus"] = createExportWrapper("tidyStatus");

var _tidyDetectedHtmlVersion = Module["_tidyDetectedHtmlVersion"] = createExportWrapper("tidyDetectedHtmlVersion");

var _tidyDetectedXhtml = Module["_tidyDetectedXhtml"] = createExportWrapper("tidyDetectedXhtml");

var _tidyDetectedGenericXml = Module["_tidyDetectedGenericXml"] = createExportWrapper("tidyDetectedGenericXml");

var _tidyErrorCount = Module["_tidyErrorCount"] = createExportWrapper("tidyErrorCount");

var _tidyWarningCount = Module["_tidyWarningCount"] = createExportWrapper("tidyWarningCount");

var _tidyAccessWarningCount = Module["_tidyAccessWarningCount"] = createExportWrapper("tidyAccessWarningCount");

var _tidyConfigErrorCount = Module["_tidyConfigErrorCount"] = createExportWrapper("tidyConfigErrorCount");

var _tidyGetRoot = Module["_tidyGetRoot"] = createExportWrapper("tidyGetRoot");

var _tidyGetHtml = Module["_tidyGetHtml"] = createExportWrapper("tidyGetHtml");

var _tidyGetHead = Module["_tidyGetHead"] = createExportWrapper("tidyGetHead");

var _tidyGetBody = Module["_tidyGetBody"] = createExportWrapper("tidyGetBody");

var _tidyGetChild = Module["_tidyGetChild"] = createExportWrapper("tidyGetChild");

var _tidyGetNext = Module["_tidyGetNext"] = createExportWrapper("tidyGetNext");

var _tidyNodeGetType = Module["_tidyNodeGetType"] = createExportWrapper("tidyNodeGetType");

var _tidyGetParent = Module["_tidyGetParent"] = createExportWrapper("tidyGetParent");

var _tidyNodeGetText = Module["_tidyNodeGetText"] = createExportWrapper("tidyNodeGetText");

var _tidyNodeGetName = Module["_tidyNodeGetName"] = createExportWrapper("tidyNodeGetName");

var _tidyNodeLine = Module["_tidyNodeLine"] = createExportWrapper("tidyNodeLine");

var _tidyNodeColumn = Module["_tidyNodeColumn"] = createExportWrapper("tidyNodeColumn");

var _tidyNodeIsProp = Module["_tidyNodeIsProp"] = createExportWrapper("tidyNodeIsProp");

var _zend_update_property_bool = Module["_zend_update_property_bool"] = createExportWrapper("zend_update_property_bool");

var _zend_update_property_null = Module["_zend_update_property_null"] = createExportWrapper("zend_update_property_null");

var _tidyNodeGetId = Module["_tidyNodeGetId"] = createExportWrapper("tidyNodeGetId");

var _tidyAttrFirst = Module["_tidyAttrFirst"] = createExportWrapper("tidyAttrFirst");

var _tidyAttrName = Module["_tidyAttrName"] = createExportWrapper("tidyAttrName");

var _tidyAttrValue = Module["_tidyAttrValue"] = createExportWrapper("tidyAttrValue");

var _tidyAttrNext = Module["_tidyAttrNext"] = createExportWrapper("tidyAttrNext");

var _php_output_handler_started = Module["_php_output_handler_started"] = createExportWrapper("php_output_handler_started");

var _php_output_handler_start = Module["_php_output_handler_start"] = createExportWrapper("php_output_handler_start");

var _tidyOptIsReadOnly = Module["_tidyOptIsReadOnly"] = createExportWrapper("tidyOptIsReadOnly");

var _tidyOptSetValue = Module["_tidyOptSetValue"] = createExportWrapper("tidyOptSetValue");

var _tidyOptSetInt = Module["_tidyOptSetInt"] = createExportWrapper("tidyOptSetInt");

var _zend_prepare_string_for_scanning = Module["_zend_prepare_string_for_scanning"] = createExportWrapper("zend_prepare_string_for_scanning");

var _zendparse = Module["_zendparse"] = createExportWrapper("zendparse");

var _zend_ast_destroy = Module["_zend_ast_destroy"] = createExportWrapper("zend_ast_destroy");

var _lex_scan = Module["_lex_scan"] = createExportWrapper("lex_scan");

var _vrzno_expose_inc_zrefcount = Module["_vrzno_expose_inc_zrefcount"] = createExportWrapper("vrzno_expose_inc_zrefcount");

var _vrzno_expose_dec_zrefcount = Module["_vrzno_expose_dec_zrefcount"] = createExportWrapper("vrzno_expose_dec_zrefcount");

var _vrzno_expose_zrefcount = Module["_vrzno_expose_zrefcount"] = createExportWrapper("vrzno_expose_zrefcount");

var _vrzno_expose_inc_crefcount = Module["_vrzno_expose_inc_crefcount"] = createExportWrapper("vrzno_expose_inc_crefcount");

var _vrzno_expose_dec_crefcount = Module["_vrzno_expose_dec_crefcount"] = createExportWrapper("vrzno_expose_dec_crefcount");

var _vrzno_expose_crefcount = Module["_vrzno_expose_crefcount"] = createExportWrapper("vrzno_expose_crefcount");

var _vrzno_expose_efree = Module["_vrzno_expose_efree"] = createExportWrapper("vrzno_expose_efree");

var _vrzno_expose_create_bool = Module["_vrzno_expose_create_bool"] = createExportWrapper("vrzno_expose_create_bool");

var _vrzno_expose_create_null = Module["_vrzno_expose_create_null"] = createExportWrapper("vrzno_expose_create_null");

var _vrzno_expose_create_undef = Module["_vrzno_expose_create_undef"] = createExportWrapper("vrzno_expose_create_undef");

var _vrzno_expose_create_long = Module["_vrzno_expose_create_long"] = createExportWrapper("vrzno_expose_create_long");

var _vrzno_expose_create_double = Module["_vrzno_expose_create_double"] = createExportWrapper("vrzno_expose_create_double");

var _vrzno_expose_create_string = Module["_vrzno_expose_create_string"] = createExportWrapper("vrzno_expose_create_string");

var _vrzno_expose_create_object_for_target = Module["_vrzno_expose_create_object_for_target"] = createExportWrapper("vrzno_expose_create_object_for_target");

var _vrzno_expose_create_params = Module["_vrzno_expose_create_params"] = createExportWrapper("vrzno_expose_create_params");

var _vrzno_expose_set_param = Module["_vrzno_expose_set_param"] = createExportWrapper("vrzno_expose_set_param");

var _vrzno_expose_zval_is_target = Module["_vrzno_expose_zval_is_target"] = createExportWrapper("vrzno_expose_zval_is_target");

var _vrzno_expose_object_keys = Module["_vrzno_expose_object_keys"] = createExportWrapper("vrzno_expose_object_keys");

var _vrzno_expose_zval_dump = Module["_vrzno_expose_zval_dump"] = createExportWrapper("vrzno_expose_zval_dump");

var _vrzno_expose_type = Module["_vrzno_expose_type"] = createExportWrapper("vrzno_expose_type");

var _vrzno_expose_callable = Module["_vrzno_expose_callable"] = createExportWrapper("vrzno_expose_callable");

var _vrzno_expose_long = Module["_vrzno_expose_long"] = createExportWrapper("vrzno_expose_long");

var _vrzno_expose_double = Module["_vrzno_expose_double"] = createExportWrapper("vrzno_expose_double");

var _vrzno_expose_string = Module["_vrzno_expose_string"] = createExportWrapper("vrzno_expose_string");

var _vrzno_expose_property_type = Module["_vrzno_expose_property_type"] = createExportWrapper("vrzno_expose_property_type");

var _vrzno_expose_property_callable = Module["_vrzno_expose_property_callable"] = createExportWrapper("vrzno_expose_property_callable");

var _vrzno_expose_property_long = Module["_vrzno_expose_property_long"] = createExportWrapper("vrzno_expose_property_long");

var _vrzno_expose_property_double = Module["_vrzno_expose_property_double"] = createExportWrapper("vrzno_expose_property_double");

var _vrzno_expose_property_string = Module["_vrzno_expose_property_string"] = createExportWrapper("vrzno_expose_property_string");

var _vrzno_expose_property_pointer = Module["_vrzno_expose_property_pointer"] = createExportWrapper("vrzno_expose_property_pointer");

var _zend_register_internal_class = Module["_zend_register_internal_class"] = createExportWrapper("zend_register_internal_class");

var _vrzno_exec_callback = Module["_vrzno_exec_callback"] = createExportWrapper("vrzno_exec_callback");

var _vrzno_del_callback = Module["_vrzno_del_callback"] = createExportWrapper("vrzno_del_callback");

var _zend_ulong_to_str = Module["_zend_ulong_to_str"] = createExportWrapper("zend_ulong_to_str");

var _php_XML_ParserFree = Module["_php_XML_ParserFree"] = createExportWrapper("php_XML_ParserFree");

var _XML_GetUserData = Module["_XML_GetUserData"] = createExportWrapper("XML_GetUserData");

var _php_XML_ParserCreate_MM = Module["_php_XML_ParserCreate_MM"] = createExportWrapper("php_XML_ParserCreate_MM");

var _php_XML_SetUserData = Module["_php_XML_SetUserData"] = createExportWrapper("php_XML_SetUserData");

var _php_XML_SetElementHandler = Module["_php_XML_SetElementHandler"] = createExportWrapper("php_XML_SetElementHandler");

var _php_XML_SetCharacterDataHandler = Module["_php_XML_SetCharacterDataHandler"] = createExportWrapper("php_XML_SetCharacterDataHandler");

var _php_XML_SetProcessingInstructionHandler = Module["_php_XML_SetProcessingInstructionHandler"] = createExportWrapper("php_XML_SetProcessingInstructionHandler");

var _php_XML_SetDefaultHandler = Module["_php_XML_SetDefaultHandler"] = createExportWrapper("php_XML_SetDefaultHandler");

var _php_XML_SetUnparsedEntityDeclHandler = Module["_php_XML_SetUnparsedEntityDeclHandler"] = createExportWrapper("php_XML_SetUnparsedEntityDeclHandler");

var _php_XML_SetNotationDeclHandler = Module["_php_XML_SetNotationDeclHandler"] = createExportWrapper("php_XML_SetNotationDeclHandler");

var _php_XML_SetExternalEntityRefHandler = Module["_php_XML_SetExternalEntityRefHandler"] = createExportWrapper("php_XML_SetExternalEntityRefHandler");

var _php_XML_SetStartNamespaceDeclHandler = Module["_php_XML_SetStartNamespaceDeclHandler"] = createExportWrapper("php_XML_SetStartNamespaceDeclHandler");

var _php_XML_SetEndNamespaceDeclHandler = Module["_php_XML_SetEndNamespaceDeclHandler"] = createExportWrapper("php_XML_SetEndNamespaceDeclHandler");

var _php_XML_Parse = Module["_php_XML_Parse"] = createExportWrapper("php_XML_Parse");

var _php_XML_GetErrorCode = Module["_php_XML_GetErrorCode"] = createExportWrapper("php_XML_GetErrorCode");

var _php_XML_ErrorString = Module["_php_XML_ErrorString"] = createExportWrapper("php_XML_ErrorString");

var _php_XML_GetCurrentLineNumber = Module["_php_XML_GetCurrentLineNumber"] = createExportWrapper("php_XML_GetCurrentLineNumber");

var _php_XML_GetCurrentColumnNumber = Module["_php_XML_GetCurrentColumnNumber"] = createExportWrapper("php_XML_GetCurrentColumnNumber");

var _php_XML_GetCurrentByteIndex = Module["_php_XML_GetCurrentByteIndex"] = createExportWrapper("php_XML_GetCurrentByteIndex");

var _php_XML_ParserCreate = Module["_php_XML_ParserCreate"] = createExportWrapper("php_XML_ParserCreate");

var _xmlCreatePushParserCtxt = Module["_xmlCreatePushParserCtxt"] = createExportWrapper("xmlCreatePushParserCtxt");

var _php_XML_ParserCreateNS = Module["_php_XML_ParserCreateNS"] = createExportWrapper("php_XML_ParserCreateNS");

var _php_XML_SetCommentHandler = Module["_php_XML_SetCommentHandler"] = createExportWrapper("php_XML_SetCommentHandler");

var _xmlParseChunk = Module["_xmlParseChunk"] = createExportWrapper("xmlParseChunk");

var _php_XML_GetCurrentByteCount = Module["_php_XML_GetCurrentByteCount"] = createExportWrapper("php_XML_GetCurrentByteCount");

var _php_XML_ExpatVersion = Module["_php_XML_ExpatVersion"] = createExportWrapper("php_XML_ExpatVersion");

var _xmlGetPredefinedEntity = Module["_xmlGetPredefinedEntity"] = createExportWrapper("xmlGetPredefinedEntity");

var _xmlGetDocEntity = Module["_xmlGetDocEntity"] = createExportWrapper("xmlGetDocEntity");

var _xmlStrncatNew = Module["_xmlStrncatNew"] = createExportWrapper("xmlStrncatNew");

var _xmlStrncat = Module["_xmlStrncat"] = createExportWrapper("xmlStrncat");

var _xmlStopParser = Module["_xmlStopParser"] = createExportWrapper("xmlStopParser");

var _zip_libzip_version = Module["_zip_libzip_version"] = createExportWrapper("zip_libzip_version");

var _zip_open = Module["_zip_open"] = createExportWrapper("zip_open");

var _zip_get_num_entries = Module["_zip_get_num_entries"] = createExportWrapper("zip_get_num_entries");

var _zip_stat_index = Module["_zip_stat_index"] = createExportWrapper("zip_stat_index");

var _zip_fopen_index = Module["_zip_fopen_index"] = createExportWrapper("zip_fopen_index");

var _zip_fread = Module["_zip_fread"] = createExportWrapper("zip_fread");

var _zip_close = Module["_zip_close"] = createExportWrapper("zip_close");

var _zip_set_default_password = Module["_zip_set_default_password"] = createExportWrapper("zip_set_default_password");

var _zip_strerror = Module["_zip_strerror"] = createExportWrapper("zip_strerror");

var _zip_get_error = Module["_zip_get_error"] = createExportWrapper("zip_get_error");

var _zip_error_code_zip = Module["_zip_error_code_zip"] = createExportWrapper("zip_error_code_zip");

var _zip_error_code_system = Module["_zip_error_code_system"] = createExportWrapper("zip_error_code_system");

var _zip_error_fini = Module["_zip_error_fini"] = createExportWrapper("zip_error_fini");

var _zip_discard = Module["_zip_discard"] = createExportWrapper("zip_discard");

var _zip_error_clear = Module["_zip_error_clear"] = createExportWrapper("zip_error_clear");

var _zip_error_strerror = Module["_zip_error_strerror"] = createExportWrapper("zip_error_strerror");

var _zip_error_init = Module["_zip_error_init"] = createExportWrapper("zip_error_init");

var _zip_error_set = Module["_zip_error_set"] = createExportWrapper("zip_error_set");

var _zip_dir_add = Module["_zip_dir_add"] = createExportWrapper("zip_dir_add");

var _zip_set_file_compression = Module["_zip_set_file_compression"] = createExportWrapper("zip_set_file_compression");

var _zip_source_file = Module["_zip_source_file"] = createExportWrapper("zip_source_file");

var _zip_file_replace = Module["_zip_file_replace"] = createExportWrapper("zip_file_replace");

var _zip_source_free = Module["_zip_source_free"] = createExportWrapper("zip_source_free");

var _zip_file_add = Module["_zip_file_add"] = createExportWrapper("zip_file_add");

var _zip_source_buffer = Module["_zip_source_buffer"] = createExportWrapper("zip_source_buffer");

var _zip_stat = Module["_zip_stat"] = createExportWrapper("zip_stat");

var _zip_name_locate = Module["_zip_name_locate"] = createExportWrapper("zip_name_locate");

var _zip_get_name = Module["_zip_get_name"] = createExportWrapper("zip_get_name");

var _zip_set_archive_comment = Module["_zip_set_archive_comment"] = createExportWrapper("zip_set_archive_comment");

var _zip_get_archive_comment = Module["_zip_get_archive_comment"] = createExportWrapper("zip_get_archive_comment");

var _zip_file_set_comment = Module["_zip_file_set_comment"] = createExportWrapper("zip_file_set_comment");

var _zip_file_set_external_attributes = Module["_zip_file_set_external_attributes"] = createExportWrapper("zip_file_set_external_attributes");

var _zip_file_get_external_attributes = Module["_zip_file_get_external_attributes"] = createExportWrapper("zip_file_get_external_attributes");

var _zip_file_get_comment = Module["_zip_file_get_comment"] = createExportWrapper("zip_file_get_comment");

var _zip_delete = Module["_zip_delete"] = createExportWrapper("zip_delete");

var _zip_file_rename = Module["_zip_file_rename"] = createExportWrapper("zip_file_rename");

var _zip_unchange = Module["_zip_unchange"] = createExportWrapper("zip_unchange");

var _zip_unchange_all = Module["_zip_unchange_all"] = createExportWrapper("zip_unchange_all");

var _zip_unchange_archive = Module["_zip_unchange_archive"] = createExportWrapper("zip_unchange_archive");

var _virtual_file_ex = Module["_virtual_file_ex"] = createExportWrapper("virtual_file_ex");

var _zip_fopen = Module["_zip_fopen"] = createExportWrapper("zip_fopen");

var _zip_fclose = Module["_zip_fclose"] = createExportWrapper("zip_fclose");

var _zip_file_get_error = Module["_zip_file_get_error"] = createExportWrapper("zip_file_get_error");

var _zip_fseek = Module["_zip_fseek"] = createExportWrapper("zip_fseek");

var _zip_ftell = Module["_zip_ftell"] = createExportWrapper("zip_ftell");

var _zip_file_is_seekable = Module["_zip_file_is_seekable"] = createExportWrapper("zip_file_is_seekable");

var _php_during_module_startup = Module["_php_during_module_startup"] = createExportWrapper("php_during_module_startup");

var _php_during_module_shutdown = Module["_php_during_module_shutdown"] = createExportWrapper("php_during_module_shutdown");

var _php_get_module_initialized = Module["_php_get_module_initialized"] = createExportWrapper("php_get_module_initialized");

var _php_write = Module["_php_write"] = createExportWrapper("php_write");

var _php_verror = Module["_php_verror"] = createExportWrapper("php_verror");

var _get_active_class_name = Module["_get_active_class_name"] = createExportWrapper("get_active_class_name");

var _zend_error_zstr = Module["_zend_error_zstr"] = createExportWrapper("zend_error_zstr");

var _php_error_docref1 = Module["_php_error_docref1"] = createExportWrapper("php_error_docref1");

var _php_html_puts = Module["_php_html_puts"] = createExportWrapper("php_html_puts");

var _getpwuid = Module["_getpwuid"] = createExportWrapper("getpwuid");

var _zend_alter_ini_entry_chars_ex = Module["_zend_alter_ini_entry_chars_ex"] = createExportWrapper("zend_alter_ini_entry_chars_ex");

var _php_request_startup = Module["_php_request_startup"] = createExportWrapper("php_request_startup");

var _zend_interned_strings_activate = Module["_zend_interned_strings_activate"] = createExportWrapper("zend_interned_strings_activate");

var _php_output_activate = Module["_php_output_activate"] = createExportWrapper("php_output_activate");

var _zend_activate = Module["_zend_activate"] = createExportWrapper("zend_activate");

var _sapi_activate = Module["_sapi_activate"] = createExportWrapper("sapi_activate");

var _zend_set_timeout = Module["_zend_set_timeout"] = createExportWrapper("zend_set_timeout");

var _php_output_start_user = Module["_php_output_start_user"] = createExportWrapper("php_output_start_user");

var _php_output_set_implicit_flush = Module["_php_output_set_implicit_flush"] = createExportWrapper("php_output_set_implicit_flush");

var _php_hash_environment = Module["_php_hash_environment"] = createExportWrapper("php_hash_environment");

var _zend_activate_modules = Module["_zend_activate_modules"] = createExportWrapper("zend_activate_modules");

var _php_request_shutdown = Module["_php_request_shutdown"] = createExportWrapper("php_request_shutdown");

var _zend_observer_fcall_end_all = Module["_zend_observer_fcall_end_all"] = createExportWrapper("zend_observer_fcall_end_all");

var _zend_call_destructors = Module["_zend_call_destructors"] = createExportWrapper("zend_call_destructors");

var _php_output_end_all = Module["_php_output_end_all"] = createExportWrapper("php_output_end_all");

var _zend_unset_timeout = Module["_zend_unset_timeout"] = createExportWrapper("zend_unset_timeout");

var _php_output_deactivate = Module["_php_output_deactivate"] = createExportWrapper("php_output_deactivate");

var _zend_deactivate_modules = Module["_zend_deactivate_modules"] = createExportWrapper("zend_deactivate_modules");

var _shutdown_memory_manager = Module["_shutdown_memory_manager"] = createExportWrapper("shutdown_memory_manager");

var _zend_set_memory_limit = Module["_zend_set_memory_limit"] = createExportWrapper("zend_set_memory_limit");

var _zend_interned_strings_deactivate = Module["_zend_interned_strings_deactivate"] = createExportWrapper("zend_interned_strings_deactivate");

var _sapi_deactivate_module = Module["_sapi_deactivate_module"] = createExportWrapper("sapi_deactivate_module");

var _sapi_deactivate_destroy = Module["_sapi_deactivate_destroy"] = createExportWrapper("sapi_deactivate_destroy");

var _virtual_cwd_deactivate = Module["_virtual_cwd_deactivate"] = createExportWrapper("virtual_cwd_deactivate");

var _zend_post_deactivate_modules = Module["_zend_post_deactivate_modules"] = createExportWrapper("zend_post_deactivate_modules");

var _zend_deactivate = Module["_zend_deactivate"] = createExportWrapper("zend_deactivate");

var _php_com_initialize = Module["_php_com_initialize"] = createExportWrapper("php_com_initialize");

var _php_register_extensions = Module["_php_register_extensions"] = createExportWrapper("php_register_extensions");

var _zend_register_internal_module = Module["_zend_register_internal_module"] = createExportWrapper("zend_register_internal_module");

var _php_module_startup = Module["_php_module_startup"] = createExportWrapper("php_module_startup");

var _sapi_initialize_empty_request = Module["_sapi_initialize_empty_request"] = createExportWrapper("sapi_initialize_empty_request");

var _php_output_startup = Module["_php_output_startup"] = createExportWrapper("php_output_startup");

var _php_printf_to_smart_string = Module["_php_printf_to_smart_string"] = createExportWrapper("php_printf_to_smart_string");

var _php_printf_to_smart_str = Module["_php_printf_to_smart_str"] = createExportWrapper("php_printf_to_smart_str");

var _zend_observer_startup = Module["_zend_observer_startup"] = createExportWrapper("zend_observer_startup");

var _php_output_register_constants = Module["_php_output_register_constants"] = createExportWrapper("php_output_register_constants");

var _zend_startup_modules = Module["_zend_startup_modules"] = createExportWrapper("zend_startup_modules");

var _zend_collect_module_handlers = Module["_zend_collect_module_handlers"] = createExportWrapper("zend_collect_module_handlers");

var _zend_register_functions = Module["_zend_register_functions"] = createExportWrapper("zend_register_functions");

var _zend_disable_functions = Module["_zend_disable_functions"] = createExportWrapper("zend_disable_functions");

var _zend_observer_post_startup = Module["_zend_observer_post_startup"] = createExportWrapper("zend_observer_post_startup");

var _cfg_get_long = Module["_cfg_get_long"] = createExportWrapper("cfg_get_long");

var _sapi_deactivate = Module["_sapi_deactivate"] = createExportWrapper("sapi_deactivate");

var _virtual_cwd_activate = Module["_virtual_cwd_activate"] = createExportWrapper("virtual_cwd_activate");

var _zend_interned_strings_switch_storage = Module["_zend_interned_strings_switch_storage"] = createExportWrapper("zend_interned_strings_switch_storage");

var _zend_throw_error_exception = Module["_zend_throw_error_exception"] = createExportWrapper("zend_throw_error_exception");

var _zend_alloc_in_memory_limit_error_reporting = Module["_zend_alloc_in_memory_limit_error_reporting"] = createExportWrapper("zend_alloc_in_memory_limit_error_reporting");

var _php_output_discard_all = Module["_php_output_discard_all"] = createExportWrapper("php_output_discard_all");

var _zend_objects_store_mark_destructed = Module["_zend_objects_store_mark_destructed"] = createExportWrapper("zend_objects_store_mark_destructed");

var __php_stream_open_wrapper_as_file = Module["__php_stream_open_wrapper_as_file"] = createExportWrapper("_php_stream_open_wrapper_as_file");

var _php_strip_url_passwd = Module["_php_strip_url_passwd"] = createExportWrapper("php_strip_url_passwd");

var _asctime_r = Module["_asctime_r"] = createExportWrapper("asctime_r");

var _php_resolve_path = Module["_php_resolve_path"] = createExportWrapper("php_resolve_path");

var _strdup = Module["_strdup"] = createExportWrapper("strdup");

var _zend_disable_class = Module["_zend_disable_class"] = createExportWrapper("zend_disable_class");

var _php_module_shutdown_wrapper = Module["_php_module_shutdown_wrapper"] = createExportWrapper("php_module_shutdown_wrapper");

var _php_module_shutdown = Module["_php_module_shutdown"] = createExportWrapper("php_module_shutdown");

var _zend_ini_shutdown = Module["_zend_ini_shutdown"] = createExportWrapper("zend_ini_shutdown");

var _php_output_shutdown = Module["_php_output_shutdown"] = createExportWrapper("php_output_shutdown");

var _zend_interned_strings_dtor = Module["_zend_interned_strings_dtor"] = createExportWrapper("zend_interned_strings_dtor");

var _zend_observer_shutdown = Module["_zend_observer_shutdown"] = createExportWrapper("zend_observer_shutdown");

var _php_execute_script = Module["_php_execute_script"] = createExportWrapper("php_execute_script");

var _virtual_chdir_file = Module["_virtual_chdir_file"] = createExportWrapper("virtual_chdir_file");

var _zend_stream_init_filename = Module["_zend_stream_init_filename"] = createExportWrapper("zend_stream_init_filename");

var _zend_execute_scripts = Module["_zend_execute_scripts"] = createExportWrapper("zend_execute_scripts");

var _php_execute_simple_script = Module["_php_execute_simple_script"] = createExportWrapper("php_execute_simple_script");

var _php_handle_aborted_connection = Module["_php_handle_aborted_connection"] = createExportWrapper("php_handle_aborted_connection");

var _php_output_set_status = Module["_php_output_set_status"] = createExportWrapper("php_output_set_status");

var _php_handle_auth_data = Module["_php_handle_auth_data"] = createExportWrapper("php_handle_auth_data");

var _php_lint_script = Module["_php_lint_script"] = createExportWrapper("php_lint_script");

var _zend_ini_parse_uquantity_warn = Module["_zend_ini_parse_uquantity_warn"] = createExportWrapper("zend_ini_parse_uquantity_warn");

var _php_register_internal_extensions = Module["_php_register_internal_extensions"] = createExportWrapper("php_register_internal_extensions");

var _zend_ini_color_displayer_cb = Module["_zend_ini_color_displayer_cb"] = createExportWrapper("zend_ini_color_displayer_cb");

var _OnUpdateBaseDir = Module["_OnUpdateBaseDir"] = createExportWrapper("OnUpdateBaseDir");

var _ap_php_conv_10 = Module["_ap_php_conv_10"] = createExportWrapper("ap_php_conv_10");

var _ap_php_conv_p2 = Module["_ap_php_conv_p2"] = createExportWrapper("ap_php_conv_p2");

var _ap_php_vslprintf = Module["_ap_php_vslprintf"] = createExportWrapper("ap_php_vslprintf");

var _ap_php_vsnprintf = Module["_ap_php_vsnprintf"] = createExportWrapper("ap_php_vsnprintf");

var _ap_php_vasprintf = Module["_ap_php_vasprintf"] = createExportWrapper("ap_php_vasprintf");

var _ap_php_asprintf = Module["_ap_php_asprintf"] = createExportWrapper("ap_php_asprintf");

var _vasprintf = Module["_vasprintf"] = createExportWrapper("vasprintf");

var _zend_dtoa = Module["_zend_dtoa"] = createExportWrapper("zend_dtoa");

var _zend_freedtoa = Module["_zend_freedtoa"] = createExportWrapper("zend_freedtoa");

var _isascii = Module["_isascii"] = createExportWrapper("isascii");

var ___trunctfdf2 = Module["___trunctfdf2"] = createExportWrapper("__trunctfdf2");

var __smart_string_alloc_persistent = Module["__smart_string_alloc_persistent"] = createExportWrapper("_smart_string_alloc_persistent");

var __smart_string_alloc = Module["__smart_string_alloc"] = createExportWrapper("_smart_string_alloc");

var _strnlen = Module["_strnlen"] = createExportWrapper("strnlen");

var _php_check_specific_open_basedir = Module["_php_check_specific_open_basedir"] = createExportWrapper("php_check_specific_open_basedir");

var _php_fopen_primary_script = Module["_php_fopen_primary_script"] = createExportWrapper("php_fopen_primary_script");

var _zend_stream_open = Module["_zend_stream_open"] = createExportWrapper("zend_stream_open");

var _zend_get_executed_filename_ex = Module["_zend_get_executed_filename_ex"] = createExportWrapper("zend_get_executed_filename_ex");

var _php_fopen_with_path = Module["_php_fopen_with_path"] = createExportWrapper("php_fopen_with_path");

var _php_ini_builder_prepend = Module["_php_ini_builder_prepend"] = createExportWrapper("php_ini_builder_prepend");

var _php_ini_builder_unquoted = Module["_php_ini_builder_unquoted"] = createExportWrapper("php_ini_builder_unquoted");

var _php_ini_builder_quoted = Module["_php_ini_builder_quoted"] = createExportWrapper("php_ini_builder_quoted");

var _php_ini_builder_define = Module["_php_ini_builder_define"] = createExportWrapper("php_ini_builder_define");

var _config_zval_dtor = Module["_config_zval_dtor"] = createExportWrapper("config_zval_dtor");

var _free_estring = Module["_free_estring"] = createExportWrapper("free_estring");

var _strlcat = Module["_strlcat"] = createExportWrapper("strlcat");

var _alphasort = Module["_alphasort"] = createExportWrapper("alphasort");

var _scandir = Module["_scandir"] = createExportWrapper("scandir");

var _zend_load_extension = Module["_zend_load_extension"] = createExportWrapper("zend_load_extension");

var _zend_load_extension_handle = Module["_zend_load_extension_handle"] = createExportWrapper("zend_load_extension_handle");

var _php_parse_user_ini_file = Module["_php_parse_user_ini_file"] = createExportWrapper("php_parse_user_ini_file");

var _php_ini_activate_config = Module["_php_ini_activate_config"] = createExportWrapper("php_ini_activate_config");

var _php_ini_has_per_dir_config = Module["_php_ini_has_per_dir_config"] = createExportWrapper("php_ini_has_per_dir_config");

var _php_ini_activate_per_dir_config = Module["_php_ini_activate_per_dir_config"] = createExportWrapper("php_ini_activate_per_dir_config");

var _php_ini_has_per_host_config = Module["_php_ini_has_per_host_config"] = createExportWrapper("php_ini_has_per_host_config");

var _php_ini_activate_per_host_config = Module["_php_ini_activate_per_host_config"] = createExportWrapper("php_ini_activate_per_host_config");

var _cfg_get_double = Module["_cfg_get_double"] = createExportWrapper("cfg_get_double");

var _php_ini_get_configuration_hash = Module["_php_ini_get_configuration_hash"] = createExportWrapper("php_ini_get_configuration_hash");

var _sapi_startup = Module["_sapi_startup"] = createExportWrapper("sapi_startup");

var _sapi_shutdown = Module["_sapi_shutdown"] = createExportWrapper("sapi_shutdown");

var _sapi_get_default_content_type = Module["_sapi_get_default_content_type"] = createExportWrapper("sapi_get_default_content_type");

var _sapi_get_default_content_type_header = Module["_sapi_get_default_content_type_header"] = createExportWrapper("sapi_get_default_content_type_header");

var _sapi_apply_default_charset = Module["_sapi_apply_default_charset"] = createExportWrapper("sapi_apply_default_charset");

var _sapi_activate_headers_only = Module["_sapi_activate_headers_only"] = createExportWrapper("sapi_activate_headers_only");

var _destroy_uploaded_files_hash = Module["_destroy_uploaded_files_hash"] = createExportWrapper("destroy_uploaded_files_hash");

var _sapi_register_post_entry = Module["_sapi_register_post_entry"] = createExportWrapper("sapi_register_post_entry");

var _sapi_register_default_post_reader = Module["_sapi_register_default_post_reader"] = createExportWrapper("sapi_register_default_post_reader");

var _sapi_get_fd = Module["_sapi_get_fd"] = createExportWrapper("sapi_get_fd");

var _sapi_force_http_10 = Module["_sapi_force_http_10"] = createExportWrapper("sapi_force_http_10");

var _sapi_get_target_uid = Module["_sapi_get_target_uid"] = createExportWrapper("sapi_get_target_uid");

var _sapi_get_target_gid = Module["_sapi_get_target_gid"] = createExportWrapper("sapi_get_target_gid");

var _sapi_terminate_process = Module["_sapi_terminate_process"] = createExportWrapper("sapi_terminate_process");

var _sapi_add_request_header = Module["_sapi_add_request_header"] = createExportWrapper("sapi_add_request_header");

var _zend_multibyte_get_internal_encoding = Module["_zend_multibyte_get_internal_encoding"] = createExportWrapper("zend_multibyte_get_internal_encoding");

var _zend_multibyte_encoding_converter = Module["_zend_multibyte_encoding_converter"] = createExportWrapper("zend_multibyte_encoding_converter");

var _zend_multibyte_encoding_detector = Module["_zend_multibyte_encoding_detector"] = createExportWrapper("zend_multibyte_encoding_detector");

var _zend_hash_str_add_empty_element = Module["_zend_hash_str_add_empty_element"] = createExportWrapper("zend_hash_str_add_empty_element");

var _php_default_post_reader = Module["_php_default_post_reader"] = createExportWrapper("php_default_post_reader");

var _php_default_input_filter = Module["_php_default_input_filter"] = createExportWrapper("php_default_input_filter");

var _php_register_variable = Module["_php_register_variable"] = createExportWrapper("php_register_variable");

var _zend_hash_str_update_ind = Module["_zend_hash_str_update_ind"] = createExportWrapper("zend_hash_str_update_ind");

var _php_register_known_variable = Module["_php_register_known_variable"] = createExportWrapper("php_register_known_variable");

var _php_build_argv = Module["_php_build_argv"] = createExportWrapper("php_build_argv");

var _zend_activate_auto_globals = Module["_zend_activate_auto_globals"] = createExportWrapper("zend_activate_auto_globals");

var _php_remove_tick_function = Module["_php_remove_tick_function"] = createExportWrapper("php_remove_tick_function");

var _php_network_freeaddresses = Module["_php_network_freeaddresses"] = createExportWrapper("php_network_freeaddresses");

var _php_network_getaddresses = Module["_php_network_getaddresses"] = createExportWrapper("php_network_getaddresses");

var _socket = Module["_socket"] = createExportWrapper("socket");

var _gai_strerror = Module["_gai_strerror"] = createExportWrapper("gai_strerror");

var _freeaddrinfo = Module["_freeaddrinfo"] = createExportWrapper("freeaddrinfo");

var _php_network_connect_socket = Module["_php_network_connect_socket"] = createExportWrapper("php_network_connect_socket");

var _connect = Module["_connect"] = createExportWrapper("connect");

var _getsockopt = Module["_getsockopt"] = createExportWrapper("getsockopt");

var _poll = Module["_poll"] = createExportWrapper("poll");

var _php_network_bind_socket_to_local_addr = Module["_php_network_bind_socket_to_local_addr"] = createExportWrapper("php_network_bind_socket_to_local_addr");

var _setsockopt = Module["_setsockopt"] = createExportWrapper("setsockopt");

var _bind = Module["_bind"] = createExportWrapper("bind");

var _php_network_populate_name_from_sockaddr = Module["_php_network_populate_name_from_sockaddr"] = createExportWrapper("php_network_populate_name_from_sockaddr");

var _php_network_get_peer_name = Module["_php_network_get_peer_name"] = createExportWrapper("php_network_get_peer_name");

var _getpeername = Module["_getpeername"] = createExportWrapper("getpeername");

var _php_network_get_sock_name = Module["_php_network_get_sock_name"] = createExportWrapper("php_network_get_sock_name");

var _getsockname = Module["_getsockname"] = createExportWrapper("getsockname");

var _php_network_accept_incoming = Module["_php_network_accept_incoming"] = createExportWrapper("php_network_accept_incoming");

var _accept = Module["_accept"] = createExportWrapper("accept");

var _php_network_connect_socket_to_host = Module["_php_network_connect_socket_to_host"] = createExportWrapper("php_network_connect_socket_to_host");

var _php_any_addr = Module["_php_any_addr"] = createExportWrapper("php_any_addr");

var _php_sockaddr_size = Module["_php_sockaddr_size"] = createExportWrapper("php_sockaddr_size");

var _php_set_sock_blocking = Module["_php_set_sock_blocking"] = createExportWrapper("php_set_sock_blocking");

var _mkstemp = Module["_mkstemp"] = createExportWrapper("mkstemp");

var _php_open_temporary_fd = Module["_php_open_temporary_fd"] = createExportWrapper("php_open_temporary_fd");

var _php_open_temporary_file = Module["_php_open_temporary_file"] = createExportWrapper("php_open_temporary_file");

var _fdopen = Module["_fdopen"] = createExportWrapper("fdopen");

var _php_odbc_connstr_is_quoted = Module["_php_odbc_connstr_is_quoted"] = createExportWrapper("php_odbc_connstr_is_quoted");

var _php_odbc_connstr_should_quote = Module["_php_odbc_connstr_should_quote"] = createExportWrapper("php_odbc_connstr_should_quote");

var _php_odbc_connstr_estimate_quote_length = Module["_php_odbc_connstr_estimate_quote_length"] = createExportWrapper("php_odbc_connstr_estimate_quote_length");

var _php_odbc_connstr_quote = Module["_php_odbc_connstr_quote"] = createExportWrapper("php_odbc_connstr_quote");

var _fwrite = Module["_fwrite"] = createExportWrapper("fwrite");

var _zend_stack_init = Module["_zend_stack_init"] = createExportWrapper("zend_stack_init");

var _zend_stack_top = Module["_zend_stack_top"] = createExportWrapper("zend_stack_top");

var _php_output_handler_free = Module["_php_output_handler_free"] = createExportWrapper("php_output_handler_free");

var _zend_stack_del_top = Module["_zend_stack_del_top"] = createExportWrapper("zend_stack_del_top");

var _zend_stack_destroy = Module["_zend_stack_destroy"] = createExportWrapper("zend_stack_destroy");

var _zend_is_compiling = Module["_zend_is_compiling"] = createExportWrapper("zend_is_compiling");

var _zend_get_compiled_filename = Module["_zend_get_compiled_filename"] = createExportWrapper("zend_get_compiled_filename");

var _zend_get_compiled_lineno = Module["_zend_get_compiled_lineno"] = createExportWrapper("zend_get_compiled_lineno");

var _php_output_handler_dtor = Module["_php_output_handler_dtor"] = createExportWrapper("php_output_handler_dtor");

var _php_output_write_unbuffered = Module["_php_output_write_unbuffered"] = createExportWrapper("php_output_write_unbuffered");

var _zend_stack_count = Module["_zend_stack_count"] = createExportWrapper("zend_stack_count");

var _zend_stack_apply_with_argument = Module["_zend_stack_apply_with_argument"] = createExportWrapper("zend_stack_apply_with_argument");

var _php_output_flush = Module["_php_output_flush"] = createExportWrapper("php_output_flush");

var _zend_stack_push = Module["_zend_stack_push"] = createExportWrapper("zend_stack_push");

var _zend_fcall_info_argn = Module["_zend_fcall_info_argn"] = createExportWrapper("zend_fcall_info_argn");

var _php_output_flush_all = Module["_php_output_flush_all"] = createExportWrapper("php_output_flush_all");

var _php_output_clean = Module["_php_output_clean"] = createExportWrapper("php_output_clean");

var _php_output_clean_all = Module["_php_output_clean_all"] = createExportWrapper("php_output_clean_all");

var _php_output_get_length = Module["_php_output_get_length"] = createExportWrapper("php_output_get_length");

var _php_output_get_active_handler = Module["_php_output_get_active_handler"] = createExportWrapper("php_output_get_active_handler");

var _php_output_start_devnull = Module["_php_output_start_devnull"] = createExportWrapper("php_output_start_devnull");

var _php_output_handler_create_user = Module["_php_output_handler_create_user"] = createExportWrapper("php_output_handler_create_user");

var _php_output_handler_alias = Module["_php_output_handler_alias"] = createExportWrapper("php_output_handler_alias");

var _php_output_handler_set_context = Module["_php_output_handler_set_context"] = createExportWrapper("php_output_handler_set_context");

var _zend_stack_base = Module["_zend_stack_base"] = createExportWrapper("zend_stack_base");

var _php_output_handler_reverse_conflict_register = Module["_php_output_handler_reverse_conflict_register"] = createExportWrapper("php_output_handler_reverse_conflict_register");

var _syslog = Module["_syslog"] = createExportWrapper("syslog");

var _openlog = Module["_openlog"] = createExportWrapper("openlog");

var _closelog = Module["_closelog"] = createExportWrapper("closelog");

var _zend_vstrpprintf = Module["_zend_vstrpprintf"] = createExportWrapper("zend_vstrpprintf");

var _php_stream_get_url_stream_wrappers_hash_global = Module["_php_stream_get_url_stream_wrappers_hash_global"] = createExportWrapper("php_stream_get_url_stream_wrappers_hash_global");

var _php_stream_encloses = Module["_php_stream_encloses"] = createExportWrapper("php_stream_encloses");

var _php_stream_from_persistent_id = Module["_php_stream_from_persistent_id"] = createExportWrapper("php_stream_from_persistent_id");

var __php_stream_free_enclosed = Module["__php_stream_free_enclosed"] = createExportWrapper("_php_stream_free_enclosed");

var __php_stream_fill_read_buffer = Module["__php_stream_fill_read_buffer"] = createExportWrapper("_php_stream_fill_read_buffer");

var __php_stream_putc = Module["__php_stream_putc"] = createExportWrapper("_php_stream_putc");

var __php_stream_puts = Module["__php_stream_puts"] = createExportWrapper("_php_stream_puts");

var _fflush = Module["_fflush"] = createExportWrapper("fflush");

var __php_stream_mmap_range = Module["__php_stream_mmap_range"] = createExportWrapper("_php_stream_mmap_range");

var __php_stream_mmap_unmap_ex = Module["__php_stream_mmap_unmap_ex"] = createExportWrapper("_php_stream_mmap_unmap_ex");

var __php_stream_mmap_unmap = Module["__php_stream_mmap_unmap"] = createExportWrapper("_php_stream_mmap_unmap");

var __php_stream_copy_to_stream = Module["__php_stream_copy_to_stream"] = createExportWrapper("_php_stream_copy_to_stream");

var _php_get_stream_filters_hash_global = Module["_php_get_stream_filters_hash_global"] = createExportWrapper("php_get_stream_filters_hash_global");

var _php_stream_generic_socket_factory = Module["_php_stream_generic_socket_factory"] = createExportWrapper("php_stream_generic_socket_factory");

var _php_stream_xport_register = Module["_php_stream_xport_register"] = createExportWrapper("php_stream_xport_register");

var _php_register_url_stream_wrapper_volatile = Module["_php_register_url_stream_wrapper_volatile"] = createExportWrapper("php_register_url_stream_wrapper_volatile");

var _php_unregister_url_stream_wrapper_volatile = Module["_php_unregister_url_stream_wrapper_volatile"] = createExportWrapper("php_unregister_url_stream_wrapper_volatile");

var _zend_llist_count = Module["_zend_llist_count"] = createExportWrapper("zend_llist_count");

var __php_stream_make_seekable = Module["__php_stream_make_seekable"] = createExportWrapper("_php_stream_make_seekable");

var _qsort = Module["_qsort"] = createExportWrapper("qsort");

var _fopencookie = Module["_fopencookie"] = createExportWrapper("fopencookie");

var _fseek = Module["_fseek"] = createExportWrapper("fseek");

var __php_stream_mode_to_str = Module["__php_stream_mode_to_str"] = createExportWrapper("_php_stream_mode_to_str");

var __php_stream_memory_get_buffer = Module["__php_stream_memory_get_buffer"] = createExportWrapper("_php_stream_memory_get_buffer");

var __php_stream_fopen_temporary_file = Module["__php_stream_fopen_temporary_file"] = createExportWrapper("_php_stream_fopen_temporary_file");

var __php_stream_temp_open = Module["__php_stream_temp_open"] = createExportWrapper("_php_stream_temp_open");

var _php_stream_bucket_split = Module["_php_stream_bucket_split"] = createExportWrapper("php_stream_bucket_split");

var __emalloc_56 = Module["__emalloc_56"] = createExportWrapper("_emalloc_56");

var __php_stream_filter_prepend = Module["__php_stream_filter_prepend"] = createExportWrapper("_php_stream_filter_prepend");

var _php_stream_parse_fopen_modes = Module["_php_stream_parse_fopen_modes"] = createExportWrapper("php_stream_parse_fopen_modes");

var _ftell = Module["_ftell"] = createExportWrapper("ftell");

var _fread = Module["_fread"] = createExportWrapper("fread");

var _feof = Module["_feof"] = createExportWrapper("feof");

var _munmap = Module["_munmap"] = createExportWrapper("munmap");

var _setvbuf = Module["_setvbuf"] = createExportWrapper("setvbuf");

var _mmap = Module["_mmap"] = createExportWrapper("mmap");

var __php_stream_fopen = Module["__php_stream_fopen"] = createExportWrapper("_php_stream_fopen");

var __php_stream_fopen_with_path = Module["__php_stream_fopen_with_path"] = createExportWrapper("_php_stream_fopen_with_path");

var _fdatasync = Module["_fdatasync"] = createExportWrapper("fdatasync");

var _fsync = Module["_fsync"] = createExportWrapper("fsync");

var _rmdir = Module["_rmdir"] = createExportWrapper("rmdir");

var _rewinddir = Module["_rewinddir"] = createExportWrapper("rewinddir");

var _add_property_resource_ex = Module["_add_property_resource_ex"] = createExportWrapper("add_property_resource_ex");

var _php_stream_xport_unregister = Module["_php_stream_xport_unregister"] = createExportWrapper("php_stream_xport_unregister");

var _php_stream_xport_connect = Module["_php_stream_xport_connect"] = createExportWrapper("php_stream_xport_connect");

var _php_stream_xport_bind = Module["_php_stream_xport_bind"] = createExportWrapper("php_stream_xport_bind");

var _php_stream_xport_listen = Module["_php_stream_xport_listen"] = createExportWrapper("php_stream_xport_listen");

var _send = Module["_send"] = createExportWrapper("send");

var _recv = Module["_recv"] = createExportWrapper("recv");

var _listen = Module["_listen"] = createExportWrapper("listen");

var _shutdown = Module["_shutdown"] = createExportWrapper("shutdown");

var _sendto = Module["_sendto"] = createExportWrapper("sendto");

var _recvfrom = Module["_recvfrom"] = createExportWrapper("recvfrom");

var __php_glob_stream_get_pattern = Module["__php_glob_stream_get_pattern"] = createExportWrapper("_php_glob_stream_get_pattern");

var _zend_lex_tstring = Module["_zend_lex_tstring"] = createExportWrapper("zend_lex_tstring");

var _zend_ast_create_zval = Module["_zend_ast_create_zval"] = createExportWrapper("zend_ast_create_zval");

var _zend_ast_list_add = Module["_zend_ast_list_add"] = createExportWrapper("zend_ast_list_add");

var _zend_ast_create_list_0 = Module["_zend_ast_create_list_0"] = createExportWrapper("zend_ast_create_list_0");

var _zend_ast_create_2 = Module["_zend_ast_create_2"] = createExportWrapper("zend_ast_create_2");

var _zend_ast_create_list_1 = Module["_zend_ast_create_list_1"] = createExportWrapper("zend_ast_create_list_1");

var _zend_get_scanned_file_offset = Module["_zend_get_scanned_file_offset"] = createExportWrapper("zend_get_scanned_file_offset");

var _zend_ast_create_zval_from_long = Module["_zend_ast_create_zval_from_long"] = createExportWrapper("zend_ast_create_zval_from_long");

var _zend_ast_create_1 = Module["_zend_ast_create_1"] = createExportWrapper("zend_ast_create_1");

var _zend_ast_create_4 = Module["_zend_ast_create_4"] = createExportWrapper("zend_ast_create_4");

var _zend_ast_create_3 = Module["_zend_ast_create_3"] = createExportWrapper("zend_ast_create_3");

var _zend_ast_create_decl = Module["_zend_ast_create_decl"] = createExportWrapper("zend_ast_create_decl");

var _zend_ast_create_zval_from_str = Module["_zend_ast_create_zval_from_str"] = createExportWrapper("zend_ast_create_zval_from_str");

var _zend_ast_create_5 = Module["_zend_ast_create_5"] = createExportWrapper("zend_ast_create_5");

var _zend_ast_create_0 = Module["_zend_ast_create_0"] = createExportWrapper("zend_ast_create_0");

var _zend_ast_create_list_2 = Module["_zend_ast_create_list_2"] = createExportWrapper("zend_ast_create_list_2");

var _zend_ast_create_zval_ex = Module["_zend_ast_create_zval_ex"] = createExportWrapper("zend_ast_create_zval_ex");

var _zend_ast_create_class_const_or_name = Module["_zend_ast_create_class_const_or_name"] = createExportWrapper("zend_ast_create_class_const_or_name");

var _zend_ptr_stack_init = Module["_zend_ptr_stack_init"] = createExportWrapper("zend_ptr_stack_init");

var _zend_ptr_stack_clean = Module["_zend_ptr_stack_clean"] = createExportWrapper("zend_ptr_stack_clean");

var _zend_ptr_stack_destroy = Module["_zend_ptr_stack_destroy"] = createExportWrapper("zend_ptr_stack_destroy");

var _zend_restore_compiled_filename = Module["_zend_restore_compiled_filename"] = createExportWrapper("zend_restore_compiled_filename");

var _zend_multibyte_set_filter = Module["_zend_multibyte_set_filter"] = createExportWrapper("zend_multibyte_set_filter");

var _zend_multibyte_check_lexer_compatibility = Module["_zend_multibyte_check_lexer_compatibility"] = createExportWrapper("zend_multibyte_check_lexer_compatibility");

var _zend_stream_fixup = Module["_zend_stream_fixup"] = createExportWrapper("zend_stream_fixup");

var _zend_multibyte_get_encoding_name = Module["_zend_multibyte_get_encoding_name"] = createExportWrapper("zend_multibyte_get_encoding_name");

var _zend_set_compiled_filename = Module["_zend_set_compiled_filename"] = createExportWrapper("zend_set_compiled_filename");

var _compile_file = Module["_compile_file"] = createExportWrapper("compile_file");

var _zend_message_dispatcher = Module["_zend_message_dispatcher"] = createExportWrapper("zend_message_dispatcher");

var _init_op_array = Module["_init_op_array"] = createExportWrapper("init_op_array");

var _pass_two = Module["_pass_two"] = createExportWrapper("pass_two");

var _zend_compile_string_to_ast = Module["_zend_compile_string_to_ast"] = createExportWrapper("zend_compile_string_to_ast");

var _compile_filename = Module["_compile_filename"] = createExportWrapper("compile_filename");

var _compile_string = Module["_compile_string"] = createExportWrapper("compile_string");

var _zend_highlight = Module["_zend_highlight"] = createExportWrapper("zend_highlight");

var _zend_multibyte_yyinput_again = Module["_zend_multibyte_yyinput_again"] = createExportWrapper("zend_multibyte_yyinput_again");

var _zend_stack_is_empty = Module["_zend_stack_is_empty"] = createExportWrapper("zend_stack_is_empty");

var _zend_ptr_stack_reverse_apply = Module["_zend_ptr_stack_reverse_apply"] = createExportWrapper("zend_ptr_stack_reverse_apply");

var _zend_exception_save = Module["_zend_exception_save"] = createExportWrapper("zend_exception_save");

var _zend_exception_restore = Module["_zend_exception_restore"] = createExportWrapper("zend_exception_restore");

var _zend_bin_strtod = Module["_zend_bin_strtod"] = createExportWrapper("zend_bin_strtod");

var _zend_oct_strtod = Module["_zend_oct_strtod"] = createExportWrapper("zend_oct_strtod");

var _zend_hex_strtod = Module["_zend_hex_strtod"] = createExportWrapper("zend_hex_strtod");

var _zend_ast_create_zval_with_lineno = Module["_zend_ast_create_zval_with_lineno"] = createExportWrapper("zend_ast_create_zval_with_lineno");

var _zend_get_configuration_directive = Module["_zend_get_configuration_directive"] = createExportWrapper("zend_get_configuration_directive");

var _zend_get_constant = Module["_zend_get_constant"] = createExportWrapper("zend_get_constant");

var _zend_mm_gc = Module["_zend_mm_gc"] = createExportWrapper("zend_mm_gc");

var _zend_mm_shutdown = Module["_zend_mm_shutdown"] = createExportWrapper("zend_mm_shutdown");

var __zend_mm_alloc = Module["__zend_mm_alloc"] = createExportWrapper("_zend_mm_alloc");

var __zend_mm_free = Module["__zend_mm_free"] = createExportWrapper("_zend_mm_free");

var __zend_mm_realloc = Module["__zend_mm_realloc"] = createExportWrapper("_zend_mm_realloc");

var __zend_mm_realloc2 = Module["__zend_mm_realloc2"] = createExportWrapper("_zend_mm_realloc2");

var __zend_mm_block_size = Module["__zend_mm_block_size"] = createExportWrapper("_zend_mm_block_size");

var _is_zend_ptr = Module["_is_zend_ptr"] = createExportWrapper("is_zend_ptr");

var __emalloc_112 = Module["__emalloc_112"] = createExportWrapper("_emalloc_112");

var __emalloc_192 = Module["__emalloc_192"] = createExportWrapper("_emalloc_192");

var __emalloc_224 = Module["__emalloc_224"] = createExportWrapper("_emalloc_224");

var __emalloc_320 = Module["__emalloc_320"] = createExportWrapper("_emalloc_320");

var __emalloc_384 = Module["__emalloc_384"] = createExportWrapper("_emalloc_384");

var __emalloc_448 = Module["__emalloc_448"] = createExportWrapper("_emalloc_448");

var __emalloc_512 = Module["__emalloc_512"] = createExportWrapper("_emalloc_512");

var __emalloc_640 = Module["__emalloc_640"] = createExportWrapper("_emalloc_640");

var __emalloc_768 = Module["__emalloc_768"] = createExportWrapper("_emalloc_768");

var __emalloc_896 = Module["__emalloc_896"] = createExportWrapper("_emalloc_896");

var __emalloc_1280 = Module["__emalloc_1280"] = createExportWrapper("_emalloc_1280");

var __emalloc_1536 = Module["__emalloc_1536"] = createExportWrapper("_emalloc_1536");

var __emalloc_1792 = Module["__emalloc_1792"] = createExportWrapper("_emalloc_1792");

var __emalloc_2048 = Module["__emalloc_2048"] = createExportWrapper("_emalloc_2048");

var __emalloc_2560 = Module["__emalloc_2560"] = createExportWrapper("_emalloc_2560");

var __emalloc_3072 = Module["__emalloc_3072"] = createExportWrapper("_emalloc_3072");

var __emalloc_huge = Module["__emalloc_huge"] = createExportWrapper("_emalloc_huge");

var __efree_8 = Module["__efree_8"] = createExportWrapper("_efree_8");

var __efree_16 = Module["__efree_16"] = createExportWrapper("_efree_16");

var __efree_24 = Module["__efree_24"] = createExportWrapper("_efree_24");

var __efree_40 = Module["__efree_40"] = createExportWrapper("_efree_40");

var __efree_56 = Module["__efree_56"] = createExportWrapper("_efree_56");

var __efree_64 = Module["__efree_64"] = createExportWrapper("_efree_64");

var __efree_80 = Module["__efree_80"] = createExportWrapper("_efree_80");

var __efree_96 = Module["__efree_96"] = createExportWrapper("_efree_96");

var __efree_112 = Module["__efree_112"] = createExportWrapper("_efree_112");

var __efree_128 = Module["__efree_128"] = createExportWrapper("_efree_128");

var __efree_160 = Module["__efree_160"] = createExportWrapper("_efree_160");

var __efree_192 = Module["__efree_192"] = createExportWrapper("_efree_192");

var __efree_224 = Module["__efree_224"] = createExportWrapper("_efree_224");

var __efree_256 = Module["__efree_256"] = createExportWrapper("_efree_256");

var __efree_320 = Module["__efree_320"] = createExportWrapper("_efree_320");

var __efree_384 = Module["__efree_384"] = createExportWrapper("_efree_384");

var __efree_448 = Module["__efree_448"] = createExportWrapper("_efree_448");

var __efree_512 = Module["__efree_512"] = createExportWrapper("_efree_512");

var __efree_640 = Module["__efree_640"] = createExportWrapper("_efree_640");

var __efree_768 = Module["__efree_768"] = createExportWrapper("_efree_768");

var __efree_896 = Module["__efree_896"] = createExportWrapper("_efree_896");

var __efree_1024 = Module["__efree_1024"] = createExportWrapper("_efree_1024");

var __efree_1280 = Module["__efree_1280"] = createExportWrapper("_efree_1280");

var __efree_1536 = Module["__efree_1536"] = createExportWrapper("_efree_1536");

var __efree_1792 = Module["__efree_1792"] = createExportWrapper("_efree_1792");

var __efree_2048 = Module["__efree_2048"] = createExportWrapper("_efree_2048");

var __efree_2560 = Module["__efree_2560"] = createExportWrapper("_efree_2560");

var __efree_3072 = Module["__efree_3072"] = createExportWrapper("_efree_3072");

var __efree_huge = Module["__efree_huge"] = createExportWrapper("_efree_huge");

var __erealloc2 = Module["__erealloc2"] = createExportWrapper("_erealloc2");

var __zend_mem_block_size = Module["__zend_mem_block_size"] = createExportWrapper("_zend_mem_block_size");

var _start_memory_manager = Module["_start_memory_manager"] = createExportWrapper("start_memory_manager");

var _zend_mm_set_heap = Module["_zend_mm_set_heap"] = createExportWrapper("zend_mm_set_heap");

var _zend_mm_get_heap = Module["_zend_mm_get_heap"] = createExportWrapper("zend_mm_get_heap");

var _zend_mm_is_custom_heap = Module["_zend_mm_is_custom_heap"] = createExportWrapper("zend_mm_is_custom_heap");

var _zend_mm_set_custom_handlers = Module["_zend_mm_set_custom_handlers"] = createExportWrapper("zend_mm_set_custom_handlers");

var _zend_mm_get_custom_handlers = Module["_zend_mm_get_custom_handlers"] = createExportWrapper("zend_mm_get_custom_handlers");

var _zend_mm_get_storage = Module["_zend_mm_get_storage"] = createExportWrapper("zend_mm_get_storage");

var _zend_mm_startup = Module["_zend_mm_startup"] = createExportWrapper("zend_mm_startup");

var _zend_mm_startup_ex = Module["_zend_mm_startup_ex"] = createExportWrapper("zend_mm_startup_ex");

var _madvise = Module["_madvise"] = createExportWrapper("madvise");

var _zend_init_rsrc_list = Module["_zend_init_rsrc_list"] = createExportWrapper("zend_init_rsrc_list");

var _zend_create_member_string = Module["_zend_create_member_string"] = createExportWrapper("zend_create_member_string");

var _zend_hash_str_find_ptr_lc = Module["_zend_hash_str_find_ptr_lc"] = createExportWrapper("zend_hash_str_find_ptr_lc");

var _zend_hash_find_ptr_lc = Module["_zend_hash_find_ptr_lc"] = createExportWrapper("zend_hash_find_ptr_lc");

var _function_add_ref = Module["_function_add_ref"] = createExportWrapper("function_add_ref");

var _do_bind_function = Module["_do_bind_function"] = createExportWrapper("do_bind_function");

var __zend_observer_function_declared_notify = Module["__zend_observer_function_declared_notify"] = createExportWrapper("_zend_observer_function_declared_notify");

var _zend_bind_class_in_slot = Module["_zend_bind_class_in_slot"] = createExportWrapper("zend_bind_class_in_slot");

var _zend_hash_set_bucket_key = Module["_zend_hash_set_bucket_key"] = createExportWrapper("zend_hash_set_bucket_key");

var _zend_get_object_type_case = Module["_zend_get_object_type_case"] = createExportWrapper("zend_get_object_type_case");

var _zend_do_link_class = Module["_zend_do_link_class"] = createExportWrapper("zend_do_link_class");

var __zend_observer_class_linked_notify = Module["__zend_observer_class_linked_notify"] = createExportWrapper("_zend_observer_class_linked_notify");

var _do_bind_class = Module["_do_bind_class"] = createExportWrapper("do_bind_class");

var _zend_is_auto_global_str = Module["_zend_is_auto_global_str"] = createExportWrapper("zend_is_auto_global_str");

var _zend_initialize_class_data = Module["_zend_initialize_class_data"] = createExportWrapper("zend_initialize_class_data");

var _zend_function_dtor = Module["_zend_function_dtor"] = createExportWrapper("zend_function_dtor");

var _zend_get_compiled_variable_name = Module["_zend_get_compiled_variable_name"] = createExportWrapper("zend_get_compiled_variable_name");

var _zend_is_smart_branch = Module["_zend_is_smart_branch"] = createExportWrapper("zend_is_smart_branch");

var _zend_get_call_op = Module["_zend_get_call_op"] = createExportWrapper("zend_get_call_op");

var _execute_ex = Module["_execute_ex"] = createExportWrapper("execute_ex");

var _zend_vm_set_opcode_handler = Module["_zend_vm_set_opcode_handler"] = createExportWrapper("zend_vm_set_opcode_handler");

var _zend_multibyte_fetch_encoding = Module["_zend_multibyte_fetch_encoding"] = createExportWrapper("zend_multibyte_fetch_encoding");

var _zend_is_op_long_compatible = Module["_zend_is_op_long_compatible"] = createExportWrapper("zend_is_op_long_compatible");

var _zend_binary_op_produces_error = Module["_zend_binary_op_produces_error"] = createExportWrapper("zend_binary_op_produces_error");

var _zend_unary_op_produces_error = Module["_zend_unary_op_produces_error"] = createExportWrapper("zend_unary_op_produces_error");

var _zend_ast_copy = Module["_zend_ast_copy"] = createExportWrapper("zend_ast_copy");

var _zend_ast_apply = Module["_zend_ast_apply"] = createExportWrapper("zend_ast_apply");

var _zend_check_magic_method_implementation = Module["_zend_check_magic_method_implementation"] = createExportWrapper("zend_check_magic_method_implementation");

var _zend_alloc_ce_cache = Module["_zend_alloc_ce_cache"] = createExportWrapper("zend_alloc_ce_cache");

var _zend_map_ptr_new = Module["_zend_map_ptr_new"] = createExportWrapper("zend_map_ptr_new");

var _zend_try_early_bind = Module["_zend_try_early_bind"] = createExportWrapper("zend_try_early_bind");

var _zend_ast_create_constant = Module["_zend_ast_create_constant"] = createExportWrapper("zend_ast_create_constant");

var __zend_get_special_const = Module["__zend_get_special_const"] = createExportWrapper("_zend_get_special_const");

var _zend_add_magic_method = Module["_zend_add_magic_method"] = createExportWrapper("zend_add_magic_method");

var _zend_internal_attribute_get = Module["_zend_internal_attribute_get"] = createExportWrapper("zend_internal_attribute_get");

var _zend_get_type_by_const = Module["_zend_get_type_by_const"] = createExportWrapper("zend_get_type_by_const");

var _zend_type_release = Module["_zend_type_release"] = createExportWrapper("zend_type_release");

var _zend_ast_create_znode = Module["_zend_ast_create_znode"] = createExportWrapper("zend_ast_create_znode");

var _zend_check_protected = Module["_zend_check_protected"] = createExportWrapper("zend_check_protected");

var _concat_function = Module["_concat_function"] = createExportWrapper("concat_function");

var _get_binary_op = Module["_get_binary_op"] = createExportWrapper("get_binary_op");

var _get_unary_op = Module["_get_unary_op"] = createExportWrapper("get_unary_op");

var _zval_internal_ptr_dtor = Module["_zval_internal_ptr_dtor"] = createExportWrapper("zval_internal_ptr_dtor");

var _zend_register_null_constant = Module["_zend_register_null_constant"] = createExportWrapper("zend_register_null_constant");

var _zend_register_constant = Module["_zend_register_constant"] = createExportWrapper("zend_register_constant");

var _zend_verify_const_access = Module["_zend_verify_const_access"] = createExportWrapper("zend_verify_const_access");

var _zend_get_class_constant_ex = Module["_zend_get_class_constant_ex"] = createExportWrapper("zend_get_class_constant_ex");

var _zend_init_fpu = Module["_zend_init_fpu"] = createExportWrapper("zend_init_fpu");

var _zend_vm_stack_init = Module["_zend_vm_stack_init"] = createExportWrapper("zend_vm_stack_init");

var _zend_objects_store_init = Module["_zend_objects_store_init"] = createExportWrapper("zend_objects_store_init");

var _zend_hash_reverse_apply = Module["_zend_hash_reverse_apply"] = createExportWrapper("zend_hash_reverse_apply");

var _zend_objects_store_call_destructors = Module["_zend_objects_store_call_destructors"] = createExportWrapper("zend_objects_store_call_destructors");

var _zend_shutdown_executor_values = Module["_zend_shutdown_executor_values"] = createExportWrapper("zend_shutdown_executor_values");

var _zend_hash_graceful_reverse_destroy = Module["_zend_hash_graceful_reverse_destroy"] = createExportWrapper("zend_hash_graceful_reverse_destroy");

var _zend_hash_discard = Module["_zend_hash_discard"] = createExportWrapper("zend_hash_discard");

var _zend_cleanup_internal_class_data = Module["_zend_cleanup_internal_class_data"] = createExportWrapper("zend_cleanup_internal_class_data");

var _zend_stack_clean = Module["_zend_stack_clean"] = createExportWrapper("zend_stack_clean");

var _zend_cleanup_mutable_class_data = Module["_zend_cleanup_mutable_class_data"] = createExportWrapper("zend_cleanup_mutable_class_data");

var _zend_objects_store_free_object_storage = Module["_zend_objects_store_free_object_storage"] = createExportWrapper("zend_objects_store_free_object_storage");

var _zend_vm_stack_destroy = Module["_zend_vm_stack_destroy"] = createExportWrapper("zend_vm_stack_destroy");

var _destroy_zend_class = Module["_destroy_zend_class"] = createExportWrapper("destroy_zend_class");

var _zend_objects_store_destroy = Module["_zend_objects_store_destroy"] = createExportWrapper("zend_objects_store_destroy");

var _zend_shutdown_fpu = Module["_zend_shutdown_fpu"] = createExportWrapper("zend_shutdown_fpu");

var _get_function_or_method_name = Module["_get_function_or_method_name"] = createExportWrapper("get_function_or_method_name");

var _get_active_function_arg_name = Module["_get_active_function_arg_name"] = createExportWrapper("get_active_function_arg_name");

var _get_function_arg_name = Module["_get_function_arg_name"] = createExportWrapper("get_function_arg_name");

var _zend_ast_evaluate = Module["_zend_ast_evaluate"] = createExportWrapper("zend_ast_evaluate");

var _zval_update_constant = Module["_zval_update_constant"] = createExportWrapper("zval_update_constant");

var _zend_get_callable_name_ex = Module["_zend_get_callable_name_ex"] = createExportWrapper("zend_get_callable_name_ex");

var _zend_deprecated_function = Module["_zend_deprecated_function"] = createExportWrapper("zend_deprecated_function");

var _zend_handle_undef_args = Module["_zend_handle_undef_args"] = createExportWrapper("zend_handle_undef_args");

var _zend_init_func_execute_data = Module["_zend_init_func_execute_data"] = createExportWrapper("zend_init_func_execute_data");

var _zend_observer_fcall_begin = Module["_zend_observer_fcall_begin"] = createExportWrapper("zend_observer_fcall_begin");

var _zend_observer_fcall_end = Module["_zend_observer_fcall_end"] = createExportWrapper("zend_observer_fcall_end");

var _zend_timeout = Module["_zend_timeout"] = createExportWrapper("zend_timeout");

var _zend_hash_index_add_empty_element = Module["_zend_hash_index_add_empty_element"] = createExportWrapper("zend_hash_index_add_empty_element");

var _zend_eval_stringl = Module["_zend_eval_stringl"] = createExportWrapper("zend_eval_stringl");

var _zend_destroy_static_vars = Module["_zend_destroy_static_vars"] = createExportWrapper("zend_destroy_static_vars");

var _zend_eval_string = Module["_zend_eval_string"] = createExportWrapper("zend_eval_string");

var _zend_eval_stringl_ex = Module["_zend_eval_stringl_ex"] = createExportWrapper("zend_eval_stringl_ex");

var _zend_eval_string_ex = Module["_zend_eval_string_ex"] = createExportWrapper("zend_eval_string_ex");

var _setitimer = Module["_setitimer"] = createExportWrapper("setitimer");

var _zend_signal = Module["_zend_signal"] = createExportWrapper("zend_signal");

var _zend_fetch_class_with_scope = Module["_zend_fetch_class_with_scope"] = createExportWrapper("zend_fetch_class_with_scope");

var _zend_hash_del_ind = Module["_zend_hash_del_ind"] = createExportWrapper("zend_hash_del_ind");

var _zend_attach_symbol_table = Module["_zend_attach_symbol_table"] = createExportWrapper("zend_attach_symbol_table");

var _zend_detach_symbol_table = Module["_zend_detach_symbol_table"] = createExportWrapper("zend_detach_symbol_table");

var _zend_set_local_var = Module["_zend_set_local_var"] = createExportWrapper("zend_set_local_var");

var _zend_hash_func = Module["_zend_hash_func"] = createExportWrapper("zend_hash_func");

var _zend_html_putc = Module["_zend_html_putc"] = createExportWrapper("zend_html_putc");

var _zend_llist_prepend_element = Module["_zend_llist_prepend_element"] = createExportWrapper("zend_llist_prepend_element");

var _zend_llist_remove_tail = Module["_zend_llist_remove_tail"] = createExportWrapper("zend_llist_remove_tail");

var _zend_llist_copy = Module["_zend_llist_copy"] = createExportWrapper("zend_llist_copy");

var _zend_llist_apply_with_del = Module["_zend_llist_apply_with_del"] = createExportWrapper("zend_llist_apply_with_del");

var _zend_llist_sort = Module["_zend_llist_sort"] = createExportWrapper("zend_llist_sort");

var _zend_llist_apply_with_arguments = Module["_zend_llist_apply_with_arguments"] = createExportWrapper("zend_llist_apply_with_arguments");

var _zend_llist_get_last_ex = Module["_zend_llist_get_last_ex"] = createExportWrapper("zend_llist_get_last_ex");

var _zend_llist_get_prev_ex = Module["_zend_llist_get_prev_ex"] = createExportWrapper("zend_llist_get_prev_ex");

var _zend_get_opcode_name = Module["_zend_get_opcode_name"] = createExportWrapper("zend_get_opcode_name");

var _zend_get_opcode_flags = Module["_zend_get_opcode_flags"] = createExportWrapper("zend_get_opcode_flags");

var _zend_get_opcode_id = Module["_zend_get_opcode_id"] = createExportWrapper("zend_get_opcode_id");

var _destroy_zend_function = Module["_destroy_zend_function"] = createExportWrapper("destroy_zend_function");

var _zend_recalc_live_ranges = Module["_zend_recalc_live_ranges"] = createExportWrapper("zend_recalc_live_ranges");

var _bitwise_not_function = Module["_bitwise_not_function"] = createExportWrapper("bitwise_not_function");

var _boolean_not_function = Module["_boolean_not_function"] = createExportWrapper("boolean_not_function");

var _sub_function = Module["_sub_function"] = createExportWrapper("sub_function");

var _mul_function = Module["_mul_function"] = createExportWrapper("mul_function");

var _div_function = Module["_div_function"] = createExportWrapper("div_function");

var _mod_function = Module["_mod_function"] = createExportWrapper("mod_function");

var _shift_left_function = Module["_shift_left_function"] = createExportWrapper("shift_left_function");

var _shift_right_function = Module["_shift_right_function"] = createExportWrapper("shift_right_function");

var _is_identical_function = Module["_is_identical_function"] = createExportWrapper("is_identical_function");

var _is_not_identical_function = Module["_is_not_identical_function"] = createExportWrapper("is_not_identical_function");

var _is_equal_function = Module["_is_equal_function"] = createExportWrapper("is_equal_function");

var _is_not_equal_function = Module["_is_not_equal_function"] = createExportWrapper("is_not_equal_function");

var _compare_function = Module["_compare_function"] = createExportWrapper("compare_function");

var _bitwise_or_function = Module["_bitwise_or_function"] = createExportWrapper("bitwise_or_function");

var _bitwise_and_function = Module["_bitwise_and_function"] = createExportWrapper("bitwise_and_function");

var _bitwise_xor_function = Module["_bitwise_xor_function"] = createExportWrapper("bitwise_xor_function");

var _boolean_xor_function = Module["_boolean_xor_function"] = createExportWrapper("boolean_xor_function");

var _zend_atol = Module["_zend_atol"] = createExportWrapper("zend_atol");

var _zend_atoi = Module["_zend_atoi"] = createExportWrapper("zend_atoi");

var _zend_double_to_str = Module["_zend_double_to_str"] = createExportWrapper("zend_double_to_str");

var _zend_std_build_object_properties_array = Module["_zend_std_build_object_properties_array"] = createExportWrapper("zend_std_build_object_properties_array");

var _zend_symtable_to_proptable = Module["_zend_symtable_to_proptable"] = createExportWrapper("zend_symtable_to_proptable");

var _zend_error_unchecked = Module["_zend_error_unchecked"] = createExportWrapper("zend_error_unchecked");

var _zend_incompatible_string_to_long_error = Module["_zend_incompatible_string_to_long_error"] = createExportWrapper("zend_incompatible_string_to_long_error");

var _string_compare_function_ex = Module["_string_compare_function_ex"] = createExportWrapper("string_compare_function_ex");

var _zend_class_implements_interface = Module["_zend_class_implements_interface"] = createExportWrapper("zend_class_implements_interface");

var _increment_function = Module["_increment_function"] = createExportWrapper("increment_function");

var _decrement_function = Module["_decrement_function"] = createExportWrapper("decrement_function");

var ___ctype_get_mb_cur_max = Module["___ctype_get_mb_cur_max"] = createExportWrapper("__ctype_get_mb_cur_max");

var _zend_str_toupper_copy = Module["_zend_str_toupper_copy"] = createExportWrapper("zend_str_toupper_copy");

var _zend_str_toupper_dup = Module["_zend_str_toupper_dup"] = createExportWrapper("zend_str_toupper_dup");

var _zend_str_toupper_dup_ex = Module["_zend_str_toupper_dup_ex"] = createExportWrapper("zend_str_toupper_dup_ex");

var _zend_binary_zval_strncmp = Module["_zend_binary_zval_strncmp"] = createExportWrapper("zend_binary_zval_strncmp");

var _zend_u64_to_str = Module["_zend_u64_to_str"] = createExportWrapper("zend_u64_to_str");

var _zend_ptr_stack_init_ex = Module["_zend_ptr_stack_init_ex"] = createExportWrapper("zend_ptr_stack_init_ex");

var _zend_ptr_stack_n_push = Module["_zend_ptr_stack_n_push"] = createExportWrapper("zend_ptr_stack_n_push");

var _zend_ptr_stack_n_pop = Module["_zend_ptr_stack_n_pop"] = createExportWrapper("zend_ptr_stack_n_pop");

var _zend_ptr_stack_apply = Module["_zend_ptr_stack_apply"] = createExportWrapper("zend_ptr_stack_apply");

var _zend_ptr_stack_num_elements = Module["_zend_ptr_stack_num_elements"] = createExportWrapper("zend_ptr_stack_num_elements");

var _zend_stack_int_top = Module["_zend_stack_int_top"] = createExportWrapper("zend_stack_int_top");

var _zend_stack_apply = Module["_zend_stack_apply"] = createExportWrapper("zend_stack_apply");

var _zend_list_free = Module["_zend_list_free"] = createExportWrapper("zend_list_free");

var _zend_ast_ref_destroy = Module["_zend_ast_ref_destroy"] = createExportWrapper("zend_ast_ref_destroy");

var _zend_spprintf_unchecked = Module["_zend_spprintf_unchecked"] = createExportWrapper("zend_spprintf_unchecked");

var _zend_strpprintf_unchecked = Module["_zend_strpprintf_unchecked"] = createExportWrapper("zend_strpprintf_unchecked");

var _zend_make_printable_zval = Module["_zend_make_printable_zval"] = createExportWrapper("zend_make_printable_zval");

var _zend_print_zval = Module["_zend_print_zval"] = createExportWrapper("zend_print_zval");

var _zend_print_flat_zval_r = Module["_zend_print_flat_zval_r"] = createExportWrapper("zend_print_flat_zval_r");

var _virtual_cwd_startup = Module["_virtual_cwd_startup"] = createExportWrapper("virtual_cwd_startup");

var _zend_startup_strtod = Module["_zend_startup_strtod"] = createExportWrapper("zend_startup_strtod");

var _zend_gc_collect_cycles = Module["_zend_gc_collect_cycles"] = createExportWrapper("zend_gc_collect_cycles");

var _zend_interned_strings_init = Module["_zend_interned_strings_init"] = createExportWrapper("zend_interned_strings_init");

var _zend_ini_startup = Module["_zend_ini_startup"] = createExportWrapper("zend_ini_startup");

var _zend_destroy_modules = Module["_zend_destroy_modules"] = createExportWrapper("zend_destroy_modules");

var _virtual_cwd_shutdown = Module["_virtual_cwd_shutdown"] = createExportWrapper("virtual_cwd_shutdown");

var _zend_shutdown_strtod = Module["_zend_shutdown_strtod"] = createExportWrapper("zend_shutdown_strtod");

var _zend_output_debug_string = Module["_zend_output_debug_string"] = createExportWrapper("zend_output_debug_string");

var _gc_protect = Module["_gc_protect"] = createExportWrapper("gc_protect");

var _zend_get_page_size = Module["_zend_get_page_size"] = createExportWrapper("zend_get_page_size");

var _zend_append_version_info = Module["_zend_append_version_info"] = createExportWrapper("zend_append_version_info");

var _strncat = Module["_strncat"] = createExportWrapper("strncat");

var _zend_init_internal_run_time_cache = Module["_zend_init_internal_run_time_cache"] = createExportWrapper("zend_init_internal_run_time_cache");

var _zend_observer_activate = Module["_zend_observer_activate"] = createExportWrapper("zend_observer_activate");

var _zend_ini_deactivate = Module["_zend_ini_deactivate"] = createExportWrapper("zend_ini_deactivate");

var _zend_map_ptr_reset = Module["_zend_map_ptr_reset"] = createExportWrapper("zend_map_ptr_reset");

var _zend_error_zstr_at = Module["_zend_error_zstr_at"] = createExportWrapper("zend_error_zstr_at");

var __zend_observer_error_notify = Module["__zend_observer_error_notify"] = createExportWrapper("_zend_observer_error_notify");

var _zend_error_at = Module["_zend_error_at"] = createExportWrapper("zend_error_at");

var _zend_error_at_noreturn = Module["_zend_error_at_noreturn"] = createExportWrapper("zend_error_at_noreturn");

var _zend_strerror_noreturn = Module["_zend_strerror_noreturn"] = createExportWrapper("zend_strerror_noreturn");

var _strerror_r = Module["_strerror_r"] = createExportWrapper("strerror_r");

var _zend_begin_record_errors = Module["_zend_begin_record_errors"] = createExportWrapper("zend_begin_record_errors");

var _zend_emit_recorded_errors = Module["_zend_emit_recorded_errors"] = createExportWrapper("zend_emit_recorded_errors");

var _zend_free_recorded_errors = Module["_zend_free_recorded_errors"] = createExportWrapper("zend_free_recorded_errors");

var _zend_user_exception_handler = Module["_zend_user_exception_handler"] = createExportWrapper("zend_user_exception_handler");

var _zend_is_unwind_exit = Module["_zend_is_unwind_exit"] = createExportWrapper("zend_is_unwind_exit");

var _zend_map_ptr_extend = Module["_zend_map_ptr_extend"] = createExportWrapper("zend_map_ptr_extend");

var _gc_enable = Module["_gc_enable"] = createExportWrapper("gc_enable");

var _gc_enabled = Module["_gc_enabled"] = createExportWrapper("gc_enabled");

var _zend_multibyte_set_script_encoding_by_string = Module["_zend_multibyte_set_script_encoding_by_string"] = createExportWrapper("zend_multibyte_set_script_encoding_by_string");

var _zend_get_parameters_array_ex = Module["_zend_get_parameters_array_ex"] = createExportWrapper("zend_get_parameters_array_ex");

var _zend_copy_parameters_array = Module["_zend_copy_parameters_array"] = createExportWrapper("zend_copy_parameters_array");

var _zend_wrong_property_read = Module["_zend_wrong_property_read"] = createExportWrapper("zend_wrong_property_read");

var _zend_wrong_callback_error = Module["_zend_wrong_callback_error"] = createExportWrapper("zend_wrong_callback_error");

var _zend_wrong_callback_or_null_error = Module["_zend_wrong_callback_or_null_error"] = createExportWrapper("zend_wrong_callback_or_null_error");

var _zend_wrong_parameter_class_error = Module["_zend_wrong_parameter_class_error"] = createExportWrapper("zend_wrong_parameter_class_error");

var _zend_wrong_parameter_class_or_null_error = Module["_zend_wrong_parameter_class_or_null_error"] = createExportWrapper("zend_wrong_parameter_class_or_null_error");

var _zend_wrong_parameter_class_or_string_error = Module["_zend_wrong_parameter_class_or_string_error"] = createExportWrapper("zend_wrong_parameter_class_or_string_error");

var _zend_wrong_parameter_class_or_string_or_null_error = Module["_zend_wrong_parameter_class_or_string_or_null_error"] = createExportWrapper("zend_wrong_parameter_class_or_string_or_null_error");

var _zend_wrong_parameter_class_or_long_error = Module["_zend_wrong_parameter_class_or_long_error"] = createExportWrapper("zend_wrong_parameter_class_or_long_error");

var _zend_wrong_parameter_class_or_long_or_null_error = Module["_zend_wrong_parameter_class_or_long_or_null_error"] = createExportWrapper("zend_wrong_parameter_class_or_long_or_null_error");

var _zend_wrong_parameter_type_error = Module["_zend_wrong_parameter_type_error"] = createExportWrapper("zend_wrong_parameter_type_error");

var _zend_unexpected_extra_named_error = Module["_zend_unexpected_extra_named_error"] = createExportWrapper("zend_unexpected_extra_named_error");

var _zend_argument_error_variadic = Module["_zend_argument_error_variadic"] = createExportWrapper("zend_argument_error_variadic");

var _zend_parse_arg_bool_weak = Module["_zend_parse_arg_bool_weak"] = createExportWrapper("zend_parse_arg_bool_weak");

var _zend_parse_arg_long_weak = Module["_zend_parse_arg_long_weak"] = createExportWrapper("zend_parse_arg_long_weak");

var _zend_parse_arg_double_weak = Module["_zend_parse_arg_double_weak"] = createExportWrapper("zend_parse_arg_double_weak");

var _zend_parse_arg_str_weak = Module["_zend_parse_arg_str_weak"] = createExportWrapper("zend_parse_arg_str_weak");

var _zend_parse_parameter = Module["_zend_parse_parameter"] = createExportWrapper("zend_parse_parameter");

var _zend_parse_method_parameters_ex = Module["_zend_parse_method_parameters_ex"] = createExportWrapper("zend_parse_method_parameters_ex");

var _zend_merge_properties = Module["_zend_merge_properties"] = createExportWrapper("zend_merge_properties");

var _object_properties_init_ex = Module["_object_properties_init_ex"] = createExportWrapper("object_properties_init_ex");

var _add_assoc_resource_ex = Module["_add_assoc_resource_ex"] = createExportWrapper("add_assoc_resource_ex");

var _add_assoc_array_ex = Module["_add_assoc_array_ex"] = createExportWrapper("add_assoc_array_ex");

var _add_assoc_object_ex = Module["_add_assoc_object_ex"] = createExportWrapper("add_assoc_object_ex");

var _add_assoc_reference_ex = Module["_add_assoc_reference_ex"] = createExportWrapper("add_assoc_reference_ex");

var _add_index_null = Module["_add_index_null"] = createExportWrapper("add_index_null");

var _add_index_bool = Module["_add_index_bool"] = createExportWrapper("add_index_bool");

var _add_index_resource = Module["_add_index_resource"] = createExportWrapper("add_index_resource");

var _add_index_array = Module["_add_index_array"] = createExportWrapper("add_index_array");

var _add_index_object = Module["_add_index_object"] = createExportWrapper("add_index_object");

var _add_index_reference = Module["_add_index_reference"] = createExportWrapper("add_index_reference");

var _add_next_index_bool = Module["_add_next_index_bool"] = createExportWrapper("add_next_index_bool");

var _add_next_index_double = Module["_add_next_index_double"] = createExportWrapper("add_next_index_double");

var _add_next_index_array = Module["_add_next_index_array"] = createExportWrapper("add_next_index_array");

var _add_next_index_reference = Module["_add_next_index_reference"] = createExportWrapper("add_next_index_reference");

var _add_property_bool_ex = Module["_add_property_bool_ex"] = createExportWrapper("add_property_bool_ex");

var _add_property_double_ex = Module["_add_property_double_ex"] = createExportWrapper("add_property_double_ex");

var _add_property_str_ex = Module["_add_property_str_ex"] = createExportWrapper("add_property_str_ex");

var _add_property_array_ex = Module["_add_property_array_ex"] = createExportWrapper("add_property_array_ex");

var _add_property_object_ex = Module["_add_property_object_ex"] = createExportWrapper("add_property_object_ex");

var _add_property_reference_ex = Module["_add_property_reference_ex"] = createExportWrapper("add_property_reference_ex");

var _zend_unregister_functions = Module["_zend_unregister_functions"] = createExportWrapper("zend_unregister_functions");

var _zend_startup_module = Module["_zend_startup_module"] = createExportWrapper("zend_startup_module");

var _zend_get_module_started = Module["_zend_get_module_started"] = createExportWrapper("zend_get_module_started");

var _zend_do_inheritance_ex = Module["_zend_do_inheritance_ex"] = createExportWrapper("zend_do_inheritance_ex");

var _zend_do_implement_interface = Module["_zend_do_implement_interface"] = createExportWrapper("zend_do_implement_interface");

var _zend_register_class_alias_ex = Module["_zend_register_class_alias_ex"] = createExportWrapper("zend_register_class_alias_ex");

var _zend_set_hash_symbol = Module["_zend_set_hash_symbol"] = createExportWrapper("zend_set_hash_symbol");

var _zend_is_callable_at_frame = Module["_zend_is_callable_at_frame"] = createExportWrapper("zend_is_callable_at_frame");

var _zend_get_call_trampoline_func = Module["_zend_get_call_trampoline_func"] = createExportWrapper("zend_get_call_trampoline_func");

var _zend_std_get_static_method = Module["_zend_std_get_static_method"] = createExportWrapper("zend_std_get_static_method");

var _zend_fcall_info_args_save = Module["_zend_fcall_info_args_save"] = createExportWrapper("zend_fcall_info_args_save");

var _zend_fcall_info_args_restore = Module["_zend_fcall_info_args_restore"] = createExportWrapper("zend_fcall_info_args_restore");

var _zend_fcall_info_argv = Module["_zend_fcall_info_argv"] = createExportWrapper("zend_fcall_info_argv");

var _zend_try_assign_typed_ref_ex = Module["_zend_try_assign_typed_ref_ex"] = createExportWrapper("zend_try_assign_typed_ref_ex");

var _zend_try_assign_typed_ref_bool = Module["_zend_try_assign_typed_ref_bool"] = createExportWrapper("zend_try_assign_typed_ref_bool");

var _zend_try_assign_typed_ref_res = Module["_zend_try_assign_typed_ref_res"] = createExportWrapper("zend_try_assign_typed_ref_res");

var _zend_try_assign_typed_ref_zval = Module["_zend_try_assign_typed_ref_zval"] = createExportWrapper("zend_try_assign_typed_ref_zval");

var _zend_declare_property = Module["_zend_declare_property"] = createExportWrapper("zend_declare_property");

var _zend_declare_property_null = Module["_zend_declare_property_null"] = createExportWrapper("zend_declare_property_null");

var _zend_declare_property_bool = Module["_zend_declare_property_bool"] = createExportWrapper("zend_declare_property_bool");

var _zend_declare_property_long = Module["_zend_declare_property_long"] = createExportWrapper("zend_declare_property_long");

var _zend_declare_property_double = Module["_zend_declare_property_double"] = createExportWrapper("zend_declare_property_double");

var _zend_declare_property_string = Module["_zend_declare_property_string"] = createExportWrapper("zend_declare_property_string");

var _zend_declare_property_stringl = Module["_zend_declare_property_stringl"] = createExportWrapper("zend_declare_property_stringl");

var _zend_declare_class_constant = Module["_zend_declare_class_constant"] = createExportWrapper("zend_declare_class_constant");

var _zend_declare_class_constant_null = Module["_zend_declare_class_constant_null"] = createExportWrapper("zend_declare_class_constant_null");

var _zend_declare_class_constant_bool = Module["_zend_declare_class_constant_bool"] = createExportWrapper("zend_declare_class_constant_bool");

var _zend_declare_class_constant_double = Module["_zend_declare_class_constant_double"] = createExportWrapper("zend_declare_class_constant_double");

var _zend_declare_class_constant_stringl = Module["_zend_declare_class_constant_stringl"] = createExportWrapper("zend_declare_class_constant_stringl");

var _zend_declare_class_constant_string = Module["_zend_declare_class_constant_string"] = createExportWrapper("zend_declare_class_constant_string");

var _zend_unset_property = Module["_zend_unset_property"] = createExportWrapper("zend_unset_property");

var _zend_update_property_double = Module["_zend_update_property_double"] = createExportWrapper("zend_update_property_double");

var _zend_assign_to_typed_ref = Module["_zend_assign_to_typed_ref"] = createExportWrapper("zend_assign_to_typed_ref");

var _zend_update_static_property = Module["_zend_update_static_property"] = createExportWrapper("zend_update_static_property");

var _zend_update_static_property_null = Module["_zend_update_static_property_null"] = createExportWrapper("zend_update_static_property_null");

var _zend_update_static_property_bool = Module["_zend_update_static_property_bool"] = createExportWrapper("zend_update_static_property_bool");

var _zend_update_static_property_long = Module["_zend_update_static_property_long"] = createExportWrapper("zend_update_static_property_long");

var _zend_update_static_property_double = Module["_zend_update_static_property_double"] = createExportWrapper("zend_update_static_property_double");

var _zend_update_static_property_string = Module["_zend_update_static_property_string"] = createExportWrapper("zend_update_static_property_string");

var _zend_update_static_property_stringl = Module["_zend_update_static_property_stringl"] = createExportWrapper("zend_update_static_property_stringl");

var _zend_read_static_property = Module["_zend_read_static_property"] = createExportWrapper("zend_read_static_property");

var _zend_save_error_handling = Module["_zend_save_error_handling"] = createExportWrapper("zend_save_error_handling");

var _zend_register_extension = Module["_zend_register_extension"] = createExportWrapper("zend_register_extension");

var _zend_extension_dispatch_message = Module["_zend_extension_dispatch_message"] = createExportWrapper("zend_extension_dispatch_message");

var _zend_get_resource_handle = Module["_zend_get_resource_handle"] = createExportWrapper("zend_get_resource_handle");

var _zend_add_system_entropy = Module["_zend_add_system_entropy"] = createExportWrapper("zend_add_system_entropy");

var _zend_get_op_array_extension_handle = Module["_zend_get_op_array_extension_handle"] = createExportWrapper("zend_get_op_array_extension_handle");

var _zend_get_op_array_extension_handles = Module["_zend_get_op_array_extension_handles"] = createExportWrapper("zend_get_op_array_extension_handles");

var _zend_extensions_op_array_persist_calc = Module["_zend_extensions_op_array_persist_calc"] = createExportWrapper("zend_extensions_op_array_persist_calc");

var _zend_extensions_op_array_persist = Module["_zend_extensions_op_array_persist"] = createExportWrapper("zend_extensions_op_array_persist");

var _zend_hash_add_or_update = Module["_zend_hash_add_or_update"] = createExportWrapper("zend_hash_add_or_update");

var _zend_hash_str_add_or_update = Module["_zend_hash_str_add_or_update"] = createExportWrapper("zend_hash_str_add_or_update");

var _zend_hash_index_add_or_update = Module["_zend_hash_index_add_or_update"] = createExportWrapper("zend_hash_index_add_or_update");

var _zend_hash_str_del_ind = Module["_zend_hash_str_del_ind"] = createExportWrapper("zend_hash_str_del_ind");

var _gc_remove_from_buffer = Module["_gc_remove_from_buffer"] = createExportWrapper("gc_remove_from_buffer");

var _zend_symtable_clean = Module["_zend_symtable_clean"] = createExportWrapper("zend_symtable_clean");

var _zend_hash_graceful_destroy = Module["_zend_hash_graceful_destroy"] = createExportWrapper("zend_hash_graceful_destroy");

var _zend_hash_apply_with_arguments = Module["_zend_hash_apply_with_arguments"] = createExportWrapper("zend_hash_apply_with_arguments");

var _zend_hash_merge_ex = Module["_zend_hash_merge_ex"] = createExportWrapper("zend_hash_merge_ex");

var __zend_hash_index_find = Module["__zend_hash_index_find"] = createExportWrapper("_zend_hash_index_find");

var _zend_hash_bucket_renum_swap = Module["_zend_hash_bucket_renum_swap"] = createExportWrapper("zend_hash_bucket_renum_swap");

var _zend_hash_bucket_packed_swap = Module["_zend_hash_bucket_packed_swap"] = createExportWrapper("zend_hash_bucket_packed_swap");

var _zend_list_insert = Module["_zend_list_insert"] = createExportWrapper("zend_list_insert");

var _zend_fetch_list_dtor_id = Module["_zend_fetch_list_dtor_id"] = createExportWrapper("zend_fetch_list_dtor_id");

var _zend_register_persistent_resource_ex = Module["_zend_register_persistent_resource_ex"] = createExportWrapper("zend_register_persistent_resource_ex");

var _zend_register_default_classes = Module["_zend_register_default_classes"] = createExportWrapper("zend_register_default_classes");

var _zend_gc_get_status = Module["_zend_gc_get_status"] = createExportWrapper("zend_gc_get_status");

var _zend_trace_to_string = Module["_zend_trace_to_string"] = createExportWrapper("zend_trace_to_string");

var _zend_generator_check_placeholder_frame = Module["_zend_generator_check_placeholder_frame"] = createExportWrapper("zend_generator_check_placeholder_frame");

var _zend_std_get_class_name = Module["_zend_std_get_class_name"] = createExportWrapper("zend_std_get_class_name");

var _zend_get_parameter_attribute_str = Module["_zend_get_parameter_attribute_str"] = createExportWrapper("zend_get_parameter_attribute_str");

var _zend_get_attribute = Module["_zend_get_attribute"] = createExportWrapper("zend_get_attribute");

var _zend_get_parameter_attribute = Module["_zend_get_parameter_attribute"] = createExportWrapper("zend_get_parameter_attribute");

var _zend_mark_internal_attribute = Module["_zend_mark_internal_attribute"] = createExportWrapper("zend_mark_internal_attribute");

var _zend_internal_attribute_register = Module["_zend_internal_attribute_register"] = createExportWrapper("zend_internal_attribute_register");

var _zend_vm_stack_init_ex = Module["_zend_vm_stack_init_ex"] = createExportWrapper("zend_vm_stack_init_ex");

var _zend_get_compiled_variable_value = Module["_zend_get_compiled_variable_value"] = createExportWrapper("zend_get_compiled_variable_value");

var _zend_gcc_global_regs = Module["_zend_gcc_global_regs"] = createExportWrapper("zend_gcc_global_regs");

var _zend_cannot_pass_by_reference = Module["_zend_cannot_pass_by_reference"] = createExportWrapper("zend_cannot_pass_by_reference");

var _zend_verify_arg_error = Module["_zend_verify_arg_error"] = createExportWrapper("zend_verify_arg_error");

var _zend_verify_scalar_type_hint = Module["_zend_verify_scalar_type_hint"] = createExportWrapper("zend_verify_scalar_type_hint");

var _zend_readonly_property_modification_error = Module["_zend_readonly_property_modification_error"] = createExportWrapper("zend_readonly_property_modification_error");

var _zend_readonly_property_indirect_modification_error = Module["_zend_readonly_property_indirect_modification_error"] = createExportWrapper("zend_readonly_property_indirect_modification_error");

var _zend_check_user_type_slow = Module["_zend_check_user_type_slow"] = createExportWrapper("zend_check_user_type_slow");

var _zend_missing_arg_error = Module["_zend_missing_arg_error"] = createExportWrapper("zend_missing_arg_error");

var _zend_verify_return_error = Module["_zend_verify_return_error"] = createExportWrapper("zend_verify_return_error");

var _zend_verify_never_error = Module["_zend_verify_never_error"] = createExportWrapper("zend_verify_never_error");

var _zend_wrong_string_offset_error = Module["_zend_wrong_string_offset_error"] = createExportWrapper("zend_wrong_string_offset_error");

var _zend_false_to_array_deprecated = Module["_zend_false_to_array_deprecated"] = createExportWrapper("zend_false_to_array_deprecated");

var _zend_undefined_offset_write = Module["_zend_undefined_offset_write"] = createExportWrapper("zend_undefined_offset_write");

var _zend_undefined_index_write = Module["_zend_undefined_index_write"] = createExportWrapper("zend_undefined_index_write");

var _zend_fetch_dimension_const = Module["_zend_fetch_dimension_const"] = createExportWrapper("zend_fetch_dimension_const");

var _zend_verify_ref_array_assignable = Module["_zend_verify_ref_array_assignable"] = createExportWrapper("zend_verify_ref_array_assignable");

var _zend_throw_ref_type_error_type = Module["_zend_throw_ref_type_error_type"] = createExportWrapper("zend_throw_ref_type_error_type");

var _zend_throw_ref_type_error_zval = Module["_zend_throw_ref_type_error_zval"] = createExportWrapper("zend_throw_ref_type_error_zval");

var _zend_throw_conflicting_coercion_error = Module["_zend_throw_conflicting_coercion_error"] = createExportWrapper("zend_throw_conflicting_coercion_error");

var _execute_internal = Module["_execute_internal"] = createExportWrapper("execute_internal");

var _zend_clean_and_cache_symbol_table = Module["_zend_clean_and_cache_symbol_table"] = createExportWrapper("zend_clean_and_cache_symbol_table");

var _zend_free_compiled_variables = Module["_zend_free_compiled_variables"] = createExportWrapper("zend_free_compiled_variables");

var _zend_fetch_function_str = Module["_zend_fetch_function_str"] = createExportWrapper("zend_fetch_function_str");

var _zend_init_func_run_time_cache = Module["_zend_init_func_run_time_cache"] = createExportWrapper("zend_init_func_run_time_cache");

var _zend_init_code_execute_data = Module["_zend_init_code_execute_data"] = createExportWrapper("zend_init_code_execute_data");

var _zend_init_execute_data = Module["_zend_init_execute_data"] = createExportWrapper("zend_init_execute_data");

var _zend_unfinished_calls_gc = Module["_zend_unfinished_calls_gc"] = createExportWrapper("zend_unfinished_calls_gc");

var _zend_cleanup_unfinished_execution = Module["_zend_cleanup_unfinished_execution"] = createExportWrapper("zend_cleanup_unfinished_execution");

var _zend_free_extra_named_params = Module["_zend_free_extra_named_params"] = createExportWrapper("zend_free_extra_named_params");

var _zend_unfinished_execution_gc = Module["_zend_unfinished_execution_gc"] = createExportWrapper("zend_unfinished_execution_gc");

var _zend_unfinished_execution_gc_ex = Module["_zend_unfinished_execution_gc_ex"] = createExportWrapper("zend_unfinished_execution_gc_ex");

var _zend_fiber_switch_block = Module["_zend_fiber_switch_block"] = createExportWrapper("zend_fiber_switch_block");

var _zend_fiber_switch_unblock = Module["_zend_fiber_switch_unblock"] = createExportWrapper("zend_fiber_switch_unblock");

var _zend_iterator_unwrap = Module["_zend_iterator_unwrap"] = createExportWrapper("zend_iterator_unwrap");

var _zend_create_closure = Module["_zend_create_closure"] = createExportWrapper("zend_create_closure");

var _zend_generator_close = Module["_zend_generator_close"] = createExportWrapper("zend_generator_close");

var _zend_std_unset_static_property = Module["_zend_std_unset_static_property"] = createExportWrapper("zend_std_unset_static_property");

var _zend_serialize_opcode_handler = Module["_zend_serialize_opcode_handler"] = createExportWrapper("zend_serialize_opcode_handler");

var _zend_deserialize_opcode_handler = Module["_zend_deserialize_opcode_handler"] = createExportWrapper("zend_deserialize_opcode_handler");

var _zend_get_opcode_handler_func = Module["_zend_get_opcode_handler_func"] = createExportWrapper("zend_get_opcode_handler_func");

var _zend_get_halt_op = Module["_zend_get_halt_op"] = createExportWrapper("zend_get_halt_op");

var _zend_vm_kind = Module["_zend_vm_kind"] = createExportWrapper("zend_vm_kind");

var _zend_vm_set_opcode_handler_ex = Module["_zend_vm_set_opcode_handler_ex"] = createExportWrapper("zend_vm_set_opcode_handler_ex");

var _zend_vm_call_opcode_handler = Module["_zend_vm_call_opcode_handler"] = createExportWrapper("zend_vm_call_opcode_handler");

var _zend_set_user_opcode_handler = Module["_zend_set_user_opcode_handler"] = createExportWrapper("zend_set_user_opcode_handler");

var _zend_get_user_opcode_handler = Module["_zend_get_user_opcode_handler"] = createExportWrapper("zend_get_user_opcode_handler");

var _zend_get_zval_ptr = Module["_zend_get_zval_ptr"] = createExportWrapper("zend_get_zval_ptr");

var _zend_is_graceful_exit = Module["_zend_is_graceful_exit"] = createExportWrapper("zend_is_graceful_exit");

var _zend_exception_set_previous = Module["_zend_exception_set_previous"] = createExportWrapper("zend_exception_set_previous");

var _zend_ini_dtor = Module["_zend_ini_dtor"] = createExportWrapper("zend_ini_dtor");

var _zend_ini_global_shutdown = Module["_zend_ini_global_shutdown"] = createExportWrapper("zend_ini_global_shutdown");

var _zend_register_ini_entries = Module["_zend_register_ini_entries"] = createExportWrapper("zend_register_ini_entries");

var _zend_unregister_ini_entries = Module["_zend_unregister_ini_entries"] = createExportWrapper("zend_unregister_ini_entries");

var _zend_ini_register_displayer = Module["_zend_ini_register_displayer"] = createExportWrapper("zend_ini_register_displayer");

var _zend_ini_parse_uquantity = Module["_zend_ini_parse_uquantity"] = createExportWrapper("zend_ini_parse_uquantity");

var _display_link_numbers = Module["_display_link_numbers"] = createExportWrapper("display_link_numbers");

var _OnUpdateStr = Module["_OnUpdateStr"] = createExportWrapper("OnUpdateStr");

var _OnUpdateStrNotEmpty = Module["_OnUpdateStrNotEmpty"] = createExportWrapper("OnUpdateStrNotEmpty");

var _zend_insert_sort = Module["_zend_insert_sort"] = createExportWrapper("zend_insert_sort");

var _zend_multibyte_set_script_encoding = Module["_zend_multibyte_set_script_encoding"] = createExportWrapper("zend_multibyte_set_script_encoding");

var _zend_multibyte_parse_encoding_list = Module["_zend_multibyte_parse_encoding_list"] = createExportWrapper("zend_multibyte_parse_encoding_list");

var _zend_multibyte_get_script_encoding = Module["_zend_multibyte_get_script_encoding"] = createExportWrapper("zend_multibyte_get_script_encoding");

var _zend_register_iterator_wrapper = Module["_zend_register_iterator_wrapper"] = createExportWrapper("zend_register_iterator_wrapper");

var _zend_user_it_new_iterator = Module["_zend_user_it_new_iterator"] = createExportWrapper("zend_user_it_new_iterator");

var _zend_user_it_valid = Module["_zend_user_it_valid"] = createExportWrapper("zend_user_it_valid");

var _zend_user_it_get_current_data = Module["_zend_user_it_get_current_data"] = createExportWrapper("zend_user_it_get_current_data");

var _zend_user_it_get_current_key = Module["_zend_user_it_get_current_key"] = createExportWrapper("zend_user_it_get_current_key");

var _zend_user_it_move_forward = Module["_zend_user_it_move_forward"] = createExportWrapper("zend_user_it_move_forward");

var _zend_user_it_rewind = Module["_zend_user_it_rewind"] = createExportWrapper("zend_user_it_rewind");

var _zend_user_it_get_gc = Module["_zend_user_it_get_gc"] = createExportWrapper("zend_user_it_get_gc");

var _zend_user_it_get_new_iterator = Module["_zend_user_it_get_new_iterator"] = createExportWrapper("zend_user_it_get_new_iterator");

var _zend_user_serialize = Module["_zend_user_serialize"] = createExportWrapper("zend_user_serialize");

var _zend_user_unserialize = Module["_zend_user_unserialize"] = createExportWrapper("zend_user_unserialize");

var _zend_register_interfaces = Module["_zend_register_interfaces"] = createExportWrapper("zend_register_interfaces");

var _zend_get_exception_base = Module["_zend_get_exception_base"] = createExportWrapper("zend_get_exception_base");

var _zend_exception_get_default = Module["_zend_exception_get_default"] = createExportWrapper("zend_exception_get_default");

var _zend_get_error_exception = Module["_zend_get_error_exception"] = createExportWrapper("zend_get_error_exception");

var _zend_create_unwind_exit = Module["_zend_create_unwind_exit"] = createExportWrapper("zend_create_unwind_exit");

var _zend_create_graceful_exit = Module["_zend_create_graceful_exit"] = createExportWrapper("zend_create_graceful_exit");

var _zend_throw_graceful_exit = Module["_zend_throw_graceful_exit"] = createExportWrapper("zend_throw_graceful_exit");

var _gc_protected = Module["_gc_protected"] = createExportWrapper("gc_protected");

var _zend_weakrefs_hash_add = Module["_zend_weakrefs_hash_add"] = createExportWrapper("zend_weakrefs_hash_add");

var _zend_weakrefs_hash_del = Module["_zend_weakrefs_hash_del"] = createExportWrapper("zend_weakrefs_hash_del");

var _zend_weakrefs_notify = Module["_zend_weakrefs_notify"] = createExportWrapper("zend_weakrefs_notify");

var _zend_ensure_fpu_mode = Module["_zend_ensure_fpu_mode"] = createExportWrapper("zend_ensure_fpu_mode");

var _zend_interned_string_find_permanent = Module["_zend_interned_string_find_permanent"] = createExportWrapper("zend_interned_string_find_permanent");

var _zend_interned_strings_set_request_storage_handlers = Module["_zend_interned_strings_set_request_storage_handlers"] = createExportWrapper("zend_interned_strings_set_request_storage_handlers");

var __vgr00000ZU_NONE_zend_string_equal_val = Module["__vgr00000ZU_NONE_zend_string_equal_val"] = createExportWrapper("_vgr00000ZU_NONE_zend_string_equal_val");

var _sigaction = Module["_sigaction"] = createExportWrapper("sigaction");

var _sigemptyset = Module["_sigemptyset"] = createExportWrapper("sigemptyset");

var _sigaddset = Module["_sigaddset"] = createExportWrapper("sigaddset");

var _sigprocmask = Module["_sigprocmask"] = createExportWrapper("sigprocmask");

var _zend_signal_handler_unblock = Module["_zend_signal_handler_unblock"] = createExportWrapper("zend_signal_handler_unblock");

var _zend_sigaction = Module["_zend_sigaction"] = createExportWrapper("zend_sigaction");

var _zend_signal_startup = Module["_zend_signal_startup"] = createExportWrapper("zend_signal_startup");

var _sigfillset = Module["_sigfillset"] = createExportWrapper("sigfillset");

var _sigdelset = Module["_sigdelset"] = createExportWrapper("sigdelset");

var _zend_generator_restore_call_stack = Module["_zend_generator_restore_call_stack"] = createExportWrapper("zend_generator_restore_call_stack");

var _zend_generator_freeze_call_stack = Module["_zend_generator_freeze_call_stack"] = createExportWrapper("zend_generator_freeze_call_stack");

var _zend_generator_resume = Module["_zend_generator_resume"] = createExportWrapper("zend_generator_resume");

var _zend_observer_generator_resume = Module["_zend_observer_generator_resume"] = createExportWrapper("zend_observer_generator_resume");

var _virtual_getcwd_ex = Module["_virtual_getcwd_ex"] = createExportWrapper("virtual_getcwd_ex");

var _virtual_getcwd = Module["_virtual_getcwd"] = createExportWrapper("virtual_getcwd");

var _realpath_cache_lookup = Module["_realpath_cache_lookup"] = createExportWrapper("realpath_cache_lookup");

var _virtual_chdir = Module["_virtual_chdir"] = createExportWrapper("virtual_chdir");

var _virtual_realpath = Module["_virtual_realpath"] = createExportWrapper("virtual_realpath");

var _virtual_filepath_ex = Module["_virtual_filepath_ex"] = createExportWrapper("virtual_filepath_ex");

var _virtual_filepath = Module["_virtual_filepath"] = createExportWrapper("virtual_filepath");

var _virtual_fopen = Module["_virtual_fopen"] = createExportWrapper("virtual_fopen");

var _virtual_access = Module["_virtual_access"] = createExportWrapper("virtual_access");

var _virtual_utime = Module["_virtual_utime"] = createExportWrapper("virtual_utime");

var _virtual_chmod = Module["_virtual_chmod"] = createExportWrapper("virtual_chmod");

var _virtual_chown = Module["_virtual_chown"] = createExportWrapper("virtual_chown");

var _virtual_open = Module["_virtual_open"] = createExportWrapper("virtual_open");

var _virtual_creat = Module["_virtual_creat"] = createExportWrapper("virtual_creat");

var _creat = Module["_creat"] = createExportWrapper("creat");

var _virtual_rename = Module["_virtual_rename"] = createExportWrapper("virtual_rename");

var _virtual_stat = Module["_virtual_stat"] = createExportWrapper("virtual_stat");

var _virtual_lstat = Module["_virtual_lstat"] = createExportWrapper("virtual_lstat");

var _virtual_unlink = Module["_virtual_unlink"] = createExportWrapper("virtual_unlink");

var _virtual_mkdir = Module["_virtual_mkdir"] = createExportWrapper("virtual_mkdir");

var _virtual_rmdir = Module["_virtual_rmdir"] = createExportWrapper("virtual_rmdir");

var _virtual_opendir = Module["_virtual_opendir"] = createExportWrapper("virtual_opendir");

var _virtual_popen = Module["_virtual_popen"] = createExportWrapper("virtual_popen");

var _zend_objects_store_put = Module["_zend_objects_store_put"] = createExportWrapper("zend_objects_store_put");

var _zend_objects_clone_obj = Module["_zend_objects_clone_obj"] = createExportWrapper("zend_objects_clone_obj");

var _zend_std_get_debug_info = Module["_zend_std_get_debug_info"] = createExportWrapper("zend_std_get_debug_info");

var _zend_get_property_guard = Module["_zend_get_property_guard"] = createExportWrapper("zend_get_property_guard");

var _zend_std_get_constructor = Module["_zend_std_get_constructor"] = createExportWrapper("zend_std_get_constructor");

var _zend_std_get_closure = Module["_zend_std_get_closure"] = createExportWrapper("zend_std_get_closure");

var _smart_str_append_escaped_truncated = Module["_smart_str_append_escaped_truncated"] = createExportWrapper("smart_str_append_escaped_truncated");

var _zend_cpu_supports = Module["_zend_cpu_supports"] = createExportWrapper("zend_cpu_supports");

var ___jit_debug_register_code = Module["___jit_debug_register_code"] = createExportWrapper("__jit_debug_register_code");

var _zend_gdb_register_code = Module["_zend_gdb_register_code"] = createExportWrapper("zend_gdb_register_code");

var _zend_gdb_unregister_all = Module["_zend_gdb_unregister_all"] = createExportWrapper("zend_gdb_unregister_all");

var _zend_gdb_present = Module["_zend_gdb_present"] = createExportWrapper("zend_gdb_present");

var _zend_observer_fcall_register = Module["_zend_observer_fcall_register"] = createExportWrapper("zend_observer_fcall_register");

var _zend_observer_add_begin_handler = Module["_zend_observer_add_begin_handler"] = createExportWrapper("zend_observer_add_begin_handler");

var _zend_observer_remove_begin_handler = Module["_zend_observer_remove_begin_handler"] = createExportWrapper("zend_observer_remove_begin_handler");

var _zend_observer_add_end_handler = Module["_zend_observer_add_end_handler"] = createExportWrapper("zend_observer_add_end_handler");

var _zend_observer_remove_end_handler = Module["_zend_observer_remove_end_handler"] = createExportWrapper("zend_observer_remove_end_handler");

var _zend_observer_function_declared_register = Module["_zend_observer_function_declared_register"] = createExportWrapper("zend_observer_function_declared_register");

var _zend_observer_class_linked_register = Module["_zend_observer_class_linked_register"] = createExportWrapper("zend_observer_class_linked_register");

var _zend_observer_error_register = Module["_zend_observer_error_register"] = createExportWrapper("zend_observer_error_register");

var _zend_observer_fiber_init_register = Module["_zend_observer_fiber_init_register"] = createExportWrapper("zend_observer_fiber_init_register");

var _zend_observer_fiber_switch_register = Module["_zend_observer_fiber_switch_register"] = createExportWrapper("zend_observer_fiber_switch_register");

var _zend_observer_fiber_destroy_register = Module["_zend_observer_fiber_destroy_register"] = createExportWrapper("zend_observer_fiber_destroy_register");

var _zend_observer_fiber_init_notify = Module["_zend_observer_fiber_init_notify"] = createExportWrapper("zend_observer_fiber_init_notify");

var _zend_observer_fiber_switch_notify = Module["_zend_observer_fiber_switch_notify"] = createExportWrapper("zend_observer_fiber_switch_notify");

var _zend_observer_fiber_destroy_notify = Module["_zend_observer_fiber_destroy_notify"] = createExportWrapper("zend_observer_fiber_destroy_notify");

var _zend_enum_get_case_by_value = Module["_zend_enum_get_case_by_value"] = createExportWrapper("zend_enum_get_case_by_value");

var _zend_register_internal_enum = Module["_zend_register_internal_enum"] = createExportWrapper("zend_register_internal_enum");

var _zend_enum_add_case = Module["_zend_enum_add_case"] = createExportWrapper("zend_enum_add_case");

var _zend_enum_add_case_cstr = Module["_zend_enum_add_case_cstr"] = createExportWrapper("zend_enum_add_case_cstr");

var _zend_enum_get_case = Module["_zend_enum_get_case"] = createExportWrapper("zend_enum_get_case");

var _zend_enum_get_case_cstr = Module["_zend_enum_get_case_cstr"] = createExportWrapper("zend_enum_get_case_cstr");

var _zend_fiber_switch_blocked = Module["_zend_fiber_switch_blocked"] = createExportWrapper("zend_fiber_switch_blocked");

var _zend_fiber_init_context = Module["_zend_fiber_init_context"] = createExportWrapper("zend_fiber_init_context");

var _mprotect = Module["_mprotect"] = createExportWrapper("mprotect");

var _zend_fiber_destroy_context = Module["_zend_fiber_destroy_context"] = createExportWrapper("zend_fiber_destroy_context");

var _zend_fiber_switch_context = Module["_zend_fiber_switch_context"] = createExportWrapper("zend_fiber_switch_context");

var _zend_atomic_bool_init = Module["_zend_atomic_bool_init"] = createExportWrapper("zend_atomic_bool_init");

var _zend_atomic_bool_exchange = Module["_zend_atomic_bool_exchange"] = createExportWrapper("zend_atomic_bool_exchange");

var _zend_atomic_bool_store = Module["_zend_atomic_bool_store"] = createExportWrapper("zend_atomic_bool_store");

var _zend_atomic_bool_load = Module["_zend_atomic_bool_load"] = createExportWrapper("zend_atomic_bool_load");

var _zend_optimize_script = Module["_zend_optimize_script"] = createExportWrapper("zend_optimize_script");

var _zend_build_call_graph = Module["_zend_build_call_graph"] = createExportWrapper("zend_build_call_graph");

var _zend_analyze_call_graph = Module["_zend_analyze_call_graph"] = createExportWrapper("zend_analyze_call_graph");

var _zend_build_call_map = Module["_zend_build_call_map"] = createExportWrapper("zend_build_call_map");

var _zend_init_func_return_info = Module["_zend_init_func_return_info"] = createExportWrapper("zend_init_func_return_info");

var _zend_dump_op_array = Module["_zend_dump_op_array"] = createExportWrapper("zend_dump_op_array");

var _zend_array_type_info = Module["_zend_array_type_info"] = createExportWrapper("zend_array_type_info");

var _zend_optimizer_register_pass = Module["_zend_optimizer_register_pass"] = createExportWrapper("zend_optimizer_register_pass");

var _zend_optimizer_unregister_pass = Module["_zend_optimizer_unregister_pass"] = createExportWrapper("zend_optimizer_unregister_pass");

var _zend_build_cfg = Module["_zend_build_cfg"] = createExportWrapper("zend_build_cfg");

var _zend_cfg_build_predecessors = Module["_zend_cfg_build_predecessors"] = createExportWrapper("zend_cfg_build_predecessors");

var _zend_cfg_compute_dominators_tree = Module["_zend_cfg_compute_dominators_tree"] = createExportWrapper("zend_cfg_compute_dominators_tree");

var _zend_cfg_identify_loops = Module["_zend_cfg_identify_loops"] = createExportWrapper("zend_cfg_identify_loops");

var _zend_dfg_add_use_def_op = Module["_zend_dfg_add_use_def_op"] = createExportWrapper("zend_dfg_add_use_def_op");

var _zend_build_ssa = Module["_zend_build_ssa"] = createExportWrapper("zend_build_ssa");

var _zend_ssa_compute_use_def_chains = Module["_zend_ssa_compute_use_def_chains"] = createExportWrapper("zend_ssa_compute_use_def_chains");

var _zend_ssa_find_false_dependencies = Module["_zend_ssa_find_false_dependencies"] = createExportWrapper("zend_ssa_find_false_dependencies");

var _zend_ssa_find_sccs = Module["_zend_ssa_find_sccs"] = createExportWrapper("zend_ssa_find_sccs");

var _zend_ssa_inference = Module["_zend_ssa_inference"] = createExportWrapper("zend_ssa_inference");

var _zend_may_throw = Module["_zend_may_throw"] = createExportWrapper("zend_may_throw");

var _zend_ssa_rename_op = Module["_zend_ssa_rename_op"] = createExportWrapper("zend_ssa_rename_op");

var _zend_inference_propagate_range = Module["_zend_inference_propagate_range"] = createExportWrapper("zend_inference_propagate_range");

var _zend_array_element_type = Module["_zend_array_element_type"] = createExportWrapper("zend_array_element_type");

var _zend_fetch_arg_info_type = Module["_zend_fetch_arg_info_type"] = createExportWrapper("zend_fetch_arg_info_type");

var _zend_update_type_info = Module["_zend_update_type_info"] = createExportWrapper("zend_update_type_info");

var _zend_get_func_info = Module["_zend_get_func_info"] = createExportWrapper("zend_get_func_info");

var _zend_may_throw_ex = Module["_zend_may_throw_ex"] = createExportWrapper("zend_may_throw_ex");

var _zend_analyze_calls = Module["_zend_analyze_calls"] = createExportWrapper("zend_analyze_calls");

var _zend_dump_var = Module["_zend_dump_var"] = createExportWrapper("zend_dump_var");

var _zend_dump_ssa_var = Module["_zend_dump_ssa_var"] = createExportWrapper("zend_dump_ssa_var");

var _zend_dump_op = Module["_zend_dump_op"] = createExportWrapper("zend_dump_op");

var _zend_dump_op_line = Module["_zend_dump_op_line"] = createExportWrapper("zend_dump_op_line");

var _vfprintf = Module["_vfprintf"] = createExportWrapper("vfprintf");

var _calloc = Module["_calloc"] = createExportWrapper("calloc");

var _main = Module["_main"] = createExportWrapper("__main_argc_argv");

var _signal = Module["_signal"] = createExportWrapper("signal");

var _setsid = Module["_setsid"] = createExportWrapper("setsid");

var _getpgrp = Module["_getpgrp"] = createExportWrapper("getpgrp");

var _perror = Module["_perror"] = createExportWrapper("perror");

var _wait = Module["_wait"] = createExportWrapper("wait");

var _setenv = Module["_setenv"] = createExportWrapper("setenv");

var _zip_source_error = Module["_zip_source_error"] = createExportWrapper("zip_source_error");

var _zip_error_set_from_source = Module["_zip_error_set_from_source"] = createExportWrapper("zip_error_set_from_source");

var _zip_source_begin_write_cloning = Module["_zip_source_begin_write_cloning"] = createExportWrapper("zip_source_begin_write_cloning");

var _zip_source_begin_write = Module["_zip_source_begin_write"] = createExportWrapper("zip_source_begin_write");

var _zip_source_tell_write = Module["_zip_source_tell_write"] = createExportWrapper("zip_source_tell_write");

var _zip_source_zip_file_create = Module["_zip_source_zip_file_create"] = createExportWrapper("zip_source_zip_file_create");

var _zip_source_seek = Module["_zip_source_seek"] = createExportWrapper("zip_source_seek");

var _zip_source_commit_write = Module["_zip_source_commit_write"] = createExportWrapper("zip_source_commit_write");

var _zip_source_rollback_write = Module["_zip_source_rollback_write"] = createExportWrapper("zip_source_rollback_write");

var _zip_source_stat = Module["_zip_source_stat"] = createExportWrapper("zip_source_stat");

var _zip_source_keep = Module["_zip_source_keep"] = createExportWrapper("zip_source_keep");

var _zip_stat_init = Module["_zip_stat_init"] = createExportWrapper("zip_stat_init");

var _zip_source_open = Module["_zip_source_open"] = createExportWrapper("zip_source_open");

var _zip_source_read = Module["_zip_source_read"] = createExportWrapper("zip_source_read");

var _zip_source_close = Module["_zip_source_close"] = createExportWrapper("zip_source_close");

var _zip_source_get_file_attributes = Module["_zip_source_get_file_attributes"] = createExportWrapper("zip_source_get_file_attributes");

var _zip_source_seek_write = Module["_zip_source_seek_write"] = createExportWrapper("zip_source_seek_write");

var _crc32 = Module["_crc32"] = createExportWrapper("crc32");

var _zip_error_init_with_code = Module["_zip_error_init_with_code"] = createExportWrapper("zip_error_init_with_code");

var _zip_error_system_type = Module["_zip_error_system_type"] = createExportWrapper("zip_error_system_type");

var _zip_error_to_data = Module["_zip_error_to_data"] = createExportWrapper("zip_error_to_data");

var _zip_error_get = Module["_zip_error_get"] = createExportWrapper("zip_error_get");

var _zError = Module["_zError"] = createExportWrapper("zError");

var _zip_fopen_index_encrypted = Module["_zip_fopen_index_encrypted"] = createExportWrapper("zip_fopen_index_encrypted");

var _zip_source_is_seekable = Module["_zip_source_is_seekable"] = createExportWrapper("zip_source_is_seekable");

var _zip_source_tell = Module["_zip_source_tell"] = createExportWrapper("zip_source_tell");

var _zip_encryption_method_supported = Module["_zip_encryption_method_supported"] = createExportWrapper("zip_encryption_method_supported");

var _zip_source_write = Module["_zip_source_write"] = createExportWrapper("zip_source_write");

var _zip_source_file_create = Module["_zip_source_file_create"] = createExportWrapper("zip_source_file_create");

var _zip_open_from_source = Module["_zip_open_from_source"] = createExportWrapper("zip_open_from_source");

var _zip_register_progress_callback_with_state = Module["_zip_register_progress_callback_with_state"] = createExportWrapper("zip_register_progress_callback_with_state");

var _zip_register_cancel_callback_with_state = Module["_zip_register_cancel_callback_with_state"] = createExportWrapper("zip_register_cancel_callback_with_state");

var _zip_register_progress_callback = Module["_zip_register_progress_callback"] = createExportWrapper("zip_register_progress_callback");

var _zip_compression_method_supported = Module["_zip_compression_method_supported"] = createExportWrapper("zip_compression_method_supported");

var _zip_source_buffer_create = Module["_zip_source_buffer_create"] = createExportWrapper("zip_source_buffer_create");

var _zip_file_attributes_init = Module["_zip_file_attributes_init"] = createExportWrapper("zip_file_attributes_init");

var _zip_source_function_create = Module["_zip_source_function_create"] = createExportWrapper("zip_source_function_create");

var _zip_source_buffer_fragment = Module["_zip_source_buffer_fragment"] = createExportWrapper("zip_source_buffer_fragment");

var _zip_source_buffer_fragment_create = Module["_zip_source_buffer_fragment_create"] = createExportWrapper("zip_source_buffer_fragment_create");

var _zip_source_seek_compute_offset = Module["_zip_source_seek_compute_offset"] = createExportWrapper("zip_source_seek_compute_offset");

var _zip_source_make_command_bitmap = Module["_zip_source_make_command_bitmap"] = createExportWrapper("zip_source_make_command_bitmap");

var _deflateInit2_ = Module["_deflateInit2_"] = createExportWrapper("deflateInit2_");

var _inflateInit2_ = Module["_inflateInit2_"] = createExportWrapper("inflateInit2_");

var _deflateEnd = Module["_deflateEnd"] = createExportWrapper("deflateEnd");

var _inflateEnd = Module["_inflateEnd"] = createExportWrapper("inflateEnd");

var _deflate = Module["_deflate"] = createExportWrapper("deflate");

var _inflate = Module["_inflate"] = createExportWrapper("inflate");

var _zip_source_layered = Module["_zip_source_layered"] = createExportWrapper("zip_source_layered");

var _zip_source_pass_to_lower_layer = Module["_zip_source_pass_to_lower_layer"] = createExportWrapper("zip_source_pass_to_lower_layer");

var _zip_source_layered_create = Module["_zip_source_layered_create"] = createExportWrapper("zip_source_layered_create");

var _zip_source_filep = Module["_zip_source_filep"] = createExportWrapper("zip_source_filep");

var _zip_source_filep_create = Module["_zip_source_filep_create"] = createExportWrapper("zip_source_filep_create");

var _zip_source_function = Module["_zip_source_function"] = createExportWrapper("zip_source_function");

var _zip_secure_random = Module["_zip_secure_random"] = createExportWrapper("zip_secure_random");

var _zip_source_window_create = Module["_zip_source_window_create"] = createExportWrapper("zip_source_window_create");

var _zip_source_zip_file = Module["_zip_source_zip_file"] = createExportWrapper("zip_source_zip_file");

var _fchmod = Module["_fchmod"] = createExportWrapper("fchmod");

var _remove = Module["_remove"] = createExportWrapper("remove");

var _clearerr = Module["_clearerr"] = createExportWrapper("clearerr");

var _ferror = Module["_ferror"] = createExportWrapper("ferror");

var _fseeko = Module["_fseeko"] = createExportWrapper("fseeko");

var _ftello = Module["_ftello"] = createExportWrapper("ftello");

var _srand = Module["_srand"] = createExportWrapper("srand");

var _rand = Module["_rand"] = createExportWrapper("rand");

var _prvTidyAccessibilityChecks = Module["_prvTidyAccessibilityChecks"] = createExportWrapper("prvTidyAccessibilityChecks");

var _prvTidyNodeAttributeVersions = Module["_prvTidyNodeAttributeVersions"] = createExportWrapper("prvTidyNodeAttributeVersions");

var _prvTidyAttributeIsProprietary = Module["_prvTidyAttributeIsProprietary"] = createExportWrapper("prvTidyAttributeIsProprietary");

var _prvTidyAttributeIsMismatched = Module["_prvTidyAttributeIsMismatched"] = createExportWrapper("prvTidyAttributeIsMismatched");

var _prvTidyAttrGetById = Module["_prvTidyAttrGetById"] = createExportWrapper("prvTidyAttrGetById");

var _prvTidyFindAttribute = Module["_prvTidyFindAttribute"] = createExportWrapper("prvTidyFindAttribute");

var _prvTidyGetAttrByName = Module["_prvTidyGetAttrByName"] = createExportWrapper("prvTidyGetAttrByName");

var _prvTidyDropAttrByName = Module["_prvTidyDropAttrByName"] = createExportWrapper("prvTidyDropAttrByName");

var _prvTidyAddAttribute = Module["_prvTidyAddAttribute"] = createExportWrapper("prvTidyAddAttribute");

var _prvTidyRepairAttrValue = Module["_prvTidyRepairAttrValue"] = createExportWrapper("prvTidyRepairAttrValue");

var _prvTidyFreeAttrPriorityList = Module["_prvTidyFreeAttrPriorityList"] = createExportWrapper("prvTidyFreeAttrPriorityList");

var _prvTidyDefinePriorityAttribute = Module["_prvTidyDefinePriorityAttribute"] = createExportWrapper("prvTidyDefinePriorityAttribute");

var _prvTidygetPriorityAttrList = Module["_prvTidygetPriorityAttrList"] = createExportWrapper("prvTidygetPriorityAttrList");

var _prvTidygetNextPriorityAttr = Module["_prvTidygetNextPriorityAttr"] = createExportWrapper("prvTidygetNextPriorityAttr");

var _prvTidyIsUrl = Module["_prvTidyIsUrl"] = createExportWrapper("prvTidyIsUrl");

var _prvTidyCheckUrl = Module["_prvTidyCheckUrl"] = createExportWrapper("prvTidyCheckUrl");

var _prvTidyIsScript = Module["_prvTidyIsScript"] = createExportWrapper("prvTidyIsScript");

var _prvTidyIsAnchorElement = Module["_prvTidyIsAnchorElement"] = createExportWrapper("prvTidyIsAnchorElement");

var _prvTidyIsCSS1Selector = Module["_prvTidyIsCSS1Selector"] = createExportWrapper("prvTidyIsCSS1Selector");

var _prvTidyRemoveAnchorByNode = Module["_prvTidyRemoveAnchorByNode"] = createExportWrapper("prvTidyRemoveAnchorByNode");

var _prvTidyFreeAnchors = Module["_prvTidyFreeAnchors"] = createExportWrapper("prvTidyFreeAnchors");

var _prvTidyInitAttrs = Module["_prvTidyInitAttrs"] = createExportWrapper("prvTidyInitAttrs");

var _prvTidyFreeAttrTable = Module["_prvTidyFreeAttrTable"] = createExportWrapper("prvTidyFreeAttrTable");

var _prvTidyAppendToClassAttr = Module["_prvTidyAppendToClassAttr"] = createExportWrapper("prvTidyAppendToClassAttr");

var _prvTidyRepairDuplicateAttributes = Module["_prvTidyRepairDuplicateAttributes"] = createExportWrapper("prvTidyRepairDuplicateAttributes");

var _prvTidyCheckAttribute = Module["_prvTidyCheckAttribute"] = createExportWrapper("prvTidyCheckAttribute");

var _prvTidyIsBoolAttribute = Module["_prvTidyIsBoolAttribute"] = createExportWrapper("prvTidyIsBoolAttribute");

var _prvTidyattrIsEvent = Module["_prvTidyattrIsEvent"] = createExportWrapper("prvTidyattrIsEvent");

var _prvTidyIsValidHTMLID = Module["_prvTidyIsValidHTMLID"] = createExportWrapper("prvTidyIsValidHTMLID");

var _prvTidyIsValidXMLID = Module["_prvTidyIsValidXMLID"] = createExportWrapper("prvTidyIsValidXMLID");

var _prvTidySortAttributes = Module["_prvTidySortAttributes"] = createExportWrapper("prvTidySortAttributes");

var _prvTidyDupAttrs = Module["_prvTidyDupAttrs"] = createExportWrapper("prvTidyDupAttrs");

var _prvTidyPushInline = Module["_prvTidyPushInline"] = createExportWrapper("prvTidyPushInline");

var _prvTidyIsPushed = Module["_prvTidyIsPushed"] = createExportWrapper("prvTidyIsPushed");

var _prvTidyPopInline = Module["_prvTidyPopInline"] = createExportWrapper("prvTidyPopInline");

var _prvTidyIsPushedLast = Module["_prvTidyIsPushedLast"] = createExportWrapper("prvTidyIsPushedLast");

var _prvTidyInlineDup = Module["_prvTidyInlineDup"] = createExportWrapper("prvTidyInlineDup");

var _prvTidyDeferDup = Module["_prvTidyDeferDup"] = createExportWrapper("prvTidyDeferDup");

var _prvTidyInsertedToken = Module["_prvTidyInsertedToken"] = createExportWrapper("prvTidyInsertedToken");

var _prvTidySwitchInline = Module["_prvTidySwitchInline"] = createExportWrapper("prvTidySwitchInline");

var _prvTidyInlineDup1 = Module["_prvTidyInlineDup1"] = createExportWrapper("prvTidyInlineDup1");

var _prvTidyCheckNodeIntegrity = Module["_prvTidyCheckNodeIntegrity"] = createExportWrapper("prvTidyCheckNodeIntegrity");

var _prvTidyIsNewNode = Module["_prvTidyIsNewNode"] = createExportWrapper("prvTidyIsNewNode");

var _prvTidyCoerceNode = Module["_prvTidyCoerceNode"] = createExportWrapper("prvTidyCoerceNode");

var _prvTidyRemoveNode = Module["_prvTidyRemoveNode"] = createExportWrapper("prvTidyRemoveNode");

var _prvTidyDiscardElement = Module["_prvTidyDiscardElement"] = createExportWrapper("prvTidyDiscardElement");

var _prvTidyInsertNodeAtStart = Module["_prvTidyInsertNodeAtStart"] = createExportWrapper("prvTidyInsertNodeAtStart");

var _prvTidyInsertNodeAtEnd = Module["_prvTidyInsertNodeAtEnd"] = createExportWrapper("prvTidyInsertNodeAtEnd");

var _prvTidyInsertNodeBeforeElement = Module["_prvTidyInsertNodeBeforeElement"] = createExportWrapper("prvTidyInsertNodeBeforeElement");

var _prvTidyInsertNodeAfterElement = Module["_prvTidyInsertNodeAfterElement"] = createExportWrapper("prvTidyInsertNodeAfterElement");

var _prvTidyTrimEmptyElement = Module["_prvTidyTrimEmptyElement"] = createExportWrapper("prvTidyTrimEmptyElement");

var _prvTidyDropEmptyElements = Module["_prvTidyDropEmptyElements"] = createExportWrapper("prvTidyDropEmptyElements");

var _prvTidyIsBlank = Module["_prvTidyIsBlank"] = createExportWrapper("prvTidyIsBlank");

var _prvTidyParseBlock = Module["_prvTidyParseBlock"] = createExportWrapper("prvTidyParseBlock");

var _prvTidyParseList = Module["_prvTidyParseList"] = createExportWrapper("prvTidyParseList");

var _prvTidyParsePre = Module["_prvTidyParsePre"] = createExportWrapper("prvTidyParsePre");

var _prvTidyParseNamespace = Module["_prvTidyParseNamespace"] = createExportWrapper("prvTidyParseNamespace");

var _prvTidyParseInline = Module["_prvTidyParseInline"] = createExportWrapper("prvTidyParseInline");

var _prvTidyParseEmpty = Module["_prvTidyParseEmpty"] = createExportWrapper("prvTidyParseEmpty");

var _prvTidyParseDefList = Module["_prvTidyParseDefList"] = createExportWrapper("prvTidyParseDefList");

var _prvTidyParseRow = Module["_prvTidyParseRow"] = createExportWrapper("prvTidyParseRow");

var _prvTidyParseRowGroup = Module["_prvTidyParseRowGroup"] = createExportWrapper("prvTidyParseRowGroup");

var _prvTidyParseColGroup = Module["_prvTidyParseColGroup"] = createExportWrapper("prvTidyParseColGroup");

var _prvTidyParseTableTag = Module["_prvTidyParseTableTag"] = createExportWrapper("prvTidyParseTableTag");

var _prvTidyParseOptGroup = Module["_prvTidyParseOptGroup"] = createExportWrapper("prvTidyParseOptGroup");

var _prvTidyParseSelect = Module["_prvTidyParseSelect"] = createExportWrapper("prvTidyParseSelect");

var _prvTidyParseDatalist = Module["_prvTidyParseDatalist"] = createExportWrapper("prvTidyParseDatalist");

var _prvTidyParseText = Module["_prvTidyParseText"] = createExportWrapper("prvTidyParseText");

var _prvTidyParseTitle = Module["_prvTidyParseTitle"] = createExportWrapper("prvTidyParseTitle");

var _prvTidyParseScript = Module["_prvTidyParseScript"] = createExportWrapper("prvTidyParseScript");

var _prvTidyIsJavaScript = Module["_prvTidyIsJavaScript"] = createExportWrapper("prvTidyIsJavaScript");

var _prvTidyParseHead = Module["_prvTidyParseHead"] = createExportWrapper("prvTidyParseHead");

var _prvTidyFindNodeWithId = Module["_prvTidyFindNodeWithId"] = createExportWrapper("prvTidyFindNodeWithId");

var _prvTidyFindNodeById = Module["_prvTidyFindNodeById"] = createExportWrapper("prvTidyFindNodeById");

var _prvTidyParseBody = Module["_prvTidyParseBody"] = createExportWrapper("prvTidyParseBody");

var _prvTidyParseNoFrames = Module["_prvTidyParseNoFrames"] = createExportWrapper("prvTidyParseNoFrames");

var _prvTidyParseFrameSet = Module["_prvTidyParseFrameSet"] = createExportWrapper("prvTidyParseFrameSet");

var _prvTidyParseHTML = Module["_prvTidyParseHTML"] = createExportWrapper("prvTidyParseHTML");

var _prvTidyParseDocument = Module["_prvTidyParseDocument"] = createExportWrapper("prvTidyParseDocument");

var _prvTidyXMLPreserveWhiteSpace = Module["_prvTidyXMLPreserveWhiteSpace"] = createExportWrapper("prvTidyXMLPreserveWhiteSpace");

var _prvTidyParseXMLDocument = Module["_prvTidyParseXMLDocument"] = createExportWrapper("prvTidyParseXMLDocument");

var _prvTidyDeclareUserTag = Module["_prvTidyDeclareUserTag"] = createExportWrapper("prvTidyDeclareUserTag");

var _prvTidyDefineTag = Module["_prvTidyDefineTag"] = createExportWrapper("prvTidyDefineTag");

var _prvTidyFindTag = Module["_prvTidyFindTag"] = createExportWrapper("prvTidyFindTag");

var _prvTidynodeIsAutonomousCustomTag = Module["_prvTidynodeIsAutonomousCustomTag"] = createExportWrapper("prvTidynodeIsAutonomousCustomTag");

var _prvTidyLookupTagDef = Module["_prvTidyLookupTagDef"] = createExportWrapper("prvTidyLookupTagDef");

var _prvTidyFindParser = Module["_prvTidyFindParser"] = createExportWrapper("prvTidyFindParser");

var _prvTidyGetDeclaredTagList = Module["_prvTidyGetDeclaredTagList"] = createExportWrapper("prvTidyGetDeclaredTagList");

var _prvTidyGetNextDeclaredTag = Module["_prvTidyGetNextDeclaredTag"] = createExportWrapper("prvTidyGetNextDeclaredTag");

var _prvTidyInitTags = Module["_prvTidyInitTags"] = createExportWrapper("prvTidyInitTags");

var _prvTidyFreeDeclaredTags = Module["_prvTidyFreeDeclaredTags"] = createExportWrapper("prvTidyFreeDeclaredTags");

var _prvTidyAdjustTags = Module["_prvTidyAdjustTags"] = createExportWrapper("prvTidyAdjustTags");

var _prvTidyIsHTML5Mode = Module["_prvTidyIsHTML5Mode"] = createExportWrapper("prvTidyIsHTML5Mode");

var _prvTidyResetTags = Module["_prvTidyResetTags"] = createExportWrapper("prvTidyResetTags");

var _prvTidyFreeTags = Module["_prvTidyFreeTags"] = createExportWrapper("prvTidyFreeTags");

var _prvTidyCheckAttributes = Module["_prvTidyCheckAttributes"] = createExportWrapper("prvTidyCheckAttributes");

var _prvTidynodeIsText = Module["_prvTidynodeIsText"] = createExportWrapper("prvTidynodeIsText");

var _prvTidynodeHasText = Module["_prvTidynodeHasText"] = createExportWrapper("prvTidynodeHasText");

var _prvTidynodeIsElement = Module["_prvTidynodeIsElement"] = createExportWrapper("prvTidynodeIsElement");

var _prvTidyelementIsAutonomousCustomFormat = Module["_prvTidyelementIsAutonomousCustomFormat"] = createExportWrapper("prvTidyelementIsAutonomousCustomFormat");

var _prvTidynodeIsAutonomousCustomFormat = Module["_prvTidynodeIsAutonomousCustomFormat"] = createExportWrapper("prvTidynodeIsAutonomousCustomFormat");

var _prvTidynodeHasCM = Module["_prvTidynodeHasCM"] = createExportWrapper("prvTidynodeHasCM");

var _prvTidynodeCMIsBlock = Module["_prvTidynodeCMIsBlock"] = createExportWrapper("prvTidynodeCMIsBlock");

var _prvTidynodeCMIsInline = Module["_prvTidynodeCMIsInline"] = createExportWrapper("prvTidynodeCMIsInline");

var _prvTidynodeCMIsEmpty = Module["_prvTidynodeCMIsEmpty"] = createExportWrapper("prvTidynodeCMIsEmpty");

var _prvTidynodeIsHeader = Module["_prvTidynodeIsHeader"] = createExportWrapper("prvTidynodeIsHeader");

var _prvTidynodeHeaderLevel = Module["_prvTidynodeHeaderLevel"] = createExportWrapper("prvTidynodeHeaderLevel");

var _prvTidyTraverseNodeTree = Module["_prvTidyTraverseNodeTree"] = createExportWrapper("prvTidyTraverseNodeTree");

var _prvTidyEntityInfo = Module["_prvTidyEntityInfo"] = createExportWrapper("prvTidyEntityInfo");

var _prvTidyEntityName = Module["_prvTidyEntityName"] = createExportWrapper("prvTidyEntityName");

var _prvTidyHTMLVersion = Module["_prvTidyHTMLVersion"] = createExportWrapper("prvTidyHTMLVersion");

var _prvTidyConstrainVersion = Module["_prvTidyConstrainVersion"] = createExportWrapper("prvTidyConstrainVersion");

var _prvTidyIsWhite = Module["_prvTidyIsWhite"] = createExportWrapper("prvTidyIsWhite");

var _prvTidyIsNewline = Module["_prvTidyIsNewline"] = createExportWrapper("prvTidyIsNewline");

var _prvTidyIsDigit = Module["_prvTidyIsDigit"] = createExportWrapper("prvTidyIsDigit");

var _prvTidyIsLetter = Module["_prvTidyIsLetter"] = createExportWrapper("prvTidyIsLetter");

var _prvTidyIsHTMLSpace = Module["_prvTidyIsHTMLSpace"] = createExportWrapper("prvTidyIsHTMLSpace");

var _prvTidyIsNamechar = Module["_prvTidyIsNamechar"] = createExportWrapper("prvTidyIsNamechar");

var _prvTidyIsXMLLetter = Module["_prvTidyIsXMLLetter"] = createExportWrapper("prvTidyIsXMLLetter");

var _prvTidyIsXMLNamechar = Module["_prvTidyIsXMLNamechar"] = createExportWrapper("prvTidyIsXMLNamechar");

var _prvTidyIsUpper = Module["_prvTidyIsUpper"] = createExportWrapper("prvTidyIsUpper");

var _prvTidyToLower = Module["_prvTidyToLower"] = createExportWrapper("prvTidyToLower");

var _prvTidyToUpper = Module["_prvTidyToUpper"] = createExportWrapper("prvTidyToUpper");

var _prvTidyNewLexer = Module["_prvTidyNewLexer"] = createExportWrapper("prvTidyNewLexer");

var _prvTidyFreeLexer = Module["_prvTidyFreeLexer"] = createExportWrapper("prvTidyFreeLexer");

var _prvTidyFreeNode = Module["_prvTidyFreeNode"] = createExportWrapper("prvTidyFreeNode");

var _prvTidyAddCharToLexer = Module["_prvTidyAddCharToLexer"] = createExportWrapper("prvTidyAddCharToLexer");

var _prvTidyNewNode = Module["_prvTidyNewNode"] = createExportWrapper("prvTidyNewNode");

var _prvTidyCloneNode = Module["_prvTidyCloneNode"] = createExportWrapper("prvTidyCloneNode");

var _prvTidyFreeAttrs = Module["_prvTidyFreeAttrs"] = createExportWrapper("prvTidyFreeAttrs");

var _prvTidyFreeAttribute = Module["_prvTidyFreeAttribute"] = createExportWrapper("prvTidyFreeAttribute");

var _prvTidyDetachAttribute = Module["_prvTidyDetachAttribute"] = createExportWrapper("prvTidyDetachAttribute");

var _prvTidyRemoveAttribute = Module["_prvTidyRemoveAttribute"] = createExportWrapper("prvTidyRemoveAttribute");

var _prvTidyTextToken = Module["_prvTidyTextToken"] = createExportWrapper("prvTidyTextToken");

var _prvTidyNewLineNode = Module["_prvTidyNewLineNode"] = createExportWrapper("prvTidyNewLineNode");

var _prvTidyNewLiteralTextNode = Module["_prvTidyNewLiteralTextNode"] = createExportWrapper("prvTidyNewLiteralTextNode");

var _prvTidyAddStringLiteral = Module["_prvTidyAddStringLiteral"] = createExportWrapper("prvTidyAddStringLiteral");

var _prvTidyFindDocType = Module["_prvTidyFindDocType"] = createExportWrapper("prvTidyFindDocType");

var _prvTidyFindContainer = Module["_prvTidyFindContainer"] = createExportWrapper("prvTidyFindContainer");

var _prvTidyFindHTML = Module["_prvTidyFindHTML"] = createExportWrapper("prvTidyFindHTML");

var _prvTidyFindXmlDecl = Module["_prvTidyFindXmlDecl"] = createExportWrapper("prvTidyFindXmlDecl");

var _prvTidyFindHEAD = Module["_prvTidyFindHEAD"] = createExportWrapper("prvTidyFindHEAD");

var _prvTidyFindTITLE = Module["_prvTidyFindTITLE"] = createExportWrapper("prvTidyFindTITLE");

var _prvTidyFindBody = Module["_prvTidyFindBody"] = createExportWrapper("prvTidyFindBody");

var _prvTidyAddGenerator = Module["_prvTidyAddGenerator"] = createExportWrapper("prvTidyAddGenerator");

var _prvTidyInferredTag = Module["_prvTidyInferredTag"] = createExportWrapper("prvTidyInferredTag");

var _prvTidyApparentVersion = Module["_prvTidyApparentVersion"] = createExportWrapper("prvTidyApparentVersion");

var _prvTidyHTMLVersionNameFromCode = Module["_prvTidyHTMLVersionNameFromCode"] = createExportWrapper("prvTidyHTMLVersionNameFromCode");

var _prvTidyHTMLVersionNumberFromCode = Module["_prvTidyHTMLVersionNumberFromCode"] = createExportWrapper("prvTidyHTMLVersionNumberFromCode");

var _prvTidyWarnMissingSIInEmittedDocType = Module["_prvTidyWarnMissingSIInEmittedDocType"] = createExportWrapper("prvTidyWarnMissingSIInEmittedDocType");

var _prvTidySetXHTMLDocType = Module["_prvTidySetXHTMLDocType"] = createExportWrapper("prvTidySetXHTMLDocType");

var _prvTidyFixDocType = Module["_prvTidyFixDocType"] = createExportWrapper("prvTidyFixDocType");

var _prvTidyFixXmlDecl = Module["_prvTidyFixXmlDecl"] = createExportWrapper("prvTidyFixXmlDecl");

var _prvTidyUngetToken = Module["_prvTidyUngetToken"] = createExportWrapper("prvTidyUngetToken");

var _prvTidyGetToken = Module["_prvTidyGetToken"] = createExportWrapper("prvTidyGetToken");

var _prvTidyInitMap = Module["_prvTidyInitMap"] = createExportWrapper("prvTidyInitMap");

var _prvTidyNewAttribute = Module["_prvTidyNewAttribute"] = createExportWrapper("prvTidyNewAttribute");

var _prvTidyNewAttributeEx = Module["_prvTidyNewAttributeEx"] = createExportWrapper("prvTidyNewAttributeEx");

var _prvTidyInsertAttributeAtEnd = Module["_prvTidyInsertAttributeAtEnd"] = createExportWrapper("prvTidyInsertAttributeAtEnd");

var _prvTidyInsertAttributeAtStart = Module["_prvTidyInsertAttributeAtStart"] = createExportWrapper("prvTidyInsertAttributeAtStart");

var _prvTidyPPrintTabs = Module["_prvTidyPPrintTabs"] = createExportWrapper("prvTidyPPrintTabs");

var _prvTidyPPrintSpaces = Module["_prvTidyPPrintSpaces"] = createExportWrapper("prvTidyPPrintSpaces");

var _prvTidyInitPrintBuf = Module["_prvTidyInitPrintBuf"] = createExportWrapper("prvTidyInitPrintBuf");

var _prvTidyFreePrintBuf = Module["_prvTidyFreePrintBuf"] = createExportWrapper("prvTidyFreePrintBuf");

var _prvTidyPFlushLine = Module["_prvTidyPFlushLine"] = createExportWrapper("prvTidyPFlushLine");

var _prvTidyPFlushLineSmart = Module["_prvTidyPFlushLineSmart"] = createExportWrapper("prvTidyPFlushLineSmart");

var _prvTidyTextNodeEndWithSpace = Module["_prvTidyTextNodeEndWithSpace"] = createExportWrapper("prvTidyTextNodeEndWithSpace");

var _prvTidyPrintBody = Module["_prvTidyPrintBody"] = createExportWrapper("prvTidyPrintBody");

var _prvTidyPPrintTree = Module["_prvTidyPPrintTree"] = createExportWrapper("prvTidyPPrintTree");

var _prvTidyPPrintXMLTree = Module["_prvTidyPPrintXMLTree"] = createExportWrapper("prvTidyPPrintXMLTree");

var _prvTidyFreeStyles = Module["_prvTidyFreeStyles"] = createExportWrapper("prvTidyFreeStyles");

var _prvTidyAddStyleAsClass = Module["_prvTidyAddStyleAsClass"] = createExportWrapper("prvTidyAddStyleAsClass");

var _prvTidyFixNodeLinks = Module["_prvTidyFixNodeLinks"] = createExportWrapper("prvTidyFixNodeLinks");

var _prvTidyAddStyleProperty = Module["_prvTidyAddStyleProperty"] = createExportWrapper("prvTidyAddStyleProperty");

var _prvTidyCleanDocument = Module["_prvTidyCleanDocument"] = createExportWrapper("prvTidyCleanDocument");

var _prvTidyNestedEmphasis = Module["_prvTidyNestedEmphasis"] = createExportWrapper("prvTidyNestedEmphasis");

var _prvTidyEmFromI = Module["_prvTidyEmFromI"] = createExportWrapper("prvTidyEmFromI");

var _prvTidyList2BQ = Module["_prvTidyList2BQ"] = createExportWrapper("prvTidyList2BQ");

var _prvTidyBQ2Div = Module["_prvTidyBQ2Div"] = createExportWrapper("prvTidyBQ2Div");

var _prvTidyDropSections = Module["_prvTidyDropSections"] = createExportWrapper("prvTidyDropSections");

var _prvTidyNormalizeSpaces = Module["_prvTidyNormalizeSpaces"] = createExportWrapper("prvTidyNormalizeSpaces");

var _prvTidyCleanWord2000 = Module["_prvTidyCleanWord2000"] = createExportWrapper("prvTidyCleanWord2000");

var _prvTidyIsWord2000 = Module["_prvTidyIsWord2000"] = createExportWrapper("prvTidyIsWord2000");

var _prvTidyBumpObject = Module["_prvTidyBumpObject"] = createExportWrapper("prvTidyBumpObject");

var _prvTidyTidyMetaCharset = Module["_prvTidyTidyMetaCharset"] = createExportWrapper("prvTidyTidyMetaCharset");

var _prvTidyDropComments = Module["_prvTidyDropComments"] = createExportWrapper("prvTidyDropComments");

var _prvTidyDropFontElements = Module["_prvTidyDropFontElements"] = createExportWrapper("prvTidyDropFontElements");

var _prvTidyWbrToSpace = Module["_prvTidyWbrToSpace"] = createExportWrapper("prvTidyWbrToSpace");

var _prvTidyDowngradeTypography = Module["_prvTidyDowngradeTypography"] = createExportWrapper("prvTidyDowngradeTypography");

var _prvTidyReplacePreformattedSpaces = Module["_prvTidyReplacePreformattedSpaces"] = createExportWrapper("prvTidyReplacePreformattedSpaces");

var _prvTidyConvertCDATANodes = Module["_prvTidyConvertCDATANodes"] = createExportWrapper("prvTidyConvertCDATANodes");

var _prvTidyFixLanguageInformation = Module["_prvTidyFixLanguageInformation"] = createExportWrapper("prvTidyFixLanguageInformation");

var _prvTidyFixXhtmlNamespace = Module["_prvTidyFixXhtmlNamespace"] = createExportWrapper("prvTidyFixXhtmlNamespace");

var _prvTidyFixAnchors = Module["_prvTidyFixAnchors"] = createExportWrapper("prvTidyFixAnchors");

var _prvTidyCleanStyle = Module["_prvTidyCleanStyle"] = createExportWrapper("prvTidyCleanStyle");

var _prvTidyReleaseDate = Module["_prvTidyReleaseDate"] = createExportWrapper("prvTidyReleaseDate");

var _prvTidytidyLibraryVersion = Module["_prvTidytidyLibraryVersion"] = createExportWrapper("prvTidytidyLibraryVersion");

var _prvTidyReport = Module["_prvTidyReport"] = createExportWrapper("prvTidyReport");

var _prvTidyReportAccessError = Module["_prvTidyReportAccessError"] = createExportWrapper("prvTidyReportAccessError");

var _prvTidyReportAttrError = Module["_prvTidyReportAttrError"] = createExportWrapper("prvTidyReportAttrError");

var _prvTidyReportBadArgument = Module["_prvTidyReportBadArgument"] = createExportWrapper("prvTidyReportBadArgument");

var _prvTidyReportEntityError = Module["_prvTidyReportEntityError"] = createExportWrapper("prvTidyReportEntityError");

var _prvTidyReportFileError = Module["_prvTidyReportFileError"] = createExportWrapper("prvTidyReportFileError");

var _prvTidyReportEncodingError = Module["_prvTidyReportEncodingError"] = createExportWrapper("prvTidyReportEncodingError");

var _prvTidyReportEncodingWarning = Module["_prvTidyReportEncodingWarning"] = createExportWrapper("prvTidyReportEncodingWarning");

var _prvTidyReportMissingAttr = Module["_prvTidyReportMissingAttr"] = createExportWrapper("prvTidyReportMissingAttr");

var _prvTidyReportSurrogateError = Module["_prvTidyReportSurrogateError"] = createExportWrapper("prvTidyReportSurrogateError");

var _prvTidyReportUnknownOption = Module["_prvTidyReportUnknownOption"] = createExportWrapper("prvTidyReportUnknownOption");

var _formatDialogue = Module["_formatDialogue"] = createExportWrapper("formatDialogue");

var _prvTidyDialogue = Module["_prvTidyDialogue"] = createExportWrapper("prvTidyDialogue");

var _prvTidyErrorSummary = Module["_prvTidyErrorSummary"] = createExportWrapper("prvTidyErrorSummary");

var _prvTidyReportMarkupVersion = Module["_prvTidyReportMarkupVersion"] = createExportWrapper("prvTidyReportMarkupVersion");

var _prvTidyReportNumWarnings = Module["_prvTidyReportNumWarnings"] = createExportWrapper("prvTidyReportNumWarnings");

var _prvTidyFreeMutedMessageList = Module["_prvTidyFreeMutedMessageList"] = createExportWrapper("prvTidyFreeMutedMessageList");

var _prvTidyDefineMutedMessage = Module["_prvTidyDefineMutedMessage"] = createExportWrapper("prvTidyDefineMutedMessage");

var _prvTidytidyErrorCodeFromKey = Module["_prvTidytidyErrorCodeFromKey"] = createExportWrapper("prvTidytidyErrorCodeFromKey");

var _prvTidygetMutedMessageList = Module["_prvTidygetMutedMessageList"] = createExportWrapper("prvTidygetMutedMessageList");

var _prvTidygetNextMutedMessage = Module["_prvTidygetNextMutedMessage"] = createExportWrapper("prvTidygetNextMutedMessage");

var _prvTidytidyErrorCodeAsKey = Module["_prvTidytidyErrorCodeAsKey"] = createExportWrapper("prvTidytidyErrorCodeAsKey");

var _prvTidygetErrorCodeList = Module["_prvTidygetErrorCodeList"] = createExportWrapper("prvTidygetErrorCodeList");

var _prvTidygetNextErrorCode = Module["_prvTidygetNextErrorCode"] = createExportWrapper("prvTidygetNextErrorCode");

var _prvTidyOptGetDocDesc = Module["_prvTidyOptGetDocDesc"] = createExportWrapper("prvTidyOptGetDocDesc");

var _prvTidyInitConfig = Module["_prvTidyInitConfig"] = createExportWrapper("prvTidyInitConfig");

var _prvTidyResetConfigToDefault = Module["_prvTidyResetConfigToDefault"] = createExportWrapper("prvTidyResetConfigToDefault");

var _prvTidyFreeConfig = Module["_prvTidyFreeConfig"] = createExportWrapper("prvTidyFreeConfig");

var _prvTidyTakeConfigSnapshot = Module["_prvTidyTakeConfigSnapshot"] = createExportWrapper("prvTidyTakeConfigSnapshot");

var _prvTidylookupOption = Module["_prvTidylookupOption"] = createExportWrapper("prvTidylookupOption");

var _prvTidygetOption = Module["_prvTidygetOption"] = createExportWrapper("prvTidygetOption");

var _prvTidygetOptionIsList = Module["_prvTidygetOptionIsList"] = createExportWrapper("prvTidygetOptionIsList");

var _prvTidyDeclareListItem = Module["_prvTidyDeclareListItem"] = createExportWrapper("prvTidyDeclareListItem");

var _prvTidyGetPickListLabelForPick = Module["_prvTidyGetPickListLabelForPick"] = createExportWrapper("prvTidyGetPickListLabelForPick");

var _prvTidySetOptionInt = Module["_prvTidySetOptionInt"] = createExportWrapper("prvTidySetOptionInt");

var _prvTidySetOptionBool = Module["_prvTidySetOptionBool"] = createExportWrapper("prvTidySetOptionBool");

var _prvTidyResetOptionToDefault = Module["_prvTidyResetOptionToDefault"] = createExportWrapper("prvTidyResetOptionToDefault");

var _prvTidyResetConfigToSnapshot = Module["_prvTidyResetConfigToSnapshot"] = createExportWrapper("prvTidyResetConfigToSnapshot");

var _prvTidyParseConfigValue = Module["_prvTidyParseConfigValue"] = createExportWrapper("prvTidyParseConfigValue");

var _prvTidyCopyConfig = Module["_prvTidyCopyConfig"] = createExportWrapper("prvTidyCopyConfig");

var _tidyFileExists = Module["_tidyFileExists"] = createExportWrapper("tidyFileExists");

var _prvTidyParseConfigFile = Module["_prvTidyParseConfigFile"] = createExportWrapper("prvTidyParseConfigFile");

var _prvTidyParseConfigFileEnc = Module["_prvTidyParseConfigFileEnc"] = createExportWrapper("prvTidyParseConfigFileEnc");

var _prvTidyCharEncodingId = Module["_prvTidyCharEncodingId"] = createExportWrapper("prvTidyCharEncodingId");

var _prvTidyParseConfigOption = Module["_prvTidyParseConfigOption"] = createExportWrapper("prvTidyParseConfigOption");

var _prvTidyAdjustCharEncoding = Module["_prvTidyAdjustCharEncoding"] = createExportWrapper("prvTidyAdjustCharEncoding");

var _prvTidyAdjustConfig = Module["_prvTidyAdjustConfig"] = createExportWrapper("prvTidyAdjustConfig");

var _prvTidyCharEncodingName = Module["_prvTidyCharEncodingName"] = createExportWrapper("prvTidyCharEncodingName");

var _prvTidyCharEncodingOptName = Module["_prvTidyCharEncodingOptName"] = createExportWrapper("prvTidyCharEncodingOptName");

var _prvTidygetOptionList = Module["_prvTidygetOptionList"] = createExportWrapper("prvTidygetOptionList");

var _prvTidygetNextOption = Module["_prvTidygetNextOption"] = createExportWrapper("prvTidygetNextOption");

var _prvTidygetOptionPickList = Module["_prvTidygetOptionPickList"] = createExportWrapper("prvTidygetOptionPickList");

var _prvTidygetNextOptionPick = Module["_prvTidygetNextOptionPick"] = createExportWrapper("prvTidygetNextOptionPick");

var _prvTidyConfigDiffThanSnapshot = Module["_prvTidyConfigDiffThanSnapshot"] = createExportWrapper("prvTidyConfigDiffThanSnapshot");

var _prvTidyConfigDiffThanDefault = Module["_prvTidyConfigDiffThanDefault"] = createExportWrapper("prvTidyConfigDiffThanDefault");

var _prvTidySaveConfigFile = Module["_prvTidySaveConfigFile"] = createExportWrapper("prvTidySaveConfigFile");

var _prvTidySaveConfigSink = Module["_prvTidySaveConfigSink"] = createExportWrapper("prvTidySaveConfigSink");

var _fiprintf = Module["_fiprintf"] = createExportWrapper("fiprintf");

var _tidyInitInputBuffer = Module["_tidyInitInputBuffer"] = createExportWrapper("tidyInitInputBuffer");

var _tidyInitOutputBuffer = Module["_tidyInitOutputBuffer"] = createExportWrapper("tidyInitOutputBuffer");

var _tidyBufInitWithAllocator = Module["_tidyBufInitWithAllocator"] = createExportWrapper("tidyBufInitWithAllocator");

var _tidyBufAlloc = Module["_tidyBufAlloc"] = createExportWrapper("tidyBufAlloc");

var _tidyBufAllocWithAllocator = Module["_tidyBufAllocWithAllocator"] = createExportWrapper("tidyBufAllocWithAllocator");

var _tidyBufCheckAlloc = Module["_tidyBufCheckAlloc"] = createExportWrapper("tidyBufCheckAlloc");

var _tidyBufClear = Module["_tidyBufClear"] = createExportWrapper("tidyBufClear");

var _tidyBufDetach = Module["_tidyBufDetach"] = createExportWrapper("tidyBufDetach");

var _tidyBufAppend = Module["_tidyBufAppend"] = createExportWrapper("tidyBufAppend");

var _tidyBufPutByte = Module["_tidyBufPutByte"] = createExportWrapper("tidyBufPutByte");

var _tidyBufPopByte = Module["_tidyBufPopByte"] = createExportWrapper("tidyBufPopByte");

var _tidyBufGetByte = Module["_tidyBufGetByte"] = createExportWrapper("tidyBufGetByte");

var _tidyBufEndOfInput = Module["_tidyBufEndOfInput"] = createExportWrapper("tidyBufEndOfInput");

var _tidyBufUngetByte = Module["_tidyBufUngetByte"] = createExportWrapper("tidyBufUngetByte");

var _prvTidyinitStdIOFileSource = Module["_prvTidyinitStdIOFileSource"] = createExportWrapper("prvTidyinitStdIOFileSource");

var _prvTidyfreeStdIOFileSource = Module["_prvTidyfreeStdIOFileSource"] = createExportWrapper("prvTidyfreeStdIOFileSource");

var _prvTidyfilesink_putByte = Module["_prvTidyfilesink_putByte"] = createExportWrapper("prvTidyfilesink_putByte");

var _prvTidyinitFileSink = Module["_prvTidyinitFileSink"] = createExportWrapper("prvTidyinitFileSink");

var _prvTidyStdErrOutput = Module["_prvTidyStdErrOutput"] = createExportWrapper("prvTidyStdErrOutput");

var _prvTidyReleaseStreamOut = Module["_prvTidyReleaseStreamOut"] = createExportWrapper("prvTidyReleaseStreamOut");

var _prvTidyinitStreamIn = Module["_prvTidyinitStreamIn"] = createExportWrapper("prvTidyinitStreamIn");

var _prvTidyfreeStreamIn = Module["_prvTidyfreeStreamIn"] = createExportWrapper("prvTidyfreeStreamIn");

var _prvTidyFileInput = Module["_prvTidyFileInput"] = createExportWrapper("prvTidyFileInput");

var _prvTidyBufferInput = Module["_prvTidyBufferInput"] = createExportWrapper("prvTidyBufferInput");

var _prvTidyUserInput = Module["_prvTidyUserInput"] = createExportWrapper("prvTidyUserInput");

var _prvTidyReadBOMEncoding = Module["_prvTidyReadBOMEncoding"] = createExportWrapper("prvTidyReadBOMEncoding");

var _prvTidyReadChar = Module["_prvTidyReadChar"] = createExportWrapper("prvTidyReadChar");

var _prvTidyUngetChar = Module["_prvTidyUngetChar"] = createExportWrapper("prvTidyUngetChar");

var _prvTidyDecodeMacRoman = Module["_prvTidyDecodeMacRoman"] = createExportWrapper("prvTidyDecodeMacRoman");

var _prvTidyDecodeWin1252 = Module["_prvTidyDecodeWin1252"] = createExportWrapper("prvTidyDecodeWin1252");

var _prvTidyFileOutput = Module["_prvTidyFileOutput"] = createExportWrapper("prvTidyFileOutput");

var _prvTidyBufferOutput = Module["_prvTidyBufferOutput"] = createExportWrapper("prvTidyBufferOutput");

var _prvTidyUserOutput = Module["_prvTidyUserOutput"] = createExportWrapper("prvTidyUserOutput");

var _prvTidyWriteChar = Module["_prvTidyWriteChar"] = createExportWrapper("prvTidyWriteChar");

var _tidyInitSource = Module["_tidyInitSource"] = createExportWrapper("tidyInitSource");

var _tidyInitSink = Module["_tidyInitSink"] = createExportWrapper("tidyInitSink");

var _tidyGetByte = Module["_tidyGetByte"] = createExportWrapper("tidyGetByte");

var _tidyIsEOF = Module["_tidyIsEOF"] = createExportWrapper("tidyIsEOF");

var _tidyUngetByte = Module["_tidyUngetByte"] = createExportWrapper("tidyUngetByte");

var _tidyPutByte = Module["_tidyPutByte"] = createExportWrapper("tidyPutByte");

var _prvTidyIsEOF = Module["_prvTidyIsEOF"] = createExportWrapper("prvTidyIsEOF");

var _prvTidyoutBOM = Module["_prvTidyoutBOM"] = createExportWrapper("prvTidyoutBOM");

var _prvTidyGetEncodingNameFromTidyId = Module["_prvTidyGetEncodingNameFromTidyId"] = createExportWrapper("prvTidyGetEncodingNameFromTidyId");

var _prvTidyGetEncodingOptNameFromTidyId = Module["_prvTidyGetEncodingOptNameFromTidyId"] = createExportWrapper("prvTidyGetEncodingOptNameFromTidyId");

var _prvTidyGetCharEncodingFromOptName = Module["_prvTidyGetCharEncodingFromOptName"] = createExportWrapper("prvTidyGetCharEncodingFromOptName");

var _prvTidytmbstrdup = Module["_prvTidytmbstrdup"] = createExportWrapper("prvTidytmbstrdup");

var _prvTidytmbstrlen = Module["_prvTidytmbstrlen"] = createExportWrapper("prvTidytmbstrlen");

var _prvTidytmbstrndup = Module["_prvTidytmbstrndup"] = createExportWrapper("prvTidytmbstrndup");

var _prvTidytmbstrncpy = Module["_prvTidytmbstrncpy"] = createExportWrapper("prvTidytmbstrncpy");

var _prvTidytmbstrcpy = Module["_prvTidytmbstrcpy"] = createExportWrapper("prvTidytmbstrcpy");

var _prvTidytmbstrcat = Module["_prvTidytmbstrcat"] = createExportWrapper("prvTidytmbstrcat");

var _prvTidytmbstrcmp = Module["_prvTidytmbstrcmp"] = createExportWrapper("prvTidytmbstrcmp");

var _prvTidytmbstrcasecmp = Module["_prvTidytmbstrcasecmp"] = createExportWrapper("prvTidytmbstrcasecmp");

var _prvTidytmbstrncmp = Module["_prvTidytmbstrncmp"] = createExportWrapper("prvTidytmbstrncmp");

var _prvTidytmbstrncasecmp = Module["_prvTidytmbstrncasecmp"] = createExportWrapper("prvTidytmbstrncasecmp");

var _prvTidytmbsubstrn = Module["_prvTidytmbsubstrn"] = createExportWrapper("prvTidytmbsubstrn");

var _prvTidytmbsubstr = Module["_prvTidytmbsubstr"] = createExportWrapper("prvTidytmbsubstr");

var _prvTidytmbstrtolower = Module["_prvTidytmbstrtolower"] = createExportWrapper("prvTidytmbstrtolower");

var _prvTidytmbstrtoupper = Module["_prvTidytmbstrtoupper"] = createExportWrapper("prvTidytmbstrtoupper");

var _prvTidytmbvsnprintf = Module["_prvTidytmbvsnprintf"] = createExportWrapper("prvTidytmbvsnprintf");

var _prvTidytmbsnprintf = Module["_prvTidytmbsnprintf"] = createExportWrapper("prvTidytmbsnprintf");

var _prvTidyDecodeUTF8BytesToChar = Module["_prvTidyDecodeUTF8BytesToChar"] = createExportWrapper("prvTidyDecodeUTF8BytesToChar");

var _prvTidyEncodeCharToUTF8Bytes = Module["_prvTidyEncodeCharToUTF8Bytes"] = createExportWrapper("prvTidyEncodeCharToUTF8Bytes");

var _prvTidyGetUTF8 = Module["_prvTidyGetUTF8"] = createExportWrapper("prvTidyGetUTF8");

var _prvTidyPutUTF8 = Module["_prvTidyPutUTF8"] = createExportWrapper("prvTidyPutUTF8");

var _prvTidyIsValidUTF16FromUCS4 = Module["_prvTidyIsValidUTF16FromUCS4"] = createExportWrapper("prvTidyIsValidUTF16FromUCS4");

var _prvTidyIsHighSurrogate = Module["_prvTidyIsHighSurrogate"] = createExportWrapper("prvTidyIsHighSurrogate");

var _prvTidyIsLowSurrogate = Module["_prvTidyIsLowSurrogate"] = createExportWrapper("prvTidyIsLowSurrogate");

var _prvTidyCombineSurrogatePair = Module["_prvTidyCombineSurrogatePair"] = createExportWrapper("prvTidyCombineSurrogatePair");

var _prvTidySplitSurrogatePair = Module["_prvTidySplitSurrogatePair"] = createExportWrapper("prvTidySplitSurrogatePair");

var _prvTidyIsValidCombinedChar = Module["_prvTidyIsValidCombinedChar"] = createExportWrapper("prvTidyIsValidCombinedChar");

var _prvTidyIsCombinedChar = Module["_prvTidyIsCombinedChar"] = createExportWrapper("prvTidyIsCombinedChar");

var _vsnprintf = Module["_vsnprintf"] = createExportWrapper("vsnprintf");

var _prvTidytidyMessageCreate = Module["_prvTidytidyMessageCreate"] = createExportWrapper("prvTidytidyMessageCreate");

var _tidyLocalizedStringN = Module["_tidyLocalizedStringN"] = createExportWrapper("tidyLocalizedStringN");

var _prvTidyinitFileSource = Module["_prvTidyinitFileSource"] = createExportWrapper("prvTidyinitFileSource");

var _fputc = Module["_fputc"] = createExportWrapper("fputc");

var _prvTidytidyMessageRelease = Module["_prvTidytidyMessageRelease"] = createExportWrapper("prvTidytidyMessageRelease");

var _tidyLocalizedString = Module["_tidyLocalizedString"] = createExportWrapper("tidyLocalizedString");

var _prvTidytidyMessageCreateWithNode = Module["_prvTidytidyMessageCreateWithNode"] = createExportWrapper("prvTidytidyMessageCreateWithNode");

var _prvTidytidyMessageCreateWithLexer = Module["_prvTidytidyMessageCreateWithLexer"] = createExportWrapper("prvTidytidyMessageCreateWithLexer");

var _prvTidyfreeFileSource = Module["_prvTidyfreeFileSource"] = createExportWrapper("prvTidyfreeFileSource");

var _siprintf = Module["_siprintf"] = createExportWrapper("siprintf");

var _strtok = Module["_strtok"] = createExportWrapper("strtok");

var _prvTidytidyGetLanguageSetByUser = Module["_prvTidytidyGetLanguageSetByUser"] = createExportWrapper("prvTidytidyGetLanguageSetByUser");

var _prvTidytidySetLanguage = Module["_prvTidytidySetLanguage"] = createExportWrapper("prvTidytidySetLanguage");

var _tidyCreateWithAllocator = Module["_tidyCreateWithAllocator"] = createExportWrapper("tidyCreateWithAllocator");

var _tidySetAppData = Module["_tidySetAppData"] = createExportWrapper("tidySetAppData");

var _tidyGetAppData = Module["_tidyGetAppData"] = createExportWrapper("tidyGetAppData");

var _tidyPlatform = Module["_tidyPlatform"] = createExportWrapper("tidyPlatform");

var _tidySetOptionCallback = Module["_tidySetOptionCallback"] = createExportWrapper("tidySetOptionCallback");

var _tidySetConfigCallback = Module["_tidySetConfigCallback"] = createExportWrapper("tidySetConfigCallback");

var _tidySetConfigChangeCallback = Module["_tidySetConfigChangeCallback"] = createExportWrapper("tidySetConfigChangeCallback");

var _tidyLoadConfigEnc = Module["_tidyLoadConfigEnc"] = createExportWrapper("tidyLoadConfigEnc");

var _tidySetInCharEncoding = Module["_tidySetInCharEncoding"] = createExportWrapper("tidySetInCharEncoding");

var _tidySetOutCharEncoding = Module["_tidySetOutCharEncoding"] = createExportWrapper("tidySetOutCharEncoding");

var _tidyOptGetIdForName = Module["_tidyOptGetIdForName"] = createExportWrapper("tidyOptGetIdForName");

var _tidyGetOption = Module["_tidyGetOption"] = createExportWrapper("tidyGetOption");

var _tidyOptionIsList = Module["_tidyOptionIsList"] = createExportWrapper("tidyOptionIsList");

var _tidyOptGetCategory = Module["_tidyOptGetCategory"] = createExportWrapper("tidyOptGetCategory");

var _tidyOptGetDefault = Module["_tidyOptGetDefault"] = createExportWrapper("tidyOptGetDefault");

var _tidyOptGetDefaultInt = Module["_tidyOptGetDefaultInt"] = createExportWrapper("tidyOptGetDefaultInt");

var _tidyOptGetDefaultBool = Module["_tidyOptGetDefaultBool"] = createExportWrapper("tidyOptGetDefaultBool");

var _tidyOptGetPickList = Module["_tidyOptGetPickList"] = createExportWrapper("tidyOptGetPickList");

var _tidyOptGetNextPick = Module["_tidyOptGetNextPick"] = createExportWrapper("tidyOptGetNextPick");

var _tidyOptParseValue = Module["_tidyOptParseValue"] = createExportWrapper("tidyOptParseValue");

var _tidyOptGetEncName = Module["_tidyOptGetEncName"] = createExportWrapper("tidyOptGetEncName");

var _tidyOptGetCurrPick = Module["_tidyOptGetCurrPick"] = createExportWrapper("tidyOptGetCurrPick");

var _tidyOptGetDeclTagList = Module["_tidyOptGetDeclTagList"] = createExportWrapper("tidyOptGetDeclTagList");

var _tidyOptGetNextDeclTag = Module["_tidyOptGetNextDeclTag"] = createExportWrapper("tidyOptGetNextDeclTag");

var _tidyOptGetPriorityAttrList = Module["_tidyOptGetPriorityAttrList"] = createExportWrapper("tidyOptGetPriorityAttrList");

var _tidyOptGetNextPriorityAttr = Module["_tidyOptGetNextPriorityAttr"] = createExportWrapper("tidyOptGetNextPriorityAttr");

var _tidyOptGetMutedMessageList = Module["_tidyOptGetMutedMessageList"] = createExportWrapper("tidyOptGetMutedMessageList");

var _tidyOptGetNextMutedMessage = Module["_tidyOptGetNextMutedMessage"] = createExportWrapper("tidyOptGetNextMutedMessage");

var _prvTidytidyLocalizedString = Module["_prvTidytidyLocalizedString"] = createExportWrapper("prvTidytidyLocalizedString");

var _tidyOptGetDocLinksList = Module["_tidyOptGetDocLinksList"] = createExportWrapper("tidyOptGetDocLinksList");

var _tidyOptGetNextDocLinks = Module["_tidyOptGetNextDocLinks"] = createExportWrapper("tidyOptGetNextDocLinks");

var _tidyOptSaveFile = Module["_tidyOptSaveFile"] = createExportWrapper("tidyOptSaveFile");

var _tidyOptSaveSink = Module["_tidyOptSaveSink"] = createExportWrapper("tidyOptSaveSink");

var _tidyOptSnapshot = Module["_tidyOptSnapshot"] = createExportWrapper("tidyOptSnapshot");

var _tidyOptResetToSnapshot = Module["_tidyOptResetToSnapshot"] = createExportWrapper("tidyOptResetToSnapshot");

var _tidyOptResetAllToDefault = Module["_tidyOptResetAllToDefault"] = createExportWrapper("tidyOptResetAllToDefault");

var _tidyOptResetToDefault = Module["_tidyOptResetToDefault"] = createExportWrapper("tidyOptResetToDefault");

var _tidyOptDiffThanDefault = Module["_tidyOptDiffThanDefault"] = createExportWrapper("tidyOptDiffThanDefault");

var _tidyOptDiffThanSnapshot = Module["_tidyOptDiffThanSnapshot"] = createExportWrapper("tidyOptDiffThanSnapshot");

var _tidyOptCopyConfig = Module["_tidyOptCopyConfig"] = createExportWrapper("tidyOptCopyConfig");

var _tidySetEmacsFile = Module["_tidySetEmacsFile"] = createExportWrapper("tidySetEmacsFile");

var _tidyGetEmacsFile = Module["_tidyGetEmacsFile"] = createExportWrapper("tidyGetEmacsFile");

var _tidySetReportFilter = Module["_tidySetReportFilter"] = createExportWrapper("tidySetReportFilter");

var _tidySetReportCallback = Module["_tidySetReportCallback"] = createExportWrapper("tidySetReportCallback");

var _tidySetMessageCallback = Module["_tidySetMessageCallback"] = createExportWrapper("tidySetMessageCallback");

var _tidyGetMessageDoc = Module["_tidyGetMessageDoc"] = createExportWrapper("tidyGetMessageDoc");

var _prvTidygetMessageDoc = Module["_prvTidygetMessageDoc"] = createExportWrapper("prvTidygetMessageDoc");

var _tidyGetMessageCode = Module["_tidyGetMessageCode"] = createExportWrapper("tidyGetMessageCode");

var _prvTidygetMessageCode = Module["_prvTidygetMessageCode"] = createExportWrapper("prvTidygetMessageCode");

var _tidyGetMessageKey = Module["_tidyGetMessageKey"] = createExportWrapper("tidyGetMessageKey");

var _prvTidygetMessageKey = Module["_prvTidygetMessageKey"] = createExportWrapper("prvTidygetMessageKey");

var _tidyGetMessageLine = Module["_tidyGetMessageLine"] = createExportWrapper("tidyGetMessageLine");

var _prvTidygetMessageLine = Module["_prvTidygetMessageLine"] = createExportWrapper("prvTidygetMessageLine");

var _tidyGetMessageColumn = Module["_tidyGetMessageColumn"] = createExportWrapper("tidyGetMessageColumn");

var _prvTidygetMessageColumn = Module["_prvTidygetMessageColumn"] = createExportWrapper("prvTidygetMessageColumn");

var _tidyGetMessageLevel = Module["_tidyGetMessageLevel"] = createExportWrapper("tidyGetMessageLevel");

var _prvTidygetMessageLevel = Module["_prvTidygetMessageLevel"] = createExportWrapper("prvTidygetMessageLevel");

var _tidyGetMessageIsMuted = Module["_tidyGetMessageIsMuted"] = createExportWrapper("tidyGetMessageIsMuted");

var _prvTidygetMessageIsMuted = Module["_prvTidygetMessageIsMuted"] = createExportWrapper("prvTidygetMessageIsMuted");

var _tidyGetMessageFormatDefault = Module["_tidyGetMessageFormatDefault"] = createExportWrapper("tidyGetMessageFormatDefault");

var _prvTidygetMessageFormatDefault = Module["_prvTidygetMessageFormatDefault"] = createExportWrapper("prvTidygetMessageFormatDefault");

var _tidyGetMessageFormat = Module["_tidyGetMessageFormat"] = createExportWrapper("tidyGetMessageFormat");

var _prvTidygetMessageFormat = Module["_prvTidygetMessageFormat"] = createExportWrapper("prvTidygetMessageFormat");

var _tidyGetMessageDefault = Module["_tidyGetMessageDefault"] = createExportWrapper("tidyGetMessageDefault");

var _prvTidygetMessageDefault = Module["_prvTidygetMessageDefault"] = createExportWrapper("prvTidygetMessageDefault");

var _tidyGetMessage = Module["_tidyGetMessage"] = createExportWrapper("tidyGetMessage");

var _prvTidygetMessage = Module["_prvTidygetMessage"] = createExportWrapper("prvTidygetMessage");

var _tidyGetMessagePosDefault = Module["_tidyGetMessagePosDefault"] = createExportWrapper("tidyGetMessagePosDefault");

var _prvTidygetMessagePosDefault = Module["_prvTidygetMessagePosDefault"] = createExportWrapper("prvTidygetMessagePosDefault");

var _tidyGetMessagePos = Module["_tidyGetMessagePos"] = createExportWrapper("tidyGetMessagePos");

var _prvTidygetMessagePos = Module["_prvTidygetMessagePos"] = createExportWrapper("prvTidygetMessagePos");

var _tidyGetMessagePrefixDefault = Module["_tidyGetMessagePrefixDefault"] = createExportWrapper("tidyGetMessagePrefixDefault");

var _prvTidygetMessagePrefixDefault = Module["_prvTidygetMessagePrefixDefault"] = createExportWrapper("prvTidygetMessagePrefixDefault");

var _tidyGetMessagePrefix = Module["_tidyGetMessagePrefix"] = createExportWrapper("tidyGetMessagePrefix");

var _prvTidygetMessagePrefix = Module["_prvTidygetMessagePrefix"] = createExportWrapper("prvTidygetMessagePrefix");

var _tidyGetMessageOutputDefault = Module["_tidyGetMessageOutputDefault"] = createExportWrapper("tidyGetMessageOutputDefault");

var _prvTidygetMessageOutputDefault = Module["_prvTidygetMessageOutputDefault"] = createExportWrapper("prvTidygetMessageOutputDefault");

var _tidyGetMessageOutput = Module["_tidyGetMessageOutput"] = createExportWrapper("tidyGetMessageOutput");

var _prvTidygetMessageOutput = Module["_prvTidygetMessageOutput"] = createExportWrapper("prvTidygetMessageOutput");

var _tidyGetMessageArguments = Module["_tidyGetMessageArguments"] = createExportWrapper("tidyGetMessageArguments");

var _prvTidygetMessageArguments = Module["_prvTidygetMessageArguments"] = createExportWrapper("prvTidygetMessageArguments");

var _tidyGetNextMessageArgument = Module["_tidyGetNextMessageArgument"] = createExportWrapper("tidyGetNextMessageArgument");

var _prvTidygetNextMessageArgument = Module["_prvTidygetNextMessageArgument"] = createExportWrapper("prvTidygetNextMessageArgument");

var _tidyGetArgType = Module["_tidyGetArgType"] = createExportWrapper("tidyGetArgType");

var _prvTidygetArgType = Module["_prvTidygetArgType"] = createExportWrapper("prvTidygetArgType");

var _tidyGetArgFormat = Module["_tidyGetArgFormat"] = createExportWrapper("tidyGetArgFormat");

var _prvTidygetArgFormat = Module["_prvTidygetArgFormat"] = createExportWrapper("prvTidygetArgFormat");

var _tidyGetArgValueString = Module["_tidyGetArgValueString"] = createExportWrapper("tidyGetArgValueString");

var _prvTidygetArgValueString = Module["_prvTidygetArgValueString"] = createExportWrapper("prvTidygetArgValueString");

var _tidyGetArgValueUInt = Module["_tidyGetArgValueUInt"] = createExportWrapper("tidyGetArgValueUInt");

var _prvTidygetArgValueUInt = Module["_prvTidygetArgValueUInt"] = createExportWrapper("prvTidygetArgValueUInt");

var _tidyGetArgValueInt = Module["_tidyGetArgValueInt"] = createExportWrapper("tidyGetArgValueInt");

var _prvTidygetArgValueInt = Module["_prvTidygetArgValueInt"] = createExportWrapper("prvTidygetArgValueInt");

var _tidyGetArgValueDouble = Module["_tidyGetArgValueDouble"] = createExportWrapper("tidyGetArgValueDouble");

var _prvTidygetArgValueDouble = Module["_prvTidygetArgValueDouble"] = createExportWrapper("prvTidygetArgValueDouble");

var _tidySetErrorFile = Module["_tidySetErrorFile"] = createExportWrapper("tidySetErrorFile");

var _tidySetErrorSink = Module["_tidySetErrorSink"] = createExportWrapper("tidySetErrorSink");

var _tidySetPrettyPrinterCallback = Module["_tidySetPrettyPrinterCallback"] = createExportWrapper("tidySetPrettyPrinterCallback");

var _tidyErrorSummary = Module["_tidyErrorSummary"] = createExportWrapper("tidyErrorSummary");

var _tidyGeneralInfo = Module["_tidyGeneralInfo"] = createExportWrapper("tidyGeneralInfo");

var _tidyParseFile = Module["_tidyParseFile"] = createExportWrapper("tidyParseFile");

var _prvTidyDocParseStream = Module["_prvTidyDocParseStream"] = createExportWrapper("prvTidyDocParseStream");

var _tidyParseStdin = Module["_tidyParseStdin"] = createExportWrapper("tidyParseStdin");

var _tidyParseString = Module["_tidyParseString"] = createExportWrapper("tidyParseString");

var _tidyParseSource = Module["_tidyParseSource"] = createExportWrapper("tidyParseSource");

var _tidySaveFile = Module["_tidySaveFile"] = createExportWrapper("tidySaveFile");

var _tidySaveStdout = Module["_tidySaveStdout"] = createExportWrapper("tidySaveStdout");

var _tidySaveString = Module["_tidySaveString"] = createExportWrapper("tidySaveString");

var _tidySaveSink = Module["_tidySaveSink"] = createExportWrapper("tidySaveSink");

var _prvTidyCleanGoogleDocument = Module["_prvTidyCleanGoogleDocument"] = createExportWrapper("prvTidyCleanGoogleDocument");

var _prvTidyCheckHTML5 = Module["_prvTidyCheckHTML5"] = createExportWrapper("prvTidyCheckHTML5");

var _prvTidyCheckHTMLTagsAttribsVersions = Module["_prvTidyCheckHTMLTagsAttribsVersions"] = createExportWrapper("prvTidyCheckHTMLTagsAttribsVersions");

var _tidyReportDoctype = Module["_tidyReportDoctype"] = createExportWrapper("tidyReportDoctype");

var _inRemovedInfo = Module["_inRemovedInfo"] = createExportWrapper("inRemovedInfo");

var _tidyDiscardElement = Module["_tidyDiscardElement"] = createExportWrapper("tidyDiscardElement");

var _tidyGetPrev = Module["_tidyGetPrev"] = createExportWrapper("tidyGetPrev");

var _tidyNodeHasText = Module["_tidyNodeHasText"] = createExportWrapper("tidyNodeHasText");

var _tidyNodeGetValue = Module["_tidyNodeGetValue"] = createExportWrapper("tidyNodeGetValue");

var _tidyAttrDiscard = Module["_tidyAttrDiscard"] = createExportWrapper("tidyAttrDiscard");

var _tidyAttrGetId = Module["_tidyAttrGetId"] = createExportWrapper("tidyAttrGetId");

var _tidyAttrGetById = Module["_tidyAttrGetById"] = createExportWrapper("tidyAttrGetById");

var _tidyAttrIsEvent = Module["_tidyAttrIsEvent"] = createExportWrapper("tidyAttrIsEvent");

var _tidyErrorCodeAsKey = Module["_tidyErrorCodeAsKey"] = createExportWrapper("tidyErrorCodeAsKey");

var _tidyErrorCodeFromKey = Module["_tidyErrorCodeFromKey"] = createExportWrapper("tidyErrorCodeFromKey");

var _getErrorCodeList = Module["_getErrorCodeList"] = createExportWrapper("getErrorCodeList");

var _getNextErrorCode = Module["_getNextErrorCode"] = createExportWrapper("getNextErrorCode");

var _tidySetLanguage = Module["_tidySetLanguage"] = createExportWrapper("tidySetLanguage");

var _prvTidytidySetLanguageSetByUser = Module["_prvTidytidySetLanguageSetByUser"] = createExportWrapper("prvTidytidySetLanguageSetByUser");

var _tidyGetLanguage = Module["_tidyGetLanguage"] = createExportWrapper("tidyGetLanguage");

var _prvTidytidyGetLanguage = Module["_prvTidytidyGetLanguage"] = createExportWrapper("prvTidytidyGetLanguage");

var _prvTidytidyLocalizedStringN = Module["_prvTidytidyLocalizedStringN"] = createExportWrapper("prvTidytidyLocalizedStringN");

var _tidyDefaultString = Module["_tidyDefaultString"] = createExportWrapper("tidyDefaultString");

var _prvTidytidyDefaultString = Module["_prvTidytidyDefaultString"] = createExportWrapper("prvTidytidyDefaultString");

var _getStringKeyList = Module["_getStringKeyList"] = createExportWrapper("getStringKeyList");

var _prvTidygetStringKeyList = Module["_prvTidygetStringKeyList"] = createExportWrapper("prvTidygetStringKeyList");

var _getNextStringKey = Module["_getNextStringKey"] = createExportWrapper("getNextStringKey");

var _prvTidygetNextStringKey = Module["_prvTidygetNextStringKey"] = createExportWrapper("prvTidygetNextStringKey");

var _getWindowsLanguageList = Module["_getWindowsLanguageList"] = createExportWrapper("getWindowsLanguageList");

var _prvTidygetWindowsLanguageList = Module["_prvTidygetWindowsLanguageList"] = createExportWrapper("prvTidygetWindowsLanguageList");

var _getNextWindowsLanguage = Module["_getNextWindowsLanguage"] = createExportWrapper("getNextWindowsLanguage");

var _prvTidygetNextWindowsLanguage = Module["_prvTidygetNextWindowsLanguage"] = createExportWrapper("prvTidygetNextWindowsLanguage");

var _TidyLangWindowsName = Module["_TidyLangWindowsName"] = createExportWrapper("TidyLangWindowsName");

var _prvTidyTidyLangWindowsName = Module["_prvTidyTidyLangWindowsName"] = createExportWrapper("prvTidyTidyLangWindowsName");

var _TidyLangPosixName = Module["_TidyLangPosixName"] = createExportWrapper("TidyLangPosixName");

var _prvTidyTidyLangPosixName = Module["_prvTidyTidyLangPosixName"] = createExportWrapper("prvTidyTidyLangPosixName");

var _getInstalledLanguageList = Module["_getInstalledLanguageList"] = createExportWrapper("getInstalledLanguageList");

var _prvTidygetInstalledLanguageList = Module["_prvTidygetInstalledLanguageList"] = createExportWrapper("prvTidygetInstalledLanguageList");

var _getNextInstalledLanguage = Module["_getNextInstalledLanguage"] = createExportWrapper("getNextInstalledLanguage");

var _prvTidygetNextInstalledLanguage = Module["_prvTidygetNextInstalledLanguage"] = createExportWrapper("prvTidygetNextInstalledLanguage");

var _prvTidytidyNormalizedLocaleName = Module["_prvTidytidyNormalizedLocaleName"] = createExportWrapper("prvTidytidyNormalizedLocaleName");

var _prvTidytidyTestLanguage = Module["_prvTidytidyTestLanguage"] = createExportWrapper("prvTidytidyTestLanguage");

var _locale_charset = Module["_locale_charset"] = createExportWrapper("locale_charset");

var _mbrtowc = Module["_mbrtowc"] = createExportWrapper("mbrtowc");

var _wcrtomb = Module["_wcrtomb"] = createExportWrapper("wcrtomb");

var _libiconv_open_into = Module["_libiconv_open_into"] = createExportWrapper("libiconv_open_into");

var _libiconvctl = Module["_libiconvctl"] = createExportWrapper("libiconvctl");

var _libiconvlist = Module["_libiconvlist"] = createExportWrapper("libiconvlist");

var _iconv_canonicalize = Module["_iconv_canonicalize"] = createExportWrapper("iconv_canonicalize");

var _initxmlDefaultSAXHandler = Module["_initxmlDefaultSAXHandler"] = createExportWrapper("initxmlDefaultSAXHandler");

var _inithtmlDefaultSAXHandler = Module["_inithtmlDefaultSAXHandler"] = createExportWrapper("inithtmlDefaultSAXHandler");

var _initdocbDefaultSAXHandler = Module["_initdocbDefaultSAXHandler"] = createExportWrapper("initdocbDefaultSAXHandler");

var _xmlAddDtdEntity = Module["_xmlAddDtdEntity"] = createExportWrapper("xmlAddDtdEntity");

var ___xmlSimpleError = Module["___xmlSimpleError"] = createExportWrapper("__xmlSimpleError");

var _xmlHashCreateDict = Module["_xmlHashCreateDict"] = createExportWrapper("xmlHashCreateDict");

var _xmlHashAddEntry = Module["_xmlHashAddEntry"] = createExportWrapper("xmlHashAddEntry");

var _xmlAddDocEntity = Module["_xmlAddDocEntity"] = createExportWrapper("xmlAddDocEntity");

var _xmlNewEntity = Module["_xmlNewEntity"] = createExportWrapper("xmlNewEntity");

var _xmlDictLookup = Module["_xmlDictLookup"] = createExportWrapper("xmlDictLookup");

var _xmlGetParameterEntity = Module["_xmlGetParameterEntity"] = createExportWrapper("xmlGetParameterEntity");

var _xmlGetDtdEntity = Module["_xmlGetDtdEntity"] = createExportWrapper("xmlGetDtdEntity");

var _xmlEncodeAttributeEntities = Module["_xmlEncodeAttributeEntities"] = createExportWrapper("xmlEncodeAttributeEntities");

var _xmlStrstr = Module["_xmlStrstr"] = createExportWrapper("xmlStrstr");

var _xmlEncodeSpecialChars = Module["_xmlEncodeSpecialChars"] = createExportWrapper("xmlEncodeSpecialChars");

var _xmlCreateEntitiesTable = Module["_xmlCreateEntitiesTable"] = createExportWrapper("xmlCreateEntitiesTable");

var _xmlHashCreate = Module["_xmlHashCreate"] = createExportWrapper("xmlHashCreate");

var _xmlFreeEntitiesTable = Module["_xmlFreeEntitiesTable"] = createExportWrapper("xmlFreeEntitiesTable");

var _xmlHashFree = Module["_xmlHashFree"] = createExportWrapper("xmlHashFree");

var _xmlCopyEntitiesTable = Module["_xmlCopyEntitiesTable"] = createExportWrapper("xmlCopyEntitiesTable");

var _xmlHashCopy = Module["_xmlHashCopy"] = createExportWrapper("xmlHashCopy");

var _xmlDumpEntityDecl = Module["_xmlDumpEntityDecl"] = createExportWrapper("xmlDumpEntityDecl");

var _xmlBufferWriteChar = Module["_xmlBufferWriteChar"] = createExportWrapper("xmlBufferWriteChar");

var _xmlBufferWriteCHAR = Module["_xmlBufferWriteCHAR"] = createExportWrapper("xmlBufferWriteCHAR");

var _xmlBufferWriteQuotedString = Module["_xmlBufferWriteQuotedString"] = createExportWrapper("xmlBufferWriteQuotedString");

var _xmlBufferCCat = Module["_xmlBufferCCat"] = createExportWrapper("xmlBufferCCat");

var _xmlBufferAdd = Module["_xmlBufferAdd"] = createExportWrapper("xmlBufferAdd");

var _xmlDumpEntitiesTable = Module["_xmlDumpEntitiesTable"] = createExportWrapper("xmlDumpEntitiesTable");

var _xmlFreeNodeList = Module["_xmlFreeNodeList"] = createExportWrapper("xmlFreeNodeList");

var _xmlDictOwns = Module["_xmlDictOwns"] = createExportWrapper("xmlDictOwns");

var _isolat1ToUTF8 = Module["_isolat1ToUTF8"] = createExportWrapper("isolat1ToUTF8");

var _UTF8Toisolat1 = Module["_UTF8Toisolat1"] = createExportWrapper("UTF8Toisolat1");

var _xmlDetectCharEncoding = Module["_xmlDetectCharEncoding"] = createExportWrapper("xmlDetectCharEncoding");

var _xmlCleanupEncodingAliases = Module["_xmlCleanupEncodingAliases"] = createExportWrapper("xmlCleanupEncodingAliases");

var _xmlGetEncodingAlias = Module["_xmlGetEncodingAlias"] = createExportWrapper("xmlGetEncodingAlias");

var _xmlAddEncodingAlias = Module["_xmlAddEncodingAlias"] = createExportWrapper("xmlAddEncodingAlias");

var _xmlDelEncodingAlias = Module["_xmlDelEncodingAlias"] = createExportWrapper("xmlDelEncodingAlias");

var _xmlGetCharEncodingName = Module["_xmlGetCharEncodingName"] = createExportWrapper("xmlGetCharEncodingName");

var _xmlNewCharEncodingHandler = Module["_xmlNewCharEncodingHandler"] = createExportWrapper("xmlNewCharEncodingHandler");

var _xmlInitCharEncodingHandlers = Module["_xmlInitCharEncodingHandlers"] = createExportWrapper("xmlInitCharEncodingHandlers");

var ___xmlRaiseError = Module["___xmlRaiseError"] = createExportWrapper("__xmlRaiseError");

var _xmlRegisterCharEncodingHandler = Module["_xmlRegisterCharEncodingHandler"] = createExportWrapper("xmlRegisterCharEncodingHandler");

var _UTF8ToHtml = Module["_UTF8ToHtml"] = createExportWrapper("UTF8ToHtml");

var _xmlCleanupCharEncodingHandlers = Module["_xmlCleanupCharEncodingHandlers"] = createExportWrapper("xmlCleanupCharEncodingHandlers");

var _xmlGetCharEncodingHandler = Module["_xmlGetCharEncodingHandler"] = createExportWrapper("xmlGetCharEncodingHandler");

var _iconv_open = Module["_iconv_open"] = createExportWrapper("iconv_open");

var _iconv_close = Module["_iconv_close"] = createExportWrapper("iconv_close");

var _xmlCharEncFirstLineInt = Module["_xmlCharEncFirstLineInt"] = createExportWrapper("xmlCharEncFirstLineInt");

var _xmlBufferGrow = Module["_xmlBufferGrow"] = createExportWrapper("xmlBufferGrow");

var _xmlBufferShrink = Module["_xmlBufferShrink"] = createExportWrapper("xmlBufferShrink");

var _xmlCharEncFirstLine = Module["_xmlCharEncFirstLine"] = createExportWrapper("xmlCharEncFirstLine");

var _xmlCharEncFirstLineInput = Module["_xmlCharEncFirstLineInput"] = createExportWrapper("xmlCharEncFirstLineInput");

var _xmlBufUse = Module["_xmlBufUse"] = createExportWrapper("xmlBufUse");

var _xmlBufAvail = Module["_xmlBufAvail"] = createExportWrapper("xmlBufAvail");

var _xmlBufGrow = Module["_xmlBufGrow"] = createExportWrapper("xmlBufGrow");

var _xmlBufEnd = Module["_xmlBufEnd"] = createExportWrapper("xmlBufEnd");

var _xmlBufContent = Module["_xmlBufContent"] = createExportWrapper("xmlBufContent");

var _xmlBufShrink = Module["_xmlBufShrink"] = createExportWrapper("xmlBufShrink");

var _xmlBufAddLen = Module["_xmlBufAddLen"] = createExportWrapper("xmlBufAddLen");

var _xmlCharEncInput = Module["_xmlCharEncInput"] = createExportWrapper("xmlCharEncInput");

var _xmlCharEncInFunc = Module["_xmlCharEncInFunc"] = createExportWrapper("xmlCharEncInFunc");

var _xmlCharEncOutput = Module["_xmlCharEncOutput"] = createExportWrapper("xmlCharEncOutput");

var _xmlGetUTF8Char = Module["_xmlGetUTF8Char"] = createExportWrapper("xmlGetUTF8Char");

var _xmlBufGetAllocationScheme = Module["_xmlBufGetAllocationScheme"] = createExportWrapper("xmlBufGetAllocationScheme");

var _xmlCharEncOutFunc = Module["_xmlCharEncOutFunc"] = createExportWrapper("xmlCharEncOutFunc");

var _xmlByteConsumed = Module["_xmlByteConsumed"] = createExportWrapper("xmlByteConsumed");

var _iconv = Module["_iconv"] = createExportWrapper("iconv");

var _xmlGenericErrorDefaultFunc = Module["_xmlGenericErrorDefaultFunc"] = createExportWrapper("xmlGenericErrorDefaultFunc");

var _initGenericErrorDefaultFunc = Module["_initGenericErrorDefaultFunc"] = createExportWrapper("initGenericErrorDefaultFunc");

var _xmlParserPrintFileInfo = Module["_xmlParserPrintFileInfo"] = createExportWrapper("xmlParserPrintFileInfo");

var _xmlParserPrintFileContext = Module["_xmlParserPrintFileContext"] = createExportWrapper("xmlParserPrintFileContext");

var _xmlGetProp = Module["_xmlGetProp"] = createExportWrapper("xmlGetProp");

var _xmlParserValidityWarning = Module["_xmlParserValidityWarning"] = createExportWrapper("xmlParserValidityWarning");

var _xmlParserValidityError = Module["_xmlParserValidityError"] = createExportWrapper("xmlParserValidityError");

var _xmlParserError = Module["_xmlParserError"] = createExportWrapper("xmlParserError");

var _xmlParserWarning = Module["_xmlParserWarning"] = createExportWrapper("xmlParserWarning");

var _xmlCtxtGetLastError = Module["_xmlCtxtGetLastError"] = createExportWrapper("xmlCtxtGetLastError");

var _xmlCtxtResetLastError = Module["_xmlCtxtResetLastError"] = createExportWrapper("xmlCtxtResetLastError");

var _xmlCheckVersion = Module["_xmlCheckVersion"] = createExportWrapper("xmlCheckVersion");

var _xmlErrMemory = Module["_xmlErrMemory"] = createExportWrapper("xmlErrMemory");

var ___xmlErrEncoding = Module["___xmlErrEncoding"] = createExportWrapper("__xmlErrEncoding");

var _xmlIsLetter = Module["_xmlIsLetter"] = createExportWrapper("xmlIsLetter");

var _xmlParserInputRead = Module["_xmlParserInputRead"] = createExportWrapper("xmlParserInputRead");

var _xmlParserInputGrow = Module["_xmlParserInputGrow"] = createExportWrapper("xmlParserInputGrow");

var _xmlParserInputShrink = Module["_xmlParserInputShrink"] = createExportWrapper("xmlParserInputShrink");

var _xmlNextChar = Module["_xmlNextChar"] = createExportWrapper("xmlNextChar");

var _xmlCurrentChar = Module["_xmlCurrentChar"] = createExportWrapper("xmlCurrentChar");

var _xmlStringCurrentChar = Module["_xmlStringCurrentChar"] = createExportWrapper("xmlStringCurrentChar");

var _xmlCopyCharMultiByte = Module["_xmlCopyCharMultiByte"] = createExportWrapper("xmlCopyCharMultiByte");

var _xmlCopyChar = Module["_xmlCopyChar"] = createExportWrapper("xmlCopyChar");

var _xmlSwitchEncoding = Module["_xmlSwitchEncoding"] = createExportWrapper("xmlSwitchEncoding");

var _xmlSwitchInputEncoding = Module["_xmlSwitchInputEncoding"] = createExportWrapper("xmlSwitchInputEncoding");

var _xmlSwitchToEncoding = Module["_xmlSwitchToEncoding"] = createExportWrapper("xmlSwitchToEncoding");

var _xmlFreeInputStream = Module["_xmlFreeInputStream"] = createExportWrapper("xmlFreeInputStream");

var _xmlNewInputStream = Module["_xmlNewInputStream"] = createExportWrapper("xmlNewInputStream");

var _xmlCharInRange = Module["_xmlCharInRange"] = createExportWrapper("xmlCharInRange");

var _xmlParserInputBufferGrow = Module["_xmlParserInputBufferGrow"] = createExportWrapper("xmlParserInputBufferGrow");

var _xmlParserInputBufferRead = Module["_xmlParserInputBufferRead"] = createExportWrapper("xmlParserInputBufferRead");

var _xmlBufIsEmpty = Module["_xmlBufIsEmpty"] = createExportWrapper("xmlBufIsEmpty");

var _xmlBufCreate = Module["_xmlBufCreate"] = createExportWrapper("xmlBufCreate");

var _xmlBufResetInput = Module["_xmlBufResetInput"] = createExportWrapper("xmlBufResetInput");

var _xmlNewEntityInputStream = Module["_xmlNewEntityInputStream"] = createExportWrapper("xmlNewEntityInputStream");

var _xmlLoadExternalEntity = Module["_xmlLoadExternalEntity"] = createExportWrapper("xmlLoadExternalEntity");

var _xmlNewStringInputStream = Module["_xmlNewStringInputStream"] = createExportWrapper("xmlNewStringInputStream");

var _xmlParserInputBufferCreateFilename = Module["_xmlParserInputBufferCreateFilename"] = createExportWrapper("xmlParserInputBufferCreateFilename");

var ___xmlLoaderErr = Module["___xmlLoaderErr"] = createExportWrapper("__xmlLoaderErr");

var _xmlCheckHTTPInput = Module["_xmlCheckHTTPInput"] = createExportWrapper("xmlCheckHTTPInput");

var _xmlParserGetDirectory = Module["_xmlParserGetDirectory"] = createExportWrapper("xmlParserGetDirectory");

var _xmlInitParserCtxt = Module["_xmlInitParserCtxt"] = createExportWrapper("xmlInitParserCtxt");

var _xmlDefaultSAXHandlerInit = Module["_xmlDefaultSAXHandlerInit"] = createExportWrapper("xmlDefaultSAXHandlerInit");

var _xmlDictCreate = Module["_xmlDictCreate"] = createExportWrapper("xmlDictCreate");

var _xmlDictSetLimit = Module["_xmlDictSetLimit"] = createExportWrapper("xmlDictSetLimit");

var _xmlSAXVersion = Module["_xmlSAXVersion"] = createExportWrapper("xmlSAXVersion");

var _inputPop = Module["_inputPop"] = createExportWrapper("inputPop");

var _xmlSAX2IgnorableWhitespace = Module["_xmlSAX2IgnorableWhitespace"] = createExportWrapper("xmlSAX2IgnorableWhitespace");

var _xmlInitNodeInfoSeq = Module["_xmlInitNodeInfoSeq"] = createExportWrapper("xmlInitNodeInfoSeq");

var _xmlDictFree = Module["_xmlDictFree"] = createExportWrapper("xmlDictFree");

var _xmlHashDefaultDeallocator = Module["_xmlHashDefaultDeallocator"] = createExportWrapper("xmlHashDefaultDeallocator");

var _xmlCatalogFreeLocal = Module["_xmlCatalogFreeLocal"] = createExportWrapper("xmlCatalogFreeLocal");

var _xmlNewParserCtxt = Module["_xmlNewParserCtxt"] = createExportWrapper("xmlNewParserCtxt");

var _xmlClearParserCtxt = Module["_xmlClearParserCtxt"] = createExportWrapper("xmlClearParserCtxt");

var _xmlCtxtReset = Module["_xmlCtxtReset"] = createExportWrapper("xmlCtxtReset");

var _xmlClearNodeInfoSeq = Module["_xmlClearNodeInfoSeq"] = createExportWrapper("xmlClearNodeInfoSeq");

var _xmlParserFindNodeInfo = Module["_xmlParserFindNodeInfo"] = createExportWrapper("xmlParserFindNodeInfo");

var _xmlParserFindNodeInfoIndex = Module["_xmlParserFindNodeInfoIndex"] = createExportWrapper("xmlParserFindNodeInfoIndex");

var _xmlParserAddNodeInfo = Module["_xmlParserAddNodeInfo"] = createExportWrapper("xmlParserAddNodeInfo");

var _xmlHasFeature = Module["_xmlHasFeature"] = createExportWrapper("xmlHasFeature");

var _xmlCheckLanguageID = Module["_xmlCheckLanguageID"] = createExportWrapper("xmlCheckLanguageID");

var _inputPush = Module["_inputPush"] = createExportWrapper("inputPush");

var _nodePush = Module["_nodePush"] = createExportWrapper("nodePush");

var _nodePop = Module["_nodePop"] = createExportWrapper("nodePop");

var _namePush = Module["_namePush"] = createExportWrapper("namePush");

var _namePop = Module["_namePop"] = createExportWrapper("namePop");

var _xmlSkipBlankChars = Module["_xmlSkipBlankChars"] = createExportWrapper("xmlSkipBlankChars");

var _xmlParsePEReference = Module["_xmlParsePEReference"] = createExportWrapper("xmlParsePEReference");

var _xmlPopInput = Module["_xmlPopInput"] = createExportWrapper("xmlPopInput");

var _xmlParseName = Module["_xmlParseName"] = createExportWrapper("xmlParseName");

var _xmlPushInput = Module["_xmlPushInput"] = createExportWrapper("xmlPushInput");

var _xmlParseTextDecl = Module["_xmlParseTextDecl"] = createExportWrapper("xmlParseTextDecl");

var _xmlInputReadCallbackNop = Module["_xmlInputReadCallbackNop"] = createExportWrapper("xmlInputReadCallbackNop");

var _xmlParseCharRef = Module["_xmlParseCharRef"] = createExportWrapper("xmlParseCharRef");

var _xmlParserHandlePEReference = Module["_xmlParserHandlePEReference"] = createExportWrapper("xmlParserHandlePEReference");

var _xmlStringLenDecodeEntities = Module["_xmlStringLenDecodeEntities"] = createExportWrapper("xmlStringLenDecodeEntities");

var _xmlSAX2GetEntity = Module["_xmlSAX2GetEntity"] = createExportWrapper("xmlSAX2GetEntity");

var _xmlStringDecodeEntities = Module["_xmlStringDecodeEntities"] = createExportWrapper("xmlStringDecodeEntities");

var _xmlSplitQName = Module["_xmlSplitQName"] = createExportWrapper("xmlSplitQName");

var _xmlParseNmtoken = Module["_xmlParseNmtoken"] = createExportWrapper("xmlParseNmtoken");

var _xmlParseEntityValue = Module["_xmlParseEntityValue"] = createExportWrapper("xmlParseEntityValue");

var _xmlParseAttValue = Module["_xmlParseAttValue"] = createExportWrapper("xmlParseAttValue");

var _xmlParseEntityRef = Module["_xmlParseEntityRef"] = createExportWrapper("xmlParseEntityRef");

var _xmlParseSystemLiteral = Module["_xmlParseSystemLiteral"] = createExportWrapper("xmlParseSystemLiteral");

var _xmlParsePubidLiteral = Module["_xmlParsePubidLiteral"] = createExportWrapper("xmlParsePubidLiteral");

var _xmlParseCharData = Module["_xmlParseCharData"] = createExportWrapper("xmlParseCharData");

var _xmlIsMixedElement = Module["_xmlIsMixedElement"] = createExportWrapper("xmlIsMixedElement");

var _xmlGetLastChild = Module["_xmlGetLastChild"] = createExportWrapper("xmlGetLastChild");

var _xmlNodeIsText = Module["_xmlNodeIsText"] = createExportWrapper("xmlNodeIsText");

var _xmlParseExternalID = Module["_xmlParseExternalID"] = createExportWrapper("xmlParseExternalID");

var _xmlParseComment = Module["_xmlParseComment"] = createExportWrapper("xmlParseComment");

var _xmlParsePITarget = Module["_xmlParsePITarget"] = createExportWrapper("xmlParsePITarget");

var _xmlParsePI = Module["_xmlParsePI"] = createExportWrapper("xmlParsePI");

var _xmlCatalogGetDefaults = Module["_xmlCatalogGetDefaults"] = createExportWrapper("xmlCatalogGetDefaults");

var _xmlCatalogAddLocal = Module["_xmlCatalogAddLocal"] = createExportWrapper("xmlCatalogAddLocal");

var _xmlParseNotationDecl = Module["_xmlParseNotationDecl"] = createExportWrapper("xmlParseNotationDecl");

var _xmlParseEntityDecl = Module["_xmlParseEntityDecl"] = createExportWrapper("xmlParseEntityDecl");

var _xmlNewDtd = Module["_xmlNewDtd"] = createExportWrapper("xmlNewDtd");

var _xmlSAX2EntityDecl = Module["_xmlSAX2EntityDecl"] = createExportWrapper("xmlSAX2EntityDecl");

var _xmlParseDefaultDecl = Module["_xmlParseDefaultDecl"] = createExportWrapper("xmlParseDefaultDecl");

var _xmlParseNotationType = Module["_xmlParseNotationType"] = createExportWrapper("xmlParseNotationType");

var _xmlCreateEnumeration = Module["_xmlCreateEnumeration"] = createExportWrapper("xmlCreateEnumeration");

var _xmlFreeEnumeration = Module["_xmlFreeEnumeration"] = createExportWrapper("xmlFreeEnumeration");

var _xmlParseEnumerationType = Module["_xmlParseEnumerationType"] = createExportWrapper("xmlParseEnumerationType");

var _xmlParseEnumeratedType = Module["_xmlParseEnumeratedType"] = createExportWrapper("xmlParseEnumeratedType");

var _xmlParseAttributeType = Module["_xmlParseAttributeType"] = createExportWrapper("xmlParseAttributeType");

var _xmlParseAttributeListDecl = Module["_xmlParseAttributeListDecl"] = createExportWrapper("xmlParseAttributeListDecl");

var _xmlHashLookup2 = Module["_xmlHashLookup2"] = createExportWrapper("xmlHashLookup2");

var _xmlHashUpdateEntry2 = Module["_xmlHashUpdateEntry2"] = createExportWrapper("xmlHashUpdateEntry2");

var _xmlHashAddEntry2 = Module["_xmlHashAddEntry2"] = createExportWrapper("xmlHashAddEntry2");

var _xmlParseElementMixedContentDecl = Module["_xmlParseElementMixedContentDecl"] = createExportWrapper("xmlParseElementMixedContentDecl");

var _xmlNewDocElementContent = Module["_xmlNewDocElementContent"] = createExportWrapper("xmlNewDocElementContent");

var _xmlFreeDocElementContent = Module["_xmlFreeDocElementContent"] = createExportWrapper("xmlFreeDocElementContent");

var _xmlParseElementChildrenContentDecl = Module["_xmlParseElementChildrenContentDecl"] = createExportWrapper("xmlParseElementChildrenContentDecl");

var _xmlParseElementContentDecl = Module["_xmlParseElementContentDecl"] = createExportWrapper("xmlParseElementContentDecl");

var _xmlParseElementDecl = Module["_xmlParseElementDecl"] = createExportWrapper("xmlParseElementDecl");

var _xmlParseMarkupDecl = Module["_xmlParseMarkupDecl"] = createExportWrapper("xmlParseMarkupDecl");

var _xmlParseVersionInfo = Module["_xmlParseVersionInfo"] = createExportWrapper("xmlParseVersionInfo");

var _xmlCharStrdup = Module["_xmlCharStrdup"] = createExportWrapper("xmlCharStrdup");

var _xmlParseEncodingDecl = Module["_xmlParseEncodingDecl"] = createExportWrapper("xmlParseEncodingDecl");

var _xmlParseVersionNum = Module["_xmlParseVersionNum"] = createExportWrapper("xmlParseVersionNum");

var _xmlParseEncName = Module["_xmlParseEncName"] = createExportWrapper("xmlParseEncName");

var _xmlStrcasecmp = Module["_xmlStrcasecmp"] = createExportWrapper("xmlStrcasecmp");

var _xmlParseExternalSubset = Module["_xmlParseExternalSubset"] = createExportWrapper("xmlParseExternalSubset");

var _xmlParseReference = Module["_xmlParseReference"] = createExportWrapper("xmlParseReference");

var _xmlDictReference = Module["_xmlDictReference"] = createExportWrapper("xmlDictReference");

var _xmlParseContent = Module["_xmlParseContent"] = createExportWrapper("xmlParseContent");

var _xmlValidateElement = Module["_xmlValidateElement"] = createExportWrapper("xmlValidateElement");

var _xmlParseDocTypeDecl = Module["_xmlParseDocTypeDecl"] = createExportWrapper("xmlParseDocTypeDecl");

var _xmlParseAttribute = Module["_xmlParseAttribute"] = createExportWrapper("xmlParseAttribute");

var _xmlParseStartTag = Module["_xmlParseStartTag"] = createExportWrapper("xmlParseStartTag");

var _xmlParseEndTag = Module["_xmlParseEndTag"] = createExportWrapper("xmlParseEndTag");

var _xmlParseCDSect = Module["_xmlParseCDSect"] = createExportWrapper("xmlParseCDSect");

var _xmlValidateRoot = Module["_xmlValidateRoot"] = createExportWrapper("xmlValidateRoot");

var _xmlParseElement = Module["_xmlParseElement"] = createExportWrapper("xmlParseElement");

var _xmlParseSDDecl = Module["_xmlParseSDDecl"] = createExportWrapper("xmlParseSDDecl");

var _xmlParseXMLDecl = Module["_xmlParseXMLDecl"] = createExportWrapper("xmlParseXMLDecl");

var _xmlParseMisc = Module["_xmlParseMisc"] = createExportWrapper("xmlParseMisc");

var _xmlInitThreads = Module["_xmlInitThreads"] = createExportWrapper("xmlInitThreads");

var _xmlInitGlobals = Module["_xmlInitGlobals"] = createExportWrapper("xmlInitGlobals");

var _xmlInitMemory = Module["_xmlInitMemory"] = createExportWrapper("xmlInitMemory");

var _xmlInitializeDict = Module["_xmlInitializeDict"] = createExportWrapper("xmlInitializeDict");

var _xmlRegisterDefaultInputCallbacks = Module["_xmlRegisterDefaultInputCallbacks"] = createExportWrapper("xmlRegisterDefaultInputCallbacks");

var _xmlRegisterDefaultOutputCallbacks = Module["_xmlRegisterDefaultOutputCallbacks"] = createExportWrapper("xmlRegisterDefaultOutputCallbacks");

var _htmlInitAutoClose = Module["_htmlInitAutoClose"] = createExportWrapper("htmlInitAutoClose");

var _htmlDefaultSAXHandlerInit = Module["_htmlDefaultSAXHandlerInit"] = createExportWrapper("htmlDefaultSAXHandlerInit");

var _xmlXPathInit = Module["_xmlXPathInit"] = createExportWrapper("xmlXPathInit");

var _xmlHashScanFull = Module["_xmlHashScanFull"] = createExportWrapper("xmlHashScanFull");

var _xmlParseExtParsedEnt = Module["_xmlParseExtParsedEnt"] = createExportWrapper("xmlParseExtParsedEnt");

var _xmlBufGetInputBase = Module["_xmlBufGetInputBase"] = createExportWrapper("xmlBufGetInputBase");

var _xmlStrcasestr = Module["_xmlStrcasestr"] = createExportWrapper("xmlStrcasestr");

var _xmlParserInputBufferPush = Module["_xmlParserInputBufferPush"] = createExportWrapper("xmlParserInputBufferPush");

var _xmlBufSetInputBaseCur = Module["_xmlBufSetInputBaseCur"] = createExportWrapper("xmlBufSetInputBaseCur");

var _xmlCreateIOParserCtxt = Module["_xmlCreateIOParserCtxt"] = createExportWrapper("xmlCreateIOParserCtxt");

var _xmlParserInputBufferCreateIO = Module["_xmlParserInputBufferCreateIO"] = createExportWrapper("xmlParserInputBufferCreateIO");

var _xmlIOParseDTD = Module["_xmlIOParseDTD"] = createExportWrapper("xmlIOParseDTD");

var _xmlSAXParseDTD = Module["_xmlSAXParseDTD"] = createExportWrapper("xmlSAXParseDTD");

var _xmlParseDTD = Module["_xmlParseDTD"] = createExportWrapper("xmlParseDTD");

var _xmlParseCtxtExternalEntity = Module["_xmlParseCtxtExternalEntity"] = createExportWrapper("xmlParseCtxtExternalEntity");

var _xmlBuildURI = Module["_xmlBuildURI"] = createExportWrapper("xmlBuildURI");

var _xmlParseExternalEntity = Module["_xmlParseExternalEntity"] = createExportWrapper("xmlParseExternalEntity");

var _xmlParseBalancedChunkMemoryRecover = Module["_xmlParseBalancedChunkMemoryRecover"] = createExportWrapper("xmlParseBalancedChunkMemoryRecover");

var _xmlParseInNodeContext = Module["_xmlParseInNodeContext"] = createExportWrapper("xmlParseInNodeContext");

var ___htmlParseContent = Module["___htmlParseContent"] = createExportWrapper("__htmlParseContent");

var _xmlParserInputBufferCreateMem = Module["_xmlParserInputBufferCreateMem"] = createExportWrapper("xmlParserInputBufferCreateMem");

var _xmlSAX2EndElement = Module["_xmlSAX2EndElement"] = createExportWrapper("xmlSAX2EndElement");

var _xmlSAX2StartElement = Module["_xmlSAX2StartElement"] = createExportWrapper("xmlSAX2StartElement");

var _xmlSAXParseEntity = Module["_xmlSAXParseEntity"] = createExportWrapper("xmlSAXParseEntity");

var _xmlCreateURLParserCtxt = Module["_xmlCreateURLParserCtxt"] = createExportWrapper("xmlCreateURLParserCtxt");

var _xmlParseEntity = Module["_xmlParseEntity"] = createExportWrapper("xmlParseEntity");

var _xmlCreateEntityParserCtxt = Module["_xmlCreateEntityParserCtxt"] = createExportWrapper("xmlCreateEntityParserCtxt");

var _xmlSAXParseFileWithData = Module["_xmlSAXParseFileWithData"] = createExportWrapper("xmlSAXParseFileWithData");

var _xmlSAXParseFile = Module["_xmlSAXParseFile"] = createExportWrapper("xmlSAXParseFile");

var _xmlRecoverDoc = Module["_xmlRecoverDoc"] = createExportWrapper("xmlRecoverDoc");

var _xmlSAXParseDoc = Module["_xmlSAXParseDoc"] = createExportWrapper("xmlSAXParseDoc");

var _xmlParseFile = Module["_xmlParseFile"] = createExportWrapper("xmlParseFile");

var _xmlRecoverFile = Module["_xmlRecoverFile"] = createExportWrapper("xmlRecoverFile");

var _xmlSetupParserForBuffer = Module["_xmlSetupParserForBuffer"] = createExportWrapper("xmlSetupParserForBuffer");

var _xmlSAXUserParseFile = Module["_xmlSAXUserParseFile"] = createExportWrapper("xmlSAXUserParseFile");

var _xmlSAXParseMemoryWithData = Module["_xmlSAXParseMemoryWithData"] = createExportWrapper("xmlSAXParseMemoryWithData");

var _xmlSAXParseMemory = Module["_xmlSAXParseMemory"] = createExportWrapper("xmlSAXParseMemory");

var _xmlParseMemory = Module["_xmlParseMemory"] = createExportWrapper("xmlParseMemory");

var _xmlRecoverMemory = Module["_xmlRecoverMemory"] = createExportWrapper("xmlRecoverMemory");

var _xmlSAXUserParseMemory = Module["_xmlSAXUserParseMemory"] = createExportWrapper("xmlSAXUserParseMemory");

var _xmlCreateDocParserCtxt = Module["_xmlCreateDocParserCtxt"] = createExportWrapper("xmlCreateDocParserCtxt");

var _xmlParseDoc = Module["_xmlParseDoc"] = createExportWrapper("xmlParseDoc");

var _xmlSetEntityReferenceFunc = Module["_xmlSetEntityReferenceFunc"] = createExportWrapper("xmlSetEntityReferenceFunc");

var _xmlCleanupParser = Module["_xmlCleanupParser"] = createExportWrapper("xmlCleanupParser");

var _xmlCatalogCleanup = Module["_xmlCatalogCleanup"] = createExportWrapper("xmlCatalogCleanup");

var _xmlDictCleanup = Module["_xmlDictCleanup"] = createExportWrapper("xmlDictCleanup");

var _xmlCleanupInputCallbacks = Module["_xmlCleanupInputCallbacks"] = createExportWrapper("xmlCleanupInputCallbacks");

var _xmlCleanupOutputCallbacks = Module["_xmlCleanupOutputCallbacks"] = createExportWrapper("xmlCleanupOutputCallbacks");

var _xmlSchemaCleanupTypes = Module["_xmlSchemaCleanupTypes"] = createExportWrapper("xmlSchemaCleanupTypes");

var _xmlCleanupGlobals = Module["_xmlCleanupGlobals"] = createExportWrapper("xmlCleanupGlobals");

var _xmlCleanupThreads = Module["_xmlCleanupThreads"] = createExportWrapper("xmlCleanupThreads");

var _xmlCleanupMemory = Module["_xmlCleanupMemory"] = createExportWrapper("xmlCleanupMemory");

var _xmlCtxtResetPush = Module["_xmlCtxtResetPush"] = createExportWrapper("xmlCtxtResetPush");

var _xmlReadDoc = Module["_xmlReadDoc"] = createExportWrapper("xmlReadDoc");

var _xmlReadFd = Module["_xmlReadFd"] = createExportWrapper("xmlReadFd");

var _xmlParserInputBufferCreateFd = Module["_xmlParserInputBufferCreateFd"] = createExportWrapper("xmlParserInputBufferCreateFd");

var _xmlReadIO = Module["_xmlReadIO"] = createExportWrapper("xmlReadIO");

var _xmlCtxtReadDoc = Module["_xmlCtxtReadDoc"] = createExportWrapper("xmlCtxtReadDoc");

var _xmlCtxtReadFile = Module["_xmlCtxtReadFile"] = createExportWrapper("xmlCtxtReadFile");

var _xmlCtxtReadMemory = Module["_xmlCtxtReadMemory"] = createExportWrapper("xmlCtxtReadMemory");

var _xmlCtxtReadFd = Module["_xmlCtxtReadFd"] = createExportWrapper("xmlCtxtReadFd");

var _xmlCtxtReadIO = Module["_xmlCtxtReadIO"] = createExportWrapper("xmlCtxtReadIO");

var _xmlHashQLookup2 = Module["_xmlHashQLookup2"] = createExportWrapper("xmlHashQLookup2");

var _xmlBuildQName = Module["_xmlBuildQName"] = createExportWrapper("xmlBuildQName");

var _xmlHashRemoveEntry2 = Module["_xmlHashRemoveEntry2"] = createExportWrapper("xmlHashRemoveEntry2");

var _xmlValidateNCName = Module["_xmlValidateNCName"] = createExportWrapper("xmlValidateNCName");

var _xmlValidateNMToken = Module["_xmlValidateNMToken"] = createExportWrapper("xmlValidateNMToken");

var _xmlSetBufferAllocationScheme = Module["_xmlSetBufferAllocationScheme"] = createExportWrapper("xmlSetBufferAllocationScheme");

var _xmlGetBufferAllocationScheme = Module["_xmlGetBufferAllocationScheme"] = createExportWrapper("xmlGetBufferAllocationScheme");

var _xmlFreeNsList = Module["_xmlFreeNsList"] = createExportWrapper("xmlFreeNsList");

var _xmlFreeDtd = Module["_xmlFreeDtd"] = createExportWrapper("xmlFreeDtd");

var _xmlFreeNotationTable = Module["_xmlFreeNotationTable"] = createExportWrapper("xmlFreeNotationTable");

var _xmlFreeElementTable = Module["_xmlFreeElementTable"] = createExportWrapper("xmlFreeElementTable");

var _xmlFreeAttributeTable = Module["_xmlFreeAttributeTable"] = createExportWrapper("xmlFreeAttributeTable");

var _xmlHashRemoveEntry = Module["_xmlHashRemoveEntry"] = createExportWrapper("xmlHashRemoveEntry");

var _xmlFreeIDTable = Module["_xmlFreeIDTable"] = createExportWrapper("xmlFreeIDTable");

var _xmlFreeRefTable = Module["_xmlFreeRefTable"] = createExportWrapper("xmlFreeRefTable");

var _xmlStringLenGetNodeList = Module["_xmlStringLenGetNodeList"] = createExportWrapper("xmlStringLenGetNodeList");

var _xmlBufCreateSize = Module["_xmlBufCreateSize"] = createExportWrapper("xmlBufCreateSize");

var _xmlBufSetAllocationScheme = Module["_xmlBufSetAllocationScheme"] = createExportWrapper("xmlBufSetAllocationScheme");

var _xmlBufAdd = Module["_xmlBufAdd"] = createExportWrapper("xmlBufAdd");

var _xmlBufCat = Module["_xmlBufCat"] = createExportWrapper("xmlBufCat");

var _xmlBufDetach = Module["_xmlBufDetach"] = createExportWrapper("xmlBufDetach");

var _xmlStringGetNodeList = Module["_xmlStringGetNodeList"] = createExportWrapper("xmlStringGetNodeList");

var _xmlBufFree = Module["_xmlBufFree"] = createExportWrapper("xmlBufFree");

var _xmlNodeAddContentLen = Module["_xmlNodeAddContentLen"] = createExportWrapper("xmlNodeAddContentLen");

var _xmlNodeListGetRawString = Module["_xmlNodeListGetRawString"] = createExportWrapper("xmlNodeListGetRawString");

var _xmlCheckUTF8 = Module["_xmlCheckUTF8"] = createExportWrapper("xmlCheckUTF8");

var _xmlIsID = Module["_xmlIsID"] = createExportWrapper("xmlIsID");

var _xmlNewNsPropEatName = Module["_xmlNewNsPropEatName"] = createExportWrapper("xmlNewNsPropEatName");

var _xmlFreePropList = Module["_xmlFreePropList"] = createExportWrapper("xmlFreePropList");

var _xmlRemoveProp = Module["_xmlRemoveProp"] = createExportWrapper("xmlRemoveProp");

var _xmlNewDocPI = Module["_xmlNewDocPI"] = createExportWrapper("xmlNewDocPI");

var _xmlNewNodeEatName = Module["_xmlNewNodeEatName"] = createExportWrapper("xmlNewNodeEatName");

var _xmlNewDocNodeEatName = Module["_xmlNewDocNodeEatName"] = createExportWrapper("xmlNewDocNodeEatName");

var _xmlNewDocRawNode = Module["_xmlNewDocRawNode"] = createExportWrapper("xmlNewDocRawNode");

var _xmlNewCharRef = Module["_xmlNewCharRef"] = createExportWrapper("xmlNewCharRef");

var _xmlNewTextLen = Module["_xmlNewTextLen"] = createExportWrapper("xmlNewTextLen");

var _xmlNewDocTextLen = Module["_xmlNewDocTextLen"] = createExportWrapper("xmlNewDocTextLen");

var _xmlSetListDoc = Module["_xmlSetListDoc"] = createExportWrapper("xmlSetListDoc");

var _xmlAddSibling = Module["_xmlAddSibling"] = createExportWrapper("xmlAddSibling");

var _xmlChildElementCount = Module["_xmlChildElementCount"] = createExportWrapper("xmlChildElementCount");

var _xmlFirstElementChild = Module["_xmlFirstElementChild"] = createExportWrapper("xmlFirstElementChild");

var _xmlLastElementChild = Module["_xmlLastElementChild"] = createExportWrapper("xmlLastElementChild");

var _xmlPreviousElementSibling = Module["_xmlPreviousElementSibling"] = createExportWrapper("xmlPreviousElementSibling");

var _xmlNextElementSibling = Module["_xmlNextElementSibling"] = createExportWrapper("xmlNextElementSibling");

var _xmlCopyNamespace = Module["_xmlCopyNamespace"] = createExportWrapper("xmlCopyNamespace");

var _xmlCopyProp = Module["_xmlCopyProp"] = createExportWrapper("xmlCopyProp");

var _xmlCopyDtd = Module["_xmlCopyDtd"] = createExportWrapper("xmlCopyDtd");

var _xmlDocCopyNodeList = Module["_xmlDocCopyNodeList"] = createExportWrapper("xmlDocCopyNodeList");

var _xmlCopyNodeList = Module["_xmlCopyNodeList"] = createExportWrapper("xmlCopyNodeList");

var _xmlCopyNotationTable = Module["_xmlCopyNotationTable"] = createExportWrapper("xmlCopyNotationTable");

var _xmlCopyElementTable = Module["_xmlCopyElementTable"] = createExportWrapper("xmlCopyElementTable");

var _xmlCopyAttributeTable = Module["_xmlCopyAttributeTable"] = createExportWrapper("xmlCopyAttributeTable");

var _xmlGetDtdQElementDesc = Module["_xmlGetDtdQElementDesc"] = createExportWrapper("xmlGetDtdQElementDesc");

var _xmlGetDtdQAttrDesc = Module["_xmlGetDtdQAttrDesc"] = createExportWrapper("xmlGetDtdQAttrDesc");

var _xmlNodeSetLang = Module["_xmlNodeSetLang"] = createExportWrapper("xmlNodeSetLang");

var _xmlNodeGetLang = Module["_xmlNodeGetLang"] = createExportWrapper("xmlNodeGetLang");

var _xmlNodeSetSpacePreserve = Module["_xmlNodeSetSpacePreserve"] = createExportWrapper("xmlNodeSetSpacePreserve");

var _xmlNodeGetSpacePreserve = Module["_xmlNodeGetSpacePreserve"] = createExportWrapper("xmlNodeGetSpacePreserve");

var _xmlNodeSetName = Module["_xmlNodeSetName"] = createExportWrapper("xmlNodeSetName");

var _xmlNodeSetBase = Module["_xmlNodeSetBase"] = createExportWrapper("xmlNodeSetBase");

var _xmlPathToURI = Module["_xmlPathToURI"] = createExportWrapper("xmlPathToURI");

var _xmlNodeBufGetContent = Module["_xmlNodeBufGetContent"] = createExportWrapper("xmlNodeBufGetContent");

var _xmlBufFromBuffer = Module["_xmlBufFromBuffer"] = createExportWrapper("xmlBufFromBuffer");

var _xmlBufGetNodeContent = Module["_xmlBufGetNodeContent"] = createExportWrapper("xmlBufGetNodeContent");

var _xmlBufBackToBuffer = Module["_xmlBufBackToBuffer"] = createExportWrapper("xmlBufBackToBuffer");

var _xmlTextMerge = Module["_xmlTextMerge"] = createExportWrapper("xmlTextMerge");

var _xmlGetDtdAttrDesc = Module["_xmlGetDtdAttrDesc"] = createExportWrapper("xmlGetDtdAttrDesc");

var _xmlGetNoNsProp = Module["_xmlGetNoNsProp"] = createExportWrapper("xmlGetNoNsProp");

var _xmlUnsetProp = Module["_xmlUnsetProp"] = createExportWrapper("xmlUnsetProp");

var _xmlUnsetNsProp = Module["_xmlUnsetNsProp"] = createExportWrapper("xmlUnsetNsProp");

var _xmlBufferCreateSize = Module["_xmlBufferCreateSize"] = createExportWrapper("xmlBufferCreateSize");

var _xmlBufferDetach = Module["_xmlBufferDetach"] = createExportWrapper("xmlBufferDetach");

var _xmlBufferCreateStatic = Module["_xmlBufferCreateStatic"] = createExportWrapper("xmlBufferCreateStatic");

var _xmlBufferSetAllocationScheme = Module["_xmlBufferSetAllocationScheme"] = createExportWrapper("xmlBufferSetAllocationScheme");

var _xmlBufferEmpty = Module["_xmlBufferEmpty"] = createExportWrapper("xmlBufferEmpty");

var _xmlBufferDump = Module["_xmlBufferDump"] = createExportWrapper("xmlBufferDump");

var _xmlBufferResize = Module["_xmlBufferResize"] = createExportWrapper("xmlBufferResize");

var _xmlBufferAddHead = Module["_xmlBufferAddHead"] = createExportWrapper("xmlBufferAddHead");

var _xmlBufferCat = Module["_xmlBufferCat"] = createExportWrapper("xmlBufferCat");

var _xmlGetDocCompressMode = Module["_xmlGetDocCompressMode"] = createExportWrapper("xmlGetDocCompressMode");

var _xmlSetDocCompressMode = Module["_xmlSetDocCompressMode"] = createExportWrapper("xmlSetDocCompressMode");

var _xmlGetCompressMode = Module["_xmlGetCompressMode"] = createExportWrapper("xmlGetCompressMode");

var _xmlSetCompressMode = Module["_xmlSetCompressMode"] = createExportWrapper("xmlSetCompressMode");

var _xmlDOMWrapNewCtxt = Module["_xmlDOMWrapNewCtxt"] = createExportWrapper("xmlDOMWrapNewCtxt");

var _xmlDOMWrapFreeCtxt = Module["_xmlDOMWrapFreeCtxt"] = createExportWrapper("xmlDOMWrapFreeCtxt");

var _xmlDOMWrapRemoveNode = Module["_xmlDOMWrapRemoveNode"] = createExportWrapper("xmlDOMWrapRemoveNode");

var _xmlDOMWrapCloneNode = Module["_xmlDOMWrapCloneNode"] = createExportWrapper("xmlDOMWrapCloneNode");

var _xmlDOMWrapAdoptNode = Module["_xmlDOMWrapAdoptNode"] = createExportWrapper("xmlDOMWrapAdoptNode");

var ___xmlRandom = Module["___xmlRandom"] = createExportWrapper("__xmlRandom");

var _xmlHashAddEntry3 = Module["_xmlHashAddEntry3"] = createExportWrapper("xmlHashAddEntry3");

var _xmlHashUpdateEntry = Module["_xmlHashUpdateEntry"] = createExportWrapper("xmlHashUpdateEntry");

var _xmlHashUpdateEntry3 = Module["_xmlHashUpdateEntry3"] = createExportWrapper("xmlHashUpdateEntry3");

var _xmlHashLookup3 = Module["_xmlHashLookup3"] = createExportWrapper("xmlHashLookup3");

var _xmlHashQLookup = Module["_xmlHashQLookup"] = createExportWrapper("xmlHashQLookup");

var _xmlHashQLookup3 = Module["_xmlHashQLookup3"] = createExportWrapper("xmlHashQLookup3");

var _xmlStrQEqual = Module["_xmlStrQEqual"] = createExportWrapper("xmlStrQEqual");

var _xmlHashScan3 = Module["_xmlHashScan3"] = createExportWrapper("xmlHashScan3");

var _xmlHashScanFull3 = Module["_xmlHashScanFull3"] = createExportWrapper("xmlHashScanFull3");

var _xmlHashRemoveEntry3 = Module["_xmlHashRemoveEntry3"] = createExportWrapper("xmlHashRemoveEntry3");

var _xmlListCreate = Module["_xmlListCreate"] = createExportWrapper("xmlListCreate");

var _xmlListSearch = Module["_xmlListSearch"] = createExportWrapper("xmlListSearch");

var _xmlListReverseSearch = Module["_xmlListReverseSearch"] = createExportWrapper("xmlListReverseSearch");

var _xmlListInsert = Module["_xmlListInsert"] = createExportWrapper("xmlListInsert");

var _xmlListAppend = Module["_xmlListAppend"] = createExportWrapper("xmlListAppend");

var _xmlListDelete = Module["_xmlListDelete"] = createExportWrapper("xmlListDelete");

var _xmlListClear = Module["_xmlListClear"] = createExportWrapper("xmlListClear");

var _xmlListRemoveFirst = Module["_xmlListRemoveFirst"] = createExportWrapper("xmlListRemoveFirst");

var _xmlListRemoveLast = Module["_xmlListRemoveLast"] = createExportWrapper("xmlListRemoveLast");

var _xmlListRemoveAll = Module["_xmlListRemoveAll"] = createExportWrapper("xmlListRemoveAll");

var _xmlListEmpty = Module["_xmlListEmpty"] = createExportWrapper("xmlListEmpty");

var _xmlListFront = Module["_xmlListFront"] = createExportWrapper("xmlListFront");

var _xmlListEnd = Module["_xmlListEnd"] = createExportWrapper("xmlListEnd");

var _xmlListSize = Module["_xmlListSize"] = createExportWrapper("xmlListSize");

var _xmlListPopFront = Module["_xmlListPopFront"] = createExportWrapper("xmlListPopFront");

var _xmlListPopBack = Module["_xmlListPopBack"] = createExportWrapper("xmlListPopBack");

var _xmlListPushFront = Module["_xmlListPushFront"] = createExportWrapper("xmlListPushFront");

var _xmlListPushBack = Module["_xmlListPushBack"] = createExportWrapper("xmlListPushBack");

var _xmlLinkGetData = Module["_xmlLinkGetData"] = createExportWrapper("xmlLinkGetData");

var _xmlListReverse = Module["_xmlListReverse"] = createExportWrapper("xmlListReverse");

var _xmlListSort = Module["_xmlListSort"] = createExportWrapper("xmlListSort");

var _xmlListCopy = Module["_xmlListCopy"] = createExportWrapper("xmlListCopy");

var _xmlListDup = Module["_xmlListDup"] = createExportWrapper("xmlListDup");

var _xmlListMerge = Module["_xmlListMerge"] = createExportWrapper("xmlListMerge");

var _xmlListWalk = Module["_xmlListWalk"] = createExportWrapper("xmlListWalk");

var _xmlListReverseWalk = Module["_xmlListReverseWalk"] = createExportWrapper("xmlListReverseWalk");

var ___xmlIOErr = Module["___xmlIOErr"] = createExportWrapper("__xmlIOErr");

var _xmlNormalizeWindowsPath = Module["_xmlNormalizeWindowsPath"] = createExportWrapper("xmlNormalizeWindowsPath");

var _xmlPopInputCallbacks = Module["_xmlPopInputCallbacks"] = createExportWrapper("xmlPopInputCallbacks");

var _xmlCheckFilename = Module["_xmlCheckFilename"] = createExportWrapper("xmlCheckFilename");

var _xmlFileMatch = Module["_xmlFileMatch"] = createExportWrapper("xmlFileMatch");

var _xmlFileOpen = Module["_xmlFileOpen"] = createExportWrapper("xmlFileOpen");

var _xmlStrncasecmp = Module["_xmlStrncasecmp"] = createExportWrapper("xmlStrncasecmp");

var _xmlFileRead = Module["_xmlFileRead"] = createExportWrapper("xmlFileRead");

var _xmlFileClose = Module["_xmlFileClose"] = createExportWrapper("xmlFileClose");

var _xmlRegisterInputCallbacks = Module["_xmlRegisterInputCallbacks"] = createExportWrapper("xmlRegisterInputCallbacks");

var _xmlRegisterOutputCallbacks = Module["_xmlRegisterOutputCallbacks"] = createExportWrapper("xmlRegisterOutputCallbacks");

var _gzread = Module["_gzread"] = createExportWrapper("gzread");

var _gzclose = Module["_gzclose"] = createExportWrapper("gzclose");

var _xmlAllocOutputBufferInternal = Module["_xmlAllocOutputBufferInternal"] = createExportWrapper("xmlAllocOutputBufferInternal");

var ___xmlParserInputBufferCreateFilename = Module["___xmlParserInputBufferCreateFilename"] = createExportWrapper("__xmlParserInputBufferCreateFilename");

var _gzdirect = Module["_gzdirect"] = createExportWrapper("gzdirect");

var ___xmlOutputBufferCreateFilename = Module["___xmlOutputBufferCreateFilename"] = createExportWrapper("__xmlOutputBufferCreateFilename");

var _gzdopen = Module["_gzdopen"] = createExportWrapper("gzdopen");

var _gzopen = Module["_gzopen"] = createExportWrapper("gzopen");

var _gzwrite = Module["_gzwrite"] = createExportWrapper("gzwrite");

var _xmlParserInputBufferCreateFile = Module["_xmlParserInputBufferCreateFile"] = createExportWrapper("xmlParserInputBufferCreateFile");

var _xmlOutputBufferCreateFile = Module["_xmlOutputBufferCreateFile"] = createExportWrapper("xmlOutputBufferCreateFile");

var _xmlOutputBufferCreateIO = Module["_xmlOutputBufferCreateIO"] = createExportWrapper("xmlOutputBufferCreateIO");

var _xmlParserInputBufferCreateStatic = Module["_xmlParserInputBufferCreateStatic"] = createExportWrapper("xmlParserInputBufferCreateStatic");

var _xmlBufCreateStatic = Module["_xmlBufCreateStatic"] = createExportWrapper("xmlBufCreateStatic");

var _xmlOutputBufferCreateFd = Module["_xmlOutputBufferCreateFd"] = createExportWrapper("xmlOutputBufferCreateFd");

var _xmlOutputBufferWrite = Module["_xmlOutputBufferWrite"] = createExportWrapper("xmlOutputBufferWrite");

var _xmlOutputBufferWriteEscape = Module["_xmlOutputBufferWriteEscape"] = createExportWrapper("xmlOutputBufferWriteEscape");

var _xmlOutputBufferWriteString = Module["_xmlOutputBufferWriteString"] = createExportWrapper("xmlOutputBufferWriteString");

var _xmlNoNetExternalEntityLoader = Module["_xmlNoNetExternalEntityLoader"] = createExportWrapper("xmlNoNetExternalEntityLoader");

var _xmlCatalogLocalResolve = Module["_xmlCatalogLocalResolve"] = createExportWrapper("xmlCatalogLocalResolve");

var _xmlCatalogResolve = Module["_xmlCatalogResolve"] = createExportWrapper("xmlCatalogResolve");

var _xmlCatalogLocalResolveURI = Module["_xmlCatalogLocalResolveURI"] = createExportWrapper("xmlCatalogLocalResolveURI");

var _xmlCatalogResolveURI = Module["_xmlCatalogResolveURI"] = createExportWrapper("xmlCatalogResolveURI");

var _xmlMallocBreakpoint = Module["_xmlMallocBreakpoint"] = createExportWrapper("xmlMallocBreakpoint");

var _xmlMallocLoc = Module["_xmlMallocLoc"] = createExportWrapper("xmlMallocLoc");

var _xmlNewMutex = Module["_xmlNewMutex"] = createExportWrapper("xmlNewMutex");

var _xmlMutexLock = Module["_xmlMutexLock"] = createExportWrapper("xmlMutexLock");

var _xmlMutexUnlock = Module["_xmlMutexUnlock"] = createExportWrapper("xmlMutexUnlock");

var _xmlMemoryDump = Module["_xmlMemoryDump"] = createExportWrapper("xmlMemoryDump");

var _xmlMallocAtomicLoc = Module["_xmlMallocAtomicLoc"] = createExportWrapper("xmlMallocAtomicLoc");

var _xmlMemMalloc = Module["_xmlMemMalloc"] = createExportWrapper("xmlMemMalloc");

var _xmlReallocLoc = Module["_xmlReallocLoc"] = createExportWrapper("xmlReallocLoc");

var _xmlMemRealloc = Module["_xmlMemRealloc"] = createExportWrapper("xmlMemRealloc");

var _xmlMemFree = Module["_xmlMemFree"] = createExportWrapper("xmlMemFree");

var _xmlMemStrdupLoc = Module["_xmlMemStrdupLoc"] = createExportWrapper("xmlMemStrdupLoc");

var _xmlMemoryStrdup = Module["_xmlMemoryStrdup"] = createExportWrapper("xmlMemoryStrdup");

var _xmlMemUsed = Module["_xmlMemUsed"] = createExportWrapper("xmlMemUsed");

var _xmlMemBlocks = Module["_xmlMemBlocks"] = createExportWrapper("xmlMemBlocks");

var _xmlMemDisplayLast = Module["_xmlMemDisplayLast"] = createExportWrapper("xmlMemDisplayLast");

var _xmlMemDisplay = Module["_xmlMemDisplay"] = createExportWrapper("xmlMemDisplay");

var _xmlMemShow = Module["_xmlMemShow"] = createExportWrapper("xmlMemShow");

var _xmlFreeMutex = Module["_xmlFreeMutex"] = createExportWrapper("xmlFreeMutex");

var _xmlMemSetup = Module["_xmlMemSetup"] = createExportWrapper("xmlMemSetup");

var _xmlMemGet = Module["_xmlMemGet"] = createExportWrapper("xmlMemGet");

var _xmlGcMemSetup = Module["_xmlGcMemSetup"] = createExportWrapper("xmlGcMemSetup");

var _xmlGcMemGet = Module["_xmlGcMemGet"] = createExportWrapper("xmlGcMemGet");

var _xmlParseURIRaw = Module["_xmlParseURIRaw"] = createExportWrapper("xmlParseURIRaw");

var _xmlSaveUri = Module["_xmlSaveUri"] = createExportWrapper("xmlSaveUri");

var _xmlPrintURI = Module["_xmlPrintURI"] = createExportWrapper("xmlPrintURI");

var _fputs = Module["_fputs"] = createExportWrapper("fputs");

var _xmlNormalizeURIPath = Module["_xmlNormalizeURIPath"] = createExportWrapper("xmlNormalizeURIPath");

var _xmlURIEscape = Module["_xmlURIEscape"] = createExportWrapper("xmlURIEscape");

var _xmlBuildRelativeURI = Module["_xmlBuildRelativeURI"] = createExportWrapper("xmlBuildRelativeURI");

var _xmlValidBuildContentModel = Module["_xmlValidBuildContentModel"] = createExportWrapper("xmlValidBuildContentModel");

var _xmlSnprintfElementContent = Module["_xmlSnprintfElementContent"] = createExportWrapper("xmlSnprintfElementContent");

var _xmlRegexpIsDeterminist = Module["_xmlRegexpIsDeterminist"] = createExportWrapper("xmlRegexpIsDeterminist");

var _xmlNewAutomata = Module["_xmlNewAutomata"] = createExportWrapper("xmlNewAutomata");

var _xmlAutomataGetInitState = Module["_xmlAutomataGetInitState"] = createExportWrapper("xmlAutomataGetInitState");

var _xmlAutomataSetFinalState = Module["_xmlAutomataSetFinalState"] = createExportWrapper("xmlAutomataSetFinalState");

var _xmlAutomataCompile = Module["_xmlAutomataCompile"] = createExportWrapper("xmlAutomataCompile");

var _xmlFreeAutomata = Module["_xmlFreeAutomata"] = createExportWrapper("xmlFreeAutomata");

var _xmlAutomataNewTransition = Module["_xmlAutomataNewTransition"] = createExportWrapper("xmlAutomataNewTransition");

var _xmlAutomataNewEpsilon = Module["_xmlAutomataNewEpsilon"] = createExportWrapper("xmlAutomataNewEpsilon");

var _xmlAutomataNewState = Module["_xmlAutomataNewState"] = createExportWrapper("xmlAutomataNewState");

var _xmlNewElementContent = Module["_xmlNewElementContent"] = createExportWrapper("xmlNewElementContent");

var _xmlCopyDocElementContent = Module["_xmlCopyDocElementContent"] = createExportWrapper("xmlCopyDocElementContent");

var _xmlCopyElementContent = Module["_xmlCopyElementContent"] = createExportWrapper("xmlCopyElementContent");

var _xmlFreeElementContent = Module["_xmlFreeElementContent"] = createExportWrapper("xmlFreeElementContent");

var _xmlSprintfElementContent = Module["_xmlSprintfElementContent"] = createExportWrapper("xmlSprintfElementContent");

var _xmlAddElementDecl = Module["_xmlAddElementDecl"] = createExportWrapper("xmlAddElementDecl");

var _xmlRegFreeRegexp = Module["_xmlRegFreeRegexp"] = createExportWrapper("xmlRegFreeRegexp");

var _xmlDumpElementDecl = Module["_xmlDumpElementDecl"] = createExportWrapper("xmlDumpElementDecl");

var _xmlDumpElementTable = Module["_xmlDumpElementTable"] = createExportWrapper("xmlDumpElementTable");

var _xmlCopyEnumeration = Module["_xmlCopyEnumeration"] = createExportWrapper("xmlCopyEnumeration");

var _xmlAddAttributeDecl = Module["_xmlAddAttributeDecl"] = createExportWrapper("xmlAddAttributeDecl");

var _xmlDumpAttributeDecl = Module["_xmlDumpAttributeDecl"] = createExportWrapper("xmlDumpAttributeDecl");

var _xmlDumpAttributeTable = Module["_xmlDumpAttributeTable"] = createExportWrapper("xmlDumpAttributeTable");

var _xmlAddNotationDecl = Module["_xmlAddNotationDecl"] = createExportWrapper("xmlAddNotationDecl");

var _xmlDumpNotationDecl = Module["_xmlDumpNotationDecl"] = createExportWrapper("xmlDumpNotationDecl");

var _xmlDumpNotationTable = Module["_xmlDumpNotationTable"] = createExportWrapper("xmlDumpNotationTable");

var _xmlAddRef = Module["_xmlAddRef"] = createExportWrapper("xmlAddRef");

var _xmlIsRef = Module["_xmlIsRef"] = createExportWrapper("xmlIsRef");

var _xmlRemoveRef = Module["_xmlRemoveRef"] = createExportWrapper("xmlRemoveRef");

var _xmlGetRefs = Module["_xmlGetRefs"] = createExportWrapper("xmlGetRefs");

var _xmlGetDtdElementDesc = Module["_xmlGetDtdElementDesc"] = createExportWrapper("xmlGetDtdElementDesc");

var _xmlGetDtdNotationDesc = Module["_xmlGetDtdNotationDesc"] = createExportWrapper("xmlGetDtdNotationDesc");

var _xmlValidateNotationUse = Module["_xmlValidateNotationUse"] = createExportWrapper("xmlValidateNotationUse");

var _xmlValidateNameValue = Module["_xmlValidateNameValue"] = createExportWrapper("xmlValidateNameValue");

var _xmlValidateNamesValue = Module["_xmlValidateNamesValue"] = createExportWrapper("xmlValidateNamesValue");

var _xmlValidateNmtokenValue = Module["_xmlValidateNmtokenValue"] = createExportWrapper("xmlValidateNmtokenValue");

var _xmlValidateNmtokensValue = Module["_xmlValidateNmtokensValue"] = createExportWrapper("xmlValidateNmtokensValue");

var _xmlValidateNotationDecl = Module["_xmlValidateNotationDecl"] = createExportWrapper("xmlValidateNotationDecl");

var _xmlValidateAttributeValue = Module["_xmlValidateAttributeValue"] = createExportWrapper("xmlValidateAttributeValue");

var _xmlValidCtxtNormalizeAttributeValue = Module["_xmlValidCtxtNormalizeAttributeValue"] = createExportWrapper("xmlValidCtxtNormalizeAttributeValue");

var _xmlValidNormalizeAttributeValue = Module["_xmlValidNormalizeAttributeValue"] = createExportWrapper("xmlValidNormalizeAttributeValue");

var _xmlValidateAttributeDecl = Module["_xmlValidateAttributeDecl"] = createExportWrapper("xmlValidateAttributeDecl");

var _xmlValidateElementDecl = Module["_xmlValidateElementDecl"] = createExportWrapper("xmlValidateElementDecl");

var _xmlValidateOneAttribute = Module["_xmlValidateOneAttribute"] = createExportWrapper("xmlValidateOneAttribute");

var _xmlValidateOneNamespace = Module["_xmlValidateOneNamespace"] = createExportWrapper("xmlValidateOneNamespace");

var _xmlValidatePushElement = Module["_xmlValidatePushElement"] = createExportWrapper("xmlValidatePushElement");

var _xmlRegExecPushString = Module["_xmlRegExecPushString"] = createExportWrapper("xmlRegExecPushString");

var _xmlRegNewExecCtxt = Module["_xmlRegNewExecCtxt"] = createExportWrapper("xmlRegNewExecCtxt");

var _xmlValidatePushCData = Module["_xmlValidatePushCData"] = createExportWrapper("xmlValidatePushCData");

var _xmlValidatePopElement = Module["_xmlValidatePopElement"] = createExportWrapper("xmlValidatePopElement");

var _xmlRegFreeExecCtxt = Module["_xmlRegFreeExecCtxt"] = createExportWrapper("xmlRegFreeExecCtxt");

var _xmlValidateOneElement = Module["_xmlValidateOneElement"] = createExportWrapper("xmlValidateOneElement");

var _xmlValidateDocumentFinal = Module["_xmlValidateDocumentFinal"] = createExportWrapper("xmlValidateDocumentFinal");

var _xmlValidateDtd = Module["_xmlValidateDtd"] = createExportWrapper("xmlValidateDtd");

var _xmlValidateDtdFinal = Module["_xmlValidateDtdFinal"] = createExportWrapper("xmlValidateDtdFinal");

var _xmlValidGetPotentialChildren = Module["_xmlValidGetPotentialChildren"] = createExportWrapper("xmlValidGetPotentialChildren");

var _xmlValidGetValidElements = Module["_xmlValidGetValidElements"] = createExportWrapper("xmlValidGetValidElements");

var _htmlTagLookup = Module["_htmlTagLookup"] = createExportWrapper("htmlTagLookup");

var _htmlAutoCloseTag = Module["_htmlAutoCloseTag"] = createExportWrapper("htmlAutoCloseTag");

var _htmlIsAutoClosed = Module["_htmlIsAutoClosed"] = createExportWrapper("htmlIsAutoClosed");

var _htmlIsScriptAttribute = Module["_htmlIsScriptAttribute"] = createExportWrapper("htmlIsScriptAttribute");

var _htmlEntityLookup = Module["_htmlEntityLookup"] = createExportWrapper("htmlEntityLookup");

var _htmlEntityValueLookup = Module["_htmlEntityValueLookup"] = createExportWrapper("htmlEntityValueLookup");

var _htmlEncodeEntities = Module["_htmlEncodeEntities"] = createExportWrapper("htmlEncodeEntities");

var _htmlNewDocNoDtD = Module["_htmlNewDocNoDtD"] = createExportWrapper("htmlNewDocNoDtD");

var _htmlNewDoc = Module["_htmlNewDoc"] = createExportWrapper("htmlNewDoc");

var _htmlParseEntityRef = Module["_htmlParseEntityRef"] = createExportWrapper("htmlParseEntityRef");

var _htmlParseCharRef = Module["_htmlParseCharRef"] = createExportWrapper("htmlParseCharRef");

var _htmlParseElement = Module["_htmlParseElement"] = createExportWrapper("htmlParseElement");

var _htmlNewParserCtxt = Module["_htmlNewParserCtxt"] = createExportWrapper("htmlNewParserCtxt");

var _htmlParseChunk = Module["_htmlParseChunk"] = createExportWrapper("htmlParseChunk");

var _htmlCreatePushParserCtxt = Module["_htmlCreatePushParserCtxt"] = createExportWrapper("htmlCreatePushParserCtxt");

var _htmlSAXParseDoc = Module["_htmlSAXParseDoc"] = createExportWrapper("htmlSAXParseDoc");

var _htmlParseDoc = Module["_htmlParseDoc"] = createExportWrapper("htmlParseDoc");

var _htmlSAXParseFile = Module["_htmlSAXParseFile"] = createExportWrapper("htmlSAXParseFile");

var _htmlParseFile = Module["_htmlParseFile"] = createExportWrapper("htmlParseFile");

var _htmlHandleOmittedElem = Module["_htmlHandleOmittedElem"] = createExportWrapper("htmlHandleOmittedElem");

var _htmlElementAllowedHere = Module["_htmlElementAllowedHere"] = createExportWrapper("htmlElementAllowedHere");

var _htmlElementStatusHere = Module["_htmlElementStatusHere"] = createExportWrapper("htmlElementStatusHere");

var _htmlAttrAllowed = Module["_htmlAttrAllowed"] = createExportWrapper("htmlAttrAllowed");

var _htmlNodeStatus = Module["_htmlNodeStatus"] = createExportWrapper("htmlNodeStatus");

var _htmlCtxtReset = Module["_htmlCtxtReset"] = createExportWrapper("htmlCtxtReset");

var _htmlReadDoc = Module["_htmlReadDoc"] = createExportWrapper("htmlReadDoc");

var _htmlReadFile = Module["_htmlReadFile"] = createExportWrapper("htmlReadFile");

var _htmlReadMemory = Module["_htmlReadMemory"] = createExportWrapper("htmlReadMemory");

var _htmlReadFd = Module["_htmlReadFd"] = createExportWrapper("htmlReadFd");

var _htmlReadIO = Module["_htmlReadIO"] = createExportWrapper("htmlReadIO");

var _htmlCtxtReadDoc = Module["_htmlCtxtReadDoc"] = createExportWrapper("htmlCtxtReadDoc");

var _htmlCtxtReadFile = Module["_htmlCtxtReadFile"] = createExportWrapper("htmlCtxtReadFile");

var _htmlCtxtReadMemory = Module["_htmlCtxtReadMemory"] = createExportWrapper("htmlCtxtReadMemory");

var _htmlCtxtReadFd = Module["_htmlCtxtReadFd"] = createExportWrapper("htmlCtxtReadFd");

var _htmlCtxtReadIO = Module["_htmlCtxtReadIO"] = createExportWrapper("htmlCtxtReadIO");

var _htmlSetMetaEncoding = Module["_htmlSetMetaEncoding"] = createExportWrapper("htmlSetMetaEncoding");

var _htmlIsBooleanAttr = Module["_htmlIsBooleanAttr"] = createExportWrapper("htmlIsBooleanAttr");

var _htmlNodeDump = Module["_htmlNodeDump"] = createExportWrapper("htmlNodeDump");

var _htmlNodeDumpFileFormat = Module["_htmlNodeDumpFileFormat"] = createExportWrapper("htmlNodeDumpFileFormat");

var _htmlDocContentDumpFormatOutput = Module["_htmlDocContentDumpFormatOutput"] = createExportWrapper("htmlDocContentDumpFormatOutput");

var _xmlNsListDumpOutput = Module["_xmlNsListDumpOutput"] = createExportWrapper("xmlNsListDumpOutput");

var _htmlNodeDumpFile = Module["_htmlNodeDumpFile"] = createExportWrapper("htmlNodeDumpFile");

var _xmlBufWriteQuotedString = Module["_xmlBufWriteQuotedString"] = createExportWrapper("xmlBufWriteQuotedString");

var _htmlDocDumpMemory = Module["_htmlDocDumpMemory"] = createExportWrapper("htmlDocDumpMemory");

var _htmlDocContentDumpOutput = Module["_htmlDocContentDumpOutput"] = createExportWrapper("htmlDocContentDumpOutput");

var _xmlBufCCat = Module["_xmlBufCCat"] = createExportWrapper("xmlBufCCat");

var _htmlNodeDumpOutput = Module["_htmlNodeDumpOutput"] = createExportWrapper("htmlNodeDumpOutput");

var _htmlDocDump = Module["_htmlDocDump"] = createExportWrapper("htmlDocDump");

var _htmlSaveFile = Module["_htmlSaveFile"] = createExportWrapper("htmlSaveFile");

var _htmlSaveFileEnc = Module["_htmlSaveFileEnc"] = createExportWrapper("htmlSaveFileEnc");

var _xmlDebugDumpString = Module["_xmlDebugDumpString"] = createExportWrapper("xmlDebugDumpString");

var _xmlDebugDumpAttr = Module["_xmlDebugDumpAttr"] = createExportWrapper("xmlDebugDumpAttr");

var _xmlDebugDumpEntities = Module["_xmlDebugDumpEntities"] = createExportWrapper("xmlDebugDumpEntities");

var _xmlDebugDumpAttrList = Module["_xmlDebugDumpAttrList"] = createExportWrapper("xmlDebugDumpAttrList");

var _xmlDebugDumpOneNode = Module["_xmlDebugDumpOneNode"] = createExportWrapper("xmlDebugDumpOneNode");

var _xmlDebugDumpNode = Module["_xmlDebugDumpNode"] = createExportWrapper("xmlDebugDumpNode");

var _xmlDebugDumpNodeList = Module["_xmlDebugDumpNodeList"] = createExportWrapper("xmlDebugDumpNodeList");

var _xmlDebugDumpDocumentHead = Module["_xmlDebugDumpDocumentHead"] = createExportWrapper("xmlDebugDumpDocumentHead");

var _xmlDebugDumpDocument = Module["_xmlDebugDumpDocument"] = createExportWrapper("xmlDebugDumpDocument");

var _xmlDebugDumpDTD = Module["_xmlDebugDumpDTD"] = createExportWrapper("xmlDebugDumpDTD");

var _xmlDebugCheckDocument = Module["_xmlDebugCheckDocument"] = createExportWrapper("xmlDebugCheckDocument");

var _xmlLsCountNode = Module["_xmlLsCountNode"] = createExportWrapper("xmlLsCountNode");

var _xmlLsOneNode = Module["_xmlLsOneNode"] = createExportWrapper("xmlLsOneNode");

var _xmlBoolToText = Module["_xmlBoolToText"] = createExportWrapper("xmlBoolToText");

var _xmlShellPrintXPathError = Module["_xmlShellPrintXPathError"] = createExportWrapper("xmlShellPrintXPathError");

var _xmlShellPrintNode = Module["_xmlShellPrintNode"] = createExportWrapper("xmlShellPrintNode");

var _xmlShellPrintXPathResult = Module["_xmlShellPrintXPathResult"] = createExportWrapper("xmlShellPrintXPathResult");

var _xmlShellList = Module["_xmlShellList"] = createExportWrapper("xmlShellList");

var _xmlShellBase = Module["_xmlShellBase"] = createExportWrapper("xmlShellBase");

var _xmlShellDir = Module["_xmlShellDir"] = createExportWrapper("xmlShellDir");

var _xmlShellCat = Module["_xmlShellCat"] = createExportWrapper("xmlShellCat");

var _xmlShellLoad = Module["_xmlShellLoad"] = createExportWrapper("xmlShellLoad");

var _xmlShellWrite = Module["_xmlShellWrite"] = createExportWrapper("xmlShellWrite");

var _xmlShellSave = Module["_xmlShellSave"] = createExportWrapper("xmlShellSave");

var _xmlShellValidate = Module["_xmlShellValidate"] = createExportWrapper("xmlShellValidate");

var _xmlShellDu = Module["_xmlShellDu"] = createExportWrapper("xmlShellDu");

var _xmlShellPwd = Module["_xmlShellPwd"] = createExportWrapper("xmlShellPwd");

var _xmlShell = Module["_xmlShell"] = createExportWrapper("xmlShell");

var _libxml_domnode_binary_insertion_sort = Module["_libxml_domnode_binary_insertion_sort"] = createExportWrapper("libxml_domnode_binary_insertion_sort");

var _libxml_domnode_tim_sort = Module["_libxml_domnode_tim_sort"] = createExportWrapper("libxml_domnode_tim_sort");

var _xmlXPathIsNaN = Module["_xmlXPathIsNaN"] = createExportWrapper("xmlXPathIsNaN");

var _xmlXPathIsInf = Module["_xmlXPathIsInf"] = createExportWrapper("xmlXPathIsInf");

var _xmlXPathErr = Module["_xmlXPathErr"] = createExportWrapper("xmlXPathErr");

var _xmlXPatherror = Module["_xmlXPatherror"] = createExportWrapper("xmlXPatherror");

var _xmlXPathFreeCompExpr = Module["_xmlXPathFreeCompExpr"] = createExportWrapper("xmlXPathFreeCompExpr");

var _xmlFreePatternList = Module["_xmlFreePatternList"] = createExportWrapper("xmlFreePatternList");

var _xmlXPtrFreeLocationSet = Module["_xmlXPtrFreeLocationSet"] = createExportWrapper("xmlXPtrFreeLocationSet");

var _xmlXPathDebugDumpObject = Module["_xmlXPathDebugDumpObject"] = createExportWrapper("xmlXPathDebugDumpObject");

var _xmlDocDump = Module["_xmlDocDump"] = createExportWrapper("xmlDocDump");

var _xmlElemDump = Module["_xmlElemDump"] = createExportWrapper("xmlElemDump");

var ___small_fprintf = Module["___small_fprintf"] = createExportWrapper("__small_fprintf");

var _xmlXPathDebugDumpCompExpr = Module["_xmlXPathDebugDumpCompExpr"] = createExportWrapper("xmlXPathDebugDumpCompExpr");

var _xmlXPathContextSetCache = Module["_xmlXPathContextSetCache"] = createExportWrapper("xmlXPathContextSetCache");

var _xmlXPathPopBoolean = Module["_xmlXPathPopBoolean"] = createExportWrapper("xmlXPathPopBoolean");

var _xmlXPathCastToBoolean = Module["_xmlXPathCastToBoolean"] = createExportWrapper("xmlXPathCastToBoolean");

var _xmlXPathFreeNodeSet = Module["_xmlXPathFreeNodeSet"] = createExportWrapper("xmlXPathFreeNodeSet");

var _xmlXPathNodeSetFreeNs = Module["_xmlXPathNodeSetFreeNs"] = createExportWrapper("xmlXPathNodeSetFreeNs");

var _xmlXPathPopNumber = Module["_xmlXPathPopNumber"] = createExportWrapper("xmlXPathPopNumber");

var _xmlXPathCastToNumber = Module["_xmlXPathCastToNumber"] = createExportWrapper("xmlXPathCastToNumber");

var _xmlXPathStringEvalNumber = Module["_xmlXPathStringEvalNumber"] = createExportWrapper("xmlXPathStringEvalNumber");

var _xmlXPathPopString = Module["_xmlXPathPopString"] = createExportWrapper("xmlXPathPopString");

var _xmlXPathCastNumberToString = Module["_xmlXPathCastNumberToString"] = createExportWrapper("xmlXPathCastNumberToString");

var _xmlXPathPopNodeSet = Module["_xmlXPathPopNodeSet"] = createExportWrapper("xmlXPathPopNodeSet");

var _xmlXPathPopExternal = Module["_xmlXPathPopExternal"] = createExportWrapper("xmlXPathPopExternal");

var _xmlXPathOrderDocElems = Module["_xmlXPathOrderDocElems"] = createExportWrapper("xmlXPathOrderDocElems");

var _xmlXPathCmpNodes = Module["_xmlXPathCmpNodes"] = createExportWrapper("xmlXPathCmpNodes");

var _xmlXPathNodeSetSort = Module["_xmlXPathNodeSetSort"] = createExportWrapper("xmlXPathNodeSetSort");

var _xmlXPathNodeSetCreate = Module["_xmlXPathNodeSetCreate"] = createExportWrapper("xmlXPathNodeSetCreate");

var _xmlStrPrintf = Module["_xmlStrPrintf"] = createExportWrapper("xmlStrPrintf");

var _xmlXPathNodeSetContains = Module["_xmlXPathNodeSetContains"] = createExportWrapper("xmlXPathNodeSetContains");

var _xmlXPathNodeSetAddNs = Module["_xmlXPathNodeSetAddNs"] = createExportWrapper("xmlXPathNodeSetAddNs");

var _xmlXPathNodeSetAdd = Module["_xmlXPathNodeSetAdd"] = createExportWrapper("xmlXPathNodeSetAdd");

var _xmlXPathNodeSetAddUnique = Module["_xmlXPathNodeSetAddUnique"] = createExportWrapper("xmlXPathNodeSetAddUnique");

var _xmlXPathNodeSetMerge = Module["_xmlXPathNodeSetMerge"] = createExportWrapper("xmlXPathNodeSetMerge");

var _xmlXPathNodeSetDel = Module["_xmlXPathNodeSetDel"] = createExportWrapper("xmlXPathNodeSetDel");

var _xmlXPathNodeSetRemove = Module["_xmlXPathNodeSetRemove"] = createExportWrapper("xmlXPathNodeSetRemove");

var _xmlXPathNewValueTree = Module["_xmlXPathNewValueTree"] = createExportWrapper("xmlXPathNewValueTree");

var _xmlXPathNewNodeSetList = Module["_xmlXPathNewNodeSetList"] = createExportWrapper("xmlXPathNewNodeSetList");

var _xmlXPathWrapNodeSet = Module["_xmlXPathWrapNodeSet"] = createExportWrapper("xmlXPathWrapNodeSet");

var _xmlXPathFreeNodeSetList = Module["_xmlXPathFreeNodeSetList"] = createExportWrapper("xmlXPathFreeNodeSetList");

var _xmlXPathDifference = Module["_xmlXPathDifference"] = createExportWrapper("xmlXPathDifference");

var _xmlXPathIntersection = Module["_xmlXPathIntersection"] = createExportWrapper("xmlXPathIntersection");

var _xmlXPathDistinctSorted = Module["_xmlXPathDistinctSorted"] = createExportWrapper("xmlXPathDistinctSorted");

var _xmlXPathCastNodeToString = Module["_xmlXPathCastNodeToString"] = createExportWrapper("xmlXPathCastNodeToString");

var _xmlXPathDistinct = Module["_xmlXPathDistinct"] = createExportWrapper("xmlXPathDistinct");

var _xmlXPathHasSameNodes = Module["_xmlXPathHasSameNodes"] = createExportWrapper("xmlXPathHasSameNodes");

var _xmlXPathNodeLeadingSorted = Module["_xmlXPathNodeLeadingSorted"] = createExportWrapper("xmlXPathNodeLeadingSorted");

var _xmlXPathNodeLeading = Module["_xmlXPathNodeLeading"] = createExportWrapper("xmlXPathNodeLeading");

var _xmlXPathLeadingSorted = Module["_xmlXPathLeadingSorted"] = createExportWrapper("xmlXPathLeadingSorted");

var _xmlXPathLeading = Module["_xmlXPathLeading"] = createExportWrapper("xmlXPathLeading");

var _xmlXPathNodeTrailingSorted = Module["_xmlXPathNodeTrailingSorted"] = createExportWrapper("xmlXPathNodeTrailingSorted");

var _xmlXPathNodeTrailing = Module["_xmlXPathNodeTrailing"] = createExportWrapper("xmlXPathNodeTrailing");

var _xmlXPathTrailingSorted = Module["_xmlXPathTrailingSorted"] = createExportWrapper("xmlXPathTrailingSorted");

var _xmlXPathTrailing = Module["_xmlXPathTrailing"] = createExportWrapper("xmlXPathTrailing");

var _xmlXPathRegisterFunc = Module["_xmlXPathRegisterFunc"] = createExportWrapper("xmlXPathRegisterFunc");

var _xmlXPathRegisterFuncLookup = Module["_xmlXPathRegisterFuncLookup"] = createExportWrapper("xmlXPathRegisterFuncLookup");

var _xmlXPathFunctionLookup = Module["_xmlXPathFunctionLookup"] = createExportWrapper("xmlXPathFunctionLookup");

var _xmlXPathFunctionLookupNS = Module["_xmlXPathFunctionLookupNS"] = createExportWrapper("xmlXPathFunctionLookupNS");

var _xmlXPathRegisteredFuncsCleanup = Module["_xmlXPathRegisteredFuncsCleanup"] = createExportWrapper("xmlXPathRegisteredFuncsCleanup");

var _xmlXPathRegisterVariable = Module["_xmlXPathRegisterVariable"] = createExportWrapper("xmlXPathRegisterVariable");

var _xmlXPathRegisterVariableNS = Module["_xmlXPathRegisterVariableNS"] = createExportWrapper("xmlXPathRegisterVariableNS");

var _xmlXPathRegisterVariableLookup = Module["_xmlXPathRegisterVariableLookup"] = createExportWrapper("xmlXPathRegisterVariableLookup");

var _xmlXPathVariableLookup = Module["_xmlXPathVariableLookup"] = createExportWrapper("xmlXPathVariableLookup");

var _xmlXPathVariableLookupNS = Module["_xmlXPathVariableLookupNS"] = createExportWrapper("xmlXPathVariableLookupNS");

var _xmlXPathObjectCopy = Module["_xmlXPathObjectCopy"] = createExportWrapper("xmlXPathObjectCopy");

var _xmlXPathRegisteredVariablesCleanup = Module["_xmlXPathRegisteredVariablesCleanup"] = createExportWrapper("xmlXPathRegisteredVariablesCleanup");

var _xmlXPathNsLookup = Module["_xmlXPathNsLookup"] = createExportWrapper("xmlXPathNsLookup");

var _xmlXPathRegisteredNsCleanup = Module["_xmlXPathRegisteredNsCleanup"] = createExportWrapper("xmlXPathRegisteredNsCleanup");

var _xmlXPathNewFloat = Module["_xmlXPathNewFloat"] = createExportWrapper("xmlXPathNewFloat");

var _xmlXPathWrapString = Module["_xmlXPathWrapString"] = createExportWrapper("xmlXPathWrapString");

var _xmlXPathNewCString = Module["_xmlXPathNewCString"] = createExportWrapper("xmlXPathNewCString");

var _xmlXPathWrapCString = Module["_xmlXPathWrapCString"] = createExportWrapper("xmlXPathWrapCString");

var _xmlXPathWrapExternal = Module["_xmlXPathWrapExternal"] = createExportWrapper("xmlXPathWrapExternal");

var _xmlXPtrLocationSetMerge = Module["_xmlXPtrLocationSetMerge"] = createExportWrapper("xmlXPtrLocationSetMerge");

var _xmlXPathCastBooleanToString = Module["_xmlXPathCastBooleanToString"] = createExportWrapper("xmlXPathCastBooleanToString");

var _xmlXPathCastNodeSetToString = Module["_xmlXPathCastNodeSetToString"] = createExportWrapper("xmlXPathCastNodeSetToString");

var _xmlXPathConvertString = Module["_xmlXPathConvertString"] = createExportWrapper("xmlXPathConvertString");

var _xmlXPathCastBooleanToNumber = Module["_xmlXPathCastBooleanToNumber"] = createExportWrapper("xmlXPathCastBooleanToNumber");

var _xmlXPathCastStringToNumber = Module["_xmlXPathCastStringToNumber"] = createExportWrapper("xmlXPathCastStringToNumber");

var _xmlXPathCastNodeToNumber = Module["_xmlXPathCastNodeToNumber"] = createExportWrapper("xmlXPathCastNodeToNumber");

var _xmlXPathCastNodeSetToNumber = Module["_xmlXPathCastNodeSetToNumber"] = createExportWrapper("xmlXPathCastNodeSetToNumber");

var _xmlXPathConvertNumber = Module["_xmlXPathConvertNumber"] = createExportWrapper("xmlXPathConvertNumber");

var _xmlXPathCastNumberToBoolean = Module["_xmlXPathCastNumberToBoolean"] = createExportWrapper("xmlXPathCastNumberToBoolean");

var _xmlXPathCastStringToBoolean = Module["_xmlXPathCastStringToBoolean"] = createExportWrapper("xmlXPathCastStringToBoolean");

var _xmlXPathCastNodeSetToBoolean = Module["_xmlXPathCastNodeSetToBoolean"] = createExportWrapper("xmlXPathCastNodeSetToBoolean");

var _xmlXPathConvertBoolean = Module["_xmlXPathConvertBoolean"] = createExportWrapper("xmlXPathConvertBoolean");

var _xmlXPathRegisterAllFunctions = Module["_xmlXPathRegisterAllFunctions"] = createExportWrapper("xmlXPathRegisterAllFunctions");

var _xmlXPathBooleanFunction = Module["_xmlXPathBooleanFunction"] = createExportWrapper("xmlXPathBooleanFunction");

var _xmlXPathCeilingFunction = Module["_xmlXPathCeilingFunction"] = createExportWrapper("xmlXPathCeilingFunction");

var _xmlXPathCountFunction = Module["_xmlXPathCountFunction"] = createExportWrapper("xmlXPathCountFunction");

var _xmlXPathConcatFunction = Module["_xmlXPathConcatFunction"] = createExportWrapper("xmlXPathConcatFunction");

var _xmlXPathContainsFunction = Module["_xmlXPathContainsFunction"] = createExportWrapper("xmlXPathContainsFunction");

var _xmlXPathIdFunction = Module["_xmlXPathIdFunction"] = createExportWrapper("xmlXPathIdFunction");

var _xmlXPathFalseFunction = Module["_xmlXPathFalseFunction"] = createExportWrapper("xmlXPathFalseFunction");

var _xmlXPathFloorFunction = Module["_xmlXPathFloorFunction"] = createExportWrapper("xmlXPathFloorFunction");

var _xmlXPathLastFunction = Module["_xmlXPathLastFunction"] = createExportWrapper("xmlXPathLastFunction");

var _xmlXPathLangFunction = Module["_xmlXPathLangFunction"] = createExportWrapper("xmlXPathLangFunction");

var _xmlXPathLocalNameFunction = Module["_xmlXPathLocalNameFunction"] = createExportWrapper("xmlXPathLocalNameFunction");

var _xmlXPathNotFunction = Module["_xmlXPathNotFunction"] = createExportWrapper("xmlXPathNotFunction");

var _xmlXPathNamespaceURIFunction = Module["_xmlXPathNamespaceURIFunction"] = createExportWrapper("xmlXPathNamespaceURIFunction");

var _xmlXPathNormalizeFunction = Module["_xmlXPathNormalizeFunction"] = createExportWrapper("xmlXPathNormalizeFunction");

var _xmlXPathNumberFunction = Module["_xmlXPathNumberFunction"] = createExportWrapper("xmlXPathNumberFunction");

var _xmlXPathPositionFunction = Module["_xmlXPathPositionFunction"] = createExportWrapper("xmlXPathPositionFunction");

var _xmlXPathRoundFunction = Module["_xmlXPathRoundFunction"] = createExportWrapper("xmlXPathRoundFunction");

var _xmlXPathStringFunction = Module["_xmlXPathStringFunction"] = createExportWrapper("xmlXPathStringFunction");

var _xmlXPathStringLengthFunction = Module["_xmlXPathStringLengthFunction"] = createExportWrapper("xmlXPathStringLengthFunction");

var _xmlXPathStartsWithFunction = Module["_xmlXPathStartsWithFunction"] = createExportWrapper("xmlXPathStartsWithFunction");

var _xmlXPathSubstringFunction = Module["_xmlXPathSubstringFunction"] = createExportWrapper("xmlXPathSubstringFunction");

var _xmlXPathSubstringBeforeFunction = Module["_xmlXPathSubstringBeforeFunction"] = createExportWrapper("xmlXPathSubstringBeforeFunction");

var _xmlXPathSubstringAfterFunction = Module["_xmlXPathSubstringAfterFunction"] = createExportWrapper("xmlXPathSubstringAfterFunction");

var _xmlXPathSumFunction = Module["_xmlXPathSumFunction"] = createExportWrapper("xmlXPathSumFunction");

var _xmlXPathTrueFunction = Module["_xmlXPathTrueFunction"] = createExportWrapper("xmlXPathTrueFunction");

var _xmlXPathTranslateFunction = Module["_xmlXPathTranslateFunction"] = createExportWrapper("xmlXPathTranslateFunction");

var _xmlXPathNewParserContext = Module["_xmlXPathNewParserContext"] = createExportWrapper("xmlXPathNewParserContext");

var _xmlXPathFreeParserContext = Module["_xmlXPathFreeParserContext"] = createExportWrapper("xmlXPathFreeParserContext");

var _xmlXPathEqualValues = Module["_xmlXPathEqualValues"] = createExportWrapper("xmlXPathEqualValues");

var _xmlXPathNotEqualValues = Module["_xmlXPathNotEqualValues"] = createExportWrapper("xmlXPathNotEqualValues");

var _xmlXPathCompareValues = Module["_xmlXPathCompareValues"] = createExportWrapper("xmlXPathCompareValues");

var _xmlXPathValueFlipSign = Module["_xmlXPathValueFlipSign"] = createExportWrapper("xmlXPathValueFlipSign");

var _xmlXPathAddValues = Module["_xmlXPathAddValues"] = createExportWrapper("xmlXPathAddValues");

var _xmlXPathSubValues = Module["_xmlXPathSubValues"] = createExportWrapper("xmlXPathSubValues");

var _xmlXPathMultValues = Module["_xmlXPathMultValues"] = createExportWrapper("xmlXPathMultValues");

var _xmlXPathDivValues = Module["_xmlXPathDivValues"] = createExportWrapper("xmlXPathDivValues");

var _xmlXPathModValues = Module["_xmlXPathModValues"] = createExportWrapper("xmlXPathModValues");

var _xmlXPathNextSelf = Module["_xmlXPathNextSelf"] = createExportWrapper("xmlXPathNextSelf");

var _xmlXPathNextChild = Module["_xmlXPathNextChild"] = createExportWrapper("xmlXPathNextChild");

var _xmlXPathNextDescendant = Module["_xmlXPathNextDescendant"] = createExportWrapper("xmlXPathNextDescendant");

var _xmlXPathNextDescendantOrSelf = Module["_xmlXPathNextDescendantOrSelf"] = createExportWrapper("xmlXPathNextDescendantOrSelf");

var _xmlXPathNextParent = Module["_xmlXPathNextParent"] = createExportWrapper("xmlXPathNextParent");

var _xmlXPathNextAncestor = Module["_xmlXPathNextAncestor"] = createExportWrapper("xmlXPathNextAncestor");

var _xmlXPathNextAncestorOrSelf = Module["_xmlXPathNextAncestorOrSelf"] = createExportWrapper("xmlXPathNextAncestorOrSelf");

var _xmlXPathNextFollowingSibling = Module["_xmlXPathNextFollowingSibling"] = createExportWrapper("xmlXPathNextFollowingSibling");

var _xmlXPathNextPrecedingSibling = Module["_xmlXPathNextPrecedingSibling"] = createExportWrapper("xmlXPathNextPrecedingSibling");

var _xmlXPathNextFollowing = Module["_xmlXPathNextFollowing"] = createExportWrapper("xmlXPathNextFollowing");

var _xmlXPathNextPreceding = Module["_xmlXPathNextPreceding"] = createExportWrapper("xmlXPathNextPreceding");

var _xmlXPathNextNamespace = Module["_xmlXPathNextNamespace"] = createExportWrapper("xmlXPathNextNamespace");

var _xmlXPathNextAttribute = Module["_xmlXPathNextAttribute"] = createExportWrapper("xmlXPathNextAttribute");

var _xmlXPathRoot = Module["_xmlXPathRoot"] = createExportWrapper("xmlXPathRoot");

var _xmlUTF8Strloc = Module["_xmlUTF8Strloc"] = createExportWrapper("xmlUTF8Strloc");

var _xmlUTF8Strpos = Module["_xmlUTF8Strpos"] = createExportWrapper("xmlUTF8Strpos");

var _xmlUTF8Strsize = Module["_xmlUTF8Strsize"] = createExportWrapper("xmlUTF8Strsize");

var _xmlXPathParseNCName = Module["_xmlXPathParseNCName"] = createExportWrapper("xmlXPathParseNCName");

var _xmlXPathParseName = Module["_xmlXPathParseName"] = createExportWrapper("xmlXPathParseName");

var _xmlXPathIsNodeType = Module["_xmlXPathIsNodeType"] = createExportWrapper("xmlXPathIsNodeType");

var _xmlXPathEvalPredicate = Module["_xmlXPathEvalPredicate"] = createExportWrapper("xmlXPathEvalPredicate");

var _xmlXPathEvaluatePredicateResult = Module["_xmlXPathEvaluatePredicateResult"] = createExportWrapper("xmlXPathEvaluatePredicateResult");

var _xmlXPathCtxtCompile = Module["_xmlXPathCtxtCompile"] = createExportWrapper("xmlXPathCtxtCompile");

var _xmlPatterncompile = Module["_xmlPatterncompile"] = createExportWrapper("xmlPatterncompile");

var _xmlPatternStreamable = Module["_xmlPatternStreamable"] = createExportWrapper("xmlPatternStreamable");

var _xmlFreePattern = Module["_xmlFreePattern"] = createExportWrapper("xmlFreePattern");

var _xmlXPathCompile = Module["_xmlXPathCompile"] = createExportWrapper("xmlXPathCompile");

var _xmlXPathCompiledEval = Module["_xmlXPathCompiledEval"] = createExportWrapper("xmlXPathCompiledEval");

var _xmlXPathCompiledEvalToBoolean = Module["_xmlXPathCompiledEvalToBoolean"] = createExportWrapper("xmlXPathCompiledEvalToBoolean");

var _xmlXPathEvalExpr = Module["_xmlXPathEvalExpr"] = createExportWrapper("xmlXPathEvalExpr");

var _xmlXPathSetContextNode = Module["_xmlXPathSetContextNode"] = createExportWrapper("xmlXPathSetContextNode");

var _xmlXPathNodeEval = Module["_xmlXPathNodeEval"] = createExportWrapper("xmlXPathNodeEval");

var _xmlPatternMaxDepth = Module["_xmlPatternMaxDepth"] = createExportWrapper("xmlPatternMaxDepth");

var _xmlPatternMinDepth = Module["_xmlPatternMinDepth"] = createExportWrapper("xmlPatternMinDepth");

var _xmlPatternFromRoot = Module["_xmlPatternFromRoot"] = createExportWrapper("xmlPatternFromRoot");

var _xmlPatternGetStreamCtxt = Module["_xmlPatternGetStreamCtxt"] = createExportWrapper("xmlPatternGetStreamCtxt");

var _xmlStreamWantsAnyNode = Module["_xmlStreamWantsAnyNode"] = createExportWrapper("xmlStreamWantsAnyNode");

var _xmlStreamPush = Module["_xmlStreamPush"] = createExportWrapper("xmlStreamPush");

var _xmlStreamPop = Module["_xmlStreamPop"] = createExportWrapper("xmlStreamPop");

var _xmlStreamPushNode = Module["_xmlStreamPushNode"] = createExportWrapper("xmlStreamPushNode");

var _xmlFreeStreamCtxt = Module["_xmlFreeStreamCtxt"] = createExportWrapper("xmlFreeStreamCtxt");

var _xmlXPtrLocationSetCreate = Module["_xmlXPtrLocationSetCreate"] = createExportWrapper("xmlXPtrLocationSetCreate");

var _xmlXPtrNewRange = Module["_xmlXPtrNewRange"] = createExportWrapper("xmlXPtrNewRange");

var _xmlXPtrLocationSetAdd = Module["_xmlXPtrLocationSetAdd"] = createExportWrapper("xmlXPtrLocationSetAdd");

var _xmlXPtrNewRangeNodeObject = Module["_xmlXPtrNewRangeNodeObject"] = createExportWrapper("xmlXPtrNewRangeNodeObject");

var _xmlXPtrWrapLocationSet = Module["_xmlXPtrWrapLocationSet"] = createExportWrapper("xmlXPtrWrapLocationSet");

var _xmlXPtrNewRangePoints = Module["_xmlXPtrNewRangePoints"] = createExportWrapper("xmlXPtrNewRangePoints");

var _xmlXPtrNewRangePointNode = Module["_xmlXPtrNewRangePointNode"] = createExportWrapper("xmlXPtrNewRangePointNode");

var _xmlXPtrNewRangeNodePoint = Module["_xmlXPtrNewRangeNodePoint"] = createExportWrapper("xmlXPtrNewRangeNodePoint");

var _xmlXPtrNewRangeNodes = Module["_xmlXPtrNewRangeNodes"] = createExportWrapper("xmlXPtrNewRangeNodes");

var _xmlXPtrNewCollapsedRange = Module["_xmlXPtrNewCollapsedRange"] = createExportWrapper("xmlXPtrNewCollapsedRange");

var _xmlXPtrLocationSetDel = Module["_xmlXPtrLocationSetDel"] = createExportWrapper("xmlXPtrLocationSetDel");

var _xmlXPtrLocationSetRemove = Module["_xmlXPtrLocationSetRemove"] = createExportWrapper("xmlXPtrLocationSetRemove");

var _xmlXPtrNewLocationSetNodes = Module["_xmlXPtrNewLocationSetNodes"] = createExportWrapper("xmlXPtrNewLocationSetNodes");

var _xmlXPtrNewLocationSetNodeSet = Module["_xmlXPtrNewLocationSetNodeSet"] = createExportWrapper("xmlXPtrNewLocationSetNodeSet");

var _xmlXPtrNewContext = Module["_xmlXPtrNewContext"] = createExportWrapper("xmlXPtrNewContext");

var _xmlXPtrEval = Module["_xmlXPtrEval"] = createExportWrapper("xmlXPtrEval");

var _xmlXPtrBuildNodeList = Module["_xmlXPtrBuildNodeList"] = createExportWrapper("xmlXPtrBuildNodeList");

var _xmlXPtrRangeToFunction = Module["_xmlXPtrRangeToFunction"] = createExportWrapper("xmlXPtrRangeToFunction");

var _xmlXPtrAdvanceNode = Module["_xmlXPtrAdvanceNode"] = createExportWrapper("xmlXPtrAdvanceNode");

var _xmlXPtrEvalRangePredicate = Module["_xmlXPtrEvalRangePredicate"] = createExportWrapper("xmlXPtrEvalRangePredicate");

var _xmlXIncludeNewContext = Module["_xmlXIncludeNewContext"] = createExportWrapper("xmlXIncludeNewContext");

var _xmlXIncludeFreeContext = Module["_xmlXIncludeFreeContext"] = createExportWrapper("xmlXIncludeFreeContext");

var _xmlXIncludeSetFlags = Module["_xmlXIncludeSetFlags"] = createExportWrapper("xmlXIncludeSetFlags");

var _xmlXIncludeProcessTreeFlagsData = Module["_xmlXIncludeProcessTreeFlagsData"] = createExportWrapper("xmlXIncludeProcessTreeFlagsData");

var _xmlXIncludeProcessFlagsData = Module["_xmlXIncludeProcessFlagsData"] = createExportWrapper("xmlXIncludeProcessFlagsData");

var _xmlBufLength = Module["_xmlBufLength"] = createExportWrapper("xmlBufLength");

var _xmlXIncludeProcess = Module["_xmlXIncludeProcess"] = createExportWrapper("xmlXIncludeProcess");

var _xmlXIncludeProcessTreeFlags = Module["_xmlXIncludeProcessTreeFlags"] = createExportWrapper("xmlXIncludeProcessTreeFlags");

var _xmlXIncludeProcessTree = Module["_xmlXIncludeProcessTree"] = createExportWrapper("xmlXIncludeProcessTree");

var _xmlXIncludeProcessNode = Module["_xmlXIncludeProcessNode"] = createExportWrapper("xmlXIncludeProcessNode");

var _xmlFreeCatalog = Module["_xmlFreeCatalog"] = createExportWrapper("xmlFreeCatalog");

var _xmlConvertSGMLCatalog = Module["_xmlConvertSGMLCatalog"] = createExportWrapper("xmlConvertSGMLCatalog");

var _xmlParseCatalogFile = Module["_xmlParseCatalogFile"] = createExportWrapper("xmlParseCatalogFile");

var _xmlLoadSGMLSuperCatalog = Module["_xmlLoadSGMLSuperCatalog"] = createExportWrapper("xmlLoadSGMLSuperCatalog");

var _xmlLoadACatalog = Module["_xmlLoadACatalog"] = createExportWrapper("xmlLoadACatalog");

var _xmlACatalogResolveSystem = Module["_xmlACatalogResolveSystem"] = createExportWrapper("xmlACatalogResolveSystem");

var _xmlACatalogResolvePublic = Module["_xmlACatalogResolvePublic"] = createExportWrapper("xmlACatalogResolvePublic");

var _xmlACatalogResolve = Module["_xmlACatalogResolve"] = createExportWrapper("xmlACatalogResolve");

var _xmlACatalogResolveURI = Module["_xmlACatalogResolveURI"] = createExportWrapper("xmlACatalogResolveURI");

var _xmlACatalogDump = Module["_xmlACatalogDump"] = createExportWrapper("xmlACatalogDump");

var _xmlACatalogAdd = Module["_xmlACatalogAdd"] = createExportWrapper("xmlACatalogAdd");

var _xmlACatalogRemove = Module["_xmlACatalogRemove"] = createExportWrapper("xmlACatalogRemove");

var _xmlNewCatalog = Module["_xmlNewCatalog"] = createExportWrapper("xmlNewCatalog");

var _xmlCatalogIsEmpty = Module["_xmlCatalogIsEmpty"] = createExportWrapper("xmlCatalogIsEmpty");

var _xmlInitializeCatalog = Module["_xmlInitializeCatalog"] = createExportWrapper("xmlInitializeCatalog");

var _xmlLoadCatalog = Module["_xmlLoadCatalog"] = createExportWrapper("xmlLoadCatalog");

var _xmlLoadCatalogs = Module["_xmlLoadCatalogs"] = createExportWrapper("xmlLoadCatalogs");

var _xmlSaveFormatFileTo = Module["_xmlSaveFormatFileTo"] = createExportWrapper("xmlSaveFormatFileTo");

var _xmlNewRMutex = Module["_xmlNewRMutex"] = createExportWrapper("xmlNewRMutex");

var _xmlRMutexLock = Module["_xmlRMutexLock"] = createExportWrapper("xmlRMutexLock");

var _xmlRMutexUnlock = Module["_xmlRMutexUnlock"] = createExportWrapper("xmlRMutexUnlock");

var _xmlFreeRMutex = Module["_xmlFreeRMutex"] = createExportWrapper("xmlFreeRMutex");

var _xmlCatalogResolveSystem = Module["_xmlCatalogResolveSystem"] = createExportWrapper("xmlCatalogResolveSystem");

var _xmlCatalogResolvePublic = Module["_xmlCatalogResolvePublic"] = createExportWrapper("xmlCatalogResolvePublic");

var _xmlCatalogDump = Module["_xmlCatalogDump"] = createExportWrapper("xmlCatalogDump");

var _xmlCatalogAdd = Module["_xmlCatalogAdd"] = createExportWrapper("xmlCatalogAdd");

var _xmlCatalogRemove = Module["_xmlCatalogRemove"] = createExportWrapper("xmlCatalogRemove");

var _xmlCatalogConvert = Module["_xmlCatalogConvert"] = createExportWrapper("xmlCatalogConvert");

var _xmlCatalogSetDefaults = Module["_xmlCatalogSetDefaults"] = createExportWrapper("xmlCatalogSetDefaults");

var _xmlCatalogSetDefaultPrefer = Module["_xmlCatalogSetDefaultPrefer"] = createExportWrapper("xmlCatalogSetDefaultPrefer");

var _xmlCatalogSetDebug = Module["_xmlCatalogSetDebug"] = createExportWrapper("xmlCatalogSetDebug");

var _xmlCatalogGetSystem = Module["_xmlCatalogGetSystem"] = createExportWrapper("xmlCatalogGetSystem");

var _xmlCatalogGetPublic = Module["_xmlCatalogGetPublic"] = createExportWrapper("xmlCatalogGetPublic");

var _xmlGetThreadId = Module["_xmlGetThreadId"] = createExportWrapper("xmlGetThreadId");

var ___xmlGlobalInitMutexDestroy = Module["___xmlGlobalInitMutexDestroy"] = createExportWrapper("__xmlGlobalInitMutexDestroy");

var _xmlInitializeGlobalState = Module["_xmlInitializeGlobalState"] = createExportWrapper("xmlInitializeGlobalState");

var _xmlSAX2ExternalSubset = Module["_xmlSAX2ExternalSubset"] = createExportWrapper("xmlSAX2ExternalSubset");

var _xmlSAX2InternalSubset = Module["_xmlSAX2InternalSubset"] = createExportWrapper("xmlSAX2InternalSubset");

var _xmlSAX2GetParameterEntity = Module["_xmlSAX2GetParameterEntity"] = createExportWrapper("xmlSAX2GetParameterEntity");

var _xmlSAX2ResolveEntity = Module["_xmlSAX2ResolveEntity"] = createExportWrapper("xmlSAX2ResolveEntity");

var _xmlSAX2HasExternalSubset = Module["_xmlSAX2HasExternalSubset"] = createExportWrapper("xmlSAX2HasExternalSubset");

var _xmlSAX2HasInternalSubset = Module["_xmlSAX2HasInternalSubset"] = createExportWrapper("xmlSAX2HasInternalSubset");

var _xmlSAX2IsStandalone = Module["_xmlSAX2IsStandalone"] = createExportWrapper("xmlSAX2IsStandalone");

var _xmlSAX2ElementDecl = Module["_xmlSAX2ElementDecl"] = createExportWrapper("xmlSAX2ElementDecl");

var _xmlSAX2AttributeDecl = Module["_xmlSAX2AttributeDecl"] = createExportWrapper("xmlSAX2AttributeDecl");

var _xmlSAX2CDataBlock = Module["_xmlSAX2CDataBlock"] = createExportWrapper("xmlSAX2CDataBlock");

var _xmlSAX2Characters = Module["_xmlSAX2Characters"] = createExportWrapper("xmlSAX2Characters");

var _xmlSAX2Reference = Module["_xmlSAX2Reference"] = createExportWrapper("xmlSAX2Reference");

var _xmlSAX2EndDocument = Module["_xmlSAX2EndDocument"] = createExportWrapper("xmlSAX2EndDocument");

var _xmlSAX2StartDocument = Module["_xmlSAX2StartDocument"] = createExportWrapper("xmlSAX2StartDocument");

var _xmlSAX2SetDocumentLocator = Module["_xmlSAX2SetDocumentLocator"] = createExportWrapper("xmlSAX2SetDocumentLocator");

var _xmlSAX2UnparsedEntityDecl = Module["_xmlSAX2UnparsedEntityDecl"] = createExportWrapper("xmlSAX2UnparsedEntityDecl");

var _xmlSAX2NotationDecl = Module["_xmlSAX2NotationDecl"] = createExportWrapper("xmlSAX2NotationDecl");

var _xmlSAX2ProcessingInstruction = Module["_xmlSAX2ProcessingInstruction"] = createExportWrapper("xmlSAX2ProcessingInstruction");

var _xmlSAX2Comment = Module["_xmlSAX2Comment"] = createExportWrapper("xmlSAX2Comment");

var _xmlSAX2GetColumnNumber = Module["_xmlSAX2GetColumnNumber"] = createExportWrapper("xmlSAX2GetColumnNumber");

var _xmlSAX2GetLineNumber = Module["_xmlSAX2GetLineNumber"] = createExportWrapper("xmlSAX2GetLineNumber");

var _xmlSAX2GetSystemId = Module["_xmlSAX2GetSystemId"] = createExportWrapper("xmlSAX2GetSystemId");

var _xmlSAX2GetPublicId = Module["_xmlSAX2GetPublicId"] = createExportWrapper("xmlSAX2GetPublicId");

var _xmlThrDefSetGenericErrorFunc = Module["_xmlThrDefSetGenericErrorFunc"] = createExportWrapper("xmlThrDefSetGenericErrorFunc");

var _xmlThrDefSetStructuredErrorFunc = Module["_xmlThrDefSetStructuredErrorFunc"] = createExportWrapper("xmlThrDefSetStructuredErrorFunc");

var _xmlRegisterNodeDefault = Module["_xmlRegisterNodeDefault"] = createExportWrapper("xmlRegisterNodeDefault");

var _xmlThrDefRegisterNodeDefault = Module["_xmlThrDefRegisterNodeDefault"] = createExportWrapper("xmlThrDefRegisterNodeDefault");

var _xmlDeregisterNodeDefault = Module["_xmlDeregisterNodeDefault"] = createExportWrapper("xmlDeregisterNodeDefault");

var _xmlThrDefDeregisterNodeDefault = Module["_xmlThrDefDeregisterNodeDefault"] = createExportWrapper("xmlThrDefDeregisterNodeDefault");

var _xmlThrDefParserInputBufferCreateFilenameDefault = Module["_xmlThrDefParserInputBufferCreateFilenameDefault"] = createExportWrapper("xmlThrDefParserInputBufferCreateFilenameDefault");

var _xmlThrDefOutputBufferCreateFilenameDefault = Module["_xmlThrDefOutputBufferCreateFilenameDefault"] = createExportWrapper("xmlThrDefOutputBufferCreateFilenameDefault");

var ___docbDefaultSAXHandler = Module["___docbDefaultSAXHandler"] = createExportWrapper("__docbDefaultSAXHandler");

var ___htmlDefaultSAXHandler = Module["___htmlDefaultSAXHandler"] = createExportWrapper("__htmlDefaultSAXHandler");

var ___xmlLastError = Module["___xmlLastError"] = createExportWrapper("__xmlLastError");

var ___oldXMLWDcompatibility = Module["___oldXMLWDcompatibility"] = createExportWrapper("__oldXMLWDcompatibility");

var ___xmlBufferAllocScheme = Module["___xmlBufferAllocScheme"] = createExportWrapper("__xmlBufferAllocScheme");

var _xmlThrDefBufferAllocScheme = Module["_xmlThrDefBufferAllocScheme"] = createExportWrapper("xmlThrDefBufferAllocScheme");

var ___xmlDefaultBufferSize = Module["___xmlDefaultBufferSize"] = createExportWrapper("__xmlDefaultBufferSize");

var _xmlThrDefDefaultBufferSize = Module["_xmlThrDefDefaultBufferSize"] = createExportWrapper("xmlThrDefDefaultBufferSize");

var ___xmlDefaultSAXHandler = Module["___xmlDefaultSAXHandler"] = createExportWrapper("__xmlDefaultSAXHandler");

var ___xmlDefaultSAXLocator = Module["___xmlDefaultSAXLocator"] = createExportWrapper("__xmlDefaultSAXLocator");

var ___xmlDoValidityCheckingDefaultValue = Module["___xmlDoValidityCheckingDefaultValue"] = createExportWrapper("__xmlDoValidityCheckingDefaultValue");

var _xmlThrDefDoValidityCheckingDefaultValue = Module["_xmlThrDefDoValidityCheckingDefaultValue"] = createExportWrapper("xmlThrDefDoValidityCheckingDefaultValue");

var ___xmlGenericError = Module["___xmlGenericError"] = createExportWrapper("__xmlGenericError");

var ___xmlStructuredError = Module["___xmlStructuredError"] = createExportWrapper("__xmlStructuredError");

var ___xmlGenericErrorContext = Module["___xmlGenericErrorContext"] = createExportWrapper("__xmlGenericErrorContext");

var ___xmlStructuredErrorContext = Module["___xmlStructuredErrorContext"] = createExportWrapper("__xmlStructuredErrorContext");

var ___xmlGetWarningsDefaultValue = Module["___xmlGetWarningsDefaultValue"] = createExportWrapper("__xmlGetWarningsDefaultValue");

var _xmlThrDefGetWarningsDefaultValue = Module["_xmlThrDefGetWarningsDefaultValue"] = createExportWrapper("xmlThrDefGetWarningsDefaultValue");

var ___xmlIndentTreeOutput = Module["___xmlIndentTreeOutput"] = createExportWrapper("__xmlIndentTreeOutput");

var _xmlThrDefIndentTreeOutput = Module["_xmlThrDefIndentTreeOutput"] = createExportWrapper("xmlThrDefIndentTreeOutput");

var ___xmlTreeIndentString = Module["___xmlTreeIndentString"] = createExportWrapper("__xmlTreeIndentString");

var _xmlThrDefTreeIndentString = Module["_xmlThrDefTreeIndentString"] = createExportWrapper("xmlThrDefTreeIndentString");

var ___xmlKeepBlanksDefaultValue = Module["___xmlKeepBlanksDefaultValue"] = createExportWrapper("__xmlKeepBlanksDefaultValue");

var _xmlThrDefKeepBlanksDefaultValue = Module["_xmlThrDefKeepBlanksDefaultValue"] = createExportWrapper("xmlThrDefKeepBlanksDefaultValue");

var ___xmlLineNumbersDefaultValue = Module["___xmlLineNumbersDefaultValue"] = createExportWrapper("__xmlLineNumbersDefaultValue");

var _xmlThrDefLineNumbersDefaultValue = Module["_xmlThrDefLineNumbersDefaultValue"] = createExportWrapper("xmlThrDefLineNumbersDefaultValue");

var ___xmlLoadExtDtdDefaultValue = Module["___xmlLoadExtDtdDefaultValue"] = createExportWrapper("__xmlLoadExtDtdDefaultValue");

var _xmlThrDefLoadExtDtdDefaultValue = Module["_xmlThrDefLoadExtDtdDefaultValue"] = createExportWrapper("xmlThrDefLoadExtDtdDefaultValue");

var ___xmlParserDebugEntities = Module["___xmlParserDebugEntities"] = createExportWrapper("__xmlParserDebugEntities");

var _xmlThrDefParserDebugEntities = Module["_xmlThrDefParserDebugEntities"] = createExportWrapper("xmlThrDefParserDebugEntities");

var ___xmlParserVersion = Module["___xmlParserVersion"] = createExportWrapper("__xmlParserVersion");

var ___xmlPedanticParserDefaultValue = Module["___xmlPedanticParserDefaultValue"] = createExportWrapper("__xmlPedanticParserDefaultValue");

var _xmlThrDefPedanticParserDefaultValue = Module["_xmlThrDefPedanticParserDefaultValue"] = createExportWrapper("xmlThrDefPedanticParserDefaultValue");

var ___xmlSaveNoEmptyTags = Module["___xmlSaveNoEmptyTags"] = createExportWrapper("__xmlSaveNoEmptyTags");

var _xmlThrDefSaveNoEmptyTags = Module["_xmlThrDefSaveNoEmptyTags"] = createExportWrapper("xmlThrDefSaveNoEmptyTags");

var ___xmlSubstituteEntitiesDefaultValue = Module["___xmlSubstituteEntitiesDefaultValue"] = createExportWrapper("__xmlSubstituteEntitiesDefaultValue");

var _xmlThrDefSubstituteEntitiesDefaultValue = Module["_xmlThrDefSubstituteEntitiesDefaultValue"] = createExportWrapper("xmlThrDefSubstituteEntitiesDefaultValue");

var ___xmlRegisterNodeDefaultValue = Module["___xmlRegisterNodeDefaultValue"] = createExportWrapper("__xmlRegisterNodeDefaultValue");

var ___xmlDeregisterNodeDefaultValue = Module["___xmlDeregisterNodeDefaultValue"] = createExportWrapper("__xmlDeregisterNodeDefaultValue");

var ___xmlParserInputBufferCreateFilenameValue = Module["___xmlParserInputBufferCreateFilenameValue"] = createExportWrapper("__xmlParserInputBufferCreateFilenameValue");

var ___xmlOutputBufferCreateFilenameValue = Module["___xmlOutputBufferCreateFilenameValue"] = createExportWrapper("__xmlOutputBufferCreateFilenameValue");

var ___xmlGlobalInitMutexLock = Module["___xmlGlobalInitMutexLock"] = createExportWrapper("__xmlGlobalInitMutexLock");

var ___xmlGlobalInitMutexUnlock = Module["___xmlGlobalInitMutexUnlock"] = createExportWrapper("__xmlGlobalInitMutexUnlock");

var _xmlGetGlobalState = Module["_xmlGetGlobalState"] = createExportWrapper("xmlGetGlobalState");

var _xmlIsMainThread = Module["_xmlIsMainThread"] = createExportWrapper("xmlIsMainThread");

var _xmlLockLibrary = Module["_xmlLockLibrary"] = createExportWrapper("xmlLockLibrary");

var _xmlUnlockLibrary = Module["_xmlUnlockLibrary"] = createExportWrapper("xmlUnlockLibrary");

var _xmlC14NExecute = Module["_xmlC14NExecute"] = createExportWrapper("xmlC14NExecute");

var _xmlC14NDocDumpMemory = Module["_xmlC14NDocDumpMemory"] = createExportWrapper("xmlC14NDocDumpMemory");

var _xmlC14NDocSave = Module["_xmlC14NDocSave"] = createExportWrapper("xmlC14NDocSave");

var _xmlStrsub = Module["_xmlStrsub"] = createExportWrapper("xmlStrsub");

var _xmlStrVPrintf = Module["_xmlStrVPrintf"] = createExportWrapper("xmlStrVPrintf");

var _xmlUTF8Size = Module["_xmlUTF8Size"] = createExportWrapper("xmlUTF8Size");

var _xmlUTF8Charcmp = Module["_xmlUTF8Charcmp"] = createExportWrapper("xmlUTF8Charcmp");

var _xmlEscapeFormatString = Module["_xmlEscapeFormatString"] = createExportWrapper("xmlEscapeFormatString");

var _xmlBufEmpty = Module["_xmlBufEmpty"] = createExportWrapper("xmlBufEmpty");

var _xmlBufInflate = Module["_xmlBufInflate"] = createExportWrapper("xmlBufInflate");

var _xmlBufDump = Module["_xmlBufDump"] = createExportWrapper("xmlBufDump");

var _xmlBufErase = Module["_xmlBufErase"] = createExportWrapper("xmlBufErase");

var _xmlBufResize = Module["_xmlBufResize"] = createExportWrapper("xmlBufResize");

var _xmlBufAddHead = Module["_xmlBufAddHead"] = createExportWrapper("xmlBufAddHead");

var _xmlBufWriteCHAR = Module["_xmlBufWriteCHAR"] = createExportWrapper("xmlBufWriteCHAR");

var _xmlBufWriteChar = Module["_xmlBufWriteChar"] = createExportWrapper("xmlBufWriteChar");

var _xmlBufMergeBuffer = Module["_xmlBufMergeBuffer"] = createExportWrapper("xmlBufMergeBuffer");

var _xmlRegExecPushString2 = Module["_xmlRegExecPushString2"] = createExportWrapper("xmlRegExecPushString2");

var _xmlRegExecNextValues = Module["_xmlRegExecNextValues"] = createExportWrapper("xmlRegExecNextValues");

var _xmlRegExecErrInfo = Module["_xmlRegExecErrInfo"] = createExportWrapper("xmlRegExecErrInfo");

var _xmlRegexpPrint = Module["_xmlRegexpPrint"] = createExportWrapper("xmlRegexpPrint");

var _xmlRegexpCompile = Module["_xmlRegexpCompile"] = createExportWrapper("xmlRegexpCompile");

var _xmlRegexpExec = Module["_xmlRegexpExec"] = createExportWrapper("xmlRegexpExec");

var _xmlAutomataSetFlags = Module["_xmlAutomataSetFlags"] = createExportWrapper("xmlAutomataSetFlags");

var _xmlAutomataNewTransition2 = Module["_xmlAutomataNewTransition2"] = createExportWrapper("xmlAutomataNewTransition2");

var _xmlAutomataNewNegTrans = Module["_xmlAutomataNewNegTrans"] = createExportWrapper("xmlAutomataNewNegTrans");

var _xmlAutomataNewCountTrans2 = Module["_xmlAutomataNewCountTrans2"] = createExportWrapper("xmlAutomataNewCountTrans2");

var _xmlAutomataNewCountTrans = Module["_xmlAutomataNewCountTrans"] = createExportWrapper("xmlAutomataNewCountTrans");

var _xmlAutomataNewOnceTrans2 = Module["_xmlAutomataNewOnceTrans2"] = createExportWrapper("xmlAutomataNewOnceTrans2");

var _xmlAutomataNewOnceTrans = Module["_xmlAutomataNewOnceTrans"] = createExportWrapper("xmlAutomataNewOnceTrans");

var _xmlAutomataNewAllTrans = Module["_xmlAutomataNewAllTrans"] = createExportWrapper("xmlAutomataNewAllTrans");

var _xmlAutomataNewCounter = Module["_xmlAutomataNewCounter"] = createExportWrapper("xmlAutomataNewCounter");

var _xmlAutomataNewCountedTrans = Module["_xmlAutomataNewCountedTrans"] = createExportWrapper("xmlAutomataNewCountedTrans");

var _xmlAutomataNewCounterTrans = Module["_xmlAutomataNewCounterTrans"] = createExportWrapper("xmlAutomataNewCounterTrans");

var _xmlAutomataIsDeterminist = Module["_xmlAutomataIsDeterminist"] = createExportWrapper("xmlAutomataIsDeterminist");

var _puts = Module["_puts"] = createExportWrapper("puts");

var _xmlUCSIsCatNd = Module["_xmlUCSIsCatNd"] = createExportWrapper("xmlUCSIsCatNd");

var _xmlUCSIsCatP = Module["_xmlUCSIsCatP"] = createExportWrapper("xmlUCSIsCatP");

var _xmlUCSIsCatZ = Module["_xmlUCSIsCatZ"] = createExportWrapper("xmlUCSIsCatZ");

var _xmlUCSIsCatC = Module["_xmlUCSIsCatC"] = createExportWrapper("xmlUCSIsCatC");

var _xmlUCSIsCatL = Module["_xmlUCSIsCatL"] = createExportWrapper("xmlUCSIsCatL");

var _xmlUCSIsCatLu = Module["_xmlUCSIsCatLu"] = createExportWrapper("xmlUCSIsCatLu");

var _xmlUCSIsCatLl = Module["_xmlUCSIsCatLl"] = createExportWrapper("xmlUCSIsCatLl");

var _xmlUCSIsCatLt = Module["_xmlUCSIsCatLt"] = createExportWrapper("xmlUCSIsCatLt");

var _xmlUCSIsCatLm = Module["_xmlUCSIsCatLm"] = createExportWrapper("xmlUCSIsCatLm");

var _xmlUCSIsCatLo = Module["_xmlUCSIsCatLo"] = createExportWrapper("xmlUCSIsCatLo");

var _xmlUCSIsCatM = Module["_xmlUCSIsCatM"] = createExportWrapper("xmlUCSIsCatM");

var _xmlUCSIsCatMn = Module["_xmlUCSIsCatMn"] = createExportWrapper("xmlUCSIsCatMn");

var _xmlUCSIsCatMc = Module["_xmlUCSIsCatMc"] = createExportWrapper("xmlUCSIsCatMc");

var _xmlUCSIsCatMe = Module["_xmlUCSIsCatMe"] = createExportWrapper("xmlUCSIsCatMe");

var _xmlUCSIsCatN = Module["_xmlUCSIsCatN"] = createExportWrapper("xmlUCSIsCatN");

var _xmlUCSIsCatNl = Module["_xmlUCSIsCatNl"] = createExportWrapper("xmlUCSIsCatNl");

var _xmlUCSIsCatNo = Module["_xmlUCSIsCatNo"] = createExportWrapper("xmlUCSIsCatNo");

var _xmlUCSIsCatPc = Module["_xmlUCSIsCatPc"] = createExportWrapper("xmlUCSIsCatPc");

var _xmlUCSIsCatPd = Module["_xmlUCSIsCatPd"] = createExportWrapper("xmlUCSIsCatPd");

var _xmlUCSIsCatPs = Module["_xmlUCSIsCatPs"] = createExportWrapper("xmlUCSIsCatPs");

var _xmlUCSIsCatPe = Module["_xmlUCSIsCatPe"] = createExportWrapper("xmlUCSIsCatPe");

var _xmlUCSIsCatPi = Module["_xmlUCSIsCatPi"] = createExportWrapper("xmlUCSIsCatPi");

var _xmlUCSIsCatPf = Module["_xmlUCSIsCatPf"] = createExportWrapper("xmlUCSIsCatPf");

var _xmlUCSIsCatPo = Module["_xmlUCSIsCatPo"] = createExportWrapper("xmlUCSIsCatPo");

var _xmlUCSIsCatZs = Module["_xmlUCSIsCatZs"] = createExportWrapper("xmlUCSIsCatZs");

var _xmlUCSIsCatZl = Module["_xmlUCSIsCatZl"] = createExportWrapper("xmlUCSIsCatZl");

var _xmlUCSIsCatZp = Module["_xmlUCSIsCatZp"] = createExportWrapper("xmlUCSIsCatZp");

var _xmlUCSIsCatS = Module["_xmlUCSIsCatS"] = createExportWrapper("xmlUCSIsCatS");

var _xmlUCSIsCatSm = Module["_xmlUCSIsCatSm"] = createExportWrapper("xmlUCSIsCatSm");

var _xmlUCSIsCatSc = Module["_xmlUCSIsCatSc"] = createExportWrapper("xmlUCSIsCatSc");

var _xmlUCSIsCatSk = Module["_xmlUCSIsCatSk"] = createExportWrapper("xmlUCSIsCatSk");

var _xmlUCSIsCatSo = Module["_xmlUCSIsCatSo"] = createExportWrapper("xmlUCSIsCatSo");

var _xmlUCSIsCatCc = Module["_xmlUCSIsCatCc"] = createExportWrapper("xmlUCSIsCatCc");

var _xmlUCSIsCatCf = Module["_xmlUCSIsCatCf"] = createExportWrapper("xmlUCSIsCatCf");

var _xmlUCSIsCatCo = Module["_xmlUCSIsCatCo"] = createExportWrapper("xmlUCSIsCatCo");

var _xmlUCSIsBlock = Module["_xmlUCSIsBlock"] = createExportWrapper("xmlUCSIsBlock");

var _xmlSchemaNewFacet = Module["_xmlSchemaNewFacet"] = createExportWrapper("xmlSchemaNewFacet");

var _xmlSchemaFreeWildcard = Module["_xmlSchemaFreeWildcard"] = createExportWrapper("xmlSchemaFreeWildcard");

var _xmlSchemaFreeFacet = Module["_xmlSchemaFreeFacet"] = createExportWrapper("xmlSchemaFreeFacet");

var _xmlSchemaFreeType = Module["_xmlSchemaFreeType"] = createExportWrapper("xmlSchemaFreeType");

var _xmlSchemaFreeValue = Module["_xmlSchemaFreeValue"] = createExportWrapper("xmlSchemaFreeValue");

var _xmlSchemaDump = Module["_xmlSchemaDump"] = createExportWrapper("xmlSchemaDump");

var _xmlSchemaNewDocParserCtxt = Module["_xmlSchemaNewDocParserCtxt"] = createExportWrapper("xmlSchemaNewDocParserCtxt");

var _xmlSchemaCheckFacet = Module["_xmlSchemaCheckFacet"] = createExportWrapper("xmlSchemaCheckFacet");

var _xmlSchemaGetBuiltInType = Module["_xmlSchemaGetBuiltInType"] = createExportWrapper("xmlSchemaGetBuiltInType");

var _xmlSchemaValidatePredefinedType = Module["_xmlSchemaValidatePredefinedType"] = createExportWrapper("xmlSchemaValidatePredefinedType");

var _xmlSchemaCollapseString = Module["_xmlSchemaCollapseString"] = createExportWrapper("xmlSchemaCollapseString");

var _xmlSchemaWhiteSpaceReplace = Module["_xmlSchemaWhiteSpaceReplace"] = createExportWrapper("xmlSchemaWhiteSpaceReplace");

var _xmlSchemaNewQNameValue = Module["_xmlSchemaNewQNameValue"] = createExportWrapper("xmlSchemaNewQNameValue");

var _xmlSchemaValPredefTypeNodeNoNorm = Module["_xmlSchemaValPredefTypeNodeNoNorm"] = createExportWrapper("xmlSchemaValPredefTypeNodeNoNorm");

var _xmlSchemaValueAppend = Module["_xmlSchemaValueAppend"] = createExportWrapper("xmlSchemaValueAppend");

var _xmlSchemaInitTypes = Module["_xmlSchemaInitTypes"] = createExportWrapper("xmlSchemaInitTypes");

var _xmlSchemaSetParserStructuredErrors = Module["_xmlSchemaSetParserStructuredErrors"] = createExportWrapper("xmlSchemaSetParserStructuredErrors");

var _xmlSchemaSetValidStructuredErrors = Module["_xmlSchemaSetValidStructuredErrors"] = createExportWrapper("xmlSchemaSetValidStructuredErrors");

var _xmlSchemaGetParserErrors = Module["_xmlSchemaGetParserErrors"] = createExportWrapper("xmlSchemaGetParserErrors");

var _xmlSchemaValidateSetFilename = Module["_xmlSchemaValidateSetFilename"] = createExportWrapper("xmlSchemaValidateSetFilename");

var _xmlSchemaIsValid = Module["_xmlSchemaIsValid"] = createExportWrapper("xmlSchemaIsValid");

var _xmlSchemaGetValidErrors = Module["_xmlSchemaGetValidErrors"] = createExportWrapper("xmlSchemaGetValidErrors");

var _xmlSchemaValidCtxtGetOptions = Module["_xmlSchemaValidCtxtGetOptions"] = createExportWrapper("xmlSchemaValidCtxtGetOptions");

var _xmlSchemaValidateOneElement = Module["_xmlSchemaValidateOneElement"] = createExportWrapper("xmlSchemaValidateOneElement");

var _xmlSchemaSAXPlug = Module["_xmlSchemaSAXPlug"] = createExportWrapper("xmlSchemaSAXPlug");

var _xmlSchemaSAXUnplug = Module["_xmlSchemaSAXUnplug"] = createExportWrapper("xmlSchemaSAXUnplug");

var _xmlSchemaValidateSetLocator = Module["_xmlSchemaValidateSetLocator"] = createExportWrapper("xmlSchemaValidateSetLocator");

var _xmlSchemaValidateStream = Module["_xmlSchemaValidateStream"] = createExportWrapper("xmlSchemaValidateStream");

var _xmlSchemaValidateFile = Module["_xmlSchemaValidateFile"] = createExportWrapper("xmlSchemaValidateFile");

var _xmlSchemaValidCtxtGetParserCtxt = Module["_xmlSchemaValidCtxtGetParserCtxt"] = createExportWrapper("xmlSchemaValidCtxtGetParserCtxt");

var _xmlSchemaValPredefTypeNode = Module["_xmlSchemaValPredefTypeNode"] = createExportWrapper("xmlSchemaValPredefTypeNode");

var _xmlSchemaGetPredefinedType = Module["_xmlSchemaGetPredefinedType"] = createExportWrapper("xmlSchemaGetPredefinedType");

var _xmlSchemaIsBuiltInTypeFacet = Module["_xmlSchemaIsBuiltInTypeFacet"] = createExportWrapper("xmlSchemaIsBuiltInTypeFacet");

var _xmlSchemaCompareValues = Module["_xmlSchemaCompareValues"] = createExportWrapper("xmlSchemaCompareValues");

var _xmlSchemaGetValType = Module["_xmlSchemaGetValType"] = createExportWrapper("xmlSchemaGetValType");

var _xmlSchemaValueGetAsString = Module["_xmlSchemaValueGetAsString"] = createExportWrapper("xmlSchemaValueGetAsString");

var _xmlSchemaCompareValuesWhtsp = Module["_xmlSchemaCompareValuesWhtsp"] = createExportWrapper("xmlSchemaCompareValuesWhtsp");

var _xmlSchemaValueGetNext = Module["_xmlSchemaValueGetNext"] = createExportWrapper("xmlSchemaValueGetNext");

var _xmlSchemaNewNOTATIONValue = Module["_xmlSchemaNewNOTATIONValue"] = createExportWrapper("xmlSchemaNewNOTATIONValue");

var _xmlSchemaValidateLengthFacetWhtsp = Module["_xmlSchemaValidateLengthFacetWhtsp"] = createExportWrapper("xmlSchemaValidateLengthFacetWhtsp");

var _xmlSchemaValidateFacetWhtsp = Module["_xmlSchemaValidateFacetWhtsp"] = createExportWrapper("xmlSchemaValidateFacetWhtsp");

var _xmlSchemaValidateListSimpleTypeFacet = Module["_xmlSchemaValidateListSimpleTypeFacet"] = createExportWrapper("xmlSchemaValidateListSimpleTypeFacet");

var _xmlTextReaderLookupNamespace = Module["_xmlTextReaderLookupNamespace"] = createExportWrapper("xmlTextReaderLookupNamespace");

var _xmlSchemaGetFacetValueAsULong = Module["_xmlSchemaGetFacetValueAsULong"] = createExportWrapper("xmlSchemaGetFacetValueAsULong");

var _xmlSchemaGetCanonValue = Module["_xmlSchemaGetCanonValue"] = createExportWrapper("xmlSchemaGetCanonValue");

var _xmlSchemaValueGetAsBoolean = Module["_xmlSchemaValueGetAsBoolean"] = createExportWrapper("xmlSchemaValueGetAsBoolean");

var _xmlStreamPushAttr = Module["_xmlStreamPushAttr"] = createExportWrapper("xmlStreamPushAttr");

var _xmlSchemaCopyValue = Module["_xmlSchemaCopyValue"] = createExportWrapper("xmlSchemaCopyValue");

var _xmlSchemaNewStringValue = Module["_xmlSchemaNewStringValue"] = createExportWrapper("xmlSchemaNewStringValue");

var _xmlSchemaGetBuiltInListSimpleTypeItemType = Module["_xmlSchemaGetBuiltInListSimpleTypeItemType"] = createExportWrapper("xmlSchemaGetBuiltInListSimpleTypeItemType");

var _xmlSchemaValidateFacet = Module["_xmlSchemaValidateFacet"] = createExportWrapper("xmlSchemaValidateFacet");

var _xmlSchemaValidateLengthFacet = Module["_xmlSchemaValidateLengthFacet"] = createExportWrapper("xmlSchemaValidateLengthFacet");

var _xmlSchemaGetCanonValueWhtsp = Module["_xmlSchemaGetCanonValueWhtsp"] = createExportWrapper("xmlSchemaGetCanonValueWhtsp");

var _xmlUCSIsAegeanNumbers = Module["_xmlUCSIsAegeanNumbers"] = createExportWrapper("xmlUCSIsAegeanNumbers");

var _xmlUCSIsAlphabeticPresentationForms = Module["_xmlUCSIsAlphabeticPresentationForms"] = createExportWrapper("xmlUCSIsAlphabeticPresentationForms");

var _xmlUCSIsArabic = Module["_xmlUCSIsArabic"] = createExportWrapper("xmlUCSIsArabic");

var _xmlUCSIsArabicPresentationFormsA = Module["_xmlUCSIsArabicPresentationFormsA"] = createExportWrapper("xmlUCSIsArabicPresentationFormsA");

var _xmlUCSIsArabicPresentationFormsB = Module["_xmlUCSIsArabicPresentationFormsB"] = createExportWrapper("xmlUCSIsArabicPresentationFormsB");

var _xmlUCSIsArmenian = Module["_xmlUCSIsArmenian"] = createExportWrapper("xmlUCSIsArmenian");

var _xmlUCSIsArrows = Module["_xmlUCSIsArrows"] = createExportWrapper("xmlUCSIsArrows");

var _xmlUCSIsBasicLatin = Module["_xmlUCSIsBasicLatin"] = createExportWrapper("xmlUCSIsBasicLatin");

var _xmlUCSIsBengali = Module["_xmlUCSIsBengali"] = createExportWrapper("xmlUCSIsBengali");

var _xmlUCSIsBlockElements = Module["_xmlUCSIsBlockElements"] = createExportWrapper("xmlUCSIsBlockElements");

var _xmlUCSIsBopomofo = Module["_xmlUCSIsBopomofo"] = createExportWrapper("xmlUCSIsBopomofo");

var _xmlUCSIsBopomofoExtended = Module["_xmlUCSIsBopomofoExtended"] = createExportWrapper("xmlUCSIsBopomofoExtended");

var _xmlUCSIsBoxDrawing = Module["_xmlUCSIsBoxDrawing"] = createExportWrapper("xmlUCSIsBoxDrawing");

var _xmlUCSIsBraillePatterns = Module["_xmlUCSIsBraillePatterns"] = createExportWrapper("xmlUCSIsBraillePatterns");

var _xmlUCSIsBuhid = Module["_xmlUCSIsBuhid"] = createExportWrapper("xmlUCSIsBuhid");

var _xmlUCSIsByzantineMusicalSymbols = Module["_xmlUCSIsByzantineMusicalSymbols"] = createExportWrapper("xmlUCSIsByzantineMusicalSymbols");

var _xmlUCSIsCJKCompatibility = Module["_xmlUCSIsCJKCompatibility"] = createExportWrapper("xmlUCSIsCJKCompatibility");

var _xmlUCSIsCJKCompatibilityForms = Module["_xmlUCSIsCJKCompatibilityForms"] = createExportWrapper("xmlUCSIsCJKCompatibilityForms");

var _xmlUCSIsCJKCompatibilityIdeographs = Module["_xmlUCSIsCJKCompatibilityIdeographs"] = createExportWrapper("xmlUCSIsCJKCompatibilityIdeographs");

var _xmlUCSIsCJKCompatibilityIdeographsSupplement = Module["_xmlUCSIsCJKCompatibilityIdeographsSupplement"] = createExportWrapper("xmlUCSIsCJKCompatibilityIdeographsSupplement");

var _xmlUCSIsCJKRadicalsSupplement = Module["_xmlUCSIsCJKRadicalsSupplement"] = createExportWrapper("xmlUCSIsCJKRadicalsSupplement");

var _xmlUCSIsCJKSymbolsandPunctuation = Module["_xmlUCSIsCJKSymbolsandPunctuation"] = createExportWrapper("xmlUCSIsCJKSymbolsandPunctuation");

var _xmlUCSIsCJKUnifiedIdeographs = Module["_xmlUCSIsCJKUnifiedIdeographs"] = createExportWrapper("xmlUCSIsCJKUnifiedIdeographs");

var _xmlUCSIsCJKUnifiedIdeographsExtensionA = Module["_xmlUCSIsCJKUnifiedIdeographsExtensionA"] = createExportWrapper("xmlUCSIsCJKUnifiedIdeographsExtensionA");

var _xmlUCSIsCJKUnifiedIdeographsExtensionB = Module["_xmlUCSIsCJKUnifiedIdeographsExtensionB"] = createExportWrapper("xmlUCSIsCJKUnifiedIdeographsExtensionB");

var _xmlUCSIsCherokee = Module["_xmlUCSIsCherokee"] = createExportWrapper("xmlUCSIsCherokee");

var _xmlUCSIsCombiningDiacriticalMarks = Module["_xmlUCSIsCombiningDiacriticalMarks"] = createExportWrapper("xmlUCSIsCombiningDiacriticalMarks");

var _xmlUCSIsCombiningDiacriticalMarksforSymbols = Module["_xmlUCSIsCombiningDiacriticalMarksforSymbols"] = createExportWrapper("xmlUCSIsCombiningDiacriticalMarksforSymbols");

var _xmlUCSIsCombiningHalfMarks = Module["_xmlUCSIsCombiningHalfMarks"] = createExportWrapper("xmlUCSIsCombiningHalfMarks");

var _xmlUCSIsCombiningMarksforSymbols = Module["_xmlUCSIsCombiningMarksforSymbols"] = createExportWrapper("xmlUCSIsCombiningMarksforSymbols");

var _xmlUCSIsControlPictures = Module["_xmlUCSIsControlPictures"] = createExportWrapper("xmlUCSIsControlPictures");

var _xmlUCSIsCurrencySymbols = Module["_xmlUCSIsCurrencySymbols"] = createExportWrapper("xmlUCSIsCurrencySymbols");

var _xmlUCSIsCypriotSyllabary = Module["_xmlUCSIsCypriotSyllabary"] = createExportWrapper("xmlUCSIsCypriotSyllabary");

var _xmlUCSIsCyrillic = Module["_xmlUCSIsCyrillic"] = createExportWrapper("xmlUCSIsCyrillic");

var _xmlUCSIsCyrillicSupplement = Module["_xmlUCSIsCyrillicSupplement"] = createExportWrapper("xmlUCSIsCyrillicSupplement");

var _xmlUCSIsDeseret = Module["_xmlUCSIsDeseret"] = createExportWrapper("xmlUCSIsDeseret");

var _xmlUCSIsDevanagari = Module["_xmlUCSIsDevanagari"] = createExportWrapper("xmlUCSIsDevanagari");

var _xmlUCSIsDingbats = Module["_xmlUCSIsDingbats"] = createExportWrapper("xmlUCSIsDingbats");

var _xmlUCSIsEnclosedAlphanumerics = Module["_xmlUCSIsEnclosedAlphanumerics"] = createExportWrapper("xmlUCSIsEnclosedAlphanumerics");

var _xmlUCSIsEnclosedCJKLettersandMonths = Module["_xmlUCSIsEnclosedCJKLettersandMonths"] = createExportWrapper("xmlUCSIsEnclosedCJKLettersandMonths");

var _xmlUCSIsEthiopic = Module["_xmlUCSIsEthiopic"] = createExportWrapper("xmlUCSIsEthiopic");

var _xmlUCSIsGeneralPunctuation = Module["_xmlUCSIsGeneralPunctuation"] = createExportWrapper("xmlUCSIsGeneralPunctuation");

var _xmlUCSIsGeometricShapes = Module["_xmlUCSIsGeometricShapes"] = createExportWrapper("xmlUCSIsGeometricShapes");

var _xmlUCSIsGeorgian = Module["_xmlUCSIsGeorgian"] = createExportWrapper("xmlUCSIsGeorgian");

var _xmlUCSIsGothic = Module["_xmlUCSIsGothic"] = createExportWrapper("xmlUCSIsGothic");

var _xmlUCSIsGreek = Module["_xmlUCSIsGreek"] = createExportWrapper("xmlUCSIsGreek");

var _xmlUCSIsGreekExtended = Module["_xmlUCSIsGreekExtended"] = createExportWrapper("xmlUCSIsGreekExtended");

var _xmlUCSIsGreekandCoptic = Module["_xmlUCSIsGreekandCoptic"] = createExportWrapper("xmlUCSIsGreekandCoptic");

var _xmlUCSIsGujarati = Module["_xmlUCSIsGujarati"] = createExportWrapper("xmlUCSIsGujarati");

var _xmlUCSIsGurmukhi = Module["_xmlUCSIsGurmukhi"] = createExportWrapper("xmlUCSIsGurmukhi");

var _xmlUCSIsHalfwidthandFullwidthForms = Module["_xmlUCSIsHalfwidthandFullwidthForms"] = createExportWrapper("xmlUCSIsHalfwidthandFullwidthForms");

var _xmlUCSIsHangulCompatibilityJamo = Module["_xmlUCSIsHangulCompatibilityJamo"] = createExportWrapper("xmlUCSIsHangulCompatibilityJamo");

var _xmlUCSIsHangulJamo = Module["_xmlUCSIsHangulJamo"] = createExportWrapper("xmlUCSIsHangulJamo");

var _xmlUCSIsHangulSyllables = Module["_xmlUCSIsHangulSyllables"] = createExportWrapper("xmlUCSIsHangulSyllables");

var _xmlUCSIsHanunoo = Module["_xmlUCSIsHanunoo"] = createExportWrapper("xmlUCSIsHanunoo");

var _xmlUCSIsHebrew = Module["_xmlUCSIsHebrew"] = createExportWrapper("xmlUCSIsHebrew");

var _xmlUCSIsHighPrivateUseSurrogates = Module["_xmlUCSIsHighPrivateUseSurrogates"] = createExportWrapper("xmlUCSIsHighPrivateUseSurrogates");

var _xmlUCSIsHighSurrogates = Module["_xmlUCSIsHighSurrogates"] = createExportWrapper("xmlUCSIsHighSurrogates");

var _xmlUCSIsHiragana = Module["_xmlUCSIsHiragana"] = createExportWrapper("xmlUCSIsHiragana");

var _xmlUCSIsIPAExtensions = Module["_xmlUCSIsIPAExtensions"] = createExportWrapper("xmlUCSIsIPAExtensions");

var _xmlUCSIsIdeographicDescriptionCharacters = Module["_xmlUCSIsIdeographicDescriptionCharacters"] = createExportWrapper("xmlUCSIsIdeographicDescriptionCharacters");

var _xmlUCSIsKanbun = Module["_xmlUCSIsKanbun"] = createExportWrapper("xmlUCSIsKanbun");

var _xmlUCSIsKangxiRadicals = Module["_xmlUCSIsKangxiRadicals"] = createExportWrapper("xmlUCSIsKangxiRadicals");

var _xmlUCSIsKannada = Module["_xmlUCSIsKannada"] = createExportWrapper("xmlUCSIsKannada");

var _xmlUCSIsKatakana = Module["_xmlUCSIsKatakana"] = createExportWrapper("xmlUCSIsKatakana");

var _xmlUCSIsKatakanaPhoneticExtensions = Module["_xmlUCSIsKatakanaPhoneticExtensions"] = createExportWrapper("xmlUCSIsKatakanaPhoneticExtensions");

var _xmlUCSIsKhmer = Module["_xmlUCSIsKhmer"] = createExportWrapper("xmlUCSIsKhmer");

var _xmlUCSIsKhmerSymbols = Module["_xmlUCSIsKhmerSymbols"] = createExportWrapper("xmlUCSIsKhmerSymbols");

var _xmlUCSIsLao = Module["_xmlUCSIsLao"] = createExportWrapper("xmlUCSIsLao");

var _xmlUCSIsLatin1Supplement = Module["_xmlUCSIsLatin1Supplement"] = createExportWrapper("xmlUCSIsLatin1Supplement");

var _xmlUCSIsLatinExtendedA = Module["_xmlUCSIsLatinExtendedA"] = createExportWrapper("xmlUCSIsLatinExtendedA");

var _xmlUCSIsLatinExtendedB = Module["_xmlUCSIsLatinExtendedB"] = createExportWrapper("xmlUCSIsLatinExtendedB");

var _xmlUCSIsLatinExtendedAdditional = Module["_xmlUCSIsLatinExtendedAdditional"] = createExportWrapper("xmlUCSIsLatinExtendedAdditional");

var _xmlUCSIsLetterlikeSymbols = Module["_xmlUCSIsLetterlikeSymbols"] = createExportWrapper("xmlUCSIsLetterlikeSymbols");

var _xmlUCSIsLimbu = Module["_xmlUCSIsLimbu"] = createExportWrapper("xmlUCSIsLimbu");

var _xmlUCSIsLinearBIdeograms = Module["_xmlUCSIsLinearBIdeograms"] = createExportWrapper("xmlUCSIsLinearBIdeograms");

var _xmlUCSIsLinearBSyllabary = Module["_xmlUCSIsLinearBSyllabary"] = createExportWrapper("xmlUCSIsLinearBSyllabary");

var _xmlUCSIsLowSurrogates = Module["_xmlUCSIsLowSurrogates"] = createExportWrapper("xmlUCSIsLowSurrogates");

var _xmlUCSIsMalayalam = Module["_xmlUCSIsMalayalam"] = createExportWrapper("xmlUCSIsMalayalam");

var _xmlUCSIsMathematicalAlphanumericSymbols = Module["_xmlUCSIsMathematicalAlphanumericSymbols"] = createExportWrapper("xmlUCSIsMathematicalAlphanumericSymbols");

var _xmlUCSIsMathematicalOperators = Module["_xmlUCSIsMathematicalOperators"] = createExportWrapper("xmlUCSIsMathematicalOperators");

var _xmlUCSIsMiscellaneousMathematicalSymbolsA = Module["_xmlUCSIsMiscellaneousMathematicalSymbolsA"] = createExportWrapper("xmlUCSIsMiscellaneousMathematicalSymbolsA");

var _xmlUCSIsMiscellaneousMathematicalSymbolsB = Module["_xmlUCSIsMiscellaneousMathematicalSymbolsB"] = createExportWrapper("xmlUCSIsMiscellaneousMathematicalSymbolsB");

var _xmlUCSIsMiscellaneousSymbols = Module["_xmlUCSIsMiscellaneousSymbols"] = createExportWrapper("xmlUCSIsMiscellaneousSymbols");

var _xmlUCSIsMiscellaneousSymbolsandArrows = Module["_xmlUCSIsMiscellaneousSymbolsandArrows"] = createExportWrapper("xmlUCSIsMiscellaneousSymbolsandArrows");

var _xmlUCSIsMiscellaneousTechnical = Module["_xmlUCSIsMiscellaneousTechnical"] = createExportWrapper("xmlUCSIsMiscellaneousTechnical");

var _xmlUCSIsMongolian = Module["_xmlUCSIsMongolian"] = createExportWrapper("xmlUCSIsMongolian");

var _xmlUCSIsMusicalSymbols = Module["_xmlUCSIsMusicalSymbols"] = createExportWrapper("xmlUCSIsMusicalSymbols");

var _xmlUCSIsMyanmar = Module["_xmlUCSIsMyanmar"] = createExportWrapper("xmlUCSIsMyanmar");

var _xmlUCSIsNumberForms = Module["_xmlUCSIsNumberForms"] = createExportWrapper("xmlUCSIsNumberForms");

var _xmlUCSIsOgham = Module["_xmlUCSIsOgham"] = createExportWrapper("xmlUCSIsOgham");

var _xmlUCSIsOldItalic = Module["_xmlUCSIsOldItalic"] = createExportWrapper("xmlUCSIsOldItalic");

var _xmlUCSIsOpticalCharacterRecognition = Module["_xmlUCSIsOpticalCharacterRecognition"] = createExportWrapper("xmlUCSIsOpticalCharacterRecognition");

var _xmlUCSIsOriya = Module["_xmlUCSIsOriya"] = createExportWrapper("xmlUCSIsOriya");

var _xmlUCSIsOsmanya = Module["_xmlUCSIsOsmanya"] = createExportWrapper("xmlUCSIsOsmanya");

var _xmlUCSIsPhoneticExtensions = Module["_xmlUCSIsPhoneticExtensions"] = createExportWrapper("xmlUCSIsPhoneticExtensions");

var _xmlUCSIsPrivateUse = Module["_xmlUCSIsPrivateUse"] = createExportWrapper("xmlUCSIsPrivateUse");

var _xmlUCSIsPrivateUseArea = Module["_xmlUCSIsPrivateUseArea"] = createExportWrapper("xmlUCSIsPrivateUseArea");

var _xmlUCSIsRunic = Module["_xmlUCSIsRunic"] = createExportWrapper("xmlUCSIsRunic");

var _xmlUCSIsShavian = Module["_xmlUCSIsShavian"] = createExportWrapper("xmlUCSIsShavian");

var _xmlUCSIsSinhala = Module["_xmlUCSIsSinhala"] = createExportWrapper("xmlUCSIsSinhala");

var _xmlUCSIsSmallFormVariants = Module["_xmlUCSIsSmallFormVariants"] = createExportWrapper("xmlUCSIsSmallFormVariants");

var _xmlUCSIsSpacingModifierLetters = Module["_xmlUCSIsSpacingModifierLetters"] = createExportWrapper("xmlUCSIsSpacingModifierLetters");

var _xmlUCSIsSpecials = Module["_xmlUCSIsSpecials"] = createExportWrapper("xmlUCSIsSpecials");

var _xmlUCSIsSuperscriptsandSubscripts = Module["_xmlUCSIsSuperscriptsandSubscripts"] = createExportWrapper("xmlUCSIsSuperscriptsandSubscripts");

var _xmlUCSIsSupplementalArrowsA = Module["_xmlUCSIsSupplementalArrowsA"] = createExportWrapper("xmlUCSIsSupplementalArrowsA");

var _xmlUCSIsSupplementalArrowsB = Module["_xmlUCSIsSupplementalArrowsB"] = createExportWrapper("xmlUCSIsSupplementalArrowsB");

var _xmlUCSIsSupplementalMathematicalOperators = Module["_xmlUCSIsSupplementalMathematicalOperators"] = createExportWrapper("xmlUCSIsSupplementalMathematicalOperators");

var _xmlUCSIsSupplementaryPrivateUseAreaA = Module["_xmlUCSIsSupplementaryPrivateUseAreaA"] = createExportWrapper("xmlUCSIsSupplementaryPrivateUseAreaA");

var _xmlUCSIsSupplementaryPrivateUseAreaB = Module["_xmlUCSIsSupplementaryPrivateUseAreaB"] = createExportWrapper("xmlUCSIsSupplementaryPrivateUseAreaB");

var _xmlUCSIsSyriac = Module["_xmlUCSIsSyriac"] = createExportWrapper("xmlUCSIsSyriac");

var _xmlUCSIsTagalog = Module["_xmlUCSIsTagalog"] = createExportWrapper("xmlUCSIsTagalog");

var _xmlUCSIsTagbanwa = Module["_xmlUCSIsTagbanwa"] = createExportWrapper("xmlUCSIsTagbanwa");

var _xmlUCSIsTags = Module["_xmlUCSIsTags"] = createExportWrapper("xmlUCSIsTags");

var _xmlUCSIsTaiLe = Module["_xmlUCSIsTaiLe"] = createExportWrapper("xmlUCSIsTaiLe");

var _xmlUCSIsTaiXuanJingSymbols = Module["_xmlUCSIsTaiXuanJingSymbols"] = createExportWrapper("xmlUCSIsTaiXuanJingSymbols");

var _xmlUCSIsTamil = Module["_xmlUCSIsTamil"] = createExportWrapper("xmlUCSIsTamil");

var _xmlUCSIsTelugu = Module["_xmlUCSIsTelugu"] = createExportWrapper("xmlUCSIsTelugu");

var _xmlUCSIsThaana = Module["_xmlUCSIsThaana"] = createExportWrapper("xmlUCSIsThaana");

var _xmlUCSIsThai = Module["_xmlUCSIsThai"] = createExportWrapper("xmlUCSIsThai");

var _xmlUCSIsTibetan = Module["_xmlUCSIsTibetan"] = createExportWrapper("xmlUCSIsTibetan");

var _xmlUCSIsUgaritic = Module["_xmlUCSIsUgaritic"] = createExportWrapper("xmlUCSIsUgaritic");

var _xmlUCSIsUnifiedCanadianAboriginalSyllabics = Module["_xmlUCSIsUnifiedCanadianAboriginalSyllabics"] = createExportWrapper("xmlUCSIsUnifiedCanadianAboriginalSyllabics");

var _xmlUCSIsVariationSelectors = Module["_xmlUCSIsVariationSelectors"] = createExportWrapper("xmlUCSIsVariationSelectors");

var _xmlUCSIsVariationSelectorsSupplement = Module["_xmlUCSIsVariationSelectorsSupplement"] = createExportWrapper("xmlUCSIsVariationSelectorsSupplement");

var _xmlUCSIsYiRadicals = Module["_xmlUCSIsYiRadicals"] = createExportWrapper("xmlUCSIsYiRadicals");

var _xmlUCSIsYiSyllables = Module["_xmlUCSIsYiSyllables"] = createExportWrapper("xmlUCSIsYiSyllables");

var _xmlUCSIsYijingHexagramSymbols = Module["_xmlUCSIsYijingHexagramSymbols"] = createExportWrapper("xmlUCSIsYijingHexagramSymbols");

var _xmlUCSIsCatCs = Module["_xmlUCSIsCatCs"] = createExportWrapper("xmlUCSIsCatCs");

var _xmlUCSIsCat = Module["_xmlUCSIsCat"] = createExportWrapper("xmlUCSIsCat");

var _xmlTextReaderRead = Module["_xmlTextReaderRead"] = createExportWrapper("xmlTextReaderRead");

var _xmlTextReaderExpand = Module["_xmlTextReaderExpand"] = createExportWrapper("xmlTextReaderExpand");

var _xmlTextReaderPreserve = Module["_xmlTextReaderPreserve"] = createExportWrapper("xmlTextReaderPreserve");

var _xmlTextReaderReadState = Module["_xmlTextReaderReadState"] = createExportWrapper("xmlTextReaderReadState");

var _xmlTextReaderNext = Module["_xmlTextReaderNext"] = createExportWrapper("xmlTextReaderNext");

var _xmlTextReaderReadInnerXml = Module["_xmlTextReaderReadInnerXml"] = createExportWrapper("xmlTextReaderReadInnerXml");

var _xmlTextReaderReadOuterXml = Module["_xmlTextReaderReadOuterXml"] = createExportWrapper("xmlTextReaderReadOuterXml");

var _xmlTextReaderReadString = Module["_xmlTextReaderReadString"] = createExportWrapper("xmlTextReaderReadString");

var _xmlTextReaderNextSibling = Module["_xmlTextReaderNextSibling"] = createExportWrapper("xmlTextReaderNextSibling");

var _xmlNewTextReader = Module["_xmlNewTextReader"] = createExportWrapper("xmlNewTextReader");

var _xmlNewTextReaderFilename = Module["_xmlNewTextReaderFilename"] = createExportWrapper("xmlNewTextReaderFilename");

var _xmlFreeTextReader = Module["_xmlFreeTextReader"] = createExportWrapper("xmlFreeTextReader");

var _xmlTextReaderClose = Module["_xmlTextReaderClose"] = createExportWrapper("xmlTextReaderClose");

var _xmlTextReaderGetAttributeNo = Module["_xmlTextReaderGetAttributeNo"] = createExportWrapper("xmlTextReaderGetAttributeNo");

var _xmlTextReaderGetAttribute = Module["_xmlTextReaderGetAttribute"] = createExportWrapper("xmlTextReaderGetAttribute");

var _xmlTextReaderGetAttributeNs = Module["_xmlTextReaderGetAttributeNs"] = createExportWrapper("xmlTextReaderGetAttributeNs");

var _xmlTextReaderGetRemainder = Module["_xmlTextReaderGetRemainder"] = createExportWrapper("xmlTextReaderGetRemainder");

var _xmlPatternMatch = Module["_xmlPatternMatch"] = createExportWrapper("xmlPatternMatch");

var _xmlRelaxNGValidatePopElement = Module["_xmlRelaxNGValidatePopElement"] = createExportWrapper("xmlRelaxNGValidatePopElement");

var _xmlRelaxNGValidatePushCData = Module["_xmlRelaxNGValidatePushCData"] = createExportWrapper("xmlRelaxNGValidatePushCData");

var _xmlRelaxNGValidatePushElement = Module["_xmlRelaxNGValidatePushElement"] = createExportWrapper("xmlRelaxNGValidatePushElement");

var _xmlRelaxNGValidateFullElement = Module["_xmlRelaxNGValidateFullElement"] = createExportWrapper("xmlRelaxNGValidateFullElement");

var _xmlTextReaderMoveToAttributeNo = Module["_xmlTextReaderMoveToAttributeNo"] = createExportWrapper("xmlTextReaderMoveToAttributeNo");

var _xmlTextReaderMoveToAttribute = Module["_xmlTextReaderMoveToAttribute"] = createExportWrapper("xmlTextReaderMoveToAttribute");

var _xmlTextReaderMoveToAttributeNs = Module["_xmlTextReaderMoveToAttributeNs"] = createExportWrapper("xmlTextReaderMoveToAttributeNs");

var _xmlTextReaderMoveToFirstAttribute = Module["_xmlTextReaderMoveToFirstAttribute"] = createExportWrapper("xmlTextReaderMoveToFirstAttribute");

var _xmlTextReaderMoveToNextAttribute = Module["_xmlTextReaderMoveToNextAttribute"] = createExportWrapper("xmlTextReaderMoveToNextAttribute");

var _xmlTextReaderMoveToElement = Module["_xmlTextReaderMoveToElement"] = createExportWrapper("xmlTextReaderMoveToElement");

var _xmlTextReaderReadAttributeValue = Module["_xmlTextReaderReadAttributeValue"] = createExportWrapper("xmlTextReaderReadAttributeValue");

var _xmlTextReaderConstEncoding = Module["_xmlTextReaderConstEncoding"] = createExportWrapper("xmlTextReaderConstEncoding");

var _xmlTextReaderAttributeCount = Module["_xmlTextReaderAttributeCount"] = createExportWrapper("xmlTextReaderAttributeCount");

var _xmlTextReaderNodeType = Module["_xmlTextReaderNodeType"] = createExportWrapper("xmlTextReaderNodeType");

var _xmlTextReaderIsEmptyElement = Module["_xmlTextReaderIsEmptyElement"] = createExportWrapper("xmlTextReaderIsEmptyElement");

var _xmlTextReaderLocalName = Module["_xmlTextReaderLocalName"] = createExportWrapper("xmlTextReaderLocalName");

var _xmlTextReaderName = Module["_xmlTextReaderName"] = createExportWrapper("xmlTextReaderName");

var _xmlTextReaderConstLocalName = Module["_xmlTextReaderConstLocalName"] = createExportWrapper("xmlTextReaderConstLocalName");

var _xmlTextReaderConstName = Module["_xmlTextReaderConstName"] = createExportWrapper("xmlTextReaderConstName");

var _xmlDictQLookup = Module["_xmlDictQLookup"] = createExportWrapper("xmlDictQLookup");

var _xmlTextReaderPrefix = Module["_xmlTextReaderPrefix"] = createExportWrapper("xmlTextReaderPrefix");

var _xmlTextReaderConstPrefix = Module["_xmlTextReaderConstPrefix"] = createExportWrapper("xmlTextReaderConstPrefix");

var _xmlTextReaderNamespaceUri = Module["_xmlTextReaderNamespaceUri"] = createExportWrapper("xmlTextReaderNamespaceUri");

var _xmlTextReaderConstNamespaceUri = Module["_xmlTextReaderConstNamespaceUri"] = createExportWrapper("xmlTextReaderConstNamespaceUri");

var _xmlTextReaderBaseUri = Module["_xmlTextReaderBaseUri"] = createExportWrapper("xmlTextReaderBaseUri");

var _xmlTextReaderConstBaseUri = Module["_xmlTextReaderConstBaseUri"] = createExportWrapper("xmlTextReaderConstBaseUri");

var _xmlTextReaderDepth = Module["_xmlTextReaderDepth"] = createExportWrapper("xmlTextReaderDepth");

var _xmlTextReaderHasAttributes = Module["_xmlTextReaderHasAttributes"] = createExportWrapper("xmlTextReaderHasAttributes");

var _xmlTextReaderHasValue = Module["_xmlTextReaderHasValue"] = createExportWrapper("xmlTextReaderHasValue");

var _xmlTextReaderValue = Module["_xmlTextReaderValue"] = createExportWrapper("xmlTextReaderValue");

var _xmlTextReaderConstValue = Module["_xmlTextReaderConstValue"] = createExportWrapper("xmlTextReaderConstValue");

var _xmlTextReaderIsDefault = Module["_xmlTextReaderIsDefault"] = createExportWrapper("xmlTextReaderIsDefault");

var _xmlTextReaderQuoteChar = Module["_xmlTextReaderQuoteChar"] = createExportWrapper("xmlTextReaderQuoteChar");

var _xmlTextReaderXmlLang = Module["_xmlTextReaderXmlLang"] = createExportWrapper("xmlTextReaderXmlLang");

var _xmlTextReaderConstXmlLang = Module["_xmlTextReaderConstXmlLang"] = createExportWrapper("xmlTextReaderConstXmlLang");

var _xmlTextReaderConstString = Module["_xmlTextReaderConstString"] = createExportWrapper("xmlTextReaderConstString");

var _xmlTextReaderNormalization = Module["_xmlTextReaderNormalization"] = createExportWrapper("xmlTextReaderNormalization");

var _xmlTextReaderSetParserProp = Module["_xmlTextReaderSetParserProp"] = createExportWrapper("xmlTextReaderSetParserProp");

var _xmlTextReaderGetParserProp = Module["_xmlTextReaderGetParserProp"] = createExportWrapper("xmlTextReaderGetParserProp");

var _xmlTextReaderGetParserLineNumber = Module["_xmlTextReaderGetParserLineNumber"] = createExportWrapper("xmlTextReaderGetParserLineNumber");

var _xmlTextReaderGetParserColumnNumber = Module["_xmlTextReaderGetParserColumnNumber"] = createExportWrapper("xmlTextReaderGetParserColumnNumber");

var _xmlTextReaderCurrentNode = Module["_xmlTextReaderCurrentNode"] = createExportWrapper("xmlTextReaderCurrentNode");

var _xmlTextReaderPreservePattern = Module["_xmlTextReaderPreservePattern"] = createExportWrapper("xmlTextReaderPreservePattern");

var _xmlTextReaderCurrentDoc = Module["_xmlTextReaderCurrentDoc"] = createExportWrapper("xmlTextReaderCurrentDoc");

var _xmlTextReaderRelaxNGSetSchema = Module["_xmlTextReaderRelaxNGSetSchema"] = createExportWrapper("xmlTextReaderRelaxNGSetSchema");

var _xmlRelaxNGSetValidStructuredErrors = Module["_xmlRelaxNGSetValidStructuredErrors"] = createExportWrapper("xmlRelaxNGSetValidStructuredErrors");

var _xmlTextReaderSetSchema = Module["_xmlTextReaderSetSchema"] = createExportWrapper("xmlTextReaderSetSchema");

var _xmlTextReaderSchemaValidateCtxt = Module["_xmlTextReaderSchemaValidateCtxt"] = createExportWrapper("xmlTextReaderSchemaValidateCtxt");

var _xmlTextReaderSchemaValidate = Module["_xmlTextReaderSchemaValidate"] = createExportWrapper("xmlTextReaderSchemaValidate");

var _xmlTextReaderRelaxNGValidateCtxt = Module["_xmlTextReaderRelaxNGValidateCtxt"] = createExportWrapper("xmlTextReaderRelaxNGValidateCtxt");

var _xmlTextReaderRelaxNGValidate = Module["_xmlTextReaderRelaxNGValidate"] = createExportWrapper("xmlTextReaderRelaxNGValidate");

var _xmlTextReaderIsNamespaceDecl = Module["_xmlTextReaderIsNamespaceDecl"] = createExportWrapper("xmlTextReaderIsNamespaceDecl");

var _xmlTextReaderConstXmlVersion = Module["_xmlTextReaderConstXmlVersion"] = createExportWrapper("xmlTextReaderConstXmlVersion");

var _xmlTextReaderStandalone = Module["_xmlTextReaderStandalone"] = createExportWrapper("xmlTextReaderStandalone");

var _xmlTextReaderLocatorLineNumber = Module["_xmlTextReaderLocatorLineNumber"] = createExportWrapper("xmlTextReaderLocatorLineNumber");

var _xmlTextReaderLocatorBaseURI = Module["_xmlTextReaderLocatorBaseURI"] = createExportWrapper("xmlTextReaderLocatorBaseURI");

var _xmlTextReaderSetErrorHandler = Module["_xmlTextReaderSetErrorHandler"] = createExportWrapper("xmlTextReaderSetErrorHandler");

var _xmlTextReaderSetStructuredErrorHandler = Module["_xmlTextReaderSetStructuredErrorHandler"] = createExportWrapper("xmlTextReaderSetStructuredErrorHandler");

var _xmlTextReaderIsValid = Module["_xmlTextReaderIsValid"] = createExportWrapper("xmlTextReaderIsValid");

var _xmlTextReaderGetErrorHandler = Module["_xmlTextReaderGetErrorHandler"] = createExportWrapper("xmlTextReaderGetErrorHandler");

var _xmlTextReaderSetup = Module["_xmlTextReaderSetup"] = createExportWrapper("xmlTextReaderSetup");

var _xmlTextReaderByteConsumed = Module["_xmlTextReaderByteConsumed"] = createExportWrapper("xmlTextReaderByteConsumed");

var _xmlReaderWalker = Module["_xmlReaderWalker"] = createExportWrapper("xmlReaderWalker");

var _xmlReaderForDoc = Module["_xmlReaderForDoc"] = createExportWrapper("xmlReaderForDoc");

var _xmlReaderForMemory = Module["_xmlReaderForMemory"] = createExportWrapper("xmlReaderForMemory");

var _xmlReaderForFile = Module["_xmlReaderForFile"] = createExportWrapper("xmlReaderForFile");

var _xmlReaderForFd = Module["_xmlReaderForFd"] = createExportWrapper("xmlReaderForFd");

var _xmlReaderForIO = Module["_xmlReaderForIO"] = createExportWrapper("xmlReaderForIO");

var _xmlReaderNewWalker = Module["_xmlReaderNewWalker"] = createExportWrapper("xmlReaderNewWalker");

var _xmlReaderNewDoc = Module["_xmlReaderNewDoc"] = createExportWrapper("xmlReaderNewDoc");

var _xmlReaderNewMemory = Module["_xmlReaderNewMemory"] = createExportWrapper("xmlReaderNewMemory");

var _xmlReaderNewFile = Module["_xmlReaderNewFile"] = createExportWrapper("xmlReaderNewFile");

var _xmlReaderNewFd = Module["_xmlReaderNewFd"] = createExportWrapper("xmlReaderNewFd");

var _xmlReaderNewIO = Module["_xmlReaderNewIO"] = createExportWrapper("xmlReaderNewIO");

var _xmlRelaxParserSetFlag = Module["_xmlRelaxParserSetFlag"] = createExportWrapper("xmlRelaxParserSetFlag");

var _xmlRelaxNGInitTypes = Module["_xmlRelaxNGInitTypes"] = createExportWrapper("xmlRelaxNGInitTypes");

var _xmlRelaxNGNewDocParserCtxt = Module["_xmlRelaxNGNewDocParserCtxt"] = createExportWrapper("xmlRelaxNGNewDocParserCtxt");

var _xmlRelaxNGGetParserErrors = Module["_xmlRelaxNGGetParserErrors"] = createExportWrapper("xmlRelaxNGGetParserErrors");

var _xmlRelaxNGSetParserStructuredErrors = Module["_xmlRelaxNGSetParserStructuredErrors"] = createExportWrapper("xmlRelaxNGSetParserStructuredErrors");

var _xmlRelaxNGDump = Module["_xmlRelaxNGDump"] = createExportWrapper("xmlRelaxNGDump");

var _xmlRelaxNGDumpTree = Module["_xmlRelaxNGDumpTree"] = createExportWrapper("xmlRelaxNGDumpTree");

var _xmlRelaxNGGetValidErrors = Module["_xmlRelaxNGGetValidErrors"] = createExportWrapper("xmlRelaxNGGetValidErrors");

var ___xmlInitializeDict = Module["___xmlInitializeDict"] = createExportWrapper("__xmlInitializeDict");

var _rand_r = Module["_rand_r"] = createExportWrapper("rand_r");

var _xmlDictCreateSub = Module["_xmlDictCreateSub"] = createExportWrapper("xmlDictCreateSub");

var _xmlDictExists = Module["_xmlDictExists"] = createExportWrapper("xmlDictExists");

var _xmlDictSize = Module["_xmlDictSize"] = createExportWrapper("xmlDictSize");

var _xmlDictGetUsage = Module["_xmlDictGetUsage"] = createExportWrapper("xmlDictGetUsage");

var _xmlSAX2StartElementNs = Module["_xmlSAX2StartElementNs"] = createExportWrapper("xmlSAX2StartElementNs");

var _xmlSAX2EndElementNs = Module["_xmlSAX2EndElementNs"] = createExportWrapper("xmlSAX2EndElementNs");

var _xmlSAXDefaultVersion = Module["_xmlSAXDefaultVersion"] = createExportWrapper("xmlSAXDefaultVersion");

var _xmlSAX2InitDefaultSAXHandler = Module["_xmlSAX2InitDefaultSAXHandler"] = createExportWrapper("xmlSAX2InitDefaultSAXHandler");

var _xmlSAX2InitHtmlDefaultSAXHandler = Module["_xmlSAX2InitHtmlDefaultSAXHandler"] = createExportWrapper("xmlSAX2InitHtmlDefaultSAXHandler");

var _xmlSAX2InitDocbDefaultSAXHandler = Module["_xmlSAX2InitDocbDefaultSAXHandler"] = createExportWrapper("xmlSAX2InitDocbDefaultSAXHandler");

var _docbDefaultSAXHandlerInit = Module["_docbDefaultSAXHandlerInit"] = createExportWrapper("docbDefaultSAXHandlerInit");

var _xmlIsBaseChar = Module["_xmlIsBaseChar"] = createExportWrapper("xmlIsBaseChar");

var _xmlIsBlank = Module["_xmlIsBlank"] = createExportWrapper("xmlIsBlank");

var _xmlIsChar = Module["_xmlIsChar"] = createExportWrapper("xmlIsChar");

var _xmlIsCombining = Module["_xmlIsCombining"] = createExportWrapper("xmlIsCombining");

var _xmlIsDigit = Module["_xmlIsDigit"] = createExportWrapper("xmlIsDigit");

var _xmlIsExtender = Module["_xmlIsExtender"] = createExportWrapper("xmlIsExtender");

var _xmlIsIdeographic = Module["_xmlIsIdeographic"] = createExportWrapper("xmlIsIdeographic");

var _xmlIsPubidChar = Module["_xmlIsPubidChar"] = createExportWrapper("xmlIsPubidChar");

var _xmlIsXHTML = Module["_xmlIsXHTML"] = createExportWrapper("xmlIsXHTML");

var _xmlBufDumpNotationTable = Module["_xmlBufDumpNotationTable"] = createExportWrapper("xmlBufDumpNotationTable");

var _xmlBufDumpElementDecl = Module["_xmlBufDumpElementDecl"] = createExportWrapper("xmlBufDumpElementDecl");

var _xmlBufDumpAttributeDecl = Module["_xmlBufDumpAttributeDecl"] = createExportWrapper("xmlBufDumpAttributeDecl");

var _xmlBufDumpEntityDecl = Module["_xmlBufDumpEntityDecl"] = createExportWrapper("xmlBufDumpEntityDecl");

var _xmlSaveToFd = Module["_xmlSaveToFd"] = createExportWrapper("xmlSaveToFd");

var _xmlSaveToFilename = Module["_xmlSaveToFilename"] = createExportWrapper("xmlSaveToFilename");

var _xmlSaveToBuffer = Module["_xmlSaveToBuffer"] = createExportWrapper("xmlSaveToBuffer");

var _xmlSaveToIO = Module["_xmlSaveToIO"] = createExportWrapper("xmlSaveToIO");

var _xmlSaveDoc = Module["_xmlSaveDoc"] = createExportWrapper("xmlSaveDoc");

var _xmlSaveTree = Module["_xmlSaveTree"] = createExportWrapper("xmlSaveTree");

var _xmlSaveFlush = Module["_xmlSaveFlush"] = createExportWrapper("xmlSaveFlush");

var _xmlSaveClose = Module["_xmlSaveClose"] = createExportWrapper("xmlSaveClose");

var _xmlSaveSetEscape = Module["_xmlSaveSetEscape"] = createExportWrapper("xmlSaveSetEscape");

var _xmlSaveSetAttrEscape = Module["_xmlSaveSetAttrEscape"] = createExportWrapper("xmlSaveSetAttrEscape");

var _xmlBufAttrSerializeTxtContent = Module["_xmlBufAttrSerializeTxtContent"] = createExportWrapper("xmlBufAttrSerializeTxtContent");

var _xmlAttrSerializeTxtContent = Module["_xmlAttrSerializeTxtContent"] = createExportWrapper("xmlAttrSerializeTxtContent");

var _xmlBufNodeDump = Module["_xmlBufNodeDump"] = createExportWrapper("xmlBufNodeDump");

var _xmlDocDumpFormatMemoryEnc = Module["_xmlDocDumpFormatMemoryEnc"] = createExportWrapper("xmlDocDumpFormatMemoryEnc");

var _xmlDocDumpMemory = Module["_xmlDocDumpMemory"] = createExportWrapper("xmlDocDumpMemory");

var _xmlDocFormatDump = Module["_xmlDocFormatDump"] = createExportWrapper("xmlDocFormatDump");

var _xmlSaveFileTo = Module["_xmlSaveFileTo"] = createExportWrapper("xmlSaveFileTo");

var _xmlSaveFileEnc = Module["_xmlSaveFileEnc"] = createExportWrapper("xmlSaveFileEnc");

var _xmlSaveFormatFile = Module["_xmlSaveFormatFile"] = createExportWrapper("xmlSaveFormatFile");

var _sqlite3_status64 = Module["_sqlite3_status64"] = createExportWrapper("sqlite3_status64");

var _sqlite3_mutex_enter = Module["_sqlite3_mutex_enter"] = createExportWrapper("sqlite3_mutex_enter");

var _sqlite3_mutex_leave = Module["_sqlite3_mutex_leave"] = createExportWrapper("sqlite3_mutex_leave");

var _sqlite3_status = Module["_sqlite3_status"] = createExportWrapper("sqlite3_status");

var _sqlite3_db_status = Module["_sqlite3_db_status"] = createExportWrapper("sqlite3_db_status");

var _sqlite3_msize = Module["_sqlite3_msize"] = createExportWrapper("sqlite3_msize");

var _sqlite3_vfs_find = Module["_sqlite3_vfs_find"] = createExportWrapper("sqlite3_vfs_find");

var _sqlite3_initialize = Module["_sqlite3_initialize"] = createExportWrapper("sqlite3_initialize");

var _sqlite3_mutex_free = Module["_sqlite3_mutex_free"] = createExportWrapper("sqlite3_mutex_free");

var _sqlite3_vfs_register = Module["_sqlite3_vfs_register"] = createExportWrapper("sqlite3_vfs_register");

var _sqlite3_vfs_unregister = Module["_sqlite3_vfs_unregister"] = createExportWrapper("sqlite3_vfs_unregister");

var _sqlite3_mutex_alloc = Module["_sqlite3_mutex_alloc"] = createExportWrapper("sqlite3_mutex_alloc");

var _sqlite3_mutex_try = Module["_sqlite3_mutex_try"] = createExportWrapper("sqlite3_mutex_try");

var _sqlite3_release_memory = Module["_sqlite3_release_memory"] = createExportWrapper("sqlite3_release_memory");

var _sqlite3_memory_alarm = Module["_sqlite3_memory_alarm"] = createExportWrapper("sqlite3_memory_alarm");

var _sqlite3_soft_heap_limit64 = Module["_sqlite3_soft_heap_limit64"] = createExportWrapper("sqlite3_soft_heap_limit64");

var _sqlite3_memory_used = Module["_sqlite3_memory_used"] = createExportWrapper("sqlite3_memory_used");

var _sqlite3_soft_heap_limit = Module["_sqlite3_soft_heap_limit"] = createExportWrapper("sqlite3_soft_heap_limit");

var _sqlite3_hard_heap_limit64 = Module["_sqlite3_hard_heap_limit64"] = createExportWrapper("sqlite3_hard_heap_limit64");

var _sqlite3_memory_highwater = Module["_sqlite3_memory_highwater"] = createExportWrapper("sqlite3_memory_highwater");

var _sqlite3_malloc = Module["_sqlite3_malloc"] = createExportWrapper("sqlite3_malloc");

var _sqlite3_malloc64 = Module["_sqlite3_malloc64"] = createExportWrapper("sqlite3_malloc64");

var _sqlite3_realloc = Module["_sqlite3_realloc"] = createExportWrapper("sqlite3_realloc");

var _sqlite3_realloc64 = Module["_sqlite3_realloc64"] = createExportWrapper("sqlite3_realloc64");

var _sqlite3_str_vappendf = Module["_sqlite3_str_vappendf"] = createExportWrapper("sqlite3_str_vappendf");

var _sqlite3_str_append = Module["_sqlite3_str_append"] = createExportWrapper("sqlite3_str_append");

var ___lttf2 = Module["___lttf2"] = createExportWrapper("__lttf2");

var ___multf3 = Module["___multf3"] = createExportWrapper("__multf3");

var ___addtf3 = Module["___addtf3"] = createExportWrapper("__addtf3");

var ___gttf2 = Module["___gttf2"] = createExportWrapper("__gttf2");

var ___getf2 = Module["___getf2"] = createExportWrapper("__getf2");

var ___divtf3 = Module["___divtf3"] = createExportWrapper("__divtf3");

var _sqlite3_str_appendchar = Module["_sqlite3_str_appendchar"] = createExportWrapper("sqlite3_str_appendchar");

var _sqlite3_str_appendall = Module["_sqlite3_str_appendall"] = createExportWrapper("sqlite3_str_appendall");

var _sqlite3_str_appendf = Module["_sqlite3_str_appendf"] = createExportWrapper("sqlite3_str_appendf");

var _sqlite3_value_int64 = Module["_sqlite3_value_int64"] = createExportWrapper("sqlite3_value_int64");

var ___fixtfsi = Module["___fixtfsi"] = createExportWrapper("__fixtfsi");

var ___floatsitf = Module["___floatsitf"] = createExportWrapper("__floatsitf");

var ___subtf3 = Module["___subtf3"] = createExportWrapper("__subtf3");

var _sqlite3_str_reset = Module["_sqlite3_str_reset"] = createExportWrapper("sqlite3_str_reset");

var _sqlite3_str_finish = Module["_sqlite3_str_finish"] = createExportWrapper("sqlite3_str_finish");

var _sqlite3_str_errcode = Module["_sqlite3_str_errcode"] = createExportWrapper("sqlite3_str_errcode");

var _sqlite3_str_length = Module["_sqlite3_str_length"] = createExportWrapper("sqlite3_str_length");

var _sqlite3_str_value = Module["_sqlite3_str_value"] = createExportWrapper("sqlite3_str_value");

var _sqlite3_str_new = Module["_sqlite3_str_new"] = createExportWrapper("sqlite3_str_new");

var _sqlite3_vmprintf = Module["_sqlite3_vmprintf"] = createExportWrapper("sqlite3_vmprintf");

var _sqlite3_vsnprintf = Module["_sqlite3_vsnprintf"] = createExportWrapper("sqlite3_vsnprintf");

var _sqlite3_log = Module["_sqlite3_log"] = createExportWrapper("sqlite3_log");

var _sqlite3_randomness = Module["_sqlite3_randomness"] = createExportWrapper("sqlite3_randomness");

var _sqlite3_stricmp = Module["_sqlite3_stricmp"] = createExportWrapper("sqlite3_stricmp");

var _sqlite3_strnicmp = Module["_sqlite3_strnicmp"] = createExportWrapper("sqlite3_strnicmp");

var _sqlite3_os_init = Module["_sqlite3_os_init"] = createExportWrapper("sqlite3_os_init");

var _sqlite3_os_end = Module["_sqlite3_os_end"] = createExportWrapper("sqlite3_os_end");

var _sqlite3_serialize = Module["_sqlite3_serialize"] = createExportWrapper("sqlite3_serialize");

var _sqlite3_column_int = Module["_sqlite3_column_int"] = createExportWrapper("sqlite3_column_int");

var _sqlite3_file_control = Module["_sqlite3_file_control"] = createExportWrapper("sqlite3_file_control");

var _sqlite3_deserialize = Module["_sqlite3_deserialize"] = createExportWrapper("sqlite3_deserialize");

var _sqlite3_database_file_object = Module["_sqlite3_database_file_object"] = createExportWrapper("sqlite3_database_file_object");

var _sqlite3_enable_shared_cache = Module["_sqlite3_enable_shared_cache"] = createExportWrapper("sqlite3_enable_shared_cache");

var _sqlite3_backup_remaining = Module["_sqlite3_backup_remaining"] = createExportWrapper("sqlite3_backup_remaining");

var _sqlite3_backup_pagecount = Module["_sqlite3_backup_pagecount"] = createExportWrapper("sqlite3_backup_pagecount");

var _sqlite3_expired = Module["_sqlite3_expired"] = createExportWrapper("sqlite3_expired");

var _sqlite3_value_blob = Module["_sqlite3_value_blob"] = createExportWrapper("sqlite3_value_blob");

var _sqlite3_value_bytes16 = Module["_sqlite3_value_bytes16"] = createExportWrapper("sqlite3_value_bytes16");

var _sqlite3_value_subtype = Module["_sqlite3_value_subtype"] = createExportWrapper("sqlite3_value_subtype");

var _sqlite3_value_pointer = Module["_sqlite3_value_pointer"] = createExportWrapper("sqlite3_value_pointer");

var _sqlite3_value_text16 = Module["_sqlite3_value_text16"] = createExportWrapper("sqlite3_value_text16");

var _sqlite3_value_text16be = Module["_sqlite3_value_text16be"] = createExportWrapper("sqlite3_value_text16be");

var _sqlite3_value_text16le = Module["_sqlite3_value_text16le"] = createExportWrapper("sqlite3_value_text16le");

var _sqlite3_value_encoding = Module["_sqlite3_value_encoding"] = createExportWrapper("sqlite3_value_encoding");

var _sqlite3_value_nochange = Module["_sqlite3_value_nochange"] = createExportWrapper("sqlite3_value_nochange");

var _sqlite3_value_frombind = Module["_sqlite3_value_frombind"] = createExportWrapper("sqlite3_value_frombind");

var _sqlite3_value_dup = Module["_sqlite3_value_dup"] = createExportWrapper("sqlite3_value_dup");

var _sqlite3_value_free = Module["_sqlite3_value_free"] = createExportWrapper("sqlite3_value_free");

var _sqlite3_result_blob = Module["_sqlite3_result_blob"] = createExportWrapper("sqlite3_result_blob");

var _sqlite3_result_error_toobig = Module["_sqlite3_result_error_toobig"] = createExportWrapper("sqlite3_result_error_toobig");

var _sqlite3_result_error_nomem = Module["_sqlite3_result_error_nomem"] = createExportWrapper("sqlite3_result_error_nomem");

var _sqlite3_result_blob64 = Module["_sqlite3_result_blob64"] = createExportWrapper("sqlite3_result_blob64");

var _sqlite3_result_error16 = Module["_sqlite3_result_error16"] = createExportWrapper("sqlite3_result_error16");

var _sqlite3_result_int64 = Module["_sqlite3_result_int64"] = createExportWrapper("sqlite3_result_int64");

var _sqlite3_result_pointer = Module["_sqlite3_result_pointer"] = createExportWrapper("sqlite3_result_pointer");

var _sqlite3_result_subtype = Module["_sqlite3_result_subtype"] = createExportWrapper("sqlite3_result_subtype");

var _sqlite3_result_text64 = Module["_sqlite3_result_text64"] = createExportWrapper("sqlite3_result_text64");

var _sqlite3_result_text16 = Module["_sqlite3_result_text16"] = createExportWrapper("sqlite3_result_text16");

var _sqlite3_result_text16be = Module["_sqlite3_result_text16be"] = createExportWrapper("sqlite3_result_text16be");

var _sqlite3_result_text16le = Module["_sqlite3_result_text16le"] = createExportWrapper("sqlite3_result_text16le");

var _sqlite3_result_value = Module["_sqlite3_result_value"] = createExportWrapper("sqlite3_result_value");

var _sqlite3_result_zeroblob = Module["_sqlite3_result_zeroblob"] = createExportWrapper("sqlite3_result_zeroblob");

var _sqlite3_result_zeroblob64 = Module["_sqlite3_result_zeroblob64"] = createExportWrapper("sqlite3_result_zeroblob64");

var _sqlite3_result_error_code = Module["_sqlite3_result_error_code"] = createExportWrapper("sqlite3_result_error_code");

var _sqlite3_context_db_handle = Module["_sqlite3_context_db_handle"] = createExportWrapper("sqlite3_context_db_handle");

var _sqlite3_vtab_nochange = Module["_sqlite3_vtab_nochange"] = createExportWrapper("sqlite3_vtab_nochange");

var _sqlite3_vtab_in_first = Module["_sqlite3_vtab_in_first"] = createExportWrapper("sqlite3_vtab_in_first");

var _sqlite3_vtab_in_next = Module["_sqlite3_vtab_in_next"] = createExportWrapper("sqlite3_vtab_in_next");

var _sqlite3_get_auxdata = Module["_sqlite3_get_auxdata"] = createExportWrapper("sqlite3_get_auxdata");

var _sqlite3_set_auxdata = Module["_sqlite3_set_auxdata"] = createExportWrapper("sqlite3_set_auxdata");

var _sqlite3_aggregate_count = Module["_sqlite3_aggregate_count"] = createExportWrapper("sqlite3_aggregate_count");

var _sqlite3_column_bytes16 = Module["_sqlite3_column_bytes16"] = createExportWrapper("sqlite3_column_bytes16");

var _sqlite3_column_value = Module["_sqlite3_column_value"] = createExportWrapper("sqlite3_column_value");

var _sqlite3_column_text16 = Module["_sqlite3_column_text16"] = createExportWrapper("sqlite3_column_text16");

var _sqlite3_column_name16 = Module["_sqlite3_column_name16"] = createExportWrapper("sqlite3_column_name16");

var _sqlite3_column_decltype16 = Module["_sqlite3_column_decltype16"] = createExportWrapper("sqlite3_column_decltype16");

var _sqlite3_bind_blob64 = Module["_sqlite3_bind_blob64"] = createExportWrapper("sqlite3_bind_blob64");

var _sqlite3_bind_int64 = Module["_sqlite3_bind_int64"] = createExportWrapper("sqlite3_bind_int64");

var _sqlite3_bind_pointer = Module["_sqlite3_bind_pointer"] = createExportWrapper("sqlite3_bind_pointer");

var _sqlite3_bind_text64 = Module["_sqlite3_bind_text64"] = createExportWrapper("sqlite3_bind_text64");

var _sqlite3_bind_text16 = Module["_sqlite3_bind_text16"] = createExportWrapper("sqlite3_bind_text16");

var _sqlite3_bind_value = Module["_sqlite3_bind_value"] = createExportWrapper("sqlite3_bind_value");

var _sqlite3_bind_zeroblob = Module["_sqlite3_bind_zeroblob"] = createExportWrapper("sqlite3_bind_zeroblob");

var _sqlite3_bind_zeroblob64 = Module["_sqlite3_bind_zeroblob64"] = createExportWrapper("sqlite3_bind_zeroblob64");

var _sqlite3_bind_parameter_name = Module["_sqlite3_bind_parameter_name"] = createExportWrapper("sqlite3_bind_parameter_name");

var _sqlite3_transfer_bindings = Module["_sqlite3_transfer_bindings"] = createExportWrapper("sqlite3_transfer_bindings");

var _sqlite3_stmt_isexplain = Module["_sqlite3_stmt_isexplain"] = createExportWrapper("sqlite3_stmt_isexplain");

var _sqlite3_stmt_busy = Module["_sqlite3_stmt_busy"] = createExportWrapper("sqlite3_stmt_busy");

var _sqlite3_next_stmt = Module["_sqlite3_next_stmt"] = createExportWrapper("sqlite3_next_stmt");

var _sqlite3_stmt_status = Module["_sqlite3_stmt_status"] = createExportWrapper("sqlite3_stmt_status");

var _sqlite3_expanded_sql = Module["_sqlite3_expanded_sql"] = createExportWrapper("sqlite3_expanded_sql");

var _sqlite3_value_numeric_type = Module["_sqlite3_value_numeric_type"] = createExportWrapper("sqlite3_value_numeric_type");

var _sqlite3_blob_reopen = Module["_sqlite3_blob_reopen"] = createExportWrapper("sqlite3_blob_reopen");

var _sqlite3_strglob = Module["_sqlite3_strglob"] = createExportWrapper("sqlite3_strglob");

var _sqlite3_strlike = Module["_sqlite3_strlike"] = createExportWrapper("sqlite3_strlike");

var _sqlite3_auto_extension = Module["_sqlite3_auto_extension"] = createExportWrapper("sqlite3_auto_extension");

var _sqlite3_cancel_auto_extension = Module["_sqlite3_cancel_auto_extension"] = createExportWrapper("sqlite3_cancel_auto_extension");

var _sqlite3_reset_auto_extension = Module["_sqlite3_reset_auto_extension"] = createExportWrapper("sqlite3_reset_auto_extension");

var _sqlite3_prepare = Module["_sqlite3_prepare"] = createExportWrapper("sqlite3_prepare");

var _sqlite3_prepare_v3 = Module["_sqlite3_prepare_v3"] = createExportWrapper("sqlite3_prepare_v3");

var _sqlite3_prepare16 = Module["_sqlite3_prepare16"] = createExportWrapper("sqlite3_prepare16");

var _sqlite3_prepare16_v2 = Module["_sqlite3_prepare16_v2"] = createExportWrapper("sqlite3_prepare16_v2");

var _sqlite3_prepare16_v3 = Module["_sqlite3_prepare16_v3"] = createExportWrapper("sqlite3_prepare16_v3");

var _sqlite3_get_table = Module["_sqlite3_get_table"] = createExportWrapper("sqlite3_get_table");

var _sqlite3_free_table = Module["_sqlite3_free_table"] = createExportWrapper("sqlite3_free_table");

var _sqlite3_create_module = Module["_sqlite3_create_module"] = createExportWrapper("sqlite3_create_module");

var _sqlite3_create_module_v2 = Module["_sqlite3_create_module_v2"] = createExportWrapper("sqlite3_create_module_v2");

var _sqlite3_drop_modules = Module["_sqlite3_drop_modules"] = createExportWrapper("sqlite3_drop_modules");

var _sqlite3_declare_vtab = Module["_sqlite3_declare_vtab"] = createExportWrapper("sqlite3_declare_vtab");

var _sqlite3_vtab_on_conflict = Module["_sqlite3_vtab_on_conflict"] = createExportWrapper("sqlite3_vtab_on_conflict");

var _sqlite3_vtab_config = Module["_sqlite3_vtab_config"] = createExportWrapper("sqlite3_vtab_config");

var _sqlite3_vtab_collation = Module["_sqlite3_vtab_collation"] = createExportWrapper("sqlite3_vtab_collation");

var _sqlite3_vtab_in = Module["_sqlite3_vtab_in"] = createExportWrapper("sqlite3_vtab_in");

var _sqlite3_vtab_rhs_value = Module["_sqlite3_vtab_rhs_value"] = createExportWrapper("sqlite3_vtab_rhs_value");

var _sqlite3_vtab_distinct = Module["_sqlite3_vtab_distinct"] = createExportWrapper("sqlite3_vtab_distinct");

var _sqlite3_keyword_name = Module["_sqlite3_keyword_name"] = createExportWrapper("sqlite3_keyword_name");

var _sqlite3_keyword_count = Module["_sqlite3_keyword_count"] = createExportWrapper("sqlite3_keyword_count");

var _sqlite3_keyword_check = Module["_sqlite3_keyword_check"] = createExportWrapper("sqlite3_keyword_check");

var _sqlite3_complete = Module["_sqlite3_complete"] = createExportWrapper("sqlite3_complete");

var _sqlite3_complete16 = Module["_sqlite3_complete16"] = createExportWrapper("sqlite3_complete16");

var _sqlite3_threadsafe = Module["_sqlite3_threadsafe"] = createExportWrapper("sqlite3_threadsafe");

var _sqlite3_shutdown = Module["_sqlite3_shutdown"] = createExportWrapper("sqlite3_shutdown");

var _sqlite3_config = Module["_sqlite3_config"] = createExportWrapper("sqlite3_config");

var _sqlite3_db_mutex = Module["_sqlite3_db_mutex"] = createExportWrapper("sqlite3_db_mutex");

var _sqlite3_db_release_memory = Module["_sqlite3_db_release_memory"] = createExportWrapper("sqlite3_db_release_memory");

var _sqlite3_db_cacheflush = Module["_sqlite3_db_cacheflush"] = createExportWrapper("sqlite3_db_cacheflush");

var _sqlite3_set_last_insert_rowid = Module["_sqlite3_set_last_insert_rowid"] = createExportWrapper("sqlite3_set_last_insert_rowid");

var _sqlite3_changes64 = Module["_sqlite3_changes64"] = createExportWrapper("sqlite3_changes64");

var _sqlite3_total_changes64 = Module["_sqlite3_total_changes64"] = createExportWrapper("sqlite3_total_changes64");

var _sqlite3_total_changes = Module["_sqlite3_total_changes"] = createExportWrapper("sqlite3_total_changes");

var _sqlite3_txn_state = Module["_sqlite3_txn_state"] = createExportWrapper("sqlite3_txn_state");

var _sqlite3_close_v2 = Module["_sqlite3_close_v2"] = createExportWrapper("sqlite3_close_v2");

var _sqlite3_busy_handler = Module["_sqlite3_busy_handler"] = createExportWrapper("sqlite3_busy_handler");

var _sqlite3_progress_handler = Module["_sqlite3_progress_handler"] = createExportWrapper("sqlite3_progress_handler");

var _sqlite3_interrupt = Module["_sqlite3_interrupt"] = createExportWrapper("sqlite3_interrupt");

var _sqlite3_is_interrupted = Module["_sqlite3_is_interrupted"] = createExportWrapper("sqlite3_is_interrupted");

var _sqlite3_create_function_v2 = Module["_sqlite3_create_function_v2"] = createExportWrapper("sqlite3_create_function_v2");

var _sqlite3_create_window_function = Module["_sqlite3_create_window_function"] = createExportWrapper("sqlite3_create_window_function");

var _sqlite3_create_function16 = Module["_sqlite3_create_function16"] = createExportWrapper("sqlite3_create_function16");

var _sqlite3_overload_function = Module["_sqlite3_overload_function"] = createExportWrapper("sqlite3_overload_function");

var _sqlite3_trace = Module["_sqlite3_trace"] = createExportWrapper("sqlite3_trace");

var _sqlite3_trace_v2 = Module["_sqlite3_trace_v2"] = createExportWrapper("sqlite3_trace_v2");

var _sqlite3_profile = Module["_sqlite3_profile"] = createExportWrapper("sqlite3_profile");

var _sqlite3_commit_hook = Module["_sqlite3_commit_hook"] = createExportWrapper("sqlite3_commit_hook");

var _sqlite3_update_hook = Module["_sqlite3_update_hook"] = createExportWrapper("sqlite3_update_hook");

var _sqlite3_rollback_hook = Module["_sqlite3_rollback_hook"] = createExportWrapper("sqlite3_rollback_hook");

var _sqlite3_autovacuum_pages = Module["_sqlite3_autovacuum_pages"] = createExportWrapper("sqlite3_autovacuum_pages");

var _sqlite3_wal_autocheckpoint = Module["_sqlite3_wal_autocheckpoint"] = createExportWrapper("sqlite3_wal_autocheckpoint");

var _sqlite3_wal_hook = Module["_sqlite3_wal_hook"] = createExportWrapper("sqlite3_wal_hook");

var _sqlite3_wal_checkpoint = Module["_sqlite3_wal_checkpoint"] = createExportWrapper("sqlite3_wal_checkpoint");

var _sqlite3_wal_checkpoint_v2 = Module["_sqlite3_wal_checkpoint_v2"] = createExportWrapper("sqlite3_wal_checkpoint_v2");

var _sqlite3_error_offset = Module["_sqlite3_error_offset"] = createExportWrapper("sqlite3_error_offset");

var _sqlite3_errmsg16 = Module["_sqlite3_errmsg16"] = createExportWrapper("sqlite3_errmsg16");

var _sqlite3_system_errno = Module["_sqlite3_system_errno"] = createExportWrapper("sqlite3_system_errno");

var _sqlite3_errstr = Module["_sqlite3_errstr"] = createExportWrapper("sqlite3_errstr");

var _sqlite3_limit = Module["_sqlite3_limit"] = createExportWrapper("sqlite3_limit");

var _sqlite3_open = Module["_sqlite3_open"] = createExportWrapper("sqlite3_open");

var _sqlite3_free_filename = Module["_sqlite3_free_filename"] = createExportWrapper("sqlite3_free_filename");

var _sqlite3_open16 = Module["_sqlite3_open16"] = createExportWrapper("sqlite3_open16");

var _sqlite3_create_collation_v2 = Module["_sqlite3_create_collation_v2"] = createExportWrapper("sqlite3_create_collation_v2");

var _sqlite3_create_collation16 = Module["_sqlite3_create_collation16"] = createExportWrapper("sqlite3_create_collation16");

var _sqlite3_collation_needed = Module["_sqlite3_collation_needed"] = createExportWrapper("sqlite3_collation_needed");

var _sqlite3_collation_needed16 = Module["_sqlite3_collation_needed16"] = createExportWrapper("sqlite3_collation_needed16");

var _sqlite3_global_recover = Module["_sqlite3_global_recover"] = createExportWrapper("sqlite3_global_recover");

var _sqlite3_get_autocommit = Module["_sqlite3_get_autocommit"] = createExportWrapper("sqlite3_get_autocommit");

var _sqlite3_thread_cleanup = Module["_sqlite3_thread_cleanup"] = createExportWrapper("sqlite3_thread_cleanup");

var _sqlite3_table_column_metadata = Module["_sqlite3_table_column_metadata"] = createExportWrapper("sqlite3_table_column_metadata");

var _sqlite3_sleep = Module["_sqlite3_sleep"] = createExportWrapper("sqlite3_sleep");

var _sqlite3_test_control = Module["_sqlite3_test_control"] = createExportWrapper("sqlite3_test_control");

var _sqlite3_create_filename = Module["_sqlite3_create_filename"] = createExportWrapper("sqlite3_create_filename");

var _sqlite3_uri_parameter = Module["_sqlite3_uri_parameter"] = createExportWrapper("sqlite3_uri_parameter");

var _sqlite3_uri_key = Module["_sqlite3_uri_key"] = createExportWrapper("sqlite3_uri_key");

var _sqlite3_uri_boolean = Module["_sqlite3_uri_boolean"] = createExportWrapper("sqlite3_uri_boolean");

var _sqlite3_uri_int64 = Module["_sqlite3_uri_int64"] = createExportWrapper("sqlite3_uri_int64");

var _sqlite3_filename_database = Module["_sqlite3_filename_database"] = createExportWrapper("sqlite3_filename_database");

var _sqlite3_filename_journal = Module["_sqlite3_filename_journal"] = createExportWrapper("sqlite3_filename_journal");

var _sqlite3_filename_wal = Module["_sqlite3_filename_wal"] = createExportWrapper("sqlite3_filename_wal");

var _sqlite3_db_name = Module["_sqlite3_db_name"] = createExportWrapper("sqlite3_db_name");

var _sqlite3_db_filename = Module["_sqlite3_db_filename"] = createExportWrapper("sqlite3_db_filename");

var _sqlite3_db_readonly = Module["_sqlite3_db_readonly"] = createExportWrapper("sqlite3_db_readonly");

var _sqlite3_compileoption_used = Module["_sqlite3_compileoption_used"] = createExportWrapper("sqlite3_compileoption_used");

var _sqlite3_compileoption_get = Module["_sqlite3_compileoption_get"] = createExportWrapper("sqlite3_compileoption_get");

var _sqlite3_rtree_geometry_callback = Module["_sqlite3_rtree_geometry_callback"] = createExportWrapper("sqlite3_rtree_geometry_callback");

var _sqlite3_rtree_query_callback = Module["_sqlite3_rtree_query_callback"] = createExportWrapper("sqlite3_rtree_query_callback");

var _sqlite3_sourceid = Module["_sqlite3_sourceid"] = createExportWrapper("sqlite3_sourceid");

var _pthread_mutexattr_init = Module["_pthread_mutexattr_init"] = createExportWrapper("pthread_mutexattr_init");

var _pthread_mutexattr_settype = Module["_pthread_mutexattr_settype"] = createExportWrapper("pthread_mutexattr_settype");

var _pthread_mutex_init = Module["_pthread_mutex_init"] = createExportWrapper("pthread_mutex_init");

var _pthread_mutexattr_destroy = Module["_pthread_mutexattr_destroy"] = createExportWrapper("pthread_mutexattr_destroy");

var _pthread_mutex_destroy = Module["_pthread_mutex_destroy"] = createExportWrapper("pthread_mutex_destroy");

var _pthread_mutex_lock = Module["_pthread_mutex_lock"] = createExportWrapper("pthread_mutex_lock");

var _pthread_mutex_trylock = Module["_pthread_mutex_trylock"] = createExportWrapper("pthread_mutex_trylock");

var _pthread_mutex_unlock = Module["_pthread_mutex_unlock"] = createExportWrapper("pthread_mutex_unlock");

var _utimes = Module["_utimes"] = createExportWrapper("utimes");

var _pthread_join = Module["_pthread_join"] = createExportWrapper("pthread_join");

var ___floatditf = Module["___floatditf"] = createExportWrapper("__floatditf");

var _pthread_create = Module["_pthread_create"] = createExportWrapper("pthread_create");

var _posix_fallocate = Module["_posix_fallocate"] = createExportWrapper("posix_fallocate");

var _fchown = Module["_fchown"] = createExportWrapper("fchown");

var _trunc = Module["_trunc"] = createExportWrapper("trunc");

var _sqrt = Module["_sqrt"] = createExportWrapper("sqrt");

var _adler32_z = Module["_adler32_z"] = createExportWrapper("adler32_z");

var _adler32 = Module["_adler32"] = createExportWrapper("adler32");

var _adler32_combine = Module["_adler32_combine"] = createExportWrapper("adler32_combine");

var _adler32_combine64 = Module["_adler32_combine64"] = createExportWrapper("adler32_combine64");

var _get_crc_table = Module["_get_crc_table"] = createExportWrapper("get_crc_table");

var _crc32_z = Module["_crc32_z"] = createExportWrapper("crc32_z");

var _crc32_combine64 = Module["_crc32_combine64"] = createExportWrapper("crc32_combine64");

var _crc32_combine = Module["_crc32_combine"] = createExportWrapper("crc32_combine");

var _crc32_combine_gen64 = Module["_crc32_combine_gen64"] = createExportWrapper("crc32_combine_gen64");

var _crc32_combine_gen = Module["_crc32_combine_gen"] = createExportWrapper("crc32_combine_gen");

var _crc32_combine_op = Module["_crc32_combine_op"] = createExportWrapper("crc32_combine_op");

var _deflateInit_ = Module["_deflateInit_"] = createExportWrapper("deflateInit_");

var _zcalloc = Module["_zcalloc"] = createExportWrapper("zcalloc");

var _zcfree = Module["_zcfree"] = createExportWrapper("zcfree");

var _deflateReset = Module["_deflateReset"] = createExportWrapper("deflateReset");

var _deflateResetKeep = Module["_deflateResetKeep"] = createExportWrapper("deflateResetKeep");

var _deflateSetDictionary = Module["_deflateSetDictionary"] = createExportWrapper("deflateSetDictionary");

var _deflateGetDictionary = Module["_deflateGetDictionary"] = createExportWrapper("deflateGetDictionary");

var __tr_init = Module["__tr_init"] = createExportWrapper("_tr_init");

var _deflateSetHeader = Module["_deflateSetHeader"] = createExportWrapper("deflateSetHeader");

var _deflatePending = Module["_deflatePending"] = createExportWrapper("deflatePending");

var _deflatePrime = Module["_deflatePrime"] = createExportWrapper("deflatePrime");

var __tr_flush_bits = Module["__tr_flush_bits"] = createExportWrapper("_tr_flush_bits");

var _deflateParams = Module["_deflateParams"] = createExportWrapper("deflateParams");

var __tr_align = Module["__tr_align"] = createExportWrapper("_tr_align");

var __tr_stored_block = Module["__tr_stored_block"] = createExportWrapper("_tr_stored_block");

var _deflateTune = Module["_deflateTune"] = createExportWrapper("deflateTune");

var _deflateBound = Module["_deflateBound"] = createExportWrapper("deflateBound");

var __tr_flush_block = Module["__tr_flush_block"] = createExportWrapper("_tr_flush_block");

var _deflateCopy = Module["_deflateCopy"] = createExportWrapper("deflateCopy");

var _gzclose_r = Module["_gzclose_r"] = createExportWrapper("gzclose_r");

var _gzclose_w = Module["_gzclose_w"] = createExportWrapper("gzclose_w");

var _gzopen64 = Module["_gzopen64"] = createExportWrapper("gzopen64");

var _gzbuffer = Module["_gzbuffer"] = createExportWrapper("gzbuffer");

var _gzrewind = Module["_gzrewind"] = createExportWrapper("gzrewind");

var _gzseek64 = Module["_gzseek64"] = createExportWrapper("gzseek64");

var _gz_error = Module["_gz_error"] = createExportWrapper("gz_error");

var _gzseek = Module["_gzseek"] = createExportWrapper("gzseek");

var _gztell64 = Module["_gztell64"] = createExportWrapper("gztell64");

var _gztell = Module["_gztell"] = createExportWrapper("gztell");

var _gzoffset64 = Module["_gzoffset64"] = createExportWrapper("gzoffset64");

var _gzoffset = Module["_gzoffset"] = createExportWrapper("gzoffset");

var _gzeof = Module["_gzeof"] = createExportWrapper("gzeof");

var _gzerror = Module["_gzerror"] = createExportWrapper("gzerror");

var _gzclearerr = Module["_gzclearerr"] = createExportWrapper("gzclearerr");

var _gzfread = Module["_gzfread"] = createExportWrapper("gzfread");

var _gzgetc = Module["_gzgetc"] = createExportWrapper("gzgetc");

var _gzgetc_ = Module["_gzgetc_"] = createExportWrapper("gzgetc_");

var _gzungetc = Module["_gzungetc"] = createExportWrapper("gzungetc");

var _gzgets = Module["_gzgets"] = createExportWrapper("gzgets");

var _inflateReset = Module["_inflateReset"] = createExportWrapper("inflateReset");

var _gzfwrite = Module["_gzfwrite"] = createExportWrapper("gzfwrite");

var _gzputc = Module["_gzputc"] = createExportWrapper("gzputc");

var _gzputs = Module["_gzputs"] = createExportWrapper("gzputs");

var _gzvprintf = Module["_gzvprintf"] = createExportWrapper("gzvprintf");

var _gzprintf = Module["_gzprintf"] = createExportWrapper("gzprintf");

var _gzflush = Module["_gzflush"] = createExportWrapper("gzflush");

var _gzsetparams = Module["_gzsetparams"] = createExportWrapper("gzsetparams");

var _inflate_fast = Module["_inflate_fast"] = createExportWrapper("inflate_fast");

var _inflateResetKeep = Module["_inflateResetKeep"] = createExportWrapper("inflateResetKeep");

var _inflateReset2 = Module["_inflateReset2"] = createExportWrapper("inflateReset2");

var _inflateInit_ = Module["_inflateInit_"] = createExportWrapper("inflateInit_");

var _inflatePrime = Module["_inflatePrime"] = createExportWrapper("inflatePrime");

var _inflate_table = Module["_inflate_table"] = createExportWrapper("inflate_table");

var _inflateGetDictionary = Module["_inflateGetDictionary"] = createExportWrapper("inflateGetDictionary");

var _inflateSetDictionary = Module["_inflateSetDictionary"] = createExportWrapper("inflateSetDictionary");

var _inflateGetHeader = Module["_inflateGetHeader"] = createExportWrapper("inflateGetHeader");

var _inflateSync = Module["_inflateSync"] = createExportWrapper("inflateSync");

var _inflateSyncPoint = Module["_inflateSyncPoint"] = createExportWrapper("inflateSyncPoint");

var _inflateCopy = Module["_inflateCopy"] = createExportWrapper("inflateCopy");

var _inflateUndermine = Module["_inflateUndermine"] = createExportWrapper("inflateUndermine");

var _inflateValidate = Module["_inflateValidate"] = createExportWrapper("inflateValidate");

var _inflateMark = Module["_inflateMark"] = createExportWrapper("inflateMark");

var _inflateCodesUsed = Module["_inflateCodesUsed"] = createExportWrapper("inflateCodesUsed");

var __tr_tally = Module["__tr_tally"] = createExportWrapper("_tr_tally");

var _zlibVersion = Module["_zlibVersion"] = createExportWrapper("zlibVersion");

var _zlibCompileFlags = Module["_zlibCompileFlags"] = createExportWrapper("zlibCompileFlags");

var _waitid = Module["_waitid"] = createExportWrapper("waitid");

var _times = Module["_times"] = createExportWrapper("times");

var _getdate = Module["_getdate"] = createExportWrapper("getdate");

var _stime = Module["_stime"] = createExportWrapper("stime");

var _clock_getcpuclockid = Module["_clock_getcpuclockid"] = createExportWrapper("clock_getcpuclockid");

var _getpwnam_r = Module["_getpwnam_r"] = createExportWrapper("getpwnam_r");

var _getpwuid_r = Module["_getpwuid_r"] = createExportWrapper("getpwuid_r");

var _setpwent = Module["_setpwent"] = createExportWrapper("setpwent");

var _endpwent = Module["_endpwent"] = createExportWrapper("endpwent");

var _getpwent = Module["_getpwent"] = createExportWrapper("getpwent");

var _getgrgid = Module["_getgrgid"] = createExportWrapper("getgrgid");

var _getgrnam_r = Module["_getgrnam_r"] = createExportWrapper("getgrnam_r");

var _getgrgid_r = Module["_getgrgid_r"] = createExportWrapper("getgrgid_r");

var _getgrent = Module["_getgrent"] = createExportWrapper("getgrent");

var _endgrent = Module["_endgrent"] = createExportWrapper("endgrent");

var _setgrent = Module["_setgrent"] = createExportWrapper("setgrent");

var _execve = Module["_execve"] = createExportWrapper("execve");

var _vfork = Module["_vfork"] = createExportWrapper("vfork");

var _posix_spawn = Module["_posix_spawn"] = createExportWrapper("posix_spawn");

var _setgroups = Module["_setgroups"] = createExportWrapper("setgroups");

var _sigaltstack = Module["_sigaltstack"] = createExportWrapper("sigaltstack");

var ___dlsym = Module["___dlsym"] = createExportWrapper("__dlsym");

var ___syscall_uname = Module["___syscall_uname"] = createExportWrapper("__syscall_uname");

var ___syscall_setpgid = Module["___syscall_setpgid"] = createExportWrapper("__syscall_setpgid");

var ___syscall_sync = Module["___syscall_sync"] = createExportWrapper("__syscall_sync");

var ___syscall_getsid = Module["___syscall_getsid"] = createExportWrapper("__syscall_getsid");

var ___syscall_getpgid = Module["___syscall_getpgid"] = createExportWrapper("__syscall_getpgid");

var ___syscall_getpid = Module["___syscall_getpid"] = createExportWrapper("__syscall_getpid");

var ___syscall_getppid = Module["___syscall_getppid"] = createExportWrapper("__syscall_getppid");

var ___syscall_linkat = Module["___syscall_linkat"] = createExportWrapper("__syscall_linkat");

var ___syscall_getgroups32 = Module["___syscall_getgroups32"] = createExportWrapper("__syscall_getgroups32");

var ___syscall_setsid = Module["___syscall_setsid"] = createExportWrapper("__syscall_setsid");

var ___syscall_umask = Module["___syscall_umask"] = createExportWrapper("__syscall_umask");

var ___syscall_setrlimit = Module["___syscall_setrlimit"] = createExportWrapper("__syscall_setrlimit");

var ___syscall_getrusage = Module["___syscall_getrusage"] = createExportWrapper("__syscall_getrusage");

var ___syscall_getpriority = Module["___syscall_getpriority"] = createExportWrapper("__syscall_getpriority");

var ___syscall_setpriority = Module["___syscall_setpriority"] = createExportWrapper("__syscall_setpriority");

var ___syscall_setdomainname = Module["___syscall_setdomainname"] = createExportWrapper("__syscall_setdomainname");

var ___syscall_getuid32 = Module["___syscall_getuid32"] = createExportWrapper("__syscall_getuid32");

var ___syscall_getgid32 = Module["___syscall_getgid32"] = createExportWrapper("__syscall_getgid32");

var ___syscall_geteuid32 = Module["___syscall_geteuid32"] = createExportWrapper("__syscall_geteuid32");

var ___syscall_getegid32 = Module["___syscall_getegid32"] = createExportWrapper("__syscall_getegid32");

var ___syscall_getresuid32 = Module["___syscall_getresuid32"] = createExportWrapper("__syscall_getresuid32");

var ___syscall_getresgid32 = Module["___syscall_getresgid32"] = createExportWrapper("__syscall_getresgid32");

var ___syscall_pause = Module["___syscall_pause"] = createExportWrapper("__syscall_pause");

var ___syscall_madvise = Module["___syscall_madvise"] = createExportWrapper("__syscall_madvise");

var ___syscall_mlock = Module["___syscall_mlock"] = createExportWrapper("__syscall_mlock");

var ___syscall_munlock = Module["___syscall_munlock"] = createExportWrapper("__syscall_munlock");

var ___syscall_mprotect = Module["___syscall_mprotect"] = createExportWrapper("__syscall_mprotect");

var ___syscall_mremap = Module["___syscall_mremap"] = createExportWrapper("__syscall_mremap");

var ___syscall_mlockall = Module["___syscall_mlockall"] = createExportWrapper("__syscall_mlockall");

var ___syscall_munlockall = Module["___syscall_munlockall"] = createExportWrapper("__syscall_munlockall");

var ___syscall_prlimit64 = Module["___syscall_prlimit64"] = createExportWrapper("__syscall_prlimit64");

var ___syscall_ugetrlimit = Module["___syscall_ugetrlimit"] = createExportWrapper("__syscall_ugetrlimit");

var ___syscall_setsockopt = Module["___syscall_setsockopt"] = createExportWrapper("__syscall_setsockopt");

var ___syscall_acct = Module["___syscall_acct"] = createExportWrapper("__syscall_acct");

var ___syscall_mincore = Module["___syscall_mincore"] = createExportWrapper("__syscall_mincore");

var ___syscall_pipe2 = Module["___syscall_pipe2"] = createExportWrapper("__syscall_pipe2");

var ___syscall_pselect6 = Module["___syscall_pselect6"] = createExportWrapper("__syscall_pselect6");

var ___syscall_recvmmsg = Module["___syscall_recvmmsg"] = createExportWrapper("__syscall_recvmmsg");

var ___syscall_sendmmsg = Module["___syscall_sendmmsg"] = createExportWrapper("__syscall_sendmmsg");

var ___syscall_shutdown = Module["___syscall_shutdown"] = createExportWrapper("__syscall_shutdown");

var ___syscall_socketpair = Module["___syscall_socketpair"] = createExportWrapper("__syscall_socketpair");

var ___syscall_wait4 = Module["___syscall_wait4"] = createExportWrapper("__syscall_wait4");

var __Exit = Module["__Exit"] = createExportWrapper("_Exit");

var ___get_tp = Module["___get_tp"] = createExportWrapper("__get_tp");

var ___emscripten_environ_constructor = Module["___emscripten_environ_constructor"] = createExportWrapper("__emscripten_environ_constructor");

var _emscripten_builtin_malloc = Module["_emscripten_builtin_malloc"] = createExportWrapper("emscripten_builtin_malloc");

var ___fmodeflags = Module["___fmodeflags"] = createExportWrapper("__fmodeflags");

var ___mo_lookup = Module["___mo_lookup"] = createExportWrapper("__mo_lookup");

var ___overflow = Module["___overflow"] = createExportWrapper("__overflow");

var ___randname = Module["___randname"] = createExportWrapper("__randname");

var ___wasi_syscall_ret = Module["___wasi_syscall_ret"] = createExportWrapper("__wasi_syscall_ret");

var ___uflow = Module["___uflow"] = createExportWrapper("__uflow");

var _alphasort64 = Module["_alphasort64"] = createExportWrapper("alphasort64");

var ___nl_langinfo_l = Module["___nl_langinfo_l"] = createExportWrapper("__nl_langinfo_l");

var _fabs = Module["_fabs"] = createExportWrapper("fabs");

var _clearerr_unlocked = Module["_clearerr_unlocked"] = createExportWrapper("clearerr_unlocked");

var _clock_nanosleep = Module["_clock_nanosleep"] = createExportWrapper("clock_nanosleep");

var _copysignl = Module["_copysignl"] = createExportWrapper("copysignl");

var _scalbn = Module["_scalbn"] = createExportWrapper("scalbn");

var _floor = Module["_floor"] = createExportWrapper("floor");

var _creat64 = Module["_creat64"] = createExportWrapper("creat64");

var ___lock = Module["___lock"] = createExportWrapper("__lock");

var ___unlock = Module["___unlock"] = createExportWrapper("__unlock");

var ___libc_free = Module["___libc_free"] = createExportWrapper("__libc_free");

var ___libc_malloc = Module["___libc_malloc"] = createExportWrapper("__libc_malloc");

var _dprintf = Module["_dprintf"] = createExportWrapper("dprintf");

var ___wasi_fd_is_valid = Module["___wasi_fd_is_valid"] = createExportWrapper("__wasi_fd_is_valid");

var _emscripten_get_heap_size = Module["_emscripten_get_heap_size"] = createExportWrapper("emscripten_get_heap_size");

var _emscripten_builtin_memcpy = Module["_emscripten_builtin_memcpy"] = createExportWrapper("emscripten_builtin_memcpy");

var ___memset = Module["___memset"] = createExportWrapper("__memset");

var _emscripten_builtin_memset = Module["_emscripten_builtin_memset"] = createExportWrapper("emscripten_builtin_memset");

var ___syscall_munmap = Module["___syscall_munmap"] = createExportWrapper("__syscall_munmap");

var ___syscall_msync = Module["___syscall_msync"] = createExportWrapper("__syscall_msync");

var ___syscall_mmap2 = Module["___syscall_mmap2"] = createExportWrapper("__syscall_mmap2");

var ___clock = Module["___clock"] = createExportWrapper("__clock");

var ___time = Module["___time"] = createExportWrapper("__time");

var ___clock_getres = Module["___clock_getres"] = createExportWrapper("__clock_getres");

var ___gettimeofday = Module["___gettimeofday"] = createExportWrapper("__gettimeofday");

var _dysize = Module["_dysize"] = createExportWrapper("dysize");

var _clock = Module["_clock"] = createExportWrapper("clock");

var _clock_getres = Module["_clock_getres"] = createExportWrapper("clock_getres");

var _execv = Module["_execv"] = createExportWrapper("execv");

var _execvpe = Module["_execvpe"] = createExportWrapper("execvpe");

var _fabsl = Module["_fabsl"] = createExportWrapper("fabsl");

var _feof_unlocked = Module["_feof_unlocked"] = createExportWrapper("feof_unlocked");

var __IO_feof_unlocked = Module["__IO_feof_unlocked"] = createExportWrapper("_IO_feof_unlocked");

var _ferror_unlocked = Module["_ferror_unlocked"] = createExportWrapper("ferror_unlocked");

var __IO_ferror_unlocked = Module["__IO_ferror_unlocked"] = createExportWrapper("_IO_ferror_unlocked");

var _fflush_unlocked = Module["_fflush_unlocked"] = createExportWrapper("fflush_unlocked");

var _emscripten_futex_wake = Module["_emscripten_futex_wake"] = createExportWrapper("emscripten_futex_wake");

var _fgets = Module["_fgets"] = createExportWrapper("fgets");

var _fgets_unlocked = Module["_fgets_unlocked"] = createExportWrapper("fgets_unlocked");

var _fileno_unlocked = Module["_fileno_unlocked"] = createExportWrapper("fileno_unlocked");

var _fmodl = Module["_fmodl"] = createExportWrapper("fmodl");

var _mbtowc = Module["_mbtowc"] = createExportWrapper("mbtowc");

var _towupper = Module["_towupper"] = createExportWrapper("towupper");

var _towlower = Module["_towlower"] = createExportWrapper("towlower");

var _wctype = Module["_wctype"] = createExportWrapper("wctype");

var _iswctype = Module["_iswctype"] = createExportWrapper("iswctype");

var _fopen64 = Module["_fopen64"] = createExportWrapper("fopen64");

var _vfiprintf = Module["_vfiprintf"] = createExportWrapper("vfiprintf");

var ___small_vfprintf = Module["___small_vfprintf"] = createExportWrapper("__small_vfprintf");

var _fputs_unlocked = Module["_fputs_unlocked"] = createExportWrapper("fputs_unlocked");

var _fread_unlocked = Module["_fread_unlocked"] = createExportWrapper("fread_unlocked");

var _frexp = Module["_frexp"] = createExportWrapper("frexp");

var _fseeko64 = Module["_fseeko64"] = createExportWrapper("fseeko64");

var _fstatat = Module["_fstatat"] = createExportWrapper("fstatat");

var _fstat64 = Module["_fstat64"] = createExportWrapper("fstat64");

var _fstatat64 = Module["_fstatat64"] = createExportWrapper("fstatat64");

var _ftello64 = Module["_ftello64"] = createExportWrapper("ftello64");

var _ftruncate64 = Module["_ftruncate64"] = createExportWrapper("ftruncate64");

var _futimesat = Module["_futimesat"] = createExportWrapper("futimesat");

var _fwrite_unlocked = Module["_fwrite_unlocked"] = createExportWrapper("fwrite_unlocked");

var __IO_getc = Module["__IO_getc"] = createExportWrapper("_IO_getc");

var _getpriority = Module["_getpriority"] = createExportWrapper("getpriority");

var _getservbyname_r = Module["_getservbyname_r"] = createExportWrapper("getservbyname_r");

var _getservbyport_r = Module["_getservbyport_r"] = createExportWrapper("getservbyport_r");

var _glob64 = Module["_glob64"] = createExportWrapper("glob64");

var _globfree64 = Module["_globfree64"] = createExportWrapper("globfree64");

var _wctomb = Module["_wctomb"] = createExportWrapper("wctomb");

var _strspn = Module["_strspn"] = createExportWrapper("strspn");

var ___intscan = Module["___intscan"] = createExportWrapper("__intscan");

var _ioctl = Module["_ioctl"] = createExportWrapper("ioctl");

var ___isalnum_l = Module["___isalnum_l"] = createExportWrapper("__isalnum_l");

var _isalnum_l = Module["_isalnum_l"] = createExportWrapper("isalnum_l");

var ___isalpha_l = Module["___isalpha_l"] = createExportWrapper("__isalpha_l");

var _isalpha_l = Module["_isalpha_l"] = createExportWrapper("isalpha_l");

var _isblank = Module["_isblank"] = createExportWrapper("isblank");

var ___isblank_l = Module["___isblank_l"] = createExportWrapper("__isblank_l");

var _isblank_l = Module["_isblank_l"] = createExportWrapper("isblank_l");

var ___iscntrl_l = Module["___iscntrl_l"] = createExportWrapper("__iscntrl_l");

var _iscntrl_l = Module["_iscntrl_l"] = createExportWrapper("iscntrl_l");

var ___isdigit_l = Module["___isdigit_l"] = createExportWrapper("__isdigit_l");

var _isdigit_l = Module["_isdigit_l"] = createExportWrapper("isdigit_l");

var ___isgraph_l = Module["___isgraph_l"] = createExportWrapper("__isgraph_l");

var _isgraph_l = Module["_isgraph_l"] = createExportWrapper("isgraph_l");

var ___islower_l = Module["___islower_l"] = createExportWrapper("__islower_l");

var _islower_l = Module["_islower_l"] = createExportWrapper("islower_l");

var ___isprint_l = Module["___isprint_l"] = createExportWrapper("__isprint_l");

var _isprint_l = Module["_isprint_l"] = createExportWrapper("isprint_l");

var ___ispunct_l = Module["___ispunct_l"] = createExportWrapper("__ispunct_l");

var _ispunct_l = Module["_ispunct_l"] = createExportWrapper("ispunct_l");

var ___isspace_l = Module["___isspace_l"] = createExportWrapper("__isspace_l");

var _isspace_l = Module["_isspace_l"] = createExportWrapper("isspace_l");

var ___isupper_l = Module["___isupper_l"] = createExportWrapper("__isupper_l");

var _isupper_l = Module["_isupper_l"] = createExportWrapper("isupper_l");

var _iswalnum = Module["_iswalnum"] = createExportWrapper("iswalnum");

var ___iswalnum_l = Module["___iswalnum_l"] = createExportWrapper("__iswalnum_l");

var _iswalnum_l = Module["_iswalnum_l"] = createExportWrapper("iswalnum_l");

var _iswalpha = Module["_iswalpha"] = createExportWrapper("iswalpha");

var ___iswalpha_l = Module["___iswalpha_l"] = createExportWrapper("__iswalpha_l");

var _iswalpha_l = Module["_iswalpha_l"] = createExportWrapper("iswalpha_l");

var _iswblank = Module["_iswblank"] = createExportWrapper("iswblank");

var ___iswblank_l = Module["___iswblank_l"] = createExportWrapper("__iswblank_l");

var _iswblank_l = Module["_iswblank_l"] = createExportWrapper("iswblank_l");

var _iswcntrl = Module["_iswcntrl"] = createExportWrapper("iswcntrl");

var ___iswcntrl_l = Module["___iswcntrl_l"] = createExportWrapper("__iswcntrl_l");

var _iswcntrl_l = Module["_iswcntrl_l"] = createExportWrapper("iswcntrl_l");

var _iswdigit = Module["_iswdigit"] = createExportWrapper("iswdigit");

var _iswgraph = Module["_iswgraph"] = createExportWrapper("iswgraph");

var _iswlower = Module["_iswlower"] = createExportWrapper("iswlower");

var _iswprint = Module["_iswprint"] = createExportWrapper("iswprint");

var _iswpunct = Module["_iswpunct"] = createExportWrapper("iswpunct");

var _iswspace = Module["_iswspace"] = createExportWrapper("iswspace");

var _iswupper = Module["_iswupper"] = createExportWrapper("iswupper");

var _iswxdigit = Module["_iswxdigit"] = createExportWrapper("iswxdigit");

var ___iswctype_l = Module["___iswctype_l"] = createExportWrapper("__iswctype_l");

var ___wctype_l = Module["___wctype_l"] = createExportWrapper("__wctype_l");

var _iswctype_l = Module["_iswctype_l"] = createExportWrapper("iswctype_l");

var _wctype_l = Module["_wctype_l"] = createExportWrapper("wctype_l");

var ___iswdigit_l = Module["___iswdigit_l"] = createExportWrapper("__iswdigit_l");

var _iswdigit_l = Module["_iswdigit_l"] = createExportWrapper("iswdigit_l");

var ___iswgraph_l = Module["___iswgraph_l"] = createExportWrapper("__iswgraph_l");

var _iswgraph_l = Module["_iswgraph_l"] = createExportWrapper("iswgraph_l");

var ___iswlower_l = Module["___iswlower_l"] = createExportWrapper("__iswlower_l");

var _iswlower_l = Module["_iswlower_l"] = createExportWrapper("iswlower_l");

var ___iswprint_l = Module["___iswprint_l"] = createExportWrapper("__iswprint_l");

var _iswprint_l = Module["_iswprint_l"] = createExportWrapper("iswprint_l");

var ___iswpunct_l = Module["___iswpunct_l"] = createExportWrapper("__iswpunct_l");

var _iswpunct_l = Module["_iswpunct_l"] = createExportWrapper("iswpunct_l");

var _wcschr = Module["_wcschr"] = createExportWrapper("wcschr");

var ___iswspace_l = Module["___iswspace_l"] = createExportWrapper("__iswspace_l");

var _iswspace_l = Module["_iswspace_l"] = createExportWrapper("iswspace_l");

var ___iswupper_l = Module["___iswupper_l"] = createExportWrapper("__iswupper_l");

var _iswupper_l = Module["_iswupper_l"] = createExportWrapper("iswupper_l");

var ___iswxdigit_l = Module["___iswxdigit_l"] = createExportWrapper("__iswxdigit_l");

var _iswxdigit_l = Module["_iswxdigit_l"] = createExportWrapper("iswxdigit_l");

var ___isxdigit_l = Module["___isxdigit_l"] = createExportWrapper("__isxdigit_l");

var _isxdigit_l = Module["_isxdigit_l"] = createExportWrapper("isxdigit_l");

var _raise = Module["_raise"] = createExportWrapper("raise");

var ___nl_langinfo = Module["___nl_langinfo"] = createExportWrapper("__nl_langinfo");

var _nl_langinfo_l = Module["_nl_langinfo_l"] = createExportWrapper("nl_langinfo_l");

var _emscripten_has_threading_support = Module["_emscripten_has_threading_support"] = createExportWrapper("emscripten_has_threading_support");

var _emscripten_num_logical_cores = Module["_emscripten_num_logical_cores"] = createExportWrapper("emscripten_num_logical_cores");

var _emscripten_force_num_logical_cores = Module["_emscripten_force_num_logical_cores"] = createExportWrapper("emscripten_force_num_logical_cores");

var _emscripten_futex_wait = Module["_emscripten_futex_wait"] = createExportWrapper("emscripten_futex_wait");

var _emscripten_is_main_runtime_thread = Module["_emscripten_is_main_runtime_thread"] = createExportWrapper("emscripten_is_main_runtime_thread");

var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = createExportWrapper("emscripten_main_thread_process_queued_calls");

var _emscripten_current_thread_process_queued_calls = Module["_emscripten_current_thread_process_queued_calls"] = createExportWrapper("emscripten_current_thread_process_queued_calls");

var __emscripten_yield = Module["__emscripten_yield"] = createExportWrapper("_emscripten_yield");

var __emscripten_check_timers = Module["__emscripten_check_timers"] = createExportWrapper("_emscripten_check_timers");

var _pthread_mutex_consistent = Module["_pthread_mutex_consistent"] = createExportWrapper("pthread_mutex_consistent");

var _pthread_barrier_init = Module["_pthread_barrier_init"] = createExportWrapper("pthread_barrier_init");

var _pthread_barrier_destroy = Module["_pthread_barrier_destroy"] = createExportWrapper("pthread_barrier_destroy");

var _pthread_barrier_wait = Module["_pthread_barrier_wait"] = createExportWrapper("pthread_barrier_wait");

var _pthread_getspecific = Module["_pthread_getspecific"] = createExportWrapper("pthread_getspecific");

var _pthread_setspecific = Module["_pthread_setspecific"] = createExportWrapper("pthread_setspecific");

var _pthread_cond_wait = Module["_pthread_cond_wait"] = createExportWrapper("pthread_cond_wait");

var _pthread_cond_signal = Module["_pthread_cond_signal"] = createExportWrapper("pthread_cond_signal");

var _pthread_cond_broadcast = Module["_pthread_cond_broadcast"] = createExportWrapper("pthread_cond_broadcast");

var _pthread_cond_init = Module["_pthread_cond_init"] = createExportWrapper("pthread_cond_init");

var _pthread_cond_destroy = Module["_pthread_cond_destroy"] = createExportWrapper("pthread_cond_destroy");

var _pthread_atfork = Module["_pthread_atfork"] = createExportWrapper("pthread_atfork");

var _pthread_cancel = Module["_pthread_cancel"] = createExportWrapper("pthread_cancel");

var _pthread_testcancel = Module["_pthread_testcancel"] = createExportWrapper("pthread_testcancel");

var ___pthread_detach = Module["___pthread_detach"] = createExportWrapper("__pthread_detach");

var _pthread_equal = Module["_pthread_equal"] = createExportWrapper("pthread_equal");

var _pthread_mutexattr_setprotocol = Module["_pthread_mutexattr_setprotocol"] = createExportWrapper("pthread_mutexattr_setprotocol");

var _pthread_mutexattr_setpshared = Module["_pthread_mutexattr_setpshared"] = createExportWrapper("pthread_mutexattr_setpshared");

var _pthread_condattr_init = Module["_pthread_condattr_init"] = createExportWrapper("pthread_condattr_init");

var _pthread_condattr_destroy = Module["_pthread_condattr_destroy"] = createExportWrapper("pthread_condattr_destroy");

var _pthread_condattr_setclock = Module["_pthread_condattr_setclock"] = createExportWrapper("pthread_condattr_setclock");

var _pthread_condattr_setpshared = Module["_pthread_condattr_setpshared"] = createExportWrapper("pthread_condattr_setpshared");

var _pthread_getattr_np = Module["_pthread_getattr_np"] = createExportWrapper("pthread_getattr_np");

var _pthread_setcancelstate = Module["_pthread_setcancelstate"] = createExportWrapper("pthread_setcancelstate");

var _pthread_setcanceltype = Module["_pthread_setcanceltype"] = createExportWrapper("pthread_setcanceltype");

var _pthread_rwlock_init = Module["_pthread_rwlock_init"] = createExportWrapper("pthread_rwlock_init");

var _pthread_rwlock_destroy = Module["_pthread_rwlock_destroy"] = createExportWrapper("pthread_rwlock_destroy");

var _pthread_rwlock_rdlock = Module["_pthread_rwlock_rdlock"] = createExportWrapper("pthread_rwlock_rdlock");

var _pthread_rwlock_tryrdlock = Module["_pthread_rwlock_tryrdlock"] = createExportWrapper("pthread_rwlock_tryrdlock");

var _pthread_rwlock_timedrdlock = Module["_pthread_rwlock_timedrdlock"] = createExportWrapper("pthread_rwlock_timedrdlock");

var _pthread_rwlock_wrlock = Module["_pthread_rwlock_wrlock"] = createExportWrapper("pthread_rwlock_wrlock");

var _pthread_rwlock_trywrlock = Module["_pthread_rwlock_trywrlock"] = createExportWrapper("pthread_rwlock_trywrlock");

var _pthread_rwlock_timedwrlock = Module["_pthread_rwlock_timedwrlock"] = createExportWrapper("pthread_rwlock_timedwrlock");

var _pthread_rwlock_unlock = Module["_pthread_rwlock_unlock"] = createExportWrapper("pthread_rwlock_unlock");

var _pthread_rwlockattr_init = Module["_pthread_rwlockattr_init"] = createExportWrapper("pthread_rwlockattr_init");

var _pthread_rwlockattr_destroy = Module["_pthread_rwlockattr_destroy"] = createExportWrapper("pthread_rwlockattr_destroy");

var _pthread_rwlockattr_setpshared = Module["_pthread_rwlockattr_setpshared"] = createExportWrapper("pthread_rwlockattr_setpshared");

var _pthread_spin_init = Module["_pthread_spin_init"] = createExportWrapper("pthread_spin_init");

var _pthread_spin_destroy = Module["_pthread_spin_destroy"] = createExportWrapper("pthread_spin_destroy");

var _pthread_spin_lock = Module["_pthread_spin_lock"] = createExportWrapper("pthread_spin_lock");

var _pthread_spin_trylock = Module["_pthread_spin_trylock"] = createExportWrapper("pthread_spin_trylock");

var _pthread_spin_unlock = Module["_pthread_spin_unlock"] = createExportWrapper("pthread_spin_unlock");

var _sem_init = Module["_sem_init"] = createExportWrapper("sem_init");

var _sem_post = Module["_sem_post"] = createExportWrapper("sem_post");

var _sem_wait = Module["_sem_wait"] = createExportWrapper("sem_wait");

var _sem_trywait = Module["_sem_trywait"] = createExportWrapper("sem_trywait");

var _sem_destroy = Module["_sem_destroy"] = createExportWrapper("sem_destroy");

var _emscripten_thread_sleep = Module["_emscripten_thread_sleep"] = createExportWrapper("emscripten_thread_sleep");

var _pthread_mutex_timedlock = Module["_pthread_mutex_timedlock"] = createExportWrapper("pthread_mutex_timedlock");

var _emscripten_builtin_pthread_create = Module["_emscripten_builtin_pthread_create"] = createExportWrapper("emscripten_builtin_pthread_create");

var _emscripten_builtin_pthread_join = Module["_emscripten_builtin_pthread_join"] = createExportWrapper("emscripten_builtin_pthread_join");

var _pthread_key_delete = Module["_pthread_key_delete"] = createExportWrapper("pthread_key_delete");

var _pthread_key_create = Module["_pthread_key_create"] = createExportWrapper("pthread_key_create");

var _pthread_once = Module["_pthread_once"] = createExportWrapper("pthread_once");

var _pthread_cond_timedwait = Module["_pthread_cond_timedwait"] = createExportWrapper("pthread_cond_timedwait");

var _pthread_exit = Module["_pthread_exit"] = createExportWrapper("pthread_exit");

var _emscripten_builtin_pthread_detach = Module["_emscripten_builtin_pthread_detach"] = createExportWrapper("emscripten_builtin_pthread_detach");

var _pthread_detach = Module["_pthread_detach"] = createExportWrapper("pthread_detach");

var _thrd_detach = Module["_thrd_detach"] = createExportWrapper("thrd_detach");

var _lseek64 = Module["_lseek64"] = createExportWrapper("lseek64");

var _lstat64 = Module["_lstat64"] = createExportWrapper("lstat64");

var _mbsinit = Module["_mbsinit"] = createExportWrapper("mbsinit");

var _mkostemps = Module["_mkostemps"] = createExportWrapper("mkostemps");

var _mkostemps64 = Module["_mkostemps64"] = createExportWrapper("mkostemps64");

var _mkstemp64 = Module["_mkstemp64"] = createExportWrapper("mkstemp64");

var _timegm = Module["_timegm"] = createExportWrapper("timegm");

var _emscripten_builtin_free = Module["_emscripten_builtin_free"] = createExportWrapper("emscripten_builtin_free");

var _emscripten_builtin_memalign = createExportWrapper("emscripten_builtin_memalign");

var _emscripten_builtin_mmap = Module["_emscripten_builtin_mmap"] = createExportWrapper("emscripten_builtin_mmap");

var _mmap64 = Module["_mmap64"] = createExportWrapper("mmap64");

var _emscripten_builtin_munmap = Module["_emscripten_builtin_munmap"] = createExportWrapper("emscripten_builtin_munmap");

var _setpriority = Module["_setpriority"] = createExportWrapper("setpriority");

var _open64 = Module["_open64"] = createExportWrapper("open64");

var _tcsetattr = Module["_tcsetattr"] = createExportWrapper("tcsetattr");

var _posix_fallocate64 = Module["_posix_fallocate64"] = createExportWrapper("posix_fallocate64");

var _iprintf = Module["_iprintf"] = createExportWrapper("iprintf");

var ___small_printf = Module["___small_printf"] = createExportWrapper("__small_printf");

var _emscripten_main_runtime_thread_id = Module["_emscripten_main_runtime_thread_id"] = createExportWrapper("emscripten_main_runtime_thread_id");

var ___sig_is_blocked = Module["___sig_is_blocked"] = createExportWrapper("__sig_is_blocked");

var _pthread_sigmask = Module["_pthread_sigmask"] = createExportWrapper("pthread_sigmask");

var _sigpending = Module["_sigpending"] = createExportWrapper("sigpending");

var _qsort_r = Module["_qsort_r"] = createExportWrapper("qsort_r");

var _sigismember = Module["_sigismember"] = createExportWrapper("sigismember");

var _sigorset = Module["_sigorset"] = createExportWrapper("sigorset");

var _sigandset = Module["_sigandset"] = createExportWrapper("sigandset");

var _readdir64 = Module["_readdir64"] = createExportWrapper("readdir64");

var _emscripten_get_sbrk_ptr = Module["_emscripten_get_sbrk_ptr"] = createExportWrapper("emscripten_get_sbrk_ptr");

var _sbrk = Module["_sbrk"] = createExportWrapper("sbrk");

var _brk = Module["_brk"] = createExportWrapper("brk");

var _scalbnl = Module["_scalbnl"] = createExportWrapper("scalbnl");

var _scandir64 = Module["_scandir64"] = createExportWrapper("scandir64");

var ___getitimer = Module["___getitimer"] = createExportWrapper("__getitimer");

var __emscripten_timeout = createExportWrapper("_emscripten_timeout");

var _bsd_signal = Module["_bsd_signal"] = createExportWrapper("bsd_signal");

var ___sysv_signal = Module["___sysv_signal"] = createExportWrapper("__sysv_signal");

var _vsprintf = Module["_vsprintf"] = createExportWrapper("vsprintf");

var _vsiprintf = Module["_vsiprintf"] = createExportWrapper("vsiprintf");

var ___small_sprintf = Module["___small_sprintf"] = createExportWrapper("__small_sprintf");

var ___small_vsprintf = Module["___small_vsprintf"] = createExportWrapper("__small_vsprintf");

var _vsscanf = Module["_vsscanf"] = createExportWrapper("vsscanf");

var ___isoc99_sscanf = Module["___isoc99_sscanf"] = createExportWrapper("__isoc99_sscanf");

var _stat64 = Module["_stat64"] = createExportWrapper("stat64");

var _fstatvfs = Module["_fstatvfs"] = createExportWrapper("fstatvfs");

var _statfs = Module["_statfs"] = createExportWrapper("statfs");

var _fstatfs = Module["_fstatfs"] = createExportWrapper("fstatfs");

var _statvfs64 = Module["_statvfs64"] = createExportWrapper("statvfs64");

var _statfs64 = Module["_statfs64"] = createExportWrapper("statfs64");

var _fstatvfs64 = Module["_fstatvfs64"] = createExportWrapper("fstatvfs64");

var _fstatfs64 = Module["_fstatfs64"] = createExportWrapper("fstatfs64");

var _stpcpy = Module["_stpcpy"] = createExportWrapper("stpcpy");

var _stpncpy = Module["_stpncpy"] = createExportWrapper("stpncpy");

var ___strcasecmp_l = Module["___strcasecmp_l"] = createExportWrapper("__strcasecmp_l");

var _strcasecmp_l = Module["_strcasecmp_l"] = createExportWrapper("strcasecmp_l");

var _strchrnul = Module["_strchrnul"] = createExportWrapper("strchrnul");

var ___strcoll_l = Module["___strcoll_l"] = createExportWrapper("__strcoll_l");

var _strcoll_l = Module["_strcoll_l"] = createExportWrapper("strcoll_l");

var ___strerror_l = Module["___strerror_l"] = createExportWrapper("__strerror_l");

var _strerror_l = Module["_strerror_l"] = createExportWrapper("strerror_l");

var ___xpg_strerror_r = Module["___xpg_strerror_r"] = createExportWrapper("__xpg_strerror_r");

var ___strncasecmp_l = Module["___strncasecmp_l"] = createExportWrapper("__strncasecmp_l");

var _strncasecmp_l = Module["_strncasecmp_l"] = createExportWrapper("strncasecmp_l");

var _strtof = Module["_strtof"] = createExportWrapper("strtof");

var ___trunctfsf2 = Module["___trunctfsf2"] = createExportWrapper("__trunctfsf2");

var ___extendsftf2 = Module["___extendsftf2"] = createExportWrapper("__extendsftf2");

var ___netf2 = Module["___netf2"] = createExportWrapper("__netf2");

var ___floatunsitf = Module["___floatunsitf"] = createExportWrapper("__floatunsitf");

var ___eqtf2 = Module["___eqtf2"] = createExportWrapper("__eqtf2");

var ___letf2 = Module["___letf2"] = createExportWrapper("__letf2");

var _strtold = Module["_strtold"] = createExportWrapper("strtold");

var _strtoull = Module["_strtoull"] = createExportWrapper("strtoull");

var _strtoimax = Module["_strtoimax"] = createExportWrapper("strtoimax");

var _strtoumax = Module["_strtoumax"] = createExportWrapper("strtoumax");

var ___strtol_internal = Module["___strtol_internal"] = createExportWrapper("__strtol_internal");

var ___strtoul_internal = Module["___strtoul_internal"] = createExportWrapper("__strtoul_internal");

var ___strtoll_internal = Module["___strtoll_internal"] = createExportWrapper("__strtoll_internal");

var ___strtoull_internal = Module["___strtoull_internal"] = createExportWrapper("__strtoull_internal");

var ___strtoimax_internal = Module["___strtoimax_internal"] = createExportWrapper("__strtoimax_internal");

var ___strtoumax_internal = Module["___strtoumax_internal"] = createExportWrapper("__strtoumax_internal");

var _setlogmask = Module["_setlogmask"] = createExportWrapper("setlogmask");

var _vdprintf = Module["_vdprintf"] = createExportWrapper("vdprintf");

var _vsyslog = Module["_vsyslog"] = createExportWrapper("vsyslog");

var ___tolower_l = Module["___tolower_l"] = createExportWrapper("__tolower_l");

var _tolower_l = Module["_tolower_l"] = createExportWrapper("tolower_l");

var ___toupper_l = Module["___toupper_l"] = createExportWrapper("__toupper_l");

var _toupper_l = Module["_toupper_l"] = createExportWrapper("toupper_l");

var ___towupper_l = Module["___towupper_l"] = createExportWrapper("__towupper_l");

var ___towlower_l = Module["___towlower_l"] = createExportWrapper("__towlower_l");

var _towupper_l = Module["_towupper_l"] = createExportWrapper("towupper_l");

var _towlower_l = Module["_towlower_l"] = createExportWrapper("towlower_l");

var _utimensat = Module["_utimensat"] = createExportWrapper("utimensat");

var ___vfprintf_internal = Module["___vfprintf_internal"] = createExportWrapper("__vfprintf_internal");

var _vfscanf = Module["_vfscanf"] = createExportWrapper("vfscanf");

var ___isoc99_vfscanf = Module["___isoc99_vfscanf"] = createExportWrapper("__isoc99_vfscanf");

var _vsniprintf = Module["_vsniprintf"] = createExportWrapper("vsniprintf");

var ___small_vsnprintf = Module["___small_vsnprintf"] = createExportWrapper("__small_vsnprintf");

var ___isoc99_vsscanf = Module["___isoc99_vsscanf"] = createExportWrapper("__isoc99_vsscanf");

var _wcslen = Module["_wcslen"] = createExportWrapper("wcslen");

var ___libc_calloc = Module["___libc_calloc"] = createExportWrapper("__libc_calloc");

var ___libc_realloc = Module["___libc_realloc"] = createExportWrapper("__libc_realloc");

var _realloc_in_place = Module["_realloc_in_place"] = createExportWrapper("realloc_in_place");

var _memalign = Module["_memalign"] = createExportWrapper("memalign");

var _posix_memalign = Module["_posix_memalign"] = createExportWrapper("posix_memalign");

var _valloc = Module["_valloc"] = createExportWrapper("valloc");

var _pvalloc = Module["_pvalloc"] = createExportWrapper("pvalloc");

var _mallinfo = Module["_mallinfo"] = createExportWrapper("mallinfo");

var _mallopt = Module["_mallopt"] = createExportWrapper("mallopt");

var _malloc_trim = Module["_malloc_trim"] = createExportWrapper("malloc_trim");

var _malloc_usable_size = Module["_malloc_usable_size"] = createExportWrapper("malloc_usable_size");

var _malloc_footprint = Module["_malloc_footprint"] = createExportWrapper("malloc_footprint");

var _malloc_max_footprint = Module["_malloc_max_footprint"] = createExportWrapper("malloc_max_footprint");

var _malloc_footprint_limit = Module["_malloc_footprint_limit"] = createExportWrapper("malloc_footprint_limit");

var _malloc_set_footprint_limit = Module["_malloc_set_footprint_limit"] = createExportWrapper("malloc_set_footprint_limit");

var _independent_calloc = Module["_independent_calloc"] = createExportWrapper("independent_calloc");

var _independent_comalloc = Module["_independent_comalloc"] = createExportWrapper("independent_comalloc");

var _bulk_free = Module["_bulk_free"] = createExportWrapper("bulk_free");

var ___ashlti3 = Module["___ashlti3"] = createExportWrapper("__ashlti3");

var ___lshrti3 = Module["___lshrti3"] = createExportWrapper("__lshrti3");

var ___fe_getround = Module["___fe_getround"] = createExportWrapper("__fe_getround");

var ___fe_raise_inexact = Module["___fe_raise_inexact"] = createExportWrapper("__fe_raise_inexact");

var ___unordtf2 = Module["___unordtf2"] = createExportWrapper("__unordtf2");

var _setThrew = createExportWrapper("setThrew");

var _emscripten_stack_init = function() {
 return (_emscripten_stack_init = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

var _emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = function() {
 return (_emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = Module["asm"]["emscripten_stack_set_limits"]).apply(null, arguments);
};

var _emscripten_stack_get_free = function() {
 return (_emscripten_stack_get_free = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

var _emscripten_stack_get_base = function() {
 return (_emscripten_stack_get_base = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
};

var _emscripten_stack_get_end = function() {
 return (_emscripten_stack_get_end = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

var stackSave = createExportWrapper("stackSave");

var stackRestore = createExportWrapper("stackRestore");

var stackAlloc = createExportWrapper("stackAlloc");

var _emscripten_stack_get_current = function() {
 return (_emscripten_stack_get_current = Module["asm"]["emscripten_stack_get_current"]).apply(null, arguments);
};

var dynCall_iij = Module["dynCall_iij"] = createExportWrapper("dynCall_iij");

var dynCall_jiijii = Module["dynCall_jiijii"] = createExportWrapper("dynCall_jiijii");

var dynCall_viiijii = Module["dynCall_viiijii"] = createExportWrapper("dynCall_viiijii");

var dynCall_vij = Module["dynCall_vij"] = createExportWrapper("dynCall_vij");

var dynCall_ji = Module["dynCall_ji"] = createExportWrapper("dynCall_ji");

var dynCall_jiiji = Module["dynCall_jiiji"] = createExportWrapper("dynCall_jiiji");

var dynCall_jj = Module["dynCall_jj"] = createExportWrapper("dynCall_jj");

var dynCall_iiij = Module["dynCall_iiij"] = createExportWrapper("dynCall_iiij");

var dynCall_jiiiji = Module["dynCall_jiiiji"] = createExportWrapper("dynCall_jiiiji");

var dynCall_jiij = Module["dynCall_jiij"] = createExportWrapper("dynCall_jiij");

var dynCall_iiiji = Module["dynCall_iiiji"] = createExportWrapper("dynCall_iiiji");

var dynCall_jii = Module["dynCall_jii"] = createExportWrapper("dynCall_jii");

var dynCall_ij = Module["dynCall_ij"] = createExportWrapper("dynCall_ij");

var dynCall_iiiij = Module["dynCall_iiiij"] = createExportWrapper("dynCall_iiiij");

var dynCall_vijii = Module["dynCall_vijii"] = createExportWrapper("dynCall_vijii");

var dynCall_iijj = Module["dynCall_iijj"] = createExportWrapper("dynCall_iijj");

var dynCall_iijii = Module["dynCall_iijii"] = createExportWrapper("dynCall_iijii");

var dynCall_iiji = Module["dynCall_iiji"] = createExportWrapper("dynCall_iiji");

var dynCall_iiiiiij = Module["dynCall_iiiiiij"] = createExportWrapper("dynCall_iiiiiij");

var dynCall_iiiiijii = Module["dynCall_iiiiijii"] = createExportWrapper("dynCall_iiiiijii");

var dynCall_j = Module["dynCall_j"] = createExportWrapper("dynCall_j");

var dynCall_iiiiji = Module["dynCall_iiiiji"] = createExportWrapper("dynCall_iiiiji");

var dynCall_iiiijii = Module["dynCall_iiiijii"] = createExportWrapper("dynCall_iiiijii");

var dynCall_viiji = Module["dynCall_viiji"] = createExportWrapper("dynCall_viiji");

var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii");

var dynCall_iiiijji = Module["dynCall_iiiijji"] = createExportWrapper("dynCall_iiiijji");

var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");

var _std_object_handlers = Module["_std_object_handlers"] = 2223856;

var _zend_ce_aggregate = Module["_zend_ce_aggregate"] = 3713120;

var _zend_empty_string = Module["_zend_empty_string"] = 3714420;

var _executor_globals = Module["_executor_globals"] = 3710152;

var _zend_string_init_interned = Module["_zend_string_init_interned"] = 3714476;

var _sapi_module = Module["_sapi_module"] = 3708736;

var _xmlParserVersion = Module["_xmlParserVersion"] = 3591876;

var _xmlFree = Module["_xmlFree"] = 3591856;

var _xmlGenericError = Module["_xmlGenericError"] = 3591896;

var _core_globals = Module["_core_globals"] = 3708184;

var _xmlStructuredError = Module["_xmlStructuredError"] = 3727372;

var _zend_empty_array = Module["_zend_empty_array"] = 2201804;

var _file_globals = Module["_file_globals"] = 3707184;

var _basic_globals = Module["_basic_globals"] = 3697992;

var _pcre_globals = Module["_pcre_globals"] = 3623e3;

var _zend_one_char_string = Module["_zend_one_char_string"] = 3714496;

var _zend_ce_exception = Module["_zend_ce_exception"] = 3713260;

var _empty_fcall_info = Module["_empty_fcall_info"] = 2200544;

var _empty_fcall_info_cache = Module["_empty_fcall_info_cache"] = 2200592;

var _zend_ce_division_by_zero_error = Module["_zend_ce_division_by_zero_error"] = 3713388;

var _dom_node_class_entry = Module["_dom_node_class_entry"] = 3623512;

var _dom_document_class_entry = Module["_dom_document_class_entry"] = 3624116;

var _dom_documenttype_class_entry = Module["_dom_documenttype_class_entry"] = 3624460;

var _dom_element_class_entry = Module["_dom_element_class_entry"] = 3624356;

var _dom_attr_class_entry = Module["_dom_attr_class_entry"] = 3624308;

var _dom_text_class_entry = Module["_dom_text_class_entry"] = 3624404;

var _dom_comment_class_entry = Module["_dom_comment_class_entry"] = 3624452;

var _dom_processinginstruction_class_entry = Module["_dom_processinginstruction_class_entry"] = 3624608;

var _dom_entityreference_class_entry = Module["_dom_entityreference_class_entry"] = 3624604;

var _dom_entity_class_entry = Module["_dom_entity_class_entry"] = 3624556;

var _dom_cdatasection_class_entry = Module["_dom_cdatasection_class_entry"] = 3624456;

var _dom_documentfragment_class_entry = Module["_dom_documentfragment_class_entry"] = 3624068;

var _dom_notation_class_entry = Module["_dom_notation_class_entry"] = 3624508;

var _dom_namespace_node_class_entry = Module["_dom_namespace_node_class_entry"] = 3624020;

var _dom_domexception_class_entry = Module["_dom_domexception_class_entry"] = 3623960;

var _dom_parentnode_class_entry = Module["_dom_parentnode_class_entry"] = 3623964;

var _dom_childnode_class_entry = Module["_dom_childnode_class_entry"] = 3623968;

var _dom_domimplementation_class_entry = Module["_dom_domimplementation_class_entry"] = 3623972;

var _zend_ce_countable = Module["_zend_ce_countable"] = 3713136;

var _dom_nodelist_class_entry = Module["_dom_nodelist_class_entry"] = 3624164;

var _dom_namednodemap_class_entry = Module["_dom_namednodemap_class_entry"] = 3624212;

var _dom_characterdata_class_entry = Module["_dom_characterdata_class_entry"] = 3624260;

var _dom_xpath_class_entry = Module["_dom_xpath_class_entry"] = 3624756;

var _xmlMalloc = Module["_xmlMalloc"] = 3591860;

var _xmlSaveNoEmptyTags = Module["_xmlSaveNoEmptyTags"] = 3727384;

var _xmlLoadExtDtdDefaultValue = Module["_xmlLoadExtDtdDefaultValue"] = 3727340;

var _xmlDoValidityCheckingDefaultValue = Module["_xmlDoValidityCheckingDefaultValue"] = 3727336;

var _xmlGenericErrorContext = Module["_xmlGenericErrorContext"] = 3727376;

var _zend_known_strings = Module["_zend_known_strings"] = 3714424;

var _php_hashcontext_ce = Module["_php_hashcontext_ce"] = 3624940;

var _zend_ce_error = Module["_zend_ce_error"] = 3713376;

var _compiler_globals = Module["_compiler_globals"] = 3709800;

var __libiconv_version = Module["__libiconv_version"] = 3576276;

var _sapi_globals = Module["_sapi_globals"] = 3708880;

var _php_json_serializable_ce = Module["_php_json_serializable_ce"] = 3625100;

var _php_json_exception_ce = Module["_php_json_exception_ce"] = 3625096;

var _json_globals = Module["_json_globals"] = 3625084;

var _php_internal_encoding_changed = Module["_php_internal_encoding_changed"] = 3708600;

var _mbfl_encoding_pass = Module["_mbfl_encoding_pass"] = 1905212;

var _vtbl_pass = Module["_vtbl_pass"] = 1905256;

var _spl_ce_RuntimeException = Module["_spl_ce_RuntimeException"] = 3627628;

var _module_registry = Module["_module_registry"] = 3711384;

var _zend_observer_fcall_op_array_extension = Module["_zend_observer_fcall_op_array_extension"] = 3722212;

var _zend_standard_class_def = Module["_zend_standard_class_def"] = 3711296;

var _random_ce_Random_BrokenRandomEngineError = Module["_random_ce_Random_BrokenRandomEngineError"] = 3625684;

var _php_random_algo_mt19937 = Module["_php_random_algo_mt19937"] = 1913100;

var _random_globals = Module["_random_globals"] = 3625648;

var _php_random_algo_combinedlcg = Module["_php_random_algo_combinedlcg"] = 1913072;

var _random_ce_Random_RandomException = Module["_random_ce_Random_RandomException"] = 3625668;

var _random_ce_Random_Engine = Module["_random_ce_Random_Engine"] = 3625672;

var _random_ce_Random_CryptoSafeEngine = Module["_random_ce_Random_CryptoSafeEngine"] = 3625676;

var _random_ce_Random_RandomError = Module["_random_ce_Random_RandomError"] = 3625680;

var _random_ce_Random_Engine_Mt19937 = Module["_random_ce_Random_Engine_Mt19937"] = 3625688;

var _random_ce_Random_Engine_PcgOneseq128XslRr64 = Module["_random_ce_Random_Engine_PcgOneseq128XslRr64"] = 3625792;

var _random_ce_Random_Engine_Xoshiro256StarStar = Module["_random_ce_Random_Engine_Xoshiro256StarStar"] = 3625896;

var _random_ce_Random_Engine_Secure = Module["_random_ce_Random_Engine_Secure"] = 3626e3;

var _random_ce_Random_Randomizer = Module["_random_ce_Random_Randomizer"] = 3626104;

var _php_random_algo_pcgoneseq128xslrr64 = Module["_php_random_algo_pcgoneseq128xslrr64"] = 1913128;

var _php_random_algo_xoshiro256starstar = Module["_php_random_algo_xoshiro256starstar"] = 1913156;

var _php_random_algo_secure = Module["_php_random_algo_secure"] = 1913248;

var _php_random_algo_user = Module["_php_random_algo_user"] = 1913276;

var _reflection_enum_ptr = Module["_reflection_enum_ptr"] = 3626208;

var _reflection_class_ptr = Module["_reflection_class_ptr"] = 3626212;

var _reflection_exception_ptr = Module["_reflection_exception_ptr"] = 3626216;

var _zend_ce_closure = Module["_zend_ce_closure"] = 3714108;

var _reflection_parameter_ptr = Module["_reflection_parameter_ptr"] = 3626364;

var _reflection_extension_ptr = Module["_reflection_extension_ptr"] = 3626400;

var _zend_ce_generator = Module["_zend_ce_generator"] = 3717752;

var _reflection_function_ptr = Module["_reflection_function_ptr"] = 3626356;

var _reflection_method_ptr = Module["_reflection_method_ptr"] = 3626384;

var _reflection_intersection_type_ptr = Module["_reflection_intersection_type_ptr"] = 3626380;

var _reflection_union_type_ptr = Module["_reflection_union_type_ptr"] = 3626376;

var _reflection_named_type_ptr = Module["_reflection_named_type_ptr"] = 3626372;

var _reflection_property_ptr = Module["_reflection_property_ptr"] = 3626392;

var _reflection_class_constant_ptr = Module["_reflection_class_constant_ptr"] = 3626396;

var _zend_ce_traversable = Module["_zend_ce_traversable"] = 3713116;

var _reflection_reference_ptr = Module["_reflection_reference_ptr"] = 3626220;

var _reflection_enum_unit_case_ptr = Module["_reflection_enum_unit_case_ptr"] = 3626412;

var _reflection_enum_backed_case_ptr = Module["_reflection_enum_backed_case_ptr"] = 3626416;

var _zend_ce_fiber = Module["_zend_ce_fiber"] = 3722536;

var _reflection_ptr = Module["_reflection_ptr"] = 3626344;

var _zend_ce_stringable = Module["_zend_ce_stringable"] = 3713140;

var _reflector_ptr = Module["_reflector_ptr"] = 3626348;

var _reflection_function_abstract_ptr = Module["_reflection_function_abstract_ptr"] = 3626352;

var _reflection_generator_ptr = Module["_reflection_generator_ptr"] = 3626360;

var _reflection_type_ptr = Module["_reflection_type_ptr"] = 3626368;

var _reflection_object_ptr = Module["_reflection_object_ptr"] = 3626388;

var _reflection_zend_extension_ptr = Module["_reflection_zend_extension_ptr"] = 3626404;

var _reflection_attribute_ptr = Module["_reflection_attribute_ptr"] = 3626408;

var _reflection_fiber_ptr = Module["_reflection_fiber_ptr"] = 3626420;

var ___THREW__ = Module["___THREW__"] = 3741984;

var ___threwValue = Module["___threwValue"] = 3741988;

var _ps_globals = Module["_ps_globals"] = 3626424;

var _php_session_iface_entry = Module["_php_session_iface_entry"] = 3626736;

var _php_session_id_iface_entry = Module["_php_session_id_iface_entry"] = 3626740;

var _php_session_update_timestamp_iface_entry = Module["_php_session_update_timestamp_iface_entry"] = 3626744;

var _php_rfc1867_callback = Module["_php_rfc1867_callback"] = 3709232;

var _php_session_class_entry = Module["_php_session_class_entry"] = 3626748;

var _spl_ce_RecursiveIterator = Module["_spl_ce_RecursiveIterator"] = 3626900;

var _ce_SimpleXMLElement = Module["_ce_SimpleXMLElement"] = 3626864;

var _ce_SimpleXMLIterator = Module["_ce_SimpleXMLIterator"] = 3626868;

var _spl_ce_AppendIterator = Module["_spl_ce_AppendIterator"] = 3626944;

var _spl_ce_ArrayIterator = Module["_spl_ce_ArrayIterator"] = 3627160;

var _spl_ce_ArrayObject = Module["_spl_ce_ArrayObject"] = 3627164;

var _spl_ce_BadFunctionCallException = Module["_spl_ce_BadFunctionCallException"] = 3627604;

var _spl_ce_BadMethodCallException = Module["_spl_ce_BadMethodCallException"] = 3627608;

var _spl_ce_CachingIterator = Module["_spl_ce_CachingIterator"] = 3626924;

var _spl_ce_CallbackFilterIterator = Module["_spl_ce_CallbackFilterIterator"] = 3626892;

var _spl_ce_DirectoryIterator = Module["_spl_ce_DirectoryIterator"] = 3627484;

var _spl_ce_DomainException = Module["_spl_ce_DomainException"] = 3627612;

var _spl_ce_EmptyIterator = Module["_spl_ce_EmptyIterator"] = 3627156;

var _spl_ce_FilesystemIterator = Module["_spl_ce_FilesystemIterator"] = 3627488;

var _spl_ce_FilterIterator = Module["_spl_ce_FilterIterator"] = 3626888;

var _spl_ce_GlobIterator = Module["_spl_ce_GlobIterator"] = 3627592;

var _spl_ce_InfiniteIterator = Module["_spl_ce_InfiniteIterator"] = 3626940;

var _spl_ce_InvalidArgumentException = Module["_spl_ce_InvalidArgumentException"] = 3627616;

var _spl_ce_IteratorIterator = Module["_spl_ce_IteratorIterator"] = 3626932;

var _spl_ce_LengthException = Module["_spl_ce_LengthException"] = 3627620;

var _spl_ce_LimitIterator = Module["_spl_ce_LimitIterator"] = 3626920;

var _spl_ce_LogicException = Module["_spl_ce_LogicException"] = 3627600;

var _spl_ce_MultipleIterator = Module["_spl_ce_MultipleIterator"] = 3627764;

var _spl_ce_NoRewindIterator = Module["_spl_ce_NoRewindIterator"] = 3626936;

var _spl_ce_OuterIterator = Module["_spl_ce_OuterIterator"] = 3626948;

var _spl_ce_OutOfBoundsException = Module["_spl_ce_OutOfBoundsException"] = 3627632;

var _spl_ce_OutOfRangeException = Module["_spl_ce_OutOfRangeException"] = 3627624;

var _spl_ce_OverflowException = Module["_spl_ce_OverflowException"] = 3627636;

var _spl_ce_ParentIterator = Module["_spl_ce_ParentIterator"] = 3626908;

var _spl_ce_RangeException = Module["_spl_ce_RangeException"] = 3627640;

var _spl_ce_RecursiveArrayIterator = Module["_spl_ce_RecursiveArrayIterator"] = 3627368;

var _spl_ce_RecursiveCachingIterator = Module["_spl_ce_RecursiveCachingIterator"] = 3626928;

var _spl_ce_RecursiveCallbackFilterIterator = Module["_spl_ce_RecursiveCallbackFilterIterator"] = 3626896;

var _spl_ce_RecursiveDirectoryIterator = Module["_spl_ce_RecursiveDirectoryIterator"] = 3627372;

var _spl_ce_RecursiveFilterIterator = Module["_spl_ce_RecursiveFilterIterator"] = 3626904;

var _spl_ce_RecursiveIteratorIterator = Module["_spl_ce_RecursiveIteratorIterator"] = 3626880;

var _spl_ce_RecursiveRegexIterator = Module["_spl_ce_RecursiveRegexIterator"] = 3626916;

var _spl_ce_RecursiveTreeIterator = Module["_spl_ce_RecursiveTreeIterator"] = 3626884;

var _spl_ce_RegexIterator = Module["_spl_ce_RegexIterator"] = 3626912;

var _spl_ce_SeekableIterator = Module["_spl_ce_SeekableIterator"] = 3627152;

var _spl_ce_SplDoublyLinkedList = Module["_spl_ce_SplDoublyLinkedList"] = 3627768;

var _spl_ce_SplFileInfo = Module["_spl_ce_SplFileInfo"] = 3627380;

var _spl_ce_SplFileObject = Module["_spl_ce_SplFileObject"] = 3627376;

var _spl_ce_SplFixedArray = Module["_spl_ce_SplFixedArray"] = 3628096;

var _spl_ce_SplHeap = Module["_spl_ce_SplHeap"] = 3627880;

var _spl_ce_SplMinHeap = Module["_spl_ce_SplMinHeap"] = 3627988;

var _spl_ce_SplMaxHeap = Module["_spl_ce_SplMaxHeap"] = 3627992;

var _spl_ce_SplObjectStorage = Module["_spl_ce_SplObjectStorage"] = 3627652;

var _spl_ce_SplObserver = Module["_spl_ce_SplObserver"] = 3627656;

var _spl_ce_SplPriorityQueue = Module["_spl_ce_SplPriorityQueue"] = 3627884;

var _spl_ce_SplQueue = Module["_spl_ce_SplQueue"] = 3627872;

var _spl_ce_SplStack = Module["_spl_ce_SplStack"] = 3627876;

var _spl_ce_SplSubject = Module["_spl_ce_SplSubject"] = 3627660;

var _spl_ce_SplTempFileObject = Module["_spl_ce_SplTempFileObject"] = 3627596;

var _spl_ce_UnderflowException = Module["_spl_ce_UnderflowException"] = 3627644;

var _spl_ce_UnexpectedValueException = Module["_spl_ce_UnexpectedValueException"] = 3627648;

var _zend_compile_file = Module["_zend_compile_file"] = 3711264;

var _zend_autoload = Module["_zend_autoload"] = 3711292;

var _zend_ce_iterator = Module["_zend_ce_iterator"] = 3713124;

var _zend_ce_arrayaccess = Module["_zend_ce_arrayaccess"] = 3713132;

var _zend_ce_serializable = Module["_zend_ce_serializable"] = 3713128;

var _php_glob_stream_ops = Module["_php_glob_stream_ops"] = 2146076;

var _spl_handler_SplObjectStorage = Module["_spl_handler_SplObjectStorage"] = 3627664;

var _php_ce_incomplete_class = Module["_php_ce_incomplete_class"] = 3707504;

var _assertion_error_ce = Module["_assertion_error_ce"] = 3707400;

var _php_stream_php_wrapper = Module["_php_stream_php_wrapper"] = 2132072;

var _php_plain_files_wrapper = Module["_php_plain_files_wrapper"] = 3464880;

var _php_glob_stream_wrapper = Module["_php_glob_stream_wrapper"] = 2146156;

var _php_stream_rfc2397_wrapper = Module["_php_stream_rfc2397_wrapper"] = 2145676;

var _php_stream_http_wrapper = Module["_php_stream_http_wrapper"] = 2131944;

var _php_stream_ftp_wrapper = Module["_php_stream_ftp_wrapper"] = 2131888;

var _php_import_environment_variables = Module["_php_import_environment_variables"] = 3464816;

var _environ = Module["_environ"] = 3728748;

var _php_optidx = Module["_php_optidx"] = 3464828;

var _zend_new_interned_string = Module["_zend_new_interned_string"] = 3714472;

var _php_stream_stdio_ops = Module["_php_stream_stdio_ops"] = 3464892;

var _php_sig_gif = Module["_php_sig_gif"] = 2128784;

var _php_sig_jpg = Module["_php_sig_jpg"] = 2128799;

var _php_sig_png = Module["_php_sig_png"] = 2128802;

var _php_sig_swf = Module["_php_sig_swf"] = 2128793;

var _php_sig_swc = Module["_php_sig_swc"] = 2128796;

var _php_sig_psd = Module["_php_sig_psd"] = 2128787;

var _php_sig_jpc = Module["_php_sig_jpc"] = 2128818;

var _php_sig_riff = Module["_php_sig_riff"] = 2128841;

var _php_sig_jp2 = Module["_php_sig_jp2"] = 2128821;

var _php_sig_bmp = Module["_php_sig_bmp"] = 2128791;

var _php_sig_tif_ii = Module["_php_sig_tif_ii"] = 2128810;

var _php_sig_tif_mm = Module["_php_sig_tif_mm"] = 2128814;

var _php_sig_iff = Module["_php_sig_iff"] = 2128833;

var _php_sig_ico = Module["_php_sig_ico"] = 2128837;

var _php_sig_webp = Module["_php_sig_webp"] = 2128845;

var _php_tiff_bytes_per_format = Module["_php_tiff_bytes_per_format"] = 2128864;

var _php_ini_opened_path = Module["_php_ini_opened_path"] = 3708608;

var _php_ini_scanned_path = Module["_php_ini_scanned_path"] = 3708612;

var _php_ini_scanned_files = Module["_php_ini_scanned_files"] = 3708616;

var _zend_ce_arithmetic_error = Module["_zend_ce_arithmetic_error"] = 3713384;

var _zend_tolower_map = Module["_zend_tolower_map"] = 2200640;

var _zend_toupper_map = Module["_zend_toupper_map"] = 2200896;

var _zend_write = Module["_zend_write"] = 3711316;

var _zend_ce_throwable = Module["_zend_ce_throwable"] = 3713244;

var _stdin = Module["_stdin"] = 3433356;

var _stdout = Module["_stdout"] = 3433360;

var _stderr = Module["_stderr"] = 3433352;

var _php_stream_socket_ops = Module["_php_stream_socket_ops"] = 2145920;

var _zend_string_init_existing_interned = Module["_zend_string_init_existing_interned"] = 3714480;

var _zend_resolve_path = Module["_zend_resolve_path"] = 3711356;

var _language_scanner_globals = Module["_language_scanner_globals"] = 3709568;

var _le_index_ptr = Module["_le_index_ptr"] = 3711528;

var _php_register_internal_extensions_func = Module["_php_register_internal_extensions_func"] = 3464796;

var _zend_post_shutdown_cb = Module["_zend_post_shutdown_cb"] = 3711304;

var _zend_printf = Module["_zend_printf"] = 3711324;

var _in6addr_any = Module["_in6addr_any"] = 3441644;

var _output_globals = Module["_output_globals"] = 3709248;

var _php_stream_memory_ops = Module["_php_stream_memory_ops"] = 2145524;

var _php_stream_temp_ops = Module["_php_stream_temp_ops"] = 2145560;

var _php_stream_rfc2397_ops = Module["_php_stream_rfc2397_ops"] = 2145596;

var _php_stream_rfc2397_wops = Module["_php_stream_rfc2397_wops"] = 2145632;

var _php_stream_userspace_ops = Module["_php_stream_userspace_ops"] = 2145812;

var _php_stream_userspace_dir_ops = Module["_php_stream_userspace_dir_ops"] = 2145848;

var _zend_ce_compile_error = Module["_zend_ce_compile_error"] = 3713252;

var _zend_ce_parse_error = Module["_zend_ce_parse_error"] = 3713248;

var _zend_multibyte_encoding_utf8 = Module["_zend_multibyte_encoding_utf8"] = 3466992;

var _zend_ast_process = Module["_zend_ast_process"] = 3721984;

var _zend_multibyte_encoding_utf32be = Module["_zend_multibyte_encoding_utf32be"] = 3466976;

var _zend_multibyte_encoding_utf32le = Module["_zend_multibyte_encoding_utf32le"] = 3466980;

var _zend_multibyte_encoding_utf16be = Module["_zend_multibyte_encoding_utf16be"] = 3466984;

var _zend_multibyte_encoding_utf16le = Module["_zend_multibyte_encoding_utf16le"] = 3466988;

var _zend_getenv = Module["_zend_getenv"] = 3711352;

var _ini_scanner_globals = Module["_ini_scanner_globals"] = 3709728;

var _zend_observer_function_declared_observed = Module["_zend_observer_function_declared_observed"] = 3722220;

var _zend_observer_class_linked_observed = Module["_zend_observer_class_linked_observed"] = 3722221;

var _zend_execute_internal = Module["_zend_execute_internal"] = 3711288;

var _zend_execute_ex = Module["_zend_execute_ex"] = 3711284;

var _zend_compile_string = Module["_zend_compile_string"] = 3711268;

var _zend_extensions = Module["_zend_extensions"] = 3711452;

var _zend_interrupt_function = Module["_zend_interrupt_function"] = 3711360;

var _zend_on_timeout = Module["_zend_on_timeout"] = 3711348;

var _zend_op_array_extension_handles = Module["_zend_op_array_extension_handles"] = 3711448;

var _zend_extension_flags = Module["_zend_extension_flags"] = 3711444;

var _zend_error_cb = Module["_zend_error_cb"] = 3711320;

var _zend_fopen = Module["_zend_fopen"] = 3711328;

var _zend_stream_open_function = Module["_zend_stream_open_function"] = 3711332;

var _zend_ticks_function = Module["_zend_ticks_function"] = 3711344;

var _zend_throw_exception_hook = Module["_zend_throw_exception_hook"] = 3713256;

var _gc_collect_cycles = Module["_gc_collect_cycles"] = 3714104;

var _zend_post_startup_cb = Module["_zend_post_startup_cb"] = 3711300;

var _zend_uv = Module["_zend_uv"] = 3711380;

var _zend_observer_errors_observed = Module["_zend_observer_errors_observed"] = 3722222;

var _zend_ce_type_error = Module["_zend_ce_type_error"] = 3713264;

var _zend_ce_argument_count_error = Module["_zend_ce_argument_count_error"] = 3713268;

var _zend_ce_value_error = Module["_zend_ce_value_error"] = 3713380;

var _zend_signal_globals = Module["_zend_signal_globals"] = 3715520;

var _zend_dtrace_enabled = Module["_zend_dtrace_enabled"] = 3711381;

var _zend_ce_sensitive_parameter_value = Module["_zend_ce_sensitive_parameter_value"] = 3711532;

var _zend_ce_attribute = Module["_zend_ce_attribute"] = 3711536;

var _zend_ce_return_type_will_change_attribute = Module["_zend_ce_return_type_will_change_attribute"] = 3711584;

var _zend_ce_allow_dynamic_properties = Module["_zend_ce_allow_dynamic_properties"] = 3711588;

var _zend_ce_sensitive_parameter = Module["_zend_ce_sensitive_parameter"] = 3711592;

var _zend_ce_unhandled_match_error = Module["_zend_ce_unhandled_match_error"] = 3713392;

var _zend_pass_function = Module["_zend_pass_function"] = 2205008;

var _zend_touch_vm_stack_data = Module["_zend_touch_vm_stack_data"] = 3711696;

var _zend_ce_internal_iterator = Module["_zend_ce_internal_iterator"] = 3713112;

var _zend_ce_error_exception = Module["_zend_ce_error_exception"] = 3713372;

var _zend_ce_weakref = Module["_zend_ce_weakref"] = 3714212;

var _zend_ce_ClosedGeneratorException = Module["_zend_ce_ClosedGeneratorException"] = 3717756;

var _zend_inheritance_cache_get = Module["_zend_inheritance_cache_get"] = 3721988;

var _zend_inheritance_cache_add = Module["_zend_inheritance_cache_add"] = 3721992;

var ___jit_debug_descriptor = Module["___jit_debug_descriptor"] = 3467376;

var _zend_system_id = Module["_zend_system_id"] = 3722384;

var _zend_ce_unit_enum = Module["_zend_ce_unit_enum"] = 3722516;

var _zend_ce_backed_enum = Module["_zend_ce_backed_enum"] = 3722520;

var _zend_func_info_rid = Module["_zend_func_info_rid"] = 3467540;

var _prvTidyg_default_allocator = Module["_prvTidyg_default_allocator"] = 3468440;

var _prvTidyW3CAttrsFor_A = Module["_prvTidyW3CAttrsFor_A"] = 2239248;

var _prvTidyW3CAttrsFor_ABBR = Module["_prvTidyW3CAttrsFor_ABBR"] = 2240544;

var _prvTidyW3CAttrsFor_ACRONYM = Module["_prvTidyW3CAttrsFor_ACRONYM"] = 2241696;

var _prvTidyW3CAttrsFor_ADDRESS = Module["_prvTidyW3CAttrsFor_ADDRESS"] = 2242848;

var _prvTidyW3CAttrsFor_APPLET = Module["_prvTidyW3CAttrsFor_APPLET"] = 2244016;

var _prvTidyW3CAttrsFor_AREA = Module["_prvTidyW3CAttrsFor_AREA"] = 2245136;

var _prvTidyW3CAttrsFor_ARTICLE = Module["_prvTidyW3CAttrsFor_ARTICLE"] = 2246400;

var _prvTidyW3CAttrsFor_ASIDE = Module["_prvTidyW3CAttrsFor_ASIDE"] = 2247408;

var _prvTidyW3CAttrsFor_AUDIO = Module["_prvTidyW3CAttrsFor_AUDIO"] = 2248416;

var _prvTidyW3CAttrsFor_B = Module["_prvTidyW3CAttrsFor_B"] = 2249472;

var _prvTidyW3CAttrsFor_BASE = Module["_prvTidyW3CAttrsFor_BASE"] = 2250624;

var _prvTidyW3CAttrsFor_BASEFONT = Module["_prvTidyW3CAttrsFor_BASEFONT"] = 2251664;

var _prvTidyW3CAttrsFor_BDI = Module["_prvTidyW3CAttrsFor_BDI"] = 2252704;

var _prvTidyW3CAttrsFor_BDO = Module["_prvTidyW3CAttrsFor_BDO"] = 2253712;

var _prvTidyW3CAttrsFor_BIG = Module["_prvTidyW3CAttrsFor_BIG"] = 2254864;

var _prvTidyW3CAttrsFor_BLOCKQUOTE = Module["_prvTidyW3CAttrsFor_BLOCKQUOTE"] = 2256016;

var _prvTidyW3CAttrsFor_BODY = Module["_prvTidyW3CAttrsFor_BODY"] = 2257184;

var _prvTidyW3CAttrsFor_BR = Module["_prvTidyW3CAttrsFor_BR"] = 2258512;

var _prvTidyW3CAttrsFor_BUTTON = Module["_prvTidyW3CAttrsFor_BUTTON"] = 2259568;

var _prvTidyW3CAttrsFor_CANVAS = Module["_prvTidyW3CAttrsFor_CANVAS"] = 2260832;

var _prvTidyW3CAttrsFor_CAPTION = Module["_prvTidyW3CAttrsFor_CAPTION"] = 2261856;

var _prvTidyW3CAttrsFor_CENTER = Module["_prvTidyW3CAttrsFor_CENTER"] = 2263008;

var _prvTidyW3CAttrsFor_CITE = Module["_prvTidyW3CAttrsFor_CITE"] = 2264144;

var _prvTidyW3CAttrsFor_CODE = Module["_prvTidyW3CAttrsFor_CODE"] = 2265296;

var _prvTidyW3CAttrsFor_COL = Module["_prvTidyW3CAttrsFor_COL"] = 2266448;

var _prvTidyW3CAttrsFor_COLGROUP = Module["_prvTidyW3CAttrsFor_COLGROUP"] = 2267648;

var _prvTidyW3CAttrsFor_COMMAND = Module["_prvTidyW3CAttrsFor_COMMAND"] = 2268848;

var _prvTidyW3CAttrsFor_DATALIST = Module["_prvTidyW3CAttrsFor_DATALIST"] = 2269904;

var _prvTidyW3CAttrsFor_DD = Module["_prvTidyW3CAttrsFor_DD"] = 2270912;

var _prvTidyW3CAttrsFor_DEL = Module["_prvTidyW3CAttrsFor_DEL"] = 2272064;

var _prvTidyW3CAttrsFor_DETAILS = Module["_prvTidyW3CAttrsFor_DETAILS"] = 2273232;

var _prvTidyW3CAttrsFor_DFN = Module["_prvTidyW3CAttrsFor_DFN"] = 2274240;

var _prvTidyW3CAttrsFor_DIALOG = Module["_prvTidyW3CAttrsFor_DIALOG"] = 2275392;

var _prvTidyW3CAttrsFor_DIR = Module["_prvTidyW3CAttrsFor_DIR"] = 2276400;

var _prvTidyW3CAttrsFor_DIV = Module["_prvTidyW3CAttrsFor_DIV"] = 2277568;

var _prvTidyW3CAttrsFor_DL = Module["_prvTidyW3CAttrsFor_DL"] = 2278720;

var _prvTidyW3CAttrsFor_DT = Module["_prvTidyW3CAttrsFor_DT"] = 2279888;

var _prvTidyW3CAttrsFor_EM = Module["_prvTidyW3CAttrsFor_EM"] = 2281040;

var _prvTidyW3CAttrsFor_EMBED = Module["_prvTidyW3CAttrsFor_EMBED"] = 2282192;

var _prvTidyW3CAttrsFor_FIELDSET = Module["_prvTidyW3CAttrsFor_FIELDSET"] = 2283232;

var _prvTidyW3CAttrsFor_FIGCAPTION = Module["_prvTidyW3CAttrsFor_FIGCAPTION"] = 2284400;

var _prvTidyW3CAttrsFor_FIGURE = Module["_prvTidyW3CAttrsFor_FIGURE"] = 2285408;

var _prvTidyW3CAttrsFor_FONT = Module["_prvTidyW3CAttrsFor_FONT"] = 2286416;

var _prvTidyW3CAttrsFor_FOOTER = Module["_prvTidyW3CAttrsFor_FOOTER"] = 2287504;

var _prvTidyW3CAttrsFor_FORM = Module["_prvTidyW3CAttrsFor_FORM"] = 2288512;

var _prvTidyW3CAttrsFor_FRAME = Module["_prvTidyW3CAttrsFor_FRAME"] = 2289760;

var _prvTidyW3CAttrsFor_FRAMESET = Module["_prvTidyW3CAttrsFor_FRAMESET"] = 2290864;

var _prvTidyW3CAttrsFor_H1 = Module["_prvTidyW3CAttrsFor_H1"] = 2291936;

var _prvTidyW3CAttrsFor_H2 = Module["_prvTidyW3CAttrsFor_H2"] = 2293104;

var _prvTidyW3CAttrsFor_H3 = Module["_prvTidyW3CAttrsFor_H3"] = 2294272;

var _prvTidyW3CAttrsFor_H4 = Module["_prvTidyW3CAttrsFor_H4"] = 2295440;

var _prvTidyW3CAttrsFor_H5 = Module["_prvTidyW3CAttrsFor_H5"] = 2296608;

var _prvTidyW3CAttrsFor_H6 = Module["_prvTidyW3CAttrsFor_H6"] = 2297776;

var _prvTidyW3CAttrsFor_HEAD = Module["_prvTidyW3CAttrsFor_HEAD"] = 2298944;

var _prvTidyW3CAttrsFor_HEADER = Module["_prvTidyW3CAttrsFor_HEADER"] = 23e5;

var _prvTidyW3CAttrsFor_HGROUP = Module["_prvTidyW3CAttrsFor_HGROUP"] = 2301008;

var _prvTidyW3CAttrsFor_HR = Module["_prvTidyW3CAttrsFor_HR"] = 2302016;

var _prvTidyW3CAttrsFor_HTML = Module["_prvTidyW3CAttrsFor_HTML"] = 2303200;

var _prvTidyW3CAttrsFor_I = Module["_prvTidyW3CAttrsFor_I"] = 2304272;

var _prvTidyW3CAttrsFor_IFRAME = Module["_prvTidyW3CAttrsFor_IFRAME"] = 2305424;

var _prvTidyW3CAttrsFor_IMG = Module["_prvTidyW3CAttrsFor_IMG"] = 2306576;

var _prvTidyW3CAttrsFor_INPUT = Module["_prvTidyW3CAttrsFor_INPUT"] = 2307856;

var _prvTidyW3CAttrsFor_INS = Module["_prvTidyW3CAttrsFor_INS"] = 2309328;

var _prvTidyW3CAttrsFor_ISINDEX = Module["_prvTidyW3CAttrsFor_ISINDEX"] = 2310496;

var _prvTidyW3CAttrsFor_KBD = Module["_prvTidyW3CAttrsFor_KBD"] = 2311568;

var _prvTidyW3CAttrsFor_KEYGEN = Module["_prvTidyW3CAttrsFor_KEYGEN"] = 2312720;

var _prvTidyW3CAttrsFor_LABEL = Module["_prvTidyW3CAttrsFor_LABEL"] = 2313776;

var _prvTidyW3CAttrsFor_LEGEND = Module["_prvTidyW3CAttrsFor_LEGEND"] = 2314960;

var _prvTidyW3CAttrsFor_LI = Module["_prvTidyW3CAttrsFor_LI"] = 2316128;

var _prvTidyW3CAttrsFor_LINK = Module["_prvTidyW3CAttrsFor_LINK"] = 2317296;

var _prvTidyW3CAttrsFor_LISTING = Module["_prvTidyW3CAttrsFor_LISTING"] = 2318560;

var _prvTidyW3CAttrsFor_MAIN = Module["_prvTidyW3CAttrsFor_MAIN"] = 2319584;

var _prvTidyW3CAttrsFor_MAP = Module["_prvTidyW3CAttrsFor_MAP"] = 2320592;

var _prvTidyW3CAttrsFor_MATHML = Module["_prvTidyW3CAttrsFor_MATHML"] = 2321744;

var _prvTidyW3CAttrsFor_MARK = Module["_prvTidyW3CAttrsFor_MARK"] = 2322928;

var _prvTidyW3CAttrsFor_MENU = Module["_prvTidyW3CAttrsFor_MENU"] = 2323936;

var _prvTidyW3CAttrsFor_MENUITEM = Module["_prvTidyW3CAttrsFor_MENUITEM"] = 2325120;

var _prvTidyW3CAttrsFor_META = Module["_prvTidyW3CAttrsFor_META"] = 2326192;

var _prvTidyW3CAttrsFor_METER = Module["_prvTidyW3CAttrsFor_METER"] = 2327280;

var _prvTidyW3CAttrsFor_NAV = Module["_prvTidyW3CAttrsFor_NAV"] = 2328336;

var _prvTidyW3CAttrsFor_NEXTID = Module["_prvTidyW3CAttrsFor_NEXTID"] = 2329344;

var _prvTidyW3CAttrsFor_NOFRAMES = Module["_prvTidyW3CAttrsFor_NOFRAMES"] = 2330352;

var _prvTidyW3CAttrsFor_NOSCRIPT = Module["_prvTidyW3CAttrsFor_NOSCRIPT"] = 2331488;

var _prvTidyW3CAttrsFor_OBJECT = Module["_prvTidyW3CAttrsFor_OBJECT"] = 2332640;

var _prvTidyW3CAttrsFor_OL = Module["_prvTidyW3CAttrsFor_OL"] = 2333936;

var _prvTidyW3CAttrsFor_OPTGROUP = Module["_prvTidyW3CAttrsFor_OPTGROUP"] = 2335120;

var _prvTidyW3CAttrsFor_OPTION = Module["_prvTidyW3CAttrsFor_OPTION"] = 2336288;

var _prvTidyW3CAttrsFor_OUTPUT = Module["_prvTidyW3CAttrsFor_OUTPUT"] = 2337488;

var _prvTidyW3CAttrsFor_P = Module["_prvTidyW3CAttrsFor_P"] = 2338512;

var _prvTidyW3CAttrsFor_PARAM = Module["_prvTidyW3CAttrsFor_PARAM"] = 2339680;

var _prvTidyW3CAttrsFor_PICTURE = Module["_prvTidyW3CAttrsFor_PICTURE"] = 2340736;

var _prvTidyW3CAttrsFor_PLAINTEXT = Module["_prvTidyW3CAttrsFor_PLAINTEXT"] = 2341856;

var _prvTidyW3CAttrsFor_PRE = Module["_prvTidyW3CAttrsFor_PRE"] = 2342864;

var _prvTidyW3CAttrsFor_PROGRESS = Module["_prvTidyW3CAttrsFor_PROGRESS"] = 2344032;

var _prvTidyW3CAttrsFor_Q = Module["_prvTidyW3CAttrsFor_Q"] = 2345056;

var _prvTidyW3CAttrsFor_RB = Module["_prvTidyW3CAttrsFor_RB"] = 2346208;

var _prvTidyW3CAttrsFor_RBC = Module["_prvTidyW3CAttrsFor_RBC"] = 2347344;

var _prvTidyW3CAttrsFor_RP = Module["_prvTidyW3CAttrsFor_RP"] = 2348480;

var _prvTidyW3CAttrsFor_RT = Module["_prvTidyW3CAttrsFor_RT"] = 2349616;

var _prvTidyW3CAttrsFor_RTC = Module["_prvTidyW3CAttrsFor_RTC"] = 2350768;

var _prvTidyW3CAttrsFor_RUBY = Module["_prvTidyW3CAttrsFor_RUBY"] = 2351904;

var _prvTidyW3CAttrsFor_S = Module["_prvTidyW3CAttrsFor_S"] = 2353040;

var _prvTidyW3CAttrsFor_SAMP = Module["_prvTidyW3CAttrsFor_SAMP"] = 2354176;

var _prvTidyW3CAttrsFor_SCRIPT = Module["_prvTidyW3CAttrsFor_SCRIPT"] = 2355328;

var _prvTidyW3CAttrsFor_SECTION = Module["_prvTidyW3CAttrsFor_SECTION"] = 2356432;

var _prvTidyW3CAttrsFor_SELECT = Module["_prvTidyW3CAttrsFor_SELECT"] = 2357440;

var _prvTidyW3CAttrsFor_SMALL = Module["_prvTidyW3CAttrsFor_SMALL"] = 2358688;

var _prvTidyW3CAttrsFor_SOURCE = Module["_prvTidyW3CAttrsFor_SOURCE"] = 2359840;

var _prvTidyW3CAttrsFor_SPAN = Module["_prvTidyW3CAttrsFor_SPAN"] = 2360880;

var _prvTidyW3CAttrsFor_STRIKE = Module["_prvTidyW3CAttrsFor_STRIKE"] = 2362032;

var _prvTidyW3CAttrsFor_STRONG = Module["_prvTidyW3CAttrsFor_STRONG"] = 2363168;

var _prvTidyW3CAttrsFor_STYLE = Module["_prvTidyW3CAttrsFor_STYLE"] = 2364320;

var _prvTidyW3CAttrsFor_SUB = Module["_prvTidyW3CAttrsFor_SUB"] = 2365408;

var _prvTidyW3CAttrsFor_SUMMARY = Module["_prvTidyW3CAttrsFor_SUMMARY"] = 2366560;

var _prvTidyW3CAttrsFor_SUP = Module["_prvTidyW3CAttrsFor_SUP"] = 2367568;

var _prvTidyW3CAttrsFor_SVG = Module["_prvTidyW3CAttrsFor_SVG"] = 2368720;

var _prvTidyW3CAttrsFor_TABLE = Module["_prvTidyW3CAttrsFor_TABLE"] = 2369968;

var _prvTidyW3CAttrsFor_TBODY = Module["_prvTidyW3CAttrsFor_TBODY"] = 2371200;

var _prvTidyW3CAttrsFor_TD = Module["_prvTidyW3CAttrsFor_TD"] = 2372384;

var _prvTidyW3CAttrsFor_TEXTAREA = Module["_prvTidyW3CAttrsFor_TEXTAREA"] = 2373648;

var _prvTidyW3CAttrsFor_TFOOT = Module["_prvTidyW3CAttrsFor_TFOOT"] = 2374944;

var _prvTidyW3CAttrsFor_TH = Module["_prvTidyW3CAttrsFor_TH"] = 2376128;

var _prvTidyW3CAttrsFor_THEAD = Module["_prvTidyW3CAttrsFor_THEAD"] = 2377392;

var _prvTidyW3CAttrsFor_TEMPLATE = Module["_prvTidyW3CAttrsFor_TEMPLATE"] = 2378576;

var _prvTidyW3CAttrsFor_TIME = Module["_prvTidyW3CAttrsFor_TIME"] = 2379584;

var _prvTidyW3CAttrsFor_TITLE = Module["_prvTidyW3CAttrsFor_TITLE"] = 2380608;

var _prvTidyW3CAttrsFor_TR = Module["_prvTidyW3CAttrsFor_TR"] = 2381664;

var _prvTidyW3CAttrsFor_TRACK = Module["_prvTidyW3CAttrsFor_TRACK"] = 2382848;

var _prvTidyW3CAttrsFor_TT = Module["_prvTidyW3CAttrsFor_TT"] = 2383888;

var _prvTidyW3CAttrsFor_U = Module["_prvTidyW3CAttrsFor_U"] = 2385040;

var _prvTidyW3CAttrsFor_UL = Module["_prvTidyW3CAttrsFor_UL"] = 2386176;

var _prvTidyW3CAttrsFor_VAR = Module["_prvTidyW3CAttrsFor_VAR"] = 2387344;

var _prvTidyW3CAttrsFor_VIDEO = Module["_prvTidyW3CAttrsFor_VIDEO"] = 2388496;

var _prvTidyW3CAttrsFor_WBR = Module["_prvTidyW3CAttrsFor_WBR"] = 2389584;

var _prvTidyW3CAttrsFor_XMP = Module["_prvTidyW3CAttrsFor_XMP"] = 2390592;

var _xmlRealloc = Module["_xmlRealloc"] = 3591868;

var _xmlMemStrdup = Module["_xmlMemStrdup"] = 3591872;

var _xmlStructuredErrorContext = Module["_xmlStructuredErrorContext"] = 3727380;

var _xmlGetWarningsDefaultValue = Module["_xmlGetWarningsDefaultValue"] = 3591888;

var _xmlLastError = Module["_xmlLastError"] = 3727444;

var _xmlIsBaseCharGroup = Module["_xmlIsBaseCharGroup"] = 3594144;

var _xmlParserDebugEntities = Module["_xmlParserDebugEntities"] = 3727332;

var _xmlPedanticParserDefaultValue = Module["_xmlPedanticParserDefaultValue"] = 3727344;

var _xmlLineNumbersDefaultValue = Module["_xmlLineNumbersDefaultValue"] = 3727348;

var _xmlKeepBlanksDefaultValue = Module["_xmlKeepBlanksDefaultValue"] = 3591892;

var _xmlSubstituteEntitiesDefaultValue = Module["_xmlSubstituteEntitiesDefaultValue"] = 3727352;

var _xmlDefaultSAXHandler = Module["_xmlDefaultSAXHandler"] = 3591908;

var _xmlIndentTreeOutput = Module["_xmlIndentTreeOutput"] = 3591900;

var _xmlParserMaxDepth = Module["_xmlParserMaxDepth"] = 3576880;

var _xmlMallocAtomic = Module["_xmlMallocAtomic"] = 3591864;

var _xmlIsDigitGroup = Module["_xmlIsDigitGroup"] = 3594192;

var _xmlIsCombiningGroup = Module["_xmlIsCombiningGroup"] = 3594176;

var _xmlIsExtenderGroup = Module["_xmlIsExtenderGroup"] = 3594208;

var _xmlIsPubidChar_tab = Module["_xmlIsPubidChar_tab"] = 3227376;

var _xmlDefaultSAXLocator = Module["_xmlDefaultSAXLocator"] = 3592020;

var _xmlBufferAllocScheme = Module["_xmlBufferAllocScheme"] = 3591880;

var _xmlRegisterNodeDefaultValue = Module["_xmlRegisterNodeDefaultValue"] = 3727356;

var ___xmlRegisterCallbacks = Module["___xmlRegisterCallbacks"] = 3724276;

var _xmlDeregisterNodeDefaultValue = Module["_xmlDeregisterNodeDefaultValue"] = 3727360;

var _xmlStringText = Module["_xmlStringText"] = 3215432;

var _xmlStringComment = Module["_xmlStringComment"] = 3215447;

var _xmlStringTextNoenc = Module["_xmlStringTextNoenc"] = 3215437;

var _xmlDefaultBufferSize = Module["_xmlDefaultBufferSize"] = 3591884;

var _xmlParserInputBufferCreateFilenameValue = Module["_xmlParserInputBufferCreateFilenameValue"] = 3727364;

var _xmlOutputBufferCreateFilenameValue = Module["_xmlOutputBufferCreateFilenameValue"] = 3727368;

var _htmlDefaultSAXHandler = Module["_htmlDefaultSAXHandler"] = 3592036;

var _xmlXPathPINF = Module["_xmlXPathPINF"] = 3725256;

var _xmlXPathNAN = Module["_xmlXPathNAN"] = 3725248;

var _xmlXPathNINF = Module["_xmlXPathNINF"] = 3725264;

var _docbDefaultSAXHandler = Module["_docbDefaultSAXHandler"] = 3592148;

var _oldXMLWDcompatibility = Module["_oldXMLWDcompatibility"] = 3727328;

var _xmlTreeIndentString = Module["_xmlTreeIndentString"] = 3591904;

var _xmlIsCharGroup = Module["_xmlIsCharGroup"] = 3594160;

var _xmlIsIdeographicGroup = Module["_xmlIsIdeographicGroup"] = 3594224;

var _sqlite3one = Module["_sqlite3one"] = 3228972;

var _sqlite3_version = Module["_sqlite3_version"] = 3228964;

var _sqlite3_data_directory = Module["_sqlite3_data_directory"] = 3728044;

var _sqlite3_temp_directory = Module["_sqlite3_temp_directory"] = 3728040;

var _z_errmsg = Module["_z_errmsg"] = 3269040;

var __length_code = Module["__length_code"] = 3266816;

var __dist_code = Module["__dist_code"] = 3266304;

var _deflate_copyright = Module["_deflate_copyright"] = 3263568;

var _inflate_copyright = Module["_inflate_copyright"] = 3266e3;

var ___environ = Module["___environ"] = 3728748;

var ____environ = Module["____environ"] = 3728748;

var __environ = Module["__environ"] = 3728748;

var _timezone = Module["_timezone"] = 3728764;

var _daylight = Module["_daylight"] = 3728768;

var _tzname = Module["_tzname"] = 3728772;

var ___sig_pending = Module["___sig_pending"] = 3729872;

var ___sig_actions = Module["___sig_actions"] = 3730224;

var ___start_em_js = Module["___start_em_js"] = 3621621;

var ___stop_em_js = Module["___stop_em_js"] = 3622263;

function invoke_iiii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vii(index, a1, a2) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_v(index) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)();
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_ii(index, a1) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vi(index, a1) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_i(index) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)();
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viidii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  getWasmTableEntry(index)(a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iii(index, a1, a2) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function applySignatureConversions(exports) {
 exports = Object.assign({}, exports);
 var makeWrapper_p = f => () => f() >>> 0;
 var makeWrapper_pp = f => a0 => f(a0) >>> 0;
 var makeWrapper_ppp = f => (a0, a1) => f(a0, a1) >>> 0;
 var makeWrapper_pP = f => a0 => f(a0) >>> 0;
 exports["__errno_location"] = makeWrapper_p(exports["__errno_location"]);
 exports["malloc"] = makeWrapper_pp(exports["malloc"]);
 exports["emscripten_builtin_malloc"] = makeWrapper_pp(exports["emscripten_builtin_malloc"]);
 exports["emscripten_builtin_memalign"] = makeWrapper_ppp(exports["emscripten_builtin_memalign"]);
 exports["sbrk"] = makeWrapper_pP(exports["sbrk"]);
 exports["emscripten_stack_get_base"] = makeWrapper_p(exports["emscripten_stack_get_base"]);
 exports["emscripten_stack_get_end"] = makeWrapper_p(exports["emscripten_stack_get_end"]);
 exports["stackSave"] = makeWrapper_p(exports["stackSave"]);
 exports["stackAlloc"] = makeWrapper_pp(exports["stackAlloc"]);
 exports["emscripten_stack_get_current"] = makeWrapper_p(exports["emscripten_stack_get_current"]);
 return exports;
}

function intArrayFromBase64(s) {
 try {
  var decoded = atob(s);
  var bytes = new Uint8Array(decoded.length);
  for (var i = 0; i < decoded.length; ++i) {
   bytes[i] = decoded.charCodeAt(i);
  }
  return bytes;
 } catch (_) {
  throw new Error("Converting base64 string to bytes failed.");
 }
}

function tryParseAsDataURI(filename) {
 if (!isDataURI(filename)) {
  return;
 }
 return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}

Module["addRunDependency"] = addRunDependency;

Module["removeRunDependency"] = removeRunDependency;

Module["FS_createPath"] = FS.createPath;

Module["FS_createDataFile"] = FS.createDataFile;

Module["FS_createLazyFile"] = FS.createLazyFile;

Module["FS_createDevice"] = FS.createDevice;

Module["FS_unlink"] = FS.unlink;

Module["FS_createPreloadedFile"] = FS.createPreloadedFile;

Module["FS"] = FS;

var missingLibrarySymbols = [ "writeI53ToI64", "writeI53ToI64Clamped", "writeI53ToI64Signaling", "writeI53ToU64Clamped", "writeI53ToU64Signaling", "readI53FromU64", "convertI32PairToI53", "convertU32PairToI53", "traverseStack", "getCallstack", "emscriptenLog", "convertPCtoSourceLocation", "runMainThreadEmAsm", "jstoi_s", "listenOnce", "autoResumeAudioContext", "dynCallLegacy", "getDynCaller", "dynCall", "runtimeKeepalivePush", "runtimeKeepalivePop", "safeSetTimeout", "asmjsMangle", "handleAllocatorInit", "HandleAllocator", "getNativeTypeSize", "STACK_SIZE", "STACK_ALIGN", "POINTER_SIZE", "ASSERTIONS", "getCFunc", "ccall", "cwrap", "uleb128Encode", "sigToWasmTypes", "generateFuncType", "convertJsFunctionToWasm", "getEmptyTableSlot", "updateTableMap", "getFunctionAddress", "addFunction", "removeFunction", "reallyNegative", "unSign", "strLen", "reSign", "formatString", "intArrayToString", "AsciiToString", "UTF16ToString", "stringToUTF16", "lengthBytesUTF16", "UTF32ToString", "stringToUTF32", "lengthBytesUTF32", "registerKeyEventCallback", "maybeCStringToJsString", "findEventTarget", "findCanvasEventTarget", "getBoundingClientRect", "fillMouseEventData", "registerMouseEventCallback", "registerWheelEventCallback", "registerUiEventCallback", "registerFocusEventCallback", "fillDeviceOrientationEventData", "registerDeviceOrientationEventCallback", "fillDeviceMotionEventData", "registerDeviceMotionEventCallback", "screenOrientation", "fillOrientationChangeEventData", "registerOrientationChangeEventCallback", "fillFullscreenChangeEventData", "registerFullscreenChangeEventCallback", "JSEvents_requestFullscreen", "JSEvents_resizeCanvasForFullscreen", "registerRestoreOldStyle", "hideEverythingExceptGivenElement", "restoreHiddenElements", "setLetterbox", "softFullscreenResizeWebGLRenderTarget", "doRequestFullscreen", "fillPointerlockChangeEventData", "registerPointerlockChangeEventCallback", "registerPointerlockErrorEventCallback", "requestPointerLock", "fillVisibilityChangeEventData", "registerVisibilityChangeEventCallback", "registerTouchEventCallback", "fillGamepadEventData", "registerGamepadEventCallback", "registerBeforeUnloadEventCallback", "fillBatteryEventData", "battery", "registerBatteryEventCallback", "setCanvasElementSize", "getCanvasElementSize", "jsStackTrace", "stackTrace", "checkWasiClock", "wasiRightsToMuslOFlags", "wasiOFlagsToMuslOFlags", "createDyncallWrapper", "setImmediateWrapped", "clearImmediateWrapped", "polyfillSetImmediate", "getPromise", "makePromise", "idsToPromises", "makePromiseCallback", "ExceptionInfo", "setMainLoop", "_setNetworkCallback", "heapObjectForWebGLType", "heapAccessShiftForWebGLHeap", "webgl_enable_ANGLE_instanced_arrays", "webgl_enable_OES_vertex_array_object", "webgl_enable_WEBGL_draw_buffers", "webgl_enable_WEBGL_multi_draw", "emscriptenWebGLGet", "computeUnpackAlignedImageSize", "colorChannelsInGlTextureFormat", "emscriptenWebGLGetTexPixelData", "__glGenObject", "emscriptenWebGLGetUniform", "webglGetUniformLocation", "webglPrepareUniformLocationsBeforeFirstUse", "webglGetLeftBracePos", "emscriptenWebGLGetVertexAttrib", "__glGetActiveAttribOrUniform", "writeGLArray", "registerWebGlEventCallback", "runAndAbortIfError", "SDL_unicode", "SDL_ttfContext", "SDL_audio", "GLFW_Window", "ALLOC_NORMAL", "ALLOC_STACK", "allocate", "writeStringToMemory", "writeAsciiToMemory" ];

missingLibrarySymbols.forEach(missingLibrarySymbol);

var unexportedSymbols = [ "run", "addOnPreRun", "addOnInit", "addOnPreMain", "addOnExit", "addOnPostRun", "FS_createFolder", "FS_createLink", "out", "err", "callMain", "abort", "keepRuntimeAlive", "wasmMemory", "stackAlloc", "stackSave", "stackRestore", "getTempRet0", "setTempRet0", "writeStackCookie", "checkStackCookie", "readI53FromI64", "convertI32PairToI53Checked", "ptrToString", "zeroMemory", "exitJS", "getHeapMax", "growMemory", "ENV", "MONTH_DAYS_REGULAR", "MONTH_DAYS_LEAP", "MONTH_DAYS_REGULAR_CUMULATIVE", "MONTH_DAYS_LEAP_CUMULATIVE", "isLeapYear", "ydayFromDate", "arraySum", "addDays", "ERRNO_CODES", "ERRNO_MESSAGES", "setErrNo", "inetPton4", "inetNtop4", "inetPton6", "inetNtop6", "readSockaddr", "writeSockaddr", "DNS", "getHostByName", "Protocols", "Sockets", "initRandomFill", "randomFill", "timers", "warnOnce", "UNWIND_CACHE", "readEmAsmArgsArray", "readEmAsmArgs", "runEmAsmFunction", "jstoi_q", "getExecutableName", "handleException", "callUserCallback", "maybeExit", "asyncLoad", "alignMemory", "mmapAlloc", "freeTableIndexes", "functionsInTableMap", "setValue", "getValue", "PATH", "PATH_FS", "UTF8Decoder", "UTF8ArrayToString", "UTF8ToString", "stringToUTF8Array", "stringToUTF8", "lengthBytesUTF8", "intArrayFromString", "stringToAscii", "UTF16Decoder", "stringToNewUTF8", "stringToUTF8OnStack", "writeArrayToMemory", "JSEvents", "specialHTMLTargets", "currentFullscreenStrategy", "restoreOldWindowedStyle", "demangle", "demangleAll", "ExitStatus", "getEnvStrings", "doReadv", "doWritev", "promiseMap", "uncaughtExceptionCount", "exceptionLast", "exceptionCaught", "Browser", "wget", "SYSCALLS", "getSocketFromFD", "getSocketAddress", "preloadPlugins", "FS_modeStringToFlags", "FS_getMode", "FS_stdin_getChar_buffer", "FS_stdin_getChar", "MEMFS", "TTY", "PIPEFS", "SOCKFS", "tempFixedLengthArray", "miniTempWebGLFloatBuffers", "miniTempWebGLIntBuffers", "GL", "emscripten_webgl_power_preferences", "AL", "GLUT", "EGL", "GLEW", "IDBStore", "SDL", "SDL_gfx", "GLFW", "allocateUTF8", "allocateUTF8OnStack", "IDBFS" ];

unexportedSymbols.forEach(unexportedRuntimeSymbol);

var calledRun;

dependenciesFulfilled = function runCaller() {
 if (!calledRun) run();
 if (!calledRun) dependenciesFulfilled = runCaller;
};

function callMain(args = []) {
 assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
 assert(__ATPRERUN__.length == 0, "cannot call main when preRun functions remain to be called");
 var entryFunction = _main;
 args.unshift(thisProgram);
 var argc = args.length;
 var argv = stackAlloc((argc + 1) * 4);
 var argv_ptr = argv >> 2;
 args.forEach((arg => {
  HEAP32[argv_ptr++ >>> 0] = stringToUTF8OnStack(arg);
 }));
 HEAP32[argv_ptr >>> 0] = 0;
 try {
  var ret = entryFunction(argc, argv);
  exitJS(ret, true);
  return ret;
 } catch (e) {
  return handleException(e);
 }
}

function stackCheckInit() {
 _emscripten_stack_init();
 writeStackCookie();
}

function run(args = arguments_) {
 if (runDependencies > 0) {
  return;
 }
 stackCheckInit();
 preRun();
 if (runDependencies > 0) {
  return;
 }
 function doRun() {
  if (calledRun) return;
  calledRun = true;
  Module["calledRun"] = true;
  if (ABORT) return;
  initRuntime();
  preMain();
  readyPromiseResolve(Module);
  if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
  if (shouldRunNow) callMain(args);
  postRun();
 }
 if (Module["setStatus"]) {
  Module["setStatus"]("Running...");
  setTimeout((function() {
   setTimeout((function() {
    Module["setStatus"]("");
   }), 1);
   doRun();
  }), 1);
 } else {
  doRun();
 }
 checkStackCookie();
}

function checkUnflushedContent() {
 var oldOut = out;
 var oldErr = err;
 var has = false;
 out = err = x => {
  has = true;
 };
 try {
  _fflush(0);
  [ "stdout", "stderr" ].forEach((function(name) {
   var info = FS.analyzePath("/dev/" + name);
   if (!info) return;
   var stream = info.object;
   var rdev = stream.rdev;
   var tty = TTY.ttys[rdev];
   if (tty && tty.output && tty.output.length) {
    has = true;
   }
  }));
 } catch (e) {}
 out = oldOut;
 err = oldErr;
 if (has) {
  warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.");
 }
}

if (Module["preInit"]) {
 if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
 while (Module["preInit"].length > 0) {
  Module["preInit"].pop()();
 }
}

var shouldRunNow = true;

if (Module["noInitialRun"]) shouldRunNow = false;

run();


  return moduleArg.ready
}

);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Module;
else if (typeof define === 'function' && define['amd'])
  define([], () => Module);
