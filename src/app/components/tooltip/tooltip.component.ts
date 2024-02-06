import { Component } from '@angular/core';

@Component({
  selector: 'tooltip-info',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {


  isTooltipVisible: boolean = false;

  showTooltip() {
    this.isTooltipVisible = true;

  }

  hideTooltip() {
    this.isTooltipVisible = false;


  }
}
