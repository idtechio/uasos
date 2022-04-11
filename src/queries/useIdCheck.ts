import { useQuery } from "react-query";
import { QueryKeys } from "./queryKeys";
import {
  idGetOnboarding,
  OnboardingDataInterface,
} from "../client-api/idCheck";

export const useOnboarding = () =>
  useQuery<OnboardingDataInterface>(
    [QueryKeys.ONBOARDING_DATA],
    idGetOnboarding
  );
