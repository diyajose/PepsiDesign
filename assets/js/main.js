new Vue({
    el:"#main-div",
    data :{
    pepsi:[
         {img:'assets/imgs/pepsi001.png',colors:'#0062be'},
         {img:'assets/imgs/pepsi002.png',colors:'#e60c2c'},
         {img:'assets/imgs/pepsi003.png',colors:'#1e1e1e'}
     ],
     color:"#0062be",
     image:"assets/imgs/pepsi001.png"
    },
    methods :{
     alert(){
         alert(`${this.name} is a manda poocha`)
     },
     changeColor(c,i){
         this.color =c;
         this.image =i;

     }
    }
       })