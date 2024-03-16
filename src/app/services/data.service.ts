import { Injectable } from '@angular/core';
import { Observable, from, switchMap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as Realm from "realm-web";
const realmAppId = 'data-jynqh';
@Injectable({
  providedIn: 'root'
})
export class IntegrantesService {
  private app: Realm.App;
  private user$: Observable<Realm.User>; // Use an Observable to track the login process

  constructor() {
    this.app = new Realm.App({ id: realmAppId });

    // Immediately try to log in and store the resulting Observable
    this.user$ = from(this.login());
  }

  private async login(): Promise<Realm.User> {
    const credentials = Realm.Credentials.anonymous();
    try {
      return await this.app.logIn(credentials);
    } catch (error) {
      const e = error as Error;
      console.error("Error logging into Realm:", e.message);
      // Additional error handling as needed
      throw e;
    }
  }

  // General method to call a Realm function, ensuring user is logged in first
  private callRealmFunction(functionName: string, args: any[] = []): Observable<any> {
    return this.user$.pipe(
      switchMap(user => 
        from(user.functions[functionName](...args))
      ),
      catchError(error => {
        console.error(`Error calling Realm function ${functionName}`, error);
        throw error;
      })
    );
  }

  // Define methods for each collection
  obtenerDirectiva(): Observable<any[]> {
    return this.callRealmFunction('getDirectivas', []);
  }

  obtenerGaleria(): Observable<any[]> {
    return this.callRealmFunction('getGalerias', []);
  }

  obtenerMusicos(): Observable<any[]> {
    return this.callRealmFunction('getIntegrantes', []);
  }

  obtenerInfo(): Observable<any[]> {
    return this.callRealmFunction('getInfos', []);
  }

  obtenerEventos(): Observable<any[]> {
    return this.callRealmFunction('getEventos', []);
  }
}