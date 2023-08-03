import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faKey, faLock } from '@fortawesome/free-solid-svg-icons';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {
  nome: string = '';
  cognome: string = '';
  email: string = '';
  password: string = '';
  passwordCtrl: string = '';

faenvelope= faEnvelope;
faUser = faUser;
faLock=faLock;
faKey=faKey;
  constructor(private registrationService: RegistrationService) {}

   

  onSubmit() {
    if (this.password != this.passwordCtrl) {
      alert('ATTENZIONE: la password non è uguale');
      return false;
    }
    this.registrationService.register(this.nome, this.cognome, this.email, this.password).subscribe({
      next: (risultati) => {
        window.alert('Regisatrazione avvenuta con successo')
        console.log('Registrazione avvenuta con successo!', risultati);
      },
      error: (error) => {
alert('Registrazione fallita')
        console.error('Errore durante la registrazione:', error);
      }
    });
    return true;
  }
}
