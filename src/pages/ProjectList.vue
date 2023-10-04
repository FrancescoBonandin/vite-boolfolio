
<script>
import axios from 'axios';


export default {
   
    components:{
    },
    data() {
        return {
            project:null,
           




        }
    },
    
    methods: {

        getSingleProject(){

            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`).
            then(res=>{
                console.log(res.data.data)
                this.project=res.data.data

            }
            )
        }

        


    },
    created(){
        this.getSingleProject()

    },
};
</script>
<template>
    
    <div class="col">
        <div class="row">
            <div class="col">

                <div class="card">
                    <div class="card-title text-center">
               
                        <h1>
                            {{project.title}}
                        </h1>

                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div v-if="project.Full_Img" class="col flex-shrink-1">
                                <img :src="project.Full_Img" class="img-fluid" alt="no related image">
                            </div>
                            <div class="col flex-grow-1">
                                <div class="row">
                                    <div class="col">
                                        <h3>description</h3>
                                        <div>

                                            {{project.description}}
                                        </div>
                                    </div>
    
                                    <div class="col-auto">
                                        <h3>type</h3>
                                        <div v-if="project.type">
                                            {{project.type.type_name}}
                                        </div>
                                        <div v-else>
                                           -
                                        </div>
                                    </div>

                                    <div class="col-auto" >
                                        <h3>technologies</h3>
                                        <div v-if="project.technologies.length>0">
                                            <span v-for="(technology, key) in project.technologies">
                                                {{technology.technology_name}}
                                                <span v-if="key < project.technologies.length -1">
                                                    ,
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


            </div>
        </div>
    

    </div>

</template>

<style lang="scss" scoped>
 .col{
    min-height: 100%;

    .row,.card,.card-body{
        min-height: 100%;
    }

 }

</style>