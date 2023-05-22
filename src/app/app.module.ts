import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GetuserComponent } from './getuser/getuser.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GetuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
