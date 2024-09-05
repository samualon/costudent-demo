!function(t, e) {
    var i = function() {
        var t = e.getElementById("tlkio"),
            i = t.getAttribute("data-env") || "production",
            n = t.getAttribute("data-channel"),
            a = t.getAttribute("data-theme"),
            o = t.getAttribute("data-custom-css"),
            s = t.getAttribute("data-nickname"),
            l = e.createElement("iframe"),
            r = "http://embed.tlk.io/" + n,
            m = [];

        if (i == "dev") {
            r = "http://embed.lvh.me:3000/" + n;
        }

        if (o && o.length) {
            m.push("custom_css_path=" + o);
        }

        if (s && s.length) {
            m.push("nickname=" + s);
        }

        if (a && a.length) {
            m.push("theme=" + a);
        }

        if (m.length) {
            r += "?" + m.join("&");
        }

        l.setAttribute("src", r);
        l.setAttribute("width", "100%");
        l.setAttribute("height", "100%");
        l.setAttribute("frameborder", "0");
        l.setAttribute("style", "margin-bottom: -8px;");

        var u = t.getAttribute("style");
        t.setAttribute("style", "overflow: auto; -webkit-overflow-scrolling: touch;" + u);
        t.textContent = "";
        t.appendChild(l);
    };

    var n = function() {
        var n = e.getElementById("tlkio"),
            a = e.createElement("style"),
            o = e.createElement("img");

        a.textContent = ".tlkio-pulse{width:70px;margin:-27px 0 0 -35px;position:absolute;top:50%;left:50%;animation: tlkio-pulse 1.5s ease-in 0s infinite;}@keyframes tlkio-pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}18%{transform:scale(0.95)}24%{transform:scale(1)}}";
        o.src = "http://www.tlk.io/images/logo.png";
        o.className = "tlkio-pulse";

        if (t.getComputedStyle(n).position == "static") {
            n.style.position = "relative";
        }

        n.appendChild(a);
        n.appendChild(o);

        t.setTimeout(i, 3000);
    };

    if (t.addEventListener) {
        t.addEventListener("load", n, !1);
    } else {
        t.attachEvent("onload", n);
    }
}(window, document);