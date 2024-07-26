import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailproduit',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './detailproduit.component.html',
  styleUrl: './detailproduit.component.css',
})
export class DetailproduitComponent implements OnInit {
  @Input() produit: any;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }

  ngOnInit(): void {}
}
