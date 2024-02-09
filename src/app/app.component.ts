import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Variable declaration and initialization
  //access-specifier variable-name: data-type = value
  protected fullName: string = 'Bipin Prasai';
  protected course: string = 'Angular JS';
  protected age: number = 35;

  //Method syntax
  //Method-name(): return-type
  save(): void {
    //alert(this.fullName+' clicked save button.');
    this.display(this.fullName+' clicked save button. - Display Method');
  }

  display(message: string): void {
    alert(message);
  }
}
