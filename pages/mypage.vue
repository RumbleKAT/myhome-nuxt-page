<script lang="ts" setup>
import { ref } from 'vue'
import { capitalize } from '~/utils/str'

const myCoolDiv = ref(null)
const clickMe = () => console.log(myCoolDiv)
// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.blank.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.blank.description'),
    },
  ],
}))
// const { data } = await useFetch(
//   () => `https://api.github.com/search/users?q=zero86&per_page=50`
// )
// console.log(data)
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.blank.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <h1>About Page</h1>
        <!--        {{ data }}-->
        <button @click="clickMe">click me</button>
        <div class="chart">
          <div class="bars">
            <div class="bar" style="height: 50%"></div>
            <div class="bar" style="height: 20%"></div>
            <div class="bar" style="height: 70%"></div>
            <!-- etc -->
          </div>
          <div class="labels">
            <span class="label">Bar 1</span>
            <span class="label">Bar 2</span>
            <span class="label">Bar 3</span>
            <!-- etc -->
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
<style>
.chart {
  height: 100px;
  width: 200px;
  display: flex;
  flex-direction: column;
}

@keyframes grow-column {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

.bars {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  overflow: hidden;
}
.bar {
  flex: 1;
  border-radius: 3px 3px 0 0;
  background: rgba(98, 144, 200, 1);
  border: 1px solid rgba(55, 105, 150, 1);
  border-bottom: none;
  margin: 0 18px;
  animation: grow-column 1s;
}
.labels {
  display: flex;
  flex-direction: row;
}
.label {
  flex: 1;
  padding: 3px;
  text-align: center;
}
</style>
