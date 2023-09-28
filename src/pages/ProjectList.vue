
<script>
import axios from 'axios';


export default {
   
    components:{
    },
    data() {
        return {




        }
    },
    
    methods: {

        getProjects(){

            if(!this.loader){

                this.loader=true

                axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`).then(res=>{
                    console.log(res)
                    this.projects=res.data.data.data
                    this.currentPage=res.data.data.current_page
                    this.lastPage=res.data.data.last_page


                    this.loader=false
                }
            )
            }

        },


    },
    created(){


    },
};
</script>
<template>
    
    <div class="container">

    

    </div>

</template>