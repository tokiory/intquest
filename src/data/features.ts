import { environmentBool } from "@/utils/environment";

export const FEATURES = {
  premium: environmentBool("IQ_FEATURE_PREMIUM"),
  randomizer: environmentBool("IQ_FEATURE_RANDOMIZER"),
  history: environmentBool("IQ_FEATURE_HISTORY"),
};
