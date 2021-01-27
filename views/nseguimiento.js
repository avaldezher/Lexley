document.write(`
<!-- Modal -->
                <div class="modal fade" id="fullModal" tabindex="-1" role="dialog">
                  <div class="modal-dialog modal-lg" >
                    <div class="modal-content">
                        <div class="modal-header ">
                            <h4 class="modal-title"><img src="../Lexley/Otros/Grupo%201468.png" class="mr-2" style="width: 25%;">Obligaciones</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <button type="button" class="btn btn-danger mr-2 mt-3" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-reg-modal mt-3">Guardar</button>
                            </button>
                        </div>
                        <div class="modal-body">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="font-weight-bold" for="tarea">Tarea por realizar</label>
                                <input type="tipo" class="form-control" id="tarea">
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="personas">Personas Involucradas</label>
                                <input type="tipo" class="form-control" id="personas">
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="fecha">Fecha de vencimiento</label>
                                <div class="col pl-0 pr-0">
                                    <div class="input-group">
                                        <input id="datepicker" class="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="estatus">Estatus de cumplimiento</label>
                                <div class="col pl-0 pr-0">
                                    <div class="input-group">
                                        <select class="form-control" id="estatus">
                                          <option>En proceso</option>
                                          <option>Finalizada</option>
                                          <option>Atrasada</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- Documentos -->
                            <form class="form-file" action="upload.php" method="POST">
                                <label class="font-weight-bold" for="exampleInputFile">Documentos que acrediten cumplimiento</label><br/>
                                <label>Arrastre sus archivos aquí o haga clic en anexar.</label><br/>
                              <input class="input-file" type="file" multiple>
                                <p class="p-file">
                                  <i class="fa fa-upload" aria-hidden="true" style="font-size: 45px;"></i>
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
