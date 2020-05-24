import { Component, OnInit } from '@angular/core';
import { ExitComponentComponent } from '../exit-component/exit-component.component';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-management-component',
  templateUrl: './management-component.component.html',
  styleUrls: ['./management-component.component.css']
})
export class ManagementComponentComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
  }

}
