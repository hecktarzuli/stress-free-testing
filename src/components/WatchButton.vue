<template>
    <div>
     <button :data-sku="sku">Watch</button>    
    </div>
</template>

<script>
export default {
    props:{
        sku: {
            type: String,
        }
    }
}
</script>