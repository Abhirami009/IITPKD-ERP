import { Injectable } from '@angular/core';
import { projectStatus } from './purchase-proposal-data';
import { BehaviorSubject } from 'rxjs';
import { Project, ProjectStatus } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class SubmissionService {
  private pendingSubmissions = new BehaviorSubject<Project[]>([]);
  private approvedSubmissions = new BehaviorSubject<Project[]>([]);
  private rejectedSubmissions = new BehaviorSubject<Project[]>([]);

  get pendingSubmissions$() {
    return this.pendingSubmissions.asObservable();
  }

  get approvedSubmissions$() {
    return this.approvedSubmissions.asObservable();
  }

  get rejectedSubmissions$() {
    return this.rejectedSubmissions.asObservable();
  }

  addSubmission(submission: Project) {
    if (submission.status === ProjectStatus.PENDING) {
      this.updateList(this.pendingSubmissions, submission);


    } else if (submission.status === ProjectStatus.APPROVED) {
      const current = this.approvedSubmissions.getValue();
      this.approvedSubmissions.next([...current, submission]);
    } else if (submission.status === ProjectStatus.REJECTED) {
      const current = this.rejectedSubmissions.getValue();
      this.rejectedSubmissions.next([...current, submission]);
    }
  }

  private updateList(subject: BehaviorSubject<Project[]>, submission: Project): void {
    const currentList = subject.value; // Safe with BehaviorSubject
    subject.next([...currentList, submission]);
  }
}
