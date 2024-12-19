<script setup>
import { experiences, skills } from "../data/about";
console.debug({ experiences, skills });
</script>

<template>
    <div class="py-6 px-6 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img class="block h-32 rounded-xl m-2 sm:shrink-0 shadow-xl shadow-slate-300 dark:shadow-slate-700"
            src="http://www.gravatar.com/avatar/6dcb5dcc85145bbd70ef3c4e461544e3?s=144&d=mm&r=g" alt="Tevfik Tümer">
        <div class="space-y-2">
            <div class="space-y-1">
                <p class="text-3xl text-slate-700 font-medium dark:text-slate-200">
                    Hi! This is Tevfik from Munich/Germany
                </p>
                <p class="text-slate-600 font-medium text-lg dark:text-slate-400">
                    <!-- Full Stack Developer and Computer Engineer -->
                    Sr. Developer Support Engineer @ <a href="https://sugarcrm.com/de/">SugarCRM</a> - Full Stack
                    Developer
                    - Bash & Regex Fan - Apprentice Gopher
                </p>
                <p class="text-slate-500">
                    Here you can find some information about me, check out my works and send a message to me.
                </p>
            </div>
        </div>
    </div>

    <div class="flex flex-column items-center mt-2 mb-4">
        <h3 class="text-2xl pr-3">Education</h3>
        <hr class="grow dark:text-slate-300">
    </div>
    <ul class="space-y-6">
        <li class="border-l-4 px-4 last:mb-3 py-0.5 rounded-tl-md rounded-bl-md border-tt-lighter dark:border-tt-dark">
            <h4 class="text-lg text-slate-800 dark:text-slate-300">Computer Engineering <span
                    class="float-right text-sm text-tt-dark dark:font-semibold">2009 - 2012</span></h4>
            <h5 class="text-slate-500 mb-2">Izmir University of Economics, Bachelor</h5>
            <p class="text-justify">After graduating Computer Technologies and Programming in 2005, I decided to work.
                So, I
                worked couple years on the market. At that time our education system was going through some changes and
                I
                took the opportunity to study Computer Enginnering at Izmir University of Economics by passing the "DGS"
                exam. As I have already got an Associate Degree, it took only three years to complete Bachelor degree.
                Not
                only have I increased my experience in C++ and Java but I have also gained necessary skills for Computer
                Engineering.</p>
        </li>
        <li class="border-l-4 px-4 last:mb-3 py-0.5 rounded-tl-md rounded-bl-md border-tt-lighter dark:border-tt-dark">
            <h4 class="text-lg text-slate-800 dark:text-slate-300">Computer Technologies and Programming<span
                    class="float-right text-sm text-tt-dark dark:font-semibold">2002 - 2005</span></h4>
            <h5 class="text-slate-500 mb-2">Izmir University of Economics, Associate Degree</h5>
            <p class="text-justify">In 1996 the development of new technologies fueled my curiosity for computer
                programming. After graduating from high school in 2002, I have chosen Computer Technologies and
                Programming
                department at Izmir University of Economics. At first I took one year of English Preperation Class and
                then
                completed my two-years study in this department. This department has increased my knowledge of C
                programming
                language and Data Structures.</p>
        </li>
    </ul>

    <div class="flex flex-column items-center mt-6 mb-4">
        <h3 class="text-2xl pr-3">Qualifications</h3>
        <hr class="grow dark:text-slate-300">
    </div>
    <ul class="space-y-3">
        <li class="border-l-4 px-4 py-0.5 rounded-tl-md rounded-bl-md border-tt-lighter dark:border-tt-dark">
            <h4 class="text-lg text-slate-800 dark:text-slate-300">Certified Sugar Developer Specialist<span
                    class="float-right text-sm text-tt-dark dark:font-semibold">2015</span></h4>
        </li>
        <li class="border-l-4 px-4 py-0.5 rounded-tl-md rounded-bl-md border-tt-lighter dark:border-tt-dark">
            <h4 class="text-lg text-slate-800 dark:text-slate-300">Certified Sugar Administration Specialist<span
                    class="float-right text-sm text-tt-dark dark:font-semibold">2014</span></h4>
        </li>
        <li class="border-l-4 px-4 py-0.5 rounded-tl-md rounded-bl-md border-tt-lighter dark:border-tt-dark">
            <h4 class="text-lg text-slate-800 dark:text-slate-300">Oracle Database Course Certification<span
                    class="float-right text-sm text-tt-dark dark:font-semibold">2011</span></h4>
        </li>
    </ul>

    <div class="flex flex-column items-center my-4">
        <h3 class="text-2xl pr-3">Experiences</h3>
        <hr class="grow dark:text-slate-300">
    </div>

    <ul class="space-y-3">
        <li class="border-l-4 px-4 py-0.5 rounded-tl-md rounded-bl-md border-tt-lighter dark:border-tt-dark"
            v-for="exp in experiences">
            <!-- <h4 class="text-lg text-slate-800 dark:text-slate-300">Certified Sugar Developer Specialist<span class="float-right text-sm text-tt-dark dark:font-semibold">2015</span></h4> -->
            <h4 class="text-lg text-slate-800 dark:text-slate-300">{{ exp.name }}<span
                    class="float-right text-sm text-tt-dark dark:font-semibold" v-text="exp.date" /></h4>
            <h5 class="text-slate-500 mb-2" v-text="exp.title" />
            <p class="text-justify"><span v-html="exp.description" /><br v-if="exp.description">
                <template v-for="(link, index) in exp.links">
                    <span v-text="' - '" v-if="index" />
                    <a class="text-tt-lighter dark:text-tt-ligth" :href="link" v-text="link" />
                </template>
            </p>
        </li>
    </ul>


    <div class="flex flex-column items-center mt-4 mb-2">
        <h3 class="text-2xl pr-3">Programming</h3>
        <hr class="grow dark:text-slate-300">
    </div>

    <template v-for="(skill, subname) in skills">
        <div class="flex flex-column items-center mt-2 mb-4 pl-8">
            <h3 class="text-lg pr-3" v-text="subname" />
            <hr class="grow dark:text-slate-300">
        </div>
        <ul class="space-y-2 pr-14 pl-6">
            <li class="flex flex-columns items-center" v-for="lang in skill">
                <div class="text-right w-80 pr-6" v-text="lang.name" />
                <div class="h-4 w-full bg-slate-100 dark:bg-slate-700 rounded grow">
                    <div class="h-full rounded" :class="lang.class" :style="'width: ' + lang.progress + '%;'"></div>
                </div>
            </li>
        </ul>
    </template>
</template>

<style scoped>
.success {
    @apply bg-green-400 dark:bg-green-600;
}

.info {
    @apply bg-blue-400 dark:bg-blue-600;
}

.warning {
    @apply bg-orange-400 dark:bg-orange-600;
}
</style>