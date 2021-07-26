
<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light p-0">
      <div class="block-header-logo col-3">
        <NuxtLink to="/">
          <img class="lazyload block-header-logo--img" alt="sitelogo" src="/title.png" height="54">
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #fff;
  height: 80px;
  z-index: 10;
}

.block-header-logo {
    width: 100px;
    font-size: 0;
    padding: 12px 0 11px;
}

.block-global-search {
    align-items: center;
}
.isHiddenNav{
  opacity: 0;
  transform: translateY(-5px);
  transition: .5s;
}
.nav-right {
  display: flex;
  justify-content: flex-end;
}

</style>
