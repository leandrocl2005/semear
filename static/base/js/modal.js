/* Modal actions */
window.onclick = function (event) {
    if (event.target.id.includes('modal')) {
        event.target.style.display = "none";
    }
}

function closeModal(element_id) {
    const modal = document.getElementById(`modal-${element_id.split('-')[1]}`)
    modal.style.display = 'none';
}

function openModal(element_id) {
    if (element_id === 'donation-42') {
        alert("Funcionalidade em desenvolvimento. Em breve você poderá doar outras quantias por cartão de crédito. Por agora, por favor, use PIX ou TED.")
        return;
    }
    const modal = document.getElementById(`modal-${element_id.split('-')[1]}`)
    modal.style.display = 'block';
}

$('.open-modal-btn').on('click', function(){
    openModal(this.id);
})

$('span.close').on('click', function(){
    closeModal(this.id);
  })

  /* Handle Iugu Tokens on Modals
  /* Iugu form */
Iugu.setAccountID("E8E2DCA2592B40A182B209AF43E4F33D");
Iugu.setTestMode(false);
jQuery(function ($) {
    const donationValues = [100, 200, 500, 1000];

    donationValues.forEach(donationValue => {
        $(`#payment-form-${donationValue}`).submit(function (evt) {
            var form = $(this);
            var tokenResponseHandler = function (data) {

                if (data.errors) {
                    /* alert("Erro salvando cartão: " + JSON.stringify(data.errors)); */
                    alert("Erro nos dados do cartão. Favor repetir o processo." + JSON.stringify(data.errors))
                } else {
                    $(`#token-${donationValue}`).val(data.id);
                    form.get(0).submit();
                }

                // Seu código para continuar a submissão
                // Ex: form.submit();
            }

            Iugu.createPaymentToken(this, tokenResponseHandler);
            return false;
        });
    })

    $('#form-autoriza-cartao').submit(function (evt) {
        var form = $(this);
        var tokenResponseHandler = function (data) {

            if (data.errors) {
                /* alert("Erro salvando cartão: " + JSON.stringify(data.errors)); */
                alert("Erro nos dados do cartão. Favor repetir o processo." + JSON.stringify(data.errors))
            } else {
                $(`#token-cartao`).val(data.id);
                form.get(0).submit();
            }
        }

        Iugu.createPaymentToken(this, tokenResponseHandler);
        return false;
    });
});