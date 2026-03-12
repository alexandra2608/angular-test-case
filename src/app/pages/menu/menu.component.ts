import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MENU } from './menu-data';
import {RouterLink} from '@angular/router';

interface MenuItem {
  name: string;
  value: number;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menu: MenuCategory[] = MENU;

  currentCategory: MenuCategory = this.menu[0];

  selected: MenuItem[] = [];

  selectCategory(category: MenuCategory) {
    this.currentCategory = category;
  }

  toggle(item: MenuItem, event: any) {

    if (event.target.checked) {
      this.selected.push(item);
    } else {
      this.selected = this.selected.filter(i => i !== item);
    }

  }

  isSelected(item: MenuItem) {
    return this.selected.includes(item);
  }

  get total() {
    return this.selected.reduce((sum, i) => sum + i.value, 0);
  }

  get count() {
    return this.selected.length;
  }

  get selectedNames(): string {
    return this.selected.map(i => i.name).join(', ');
  }

  getCategoryCount(category: MenuCategory) {
    return this.selected.filter(item =>
      category.items.includes(item)
    ).length;
  }

  getCategoryTotal(category: MenuCategory) {
    return this.selected
      .filter(item => category.items.includes(item))
      .reduce((sum, item) => sum + item.value, 0);
  }

  selectAll(category: MenuCategory) {
    category.items.forEach(item => {
      if (!this.selected.includes(item)) {
        this.selected.push(item);
      }
    });
  }

  clearCategory(category: MenuCategory) {
    this.selected = this.selected.filter(item => !category.items.includes(item));
  }

}
