import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Hero } from 'src/Hero';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService : HeroService) { }

  heroes: Hero[] = [];
  names: Hero[] = [];
  name: string = "";

  ngOnInit(): void {
    this.names = [];
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes()
      .subscribe(( data: Hero[]) => {this.heroes = data.filter(h => h.top === true)});
  }

  keyUp(val: string){
    if(val === ''){
      this.names = [];
      return;
    }
    this.heroService.getHeroes()
      .subscribe(( data: Hero[]) => {this.names = data.filter(h => h.name.includes(val))});
  }

  emptyNames(){
    // this.names = [];
    // this.name = '';
  }

}
