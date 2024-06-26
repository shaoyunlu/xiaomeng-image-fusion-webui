<template>
    <router-view></router-view>
    <div class="fusion-index-button" @click="handleClick" v-show="g_fusion_index_button_show"><span>首页</span></div>
</template>

<script>
import {defineComponent, onMounted} from 'vue'
import {useRouter} from 'vue-router'
import {g_fusion_index_button_show} from 'util/global'
export default defineComponent({
    name:"",
    setup(props ,context) {

        const router = useRouter()

        const handleClick = ()=>{
            router.push({path : '/'})
        }

        onMounted(()=>{
            router.beforeEach((to ,from ,next)=>{
                g_fusion_index_button_show.value = (to.path != '/')
                next()
            })
        })

        return {handleClick ,g_fusion_index_button_show}
    }
})
</script>

<style lang="less">
    .fusion-index-button{
        position: fixed;
        width: 3%;
        aspect-ratio: 1 / 1;
        left : 1%;
        top : 1%;
        background-color: darkcyan;
        z-index: 1000;
    }
</style>
