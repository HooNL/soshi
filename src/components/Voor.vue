<template>
  <section>

     <!--    <label for="Naam">
          <h3>{{ nam }}</h3> <br>
          Naam:<input v-model="naaam" type="text" name="naam" id="naam" /> 
          <button @click="baa()">Save</button>
        </label> -->
        <br>
        <h2>{{ rat }} </h2>
        <br>
        <button @click="jame()" class="btn">+</button>
        <button @click="minn()" class="btn">-</button>
        <br>
        <!-- <p>{{ jam }}</p> -->
        <br>
        <button @click="khal()" class="btn">Reset</button>
        <br>
          
  </section>
</template>

<script>


export default {
    name: "Voor",



    methods: {

        jame(){
            this.$store.dispatch('jame', 1);
        },
      
        minn(){
            this.$store.dispatch('minn', 1)
        },

        khal(){
            this.$store.dispatch('khal')
        },

        baa(){
            this.$store.dispatch('baa')
        }
      

     /*    plus(jam){
            this.jam = "Uw gekozen nummer: " +  this.rating;
            return jam;
        },

        full(){
        const noom = this.naaam +  " - " + this.achter + ".";
        return noom;
        } */

    },


    computed: {
        rat(){
            return this.$store.state.rating;
        },

       
    },


    

    created() {
        
        console.log("Alles geregeld");
        
    },


    
}
</script>

<style>

</style>