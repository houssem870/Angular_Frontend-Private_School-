import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuizFormComponent } from './QuizWork/quiz-form/quiz-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './QuizWork/quiz/quiz.component';
import { FormationComponent } from './FormationWork/formation/formation.component';
import { MarketplaceComponent } from './MarketPlaceWork/marketplace/marketplace.component';
import { MarketplaceFormComponent } from './MarketPlaceWork/marketplace-form/marketplace-form.component';
import { HomeComponent } from './home/home.component';
import { GetoneformationComponent } from './FormationWork/getoneformation/getoneformation.component';
import { PassquizComponent } from './QuizWork/passquiz/passquiz.component';
import {SignUpComponent} from "./signUp/signUp.component";
import {SignInComponent} from "./signIn/signIn.component";
import{ SessionComponent} from "./session/session/session.component";

const routes: Routes = [
   {path:"",redirectTo:"home",pathMatch:"full"},
   {path:"Formation",component:FormationComponent},
   {path:"quiz",component:QuizComponent},
   {path:"AddQuiz",component:QuizFormComponent},
   {path:"Templates",component:MarketplaceComponent},
   {path:"AddTemplates",component:MarketplaceFormComponent},
   {path:"home",component:HomeComponent},
   {path:"Details/:idFormation",component:GetoneformationComponent},
   {path:"Details",component:GetoneformationComponent},
   {path:"PassQuiz/:idQuiz",component:PassquizComponent},
   { path:"register",component:SignUpComponent},
   {path:"login" ,component:SignInComponent},
   {path:"session", component:SessionComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
   ],
   exports: [RouterModule]

})
export class AppRoutingModule { }
