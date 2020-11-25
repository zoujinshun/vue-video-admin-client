<template>
<el-row class="tac" type="flex">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-menu :collapse="collapse" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="white" text-color="#000000" active-text-color="#00BFFF">
            <el-submenu :index="item.id" v-for="(item) in asideMenu" :key="item.id">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item :index="child.id" v-for="(child) in item.child" :key="child.id">{{child.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-col>
</el-row>
</template>

<script>

export default {
    name: 'ASide',
    props: [],
    data: function () {
        return {
            width: window.innerWidth,
            collapse: false,
            asideMenu:this.config.asideMenu
        }
    },
    created:function(){
        if(this.width < 375){
            this.collapse = true;
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>

</style>
