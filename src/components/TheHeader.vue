<template>
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 bordergray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <img class="h-8 w-auto sm:h-10" src="images/logo.png" alt="ロゴ">
          </router-link>
        </div>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <router-link to="/login" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            ログイン
          </router-link>
          <router-link to="/signup" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-300 hover:bg-yellow-400">
            新規登録
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
