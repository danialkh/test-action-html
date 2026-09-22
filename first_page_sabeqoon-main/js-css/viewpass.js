$("document").ready(function(){


$("#viewpass").mousedown(function(){
$("#viewpass").attr("src","img/viewpassword.png");

$('body').find('[id*="password"]').each(function() {
   $('<input class="input_login" value="w" name="password" id="password" style="padding:1px 4px 1px 22px;"  placeholder="رمز عبور" type="text">').attr({ name: this.name, value: this.value }).insertBefore(this);
}).remove();

});
$("#viewpass").mouseup(function(){
$("#viewpass").attr("src","img/viewpassword2.png");

$('body').find('[id*="password"]').each(function() {
   $('<input class="input_login" value="w" name="password" id="password" style="padding:1px 4px 1px 22px;"  placeholder="رمز عبور" type="password">').attr({ name: this.name, value: this.value }).insertBefore(this);
}).remove();

});

});