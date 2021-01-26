document.write(`
<!-- Form  -->
        <form class="form-horizontal mt-3">
                            <div class="form-group">
                                <label class="font-weight-bold" for="name">Nombre</label>
                                <input type="name" class="form-control" id="nombre">
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="autoridades">Autoridades</label>
                                    <div class="input-group">
                                        <select class="form-control" id="autoridades">
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                        </select>
                                        <div class="input-group-addon input-group-button">
                                            <button type="button" class="btn add-btn" data-toggle="modal" data-target="#autoridadesModal"><i class="fa fa-plus-circle"></i></button>
                                        </div>
                                    </div>
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="usuarios">Usuarios Internos</label>
                                <div class="col pl-0 pr-0">
                                    <div class="input-group">
                                        <select class="form-control" id="usuarios">
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </select>
                                        <div class="input-group-addon input-group-button">
                                            <button type="button" class="btn add-btn" data-toggle="modal" data-target="#internosModal"><i class="fa fa-plus-circle"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="externos">Personas Externas</label>
                                <div class="col pl-0 pr-0">
                                    <div class="input-group">
                                        <select class="form-control" id="externos">
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </select>
                                        <div class="input-group-addon input-group-button">
                                            <button type="button" class="btn add-btn" data-toggle="modal" data-target="#externosModal"><i class="fa fa-plus-circle"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="text-area">Descripción de Obligaciones</label>
                                <div class="col pl-0 pr-0">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="obligacion">
                                        <div class="input-group-addon input-group-button">
                                            <button type="button" class="btn add-btn" data-toggle="modal" data-target="#fullModal"><i class="fa fa-plus-circle"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Documentos -->
                            <form class="form-file" action="upload.php" method="POST">
                                <label class="font-weight-bold" for="exampleInputFile">Alta de documentos</label><br/>
                                <label>Arrastre sus archivos aquí o haga clic en el área.</label><br/>
                              <input class="input-file" type="file" multiple>
                                <p class="p-file">
                                  <i class="fa fa-upload" aria-hidden="true" style="font-size: 55px;"></i>
                                    Anexa Documentos en formato .pdf, .jpg, .doc ó .xls
                                </p>
                              <button class="btn btn-primary" style="border-radius: 20px;" id="submit-files">Anexar</button>
                            </form>
                        </form>

`);
