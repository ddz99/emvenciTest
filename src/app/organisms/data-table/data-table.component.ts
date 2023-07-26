import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    const routeName = this.getRouteName();
    this.loadData(routeName);
  }

  getRouteName(): string {
    // Get the full URL from the Router service
    const currentUrl = this.router.url;
  
    // Remove the leading slash (/) from the URL
    const routeWithoutSlash = currentUrl.substring(1);
  
    // Split the URL segments by the forward slash (/)
    const urlSegments = routeWithoutSlash.split('/');
  
    // The first segment is the route name
    return urlSegments[0];
  }

  loadData(routeName: string): void {
    this.dataService.getData(routeName).subscribe(
      (data) => {
        console.log(data);
        this.dataSource = data;
        this.setColumns();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  setColumns(): void {
    if (this.dataSource.length > 0) {
      this.displayedColumns = Object.keys(this.dataSource[0]);
      console.log(this.displayedColumns)
    }
  }
}
