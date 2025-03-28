import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { InvestmentFormComponent } from "./investment-form/investment-form.component";
import { NgIf } from '@angular/common';
import { InverstmentSummaryComponent } from "./investment-summary/investment-summary.component";
import { InvestmentSummaryModel } from './investment-summary/investment-summary.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentFormComponent, InverstmentSummaryComponent, NgIf],
})
export class AppComponent {
  isCalculateClicked: boolean = false;
  investmentSummary: InvestmentSummaryModel[] = [];

  onCalculate(investmentSummary : InvestmentSummaryModel[]) {
    this.isCalculateClicked = true;
    this.investmentSummary = investmentSummary;
  }
}
