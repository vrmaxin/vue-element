<!-- 数据栏 -->
<template>
  <div class="app-container">
    <!--筛选栏-->
    <div class="filter-container">

    </div>
    <!--工具栏-->
    <div class="operate-container">

    </div>
    <!-- 数据栏 -->
    <div class="data-container">

    </div>
    <!-- 分页栏 -->
    <vue-el-pagination></vue-el-pagination>
  </div>
</template>
<script>
import VueElPagination from "./lib/VueElPagination";
export default {
  name: "VueElTable",
  components: {
    VueElPagination
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style>
</style>

