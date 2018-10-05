<template>
    <div>
        <router-view name="public" />
        <router-view name="admin" />
    </div>
</template>

<script>
export default {
    methods: {
        redirect () {
            if (this.$router.currentRoute.name == 'main') {
                this.$router.push ({ name: 'main.home' })
            }
            if (this.$router.currentRoute.name == 'admin') {
                this.$router.push ({ name: 'admin.resume' })
            }
        },
    },
    mounted () {
        this.redirect ()
    },
    watch: {
        $route () {
            this.redirect ()
        },
    },
}
</script>