function rot13(str) {
  const cifra = str;
  return cifra.replace(/[A-Z]/g, (letter) =>
    String.fromCharCode((letter.charCodeAt(0) % 26) + 65)
  );
}

rot13("SERR PBQR PNZC");