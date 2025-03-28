import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InvestmentSummaryModel } from './investment-summary.model';

@Component({
  selector: 'app-inverstment-summary',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './investment-summary.component.html',
  styleUrl: './investment-summary.component.css'
})
export class InverstmentSummaryComponent {

  @Input({ required: true }) investmentSummary!: InvestmentSummaryModel[];

}
