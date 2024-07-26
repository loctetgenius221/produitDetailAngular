export class Produit {

  constructor(public titre: string,
              public description: string,
              public prix: number,
              public image:string,
              public createdAt: Date,
              public quantite: number
  ) {

  }
}
