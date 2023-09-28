<script>
export default {
    name: "ProjectCardComponent",
    data() {
        return {

        }
    },
    props:{
        singleProject:Object,
        
    },
    methods: {
        getImagePath: function(image){
            return new URL (image, import.meta.url).href;
        }

    }
}
</script>

<template>

    <router-link :to="{ name:'projects', params: {id:singleProject.id}}">

        <div  class="card h-100 bg-secondary text-light">
            <h2 class="card-title ">
                {{ singleProject.title }}
            </h2>
            <div class="card-body bg-dark">
                <img v-if="singleProject.img != null" :src="singleProject.Full_Img" :alt="singleProject.title" class="card-img img-fluid">
    
                <div>
                    <h4>
                        Description:
                    </h4>
                    {{ singleProject.description }}
                </div>
    
                <div >
    
                    <h5>
                        Type:
                    </h5>
    
    
                    <div v-if="singleProject.type !=null">
                        {{ singleProject.type.type_name}}
                    </div>
    
                    <div v-else>
                        -
                    </div>
    
                </div>
    
                <div>
    
                    <h5>
                        Technologies:
                    </h5>
    
                    <div v-if="singleProject.technologies.length>0">
                        <span v-for="(technology,key) in singleProject.technologies" :key="key">
                            {{technology.technology_name}}
                            <span v-if="key<singleProject.technologies.length-1">
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
    </router-link>
</template>

<style lang="scss" scoped>

.card-title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

</style>