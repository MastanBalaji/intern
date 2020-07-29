import { Component, OnInit } from '@angular/core';
import { studentData } from '../../studentdata/studentdata';
import { studentList } from './details.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

max:number;
ivalue:number;
studentlist=studentData.studentlist
  constructor() { }

  ngOnInit(): void {
    if(this.studentlist.length){
      this.studentlist.sort((a,b) => a.name > b.name ? 1 : -1);
      this.max=0;
      for(let i=0;i<this.studentlist.length;i++){
        const English=parseInt(this.studentlist[i].marks.English);
        const Maths=parseInt(this.studentlist[i].marks.Maths);
        const Science=parseInt(this.studentlist[i].marks.Science);
        const total= English+Maths+Science;
        if(English>=20 && Maths>=20 && Science>=20){
          this.studentlist[i]['status']='Pass'
        }
        else{
          this.studentlist[i]['status']='Fail'
        }
        this.studentlist[i]['total']=total;
        if(this.max<this.studentlist[i]['total']){
          this.max=this.studentlist[i]['total']
          this.ivalue=i;
        }
      }
      this.studentlist[this.ivalue]['status']='Topper';
    }
  }

}
