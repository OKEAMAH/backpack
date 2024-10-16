/* eslint-disable */

export const AllTypesProps: Record<string, any> = {
  String_comparison_exp: {},
  auth_invitations: {
    data: {},
  },
  auth_invitations_aggregate_fields: {
    count: {
      columns: "auth_invitations_select_column",
    },
  },
  auth_invitations_append_input: {
    data: "jsonb",
  },
  auth_invitations_bool_exp: {
    _and: "auth_invitations_bool_exp",
    _not: "auth_invitations_bool_exp",
    _or: "auth_invitations_bool_exp",
    created_at: "timestamptz_comparison_exp",
    data: "jsonb_comparison_exp",
    id: "uuid_comparison_exp",
  },
  auth_invitations_constraint: "enum" as const,
  auth_invitations_delete_at_path_input: {},
  auth_invitations_delete_elem_input: {},
  auth_invitations_delete_key_input: {},
  auth_invitations_insert_input: {
    created_at: "timestamptz",
    data: "jsonb",
    id: "uuid",
  },
  auth_invitations_on_conflict: {
    constraint: "auth_invitations_constraint",
    update_columns: "auth_invitations_update_column",
    where: "auth_invitations_bool_exp",
  },
  auth_invitations_order_by: {
    created_at: "order_by",
    data: "order_by",
    id: "order_by",
  },
  auth_invitations_pk_columns_input: {
    id: "uuid",
  },
  auth_invitations_prepend_input: {
    data: "jsonb",
  },
  auth_invitations_select_column: "enum" as const,
  auth_invitations_set_input: {
    created_at: "timestamptz",
    data: "jsonb",
    id: "uuid",
  },
  auth_invitations_stream_cursor_input: {
    initial_value: "auth_invitations_stream_cursor_value_input",
    ordering: "cursor_ordering",
  },
  auth_invitations_stream_cursor_value_input: {
    created_at: "timestamptz",
    data: "jsonb",
    id: "uuid",
  },
  auth_invitations_update_column: "enum" as const,
  auth_invitations_updates: {
    _append: "auth_invitations_append_input",
    _delete_at_path: "auth_invitations_delete_at_path_input",
    _delete_elem: "auth_invitations_delete_elem_input",
    _delete_key: "auth_invitations_delete_key_input",
    _prepend: "auth_invitations_prepend_input",
    _set: "auth_invitations_set_input",
    where: "auth_invitations_bool_exp",
  },
  auth_users_aggregate_fields: {
    count: {
      columns: "auth_users_select_column",
    },
  },
  auth_users_bool_exp: {
    _and: "auth_users_bool_exp",
    _not: "auth_users_bool_exp",
    _or: "auth_users_bool_exp",
    created_at: "timestamptz_comparison_exp",
    id: "uuid_comparison_exp",
    invitation_id: "uuid_comparison_exp",
    last_active_at: "timestamptz_comparison_exp",
    updated_at: "timestamptz_comparison_exp",
    username: "citext_comparison_exp",
  },
  auth_users_constraint: "enum" as const,
  auth_users_insert_input: {
    created_at: "timestamptz",
    id: "uuid",
    invitation_id: "uuid",
    last_active_at: "timestamptz",
    updated_at: "timestamptz",
    username: "citext",
  },
  auth_users_on_conflict: {
    constraint: "auth_users_constraint",
    update_columns: "auth_users_update_column",
    where: "auth_users_bool_exp",
  },
  auth_users_order_by: {
    created_at: "order_by",
    id: "order_by",
    invitation_id: "order_by",
    last_active_at: "order_by",
    updated_at: "order_by",
    username: "order_by",
  },
  auth_users_pk_columns_input: {
    id: "uuid",
  },
  auth_users_select_column: "enum" as const,
  auth_users_set_input: {
    created_at: "timestamptz",
    id: "uuid",
    invitation_id: "uuid",
    last_active_at: "timestamptz",
    updated_at: "timestamptz",
    username: "citext",
  },
  auth_users_stream_cursor_input: {
    initial_value: "auth_users_stream_cursor_value_input",
    ordering: "cursor_ordering",
  },
  auth_users_stream_cursor_value_input: {
    created_at: "timestamptz",
    id: "uuid",
    invitation_id: "uuid",
    last_active_at: "timestamptz",
    updated_at: "timestamptz",
    username: "citext",
  },
  auth_users_update_column: "enum" as const,
  auth_users_updates: {
    _set: "auth_users_set_input",
    where: "auth_users_bool_exp",
  },
  citext: `scalar.citext` as const,
  citext_comparison_exp: {
    _eq: "citext",
    _gt: "citext",
    _gte: "citext",
    _ilike: "citext",
    _in: "citext",
    _iregex: "citext",
    _like: "citext",
    _lt: "citext",
    _lte: "citext",
    _neq: "citext",
    _nilike: "citext",
    _nin: "citext",
    _niregex: "citext",
    _nlike: "citext",
    _nregex: "citext",
    _nsimilar: "citext",
    _regex: "citext",
    _similar: "citext",
  },
  cursor_ordering: "enum" as const,
  jsonb: `scalar.jsonb` as const,
  jsonb_cast_exp: {
    String: "String_comparison_exp",
  },
  jsonb_comparison_exp: {
    _cast: "jsonb_cast_exp",
    _contained_in: "jsonb",
    _contains: "jsonb",
    _eq: "jsonb",
    _gt: "jsonb",
    _gte: "jsonb",
    _in: "jsonb",
    _lt: "jsonb",
    _lte: "jsonb",
    _neq: "jsonb",
    _nin: "jsonb",
  },
  mutation_root: {
    delete_auth_invitations: {
      where: "auth_invitations_bool_exp",
    },
    delete_auth_invitations_by_pk: {
      id: "uuid",
    },
    delete_auth_users: {
      where: "auth_users_bool_exp",
    },
    delete_auth_users_by_pk: {
      id: "uuid",
    },
    insert_auth_invitations: {
      objects: "auth_invitations_insert_input",
      on_conflict: "auth_invitations_on_conflict",
    },
    insert_auth_invitations_one: {
      object: "auth_invitations_insert_input",
      on_conflict: "auth_invitations_on_conflict",
    },
    insert_auth_users: {
      objects: "auth_users_insert_input",
      on_conflict: "auth_users_on_conflict",
    },
    insert_auth_users_one: {
      object: "auth_users_insert_input",
      on_conflict: "auth_users_on_conflict",
    },
    update_auth_invitations: {
      _append: "auth_invitations_append_input",
      _delete_at_path: "auth_invitations_delete_at_path_input",
      _delete_elem: "auth_invitations_delete_elem_input",
      _delete_key: "auth_invitations_delete_key_input",
      _prepend: "auth_invitations_prepend_input",
      _set: "auth_invitations_set_input",
      where: "auth_invitations_bool_exp",
    },
    update_auth_invitations_by_pk: {
      _append: "auth_invitations_append_input",
      _delete_at_path: "auth_invitations_delete_at_path_input",
      _delete_elem: "auth_invitations_delete_elem_input",
      _delete_key: "auth_invitations_delete_key_input",
      _prepend: "auth_invitations_prepend_input",
      _set: "auth_invitations_set_input",
      pk_columns: "auth_invitations_pk_columns_input",
    },
    update_auth_invitations_many: {
      updates: "auth_invitations_updates",
    },
    update_auth_users: {
      _set: "auth_users_set_input",
      where: "auth_users_bool_exp",
    },
    update_auth_users_by_pk: {
      _set: "auth_users_set_input",
      pk_columns: "auth_users_pk_columns_input",
    },
    update_auth_users_many: {
      updates: "auth_users_updates",
    },
  },
  order_by: "enum" as const,
  query_root: {
    auth_invitations: {
      distinct_on: "auth_invitations_select_column",
      order_by: "auth_invitations_order_by",
      where: "auth_invitations_bool_exp",
    },
    auth_invitations_aggregate: {
      distinct_on: "auth_invitations_select_column",
      order_by: "auth_invitations_order_by",
      where: "auth_invitations_bool_exp",
    },
    auth_invitations_by_pk: {
      id: "uuid",
    },
    auth_users: {
      distinct_on: "auth_users_select_column",
      order_by: "auth_users_order_by",
      where: "auth_users_bool_exp",
    },
    auth_users_aggregate: {
      distinct_on: "auth_users_select_column",
      order_by: "auth_users_order_by",
      where: "auth_users_bool_exp",
    },
    auth_users_by_pk: {
      id: "uuid",
    },
  },
  subscription_root: {
    auth_invitations: {
      distinct_on: "auth_invitations_select_column",
      order_by: "auth_invitations_order_by",
      where: "auth_invitations_bool_exp",
    },
    auth_invitations_aggregate: {
      distinct_on: "auth_invitations_select_column",
      order_by: "auth_invitations_order_by",
      where: "auth_invitations_bool_exp",
    },
    auth_invitations_by_pk: {
      id: "uuid",
    },
    auth_invitations_stream: {
      cursor: "auth_invitations_stream_cursor_input",
      where: "auth_invitations_bool_exp",
    },
    auth_users: {
      distinct_on: "auth_users_select_column",
      order_by: "auth_users_order_by",
      where: "auth_users_bool_exp",
    },
    auth_users_aggregate: {
      distinct_on: "auth_users_select_column",
      order_by: "auth_users_order_by",
      where: "auth_users_bool_exp",
    },
    auth_users_by_pk: {
      id: "uuid",
    },
    auth_users_stream: {
      cursor: "auth_users_stream_cursor_input",
      where: "auth_users_bool_exp",
    },
  },
  timestamptz: `scalar.timestamptz` as const,
  timestamptz_comparison_exp: {
    _eq: "timestamptz",
    _gt: "timestamptz",
    _gte: "timestamptz",
    _in: "timestamptz",
    _lt: "timestamptz",
    _lte: "timestamptz",
    _neq: "timestamptz",
    _nin: "timestamptz",
  },
  uuid: `scalar.uuid` as const,
  uuid_comparison_exp: {
    _eq: "uuid",
    _gt: "uuid",
    _gte: "uuid",
    _in: "uuid",
    _lt: "uuid",
    _lte: "uuid",
    _neq: "uuid",
    _nin: "uuid",
  },
};

export const ReturnTypes: Record<string, any> = {
  cached: {
    ttl: "Int",
    refresh: "Boolean",
  },
  auth_invitations: {
    created_at: "timestamptz",
    data: "jsonb",
    id: "uuid",
  },
  auth_invitations_aggregate: {
    aggregate: "auth_invitations_aggregate_fields",
    nodes: "auth_invitations",
  },
  auth_invitations_aggregate_fields: {
    count: "Int",
    max: "auth_invitations_max_fields",
    min: "auth_invitations_min_fields",
  },
  auth_invitations_max_fields: {
    created_at: "timestamptz",
    id: "uuid",
  },
  auth_invitations_min_fields: {
    created_at: "timestamptz",
    id: "uuid",
  },
  auth_invitations_mutation_response: {
    affected_rows: "Int",
    returning: "auth_invitations",
  },
  auth_users: {
    created_at: "timestamptz",
    id: "uuid",
    invitation_id: "uuid",
    last_active_at: "timestamptz",
    updated_at: "timestamptz",
    username: "citext",
  },
  auth_users_aggregate: {
    aggregate: "auth_users_aggregate_fields",
    nodes: "auth_users",
  },
  auth_users_aggregate_fields: {
    count: "Int",
    max: "auth_users_max_fields",
    min: "auth_users_min_fields",
  },
  auth_users_max_fields: {
    created_at: "timestamptz",
    id: "uuid",
    invitation_id: "uuid",
    last_active_at: "timestamptz",
    updated_at: "timestamptz",
    username: "citext",
  },
  auth_users_min_fields: {
    created_at: "timestamptz",
    id: "uuid",
    invitation_id: "uuid",
    last_active_at: "timestamptz",
    updated_at: "timestamptz",
    username: "citext",
  },
  auth_users_mutation_response: {
    affected_rows: "Int",
    returning: "auth_users",
  },
  citext: `scalar.citext` as const,
  jsonb: `scalar.jsonb` as const,
  mutation_root: {
    delete_auth_invitations: "auth_invitations_mutation_response",
    delete_auth_invitations_by_pk: "auth_invitations",
    delete_auth_users: "auth_users_mutation_response",
    delete_auth_users_by_pk: "auth_users",
    insert_auth_invitations: "auth_invitations_mutation_response",
    insert_auth_invitations_one: "auth_invitations",
    insert_auth_users: "auth_users_mutation_response",
    insert_auth_users_one: "auth_users",
    update_auth_invitations: "auth_invitations_mutation_response",
    update_auth_invitations_by_pk: "auth_invitations",
    update_auth_invitations_many: "auth_invitations_mutation_response",
    update_auth_users: "auth_users_mutation_response",
    update_auth_users_by_pk: "auth_users",
    update_auth_users_many: "auth_users_mutation_response",
  },
  query_root: {
    auth_invitations: "auth_invitations",
    auth_invitations_aggregate: "auth_invitations_aggregate",
    auth_invitations_by_pk: "auth_invitations",
    auth_users: "auth_users",
    auth_users_aggregate: "auth_users_aggregate",
    auth_users_by_pk: "auth_users",
  },
  subscription_root: {
    auth_invitations: "auth_invitations",
    auth_invitations_aggregate: "auth_invitations_aggregate",
    auth_invitations_by_pk: "auth_invitations",
    auth_invitations_stream: "auth_invitations",
    auth_users: "auth_users",
    auth_users_aggregate: "auth_users_aggregate",
    auth_users_by_pk: "auth_users",
    auth_users_stream: "auth_users",
  },
  timestamptz: `scalar.timestamptz` as const,
  uuid: `scalar.uuid` as const,
};

export const Ops = {
  mutation: "mutation_root" as const,
  query: "query_root" as const,
  subscription: "subscription_root" as const,
};
