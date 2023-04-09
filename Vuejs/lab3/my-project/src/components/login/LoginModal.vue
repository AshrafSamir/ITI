<template>
  <!-- Button trigger modal -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content p-4 rounded-0">
        <div class="container">
          <p class="modal-title opacity-50 mb-2" id="exampleModalLabel">
            Please add your account details
          </p>
        </div>
        <div class="container">
          <div class="d-flex justify-content-center mb-3 row">
            <input
              type="text"
              placeholder="Type your user name"
              class="p-2 col-md-12"
            />

            <input
              type="text"
              placeholder="Type your password name"
              class="p-2 col-md-12"
            />
          </div>
        </div>
        <div class="container footer">
          <div class="d-flex justify-content-end w-100">
            <p>Forget password?</p>
          </div>

          <button type="button" class="myBtn">LOGIN</button>
          <div class="d-flex justify-content-center w-100 mt-3">
            <p class="center">Don't have an account? sign up!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginModal",
};
</script>

<style>
.myBtn {
  color: white;
  background-color: #572589;
  border-color: #572589;
}
.center {
  display: inline-block;
  margin: auto;
}
.modal-dialog {
  top: 3rem;
  left: 15rem;
}
.footer {
  color: #572589;
}
input {
  width: 90%;
  border: none;
  border-bottom: 1px solid black;
}
input:focus {
  outline: none;
  border-bottom: #9448e1 4px solid;
  /* box-shadow: #572589 5px 5px 5px    !important; */
}

@media all and (max-width: 1015px) {
  .modal-dialog {
    position: relative;
    top: 0;
    left: 0;
  }
}
</style>
