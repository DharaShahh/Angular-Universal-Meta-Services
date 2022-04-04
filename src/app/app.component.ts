import { Component } from '@angular/core';
import { Meta } from "@angular/platform-browser";
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-universal';
 
  constructor(private metaService:Meta){
    this.addTag();
  }
 
  addTag(){
    this.metaService.addTags([
      { name: 'description', content: 'Article Description' },
      { name: 'robots', content: 'index,follow' },
      { property: 'og:title', content: 'Content Title' }
   ]);
  }
}
