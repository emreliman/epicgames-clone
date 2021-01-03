<template>
<div>
   <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />


    <siparişcard :item="post" />
      <smallcard :item="post" />  
      <p>{{post.name}}</p>
</div>
      
    
</template>
<script>
import {mapState,mapActions} from 'vuex';
import siparişcard from '@/components/siparişcard';
import smallcard from '@/components/smallcard';
export default {
    components:{
    smallcard,
    siparişcard
    
    
  },
  data(){
      return{
          id:this.$route.params.id,
          
      }
  },
  computed:{
       post(){
              
              return this.newitem.find(item=>item.name==this.id);
          },
      ...mapState([
            'itemss','newitem'
          ]),
         
  }

}
</script>