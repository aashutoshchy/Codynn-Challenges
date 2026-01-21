function validate_emails(emails) {
  let invalidEmails = [];
  let validEmails = [];
  for (let email of emails) {
    let atIndex = email.indexOf("@");
    let dotIndex = email.indexOf(".", atIndex + 1);
    if (!email.includes("@")) {
      invalidEmails.push(email);
      continue;
    }
    if (dotIndex == -1 || dotIndex == atIndex) {
      invalidEmails.push(email);
      continue;
      validEmails.push(email);
    }
    console.log(validEmails);
    console.log(invalidEmails);
  }
}
