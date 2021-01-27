document.write(`
<!-- Modal -->
                <div class="modal fade first-modal-class" id="expedienteModal" tabindex="-1" role="dialog">
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel"><img src="../Lexley/Inicial/Grupo%201459.png" class="mr-2 img-title" style="width: 20%;">Brounie</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <button type="button" class="btn btn-danger mr-2 mt-4" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-reg-modal mt-4" id="edit">Editar</button>
                            </button>
                        </div>
                        <div class="modal-body">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="font-weight-bold" for="name">Nombre</label>
                                <input type="name" class="form-control" id="nombre" placeholder="Permiso" readonly>
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="autoridades">Autoridad</label>
                                <input type="autoridad" class="form-control" id="autoridad" placeholder="Autoridad N" readonly>
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="internas">Personas Internas Encargadas</label>
                                <input type="internas" class="form-control" id="internas" placeholder="Armando Molina" readonly>
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="externas">Personas Externas Encargadas</label>
                                <input type="externas" class="form-control" id="externas" placeholder="Zaira Garduño" readonly>
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold" for="obligacion">Descripción de Obligaciones</label>
                                <input type="obligacion" class="form-control" id="obligacion" placeholder="Descripción de Obligación 1" readonly>
                            </div>
                            <!-- Documentos -->
                            <form class="form-file" action="upload.php" method="POST">
                                <label class="font-weight-bold" for="exampleInputFile">Documentos</label><br/>
                                <div class="p-file">
                                    <div class="row">
                                      <div class="col">
                                        <a href="#" class="button">
                                            <img src="../Lexley/Otros/001-pdf.png" class="mr-2" style="width: 20%;">
                                        </a>
                                      </div>
                                      <div class="col">
                                        <a href="#" class="button">
                                            <img src="../Lexley/Otros/001-pdf.png" class="mr-2" style="width: 20%;">
                                        </a>
                                      </div>
                                      <div class="col">
                                        <a href="#" class="button">
                                            <img src="../Lexley/Otros/001-pdf.png" class="mr-2" style="width: 20%;">
                                        </a>
                                     </div>
                                  </div>
                                </div>
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
