<script setup>
import { ref, onMounted } from 'vue';

const monsters = ref([]);
const currentPage = ref(1);

const fetchMonsters = async () => {
    try {
        const response = await fetch(`https://metallo.ew.r.appspot.com/monsters?page=${currentPage.value}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        monsters.value = data;
        console.log('Monsters:', monsters.value);
    } catch (error) {
        console.error('Error fetching monsters:', error);
    }
};

const nextPage = () => {
    currentPage.value++;
    fetchMonsters();
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        fetchMonsters();
    }
};

onMounted(() => {
    fetchMonsters();
});
</script>

<template>
    <body>
        <div class="container py-5">
            <div class="row">
                <div class="col">
                    <div class="mb-5">
                        <h3 class="text-uppercase border-start border-5 border-primary ps-3">Every Monsters</h3>
                        <h5 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Page {{ currentPage }}</h5>
                        <div v-for="monster in monsters" :key="monster.id" class="d-flex overflow-hidden mb-3 bg-light">
                            <img class="img-fluid" :src="monster.image"
                                style="width: 100px; height: 100px; object-fit: cover;" alt="" />
                            <router-link :to="'/monsters/' + monster._id"
                                class="h5 d-flex align-items-center bg-light px-3 mb-0">
                                {{ monster.name }}
                            </router-link>
                        </div>
                    </div>
                    <button type="button" class="btn btn-outline-success" @click="prevPage">Prev</button>
                    <button type="button" class="btn btn-outline-success" @click="nextPage">Next</button>
                </div>
            </div>
        </div>
    </body>
</template>