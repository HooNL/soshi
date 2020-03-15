<template>
  <article>
        <h2>De user data</h2>

    <section>
        <h3>User naam en achternaam</h3>
        <div v-for="i in userData.users" :key="i.id" @click="getIndex(index)">
            
          <li>{{ i.id }}.  {{ i.userName }} {{ i.userLast }}. Heeft een <span class="span">{{ i.werk }}</span> als baan.
          </li>
        </div>
    <!-- <img :src="getUrl(img)" :alt="i.title"> -->
    </section>

    <section>
       <h3>User genre</h3>
        <li v-for="b in userData.users" :key="b.id">
            {{ b.genre }}
        </li>
        
    </section>  
    
      <h5>De verdere infor</h5>
  </article>
</template>

<script>
import userData from '@/data/UserData'

export default {
    name: "Gebruik",

    data() {
        return {
            userData,
            userIndex: 0 
        }
    },

    methods: {
        getIndex(index){
            this.userIndex = index;
        },
        getUrl(img){
            console.log('Naar foto gegaan');
            
            return require('../assets/userIMG' + img);
        }
    },
}
</script>

<style scoped>
    article{
        background-color: #c7a8b0;
        width: 1000px;
        display: block;
        justify-content: center;
        justify-items: center;
        align-content: center;
        padding: 0 5px;
        margin: 0;

    }

    ul{
        list-style: none;
        text-align: left;
    }

    li{
        list-style: none;
        border: 1px #000 ridge;
        padding: 2px;
        margin: 1px 0;
    }

    h2{
        color: blue;
        
    }

    .span{
        background-color: #00ff008f;
        color: black;
    }
</style>