<template>
  <div class="rate">
    <div class="rate-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="#572589"
        class="bi bi-star-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
        />
      </svg>
    </div>
    <div>
      <h3>4.5</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "RateComponent",
  props: ["rate"],
};
</script>

<style>
.rate {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 1.8rem;
  border-radius: 7px;
  background-color: #ffffff;
}
.rate-icon {
  margin-right: 1rem;
  margin-bottom: 0.3rem;
}
div h3 {
  margin-top: 0.3rem;
  font-size: 1rem;
}
</style>
