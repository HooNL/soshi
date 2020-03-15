<template>
  <article class="about">
    <h1>This is an about page</h1>


    <section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum quae veniam earum assumenda aliquam vero suscipit itaque quibusdam dolorem, reprehenderit soluta nobis repellendus deserunt sit consectetur enim quaerat! Eius maiores, laborum consequuntur aperiam nam ipsum quae at rem id mollitia blanditiis esse praesentium repellendus accusantium voluptate in molestiae sequi error eum similique libero soluta eos magnam! Nemo sunt quo illo cupiditate facilis itaque, quisquam quibusdam modi assumenda perspiciatis natus! Quaerat unde reiciendis fugiat officiis. Aspernatur error, consequuntur numquam totam, libero doloremque enim veritatis voluptates aliquam corrupti earum unde quaerat quam debitis sunt ullam accusamus. Doloribus earum at veritatis iusto minima. Vero dicta magni debitis quisquam cum, deserunt molestiae dolorem perferendis tenetur accusamus unde necessitatibus vitae soluta cupiditate dignissimos consequatur placeat ad repudiandae aut, beatae deleniti fugit voluptates eius! Optio sint soluta repellendus quaerat quam itaque numquam, debitis placeat amet, incidunt odit nemo quos illo laudantium enim mollitia sed odio aliquam aliquid unde consectetur rem asperiores? Pariatur voluptatibus maxime sit dolore odio animi nisi consequuntur vero, obcaecati labore illum maiores ad ipsam ratione eligendi, commodi beatae ullam eius distinctio? Dolorem nam officia iusto eaque labore explicabo ratione veniam eos accusamus mollitia suscipit odio consequuntur laudantium odit soluta, quibusdam cupiditate aliquid!
    </section>



    <span id="sp">
      {{ rat }}
    </span>


    <br>
    

    <hr>
    <Gebruik class="geb"/>
   
    
  </article>
</template>


<script>

import Gebruik from '@/components/Gebruik'


export default {
  name: 'About',

  components: {Gebruik},

  computed: {
    rat(){
      return this.$store.state.rating;
    }
  },
}
</script>


<style scoped>



  #sp{
    background-color: #c8b7a9;
    position: fixed;
    top: 50px;
    left: 25px;
    padding: 2px 0 0 0;
    margin: 0;
    border-radius: 7px;
    width: 30px;
    height: 30px;
    color: #000;
  }


  .geb{
    margin-left: 150px;
  }



 @media screen and (max-width: 520px){

   #app{
     width: 100%;
     height: auto;
   }


   .geb{
     display: block;
     width: 100%;
     height: auto;
     background-color: #000;
     color: #fff;
     left: 0;
   }


 }
</style>