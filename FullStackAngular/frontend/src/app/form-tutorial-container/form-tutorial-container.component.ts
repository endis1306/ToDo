import { Component } from '@angular/core';
import { FormTutorialComponent } from '../form-tutorial/form-tutorial.component';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'app-form-tutorial-container',
  imports: [SharedModule, FormTutorialComponent],
  templateUrl: './form-tutorial-container.component.html',
  styleUrl: './form-tutorial-container.component.css'
})
export class FormTutorialContainerComponent {

}
