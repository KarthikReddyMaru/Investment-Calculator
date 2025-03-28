import { InvestmentService } from '../investment-summary/investment-summary.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentFormModel } from './investment-form.model';
import { InvestmentSummaryModel } from '../investment-summary/investment-summary.model';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.css'
})
export class InvestmentFormComponent {
  investmentForm: InvestmentFormModel = {
    initialInvestment: 10000,
    annualInvestment: 200,
    expectedReturn: 12,
    duration: 6
  };

  @Output() displaySummary = new EventEmitter<InvestmentSummaryModel[]>();

  constructor(private investmentService: InvestmentService) { }

  onCalculate() {
    console.log("Clicked Calculate" + this.investmentForm);
    this.displaySummary.emit(
      this.investmentService.calculateInvestmentResults(this.investmentForm)
    );
  }
}
