<template>
  <div class="container">
    <el-row type="flex" justify="center" class="py-5">
      <el-col :span="8">
        <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-tabs type="card"  style="height: 200px;">
          <el-tab-pane label="最新发布">
            <div class="row row-cols-1 row-cols-md-4">
              <div v-for="o in 8" :key="o" class="col mb-4">
                <div class="card h-100 overflow-hidden">
                  <el-image
                    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
                  </el-image>
                  <div class="card-body">
                    <el-button type="primary" icon="el-icon-shopping-cart-2" circle></el-button>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'IndexView',
  components: {},
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
</style>