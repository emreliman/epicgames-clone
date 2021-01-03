<template>
    <div class="sıralayan-kart">
          <div class="sırala-çıkış">
            <p style="margin-top:25px;margin-right:5px">Sırala:</p>
            <div class="dropdown-sıralama">
              <button class="dropbtn" @click="onClick">Çıkış Tarihi<i class="arrrowdown" :class="{ arrrrowup: selected }"></i> </button>
              <div v-if="this.selected" class="dropdown-content">
                <a href="#">Uygunluk</a>
                <a href="#">Çıkış Tarihi</a>
                <a href="#">Alfabetik</a>

              </div>

            </div>
          </div>
          <div class="discount-card-item" >
        <div class="bottomcard" v-for="game in newitem" :key="game.name">
         <nuxt-link :to="{name:'ürün-id',params:{id:game.name}}"> <img :src="require(`~/assets/${game.img}.jpg`)" alt="game" />
         </nuxt-link>
          <p>{{game.name}}</p>
          <p>{{game.corporation}}</p>
          <div class="prices">
            <p class="sıralı-discount">-{{Math.round((game.indirim+game.epickupon)/game.listefiyatı*100)}}%</p>
            <p>{{game.listefiyatı}}.00₺</p>
            <p>{{game.ücret}}.00₺</p>
          </div>
        </div>
      </div>
      </div>

</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {

    data() {
          return {
            
            
          };
        },
        methods: {
          onClick: function () {
            this.toggleSelected();
          },
          ...mapActions([
            'toggleSelected',
          ])
        },
        computed:{
          ...mapState([
            'newitem','selected'
          ]),
          
          
          
        }
    
}
</script>