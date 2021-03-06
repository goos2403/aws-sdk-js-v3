import { CancelCapacityReservationInput } from "../shapes/CancelCapacityReservationInput";
import { CancelCapacityReservationOutput } from "../shapes/CancelCapacityReservationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelCapacityReservation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelCapacityReservation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelCapacityReservationInput
  },
  output: {
    shape: CancelCapacityReservationOutput
  },
  errors: []
};
