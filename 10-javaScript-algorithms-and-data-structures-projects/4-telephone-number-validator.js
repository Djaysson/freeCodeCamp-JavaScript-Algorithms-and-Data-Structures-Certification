function telephoneCheck(str) {
  const validation = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  const validSearch = validation.test(str);
  return validSearch;
}

telephoneCheck("555-555-5555");