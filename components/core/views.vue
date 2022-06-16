<template>
    <v-main class="color-bg">
        <div id="core-view">
            <v-fade-transition mode="out-in">
                <nuxt></nuxt>
            </v-fade-transition>
        </div>
    </v-main>
</template>

<script>
export default {
    name: 'coreView',
}
</script>

<style>
    .color-bg {
        background-color: #eeee !important;
    }
</style>