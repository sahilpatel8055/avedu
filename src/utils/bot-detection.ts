export const isBotUserAgent = (userAgent: string): boolean => {
  const botPatterns = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
    /duckduckbot/i,
    /baiduspider/i,
    /yandexbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /whatsapp/i,
    /linkedinbot/i,
    /telegrambot/i,
    /applebot/i,
    /discordbot/i
  ];

  return botPatterns.some(pattern => pattern.test(userAgent));
};

export const getBotType = (userAgent: string): string | null => {
  if (/googlebot/i.test(userAgent)) return 'google';
  if (/bingbot/i.test(userAgent)) return 'bing';
  if (/facebookexternalhit/i.test(userAgent)) return 'facebook';
  if (/twitterbot/i.test(userAgent)) return 'twitter';
  if (/linkedinbot/i.test(userAgent)) return 'linkedin';
  return null;
};

export const shouldPrerender = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = navigator.userAgent;
  return isBotUserAgent(userAgent);
};