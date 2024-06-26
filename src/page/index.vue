<template>
    <div class="fusion-index">
        <div class="__start center">
            <div class="__circle_button" @click="handleClick">开始</div>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import { useRouter} from 'vue-router';
export default defineComponent({
    name:"",
    setup(props ,context) {

        const router = useRouter()

        const handleClick = ()=>{
            router.push({path : '/photographVue'})
        }

        return {handleClick}
    }
})
</script>

<style lang="less">
    .fusion-index{
        position: relative;
        width : 100%;
        height: 100%;
        overflow: hidden;
        background-color: antiquewhite;

        .__start{
            position: absolute;
            width: 100%;
            bottom: 30vh;

            .__circle_button{
                width: 5%;
                aspect-ratio: 1 / 1;
                position: relative;
                background-color: #3498db;
            }
        }

        
    }
</style>
