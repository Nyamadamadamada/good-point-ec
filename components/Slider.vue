<template>
<div class="slider bg_skew_border">
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
      <div class="carousel-item active">
      <img src="/slider.png" width="1000" height="400">
      </div>
      <div class="carousel-item">
      <a href="https://saiyo-spera.com/">
      <img src="/Untitled2.png" width="1000" height="400">
      </a>
      </div>
      <div class="carousel-item">
        <img src="/Untitled8.png" width="1000" height="400">
      </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
  </a>
  </div>
</div>
</template>

<style lang="scss" scoped>
.slider {
  padding: 4% 4% 2%;
}
.carousel-inner {
  max-width: 1200px;
  margin: auto;
}
.carousel-item {
  text-align : center;
}

.bg_skew_border{
  background: repeating-linear-gradient(-45deg,#E4EFE7 0,#E4EFE7 10px,#fff 10px,#fff 10.8px);
}

.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}

</style>
