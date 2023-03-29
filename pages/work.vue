<template>
    <div>
        <h2>work</h2>
        <p>{{data}}</p>
    </div>
</template>

<script setup>
const aa = useState('g');

</script>
<script>
import { mapState,mapActions } from 'vuex';
export default {
    data(){
        return {}
    },
    computed:{
        ...mapState(['data']),
        
    },
    methods:{
        ...mapActions(['getData']) 
    },
    created(){
        this.getData();
    }
    
}
</script>

<style></style>