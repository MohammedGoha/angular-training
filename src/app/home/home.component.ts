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
  ngAfterViewInit() {
let state = true;
    let boxes = Array.from(document.getElementsByClassName('box'));
    let show =document.getElementById('show');
    let text = Array.from(document.getElementsByClassName('desc'));
    show?.addEventListener("click", () => {
      text?.forEach(function(el){
        if(state){
        el.classList.add('active');
        }
        else{
          el.classList.remove('active');
        }
      })
      state = !state;
      this.stateoftheallshow = state;
 boxes?.forEach((box)=>{
  box.children[1].textContent=this.stateoftheallshow ?"show":"hide";
 })


    });

    let thebtns= Array.from(document.getElementsByClassName('thebtn'));
    boxes?.forEach((box,index)=>{
      let insidestate = true;
     box.children[1].addEventListener("click",()=>{
     box.children[2].classList.toggle('active');
     insidestate= !insidestate;
     if(box.children[2].classList.contains('active')){
      box.children[1].textContent= 'hide';

     }
     else{
      box.children[1].textContent= 'show';
     }
     })
    })

  }
}
