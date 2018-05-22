<template>
    <div>
        <city-header></city-header>
        <tab></tab>
        <List></List>
    </div>

</template>
<script>
import CityHeader from './components/Header'
import Tab from './components/Tab'
import List from './components/List'
export default {
    name: 'City',
    components: {
        CityHeader,
        Tab,
        List
    }
}
</script>
<style type="text/css">

</style>