import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/Project';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-start-project',
  templateUrl: './start-project.component.html',
  styleUrls: ['./start-project.component.css']
})
export class StartProjectComponent implements OnInit {
  @Output() onAddProject: EventEmitter<Project> = new EventEmitter();
  name: string;
  user: string;
  showAddProject: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe( (value) => (this.showAddProject = value));
  }

  ngOnInit(): void {
  }

  

  onSubmit() {
    

    if(!this.name) {
      alert('Please enter name of the project!');
      return;
    }
    if(!this.user) {
      alert('Please enter your name!');
      return;
    }

    const newProject = {
      name: this.name,
      user: this.user,
      startTime :this.uiService.getTime(),
      endTime: formatDate( Date(), 'medium', 'en-US' ),
      duration: new Date( (( new Date().valueOf()) - new Date(this.uiService.getTime()).valueOf())).toISOString().slice(11, -5)
    }

    this.onAddProject.emit(newProject);

    this.name = '';
    this.user = '';

    this.uiService.toggleAddProject();
  }

}
