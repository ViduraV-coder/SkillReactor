import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Asset } from '../models/asset.model';
import { DashboardServices } from '../services/dashboard.service';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  assetMessage = '';
  cyptoArray: any;
  addEditButton = "Add Asset";
  addEditButtonID = "dashboard_add_button";

  addCryptoForm = this.formBuilder.group({
    dashboard_token: null,
    dashboard_quantity: null
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dashboardServices: DashboardServices,
    private readonly appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.appComponent.edited = true;
    this.populateTableData();
  }

  addCrypto(): void {
    const tokenName = this.addCryptoForm.value.dashboard_token;
    const tokenQuantity = +this.addCryptoForm.value.dashboard_quantity;

    if (tokenName !== null && tokenQuantity !== null && tokenName !== '') {
      const asset = new Asset(tokenName, tokenQuantity);

      this.dashboardServices.addAsset(asset).subscribe(
        (response) => {
          if (response.ok) {
            this.cyptoArray.push({ token: tokenName, quantity: tokenQuantity });
            this.assetMessage = 'Asset added succefully';
          }
        },
        (error) => {
          console.log(error);
          this.assetMessage = 'Error: An error has occurred ';
        }
      );
    } else {
      this.assetMessage = 'Error: Please fill all the details';
    }
  }

  deleteCrypto(rowIdx: number, tokenName:string, tokenQuantity: number): void {

    const asset = new Asset(tokenName, +tokenQuantity);

    this.dashboardServices.deleteAsset(asset).subscribe(
      (response) => {
        if (response.ok) {
          this.cyptoArray.splice(rowIdx, 1);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editCrypto(rowIdx: number, tokenNameT:string, tokenQuantityT: number): void {

    this.addCryptoForm.controls['dashboard_token'].setValue(tokenNameT);
    this.addCryptoForm.controls['dashboard_quantity'].setValue(tokenQuantityT);

    this.addEditButton = 'Save Asset';
    this.addEditButtonID = 'dashboard_save_button';

  }

  populateTableData(): void {
    this.dashboardServices.getAssets().subscribe(
      (response) => {
        if (response.ok) {
          this.cyptoArray = response.body;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
