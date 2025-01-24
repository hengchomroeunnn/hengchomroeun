<template>
    <div>
        <div class="">
            <div class="grid grid-cols-1 md:grid-cols-2 m-4 md:m-10 space-x-10">
                <div class="flex justify-center w-full">
                    <div class=" max-lg:w-full max-md:w-1/2 max:sm:w-1/3">
                        <img
                            src="../assets/images/smartulpedit.jpg"
                            alt="Heng Chomroeun SmartULP" />
                    </div>
                </div>
                <div class="mt-4 md:mt-0">
                    Hello, my name is Heng ChomRoeun, and I am a senior student at the
                    <span class="text-primary"
                        >Cambodia Academy of Digital Technology (CADT)</span
                    >, majoring in <span class="text-primary">Digital Business</span>. My
                    passion for <span class="text-primary">UX/UI design</span> began when
                    I first participated in startup competitions, where I discovered the
                    power of transforming customer pain points into tangible solutions
                    through product development. These experiences taught me the
                    importance of understanding user needs and translating them into
                    functional, user-friendly designs. Over time, I have become deeply
                    interested in creating meaningful digital experiences, and I am
                    excited to continue honing my skills and contributing to impactful
                    projects in this field.
                    <div class="mt-4">
                        Detail about me?
                        <span>
                            <nuxt-link
                                to="https://drive.google.com/file/d/1jEGE7NrVU3SH2Lz17M3DR3MPXQWXz_NJ/view?usp=sharing"
                                target="_blank"
                                class="underline italic hover:text-primary"
                                >Take a look at my CV!</nuxt-link
                            >
                        </span>
                    </div>
                </div>
            </div>
            <div class="flex justify-center py-10 bg-gray-50">
                <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-full md:max-w-4xl bg-white shadow-lg rounded-lg p-4 md:p-8">
                    <!-- Tools Section -->
                    <div class="text-center">
                        <h2 class="text-2xl md:text-4xl font-medium text-primary mb-4">Tools</h2>
                        <ul class="space-y-2">
                            <li
                                class="text-lg transition">
                                Figma
                            </li>
                            <li
                                class="text-lg transition">
                                Canvas
                            </li>
                            <li
                                class="text-lg transition">
                                VS Code
                            </li>
                            <li
                                class="text-lg transition">
                                Postman
                            </li>
                        </ul>
                    </div>
                    <!-- Skills Section -->
                    <div class="text-center">
                        <h2 class="text-2xl md:text-4xl font-medium text-primary mb-4">Skills</h2>
                        <ul class="space-y-2">
                            <li
                                class="text-lg transition">
                                UI/UX Design
                            </li>
                            <li
                                class="text-lg transition">
                                User Research
                            </li>
                            <li
                                class="text-lg transition">
                                Wireframing
                            </li>
                            <li
                                class="text-lg transition">
                                Frontend Development
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="text-4xl font-medium text-center">Experiences</div> -->
    </div>
</template>
