import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  ngAfterViewInit() {
    // Accessing the DOM element directly
    let x =document.getElementById('x');
    let open =document.getElementById('open');
    let side = document.getElementById('side');
    x?.addEventListener("click", () => {
      side?.classList.toggle('active');
    });
    open?.addEventListener("click", () => {
      side?.classList.toggle('active');
    });
  }
}

