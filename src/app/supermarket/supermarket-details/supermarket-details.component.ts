import { Component, OnInit } from '@angular/core';
import { Supermarket } from 'src/app/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { SupermarketService } from 'src/app/core/supermarket.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-supermarket-details',
  templateUrl: './supermarket-details.component.html',
  styleUrls: ['./supermarket-details.component.scss']
})
export class SupermarketDetailsComponent implements OnInit {

  pageTitle = 'Supermarket Details';
  id: number;
  originalSupermarket: Supermarket;
  supermarket: Supermarket;

  constructor(private route: ActivatedRoute, private router: Router, private supermarketService: SupermarketService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.supermarketService.getSupermarkets()
      .subscribe((supermarkets: Supermarket[]) =>
      supermarkets.map(supermarket => supermarket.id === this.id ? this.assignSupermarket(supermarket) : false));
  }

  private assignSupermarket(supermarket: Supermarket): void {
    this.originalSupermarket = supermarket;
    this.supermarket = { ...this.originalSupermarket };
  }

  onBack(): void {
    this.router.navigate(['/supermarkets']);
  }

  onSave(form: NgForm): void {
    
  }
}
