<!--
=========================================================
* Argon Dashboard - v1.2.0
=========================================================
* Product Page: https://www.creative-tim.com/product/argon-dashboard


* Copyright  Creative Tim (http://www.creative-tim.com)
* Coded by www.creative-tim.com



=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Start your development with a Dashboard for Bootstrap 4.">
  <meta name="author" content="Creative Tim">
  <title>LAB2TEMP | LAB2DEV</title>
  <!-- Favicon -->
  <link rel="icon" href="assets/img/brand/logo_mini.png" type="image/png">
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
  <!-- Icons -->
  <link rel="stylesheet" href="assets/vendor/nucleo/css/nucleo.css" type="text/css">
  <link rel="stylesheet" href="assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" type="text/css">
  <!-- Page plugins -->
  <!-- Argon CSS -->
  <link rel="stylesheet" href="assets/css/argon.css?v=1.2.0" type="text/css">
  <link rel="stylesheet" href="assets/css/theme.css" type="text/css">
</head>

<body>
  <!-- Sidenav -->
  <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header  align-items-center">
        <a class="navbar-brand" href="dashboard.php">
          <img src="assets/img/brand/Lab2Temp.png" class="navbar-brand-img" alt="...">
        </a>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="dashboard.php">
                <i class="ni ni-tv-2 text-primary"></i>
                <span class="nav-link-text">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tables.php">
              <i class="fas fa-exclamation-circle text-danger"></i>
                <span class="nav-link-text">Ocorrências</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="profile.php">
                <i class="fas fa-cog text-gray"></i>
                <span class="nav-link-text">Configurações</span>
              </a>
            </li>
            
        </div>
      </div>
    </div>
  </nav>
  <!-- Main content -->
  <div class="main-content" id="panel">
    <!-- Topnav -->
    <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom bg-gradient-success">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Search form -->
          <form class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
            <div class="form-group mb-0">
              <div class="input-group input-group-alternative input-group-merge">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-search"></i></span>
                </div>
                <input class="form-control" placeholder="Buscar Colaborador" type="text">
              </div>
            </div>
            <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </form>
          <!-- Navbar links -->
          <ul class="navbar-nav align-items-center  ml-md-auto ">
            
          </ul>
          <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li class="nav-item dropdown">
              <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                          width="100%" height="100%"
                          viewBox="0 0 172 172"
                          style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M86,14.33333c-39.58041,0 -71.66667,32.08626 -71.66667,71.66667c0,39.58041 32.08626,71.66667 71.66667,71.66667c39.58041,0 71.66667,-32.08626 71.66667,-71.66667c0,-39.58041 -32.08626,-71.66667 -71.66667,-71.66667z" fill="#e2ffee"></path><path d="M86,157.66667c16.125,0 30.81667,-5.375 42.64167,-14.33333c-2.15,-27.23333 -29.38333,-32.25 -29.38333,-32.25l-13.25833,2.86667l-13.25833,-2.86667c0,0 -27.23333,5.01667 -29.38333,32.25c11.825,8.95833 26.51667,14.33333 42.64167,14.33333z" fill="#2ecc71"></path><path d="M86,132.58333c11.10833,0 20.06667,-8.24167 21.14167,-18.99167c-3.225,-1.43333 -5.73333,-2.15 -7.16667,-2.50833c0,7.88333 -6.45,13.975 -14.33333,13.975c-7.88333,0 -14.33333,-6.45 -14.33333,-13.975c-1.43333,0.35833 -3.94167,1.075 -7.16667,2.50833c1.79167,10.75 10.75,18.99167 21.85833,18.99167z" fill="#1abc9c"></path><path d="M114.66667,80.625c0,2.86667 -2.50833,5.375 -5.375,5.375c-2.86667,0 -5.375,-2.50833 -5.375,-5.375c0,-2.86667 2.50833,-5.375 5.375,-5.375c2.86667,0 5.375,2.50833 5.375,5.375M68.08333,80.625c0,-2.86667 -2.50833,-5.375 -5.375,-5.375c-2.86667,0 -5.375,2.50833 -5.375,5.375c0,2.86667 2.50833,5.375 5.375,5.375c2.86667,0 5.375,-2.50833 5.375,-5.375" fill="#ffa726"></path><path d="M86,125.41667c-14.33333,0 -14.33333,-14.33333 -14.33333,-14.33333v-14.33333h28.66667v14.33333c0,0 0,14.33333 -14.33333,14.33333z" fill="#ff9800"></path><path d="M111.08333,67.00833c0,-21.14167 -50.16667,-13.61667 -50.16667,0v15.76667c0,13.61667 11.10833,24.725 25.08333,24.725c13.975,0 25.08333,-11.10833 25.08333,-24.725z" fill="#ffb74d"></path><path d="M86,39.41667c-17.55833,0 -28.66667,15.40833 -28.66667,29.38333v6.45l7.16667,7.16667v-14.33333l32.96667,-10.75l10.03333,10.75v14.33333l7.16667,-7.16667v-2.86667c0,-11.46667 -2.86667,-24.36667 -17.2,-27.23333l-2.86667,-5.73333z" fill="#424242"></path><path d="M93.16667,78.83333c0,-2.15 1.43333,-3.58333 3.58333,-3.58333c2.15,0 3.58333,1.43333 3.58333,3.58333c0,2.15 -1.43333,3.58333 -3.58333,3.58333c-2.15,0 -3.58333,-1.43333 -3.58333,-3.58333M71.66667,78.83333c0,2.15 1.43333,3.58333 3.58333,3.58333c2.15,0 3.58333,-1.43333 3.58333,-3.58333c0,-2.15 -1.43333,-3.58333 -3.58333,-3.58333c-2.15,0 -3.58333,1.43333 -3.58333,3.58333" fill="#784719"></path></g></g></svg>
                        
                  </span>
                  <div class="media-body  ml-2  d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold">Leandro Dante</span>
                  </div>
                </div>
              </a>
              <div class="dropdown-menu  dropdown-menu-right ">
                <div class="dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Bem Vindo!</h6>
                </div>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-single-02"></i>
                  <span>Meu Perfil</span>
                </a>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-settings-gear-65"></i>
                  <span>Configurações</span>
                </a>
                <!--<a href="#!" class="dropdown-item">
                  <i class="ni ni-calendar-grid-58"></i>
                  <span>Activity</span>
                </a>-->
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-support-16"></i>
                  <span>Suporte</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-user-run"></i>
                  <span>Sair</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Header -->