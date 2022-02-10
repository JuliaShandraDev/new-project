import { Component, OnInit } from '@angular/core';
import {BeaconService} from "../service/beacon.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public status: boolean = false;
  public selectedNetwork: string = 'mainnet'
  public networkName: string | undefined
  public networkRpcUrl: string | undefined

  constructor(private readonly beaconService: BeaconService,) {}

  public clickEvent(){
    this.status = !this.status;
  }

  public async askForPermissions(): Promise<void> {
    await this.beaconService.client.requestPermissions({
      network: {
        type: this.selectedNetwork as any,
        name: this.networkName,
        rpcUrl: this.networkRpcUrl
      }
    })
  }

  ngOnInit(): void {
  }

}
