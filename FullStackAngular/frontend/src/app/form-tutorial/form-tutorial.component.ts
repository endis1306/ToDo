import { Component } from '@angular/core';
import { HttpService } from '../../../http.service';
import { SharedModule } from '../../../shared.module';
import { NgForm } from '@angular/forms';
import { model } from '@angular/core'; 


@Component({
  selector: 'app-form-tutorial',
  imports: [SharedModule],
  templateUrl: './form-tutorial.component.html',
  styleUrl: './form-tutorial.component.css'
})
export class FormTutorialComponent {
  tutorial: any = {
    tytul: "",
    opis: "",
    opublikowany: false
  };

  alert: any = {
    class: '',
    message: ''
  };

  constructor(private httpService: HttpService){}

  setData(form: NgForm) {
    if(form.invalid) {
      this.alert = {
        class: 'alert alert-danger text-center',
        message: 'Wypełnij wszystkie pola!'
      };
      return;
      }
      const formData = form.value;
      this.httpService.postTutorial(formData).subscribe(
        response => {
          console.log("otrzymany komunikat:", response);
          form.reset();
          this.alert = {
            class: 'alert alert-success text-center',
            message: 'Tutorial został wysłany!'
          };
        }, error => {
          console.log("Błąd:", error);
        }
      );

    }
  }
  

