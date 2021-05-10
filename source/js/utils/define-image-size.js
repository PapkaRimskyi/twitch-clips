import { FALLBACK_VOD_URL } from '../variables';
// Определяю размер thumbnail трансляции. Если link отсутствует, значит будет грузиться фолбэк.

export default function defineImageSize(link, width, height) {
  if (link) {
    return link.replace('%{width}x%{height}', `${width}x${height}`);
  }
  return FALLBACK_VOD_URL.replace('%{width}x%{height}', `${width}x${height}`);
}

//
