import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Hero } from 'src/Hero';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  heroes : Hero[] = [];
  name: string ='';
  desc: string ='';
  error: boolean = true;
  selectedId?: number;


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.selectedId = id;
    })
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  deleteHero(hero: Hero){
    this.heroes = this.heroes.filter(h => h!== hero);
    this.heroService.deleteHero(hero)
        .subscribe();
  }

  AddNewHero(): void
  {
    this.name = this.name?.trim();
    this.desc = this.desc?.trim();
    if(!this.name || !this.desc) {
      this.error = false;
      return;
    }
    var hero: Hero = {} as Hero;
    this.error = true;
    hero.name = this.name;
    hero.desc = this.desc;
    
    this.heroService.AddNewHero(hero).subscribe(
      hero => {this.heroes.push(hero)}
    );
  }

  isSelected(hero: Hero){
    return hero.id === this.selectedId;
  }

}
