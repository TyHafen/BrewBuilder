<template>
  <div class="container container-fluid m-0 ">
    <div class="row m-0 p-1">
      <div class="col-md-2 p-0 m-1 ">
        <h3> This recipe builder is designed for a homebrew batch of 5.5 gallons.</h3>

      </div>
      <div class="col-md-5 mx-5">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Beer Name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Enter Beer Name">

            <h4>Fermentables</h4>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Pilsner </label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1"> 2-Row</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Maris Otter</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1"></label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>

          <button type="submit" class="btn btn-primary  m-1">Submit</button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
