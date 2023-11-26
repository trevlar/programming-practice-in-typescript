export function numUniqueEmails(emails: string[]): number {
  const results = emails.reduce((uniqueEmails, email) => {
    const [name, domain] = email.split('@');
    const [localName] = name.split('+');

    const forwardEmail = `${localName.replaceAll('.', '')}@${domain}`;

    uniqueEmails.add(forwardEmail);

    return uniqueEmails;
  }, new Set());

  return results.size;
}
