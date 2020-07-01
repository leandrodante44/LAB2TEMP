<?php include 'menu.php' ?>
<input type="hidden" id="hdnIdComp" name="hdnIdComp" value="<?php echo $_SESSION["company"] ?>">
<!-- Header -->
<div class="header bg-gradient-success pb-6">
  <div class="container-fluid">
    <div class="header-body">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">Medições</h6>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Page content -->
<div class="container-fluid mt--6">
  <div class="row">
    <div class="col">
      <div class="card">
        <!-- Card header -->
        <div class="card-header border-0">
          <h3 class="mb-0">Histórico dos colaboradores</h3>
        </div>
        <!-- Light table -->
        <div class="table-responsive">
          <table class="table align-items-center table-flush" id="tblLCAS">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="sort" data-sort="name">NOME DO COLABORADOR</th>
                <th scope="col" class="sort" data-sort="budget">HORÁRIO</th>
                <th scope="col" class="sort" data-sort="status">STATUS</th>
                <th scope="col">HISTÓRICO</th>
                <th scope="col" class="sort" data-sort="completion">TEMPERATURA</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody class="list">
              <template>
                <tr>
                  <th scope="row">
                    <div class="media align-items-center">
                      <a href="#" class="avatar rounded-circle mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 172 172" style=" fill:#000000;">
                          <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                            <path d="M0,172v-172h172v172z" fill="none"></path>
                            <g>
                              <path d="M86,14.33333c-39.58041,0 -71.66667,32.08626 -71.66667,71.66667c0,39.58041 32.08626,71.66667 71.66667,71.66667c39.58041,0 71.66667,-32.08626 71.66667,-71.66667c0,-39.58041 -32.08626,-71.66667 -71.66667,-71.66667z" fill="#e2ffee"></path>
                              <path d="M86,157.66667c16.125,0 30.81667,-5.375 42.64167,-14.33333c-2.15,-27.23333 -29.38333,-32.25 -29.38333,-32.25l-13.25833,2.86667l-13.25833,-2.86667c0,0 -27.23333,5.01667 -29.38333,32.25c11.825,8.95833 26.51667,14.33333 42.64167,14.33333z" fill="#2ecc71"></path>
                              <path d="M86,132.58333c11.10833,0 20.06667,-8.24167 21.14167,-18.99167c-3.225,-1.43333 -5.73333,-2.15 -7.16667,-2.50833c0,7.88333 -6.45,13.975 -14.33333,13.975c-7.88333,0 -14.33333,-6.45 -14.33333,-13.975c-1.43333,0.35833 -3.94167,1.075 -7.16667,2.50833c1.79167,10.75 10.75,18.99167 21.85833,18.99167z" fill="#1abc9c"></path>
                              <path d="M114.66667,80.625c0,2.86667 -2.50833,5.375 -5.375,5.375c-2.86667,0 -5.375,-2.50833 -5.375,-5.375c0,-2.86667 2.50833,-5.375 5.375,-5.375c2.86667,0 5.375,2.50833 5.375,5.375M68.08333,80.625c0,-2.86667 -2.50833,-5.375 -5.375,-5.375c-2.86667,0 -5.375,2.50833 -5.375,5.375c0,2.86667 2.50833,5.375 5.375,5.375c2.86667,0 5.375,-2.50833 5.375,-5.375" fill="#ffa726"></path>
                              <path d="M86,125.41667c-14.33333,0 -14.33333,-14.33333 -14.33333,-14.33333v-14.33333h28.66667v14.33333c0,0 0,14.33333 -14.33333,14.33333z" fill="#ff9800"></path>
                              <path d="M111.08333,67.00833c0,-21.14167 -50.16667,-13.61667 -50.16667,0v15.76667c0,13.61667 11.10833,24.725 25.08333,24.725c13.975,0 25.08333,-11.10833 25.08333,-24.725z" fill="#ffb74d"></path>
                              <path d="M86,39.41667c-17.55833,0 -28.66667,15.40833 -28.66667,29.38333v6.45l7.16667,7.16667v-14.33333l32.96667,-10.75l10.03333,10.75v14.33333l7.16667,-7.16667v-2.86667c0,-11.46667 -2.86667,-24.36667 -17.2,-27.23333l-2.86667,-5.73333z" fill="#424242"></path>
                              <path d="M93.16667,78.83333c0,-2.15 1.43333,-3.58333 3.58333,-3.58333c2.15,0 3.58333,1.43333 3.58333,3.58333c0,2.15 -1.43333,3.58333 -3.58333,3.58333c-2.15,0 -3.58333,-1.43333 -3.58333,-3.58333M71.66667,78.83333c0,2.15 1.43333,3.58333 3.58333,3.58333c2.15,0 3.58333,-1.43333 3.58333,-3.58333c0,-2.15 -1.43333,-3.58333 -3.58333,-3.58333c-2.15,0 -3.58333,1.43333 -3.58333,3.58333" fill="#784719"></path>
                            </g>
                          </g>
                        </svg>
                      </a>
                      <div class="media-body">
                        <span class="name mb-0 text-sm" id="name"></span>
                      </div>
                    </div>
                  </th>
                  <td class="budget" id="hour">
                  </td>
                  <td>
                    <span class="badge badge-dot mr-4" id="status">
                    </span>
                  </td>
                  <td>
                    <div class="avatar-group" id="temp">
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center" id="progressCell">
                    </div>
                  </td>
                  <td class="text-right">
                    <div class="dropdown">
                      <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow" id="action">
                        <!-- <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a> -->
                      </div>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- Card footer -->
        <!-- <div class="card-footer py-4">
          <nav aria-label="...">
            <ul class="pagination justify-content-end mb-0">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">
                  <i class="fas fa-angle-left"></i>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">
                  <i class="fas fa-angle-right"></i>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div> -->
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
 <!-- SWEETALERT -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" integrity="sha256-KsRuvuRtUVvobe66OFtOQfjP8WA2SzYsmm4VPfMnxms=" crossorigin="anonymous"></script>
<!-- Argon JS -->
<script src="../assets/js/argon.js?v=1.2.0"></script>
<script src="../controllers/tables.js"></script>
</body>

</html>