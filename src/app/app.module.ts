import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { MasterComponent } from './master/master.component';
import { MasterService } from './master/master.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    MasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
