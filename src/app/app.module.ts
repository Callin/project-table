import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {HttpClientModule} from "@angular/common/http";
import { RowVisibilityDialogComponent } from './table/row-visibility-dialog/row-visibility-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RowVisibilityDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
