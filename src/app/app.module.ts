import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    MultiSelectModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
