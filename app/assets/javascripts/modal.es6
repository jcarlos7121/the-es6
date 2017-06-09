import $ from 'jquery';

class Modal {
  constructor() {
    // Hide modal on escape
    $(window).on('keydown', (e)=> {
      if (window.PROTECTED) { return; }
      if (e.which === 27) {
        return $("[class^=modal]").removeClass('show');
      }
    });

    // Show modal on targeted elements
    $(document).on('click touchend', '[modal]', (e)=> {
      e.preventDefault();
      this.openModal($(e.target).attr('href'), $(e.target).attr('modal'));
    });

    // Hide modal on outer click
    $(document).on("click touchend", "[class^=modal]", (e)=> {
      if (window.PROTECTED) { return; }
      if ($(e.target).parents('form').length || $(e.target).is('form')) { return; }
      return $("[class^=modal]").removeClass('show');
    });
  }

  openModal(url, name) {
    $("[class^=modal]").removeClass('show')
    if(name == "N/A") window.location = url;

    let modal = $('.'+name).first()

    $.get(url, (html)=>{
      modal.find("> div").html(html);
      modal.addClass('show');
    });
  }
}

$(()=> { new Modal(); });
