import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { SercherViewComponent } from "../sercher-view/sercher-view.component";

@Component({
  selector: 'app-sercher-container',
  imports: [SharedModule, SercherViewComponent],
  templateUrl: './sercher-container.component.html',
  styleUrl: './sercher-container.component.css'
})
export class SercherContainerComponent {

}
