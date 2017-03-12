import {BaseRequestOptions} from '@angular/http';
import {Injectable}     from '@angular/core';

@Injectable()
export class AuthRequest  extends BaseRequestOptions {
  constructor() {
    super();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    let currentUser = JSON.parse(localStorage.getItem('CurrentUser'));
    if(currentUser){
      this.headers.append('Authorization', 'JWT ' + (currentUser && currentUser.token));
    }
  }
}
