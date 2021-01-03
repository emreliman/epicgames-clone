<template>
    <div class="spö-kartı">
        <p style="color: rgba(255, 255, 255, 0.8); margin: 15px 10px">
          SİPARİŞ ÖZETİ
        </p>
        <div class="spö-img">
          <img :src="require(`~/assets/${item.img}.jpg`)" alt="" />
          <div class="spö-img-yazı">
            <p
              style="
                font-size: 16px;
                color: rgba(255, 255, 255, 0.781);
                font: caption;
              ">
            
              {{item.name}}
              <p>{{item.corporation}}</p>
              
            </p>
            
          </div>
        </div>
        <div class="spö-white">
          <p>Liste fiyatı</p>
          <p>₺{{item.listefiyatı}}.00</p>
        </div>
        <div class="spö-red" style="margin-top: -13px">
          <p>İndirim</p>
          <p>-₺{{item.indirim}}.00</p>
        </div>
        <div class="spö-red" style="margin-top: -13px">
          <p>Epic Kuponu</p>
          <p>-₺{{item.epickupon}}.00</p>
        </div>
        <div class="spö-white" style="margin-top: -13px">
          <p>Ücret</p>
          <p style="color: rgba(255, 255, 255, 0.781)">₺{{item.ücret}}.00</p>
        </div>
        <p style="margin: 0 10px">Ödenmesi gereken durumlarda KDV dahildir</p>
        <div>
          <hr />
        </div>
        <div class="spö-white">
          <p>Toplam</p>
          <p style="color: rgba(255, 255, 255, 0.781)">₺{{item.ücret}}.00</p>
        </div>
        <div class="spö-white">
          <p style="max-width: 50px; color: rgba(255, 255, 255, 0.781)">
            Ödeyeceğin Miktar
          </p>
          <p style="color: rgba(255, 255, 255, 0.781)">₺{{item.ücret}}.00</p>
        </div>
        <div>
          <hr />
        </div>
        <input class="spö-inp" placeholder="BİR İÇERİK ÜRETİCİSİ ETİKERİ GİR" />
        <div class="spö-check">
          <input
            type="checkbox"
            style="width: 30px; height: 30px; margin-top: 10px"
          />
          <p>
            <a>
              {{item.name}} ile e-posta adresini paylaşmak için buraya tıkla.{{item.name}}
              e-posta</a
            >
          </p>
        </div>
        <button id="spö-ödeme">ÖDEME YAP</button>
      </div>

</template>
<script>
export default {
  props:['item']
}
</script>