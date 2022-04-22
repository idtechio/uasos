import qs from "qs";
import { GlobalRef } from "./globalRef";

interface SendLinkProps {
  language: string;
}

interface TokensType {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
}

const {
  CIS_USERNAME: username = "uasos@ariadnext.com",
  CIS_PASSWORD: password = "zUKo_mC_kj1I",
  CIS_REALM: realm = "uasos",
  CLIENT_ID: clientId = "cis-api-client",
  CONFCODE: confCode = "uasos_sdkweb_conf",
  KEYCLOAK_URL:
    keycloakUrl = "https://api-test.ariadnext.com/auth/realms/customer-identity/protocol/openid-connect/token",
  SDKWEB_URL:
    sdkWebUrl = "https://sdkweb-test.idcheck.io/rest/v1/idcheckio-sdk-web/onboarding/sendlink",
  NOTIFICATION_URL: notificationUrl = "test_notif",
  NEXT_PUBLIC_DOMAIN: publicDomain = "http://localhost:3000/",
} = { ...process.env };

class IdCheckClient {
  private readonly sdkWebUrl: string;
  private readonly keycloakUrl: string;
  private _accessToken = "";
  private _expiresIn = 900;
  private _refreshToken = "";
  private _refreshExpiresIn = 1800;
  private _updatedTokens: Date = new Date("January 1, 1970 00:00:00 UTC");

  constructor(sdkWebUrl: string, keycloakUrl: string) {
    this.sdkWebUrl = sdkWebUrl;
    this.keycloakUrl = keycloakUrl;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  set accessToken(value: string) {
    this._accessToken = value;
  }

  get expiresIn(): number {
    return this._expiresIn;
  }

  set expiresIn(value: number) {
    this._expiresIn = value;
  }

  get refreshExpiresIn(): number {
    return this._refreshExpiresIn;
  }

  set refreshExpiresIn(value: number) {
    this._refreshExpiresIn = value;
  }
  get refreshToken(): string {
    return this._refreshToken;
  }

  set refreshToken(value: string) {
    this._refreshToken = value;
  }

  get updatedTokens(): Date {
    return this._updatedTokens;
  }

  set updatedTokens(value: Date) {
    this._updatedTokens = value;
  }

  private getDiff(): number {
    return (new Date().getTime() - this.updatedTokens.getTime()) / 1000;
  }

  private async login(): Promise<void> {
    const loginResponse = await fetch(this.keycloakUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: qs.stringify({
        grant_type: "password",
        username,
        password,
        client_id: clientId,
        broker: realm,
      }),
    });

    if (!loginResponse.ok) {
      const error = JSON.parse(await loginResponse.text());
      console.error("Error:", error);
      return;
    }

    const data: TokensType = await loginResponse.json();
    this.updateTokens(data);
  }

  private async refresh(): Promise<void> {
    const refreshResponse = await fetch(this.keycloakUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: qs.stringify({
        grant_type: "refresh_token",
        client_id: clientId,
        refresh_token: this.refreshToken,
      }),
    });

    if (!refreshResponse.ok) {
      const error = JSON.parse(await refreshResponse.text());
      console.error("Error:", error);
      return;
    }

    const data: TokensType = await refreshResponse.json();
    this.updateTokens(data);
  }

  private updateTokens({
    access_token,
    expires_in,
    refresh_token,
    refresh_expires_in,
  }: TokensType) {
    this.accessToken = access_token;
    this.expiresIn = expires_in;
    this.refreshToken = refresh_token;
    this.refreshExpiresIn = refresh_expires_in;
    this.updatedTokens = new Date();
  }

  public async sendLink({ language }: SendLinkProps): Promise<Response> {
    if (!this.accessToken || this.getDiff() > this.refreshExpiresIn) {
      await this.login();
    }

    if (this.getDiff() > this.expiresIn) {
      await this.refresh();
    }

    return await fetch(this.sdkWebUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({
        interfaceSettings: {
          confCode,
          language,
        },
        endpointsToNotify: [notificationUrl],
        documentsToCapture: [
          {
            code: "ID_DOC",
            docTypes: ["ID", "P"],
          },
          {
            code: "SELFIE_DOC",
            docTypes: ["SELFIE"],
          },
        ],
        resultHandler: {
          cisConf: {
            realm,
            fileUid: `file-${new Date().getTime()}`,
            fileLaunchCheck: true,
            fileCheckWait: true,
          },
        },
        redirectionData: {
          errorRedirectUrl: `${publicDomain}error`,
          successRedirectUrl: `${publicDomain}${language}/dashboard`,
        },
      }),
    });
  }
}

const globalIdCheck = new GlobalRef("globalIdCheckClient");

if (!globalIdCheck.value) {
  globalIdCheck.value = new IdCheckClient(sdkWebUrl, keycloakUrl);
}

export const idCheckClient = globalIdCheck.value as IdCheckClient;
