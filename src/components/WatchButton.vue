<template>
    <div>
     <button :data-sku="sku" @click="watched=true">
         <template v-if="watched">Watched</template>
         <template v-else>Watch</template>
     </button>    
    </div>
</template>

<script>
export default {
    data(){
        return {
            watched: false,
        }
        
    },
    props:{
        sku: {
            type: String,
        }
    }
}
</script>