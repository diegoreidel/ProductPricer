import { Component, OnInit } from '@angular/core';
import { Supermarket } from 'src/app/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supermarket-details',
  templateUrl: './supermarket-details.component.html',
  styleUrls: ['./supermarket-details.component.scss']
})
export class SupermarketDetailsComponent implements OnInit {

  pageTitle = 'Supermarket Details';
  id: number;
  supermarket: Supermarket;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.supermarket = {
      id: this.id,
      name: 'xyz',
      address: 'Address 123',
      rating: 3.6
    };
  }

  onBack(): void {
    this.router.navigate(['/supermarkets']);
  }
}
