import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';
import { SimpleUsageComponent } from './simple-usage/simple-usage.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/simple-usage', pathMatch: 'full' },
  { path: 'simple-usage', component: SimpleUsageComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    SimpleUsageComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
