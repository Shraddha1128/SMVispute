 function avg(s1, s2, s3) {
            let average = (s1 + s2 + s3) / 3;
            return average >= 35 ? "Pass" : "Fail";
        }
    
        function Result() {
            const s1 = parseInt(document.getElementById('mark1').value) || 0;
            const s2 = parseInt(document.getElementById('mark2').value) || 0;
            const s3 = parseInt(document.getElementById('mark3').value) || 0;

            let result = document.getElementById('passfail');
            let mark = document.getElementById('marks');

            // Update the inputs
            result.value = avg(s1, s2, s3);
            mark.value = ((s1 + s2 + s3) / 3).toFixed(2); 
        }
