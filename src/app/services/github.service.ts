import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	private client_id = 'e686f57801c144957ac8';
	private client_secret ='86fb95e37c098a983bef9a402b9bb1bbe766b568';

	constructor(private _http: Http){
		console.log('Github Service Started');
		this.username = 'raviphilips';
	}


	getUser(){
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
			.map(res => res.json());
	}

	getRepos(){
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
			.map(res => res.json());
	}

	updateUser(username:string){
		this.username = username;
	}
}

