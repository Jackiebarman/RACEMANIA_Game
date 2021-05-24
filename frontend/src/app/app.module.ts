import { EnrollmentService } from './enrollment.service';
import { EmployeeService } from './employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AppService } from './services/app.service';
import { GameService } from './services/game.service';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrevYearsComponent } from './prev-years/prev-years.component';
import { LoggedinuserComponent } from './loggedinuser/loggedinuser.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RulesComponent } from './rules/rules.component';
import { ExamComponent } from './exam/exam.component';
import { UsersService } from './services/users.service';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { EasyComponent } from './easy/easy.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ScoreComponent } from './score/score.component';
import { Login2Component } from './login2/login2.component';
import { HistoryComponent } from './history/history.component';
import { Login3Component } from './login3/login3.component';
import { Game2Component } from './game2/game2.component';
import { GameComponent } from './game/game.component';
import { PlayComponent } from './play/play.component';
import { FunzoneComponent } from './funzone/funzone.component';
import { RacecoinComponent } from './racecoin/racecoin.component';
import { SorryComponent } from './sorry/sorry.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NotfoundComponent,
    ContactUsComponent,
    PrevYearsComponent,
    LoggedinuserComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    RulesComponent,
    ExamComponent,
    StudentlistComponent,
    EasyComponent,
    EmployeeListComponent,
    ScoreComponent,
    Login2Component,
    HistoryComponent,
    Login3Component,
    Game2Component,
    GameComponent,
    PlayComponent,
    FunzoneComponent,
    RacecoinComponent,
    SorryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ], 
  providers: [EnrollmentService,UsersService,EmployeeService,AppService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
