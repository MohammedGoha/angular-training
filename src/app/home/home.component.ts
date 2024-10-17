import { Component } from '@angular/core';
import { StoreData } from '../class/store-data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // data: StoreData= new StoreData('iti','something else ' ,["html","css","js","typescript"]);
  stateoftheallshow = true;//they are closed
  eachbutton = [true,true,true,true,true,true,true,true]
  ngAfterViewInit() {
    console.log(this.eachbutton);
    let boxes = Array.from(document.getElementsByClassName('box'));
    let show =document.getElementById('show');
    let text = Array.from(document.getElementsByClassName('desc'));
    show?.addEventListener("click", () => {
      text?.forEach((el)=>{
        if(this.stateoftheallshow){
        el.classList.add('active');
        }
        else{
          el.classList.remove('active');
        }
      })
      this.stateoftheallshow = !this.stateoftheallshow;
      this.eachbutton=[this.stateoftheallshow,this.stateoftheallshow,this.stateoftheallshow,this.stateoftheallshow,this.stateoftheallshow,this.stateoftheallshow,this.stateoftheallshow,this.stateoftheallshow]
 boxes?.forEach((box,index)=>{
  box.children[1].textContent=this.eachbutton[index] ?"show":"hide";
 });
    });

    let thebtns= Array.from(document.getElementsByClassName('thebtn'));
    console.log(thebtns.toString());
    boxes?.forEach((box,index)=>{
      let insidestate = true;
     box.children[1].addEventListener("click",()=>{
     box.children[2].classList.toggle('active');
     this.eachbutton[index] = !this.eachbutton[index];
     insidestate= !insidestate;
     if(box.children[2].classList.contains('active')){
      box.children[1].textContent= 'hide';

     }
     else{
      box.children[1].textContent= 'show';
     }
  if (!this.eachbutton.includes(true)){
    this.stateoftheallshow = false;
    console.log(this.stateoftheallshow);
  }
  else if (!this.eachbutton.includes(false)){
    this.stateoftheallshow = true;
    console.log(this.stateoftheallshow);
  }

     })
    })

  }
}
