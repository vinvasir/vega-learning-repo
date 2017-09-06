import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html'
})
export class VehicleFormComponent implements OnInit {
  private vehicle: any = {};

  private makes: any[];

  private features: any[];

  private models: any[];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getMakes().subscribe(
      makes => this.makes = makes
    )

    this.vehicleService.getFeatures().subscribe(
      features => this.features = features
    )
  }

  onMakeChange() {
    let selectedMake = this.makes.find(m => m.id == this.vehicle.make);

    this.models = selectedMake ? selectedMake.models : [];
  }
}
