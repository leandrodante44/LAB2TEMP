<?php include 'menu.php' ?>
<?php include 'modalFeverAlert.php' ?>

    <div class="header bg-gradient-success pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Configurações</h6>
              <div class="col-lg-9 col-md-10 my-4">
                <h1 class="display-2 text-default ">Olá <?php echo $_SESSION["name_user"] ?></h1>
                <p class="text-default mt-0">Aqui é sua página de configurações, voce pode alterar suas credencias e gerenciar acessos ao sistema.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-4 order-xl-2">
          <div class="card card-profile bg-default">
            <!-- card header -->
            <div class="card-header text-center bg-default">
              <span class="h2 text-white">Cadastrar funcionários</span>
            </div>
            <!-- card body -->
            <div class="card-body pt-0 pb-2">
              <!-- Upload csv -->
              <div div class="form-group">
                <label class="text-light mb-3">Cadastramento em massa</label>
                <div class="custom-file mb-3">
                  <input type="file" class="custom-file-input d-none" id="csv" name="filename">
                  <label class="custom-file-label pointer"  id="csvName" for="csv">Encolha um arquivo .csv</label>
                </div>
                <button id="sendData" type="button" class="btn btn-primary w-100" onclick="sendFile()">Enviar</button>
                <a href="../assets/csv-exemplo.csv" download class="mt-3 float-right text-white"><small>exemplo de arquivo .csv</small></a>
              </div>
            </div>
          </div>

          <div class="card card-profile bg-default">
            <!-- card header -->
            <div class="card-header text-center bg-default">
              <span class="h2 text-white">Convidar</span>
            </div>
            <!-- card body -->
            <div class="card-body pt-0 ">
            <label class="text-light mb-3">Enviar um convite para cadastramento pessoal</label>
              <a href="register.php" class="btn btn-primary w-100">Enviar convite</a>
            </div>
          </div>

          <!-- <a href="register.php" class="btn btn-default openPopup">Registrar</a> -->

          <button  data-href="modalFeverAlert.php"  data-toggle="modal" data-target="#modalFeverAlert" class="btn btn-danger openPopup">Alerta de febre</button>


        </div>
        <div class="col-xl-8 order-xl-1">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="h2 mb-0">Editar credenciais</h3>
                </div>
                <div class="col-4 text-right">
                  <!-- <a href="#!" class="btn btn-sm btn-primary">Settings</a> -->
                </div>
              </div>
            </div>
            <div class="card-body">
              <!-- <form>
                <h6 class="heading-small text-muted mb-4">User information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-username">Username</label>
                        <input type="text" id="input-username" class="form-control" placeholder="Username" value="lucky.jesse">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email">Email address</label>
                        <input type="email" id="input-email" class="form-control" placeholder="jesse@example.com">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">First name</label>
                        <input type="text" id="input-first-name" class="form-control" placeholder="First name" value="Lucky">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-last-name">Last name</label>
                        <input type="text" id="input-last-name" class="form-control" placeholder="Last name" value="Jesse">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" /> -->
                <!-- Address -->
                <!-- <h6 class="heading-small text-muted mb-4">Contact information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">Address</label>
                        <input id="input-address" class="form-control" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-city">City</label>
                        <input type="text" id="input-city" class="form-control" placeholder="City" value="New York">
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-country">Country</label>
                        <input type="text" id="input-country" class="form-control" placeholder="Country" value="United States">
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-country">Postal code</label>
                        <input type="number" id="input-postal-code" class="form-control" placeholder="Postal code">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" /> -->
                <!-- Description -->
                <!-- <h6 class="heading-small text-muted mb-4">About me</h6>
                <div class="pl-lg-4">
                  <div class="form-group">
                    <label class="form-control-label">About Me</label>
                    <textarea rows="4" class="form-control" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>
                  </div>
                </div>
              </form> -->
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
    </div>
  </div>
  <!-- Argon Scripts -->
  <!-- Core -->
  <script src="../assets/vendor/jquery/dist/jquery.min.js"></script>
  <script src="../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../assets/vendor/js-cookie/js.cookie.js"></script>
  <script src="../assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
  <script src="../assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>
  <!-- Argon JS -->
  <script src="../assets/js/argon.js?v=1.2.0"></script>
  <script type="text/javascript" src="../controllers/profile.js"></script>
  <!-- SWEETALERT -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" integrity="sha256-KsRuvuRtUVvobe66OFtOQfjP8WA2SzYsmm4VPfMnxms=" crossorigin="anonymous"></script>
</body>

</html>