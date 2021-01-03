<template>
  <div class="container">
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
      <carditem/>
      <discountcard/>
      
      
      
      
      
    </div>
  </div>
</template>

<script>
import discountcard from '@/components/discountcard';
import carditem from '@/components/carditem';






export default {
  components:{
    carditem,
    discountcard,
   
    
    
  }

}
</script>


