export function truncateText(text, maxLength) {
  if(!text) return;
  text = text.trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
}