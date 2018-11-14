<!-- 首页 -->
<template>
  <div class='hello'>
    <h1>{{msg}}</h1>
    <img src="@/assets/logo.png">
    <h2>The first try form Cheky with Vrma</h2>
    <ul>
      <router-link to="/table" tag="VueElTable">VueElTable</router-link>
      <router-link to="/tab" tag="li">VueElTab</router-link>
      <li>
        <a href='https://forum.vuejs.org' target='_blank'>
          VueElForm
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
