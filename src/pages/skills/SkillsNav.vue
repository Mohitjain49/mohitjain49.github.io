<template>
    <NavigationMain />
    <div class="personal-web-body personal-web-body-main" @click="() => {webData.setNavBarDropdown(-1)}">
        <div class="main-nav-page-container">
            <div class="nav-page-title center-flex-display gradient-text">My Skills</div>
            <div class="main-nav-page twoColumn-nav-page">
                <NavPageCard :sectorObj="NAV_CARDS[0]" />
                <NavPageCard :sectorObj="NAV_CARDS[7]" />
                <NavPageCard :sectorObj="NAV_CARDS[2]" />
                <NavPageCard :sectorObj="NAV_CARDS[6]" />
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
    document.title = "Mohit Jain | Skills";
    webData.mountWebData();

    webData.colorHandler.setCurrentNavCards([
        { id: NAV_CARDS[0].id, titleId: NAV_CARDS[0].titleId },
        { id: NAV_CARDS[7].id, titleId: NAV_CARDS[7].titleId },
        { id: NAV_CARDS[2].id, titleId: NAV_CARDS[2].titleId },
        { id: NAV_CARDS[6].id, titleId: NAV_CARDS[6].titleId },
    ]);
})
</script>