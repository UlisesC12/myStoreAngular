import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'ulises';
  age = 18;
  img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  btnDisabled = true;
  person = {
    name: "Ulises",
    age: 18,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
  }
  names: String[] = ['Ulises', 'Nicolas', 'Julian'];
  newName = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]
  //Reto ngFOR
  stockItems: {id: number, name: string, qty: number | undefined, price: number | undefined, SKU: number | undefined}[] = [
    {
      id: 1,
      name: "Rayban",
      qty: 2,
      price: 1200,
      SKU: 188908918,
    },
  ];
  itemName: string = '';
  itemQty: number | undefined = undefined;
  itemPrice: number | undefined = undefined;
  itemSKU: number | undefined = undefined;
  //Reto ngFor
  addItem(
    indx: number, 
    itemName: string, 
    itemQty: number | undefined, 
    itemPrice:number | undefined, 
    itemSKU:number | undefined){
    let variablesAreNotUndefined = indx != undefined && itemName != undefined && itemQty != undefined && itemPrice != undefined && itemSKU != undefined;
    if(variablesAreNotUndefined){
      let newItem = {
        id: indx,
        name: itemName,
        qty: itemQty,
        price: itemPrice,
        SKU: itemSKU,
      }
      this.stockItems.push(newItem)
      this.itemName = '';
      this.itemQty = undefined;
      this.itemPrice = undefined;
      this.itemSKU = undefined;
    }
    else{
      alert("Please, fill all the fields");
    }
  }
  deleteItem(indx: number){
    this.stockItems.splice(indx, 1);
    this.stockItems.forEach((element, index) => {
      element.id = index+1;
    });
  }
  
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge() {
    this.person.age ++;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number) {
    this.names.splice(index, 1);
  }

}
