/* * * ./app/comments/components/comment-box.component.ts * * */
// Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmitterService } from '../../service/emitter.service';
import { AuthenticationService } from '../../service/auth.service';
import { Router } from '@angular/router';

// Component decorator
@Component({
  selector: 'login-box',
  templateUrl: 'login.html',
  styleUrls: ['./login.less']
})
// Component class
export class LoginComponent {
  loading = false;
  error = '';
  user : any = {};

  // Constructor
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ){}

  // Define input properties
  // @Input() comment: Comment;
  // @Input() listId: string;
  @Input() editId:string;


  login1() {
    // Emit edit event
    EmitterService.get(this.editId).emit(this.user);
  }

  login() {
    this.loading = true;
    console.log('login with: ' + this.user.username + ' : ' + this.user.password);
    // Call removeComment() from CommentService to delete comment
    this.authService.login(this.user.username, this.user.password).subscribe(

      result => {
        if (result) {
          // login successful
          this.router.navigate(['shop']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      },
      err => {
        // Log errors if any
        console.log(err);
        this.error = 'Username or password is incorrect';
        this.loading = false;
      });
  }
}
