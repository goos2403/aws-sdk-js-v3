import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBotChannelAssociationInput: _Structure_ = {
  type: "structure",
  required: ["name", "botName", "botAlias"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "name"
    },
    botName: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "botName"
    },
    botAlias: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "aliasName"
    }
  }
};
