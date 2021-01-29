document.write(`
    <div class="modal fade" id="autoridadesModal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title"><img src="../Lexley/Otros/Grupo%201466.png" class="mr-2" style="width: 30%;">Autoridades</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <button type="button" class="btn btn-danger mr-2 mt-4" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-reg-modal mt-4">Guardar</button>
                </button>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="font-weight-bold" for="denominacion">Denominación</label>
                        <input type="text" class="form-control" id="denominacion">
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bold" for="domicilio">Domicilio</label>
                        <input type="text" class="form-control" id="domicilio">
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bold" for="phone">Teléfono</label>
                        <input type="text" class="form-control" id="phone">
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bold" for="web">Página Web</label>
                        <input type="text" class="form-control" id="web">
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bold" for="web">Horario de Atención</label>
                        <div class="row">
                            <div class="col">
                                <input id="timepicker" class="form-control"/>
                            </div>
                            <div class="col">
                                <input id="timepicker1" class="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bold" for="funcionario">Funcionarios a Cargo</label>
                        <input type="text" class="form-control" id="funcionario">
                    </div>
                    <div class="container-fluid">
                        <div class="map-responsive">
                            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" frameborder="0" style="border:0"></iframe>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-reg-modal" data-dismiss="modal">Guardar</button>
            </div>
        </div>
      </div>
    </div>
`);
