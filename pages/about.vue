<template>
  <div>
    <h2>about</h2>
    <p>{{ count }}</p>
    {{ resData }}
    <button @click="add">클릭</button>
  </div>
</template>


<script setup>
    const aa = useState('g',()=>'about 내용쪽에 있는 데이터를 사용가능');
    const {data:resData} = await useFetch('/api/db');
</script>
<script>
export default {
    
    data(){
        return{
            count:0,
            test:'' ,
        }
    },
    methods:{
        incre(){
            console.log("g")
            this.count = 1000;
        },
        async add(){
            const data = {name : '누구' , content :'나나나' , date:'2023-03-29'}
            this.test = await useFetch('/api/db',{body:data,method:'POST'});
        }
    }
}
</script>

<style>

</style>