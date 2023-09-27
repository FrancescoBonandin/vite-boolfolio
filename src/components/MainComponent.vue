<script>
import axios from 'axios';
import ProjectCardComponent from "./ProjectCardComponent.vue";

export default {
    name: "MainComponent",
    components:{
        ProjectCardComponent
    },
    data() {
        return {
            projects:[],

        }
    },
    methods: {

    },
    created(){

        axios.get('http://127.0.0.1:8000/api/projects').then(res=>{
            console.log(res)
            this.projects=res.data.data

        }
        )

    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row justify-content-between ">
                <div v-for="project in projects" class="col-3 g-4">
                 
                    <ProjectCardComponent   :singleProject="project" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

 

</style>