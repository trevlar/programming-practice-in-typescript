import { numUniqueEmails } from './929-unique-email-addresses';

describe('number of unique emails', () => {
  it('should get 2 unique emails after cleanup.', () => {
    const emails: string[] = [
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com',
    ];
    const results = numUniqueEmails(emails);

    expect(results).toBe(2);
  });

  it('should result in 3 distinct emails when they are different', () => {
    const emails: string[] = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'];
    const results = numUniqueEmails(emails);

    expect(results).toBe(3);
  });
});
