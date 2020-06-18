import { AppComponent } from './app.component';
import { PrevYearsComponent } from './prev-years/prev-years.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoggedinuserComponent } from './loggedinuser/loggedinuser.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { RulesComponent } from './rules/rules.component';
import { ExamComponent } from './exam/exam.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { EasyComponent } from './easy/easy.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ScoreComponent } from './score/score.component';
import { HistoryComponent } from './history/history.component';
const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:"full"},
{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'contact-us',component:ContactUsComponent},
{path:'register',component:RegisterComponent},
{path:'prev_years',component:PrevYearsComponent},
{path:'login/user',component:LoggedinuserComponent},
{path:'user/profile',component:ProfileComponent},
{path:'rules',component:RulesComponent},
{path:'exam',component:ExamComponent},
{path:'login',component:LoginComponent},
{path:'login2',component:Login2Component},
{path:'login3',component:Login3Component},
{path:'studentlist',component:StudentlistComponent},
{path:'easy',component:EasyComponent},
{path:'employee-list',component:EmployeeListComponent},
{path:'score',component:ScoreComponent},
{path:'history',component:HistoryComponent},
{path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
