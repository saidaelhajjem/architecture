import { Component, OnInit } from '@angular/core';
import { Produit } from '../_models/produit';
import { ProduitService } from '../_services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  list:Produit[]= [];

  constructor(
    private productService:ProduitService,
  ) { }

  ngOnInit(): void {
    this.getAllProduit();
  }


  getAllProduit(){
    this.productService.getAllProduit().subscribe(data=>{
      console.log(data.body.product)
      this.list=data.body.product;
    },err=>console.log(err)
    )
}}
