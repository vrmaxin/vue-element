<!-- 分页栏 -->
<template>
  <el-pagination v-show="total>0" :current-page="page" :page-sizes="[10,20,30,50]" :page-size="size" :total="total" background layout="total, sizes, prev, pager, next, jumper" />
</template>

<script>
export default {
  name: "VueElPagination",
  props: {
    page: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>

