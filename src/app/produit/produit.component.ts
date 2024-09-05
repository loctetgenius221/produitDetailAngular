import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Produit } from '../models/produit';
import { DetailproduitComponent } from '../detailproduit/detailproduit.component';

// Enregistrer les locales françaises
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule, DetailproduitComponent],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css',
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [
    {
      titre: 'Casque Bluetooth',
      description: 'descriptionn de mon produit',
      prix: 12500,
      image:
        'https://img.freepik.com/photos-gratuite/nature-morte-ecouteurs-cyberpunk-sans-fil_23-2151072235.jpg?t=st=1721989606~exp=1721993206~hmac=81ce6c1d5b343a987b707e1a825a6e8d7c53f1648c2a8e7eafd4a2d9c13561cb&w=740',
      createdAt: new Date(),
      quantite: 25,
    },
    {
      titre: 'Smartphone Android',
      description:
        'Un smartphone Android performant avec écran AMOLED et caméra haute résolution.',
      prix: 200,
      image:
        'https://img.freepik.com/vecteurs-libre/smartphone-moderne_23-2147694816.jpg?t=st=1721989735~exp=1721993335~hmac=7d8901ff3c99038083252538dedc670f154317800f68f99c8196a7babd2731e7&w=740',
      createdAt: new Date(),
      quantite: 15,
    },
    {
      titre: 'Ordinateur Portable',
      description:
        'Ordinateur portable puissant avec processeur Intel i7 et 16 Go de RAM.',
      prix: 560,
      image:
        'https://img.freepik.com/photos-gratuite/ordinateur-portable-signe-jouet_23-2147949871.jpg?t=st=1721989803~exp=1721993403~hmac=bcba369c231a2ff000ae3cdcf762da1c6fb8f37b5683866ae9d5be18f1d8d9a1&w=996',
      createdAt: new Date(),
      quantite: 25,
    },
    {
      titre: 'Tablette 10 pouces',
      description:
        'Tablette légère avec écran de 10 pouces, idéale pour la navigation et la lecture.',
      prix: 115,
      image:
        'https://img.freepik.com/photos-gratuite/tablette-pres-jouet-panier_23-2147949842.jpg?t=st=1721989841~exp=1721993441~hmac=eea1f92c247b8e1519d5982ae21525efeedab775ac24d4856f1e69aba3417a70&w=1060',
      createdAt: new Date(),
      quantite: 25,
    },
    {
      titre: 'Écouteurs Bluetooth',
      description:
        'Écouteurs sans fil avec réduction de bruit active et longue autonomie.',
      prix: 10,
      image:
        'https://img.freepik.com/photos-gratuite/ecouteurs-sans-fil-eclairage-au-neon-style-cyberpunk_23-2151074308.jpg?t=st=1721989910~exp=1721993510~hmac=2745ec3d20937dc9ed049506cc052396208f79fb6ea580fc4f411e5c4e5a4ea5&w=1060',
      createdAt: new Date(),
      quantite: 25,
    },
    {
      titre: 'Montre Connectée',
      description:
        'Montre connectée avec suivi de la condition physique et notifications.',
      prix: 60,
      image:
        'https://img.freepik.com/vecteurs-libre/trackers-fitness-realistes_23-2148515661.jpg?t=st=1721989964~exp=1721993564~hmac=19c9949228e9eae6b684c88826b3ceb98d6f1efff9c46044f77bf82c6300bc5b&w=740',
      createdAt: new Date(),
      quantite: 25,
    },
  ];

  selectedProduit: Produit | null = null;

  ngOnInit(): void {}

  showDetails(produit: Produit): void {
    this.selectedProduit = produit;
  }

  hideDetails(): void {
    this.selectedProduit = null;
  }
}
