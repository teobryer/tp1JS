var my_brands_request = new XMLHttpRequest();
var my_models_request = new XMLHttpRequest();
var my_engines_request = new XMLHttpRequest();

function populate(array, selector) {
    while (selector.options.length > 0) {
        selector.remove(0);
    }

    txt = '';
    for (i = 0; i < array.length; ++i) {
        key = array[i].childNodes[0].nodeValue;
        val = key;
        var option = new Option(key, val);
        txt = txt + ',' + key;
        try {
            selector.add(option, null);
        } catch (e) {
            selector.add(option, -1);
        }
    }
    return txt;
}

function feed_brands() {
    var url = 'server_get_brands.php';
    my_brands_request.open("GET", url, true);
    my_brands_request.onreadystatechange = feed_brands_with_data;
    my_brands_request.send(null);
}

function feed_brands_with_data() {
    sModels = document.forms['Automobiles'].elements['sModel'];
    sModels.style.visibility = 'hidden';
    sEngines = document.forms['Automobiles'].elements['sEngine'];
    sEngines.style.visibility = 'hidden';
    bSelect = document.forms['Automobiles'].elements['bSelect'];
    bSelect.style.visibility = 'hidden';

    if (my_brands_request.readyState == 4) {
        if (my_brands_request.status == 200) {
            var xml_doc = my_brands_request.responseXML;
            var brands = xml_doc.getElementsByTagName("brand");

            sBrands = document.forms['Automobiles'].elements['sBrand'];
            var txt = populate(brands, sBrands);

            document.getElementById("text_data").innerHTML = txt;

        }
    }
}

function change_brand() {
    sModels = document.forms['Automobiles'].elements['sModel'];
    sModels.style.visibility = 'hidden';
    sEngines = document.forms['Automobiles'].elements['sEngine'];
    sEngines.style.visibility = 'hidden';
    bSelect = document.forms['Automobiles'].elements['bSelect'];
    bSelect.style.visibility = 'hidden';

    sBrands = document.forms['Automobiles'].elements['sBrand'];
    brand = sBrands.options[sBrands.selectedIndex].value;

    var url = 'server_get_models.php?brand=' + brand;
    my_models_request.open("GET", url, true);
    my_models_request.onreadystatechange = feed_models_with_data;
    my_models_request.send(null);

}

function change_model() {
    sBrands = document.forms['Automobiles'].elements['sBrand'];
    brand = sBrands.options[sBrands.selectedIndex].value;
    sModels = document.forms['Automobiles'].elements['sModel'];
    model = sModels.options[sModels.selectedIndex].value;

    var url = 'server_get_engines.php?brand=' + brand + '&model=' + model;

    my_engines_request.open("GET", url, true);
    my_engines_request.onreadystatechange = feed_engines_with_data;
    my_engines_request.send(null);

}

function change_engine() {
    bSelect = document.forms['Automobiles'].elements['bSelect'];
    bSelect.style.visibility = 'visible';
}

function feed_models_with_data() {
    if (my_models_request.readyState == 4) {
        if (my_models_request.status == 200) {
            var xml_doc = my_models_request.responseXML;
            var models = xml_doc.getElementsByTagName("model");

            sModels = document.forms['Automobiles'].elements['sModel'];
            var txt = populate(models, sModels);

            sModels.style.visibility = 'visible';
            document.getElementById("text_data").innerHTML = txt;
        }
    }
}

function feed_engines_with_data() {
    if (my_engines_request.readyState == 4) {
        if (my_engines_request.status == 200) {
            var xml_doc = my_engines_request.responseXML;
            var engines = xml_doc.getElementsByTagName("engine");

            sEngines = document.forms['Automobiles'].elements['sEngine'];
            var txt = populate(engines, sEngines);

            sEngines.style.visibility = 'visible';
            document.getElementById("text_data").innerHTML = txt;
        }
    }
}

function display_info() {
    sBrands = document.forms['Automobiles'].elements['sBrand'];
    brand = sBrands.options[sBrands.selectedIndex].value;
    sModels = document.forms['Automobiles'].elements['sModel'];
    model = sModels.options[sModels.selectedIndex].value;
    sEngines = document.forms['Automobiles'].elements['sEngine'];
    engine = sEngines.options[sEngines.selectedIndex].value;

    alert('vous avez choisi : ' + brand + ' ' + model + ' ' + engine + ' cv');
}
