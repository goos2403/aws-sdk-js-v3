import { GetTransitGatewayRouteTableAssociationsInput } from "../shapes/GetTransitGatewayRouteTableAssociationsInput";
import { GetTransitGatewayRouteTableAssociationsOutput } from "../shapes/GetTransitGatewayRouteTableAssociationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetTransitGatewayRouteTableAssociations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTransitGatewayRouteTableAssociations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTransitGatewayRouteTableAssociationsInput
  },
  output: {
    shape: GetTransitGatewayRouteTableAssociationsOutput
  },
  errors: []
};
