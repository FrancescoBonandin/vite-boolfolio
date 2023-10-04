<script>
export default {
    name: "HeaderComponent",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <header>
        <div class="container-fluid ">
            <div class="title-row row justify-content-center align-items-center">
                <div class=" col text-center  text-white flex-grow-1 ">
                    <h1 class="h-100">
                        Lorem ipsum dolor sit amet.
                    </h1>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

    header{
        min-height: 10vh;
        background-color:rgba($color: #1b3979, $alpha: 1.0) ;
        .container-fluid{
            min-height: 10vh;

            >*{
                min-height: 10vh;
            }
        }
    }

 
</style>