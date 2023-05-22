import { jsDocComment } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: '.app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent {
isDisable:boolean = false;
name:string = " omid";


public onInputChanged(e: Event){
  this.name = (<HTMLInputElement>e.target).value
}
public getName(e: Event){
  var arrayObj = {      username: "omid",
      password: "Omid@12345"}

  fetch('http://192.168.1.33/arash_profile_api/public/api/test',{method:'POST', body:JSON.stringify(arrayObj)}).then((response)=>{
    console.log(response);
    console.log(JSON.stringify(arrayObj));

  })
  // this.name = (<HTMLInputElement>e.target).value
}
}
