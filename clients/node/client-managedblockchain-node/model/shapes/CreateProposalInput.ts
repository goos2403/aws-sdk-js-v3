import { _ProposalActions } from "./_ProposalActions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProposalInput: _Structure_ = {
  type: "structure",
  required: ["ClientRequestToken", "NetworkId", "MemberId", "Actions"],
  members: {
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NetworkId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "networkId"
    },
    MemberId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Actions: {
      shape: _ProposalActions
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
