import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.scss']
})
export class EntryPageComponent implements OnInit {
  public rangeMonthyInc: number = 150000;
  public rangeMonthyExp: number = 20000;
  public cardActiveVal: number = 4;
  public repayMentControl = new FormControl('6');

  public card1Elements = [
    {
      img: './../../../assets/img/Get Paid Instantly.png',
      header: 'Quick cash disbursement',
      subText: 'Get terms loans that your business needs within 72hrs',
      value: 1
    },
    {
      img: './../../../assets/img/Low interest rate.png',
      header: 'Low-interest rate',
      subText: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
      value: 2
    },
    {
      img: './../../../assets/img/Secure Payments.png',
      header: 'Zero Paperwork',
      subText: 'Get started instantly by submitting only your basic details & bank statements',
      value: 3
    }
  ]
  public card2Elements = [
    {
      img: './../../../assets/img/freelancer_feature_icon_6@1.5x.png',
      header: 'Ace your business finances',
      subText: 'Manage banking, accounting & everything in between, on one platform',
      value: 4
    },
    {
      img: './../../../assets/img/Covid.png',
      header: 'Loans to fight COVID-19',
      subText: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
      value: 5
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  // update the slider value on change for both rangeMonthyInc and rangeMonthyExp based on identifier
  public updateSetting(event, identifier): void {
    this[identifier] = event.value;
  }
  // update the card active value on select the value
  public updateCardActive(val: number): void {
    this.cardActiveVal = val;
  }
}
