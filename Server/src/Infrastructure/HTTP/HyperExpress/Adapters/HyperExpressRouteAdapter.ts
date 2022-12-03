import { Request, Response } from "hyper-express";

import { Controller } from "../../../../shared/interfaces/Presentation/Controller";

export function RouteAdapter(controller: Controller) {
  return async (request: Request, response: Response) => {
    let req = await request.json();

    const httpResponse = await controller.handle(req);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return response.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      return response.status(httpResponse.statusCode).json({
        error: httpResponse.body.error,
      });
    }
  };
}
