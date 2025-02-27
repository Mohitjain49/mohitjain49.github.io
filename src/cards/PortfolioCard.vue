<script setup>

</script>

<template>
<div class="project-card">

</div>
</template>

<style scoped>
.project-card {
    cursor: pointer;
    width: 400px;
    height: 400px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: var(--dark-background);
    transition: box-shadow 0.3s ease-in-out;
}
.project-card:hover {
    box-shadow: 0 0 20px 3px white;
}
</style>