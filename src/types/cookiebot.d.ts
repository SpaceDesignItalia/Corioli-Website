interface CookiebotConsent {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

interface Cookiebot {
  consent: CookiebotConsent;
  renew: () => void;
}

interface Window {
  Cookiebot?: Cookiebot;
}
