<template>
  <el-container class="registerContainer">
  <el-main class="registerMain">
    <el-row type="flex" justify="center">
        <div><el-image
          style="width: 100px; height: 100px"
          :src="require('@/assets/logo.png')">
        </el-image></div>
      </el-row>
      <el-row type="flex" justify="center">
        <div><h2>校园易购平台</h2></div>
      </el-row>
    <el-form :model="formData" ref="vForm" :rules="rules" label-position="left" label-width="80px" size="medium"
      @submit.native.prevent>
      <el-row type="flex" justify="center">
        <el-col :span="8" class="grid-cell">
          <div class="card-container">
            <el-card style="{width: 100% !important}" shadow="always">
              <div slot="header" class="clear-fix registerSlogan">
                <span>注册</span>
              </div>
              <el-form-item label="" label-width="0" prop="rgName" class="required">
                <el-input v-model="formData.rgName" type="text" placeholder="请输入用户名" clearable
                  prefix-icon="el-icon-user"></el-input>
              </el-form-item>
              <el-form-item label="" label-width="0" prop="rgPwd" class="required">
                <el-input v-model="formData.rgPwd" type="password" :show-password="true" placeholder="请输入密码"
                  clearable :minlength="6" prefix-icon="el-icon-lock"></el-input>
              </el-form-item>
              <el-form-item label="" label-width="0" prop="rgPwd2" class="required">
                <el-input v-model="formData.rgPwd2" type="password" :show-password="true" placeholder="请输入确认密码"
                  clearable :minlength="6" prefix-icon="el-icon-lock"></el-input>
              </el-form-item>
              <el-form-item label="" label-width="0" prop="rgEmail" class="required">
                <el-input v-model="formData.rgEmail" type="text" placeholder="请输入邮箱" clearable
                  prefix-icon="el-icon-message"></el-input>
              </el-form-item>
              <el-form-item label="用户类型：" label-width="40%" prop="rgUserType">
                <el-select v-model="formData.rgUserType" class="full-width-input" clearable
                  placeholder="请选择用户类型">
                  <el-option v-for="(item, index) in rgUserTypeOptions" :key="index" :label="item.label"
                    :value="item.value" :disabled="item.disabled"></el-option>
                </el-select>
              </el-form-item>
              <div class="static-content-item">
                <el-button type="success" icon="el-icon-check" class="rgBtn" @click="submitForm">立即注册</el-button>
              </div>
              <div class="static-content-item">
                <el-divider direction="horizontal">已有账号？<el-link type="primary" href="#/login">立即登录</el-link></el-divider>
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
import { userRegister } from '@/api/user'
export default {
  name: 'RegisterView',
  components: {},
  props: {},
  data () {
    return {
      formData: {
        rgName: '',
        rgPwd: '',
        rgPwd2: '',
        rgEmail: '',
        rgUserType: 1
      },
      rules: {
        rgName: [{
          required: true,
          message: '字段值不可为空'
        }],
        rgPwd: [{
          required: true,
          message: '字段值不可为空'
        }, {
          pattern: /^[^一-龥]+$/,
          trigger: ['blur', 'change'],
          message: '请输入非中文字符的密码！'
        }],
        rgPwd2: [{
          required: true,
          message: '字段值不可为空'
        }, {
          pattern: /^[^一-龥]+$/,
          trigger: ['blur', 'change'],
          message: '请输入非中文字符的密码！'
        }],
        rgEmail: [{
          required: true,
          message: '字段值不可为空'
        }, {
          pattern: /^([-_A-Za-z0-9.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/,
          trigger: ['blur', 'change'],
          message: '邮箱不正确！'
        }]
      },
      rgUserTypeOptions: [{
        label: '普通用户',
        value: 1
      }, {
        label: '商家',
        value: '2'
      }, {
        label: '管理员',
        value: 3
      }]
    }
  },
  watch: {},
  computed: {},
  methods: {
    submitForm () {
      this.$refs.vForm.validate(valid => {
        if (!valid) return
        if (this.formData.rgPwd !== this.formData.rgPwd2) {
          this.$message('两次输入的密码不一致')
        } else {
          this.onUserRegister()
        }
      })
    },
    resetForm () {
      this.$refs.vForm.resetFields()
    },
    async onUserRegister () {
      try {
        const { data } = await userRegister({
          username: this.formData.rgName,
          password: this.formData.rgPwd2,
          email: this.formData.rgEmail,
          register_at: Date.now(),
          user_type: this.formData.rgUserType
        })
        console.log(data)
        this.$message({
          message: '注册成功！即将跳转至登录页面',
          type: 'success'
        })
        setTimeout(() => { this.$router.push('/login') }, 3000)
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
.registerMain{
  .registerSlogan{
    text-align: center;
  }
  .rgBtn{
    width: 100%;
  }
}
</style>