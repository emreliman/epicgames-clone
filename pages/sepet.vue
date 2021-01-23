<template>
<div v-if="uyarı" class="sepet">
    
  
    <div class="sırala" v-for="item in basket" :key="item.key" > 
        <img :src="require(`~/assets/${item.img}.jpg`)" />
        <p>{{item.name}}</p>
        <p>{{item.ücret}}</p>
        
        
        
    </div>
    
    <button v-if="basket.length!=0" @click="sTemizle">SEPETİ BOŞALT</button>





</div>


</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
     
     data(){
         return{
           msg:'',
           array:[],
           uyarı:true
         }
     },
     computed:{
         ...mapState(['basket','authuser']),
         mesaj(){
             if(!!!this.authuser){
             this.msg='Giriş Yapınız'
             return this.msg
             }
             else if(this.basket.length===0){
                 this.msg='sepete ürün ekleyin'
                 return this.msg

             }
             

         }
         
     },
     watch:{
         msg(old){
         this.mesaj=this.msg
         }

     }
     ,
     mounted(){
         this.$root.$on('uyarıcı', function(data) {
   this.uyarı=data
})
     }
     ,
     methods:{
         ...mapActions(['sepetiBoşalt']),
         sTemizle(){
        this.sepetiBoşalt()
        this.uyarı=false
         }

     }


}
</script>

<style scoped>
.sepet{
    margin-top: 70px;
    color: azure;
    padding: 0px 32px;
    
}
img{
    width: 100px;
    height: 100px;
    z-index: 999999999999;
    object-fit: cover;
}
.sırala{

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 30px;
    align-items: stretch;
}
button{
    color: lawngreen;
}

</style>