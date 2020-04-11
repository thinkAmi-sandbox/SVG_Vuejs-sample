<template>
  <rectangle id="rectangle" @click="handleClick" />
</template>

<script>
  import Rectangle from '../assets/rectangle.svg';

  export default {
    name: "SvgFileComponent",

    components: {
      Rectangle,
    },

    methods: {
      handleClick: function() {
        const svgDoc = document.getElementById('rectangle');
        const paths = svgDoc.getElementsByTagName('path');
        console.log(paths);
        console.log(paths[0]);
        console.log(paths[0].id);
        console.log(paths[0].className);
        console.log(paths[0].classList);
        console.log(paths[0]._prevClass);
      }
    }
  }
</script>