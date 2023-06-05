<template>
  <div class="container">
    <el-alert
      title="请同学们合理发布商品！"
      type="success">
    </el-alert>
    <el-row type="flex" justify="center" class="pt-3 pb-4">
      <el-col :span="8">
        <el-row type="flex">
          <el-image
            style="width: 50px; height: 50px"
            :src="require('@/assets/logo.png')"
            class="mr-2">
          </el-image>
          <h3 class="mt-1">校园易购平台</h3>
        </el-row>
      </el-col>
      <el-col :span="7">
        <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="9">
        <el-row type="flex" justify="end">
          <el-button type="primary" icon="el-icon-plus">发布商品</el-button>
          <el-button type="success" icon="el-icon-shopping-bag-1">求购商品</el-button>
          <el-button type="info" icon="el-icon-notebook-2">我的订单</el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card class="box-card">
        <el-tabs >
          <el-tab-pane label="最新发布" v-for="i in 8" :key="i">
          <GoodsList />
          </el-tab-pane>
        </el-tabs>
      </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GoodsList from '@/components/GoodsList.vue'
export default {
  name: 'IndexView',
  components: {
    GoodsList
  },
  props: {},
  data () {
    return {
      searchText: ''
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
.container{
  padding: 20px 0px;
}
</style>