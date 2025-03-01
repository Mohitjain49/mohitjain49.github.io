<script setup>
import { PORTFOLIO_LINK } from '../assets/Objects.js';
const PAGE_DESC = "My personal website extensively displays my skills as a software developer " +
    "and the experience I have gathered through working with multiple companies.";
</script>

<template>
<a :href="PORTFOLIO_LINK" class="project-card">
    <div class="project-card-header">My Portfolio</div>
    <div class="project-card-desc"> {{ PAGE_DESC }} </div>
    <div class="project-card-svg-container">
        <i class="fas fa-file-lines"></i>
    </div>
</a>
</template>

<style scoped>
.project-card {
    color: var(--blue-one);
    cursor: pointer;
    width: 450px;
    height: 400px;
    border: 1px solid var(--blue-one);
    border-radius: 20px;
    background-color: var(--dark-background);
    transition: var(--extra-transition);
    overflow: hidden;
}
.project-card:hover {
    color: var(--website-text);
    border-color: var(--website-text);
    box-shadow: 0 0 20px 5px var(--website-text);
}

.project-card-header {
    height: 99px;
    width: 100%;
    border-bottom: 1px solid var(--blue-one);
    transition: var(--extra-transition);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: inherit;
    font-size: 45px;
    font-family: 'Lexend', sans-serif;
    font-weight: bold;
}
.project-card:hover .project-card-header {
    border-color: var(--website-text);
}

.project-card-desc {
    width: calc(100% - 30px);
    height: 110px;
    padding: 20px 15px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
}
.project-card-svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100%;
    font-size: 95px;
    font-family: 'Lexend', sans-serif;
    font-weight: bold;
}

@media (max-width: 550px) {
    .project-card {
        background: transparent;
        width: calc(100% - 40px);
        height: 400px;
    }
    .project-card:hover {
        box-shadow: 0px 0px 0px 0px white;
    }
    .project-card-desc {
        font-size: 17px;
    }
}
</style>