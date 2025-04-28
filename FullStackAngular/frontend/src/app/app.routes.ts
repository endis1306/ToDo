import { Routes } from '@angular/router';
import { OpublikowaneConteinerComponent } from './opublikowane-conteiner/opublikowane-conteiner.component';
import { SercherContainerComponent } from './sercher-container/sercher-container.component';
import { FormTutorialContainerComponent } from './form-tutorial-container/form-tutorial-container.component';

export const routes: Routes = [
    { path: '', component: OpublikowaneConteinerComponent },
    { path: 'serch', component: SercherContainerComponent },
    { path: 'add', component: FormTutorialContainerComponent}
];


