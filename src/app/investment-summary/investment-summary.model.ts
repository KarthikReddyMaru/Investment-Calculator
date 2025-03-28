import { Signal } from "@angular/core";

export interface InvestmentSummaryModel {
  year: Signal<number>,
  interest: Signal<number>,
  valueEndOfYear: Signal<number>,
  annualInvestment: Signal<number>,
  totalInterest: Signal<number>,
  totalAmountInvested: Signal<number>
}
