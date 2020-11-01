import Dice from "./Dice.js";

export default class App{
  constructor(){
    this.types = ["Ettor", "Tvåor", "Treor", "Fyror", "Femor", "Sexor", "Bonus", "1 Par", "2 Par", "Triss", "Fyrtal", "Kåk", "Liten", "Stor", "Mattzy"]
    this.createTable();
    this.dice = new Dice();
    console.log(this.dice)
  }

  createTable(){
    for(let type of this.types){
      $(".playBody").append(`
        <tr>
          <td>${type}</td>
        </tr>
      `)
    }

  }

}