<template>
    <div>
        <Head>
            <Title>포트폴리오</Title>
            <Meta name="discription" content="프론트앤드 포트폴리오...." />
            <Link rel="shortcut icon" href="/path/to/favion.ico" /> 
        </Head>
        <header>
            <NuxtLink to="/" >HOME</NuxtLink>
            <NuxtLink to="/about" >ABOUT</NuxtLink>
            <NuxtLink to="/work" >WORK</NuxtLink>
        </header>
        <slot></slot>
        <footer></footer>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    data(){
        return {}
    },
    computed:{
        ...mapState(['data'])
    }
}
</script>

<style></style>