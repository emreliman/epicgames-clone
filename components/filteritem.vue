<template>
    <div class="dropdown">
        <p>Filtreler</p>
        <hr/>
        <button class="dropbtn" @click="onClick">Kategoriler <i class="arrow up" :class="{ arrowdown: !selected }"></i></button>
        <div v-if="this.selected" class="dropdown-content">
          <button @click="aksiyonclick" href="#">Aksiyon</button>
          <button @click="maceraclick" href="#">Macera</button>
          <button >Mod Araçları</button>
          <button >Bulmaca</button>
          <button >Yarış</button>
          <button >RYO</button>
          <button >Nişancı</button>
        </div>
        <hr/>
      </div>

</template>
<script>
import {mapState,mapActions} from 'vuex';
export default {
    data() {
          return {
            selected: true,
            
          };
        },
        methods: {
          onClick: function () {
            this.selected = !this.selected;
          },
          aksiyonclick:function(){
            this.updatetype1();
          }
          ,
          maceraclick:function(){
             this.updatetype2();
          },
          ...mapActions([
            'updatetype1','updatetype2'
          ])
        },
         computed:{
       
      ...mapState([
            'type',
          ]),
         
  }
    
}
</script>