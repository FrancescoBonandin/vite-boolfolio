<script>
import axios from 'axios';
import ProjectCardComponent from "../components/ProjectCardComponent.vue";


export default {
    name: "MainComponent",
    components:{
        ProjectCardComponent
    },
    data() {
        return {
            projects:[],
            loader:false,
            currentPage:1,
            lastPage:null,




        }
    },
    
    methods: {

        getProjects(){

            if(!this.loader){

                this.loader=true

                axios.get('http://127.0.0.1:8000/api/projects', {params:{

                    page:this.currentPage||'',

                }}).then(res=>{
                    console.log(res)
                    this.projects=res.data.data.data
                    this.currentPage=res.data.data.current_page
                    this.lastPage=res.data.data.last_page


                    this.loader=false
                }
                )
            }
            
        },

        changePage(mode) {
            if (!this.loading) {
                switch (mode) {
                    case '+':
                        if (this.currentPage < this.lastPage) {
                            this.currentPage++;
                            this.getProjects();
                        }
                        break;

                    case '-':
                        if (this.currentPage > 1) {
                            this.currentPage--;
                            this.getProjects();
                        }
                        break;
                }
            }
        }

    },
    created(){
        this.getProjects()

    },
};
</script>

<template>
    <main>
        <div class="container">

            <div class="row justify-content-between ">

                <div v-for="project in projects" class="col-3 g-4">
                 
                    <ProjectCardComponent :singleProject="project"/>

                </div>

            </div>

            <div class="row justify-content-center mt-4">

                <button class="col-2" @click="changePage('-')">
                    &laquo;previous
                </button>

                <div class="col-3 text-center">
                    {{ this.currentPage }}
                </div>

                <button class="col-2" @click="changePage('+')">
                    next&raquo;
                </button>

            </div>

        </div>
    </main>
</template>