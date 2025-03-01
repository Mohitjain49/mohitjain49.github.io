<script setup>
import { HOME_BACKGROUND } from '../assets/Objects.js';
import PortfolioCard from '../cards/PortfolioCard.vue';
</script>

<template>
<vue-particles id="particlests" :options="HOME_BACKGROUND"></vue-particles>
<div class="projects-body">
    <div class="projects-card-grid">
        <div class="projects-card-container">
            <PortfolioCard />
        </div>
    </div>
</div>
</template>
