import { DisassociateTeamMemberInput } from "../shapes/DisassociateTeamMemberInput";
import { DisassociateTeamMemberOutput } from "../shapes/DisassociateTeamMemberOutput";
import { ProjectNotFoundException } from "../shapes/ProjectNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidServiceRoleException } from "../shapes/InvalidServiceRoleException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateTeamMember: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateTeamMember",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateTeamMemberInput
  },
  output: {
    shape: DisassociateTeamMemberOutput
  },
  errors: [
    {
      shape: ProjectNotFoundException
    },
    {
      shape: ValidationException
    },
    {
      shape: InvalidServiceRoleException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
