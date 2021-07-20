import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects?: any;

  defaultElevation = 5;
  raisedElevation = 8;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      console.log(this.projects)
    })
  }

  onClick(url: string): void {
    window.open(url);
  }
 
}
