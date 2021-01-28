document.write(`
<nav class="navbar navbar-toggleable navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button type="button bars" id="sidebarCollapse" class="btn">
                        <i class="fas fa-bars"></i>
                    </button>
                    <button class="btn d-inline-block d-lg-none ml-auto" type="button bars" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="navbar-header">
                        <img class="img-fluid navbar-brand" src="../Lexley/LogIn/Lexley.png"/>
                    </div>


                    <div class="collapse  navbar-collapse justify-content-end" id="navbarSupportedContent">

                        <ul class="navbar-nav nav ml-auto" >
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle shadow rounded"> León Ponce
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="background-color: #F4F4F4">
                                  <li><a class="dropdown-item" href="../pages/perfil.html">Mi Perfil</a></li>
                                  <li><a class="dropdown-item" href="../index.html">Cerrar Sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
`);
