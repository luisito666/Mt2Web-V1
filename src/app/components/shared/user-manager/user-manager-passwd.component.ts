import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manager-passwd',
  template: `
  <form action="" method="get" class="form_chanpass">
    <h2 class="title_form_chanpass">
        Cambio de Contraseña
    </h2>
    <div class="input_form_chanpass">
        <label for="current_password">Contraseña Actual</label>
        <input type="password" name="current_password" id="current_password" placeholder="*******" required>
    </div>
    <div class="input_form_chanpass">
        <label for="new_password">Nueva Contraseña</label>
        <input type="password" name="new_password" id="new_password" placeholder="*******" required>
    </div>
    <div class="input_form_chanpass">
        <label for="confirm_new_password">Confirmar Contraseña</label>
        <input type="password" name="confirm_new_password" id="confirm_new_password" placeholder="*******" required>
    </div>
    <button class="button" type="submit">
        Aceptar
    </button>
  </form>
  `,
  styles: []
})
export class UserManagerPasswdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
