import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importando componentes.
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [ CommonModule ],
    exports: [
        NavbarComponent
    ],
    providers: [],
})
export class SharedModule {}