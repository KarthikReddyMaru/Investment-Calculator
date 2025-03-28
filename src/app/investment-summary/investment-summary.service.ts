import { Injectable, signal } from "@angular/core";
import { InvestmentFormModel } from "../investment-form/investment-form.model";
import { InvestmentSummaryModel } from "./investment-summary.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  calculateInvestmentResults(investmentForm: InvestmentFormModel) {
    const annualData = [];
    let investmentValue = investmentForm.initialInvestment();

    for (let i = 0; i < investmentForm.duration(); i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investmentForm.expectedReturn() / 100);
      investmentValue += interestEarnedInYear + investmentForm.annualInvestment();
      const totalInterest =
        investmentValue - investmentForm.annualInvestment() * year - investmentForm.initialInvestment();
      const investmentSummary: InvestmentSummaryModel = {
        year: signal(year),
        interest: signal(interestEarnedInYear),
        valueEndOfYear: signal(investmentValue),
        annualInvestment: signal(investmentForm.annualInvestment()),
        totalInterest: signal(totalInterest),
        totalAmountInvested: signal(investmentForm.initialInvestment() + investmentForm.annualInvestment() * year)
      };
      annualData.push(investmentSummary);
    }

    return annualData;
  }
}
