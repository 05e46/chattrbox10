import $ from 'jquery';

export class ChatForm{
  constructor(formSel, inputSel){
    this.$form = $(formSel);
    this.$input = $(inputSel);
  }

  export class ChatList{
    constructor(listSel,username){
      this.$list = $(listSel);
      this.$username = username;
    }
  }

  drawMessage({user:u,timestamp:t,message:m}){
    let $messageRow = $('<li>',{
      'class':'message-row'
    });
    if(this.username===u){
      $messageRow.addClass('me');
    }
  }

  init(submitCallback){
    this.$form.submit((event)=>{
      event.prevendDefault();
      let val = this.$input.val();
      submitCallback(val);
      this.$input.val('');
    });
    this.$form.find('button').on('click',() => this.$form.submit());
  }
}
