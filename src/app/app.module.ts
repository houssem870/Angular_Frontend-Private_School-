import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthInterceptor} from "./auth/AuthInterceptor.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './signUp/signUp.component';
import { SignInComponent } from './signIn/signIn.component';
import {AuthService} from "../app/auth/Auth.service";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormationComponent } from './FormationWork/formation/formation.component';
import { QuizComponent } from './QuizWork/quiz/quiz.component';
import { QuizFormComponent } from './QuizWork/quiz-form/quiz-form.component';
import { MarketplaceComponent } from './MarketPlaceWork/marketplace/marketplace.component';
import { MarketplaceFormComponent } from './MarketPlaceWork/marketplace-form/marketplace-form.component';
import { HomeComponent } from './home/home.component';
import { GetoneformationComponent } from './FormationWork/getoneformation/getoneformation.component';
import { PassquizComponent } from './QuizWork/passquiz/passquiz.component';
import { FormsModule } from '@angular/forms';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { SessionComponent } from './session/session/session.component';
const customNotifierOptions: NotifierOptions = {
  position: {
      horizontal: {
          position: 'right',
          distance: 12
      },
      vertical: {
          position: 'top',
          distance: 12,
          gap: 10
      }
  },

  animations: {
      enabled: true,
      show: {
          preset: 'slide',
          speed: 300,
          easing: 'ease'
      },
      hide: {
          preset: 'fade',
          speed: 300,
          easing: 'ease',
          offset: 50
      },
      shift: {
          speed: 300,
          easing: 'ease'
      },
      overlap: 150
  }
};
@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    QuizComponent,
    QuizFormComponent,
    MarketplaceComponent,
    MarketplaceFormComponent,
    HomeComponent,
    GetoneformationComponent,
    PassquizComponent,
    SignUpComponent,
    SignInComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions),

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
