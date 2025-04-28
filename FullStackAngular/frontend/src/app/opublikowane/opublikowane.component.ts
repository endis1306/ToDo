import { Component, OnInit} from '@angular/core';
//import NgForm } from '@angular/forms';
import { HttpService } from '../../../http.service';
//{ model } from '@angular/core'; 
import { SharedModule } from '../../../shared.module';
import { ModalEdytujComponent } from '../modal-edytuj/modal-edytuj.component';
import { ModalUsunComponent } from '../modal-usun/modal-usun.component';
@Component({
  selector: 'app-opublikowane',
  imports: [SharedModule, ModalEdytujComponent, ModalUsunComponent],
  templateUrl: './opublikowane.component.html',
  styleUrl: './opublikowane.component.css'
})
export class OpublikowaneComponent implements OnInit {
  refreshData: boolean = false;
  previousRefreshData: boolean = this.refreshData;
  EventModalEdytuj: boolean = false;
  EventModalUsun: boolean = false;
  dataToModal: Object = {};
  data: any = [];

  constructor(private httpService: HttpService){}
  
  initModalEdytuj(row: any): void {
    this.dataToModal = row;
    this.EventModalEdytuj = !this.EventModalEdytuj; 
  }

  initModalUsun(row: any): void {
    this.dataToModal = row;
    this.EventModalUsun = !this.EventModalUsun
  }

  fetchData() {
    this.httpService.getOpublikowane().subscribe(
      data => {
        this.data = data;
        console.log('Otrzymane dane:', this.data);
      },
      error => {
        console.error('Błąd podczas pobierania danych:', error);
      }
    );
  }

  ngOnInit() {
    this.fetchData();
    console.log(this.data)
    console.log("elo")
  }

  ngDoCheck() {
    if (this.refreshData !== this.previousRefreshData) {
      this.fetchData(); 
      this.previousRefreshData = this.refreshData;
    }
  }


  getOpublikowane(): void {
    this.httpService.getOpublikowane().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Błąd podczas pobierania danych:', error);
      }
    );
  }

  
}