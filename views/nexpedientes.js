document.write(`
<!-- Modal -->
                <div class="modal fade first-modal-class" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel"><img src="../Lexley/Inicial/Grupo%201459.png" class="mr-2" style="width: 20%;">Nuevo Archivo</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <button type="button" class="btn btn-danger mr-2 mt-4" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-reg-modal mt-4">Guardar</button>
                            </button>
                        </div>
                        <div class="modal-body">
                        <form class="form-horizontal">
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
                      </div>
                      <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-reg-modal ">Guardar</button>
                      </div>
                    </div>
                  </div>
                </div>
`);