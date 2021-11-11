import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsService } from './service/projects.service';
import { TasksComponent } from './components/tasks/tasks.component';
import { DemoMaterialModule } from './material-module';
import { HttpClientModule }   from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/form/form-component'
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
     
    
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
