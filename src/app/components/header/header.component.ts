import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Timely';
  showAddProject: boolean = false;
  subscription: Subscription;
  pocetak: string;
  

  
  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe( (value) => (this.showAddProject = value));
  }

  ngOnInit(): void {
  }
  
  toggleStartProject() {
    this.uiService.toggleAddProject();
    this.pocetak = this.uiService.getTime();
  }

  

}
