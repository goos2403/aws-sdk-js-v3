import { _SpekeKeyProvider } from "./_SpekeKeyProvider";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MsSmoothEncryptionSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SpekeKeyProvider: {
      shape: _SpekeKeyProvider,
      locationName: "spekeKeyProvider"
    }
  }
};
