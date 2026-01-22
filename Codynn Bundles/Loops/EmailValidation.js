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

function validate_emails(emails) {
  validEmail = [];
  inValidEmail = [];
  for (let email of emails) {
    if (!email.includes("@")) {
      inValidEmail.push(email);
      continue;
    }
    atIndex = email.indexOf("@");
    dotIndex = email.indexOf(".", atIndex + 1);
    if (dotIndex === -1) {
      inValidEmail.push(email);
      continue;
    }
    if (atIndex + 1 === dotIndex) {
      inValidEmail.push(email);
      continue;
    }
    validEmail.push(email);
  }
  console.log("Valid emails:");
  for (let email of validEmail) {
    console.log(email);
  }
  console.log("\nInvalid emails:");
  for (let email of inValidEmail) {
    console.log(email);
  }
}
