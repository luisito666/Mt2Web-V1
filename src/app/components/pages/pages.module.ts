import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importando componentes de las paginas
import { DescriptionComponent } from './description/description.component';
import { DonationsComponent } from './donations/donations.component';
import { IntroComponent } from './intro/intro.component';
import { SignupComponent } from './signup/signup.component';
import { SystemreqComponent } from './systemreq/systemreq.component';
import { DownloadComponent } from './download/download.component';


@NgModule({
    declarations: [
        DescriptionComponent,
        DonationsComponent,
        IntroComponent,
        SignupComponent,
        SystemreqComponent,
        DownloadComponent
    ],
    imports: [ CommonModule ],
    exports: [
        DescriptionComponent,
        DonationsComponent,
        IntroComponent,
        SignupComponent,
        SystemreqComponent,
        DownloadComponent
    ],
    providers: [],
})

export class PagesModule {}
