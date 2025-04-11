import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project, Status } from '../models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {
  @Input() project: Project = {} as Project;

  @Output() Approve = new EventEmitter<boolean>();
  @Output() Reject = new EventEmitter<boolean>();
  @Output() SentBack = new EventEmitter<boolean>();
  @Output() forward = new EventEmitter<boolean>();
  @Output() accounts = new EventEmitter<boolean>();
  @Output() recieved = new EventEmitter<boolean>();

  @Output() prev = new EventEmitter<boolean>();

  @Output() comments = new EventEmitter<string>();

  issentback : boolean = false;

  comment : string = "";

  get isApproved() : boolean{
    return (this.project.status.status.toLowerCase() === Status.APPROVED.toLowerCase());
  }

  get isPending() : boolean{
    return (this.project.status.status.toLowerCase() === Status.PENDING.toLowerCase());
  }

  get isSent():boolean{
    return (this.project.status.status === Status.CLARIFICATION);
  }

  get Isrecieved():boolean{
    return (this.project.status.status.toLowerCase() === Status.RECIEVED.toLowerCase());
  }

  get Isforwarded():boolean{
    return (this.project.status.status.toLowerCase() === Status.FORWARDED.toLowerCase());
  }

  approveProposal(){
    this.comments.emit(this.comment);
    this.Approve.emit(true);
  }

  rejectProposal(){
    this.comments.emit(this.comment);
    this.Reject.emit(true);
  }

  sentbackProposal(){
    this.issentback = true;
    if (this.comment === ""){
      alert("Please enter the remarks");
      return;
    }
    else{
      this.comments.emit(this.comment);
    this.SentBack.emit(true);
    console.log(this.comment);
    }
  }

  forwardProposal(){
    this.comments.emit(this.comment);
    this.forward.emit(true);
  }

  recieveditem(){
    // this.comments.emit(this.comment);
    this.recieved.emit(true);
  }

  toaccounts(){
    this.accounts.emit(true);
  }

  back(){
    this.prev.emit(false);
  }

  

}
