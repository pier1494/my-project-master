import { Component, NgModule } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faKey, faLock } from '@fortawesome/free-solid-svg-icons';
import { RegistrationService } from 'src/app/services/registration.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

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

  faenvelope = faEnvelope;
  faUser = faUser;
  faLock = faLock;
  faKey = faKey;
  datiinput=  new FormControl();
  value!: string;
  constructor(private registrationService: RegistrationService) {
    this.datiinput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((value) => {
      this.value = this.convertToLowerCase(value);
      console.log(this.value);
    });
    }
  

  onSubmit() {
    if (this.password != this.passwordCtrl) {
      alert('ATTENZIONE: la password non è uguale');
      return false;
    }

    this.registrationService.register(this.nome, this.cognome, this.email, this.password).pipe(
      switchMap((risultati) => {
        return of(risultati).pipe(
          tap((ris) => {
            window.alert('Registrazione avvenuta con successo');
            console.log('Registrazione avvenuta con successo!', ris);
          })
        );
      }),
    ).subscribe({
      error: (error) => {
        alert('Registrazione fallita');
        console.error('Errore durante la registrazione:', error);
      }
    });

    return true;
  }

  convertToLowerCase(value: string) {
    return value.toLowerCase();
  }

  setupInputObserver(control: FormControl) {
    return control.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value) => {
        return of(this.convertToLowerCase(value)).pipe(
          tap((lowercaseValue) => {
            console.log(lowercaseValue);
          })
        );
      })
    );
  }
}
