export type HTTPResponse = {
    statusCode: number
    body: any
  }
  
  export function ok<T>(dto?: T): HTTPResponse {
    return {
      statusCode: 200,
      body: dto,
    }
  }
  
  export function created(): HTTPResponse {
    return {
      statusCode: 201,
      body: undefined,
    }
  }
  
  export function clientError(error: Error): HTTPResponse {
    return {
      statusCode: 400,
      body: {
        error: error.message,
      },
    }
  }
  
  export function unauthorized(error: Error): HTTPResponse {
    return {
      statusCode: 401,
      body: {
        error: error.message,
      },
    }
  }
  
  export function forbidden(error: Error): HTTPResponse {
    return {
      statusCode: 403,
      body: {
        error: error.message,
      },
    }
  }
  
  export function notFound(error: Error): HTTPResponse {
    return {
      statusCode: 404,
      body: {
        error: error.message,
      },
    }
  }
  
  export function conflict(error: Error): HTTPResponse {
    return {
      statusCode: 409,
      body: {
        error: error.message,
      },
    }
  }
  
  export function tooMany(error: Error): HTTPResponse {
    return {
      statusCode: 429,
      body: {
        error: error.message,
      },
    }
  }
  
  export function fail(error: Error) {
    console.log(error)
  
    return {
      statusCode: 500,
      body: {
        error: error.message,
      },
    }
  }