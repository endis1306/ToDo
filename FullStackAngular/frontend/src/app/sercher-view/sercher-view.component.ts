import { Component } from '@angular/core';
import { HttpService } from '../../../http.service';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'app-sercher-view',
  imports: [SharedModule],
  templateUrl: './sercher-view.component.html',
  styleUrl: './sercher-view.component.css'
})
export class SercherViewComponent {
  dataGet: any = [];
  dataSend: string = '';
  serchMethod: string = '1';
  pText: string = '';

  constructor(private httpService: HttpService){}

  getData() {
    if (this.serchMethod === '1') {
      this.httpService.getTutorialsByTytul(this.dataSend).subscribe(
        response => {
          console.log("Odebrano dane:", response);
          this.dataGet = response;
          this.pText = (this.dataGet.length)? '': 'Brak danych do wyświetlenia.';
        }, error => {
          console.log("Bląd:", error);
        }
      )
    } else {
      this.httpService.getTutorialById(this.dataSend).subscribe(
        response => {
          console.log("Odebrano Dane:", response);

          this.dataGet = response;
          this.pText = (this.dataGet.length)? '': 'Brak danych do wyświetlenia.';
        }, error => {
          console.log("Bląd:", error);
        }
      )
    }
    
}

}
