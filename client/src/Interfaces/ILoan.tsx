export interface ILoan {
    _id: string | null
    loan: string
    originalAmount: number
    currentAmount: number
    lender: string
    interestRate: number
}
