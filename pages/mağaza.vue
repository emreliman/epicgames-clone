<template>
<div>
   
    <filteritem/>
     
     <discountcard/>
     <sıralamakart/>

    </div>
    

</template>

<script>
import filteritem from "@/components/filteritem";
import sıralamakart from "@/components/sıralamakart";
import discountcard from "@/components/discountcard";



export default {
    components:{
        filteritem,
        sıralamakart,
        discountcard
        
       
    }
}
</script>