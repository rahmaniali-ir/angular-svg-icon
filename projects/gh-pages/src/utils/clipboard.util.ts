function fallbackCopyTextToClipboard(text: string) {
  const textArea = document.createElement('textarea');
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let successful = false;

  try {
    successful = document.execCommand('copy');
  } catch (err) {}

  document.body.removeChild(textArea);
  return successful;
}

export function copyTextToClipboard(text: string) {
  if (navigator.clipboard) navigator.clipboard.writeText(text);
  else fallbackCopyTextToClipboard(text);
}
