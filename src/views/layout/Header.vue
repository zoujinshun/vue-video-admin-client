<template>
<el-row type="flex" justify="end">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-menu :collapse="collapse"  class="el-menu-demo header-menu" mode="horizontal" @select="handleSelect" background-color="#00BFFF" text-color="#fff" active-text-color="#ffd04b">
            
                <el-menu-item><i class="el-icon-video-camera-solid" style="color:white;font-size:1.5rem;margin-top:-0.4rem"></i><router-link :to="{path:'/'}" style="text-decoration: nono;">车库管理后台</router-link></el-menu-item>
        

            <el-submenu index="rightMenu" :style="styleObject">
                <template slot="title">
                    <avator-img :src="avatorImgSrc"></avator-img> {{username}}
                </template>
                <el-menu-item > 个人信息</el-menu-item>
                <el-menu-item @click="handleLogout"> 退出登录</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-col>
</el-row>
</template>

<script>
import Avator from '../img/Avator'

export default {
    name: 'Header',
    components: {
        'avator-img': Avator,
    },
    props: [],
    data() {
        return {
            activeIndex2: '1',
            width: window.innerWidth,
            collapse: false,
            styleObject: {
                float: 'right',
            },
            username: '小黄牛',
            avatorImgSrc: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            rightMenu: this.config.rightMenu
        };
    },
    created: function () {
        if (this.width < 375) {
            this.collapse = true;
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleLogout(){
            this.$confirm('确认退出？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            this.$message({
                type: 'success',
                message: '退出成功'
            });
            this.$router.push({path:'/auth/login'});
            }).catch(() => {       
            });
        }
    }
}
</script>

<style scoped>
.header-menu {
    margin-top: -0.5rem;
    margin-right: -0.5rem;
    padding: 0;
}
a {
    text-decoration: none;
    color: aliceblue;
}
.router-link-active {
    text-decoration: none;
    color: aliceblue;
}
</style>
