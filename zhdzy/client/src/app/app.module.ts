import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { UserManagementComponenComponent } from './user-management-componen/user-management-componen.component';
import { ManagementComponentComponent } from './management-component/management-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ExitComponentComponent } from './exit-component/exit-component.component';
import { LoginGuard } from './login.guard';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

const mgtChildrenRoutes: Routes = [
  { path: 'user', component: UserManagementComponenComponent },
  { path: 'product', component: ProductComponentComponent },
  { path: 'exit', component: ExitComponentComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponentComponent },
  {
    path: 'management',
    component: ManagementComponentComponent,
    children: mgtChildrenRoutes,
    canActivate: [LoginGuard]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    UserManagementComponenComponent,
    ManagementComponentComponent,
    ProductComponentComponent,
    ExitComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // <---引入路由模块
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [LoginGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
