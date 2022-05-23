"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertConfig = assertConfig;

var _errors = require("../errors");

let twitterWarned = false;

function assertConfig(params) {
  var _req$query;

  const {
    options,
    req
  } = params;

  if (!((_req$query = req.query) !== null && _req$query !== void 0 && _req$query.nextauth) && !req.action) {
    return new _errors.MissingAPIRoute("Cannot find [...nextauth].{js,ts} in `/pages/api/auth`. Make sure the filename is written correctly.");
  }

  if (!options.secret) {
    if (process.env.NODE_ENV === "production") {
      return new _errors.MissingSecret("Please define a `secret` in production.");
    } else {
      return "NO_SECRET";
    }
  }

  if (!req.host) return "NEXTAUTH_URL";
  let hasCredentials, hasEmail;
  let hasTwitterOAuth2;

  for (const provider of options.providers) {
    if (provider.type === "credentials") hasCredentials = true;else if (provider.type === "email") hasEmail = true;else if (provider.id === "twitter" && provider.version === "2.0") hasTwitterOAuth2 = true;
  }

  if (hasCredentials) {
    var _options$session;

    const dbStrategy = ((_options$session = options.session) === null || _options$session === void 0 ? void 0 : _options$session.strategy) === "database";
    const onlyCredentials = !options.providers.some(p => p.type !== "credentials");

    if (dbStrategy && onlyCredentials) {
      return new _errors.UnsupportedStrategy("Signin in with credentials only supported if JWT strategy is enabled");
    }

    const credentialsNoAuthorize = options.providers.some(p => p.type === "credentials" && !p.authorize);

    if (credentialsNoAuthorize) {
      return new _errors.MissingAuthorize("Must define an authorize() handler to use credentials authentication provider");
    }
  }

  if (hasEmail && !options.adapter) {
    return new _errors.MissingAdapter("E-mail login requires an adapter.");
  }

  if (!twitterWarned && hasTwitterOAuth2) {
    twitterWarned = true;
    return "TWITTER_OAUTH_2_BETA";
  }
}