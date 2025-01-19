<template>
  <div
    class="flex flex-col lg:flex-row justify-center items-center py-12 space-y-12 lg:space-y-0 lg:space-x-12">
    <div class="space-y-12 lg:w-1/2">
      <div
        class="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-semibold">
        Hiii, I'm ChomRoeun!
      </div>
      <div class="sm:w-[300px] md:w-[400px] lg:w-[600px]">
        I’m passionate about creating intuitive and engaging digital experiences
        through <span class="text-primary font-medium">UI/UX design</span>,
        <span class="text-primary font-medium">Digital Marketing</span>, and
        <span class="text-primary font-medium">Frontend development</span>. As a
        <span class="text-primary font-medium">Digital Business major</span>, I
        combine creativity with technical expertise to deliver impactful results
        on every project I take on.
      </div>
    </div>
    <div class="w-full sm:w-2/3 md:w-2/3 lg:w-1/2 flex justify-center">
      <img src="../assets/images/JRProfile.svg" alt="HENG CHOMROEUN PROFILE" />
    </div>
  </div>
  <div>
    <div>
      <div class="text-4xl font-medium">Featured Projects</div>
      <div class="grid grid-cols-2 py-8">
        <div class="col-span-1">
          Explore my work: dive into my case studies, check out the final
          designs, and test the prototypes I’ve created.
        </div>
      </div>
    </div>
    <div>
      <!-- Projects will be displayed here -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Sur+ -->
        <nuxt-link to="https://www.figma.com/proto/eP0GBa0oAc7jr7FlG1oill/Startup---UI?page-id=689%3A326&node-id=802-196&p=f&viewport=466%2C498%2C0.1&t=DDBPG9Iuh3jfozae-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=936%3A735" target="_blank">
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="flex justify-center hover:scale-105  transform transition-transform duration-300">
              <img
                src="../assets/images/SurPlus.png"
                alt="Sur+ Project Cover"
                class=" h-96 object-fit" />
            </div>
            <div class="p-8">
              <div class="text-primary font-medium">UX/UI Design</div>
              <div class="text-xl font-medium">
                Sur+ Telegram Mini App Interface
              </div>
              <div class="text-gray-600">
                Collaborators: HENG Chomroeun, TEAV Sireyvath
              </div>
              <div class="text-gray-500 text-sm">Created: Dec 21, 2024</div>
            </div>
          </div>
        </nuxt-link>

        <!-- Fintory landing Page -->
        <nuxt-link to="https://fintory-nu.vercel.app/" target="_blank">
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="flex justify-center hover:scale-105  transform transition-transform duration-300">
              <img
                src="../assets/images/FintoryLandingPageProjectCover.png"
                alt="Fintory Landing Page Project Cover"
                class=" h-96 object-fit" />
            </div>
            <div class="p-8">
              <div class="text-primary font-medium">
                UX/UI Design, Frontend Development
              </div>
              <div class="text-xl font-medium">Fintory Landing Page</div>
              <div class="text-gray-600">Collaborators: HENG Chomroeun</div>
              <div class="text-gray-500 text-sm">Created: November 7, 2024</div>
            </div>
          </div>
        </nuxt-link>

        <!-- Fintory -->
        <nuxt-link to="https://www.figma.com/proto/5SBD6WdaeB9jnduRsgyvoE/FIntory?page-id=2%3A2&node-id=10-2&viewport=1117%2C167%2C0.14&t=AseRi3Icrf0k1zuO-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10%3A2&show-proto-sidebar=1" target="_blank">
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="flex justify-center hover:scale-105  transform transition-transform duration-300">
              <img
                src="../assets/images/FintoryProjectCover.png"
                alt="Fintory Project Cover"
                class=" h-96 object-fit" />
            </div>
            <div class="p-8">
              <div class="text-primary font-medium">UX/UI Design</div>
              <div class="text-xl font-medium">Fintory Mobile Application</div>
              <div class="text-gray-600">
                Collaborators: PAK Puthek, HENG Chomroeun
              </div>
              <div class="text-gray-500 text-sm">Created: Oct 31, 2024</div>
            </div>
          </div>
        </nuxt-link>

        <!-- Workout. App-->
        <nuxt-link to="https://www.figma.com/proto/eP0GBa0oAc7jr7FlG1oill/Startup---UI?page-id=689%3A326&node-id=802-196&p=f&viewport=466%2C498%2C0.1&t=DDBPG9Iuh3jfozae-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=936%3A735" target="_blank">
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div>
              <div class="flex justify-center hover:scale-105  transform transition-transform duration-300">
                <img
                  src="../assets/images/Workout.png"
                  alt="Workout. Project Cover"
                  class=" h-96 object-fit" />
              </div>
              <div class="p-8">
                <div class="text-primary font-medium">UX/UI Design</div>
                <div class="text-xl font-medium">Workout. Application</div>
                <div class="text-gray-600">Collaborators: HENG Chomroeun</div>
                <div class="text-gray-500 text-sm">Created: July 11, 2024</div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
