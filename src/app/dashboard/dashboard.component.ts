import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  projects:{};
  domains:{};
  questions:{};
  answers:{};
  cmmdomains:{};

  constructor(private _formBuilder:FormBuilder, private dashboardService:DashboardService) {
  }

  ngOnInit() {
    this.getProjects();
    this.getDomains();
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  getProjects() {
    this.dashboardService.getProjects().subscribe(result => {
      console.log('result is ', result);
      if (result['status'] === 'success') {
        this.projects = result['data'];
      } else {
        alert('Wrong username password');
      }
    }, error => {
      console.log('error is ', error);
    });
  }

  getDomains() {
    this.dashboardService.getDomains().subscribe(result => {
      console.log('result is ', result);
      if (result['status'] === 'success') {
        this.domains = result['data'];
      } else {
        alert('Wrong username password');
      }
    }, error => {
      console.log('error is ', error);
    });
  }

  getQuestions() {
    this.dashboardService.getQuestions(1).subscribe(result => {
      console.log('result is ', result);
      if (result['status'] === 'success') {
        this.questions = result['data'];
      } else {
        alert('Wrong username password');
      }
    }, error => {
      console.log('error is ', error);
    });
  }

  saveAnswers() {
    this.dashboardService.saveAnswers(this.answers).subscribe(result => {
      console.log('result is ', result);
      if (result['status'] === 'success') {
        this.answers = result['data'];
      } else {
        alert('Wrong username password');
      }
    }, error => {
      console.log('error is ', error);
    });
  }

  selectedValue:string = "";
}
