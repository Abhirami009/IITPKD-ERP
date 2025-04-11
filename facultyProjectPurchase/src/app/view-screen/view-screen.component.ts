import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-screen.component.html',
})
export class ViewScreenComponent implements OnDestroy {
  @Input() projectData: any;
  @Input() equipmentEntries!: FormArray;
  @Input() documentFile: File | null = null;
  @Input() submissionDate!: string;

  private _documentURL: string | null = null;
  private equipmentFileURLs: string[] = [];

  get documentURL(): string | null {
    if (!this._documentURL && this.documentFile) {
      this._documentURL = URL.createObjectURL(this.documentFile);
    }
    return this._documentURL;
  }

  isFormGroup(entry: any): boolean {
    return entry instanceof FormGroup;
  }

  ngOnDestroy(): void {
    if (this.documentURL) {
      URL.revokeObjectURL(this.documentURL);
    }
  }
}
