<template>
    <NavigationMain />
    <div class="personal-web-body personal-web-body-main" @click="() => {webData.setNavBarDropdown(-1)}">
        <div class="main-nav-page-container">
            <div class="nav-page-title center-flex-display gradient-text">My Experience</div>
            <div class="main-nav-page">
                <NavPageCard :sectorObj="NAV_CARDS[3]" />
                <NavPageCard :sectorObj="NAV_CARDS[4]" />
                <NavPageCard :sectorObj="NAV_CARDS[5]" />
            </div>
            <div class="main-sector-bottom-linkBtn-container center-flex-display" style="padding-bottom: 30px;">
                <RouterLink to="/" class="main-sector-bottom-linkBtn center-flex-display">Back to Home</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavigationMain from '../../components/NavigationMain.vue';
import NavPageCard from '../../components/body-components/NavPageCard.vue';

import "../../styles/nav/navpage.css";
import "../../styles/sectors/sectorstyles.css";

import { useWebsiteDataStore } from '../../stores/WebsiteData.js';
import { NAV_CARDS } from '../../stores/Objects.js';
import { onMounted } from 'vue';

const webData = useWebsiteDataStore();
onMounted(() => {
    document.title = "Mohit Jain | Experience";
    webData.mountWebData();

    webData.colorHandler.setCurrentNavCards([
        { id: NAV_CARDS[3].id, titleId: NAV_CARDS[3].titleId },
        { id: NAV_CARDS[4].id, titleId: NAV_CARDS[4].titleId },
        { id: NAV_CARDS[5].id, titleId: NAV_CARDS[5].titleId }
    ]);
})
</script>