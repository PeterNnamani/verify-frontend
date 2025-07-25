interface Config {
  GOOGLE_CLIENT_ID: string;
  YAHOO_CLIENT_ID: string;
  MICROSOFT_CLIENT_ID: string;
  API_URL: string;
}

export const config: Config = {
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
  YAHOO_CLIENT_ID: import.meta.env.VITE_YAHOO_CLIENT_ID || '',
  MICROSOFT_CLIENT_ID: import.meta.env.VITE_MICROSOFT_CLIENT_ID || '',
  API_URL: import.meta.env.VITE_API_URL || 'https://verify-backend.onrender.com',
};
