<script lang="ts" setup>
import { capitalize } from '~/utils/str'
import Parser from 'rss-parser';
const parser = new Parser();

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.economic.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.economic.description'),
    },
  ],
}))

const economic_url = "https://news.google.com/rss/search?q=%EB%B6%80%EB%8F%99%EC%82%B0&hl=ko&gl=KR&ceid=KR:ko.xml"
const investing_url = "https://kr.investing.com/rss/news_285.rss"

const [googleNews, investingNews] = await Promise.all([
  parser.parseURL(economic_url),
  parser.parseURL(investing_url)
]);


console.log(googleNews);
console.log(investingNews);

const current_news = googleNews;
// current_news.googleNews.items = current_news.googleNews.items.sort((a:any,b:any)=>{
//   return new Date(b.pubDate) - new Date(a.pubDate)
// })

</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.economic.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <ContentList>
        <PageSection v-for="article in current_news.items" :key="article.guid">
          <div
              class="block hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2]"
          >
            <div class="mt-1 text-slate-600 dark:text-gray-400 text-right">
              <div>{{ new Date(article.pubDate).toLocaleDateString() }}</div>
              <Anchor
                  class="text-sm flex items-center justify-end space-x-1">
                <icon-mdi:newspaper-variant class="text-xs" />
<!--                <span>{{ article.author }}</span>-->
              </Anchor>
            </div>
            <div class="flex flex-col">
              <div
                  class="text-xl font-semibold text-slate-800 dark:text-gray-50"
              >
                <p v-html="article.content"></p>
              </div>
<!--              <div class="text-slate-700 dark:text-gray-300 mb-1">-->
<!--                {{ article.content }}-->
<!--              </div>-->
              <div class="flex">
                <Anchor
                    class="text-sm flex space-x-1 items-center text-primary-500"
                    :to="article.link"
                    target="_blank"
                >
                  <span>{{ $t('others.see_more') }}</span>
                  <icon:ic:baseline-arrow-right-alt class="text-sm" />
                </Anchor>
              </div>
            </div>
          </div>
        </PageSection>
      </ContentList>
    </PageBody>
  </PageWrapper>
</template>
