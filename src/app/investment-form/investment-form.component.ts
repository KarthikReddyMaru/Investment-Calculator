import { InvestmentService } from '../investment-summary/investment-summary.service';
import { Component, EventEmitter, Output, signal } from '@angular/core';
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
    initialInvestment: signal(10000),
    annualInvestment: signal(200),
    expectedReturn: signal(12),
    duration: signal(6)
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
