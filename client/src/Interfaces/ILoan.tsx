export interface ILoan {
    _id?: string
    loan: string
    originalAmount: number
    currentAmount: number
    lender: string
    interestRate: number
}
