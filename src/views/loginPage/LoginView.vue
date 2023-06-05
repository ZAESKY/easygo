<template>
  <el-container class="loginContainer">
    <el-main class="loginMain">
      <el-row type="flex" justify="center">
        <div><el-image
          style="width: 100px; height: 100px"
          :src="require('@/assets/logo.png')">
        </el-image></div>
      </el-row>
      <el-row type="flex" justify="center">
        <div class="py-4"><h2>校园易购平台</h2></div>
      </el-row>
      <el-form :model="formData" ref="vForm" :rules="rules" label-position="left" label-width="80px" size="medium"
        @submit.native.prevent>
        <el-row type="flex" justify="center">
          <el-col :span="8" class="grid-cell">
            <div class="card-container">
              <el-card style="{width: 100% !important}" shadow="always">
                <div slot="header" class="clear-fix loginSlogan">
                  <span>登录</span>
                </div>
                <el-form-item label="" label-width="0" prop="lgName" class="required">
                  <el-input v-model="formData.lgName" type="text" placeholder="请输入用户名" clearable
                    prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item label="" label-width="0" prop="lgPwd" class="required">
                  <el-input v-model="formData.lgPwd" type="password" :show-password="true" placeholder="请输入密码"
                    clearable :minlength="6" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <div class="static-content-item">
                  <el-button type="primary" icon="el-icon-key" class="lgBtn" @click="submitForm">登录</el-button>
                </div>
                <div class="static-content-item">
                  <el-divider direction="horizontal">还没有账号？<el-link type="primary" href="#/register">立即注册</el-link></el-divider>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import { userLogin } from '@/api/user'
export default {
  name: 'LoginView',
  components: {},
  props: {},
  data () {
    return {
      // 表单数据
      formData: {
        lgName: '',
        lgPwd: ''
      },
      // 验证规则
      rules: {
        lgName: [{
          required: true,
          message: '请输入用户名！'
        }],
        lgPwd: [{
          required: true,
          message: '请输入密码！'
        }, {
          pattern: /^[^一-龥]+$/,
          trigger: ['blur', 'change'],
          message: '请输入非中文字符的密码！'
        }]
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 验证规则是否通过
    submitForm () {
      this.$refs.vForm.validate(valid => {
        if (!valid) return
        this.onLogin()
      })
    },
    resetForm () {
      this.$refs.vForm.resetFields()
    },
    // 登录
    async onLogin () {
      try {
        const { data } = await userLogin({
          username: this.formData.lgName,
          password: this.formData.lgPwd
        })
        console.log(data)
        if (!data.status) {
          this.$message({
            message: '登录成功！',
            type: 'success'
          })
          setTimeout(() => { this.$router.push('/') }, 1000)
        } else {
          this.$message.error(data)
        }
      } catch (error) {
        console.log(error)
        this.$message.error(error)
      }
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
.loginContainer{
  .loginSlogan{
    text-align: center;
  }
  .lgBtn{
    width: 100%;
  }
  .rgAccount{
    width: 100%;
  }
}
</style>
