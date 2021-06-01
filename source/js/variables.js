export const mainApiPath = 'https://api.twitch.tv/helix/';

export const authorizObj = {
  headers: {
    'Authorization': 'Bearer xo4umtvsfoarhdhhtu0par6ppis3md',
    'Client-Id': 'd1trdi4di1nxgpxk6h48qkg2tx0msc',
  },
};

// Задержка перед запуском загрузки дополнительных видео

export const DELAY_BEFORE_LOAD = 500;

//

// Фолбэк, если у трансляции пока нет готовой thumbnail_url

export const FALLBACK_VOD_URL = 'https://via.placeholder.com/%{width}x%{height}.png?text=No+thumbnail+yet';

//
