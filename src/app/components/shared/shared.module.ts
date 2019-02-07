import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importando componentes.
import { NavbarComponent } from './navbar/navbar.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { UserManagerPlayersComponent } from './user-manager/user-manager-players.component';
import { UserManagerPasswdComponent } from './user-manager/user-manager-passwd.component';
import { UserManagerDonationsComponent } from './user-manager/user-manager-donations.component';
import { PlayersComponent } from './wigets/players.component';
import { GuildsComponent } from './wigets/guilds.component';


@NgModule({
    declarations: [
        NavbarComponent,
        UserManagerComponent,
        UserManagerPlayersComponent,
        UserManagerPasswdComponent,
        UserManagerDonationsComponent,
        PlayersComponent,
        GuildsComponent
    ],
    imports: [ CommonModule ],
    exports: [
        NavbarComponent,
        UserManagerComponent
    ],
    providers: [],
})
export class SharedModule {}