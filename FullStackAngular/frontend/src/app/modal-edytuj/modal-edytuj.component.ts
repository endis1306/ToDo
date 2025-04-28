import { Component, Input } from '@angular/core';
import { HttpService } from '../../../http.service'; 
import { model } from '@angular/core'; 
import { SharedModule } from '../../../shared.module';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-edytuj',
  templateUrl: './modal-edytuj.component.html',
  styleUrls: ['./modal-edytuj.component.css'],
  imports: [SharedModule],
  standalone: true
})
export class ModalEdytujComponent {
  @Input() tutorial: any = {
  }; 

  closeModalEvent = model<boolean>(true);
  refreshDataTable = model<boolean>(false);
  alert: any = { class: '', message: '' };

  constructor(private httpService: HttpService) {}
  

  editTutorial(form: NgForm) {
    if (form.invalid) {
      this.alert = {
        class: 'alert alert-danger text-center',
        message: 'Wypełnij wszystkie pola!'
      };
      return;
    }
    console.log(form.value)
    const formData = form.value;
    console.log("ssfsdf");
    console.log(formData);
    this.httpService.updateTutorial(this.tutorial.id, formData).subscribe(
      response => {
        console.log('Tutorial zaktualizowany:', response);
        this.closeModal();  
        this.refreshDataTable.update(flag => !flag);
      },
      error => {
        console.error('Błąd podczas aktualizacji tutorialu:', error);
      }
    );
    
  }

  closeModal() {
    this.alert = { class: '', message: '' };
    this.closeModalEvent.update(flag => !flag);  
  }

  
}
