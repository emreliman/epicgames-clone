<template>
    <div class="sm-card">
        <img :src="require(`~/assets/${item.img}.jpg`)" alt="" />
        <p class="açıklama">
          {{item.long}}
        </p>
        <div class="sm-card-buy">
          <div class="sm-prices">
            <p id="sm-discount">-{{Math.round((item.indirim+item.epickupon)/item.listefiyatı*100)}}%</p>
            <p>{{item.indirim+item.epickupon}}₺</p>
            <p>{{item.ücret}}₺</p>
          </div>
          <div class="buy-fav-button">
            <button>ŞİMDİ SATIN AL</button>
            <button class="heart-icon"><i class="far fa-heart"></i></button>
          </div>
          <p>indirim 05.12.2020 saat 19:00'da bitiyor.</p>
        </div>
      </div>
</template>
<script>

export default {
  props:['item']
}
</script>