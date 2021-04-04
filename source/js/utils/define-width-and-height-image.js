function getNumbersFromSizes(width) {
  return width.match(/\d/g).join('');
}

export default function defineWidthAndHeightImage(link, width, height) {
  return link.replace('%{width}x%{height}', `${getNumbersFromSizes(width)}x${height}`);
}
