import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {

	constructor(private http: HttpClient){
	}

	getProjects(){
    return this.http.get('/api/project/get');
		//var data = this.http.post('/api/project/get',{});
    //return data;
	}

  getDomains(){
    return this.http.get('/api/domain/get');
    //var data = this.http.post('/api/project/get',{});
    //return data;
  }


  getQuestions(list){
    return this.http.get('/api/question/get');
    //var data = this.http.post('/api/project/get',{});
    //return data;
  }

  getAnswers(list){
    return this.http.get('/api/answer/get');
    //var data = this.http.post('/api/project/get',{});
    //return data;
  }

  saveAnswers(list){
    return this.http.get('/api/answer/save');
    //var data = this.http.post('/api/project/get',{});
    //return data;
  }
}
