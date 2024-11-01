import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
   // Listens for click events on the window
   @HostListener('document:click', ['$event'])
   handleClick(event: MouseEvent) {
     // Check if the click is outside the menu
     const targetElement = event.target as HTMLElement;
     const menuButton = document.querySelector('.menu-button') as HTMLElement;
 
     if (this.isMenuOpen && menuButton && !menuButton.contains(targetElement)) {
       this.isMenuOpen = false; // Close the menu if clicked outside
     }
   }
  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      width: '400px', // Width of the dialog
      height: 'auto', // Automatic height adjustment
      disableClose: true, // Prevent closing on outside click (optional)
    });
  }

  openSignupDialog() {
    this.dialog.open(SignupComponent ,{
      width: '500px', // Width of the dialog
      height: 'auto', // Automatic height adjustment
      disableClose: true, // Prevent closing on outside click (optional)
    
    });
  }

  ngOnInit() {
  }

}
