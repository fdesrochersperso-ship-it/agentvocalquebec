export interface LeadClientContext {
  sessionId: string;
  pageUrl: string;
  referrer: string | null;
  userAgent: string;
  language: string;
  timeZone: string;
  screen: string;
  utm: {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    term: string | null;
    content: string | null;
  };
}

const SESSION_KEY = "avq_lead_sid";

export function getLeadClientContext(): LeadClientContext {
  if (typeof window === "undefined") {
    return {
      sessionId: "",
      pageUrl: "",
      referrer: null,
      userAgent: "",
      language: "",
      timeZone: "",
      screen: "",
      utm: {
        source: null,
        medium: null,
        campaign: null,
        term: null,
        content: null,
      },
    };
  }

  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }

  const params = new URLSearchParams(window.location.search);

  return {
    sessionId,
    pageUrl: window.location.href,
    referrer: document.referrer || null,
    userAgent: navigator.userAgent,
    language: navigator.language,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: `${window.screen.width}x${window.screen.height}`,
    utm: {
      source: params.get("utm_source"),
      medium: params.get("utm_medium"),
      campaign: params.get("utm_campaign"),
      term: params.get("utm_term"),
      content: params.get("utm_content"),
    },
  };
}
