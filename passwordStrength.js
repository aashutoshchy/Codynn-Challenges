function checkPasswordStrength(password) {
  len = password.length;
  let strength = 0;
  if (len < 8) return "Weak";
  if (password.match(/[a-z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[!@#$%^&*]/)) strength++;

  switch (strength) {
    case 1:
      return "Moderate";
    case 2:
      return "Strong";
    case 3:
      return "Very Strong";
  }
}
