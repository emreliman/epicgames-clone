<template>
    <div class="discount-card-item" >
        <div class="bottomcard" v-for="game in post" :key="game.name">
          <nuxt-link :to="{name:'ürün-id',params:{id:game.name}}">
          <img :src="require(`~/assets/${game.img}.jpg`)" alt="game" />
          </nuxt-link>
          <p>{{game.name}}</p>
          <p>{{game.corporation}}</p>
          <div class="prices">
            <p class="discount">{{game.discount}}</p>
            <p>{{game.price}}</p>
            <p>{{game.discount_price}}</p>
          </div>
        </div>
      </div>

</template>
<script>
import {mapState} from 'vuex';
export default {
    
     data() {
          return {
            games: [
              {
                name: "TonyHawks",
                corporation: "Vicarious Visions | Activis...",
                discount: "-40%",
                price: "200,00₺",
                discount_price: "120,00₺",
                img: "tonyhawk",
                type:1,
              },
              {
                name: "SuperliminalDouble-Albu",
                corporation: "Pillow Castle",
                discount: "-20%",
                price: "100,00₺",
                discount_price: "80,00₺",
                img: "superliminal",
                type:1,
              },
              {
                name: "AutoChess",
                corporation: "Dragonest Game",
                discount: "-50%",
                price: "200,00₺",
                discount_price: "100,00",
                img: "autochess",
                type:1,
              },
              {
                name: "WatchDogs:Legion",
                corporation: "Ubisoft",
                discount: "-50%",
                price: "300,00₺",
                discount_price: "150,00₺",
                img: "watchdogs",
                type:2,
              },
              {
                name: "PumpkinJack",
                corporation: "Nicolas Meyssonier",
                discount: "-10%",
                price: "100,00₺",
                discount_price: "90,00₺",
                img: "pumpkinjack",
                type:2,
              },
            ],
          };
        },
        computed:{
       post(){
            if(this.type==0){
              return this.games
            }
            else{
              
              return this.games.filter(item=>item.type==this.type);
            }
          },
          
      ...mapState([
            'type',
          ]),
         
  },
  
}
</script>