
f.onsubmit = function(a) {
    a.preventDefault();

    r.innerHTML = "Registration Successful!<br>" +
        n.value + "<br>" +
        e.value + "<br>" +
        p.value + "<br>" +
        document.querySelector('input[name="g"]:checked').value + "<br>" +
        c.value + "<br>" +
        d.value + "<br>" +
        y.value + "<br>" +
        v.value;
};

f.onreset = function() {
    r.innerHTML = "";
};
