$(document).ready(function(e) {

  $('#testFrm').change(function() {

    var obj = {};
    var string = '';
    var sum = 0;

    // Grupo 1
    if ($("input:radio[name=pregunta1]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta1]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 2
    if ($("input:radio[name=pregunta2]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta2]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 3
    if ($("input:radio[name=pregunta3]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta3]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 4
    if ($("input:radio[name=pregunta4]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta4]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 5
    if ($("input:radio[name=pregunta5]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta5]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 6
    if ($("input:radio[name=pregunta6]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta6]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 7
    if ($("input:radio[name=pregunta7]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta7]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 8
    if ($("input:radio[name=pregunta8]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta8]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 9
    if ($("input:radio[name=pregunta9]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta9]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 10
    if ($("input:radio[name=pregunta10]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta10]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 11
    if ($("input:radio[name=pregunta10]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta10]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 12
    if ($("input:radio[name=pregunta12]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta12]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 13
    if ($("input:radio[name=pregunta13]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta13]:checked").val();
      sum += parseFloat(n1);
    }
    // Grupo 14
    if ($("input:radio[name=pregunta14]").is(':checked')) {
      var n1 = $("input:radio[name=pregunta14]:checked").val();
      sum += parseFloat(n1);
    }



    $('#resultado').val(sum);

  });


});
