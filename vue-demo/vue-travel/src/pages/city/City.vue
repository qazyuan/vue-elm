<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :letter="letter" :hotCities="hotCities" :cities="cities"></city-list>
        <city-letter @change="getLetter" :cities="cities"></city-letter>
    </div>

</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityLetter from './components/Letter'
import axios from 'axios'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityLetter
    },
    data () {
        return {
            hotCities: [],
            cities: {},
            letter: ''
        };
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
                .then(
                    res => {
                        if (res.data.data) {
                            var data = res.data.data;
                            this.hotCities = data.hotCities;
                            this.cities = data.cities;
                        }
                    }
                )
        },
        getLetter (key) {
            this.letter = key;
        }
    },
    mounted () {
        this.getCityInfo ();
    }
}
</script>
<style type="text/css">

</style>