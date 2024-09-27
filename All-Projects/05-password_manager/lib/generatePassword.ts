export const generatePassword = (length = 12) => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxz0123456789!#$%&/()_*-+={}[]:<>?|;,@";
  let password = "";
  for (let index = 0, n = charset.length; index < length; ++index) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
};
