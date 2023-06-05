<template>
  <div>
    <div class="row row-cols-1 row-cols-md-5" >
      <div class="col mb-4" v-for="o in 8" :key="o">
        <div class="card h-100">
          <el-image
            style="width: 100%; height: 130px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"
            >
          </el-image>
          <div class="card-body px-2 pt-4 pb-2 position-relative">
          <div>
            <el-tooltip class="item" effect="dark" content="加入购物车" placement="top">
              <el-button type="warning" icon="el-icon-shopping-cart-full" circle class="addCart"></el-button>
            </el-tooltip>
          </div>
            <el-link><span class="goods-title">故障压扁酷狗X5充电仓一堆当故障处理里面电池500毫安622532型号</span></el-link>
            <span class="text-warning mt-2">￥888.88</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  components: {},
  props: {},
  data () {
    return {
      loading: true
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
.addCart{
  position: absolute;
  top: -20px;
  right: 13px;
}
.goods-title{
  font-size: 13px;
  font-weight: bold;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -moz-box;
  -moz-line-clamp: 2;
  -moz-box-orient: vertical;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  overflow: hidden;
}
</style>