document.write(`
<!-- Externos -->
    <div class="modal fade" id="externosModal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title"><img src="../Lexley/Otros/Grupo%201470.png" class="mr-2" style="width: 30%;">Persona Externa</h4>
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
                        <label class="font-weight-bold" for="phone">Telefono</label>
                        <input type="phone" class="form-control" id="phone">
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bold" for="wa">Whatsapp</label>
                        <input type="wa" class="form-control" id="wa">
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bold" for="email">Email</label>
                        <input type="email" class="form-control" id="email">
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
