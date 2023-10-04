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
            loader:false,
            currentPage:null,
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
        <div class="container-fluid">

            <div class="row">

                <aside class="col-2 sidebar">

                    <ul class="navigation-menu">

                        <li class="drop-menu">
                            <span>></span>Front-end
                        </li>
                    
                        <li class="drop-menu">
                            <span>></span>Back-end
                        </li>

                    </ul>

                </aside>

                <router-view></router-view>
            </div>


        </div>
    </main>
</template>

<style lang="scss" scoped>

 
    main{

        min-height: 80vh;
        .sidebar{
            border: solid 1px rgba($color: #ad2537, $alpha: 1.0);
            min-height: 80vh;
            
        }
            
    }
 

</style>