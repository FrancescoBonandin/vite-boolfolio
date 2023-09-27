<script>
import axios from 'axios';

export default {
    name: "MainComponent",
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
                <div v-for="project in projects" class="col-4 g-4">
                 
                    <div  class="card h-100 bg-secondary text-light">
                        <h2 class="card-title ">
                            {{ project.title }}
                        </h2>
                        <div class="card-body bg-dark">
                            <img v-if="project.img != null" :src="'C:/MAMP/htdocs/Boolean/laravel-many-to-many/public/storage/'+project.img" :alt="project.title" class="card-img img-fluid">

                            <div>
                                <h4>
                                    Description:
                                </h4>
                                {{ project.description }}
                            </div>

                            <div >

                                <h5>
                                    Type:
                                </h5>


                                <div v-if="project.type !=null">
                                    {{ project.type.type_name}}
                                </div>

                                <div v-else>
                                    -
                                </div>

                            </div>

                            <div>

                                <h5>
                                    Technologies:
                                </h5>

                                <div v-if="project.technologies.length>0">
                                    <span v-for="(technology,key) in project.technologies" :key="key">
                                        {{technology.technology_name}}
                                        <span v-if="key<project.technologies.length-1">
                                          {{', '}}
                                        </span>
                                    </span>
                                   
                                </div>
    
                                <div v-else>
                                    -
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

    .card-title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

</style>