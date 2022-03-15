import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StartBtnComponent } from './components/start-btn/start-btn.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { StartProjectComponent } from './components/start-project/start-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartBtnComponent,
    ProjectsComponent,
    ProjectItemComponent,
    StartProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
