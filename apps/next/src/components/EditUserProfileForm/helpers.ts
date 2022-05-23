import { getAccountDTO } from "../../client-api/account";
import { User } from "firebase/auth";
import { EditProfileForm } from "./types";

const getPhoneNumberWithoutPrefix = (phone: string) =>
  phone
    .split("")
    .reverse()
    .join("")
    .substring(0, 9)
    .split("")
    .reverse()
    .join("");

const getPhonePrefix = (phone: string) =>
  phone
    .split("")
    .reverse()
    .filter((_, index) => index >= 9)
    .reverse()
    .join("");

export const getFormDefaultValues: (
  account: getAccountDTO | null,
  identity: User | null | undefined
) => Partial<EditProfileForm> = (account, identity) => {
  return {
    email: identity?.email || undefined,
    phone: identity?.phoneNumber
      ? getPhoneNumberWithoutPrefix(identity.phoneNumber)
      : undefined,
    name: account?.name || undefined,
    preferredLanguage: account?.preferredLang || undefined,
    phonePrefix: identity?.phoneNumber
      ? getPhonePrefix(identity.phoneNumber)
      : undefined,
    smsNotification: account?.smsNotification.valueOf() ?? true,
  };
};

export const parseError = (error: string) => {
  if (
    error.includes("email-already-exists") ||
    error.includes("email-already-in-use")
  ) {
    return "userRegistration.errors.emailExist";
  } else if (
    error.includes("phone-number-already-exists") ||
    error.includes("account-exists")
  ) {
    return "userRegistration.errors.phoneLinkingFailed";
  } else if (error.includes("too-many-requests")) {
    return "userRegistration.errors.tooManyRequest";
  } else if (error.includes("invalid-verification")) {
    return "userRegistration.errors.invalidCode";
  } else {
    return "Oops something went wrong";
  }
};
