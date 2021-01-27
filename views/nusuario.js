document.write(`

                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="font-weight-bold" for="name">Nombre Completo</label>
                                <input type="name" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="usuario">Usuario</label>
                                <input type="usuario" class="form-control" id="usuario">
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="email">Correo</label>
                                <input type="email" class="form-control" id="email">
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="usuarios">Tipo de Usuarios</label>
                                <div class="col pl-0 pr-0">
                                    <div class="input-group">
                                        <select class="form-control" id="usuarios">
                                          <option>Administrador</option>
                                          <option>Cliente</option>
                                          <option>Otro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="email">Contraseña</label>
                                <input type="password" class="form-control" id="contraseña">
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="text-area">Teléfono</label>
                                <div class="col pl-0 pr-0">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="phone">
                                    </div>
                                </div>
                            </div>
                        </form>

`);
