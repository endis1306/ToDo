import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { OpublikowaneComponent } from '../opublikowane/opublikowane.component';

@Component({
  selector: 'app-opublikowane-conteiner',
  imports: [SharedModule, OpublikowaneComponent],
  templateUrl: './opublikowane-conteiner.component.html',
  styleUrl: './opublikowane-conteiner.component.css'
})
export class OpublikowaneConteinerComponent {

}
