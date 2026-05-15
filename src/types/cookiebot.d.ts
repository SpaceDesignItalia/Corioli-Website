interface CookiebotConsent {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

interface Cookiebot {
  consent: CookiebotConsent;
}

interface Window {
  Cookiebot?: Cookiebot;
}
