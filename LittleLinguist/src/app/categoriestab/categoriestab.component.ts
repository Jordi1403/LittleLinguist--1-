import { Component, NgModule, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-categoriestab',
  standalone: true,
  imports: [MatTableModule,DatePipe,MatIconModule],
  templateUrl: './categoriestab.component.html',
  styleUrl: './categoriestab.component.css'
})
export class CategoriestabComponent {
    categories: Category[] = [
      { name: 'Fruits', words: ['Apple', 'Banana','orang'], lastChange: new Date() },
      { name: 'animals', words: ['dog', 'cat','elefant'], lastChange: new Date() },
      { name: 'color', words: ['black', 'yellow'], lastChange: new Date() },
    
    ];
  
    editCategory(category: Category): void {
      const editedCategoryName = prompt('Enter the new category name:', category.name);
  
      if (editedCategoryName !== null) {
        category.name = editedCategoryName;
  
        
        const editedWordsString = prompt('Enter the new words (comma-separated):', category.words.join(','));
        if (editedWordsString !== null) {
          category.words = editedWordsString.split(',').map(word => word.trim());
        }
  
        category.lastChange = new Date();
        console.log('Editing category:', category);
      }
    }
  
    deleteCategory(category: Category): void {
      const index = this.categories.indexOf(category);
      if (index !== -1) {
        
        this.categories = [...this.categories.slice(0, index), ...this.categories.slice(index + 1)];
        console.log('Deleting category:', category);
      }
    }
  
    //addNewCategory(): void {
      
     // const newCategory: Category = { name: 'New Category', words: [], lastChange: new Date() };
      //this.categories.push(newCategory);
      //console.log('Adding new category:', newCategory);
    }
  

  @NgModule({
    declarations: [
    
    ],
    imports: [
      MatTableModule,
      MatButtonModule,
      
    ],
  })
  export class CategoriesModule { }

export interface Category {
  name: string;
  words: string[];
  lastChange: Date;
}



