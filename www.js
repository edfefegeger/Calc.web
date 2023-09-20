var title = document.createElement(`div`);
title.id = `title_calc`;
title.innerHTML = `<p class="text-center"><b>Calculator</b></p>`;
document.body.append(title);

var nonscript = document.createElement(`noscript`);
nonscript.innerHTML = `Please enable JavaScript`;
document.body.append(nonscript);

var tittle = document.createElement(`title`);
tittle.innerHTML = `CALC`;
document.head.append(tittle);

var form_with_calc = document.createElement(`div`);
form_with_calc.innerHTML = `<div class="container mt-6 row row-cols-8 g-2 g-lg-3 px-10">
<div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col-12 col-md-11 col-lg-6 calc-container">
    <div class="calc-result" id="title_calc2"></div>
        <div class="calc-button row gx-2"" id="first_brid" >
            <div class="col-3"><button id="id0" class="btn btn-secondary calc-button">C</button></div>
            <div class="col-3"><button id="id01" class="btn btn-secondary calc-button">Del</button></div>
            <div class="col-3"><button id="id000" class="btn btn-secondary calc-button">0</button></div>
            <div class="col-3"><button id="id_tree" class="btn btn-secondary calc-button">√</button></div>
        </div>
        <div class="calc-button row gx-2" id = "id_xxx">
            <div class="col-3"><button id="id1" class="btn btn-secondary calc-button">1</button></div>
            <div class="col-3"><button id="id2" class="btn btn-secondary calc-button">2</button></div>
            <div class="col-3"><button id="id3" class="btn btn-secondary calc-button">3</button></div>
            <div class="col-3"><button id="id_plus" class="btn btn-secondary calc-button">+</button></div>
        </div>
        <div class="calc-button row gx-2">
            <div class="col-3"><button id="id4" class="btn btn-secondary calc-button">4</button></div>
            <div class="col-3"><button id="id5" class="btn btn-secondary calc-button">5</button></div>
            <div class="col-3"><button id="id6" class="btn btn-secondary calc-button">6</button></div>
            <div class="col-3"><button id="id_min" class="btn btn-secondary calc-button">-</button></div>
            
        </div>
        <div class="calc-button row gx-2">
            <div class="col-3"><button id="id7" class="btn btn-secondary calc-button">7</button></div>
            <div class="col-3"><button id="id8" class="btn btn-secondary calc-button">8</button></div>
            <div class="col-3"><button id="id9" class="btn btn-secondary calc-button">9</button></div>
            <div class="col-3"><button id="id_min2" class="btn btn-secondary calc-button">/</button></div>
        <div class="calc-button row gx-2">
        <div class="col"><button id="id_x2" class="btn btn-secondary calc-button">x</button></div>
        <div class="col"><button id="id_x22" class="btn btn-secondary calc-button">(x)</button></div>
        <div class="col"><button id="id_total" class="btn btn-secondary calc-button">=</button></div>
        <div class="col"><button id="id_skob" class="btn btn-secondary calc-button">(</button></div>
        <div class="col"><button id="id_skob2" class="btn btn-secondary calc-button">)</button></div>
        </div>
        </div>
    </div>
</div>
</div>
`

var flashingInterval;

document.body.append(form_with_calc);
var title_of_nums = document.querySelector(`#title_calc2`);
var nums0 = document.querySelector(`#id0`);
var nums = document.querySelector(`#id1`);
var nums2 = document.querySelector(`#id2`);
var nums3 = document.querySelector(`#id3`);
var nums4 = document.querySelector(`#id4`);
var nums5 = document.querySelector(`#id5`);
var nums6 = document.querySelector(`#id6`);
var nums7 = document.querySelector(`#id7`);
var nums8 = document.querySelector(`#id8`);
var nums9 = document.querySelector(`#id9`);
var nums000 = document.querySelector(`#id000`);
var nums_plus = document.querySelector(`#id_plus`);
var nums_x2 = document.querySelector(`#id_x2`);
var nums_min = document.querySelector(`#id_min`);
var nums_min2 = document.querySelector(`#id_min2`);
var nums_total = document.querySelector(`#id_total`);
var nums_x22 = document.querySelector(`#id_x22`);
var nums_tree = document.querySelector(`#id_tree`);
var nums_del = document.querySelector(`#id01`);
var nums_skob = document.querySelector(`#id_skob`);
var nums_skob2 = document.querySelector(`#id_skob2`);
var result = ""; // Убрал пробел
var result_tree = null;
var expression = "";
nums0.addEventListener('click', function() { title_of_nums.textContent = ""; result = ""; });
nums_del.addEventListener('click', function() { title_of_nums.textContent = ""; result = ""; });

nums.addEventListener('click', function() { title_of_nums.append(`1`); result += "1"; });
nums2.addEventListener('click', function() { title_of_nums.append(`2`); result += "2"; });
nums3.addEventListener('click', function() { title_of_nums.append(`3`); result += "3"; });
nums4.addEventListener('click', function() { title_of_nums.append(`4`); result += "4"; });
nums5.addEventListener('click', function() { title_of_nums.append(`5`); result += "5"; });
nums6.addEventListener('click', function() { title_of_nums.append(`6`); result += "6"; });
nums7.addEventListener('click', function() { title_of_nums.append(`7`); result += "7"; });
nums8.addEventListener('click', function() { title_of_nums.append(`8`); result += "8"; });
nums9.addEventListener('click', function() { title_of_nums.append(`9`); result += "9"; });
nums000.addEventListener('click', function() { title_of_nums.append(`0`); result += "0"; });
nums_plus.addEventListener('click', function() { title_of_nums.append(` + `); result += "+"; });
nums_min2.addEventListener('click', function() { title_of_nums.append(` / `); result += "/"; });
nums_x2.addEventListener('click', function() { title_of_nums.append(`*`); result += "*"; });
nums_x22.addEventListener('click', function() { title_of_nums.append(`²`); result += "**2"; });
nums_skob.addEventListener('click', function() { title_of_nums.append(`(`); result += "(";});
nums_skob2.addEventListener('click', function() { title_of_nums.append(`)`); result += ")";});
nums_tree.addEventListener('click', function () {
  if (result !== "") {
    title_of_nums.append(`√`);
    result_tree = Math.sqrt(Number(result)); // Вычисляем корень
    expression = result_tree.toString(); // Преобразуем результат в строку
    // title_of_nums.textContent = result_tree;
    result = expression;
  }
});
nums_min.addEventListener('click', function() { title_of_nums.append(` - `); result += "-"; });

nums_total.addEventListener('click', function () {
  if (result !== "") {
    expression = result; // Обновляем expression с результатом
    title_of_nums.textContent = eval(expression); // Вычисляем и отображаем результат
  }
});

function updateDisplay() {
  title_of_nums.textContent = expression;
}
function footer()
{
  let footer1 = document.createElement(`footer`);
  footer1.innerHTML = "  <br><br><br><br><b> @by Myxamor228 </b> ";
  document.body.append(footer1);
}
footer();
