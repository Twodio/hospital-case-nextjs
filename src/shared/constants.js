/**
 * HTTP VERBS
 */
export const HTTP_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
};

export const ROLES = {
    PATIENT: 'PATIENT',
    HEALTHCARE_PROVIDER: 'HEALTHCARE_PROVIDER'
};

/**
 * HTTP RESPONSE CODES
 */
export const HTTP_STATUS_CODE = {
    // 100 information

    // 200 success
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    // 300 redirection
    MOVED_PERMANENTLY: 301,
    PERMANENT_REDIRECT: 308,
    // 400 client error
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    LOCKED: 423,
    // 500 server error
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
};