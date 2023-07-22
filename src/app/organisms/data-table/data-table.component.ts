import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = ['username', 'password', 'age', 'name', 'family', 'role'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData().subscribe(
      (data) => {
        console.log(data);
        this.dataSource = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
