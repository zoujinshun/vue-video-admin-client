<template>
<el-container>
    
    <el-aside width="200px">
		<layout-aside></layout-aside>
	</el-aside>
    <el-container>
        <el-header class="layout-header">
			<layout-header></layout-header>
        </el-header>
        <el-main>
            <router-view>
                <slot></slot>
            </router-view>
        </el-main>
    </el-container>
</el-container>
</template>

<script>
//引入全局组件
import Aside from './Aside'
import Header from './Header'

export default {
    name: 'Layout',
    components: {
        'layout-aside': Aside,
        'layout-header': Header
    }
}
</script>

<style>
    .layout-header {
        padding: 0;
        margin: 0;
    }
</style>
