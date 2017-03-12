import {User} from '../model/user';

// Imports
import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  private userUrl = 'http://localhost:3000/auth/token';

  // Fetch all existing comments
  login(username, password): Observable<User[]> {
    return this.http.post(this.userUrl, JSON.stringify({username: username, password: password}))
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
