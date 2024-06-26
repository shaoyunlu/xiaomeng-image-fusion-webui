<template>
    <div class="fusion-photograph">
        <div class="__camera_wrap center">
            <div class="__camera"></div>
        </div>
        <div class="__start center">
            <div class="__circle_button" @click="handleClick"></div>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        return {}
    }
})
</script>

<style lang="less">
    .fusion-photograph{
        position: relative;
        width : 100%;
        height: 100%;
        overflow: hidden;
        background-color: antiquewhite;

        .__camera_wrap{
            position: absolute;
            width: 100%;
            top: 10vh;
            .__camera{
                width: 50vw;
                height: 28.125vw;
                background-color: cadetblue;
            }
        }

        .__start{
            position: absolute;
            width: 100%;
            bottom: 10vh;

            .__circle_button{
                width: 5%;
                padding-top: 5%;
                position: relative;
                background-color: #3498db;
            }
        }
    }
</style>
