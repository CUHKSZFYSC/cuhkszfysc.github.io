import METADATA from "../../src/metadata";

export const SCHOOLS = METADATA.school;

export default {
  paths() {
    return Object.entries(SCHOOLS).map(([key, val]) => ({
      params: { key, val },
    }));
  },
};
