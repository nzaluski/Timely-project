import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/Project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;
  @Output() onDeleteProject: EventEmitter<Project> = new EventEmitter();
  @Output() onEditProject: EventEmitter<Project> = new EventEmitter();
  faTimes = faTimes;
  fapencil = faPen;

  constructor() {   }

  ngOnInit(): void {
  }

  onDelete() {
    this.onDeleteProject.emit(this.project);
  }
  
  onEdit() {
    this.onEditProject.emit(this.project);
  }

  

}
