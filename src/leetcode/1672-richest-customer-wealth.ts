export function maximumWealth(accounts: number[][]): number {
    return accounts.reduce((maxResult, acct) => {
        const customerWealth = acct.reduce((total, moneyInAcct) => total + moneyInAcct, 0);
        return Math.max(maxResult, customerWealth);
    }, 0);
}
