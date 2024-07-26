import { Component } from '@angular/core';
import { ProduitComponent } from './produit/produit.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProduitComponent,
    DetailproduitComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
