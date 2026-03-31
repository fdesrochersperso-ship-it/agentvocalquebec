"use client";

import { sendGAEvent } from "@next/third-parties/google";

type AnalyticsValue = string | number | boolean | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;

function getPageContext() {
  if (typeof window === "undefined") {
    return {};
  }

  return {
    page_location: window.location.href,
    page_path: window.location.pathname,
  };
}

function cleanParams(params: AnalyticsParams) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== "")
  );
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  sendGAEvent("event", eventName, cleanParams({ ...getPageContext(), ...params }));
}

export function trackDemoCtaClick(details: {
  ctaText?: string;
  destinationPath: string;
  location?: string;
}) {
  trackEvent("select_content", {
    content_type: "demo_cta",
    item_id: details.location ?? details.destinationPath,
    item_name: details.ctaText,
    cta_location: details.location,
    destination_path: details.destinationPath,
  });
}

export function trackDemoFormStarted() {
  trackEvent("demo_form_started", {
    form_name: "demo_request",
  });
}

export function trackGenerateLead(details: {
  companyType?: string;
  leadSource?: string;
}) {
  trackEvent("generate_lead", {
    form_name: "demo_request",
    company_type: details.companyType,
    lead_source: details.leadSource,
  });
}

export function trackDemoFormError(details: {
  errorType: string;
  httpStatus?: number;
}) {
  trackEvent("demo_form_error", {
    form_name: "demo_request",
    error_type: details.errorType,
    http_status: details.httpStatus,
  });
}

export function trackContactClick(details: {
  location: string;
  method: "email";
}) {
  trackEvent("contact_click", {
    contact_method: details.method,
    contact_location: details.location,
  });
}

export function trackDemoCallStarted(details: {
  industry: string;
  offerFocus: string;
}) {
  trackEvent("demo_call_started", {
    demo_industry: details.industry,
    offer_focus: details.offerFocus,
  });
}

export function trackDemoCallConnected(details: {
  industry: string;
  offerFocus: string;
}) {
  trackEvent("demo_call_connected", {
    demo_industry: details.industry,
    offer_focus: details.offerFocus,
  });
}

export function trackDemoCallEnded(details: {
  industry: string;
  offerFocus: string;
  endMode: "idle" | "ended" | "error";
}) {
  trackEvent("demo_call_ended", {
    demo_industry: details.industry,
    offer_focus: details.offerFocus,
    end_mode: details.endMode,
  });
}

export function trackDemoCallError(details: {
  errorType: string;
  industry: string;
  offerFocus: string;
  upstreamStatus?: number;
}) {
  trackEvent("demo_call_error", {
    error_type: details.errorType,
    demo_industry: details.industry,
    offer_focus: details.offerFocus,
    upstream_status: details.upstreamStatus,
  });
}
