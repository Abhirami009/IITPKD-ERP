import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule,  } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [NgbModule, FormsModule, CommonModule ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {

  @Input() projects!: Project[];

  @Output() selected = new EventEmitter<Project>();
  
  searchTerm = '';
  page = 1;
  pageSize = 5;
  filteredProjects : Project[] = [] as Project[];
  paginatedProjects : Project[] = [] as Project[];

  ngOnInit(): void {
    this.filteredProjects = this.projects;
    this.updatePaginatedProjects();
  }

  // Update paginatedProjects based on current page and pageSize
  updatePaginatedProjects() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedProjects = this.filteredProjects.slice(start, end);
  }

  // Filter projects based on search term
  applyFilter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredProjects = this.projects.filter(project =>
      project.projectname.toLowerCase().includes(term) ||
      project.faculty.toLowerCase().includes(term) ||
      project.projectid.toLowerCase().includes(term)
    );
    this.page = 1; // Reset to first page
    this.updatePaginatedProjects();
  }

  // Handle change in page size
  onPageSizeChange() {
    this.page = 1;
    this.updatePaginatedProjects();
  }

  // Update paginated projects when page changes
  onPageChange() {
    this.updatePaginatedProjects();
  }

  onProjectClick(event : Project){
    this.selected.emit(event);
  }

  
}
