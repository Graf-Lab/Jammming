const clientId = "";
const redirectUri = "";
let accessTocken;

const Spotify = {
  getAccessTocken() {
    if (accessTocken) {
      return accessTocken;
    }

    const accessTockenMatch = window.location.href.match(
      /access_tocken=([^&]*)/,
    );
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTocken && accessTockenMatch) {
      accessTocken = accessTockenMatch[1];
    }
  },
};
