<template>
    <div class="fusion-photograph">

        <div class="__tip center">
            <div class="__circle_button" @click="handleClick">
                点击开始后，请后退几步，确保画面中有您的清晰正脸，系统会在倒计时结束后进行拍照。请在拍照前保持您在画面中。
            </div>
        </div>

        <div class="__camera_wrap center">
            <div class="__camera">
                <video id="video" autoplay ref="videoRef"></video>
            </div>
        </div>
        <div class="__start center">
            <div class="__circle_button" @click="handleClick">开始</div>
        </div>
    </div>
</template>

<script>
import {defineComponent,onMounted,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const videoRef = ref(null)
        let stream

        async function startCamera() {
            try {
                if (stream) {
                    stopCamera(); // 先停止之前的流
                }
                stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.value.srcObject = stream;
            } catch (error) {
                console.log("Error accessing the camera: ", error);
            }
        }

        function stopCamera() {
            if (stream) {
                let tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
                videoRef.value.srcObject = null;
                stream = null; // 确保下次重新获取流
            }
        }

        onMounted(()=>{
            startCamera()
        })


        return {videoRef}
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
            top: 15vh;
            .__camera{
                width: 50vw;
                aspect-ratio: 16 / 9;
                background-color: cadetblue;
                video{
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .__tip{
            position: absolute;
            width: 100%;
            top : 5vh;
        }

        .__start{
            position: absolute;
            width: 100%;
            bottom: 10vh;

            .__circle_button{
                width: 5%;
                aspect-ratio: 1 / 1;
                position: relative;
                background-color: #3498db;
            }
        }
    }
</style>
