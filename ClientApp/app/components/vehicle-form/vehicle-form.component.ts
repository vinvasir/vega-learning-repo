import { MakeService } from './../../services/make.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html'
})
export class VehicleFormComponent implements OnInit {
  private vehicle: any = {};

  private makes: any[];

  private models: any[];

  constructor(private makeService: MakeService) { }

  ngOnInit() {
    this.makeService.getMakes().subscribe(
      makes => this.makes = makes
    )
  }

  onMakeChange() {
    let selectedMake = this.makes.find(m => m.id == this.vehicle.make);

    this.models = selectedMake.models;
  }
}
