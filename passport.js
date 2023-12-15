window.passport = new window.immutable.passport.Passport({
  baseConfig: new window.immutable.config.ImmutableConfiguration({
    environment: window.immutable.config.Environment.SANDBOX,
  }),
  clientId: "nSOg3PVIJ9ygAij9FUcPRlegG6dPn6lo",
  redirectUri: "https://giving-evident-bug.ngrok-free.app",
  logoutRedirectUri:
    "https://giving-evident-bug.ngrok-free.app/logout.html",
  audience: "platform_api",
  scope: "openid offline_access email transact",
});
