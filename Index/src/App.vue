<script setup>
</script>

<template>
  <header class="px-4 pt-2 desktop:px-16 desktop:pt-12">
    <div class="flex justify-between">
      <div class="uppercase font-bold text-[8px] desktop:text-base">workout</div>
      <nav class="flex items-center text-[6px] desktop:text-xs gap-1.5 desktop:gap-5 uppercase">
        <a href="#" class="transition-colors duration-300 hover:text-yellow-500">workouts</a>
        <a href="#" class="transition-colors duration-300 hover:text-yellow-500">programs</a>
        <a href="#" class="transition-colors duration-300 hover:text-yellow-500">healthy living</a>
        <a href="#" class="transition-colors duration-300 hover:text-yellow-500">community</a>
        <a href="#" class="transition-colors duration-300 hover:text-yellow-500">about</a>
        <a href="#" class="transition-colors duration-300 hover:text-yellow-500">store</a>
      </nav>
    </div>
  </header>


  <section class="container mx-auto py-48 relative flex flex-col">
    <div class="flex">
      <div class="flex flex-col">
        <span class="font-bold uppercase desktop:text-[172px] text-6xl tracking-tight font-sfprodisplay">workout</span>
      

        <span class="font-bold uppercase desktop:text-[172px] text-6xl tracking-tight font-sfprodisplay">with me</span>

        <span class="bg-[#171717] desktop:text-base text-xs opacity-60 not-italic tracking-wide mt-8">A huge
          selection of
          health and fitness content, healthy recipes and
          <br>
          transformation stories to help you get fit and stay fit!</span>

        <div class="absolute top-[260px] right-[220px]">
          <img src="mensport.png">
        </div>
      </div>

      
      <div class="flex justify-center items-center z-10 ml-40 mb-40">
      <div class="bg-[#EF8964] py-3 px-5 rounded-xl text-5xl font-bold not-italic flex flex-col gap-3">
          <div class="flex items-center justify-center bg-[#EFA082] rounded-full">
            <img src=runningstick.svg>
          </div>
          <div class="text-center">4,95 <span class="text-xs opacity-60"> km</span>
          </div>
        </div>
      </div>
    </div>


    <div class="flex justify-center z-10">
      <div class="flex justify-center items-center bg-[#303030] py-4 pl-6 rounded-xl">
        <span class=""><img src="play.svg"></span>
        <div class="flex flex-col">
          <span class="text-2xl tracking-wide pl-2 font-semibold ">350+</span>
          <span class="pr-6 pl-2 text-[#EFEDE8A6] text-base tracking-wide ">Video tutorial</span>
        </div>
      </div>
    </div>

    <button
      class="bg-[#E6533C] w-1/6 h-14 items-center rounded-lg text-lg font-semibold tracking-wider font-poppins ">
      Join Club Now!
    </button>

    <div class="flex justify-end z-10">
      <div class="bg-[#7A29DC] py-5 px-5 flex flex-col rounded-xl">
        <span class="pr-12 text-4xl tracking-wider font-semibold">500+</span>
        <span class="text-[#EFEDE8A6] tracking-wider text-sm not-italic pr-2">Free Workout Videos </span>
      </div>
    </div>

  <div class="flex flex-col">
    <div class="text-[#EFEDE8A6] tracking-wider text-sm uppercase">as featured in</div>
    <div class="flex pt-12 space-x-6">
      <img src="nike.svg">
      <img src="buzzfeed.svg">
      <img src="esprit.svg">
      <img src="national_geographic.svg">
      <img src="dw.svg">
      <img src="huffpost.svg">
    </div>
  </div>
  </section>

  <section class="container mx-auto">
    <div class="flex flex-col text-4xl mb-12">
      Not sure where to start?

      <span class="mt-6 text-[#EFEDE8A6] text-base">
        Programs offer day-to-day guidance on an interactive calendar to keep
        you on track.
      </span>
    </div>

    <div class="grid grid-cols-4 gap-8">
      <span class="flex flex-col  bg-[#323443] rounded-xl text-base py-12 px-10 font-semibold">
        <p>Workout Videos</p>

        <span class="flex text-sm text-[#EFEDE8A6] mt-4 ">Access to hundreds of free, full-length workout videos.
          <a href="#">
            <img src="arrow.svg" class="ml-2">
          </a>
        </span>

      </span>
      <span class=" flex flex-col bg-[#232532] rounded-xl text-base py-12 px-10 font-semibold "> Workout Programs

        <span class="flex text-sm text-[#EFEDE8A6] mt-4">Affordable and effective workout programs.
          <a href="#">
            <img src="arrow.svg" class="ml-2">
          </a>
        </span>
      </span>
      <span class="flex flex-col bg-[#323443] rounded-xl text-base py-12 px-10 font-semibold">Meal Plans

        <span class="flex text-sm text-[#EFEDE8A6] mt-4">Plans built with registered dietitians and nutritionists.
          <a href="#">
            <img src="arrow.svg" class="ml-2">
          </a>
        </span>
      </span>
      <span class="flex flex-col bg-[#4F5261] rounded-xl text-base py-12 px-10 font-semibold">WO Plus ALL ACCESS

        <span class="flex text-sm text-[#EFEDE8A6] mt-4">Add powerful features to your membership.
          <a href="#">
            <img src="arrow.svg" class="ml-2">
          </a>
        </span>
      </span>
    </div>
  </section>

  <section class="flex container mx-auto mt-48">
    <div class="flex flex-col justify-center w-2/3 pr-40">
      <span class="text-4xl font-semibold">Workout at home for free.

      </span>
      <span class="text-sm mt-9 not-italic text-[#EFEDE8A6]">
        <p class="leading-7">We believe fitness should be accessible to everyone,
          everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and
          informative articles, as well as one of the most positive communities on the web, you’ll have everything you
          need
          to reach your personal fitness goals – for free!</p>

      </span>

      <div class="flex items-center mt-6">
        <span class="text-base text-[#0070C9] mr-2">See More</span>
        <a href="#">
          <img src="arrow.svg">
        </a>
      </div>
    </div>
    <div class="w-4/5"><img src="women_detente.png"></div>
  </section>

  <section class="flex container mx-auto mt-32">
    <div class=""><img src=women_sport.png></div>
    <div class="flex flex-col justify-center w-2/3 pl-40">
      <span class="text-5xl font-semibold">
        <p class="leading-relaxed">Get more with low-cost training programs and advanced features.</p>

      </span>
      <span class="text-sm mt-9 not-italic text-[#EFEDE8A6]">
        <p class="leading-7">We believe fitness should be accessible to everyone,
          everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and
          informative articles, as well as one of the most positive communities on the web, you’ll have everything you
          need
          to reach your personal fitness goals – for free!</p>

      </span>

      <div class="flex items-center mt-6">
        <span class="text-base text-[#0070C9] mr-2">See More</span>
        <a href="#">
          <img src="arrow.svg">
        </a>
      </div>
    </div>
  </section>


  <section class="flex flex-col container mx-auto mt-40">
    <div class="text-5xl tracking-wider not-italic">Membership</div>
    <span class="w-full h-[1px] bg-white mt-12 opacity-40"></span>

  </section>


  <section class="container mx-auto flex gap-x-16 grid-cols-2 pb-24 mt-8 tracking-wide ">
    <div class="flex flex-col bg-[#232532] px-16 py-16 ">
      <span class="text-4xl text-[#FAFAF9] font-semibold text-center">Join for Free</span>
      <span class="text-lg text-[#EFEDE8A6] not-italic mt-8">Reach your fitness goals or maintain your healthy lifestyle
        with
        professional training and
        support
        from a positive and active online community.</span>
      <span class="text-lg text-[#EFEDE8A6] not-italic mt-4">
        <li>≈600 Full-Length Workout Videos</li>
        <li>Customizable Calendar</li>
        <li>Healthy Recipes</li>
        <li>Health and Fitness Articles</li>
        <li>Positive and Supportive Online Community</li>
        <li> No Credit Card Needed</li>
      </span>
      <div class="flex mt-28">
        <span class="text-base text-[#0070C9] mr-2">See More</span>
        <a href="#">
          <img src="arrow.svg">
        </a>
      </div>
    </div>

    <div class=" flex flex-col bg-[#323443] px-16 py-16">
      <span class="text-4xl font-semibold text-center">WO Plus</span>
      <span class="text-lg not-italic mt-8 text-[#EFEDE8A6]">WO Plus includes everything you get with a free membership
        and adds brand new
        convenience
        features,
        fitness tools, and unique content.
      </span>
      <span class="text-lg not-italic mt-4 text-[#EFEDE8A6]">
        <li>Ads-Free Website and Videos</li>
        <li>Surprise Me Workout Selection Tool</li>
        <li>Statistics for Your Activities</li>
        <li> Enter and Track Custom Workouts</li>
        <li>FB Plus Exclusive Workouts</li>
        <li> Trackers to See Your Progress</li>
        <li>FB Plus Content and Challenges</li>
        <li> Video Tags</li>
        <li>FB Plus Routines</li>
        <li> Rest Day Complete</li>
      </span>
      <button class="text-base font-semibold bg-[#0070C9] mt-8 rounded-lg font-poppins me-auto p-1.5">Join Club
        Now!</button>

    </div>
  </section>

  <section>
    <div class="flex justify-end mr-16 mb-7">
      <div class="bg-white px-4 py-2 text-[#303030] text-lg font-semibold">
        Back to top
        <a href="#">
          <img src="arrow_top.svg" class="inline-block">
        </a>
      </div>

    </div>
  </section> -->
</template>



