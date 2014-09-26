<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<script>
$(function() {

function getQV(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

  var options = {}

  options.sizes = {}
  options.colors = {
      "black" : "1000746881",
      "pink"  : "1000746882",
      "lime"  : "1000746883",
      "green" : "1000746884",
      "gray"  : "1000746885",
      "white" : "1000746886",
                    }
  options.qty =
  options.logos = {}

  var selects = $("select");
  var sizeDdl = $(selects[selects.length -3]);
  var colorDdl = $(selects[selects.length -2]);
  var logoDdl = $(selects[selects.length -1]);

  var color = getQV("c");
  var size = getQV("s");
  var logo = getQV("l");

  colorDdl.val(options.colors[color]);
  sizeDdl.val(options.sizes[size]);
  logoDdl.val(options.logos[logo]);

 // alert('doc ready');

});
</script>

/*
<select name="ctl00$ctl00$mainContent$scPageContent$cartContentsControl$cartItems$ctl05$productOptions$ctl01$dropDownOptionValues" id="ctl00_ctl00_mainContent_scPageContent_cartContentsControl_cartItems_ctl05_productOptions_ctl01_dropDownOptionValues" class="expanding">
  <option selected="selected" value="">- Select Color -</option>
  <option value="1000746881">Black</option>
  <option value="1000746882">Heliconia</option>
  <option value="1000746883">Lime</option>
  <option value="1000746884">Safety Green (Neon)</option>
  <option value="1000746885">Sport Grey</option>
  <option value="1000746886">White</option>

</select>

/*