import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project, Status, statusp } from '../models';

@Component({
  selector: 'app-status-cards',
  standalone: true,
  imports: [],
  templateUrl: './status-cards.component.html',
  styleUrl: './status-cards.component.css'
})
export class StatusCardsComponent {

 @Input() projects! : Project[];

 @Input() status! : Status;
 @Output() selproj =new  EventEmitter<Project>();


select(event : Project){
  this.selproj.emit(event);
}
}
