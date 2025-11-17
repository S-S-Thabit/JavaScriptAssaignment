document.getElementById("reg").onsubmit = function () {
  let emin = document.getElementById("email").value;
  let emiR = /^\w+@[A-Z]+.(com|net|org|info)$/is;
  let va = emiR.test(emin);

  if (document.querySelector("#name").value == "") {
    alert("يجب عليك إدخال الاسم");
    return false;
  }
  if (
    /^[A-Za-zا-ي]+\s{1}[A-Za-zا-ي]+$/s.test(
      document.querySelector("#name").value
    ) === false
  ) {
    alert("يجب عليك إدخال الاسم مع اللقب");
    return false;
  }
  let password = document.querySelector("#pass").value;

  if (password.length < 8) {
    alert("كلمة المرور ضعيفة! يجب أن تحتوي على 8 أحرف على الأقل.");
    return false;
  }

  let strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;
  if (!strongRegex.test(password)) {
    alert("كلمة المرور ضعيفة! يجب أن تحتوي على حرف كبير، حرف صغير، رقم ورمز.");
    return false;
  }

  if (document.querySelector("#pass1").value.length == 0) {
    alert("يجب عليك إعادة كلمة المرور");
    return false;
  }
  if (
    document.querySelector("#pass1").value !=
    document.querySelector("#pass").value
  ) {
    alert("إعادة كلمة المرور غير صحيحة");
    return false;
  }
  if (emin === "") {
    alert("يجب عليك إدخال البريد الالكتروني");
    return false;
  }
  if (va === false) {
    alert("يجب عليك إدخال البريد الالكتروني بشكل صحيح");
    return false;
  }
  if (
    document.getElementById("tel").value == "" ||
    isNaN(document.getElementById("tel").value)
  ) {
    alert("يجب عليك إدخال الرقم ويجب ان يكون بشكل صحيح");
    return false;
  }
  if (
    document.Register.user_gender[0].checked == false &&
    document.Register.user_gender[1].checked == false
  ) {
    alert("يجب عليك إختيار الجنس");
    return false;
  }
  if (document.querySelector("#country").selectedIndex == 0) {
    alert("يجب عليك إختيار الدولة");
    return false;
  }

  if (document.getElementsByName("user_comment")[0].value.length < 50) {
    alert("يجب عليك كتابة 50 حرف -على الاقل");
    return false;
  }
  if (
    !/^.*\.(jpeg|jpg|bmp|gif|png|svg)$/i.test(
      document.getElementsByName("user_uplode")[0].value
    )
  ) {
    alert("The file must be an image: JPEG, JPG, BMP, GIF, PNG, or SVG.");
    return false;
  }

  return true;
};

function theChecker() {
  if (document.Register.agree.checked == true)
    document.Register.ok.disabled = false;
  else document.Register.ok.disabled = true;
}
