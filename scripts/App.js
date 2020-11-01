import { prefabDice} from "./util.js";

export default class App{
  constructor(){
    this.types = ["Ettor", "Tvåor", "Treor", "Fyror", "Femor", "Sexor", "Bonus", "1 Par", "2 Par", "Triss", "Fyrtal", "Kåk", "Liten", "Stor", "Mattzy"]
    this.diceCollection = prefabDice(); // just gives some dice
    this.createTable();
    this.createDice();
    this.start();
  }

  start(){
    $(".roll").click(() => {this.rollDice()});
  }

  createDice(){
    $(".dice").empty();
    for(let i = 0; i < 5; i++){
      let num = this.diceCollection[i].nr;
      let img = this.diceCollection[i].locked ? `images/inverted-dice-${num}.svg` : `images/dice-six-faces-${num}.svg`
      $(".dice").append(`
        <img class="dice-${i}" src=${img}>
      `)
      $(`.dice-${i}`).click(() => this.lockDice(i))
    }
  }

  lockDice(i){
    this.diceCollection[i].locked = !this.diceCollection[i].locked;
    let nr = this.diceCollection[i].nr;
    let img = this.diceCollection[i].locked ? `images/inverted-dice-${nr}.svg` : `images/dice-six-faces-${nr}.svg`
    $(`.dice-${i}`).attr("src", img)
  }

  rollDice(){
    const rerole = (i, real) => {
      if(!this.diceCollection[i].locked){
        let num = Math.floor(Math.random() * 5);
        this.diceCollection[i].nr = num + 1;
        if(!real){
          $(`.dice-${i}`).attr("src", `images/dice-six-faces-${num + 1}.svg`).css({
            position: "relative",
          })
          $(`.dice-${i}`).animate({
            top: num * 5 + 35 + "px",
          }, 100)
        }else{
          $(`.dice-${i}`).attr("src", `images/dice-six-faces-${num + 1}.svg`).css({
            position: "relative",
          })
          $(`.dice-${i}`).animate({
            top: 0,
          }, 100)
        }
        
      }
    }

    for(let i = 0; i < 5; i++){ 
      let interval = setInterval(() => {
        rerole(i, false)
      }, 100)
      setTimeout(() => {
        console.log("end")
        clearInterval(interval);
        rerole(i, true)
      }, 1000 + ((i + 1) * 300))
    }
    console.log(this.diceCollection)
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