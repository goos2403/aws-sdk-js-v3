import { _AuthorizationScopes } from "./_AuthorizationScopes";
import { _RouteModels } from "./_RouteModels";
import { _RouteParameters } from "./_RouteParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRouteInput: _Structure_ = {
  type: "structure",
  required: ["ApiId", "RouteKey"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    ApiKeyRequired: {
      shape: {
        type: "boolean"
      },
      locationName: "apiKeyRequired"
    },
    AuthorizationScopes: {
      shape: _AuthorizationScopes,
      locationName: "authorizationScopes"
    },
    AuthorizationType: {
      shape: {
        type: "string"
      },
      locationName: "authorizationType"
    },
    AuthorizerId: {
      shape: {
        type: "string"
      },
      locationName: "authorizerId"
    },
    ModelSelectionExpression: {
      shape: {
        type: "string"
      },
      locationName: "modelSelectionExpression"
    },
    OperationName: {
      shape: {
        type: "string"
      },
      locationName: "operationName"
    },
    RequestModels: {
      shape: _RouteModels,
      locationName: "requestModels"
    },
    RequestParameters: {
      shape: _RouteParameters,
      locationName: "requestParameters"
    },
    RouteKey: {
      shape: {
        type: "string"
      },
      locationName: "routeKey"
    },
    RouteResponseSelectionExpression: {
      shape: {
        type: "string"
      },
      locationName: "routeResponseSelectionExpression"
    },
    Target: {
      shape: {
        type: "string"
      },
      locationName: "target"
    }
  }
};
