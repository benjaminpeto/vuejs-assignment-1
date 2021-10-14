const app = Vue.createApp({
    data() {
        return {
            name: "Benji",
            age: 29,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHLaD-Wf2fmVF_SxZEE1JyaLkhpV4GL9qoCKoUbK3JC-hxcfvEHeBg5MAhGGG2Ix9LlA&usqp=CAU"
        }
    },
    methods: {
        randomNumber() {
            return Math.random();
        },
        agePlusFive(){
            return this.age + 5;
        }
    }
});

app.mount("#assignment");