<template>
<div>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

    <siparişcard :item="post" />
    <smallcard :item="post" />
    <p>{{post.name}}</p>
    <button style="border: 2px solid black;
  background-color: green;
  color: white;
  font-size: 12px;
  cursor: pointer; " @click="sepeteEkle">SEPETE EKLE </button>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex';
import siparişcard from '@/components/siparişcard';
import smallcard from '@/components/smallcard';
export default {
    components: {
        smallcard,
        siparişcard

    },
    data() {
        return {
            id: this.$route.params.id,

        }
    },
    methods: {
        sepeteEkle() {
            this.aSepeteEkle(this.post)
            this.$root.$emit('uyarıcı', true)
        },
        ...mapActions(['aSepeteEkle'])

    },
    computed: {
        post() {

            return this.newitem.find(item => item.name == this.id);
        },
        ...mapState([
            'itemss', 'newitem'
        ]),

    }

}
</script>
