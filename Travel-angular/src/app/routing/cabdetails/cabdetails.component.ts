import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-cabdetails',
  templateUrl: './cabdetails.component.html',
  styleUrls: ['./cabdetails.component.css']
})
export class CabdetailsComponent implements OnInit {
  cabUser:any;
  public getemail:any;
  constructor(private profile: ListService) { }

  ngOnInit(): void {
    this.getemail=sessionStorage.getItem("email");
    this.profile.getCabList(this.getemail).subscribe((result: any) => {
      this.cabUser = result;
      console.log(result)
    })
  }
  getPrint(){
    alert('Printed....')
  }

}
