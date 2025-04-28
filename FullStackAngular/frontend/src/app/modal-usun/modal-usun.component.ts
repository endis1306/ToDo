import { Component, Input } from '@angular/core';
import { HttpService } from '../../../http.service';
import { SharedModule } from '../../../shared.module';
import { model } from '@angular/core'; 

@Component({
  selector: 'app-modal-usun',
  imports: [SharedModule],
  templateUrl: './modal-usun.component.html',
  styleUrl: './modal-usun.component.css'
})
export class ModalUsunComponent {
  @Input() tutorial: any = {}; 

  closeModalEvent = model<boolean>(true);
  refreshDataTable = model<boolean>(false);


  constructor(private httpService: HttpService) {}
  

  deleteTutorial() {
    this.httpService.deleteTutorial(this.tutorial.id).subscribe(
      response => {
        console.log('Tutorial usunięty:', response);
        this.closeModal();  
        this.refreshDataTable.update(flag => !flag);
      },
      error => {
        console.error('Błąd podczas usuwania tutorialu:', error);
      }
    );
  }

  closeModal() {
    this.closeModalEvent.update(flag => !flag);  
  }

  
}
