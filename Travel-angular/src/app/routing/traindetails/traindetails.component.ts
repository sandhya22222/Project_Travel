import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-traindetails',
  templateUrl: './traindetails.component.html',
  styleUrls: ['./traindetails.component.css']
})
export class TraindetailsComponent implements OnInit {
  public getemail:any;
  user:any;
  constructor(private profile: ListService) { }

  ngOnInit(): void {
    this.getemail=sessionStorage.getItem("email");
    this.profile.getTrainsList(this.getemail).subscribe((result: any) => {
      this.user = result;
      console.log(result)
    })

  }

}
