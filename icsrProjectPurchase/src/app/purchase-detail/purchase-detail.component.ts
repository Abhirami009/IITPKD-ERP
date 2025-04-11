import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project, Status } from '../models';
import { CommonModule } from '@angular/common';
import { pdf } from '../models';

@Component({
  selector: 'app-purchase-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase-detail.component.html',
  styleUrl: './purchase-detail.component.css'
})
export class PurchaseDetailComponent {
  @Input() project!: Project;

  @Output() clickPreview = new EventEmitter<boolean>();

  @Output() viewTables = new EventEmitter<boolean>();

  @Output() senddocs = new EventEmitter<pdf[]>();

  selectedFile : File | null = null;

  files : Document | undefined;

  currentstep : number = 0;

  get ispurchase(): boolean{
    return this.currentstep === 0;
  }

  get isbudget(): boolean{
    return this.currentstep === 1;
  }

  get ispending():boolean{
    return (this.project.status.status === Status.PENDING);
  }

  get issentback():boolean{
    return (this.project.status.status === Status.CLARIFICATION);
  }

  get morestatus():boolean{
    
    return (this.project.statushist?.length <= 1);
  }

  nextstep() : void{
      if (this.currentstep < 2) {
        this.currentstep++;
      }
    }
  prevstep() : void{
    if (this.currentstep > -1){
      this.currentstep --;
    }
  }

  sendPreview(){
    this.clickPreview.emit(true);
  }

  back(){
    this.viewTables.emit(true);
  }

  onDocumentAdd(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadDocument(): void {
    if (this.selectedFile) {
      // Assuming a simple implementation where we add the file name to the document list
      const fileUrl = URL.createObjectURL(this.selectedFile);
      const name = this.selectedFile.name;
      this.project.documents?.push({name: name, url : fileUrl});
      if (this.project.documents){
        this.senddocs.emit(this.project.documents);
      }
      // Reset the input and selected file
      this.selectedFile = null;
    } else {
      alert('Please select a document to upload.');
    }
  }

  get gt2():boolean{
    return (this.project.statushist.length > 2);
  }

  deleteDoc(i : number){
    // if (confirm('Are you sure you want to delete this document?')) {
    //   this.project.documents?.splice(i, 1);
    //   alert('Document deleted successfully.');
    // }
    this.project.documents?.splice(i, 1);
    this.senddocs.emit(this.project.documents);
  }
}
