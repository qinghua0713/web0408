import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     allchange = false
     total = 0
  cart= [{
    "id": "00001",
    "name": "施华蔻伊采染发膏60ml",
    "thumbnail": "https:\/\/fjlyl.xyz\/assets\/hairDye\/products (1).jpg",
    "reduct_price": "26",
    "num": 1,
    "isChecked": false
  }, {
    "id": "00002",
    "thumbnail": "https:\/\/fjlyl.xyz\/assets\/hairDye\/products (2).jpg",
    "name": "施华蔻伊采染发膏100ml",
    "reduct_price": "69",
    "num": 1,
    "isChecked": false
  }]
  addNum(index){
  this.cart[index].num++
  }
  subNum(index){
    this.cart[index].num>1?this.cart[index].num--:this.cart[index].num
  }
  keyups(event,index){
    var inpNum = Math.ceil(this.cart[index].num)
    inpNum = isNaN(inpNum)?1:inpNum
     inpNum = inpNum<1?1:inpNum
     this.cart[index].num = inpNum
      console.log(this.cart[index].num)
  }
  allcheck(){
    for(var i = 0; i <this.cart.length; i++ ){
        this.cart[i].isChecked = this.allchange
    }
  }
  sigcheck(){
     var checked = true
     for(var i = 0; i < this.cart.length; i++){
      if(!this.cart[i].isChecked){
        checked = this.cart[i].isChecked
       }
       this.allchange = checked
     }      
  }
  totalPrice(){

  }
}
