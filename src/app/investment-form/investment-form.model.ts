import { Signal } from "@angular/core";

export interface InvestmentFormModel {
  initialInvestment: Signal<number>,
  annualInvestment: Signal<number>,
  expectedReturn: Signal<number>,
  duration: Signal<number>
}
