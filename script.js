// saat user menscroll 20px ke bawah,buttonnya muncul
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// saat user mengklik button maka link ke atas
function topFunction() {
    document.body.scrollTop = 0; // untuk Safari
    document.documentElement.scrollTop = 0; // untuk Chrome, Firefox, IE and Opera
}

