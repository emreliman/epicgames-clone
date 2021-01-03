<template>
    <div id="top-card" >
         <nuxt-link :to="{name:'ürün-id',params:{id:itemss[0].name}}"> <img :src="require(`~/assets/${itemss[0].img}.jpg`)" />
         </nuxt-link>
          <button @click="leftarrow">
            <i class="arrow left"></i>
          </button>
          <button @click="rightarrow">
            <i class="arrow right"></i>
          </button>
          <div class="card-about">
            <p class="game-name">{{itemss[0].name}}</p>
            <p class="game-about">
              {{itemss[0].about}}
            </p>
            <a href="" style="padding-bottom:20px;">Hemen Kap -></a>
          </div>
        </div>

</template>

<script>
  import {mapState,mapActions} from 'vuex';
  var sayi = 0;
      var newitem = [
        {
          key: 1,
          name: "AutoChess",
          about:
            "Auto Chess 1.0 çıktı! En iyi çevrimiçi rekabetçi strateji oyununda parçalarını seçerek ve takımını[...]",
          img:"autochess",
        },
        {
          key: 2,
          name: "GhostRunner",
          about:
            "Ghostrunner'ı ayağa kaldırmanın ve kıyamet sonrasını yaşayan insanlığı acımasız Key Master'dan[...]",
          img:"ghostrunner",
        },
        {
          key: 0,
          name: "RogueCompany",
          about:
            "Fixer geldi! En son güncellemeyle birlikte Rogue Company'de yeni Sniper'ı bugün oyna!",
          img:"roguecompany",
        },
      ];


export default {
    data(){
        return{
          
            itemss: [
              {
                key: 0,
                name: "RogueCompany",
                about:
                  "Fixer geldi! En son güncellemeyle birlikte Rogue Company'de yeni Sniper'ı bugün oyna!",
                img:'roguecompany',
              },
            ],

        }
    },
     methods: {
      

       
          rightarrow: function () {
            this.itemss[0].name = newitem[sayi].name;
            this.itemss[0].about = newitem[sayi].about;
            this.itemss[0].img = newitem[sayi].img;
            sayi++;
            if (sayi === 3) {
              sayi = 0;
            }
          },
          leftarrow: function () {
            newitem.reverse();
            this.itemss[0].name = newitem[sayi].name;
            this.itemss[0].about = newitem[sayi].about;
            this.itemss[0].img = newitem[sayi].img;
            sayi++;
            if (sayi === 3) {
              sayi = 0;
            }
          },
          
        },
        
}
</script>

