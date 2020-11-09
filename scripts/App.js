import Dice from "./Dice.js";
import Player from "./Player.js";

export default class App{
  constructor(){
    this.types = ["Aces", "Twos", "Threes", "Fours", "Fives", "Sixes", "Bonus", "One Pair", "Two Pairs", "Three of a Kind", "Four of a Kind", "Small Straight", "Large Straight", "Full House", "Chance", "Yatzy"]
    this.createPlayers();
    this.dice = null; 
    this.allDice = []
    this.players = [];
  }

  createPlayers(){
    $(".createPlayers").submit((e) => {
      e.preventDefault();
      let amount = $("#amount").val();
      if(!amount){
        amount = 2;
      }
      $(".createPlayers").empty()
      let i = 0;
      while(i < amount){
        let name = prompt(`Player ${i + 1} what is your name?`)
        if(name){
          this.players.push(new Player(name));
          i++
        }
      }
      console.log(amount)
      console.log(this.players);
      this.createTable();
      this.dice = new Dice();
    })
  }

  

  createTable(){
    $(".mainTable, .roll").css({display:" block"})
    $(".playHead").append(`
        ${this.players.map(x => `
          <th>${x.name}</th>
        `)}
    `)
    for(let type of this.types){
      $(".playBody").append(`
        <tr>
          <td>${type}</td>
          ${this.players.map(x => `
            <td>${"---"}</td>
          `)}
        </tr>
      `)
    }
  }
}