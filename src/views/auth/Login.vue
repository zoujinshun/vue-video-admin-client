<template>
<el-row :gutter="10" type="flex" justify="center" align="middle" :style="rowstyle"> 
  <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" >
      <div class="grid-content bg-purple-light">

        <i class="el-icon-video-camera-solid" style="margin-left:7rem;margin-bottom:2rem;font-size:3rem;"><span style="font-size:1.8rem;">车库管理后台</span></i>
        
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="auto"  class="demo-ruleForm" :label-position="labelPosition">
            <el-form-item label="账号" prop="account">
                <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item style="text-align:center">
                <el-button type="primary" style="width:100%;" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
      </div>
      </el-col>
</el-row>

        
</template>

<script>
  export default {
    data() {
      var checkAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入账号'));
        }else{
            callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var height = window.innerHeight + 'px';
      return {
        ruleForm: {
          account:'',
          password: ''
        },
        rules: {
          account: [
            { validator: checkAccount, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
          
        },
        rowstyle : {
            height: height 
        },
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        labelPosition:'left',
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              // if(this.ruleForm.account === account && this.ruleForm.password === pass){
              //     localStorage.setItem('account',this.ruleForm.account);
              //     this.$message({
              //         message:'登录成功',
              //         type:'success'
              //     });
                  
              //         this.$router.push({path:'/'});
                 
                  
              // }else{
              //     this.$message({
              //         message : '账号或密码错误，登录失败！',
              //         type : 'error'
              //     });
              //     this.ruleForm.password = '';
              //     return false;
              // }
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style>
    .logo {
        width: 3rem;
        height: 3rem;
        border-radius: 0.5rem;
        margin-bottom: 1.5rem;
        margin-left: 12rem;
    }
</style>