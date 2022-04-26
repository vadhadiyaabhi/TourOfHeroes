import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/Hero';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  

  hero = {} as Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private router: Router ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  editHero(): void{
    this.heroService.editHero(this.hero).subscribe(() => this.goBack());
  }

  goBack(){
    let selectedId = this.hero.id ?? null;
    // this.router.navigate(['/heroes', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route} );
  }

}
