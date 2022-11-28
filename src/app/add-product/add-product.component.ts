import { Component } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  
  title=""
  price=""
  image=""
  description=""
  category=""
  rating=""
  

  readValues=()=>
  {

    let data:any={"title":this.title,"price":this.price,"description":this.description,"category":this.category,"image":this.image,"rating":this.rating}
    console.log(data)
  }

}
