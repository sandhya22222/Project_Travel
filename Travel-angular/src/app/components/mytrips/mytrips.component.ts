import { Component, OnInit, TemplateRef } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { MatDialog } from '@angular/material/dialog';
import { TraindetailsComponent } from 'src/app/routing/traindetails/traindetails.component';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MytripsComponent implements OnInit {

  // elseBlock: TemplateRef<HTMLDivElement>|null = null;
  // show = true;
  // TemplateRef<NgIfContext<T>>
  
  public getemail:any;
  userList:any;
  loggedIn:any;
  user: any;
  constructor(private profile: ListService,private myDilog:MatDialog) {
   
   }
 
  ngOnInit(): void {
     this.getemail=sessionStorage.getItem("email");

    this.profile.getFlightsList(this.getemail).subscribe((result: any) => {
      this.userList = result;
      console.log(result)
    })


    this.profile.getTrainsList(this.getemail).subscribe((result: any) => {
      this.user = result;
      console.log(result)
    })

  }

  openDialog(){
      const dilogref= this.myDilog
      .open(TraindetailsComponent,{
        height:'600px',
        width:'700px',
        disableClose:true
      });
    
      dilogref.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result ${result}`);
      })
    
    }
    
    

}
