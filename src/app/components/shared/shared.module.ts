import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importando componentes.
import { NavbarComponent } from './navbar/navbar.component';
import { UserManagerComponent } from './user-manager/user-manager.component';


@NgModule({
    declarations: [
        NavbarComponent,
        UserManagerComponent
    ],
    imports: [ CommonModule ],
    exports: [
        NavbarComponent,
        UserManagerComponent
    ],
    providers: [],
})
export class SharedModule {}