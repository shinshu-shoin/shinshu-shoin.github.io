import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICEDOMAIN || "",
  apiKey: process.env.MICROCMS_APIKEY || "",
});