import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  state: any;

  constructor(private fire: AngularFireAuth) {
    fire.authState.subscribe((state) => {
      // console.clear();
      // tslint:disable-next-line:no-unused-expression
      state !== null ? console.log(state) : 0;
    });

    this.state = fire.authState;
  }

  createUserWithEmailAndPassword(email: string, password: string) {
    return this.fire.auth.createUserWithEmailAndPassword(email, password);
  }

  getCurrentUid() {
    return this.fire.authState.pipe(
      map((user) => {
        if (user !== null) { return user.uid; }
      })
    );
  }

  signIn(email: string, password: string) {
    return this.fire.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.fire.auth.signOut();
  }

}
