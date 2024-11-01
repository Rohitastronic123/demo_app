import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { ResumeBuilder2Component } from './resume-builder2/resume-builder2.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'resume-builder', component: ResumeBuilderComponent },
  { path: 'app-resume-builder2', component: ResumeBuilder2Component }
  // Additional routes can be added here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
