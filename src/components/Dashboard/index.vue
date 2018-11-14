<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    <h2>The first try form Cheky with Vrma</h2>
    <ul>
      <li>
        <a href='https://vuejs.org' target='_blank'>
          VueElTable
        </a>
      </li>
      <li>
        <a href='https://forum.vuejs.org' target='_blank'>
          VueElForm
        </a>
      </li>
      <li>
        <a href='https://chat.vuejs.org' target='_blank'>
          VueElTab
        </a>
      </li>
      <li>
        <a href='https://twitter.com/vuejs' target='_blank'>
          VueElTree
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a href='http://router.vuejs.org/' target='_blank'>
          VueElDatePicker
        </a>
      </li>
      <li>
        <a href='http://vuex.vuejs.org/' target='_blank'>
          VueElMessage
        </a>
      </li>
      <li>
        <a href='http://vue-loader.vuejs.org/' target='_blank'>
          VueElNav
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Vue Element"
    };
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
