import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForCertificateInput: _Structure_ = {
  type: "structure",
  required: ["CertificateArn"],
  members: {
    CertificateArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
