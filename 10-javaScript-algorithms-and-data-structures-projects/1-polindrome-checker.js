function palindrome(str) {
  const checker = str;
  return (
    checker.replace(/[\W_]/g, "").toLowerCase() ===
    checker.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")
  );
}