import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    // navigation expansion on smaller screens    
    isExpanded = false;

    // Dropdown is open for selection
    isDropdownSelected = false;
 
    toggleNavbar() {
        this.isExpanded = !this.isExpanded;
    }

    selectItem(n: number) {
        console.log(`Item ${n} selected`);
        this.isDropdownSelected = false;
    }
}
