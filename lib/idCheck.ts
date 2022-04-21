import qs from "qs";

interface SendLinkProps {
  confCode: string;
  realm: string;
  fileUid: string;
  language: string;
  notificationUrl: string;
  errorRedirectUrl: string;
  successRedirectUrl: string;
}

export default class IdCheckClient {
  private readonly sdkWebUrl: string;
  private readonly keycloakUrl: string;
  private readonly cisApi: string;
  private _accessToken = "";

  constructor(sdkWebUrl: string, keycloakUrl: string, cisUrl: string) {
    this.sdkWebUrl = `${sdkWebUrl}/rest/v1/idcheckio-sdk-web`;
    this.keycloakUrl = keycloakUrl;
    this.cisApi = `${cisUrl}/rest/v1`;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  set accessToken(value: string) {
    this._accessToken = value;
  }

  public async login(
    username: string,
    password: string,
    broker: string
  ): Promise<Response> {
    const url = `${this.keycloakUrl}/auth/realms/customer-identity/protocol/openid-connect/token`;
    return await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: qs.stringify({
        grant_type: "password",
        client_id: "sdk-web",
        username,
        password,
        broker,
      }),
    });
  }

  public async sendLink({
    realm,
    confCode,
    fileUid,
    language,
    notificationUrl,
    errorRedirectUrl,
    successRedirectUrl,
  }: SendLinkProps): Promise<Response> {
    const url = `${this.sdkWebUrl}/onboarding/sendlink`;
    return await fetch(url, {
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
            fileUid,
            fileLaunchCheck: true,
            fileCheckWait: true,
          },
        },
        redirectionData: {
          errorRedirectUrl,
          successRedirectUrl,
        },
      }),
    });
  }
}
