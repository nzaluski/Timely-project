import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-start-btn',
  templateUrl: './start-btn.component.html',
  styleUrls: ['./start-btn.component.css']
})
export class StartBtnComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();
  stT: string;
  subscription: Subscription;
  showAddProject: boolean;

  constructor(private uiService: UiService) {  }


  ngOnInit(): void {
  }


  onClick() {
    this.uiService.setTime(Date());
    this.btnClick.emit();
    console.log(Date());
  }

}
