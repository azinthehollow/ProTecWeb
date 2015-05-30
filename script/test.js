$(document).ready(function(e) {

            $('#testFrm').change(function() {

               var obj = {};
               var string = '';
               var sum = 0;

               // Grupo 1
               if ($("input:radio[name=RadioGroup1]").is(':checked')) {
                  var n1 = $("input:radio[name=RadioGroup1]:checked").val();
                  sum += parseFloat(n1);
               }

               $('#resultado').val(sum);

            });
         });
