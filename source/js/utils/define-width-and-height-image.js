import { FALLBACK_VOD_URL } from '../variables';

function getNumbersFromSizes(width) {
  return width.match(/\d/g).join('');
}

// Определяю размер thumbnail трансляции. Если link отсутствует, значит будет грузиться фолбэк.

export default function defineWidthAndHeightImage(link, width, height) {
  if (link) {
    return link.replace('%{width}x%{height}', `${getNumbersFromSizes(width)}x${height}`);
  }
  return FALLBACK_VOD_URL.replace('%{width}x%{height}', `${getNumbersFromSizes(width)}x${height}`);
}

//
