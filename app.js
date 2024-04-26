var mobiles = {
    iphone: {
        iphone7: {
            RAM: "4",
            ROM: "2",
            Camera: "3",
            LCD: "3.10"
        },
        iphone8: {
            RAM: "4",
            ROM: "3",
            Camera: "5",
            LCD: "3.10"
        },
        iphone8plus: {
            RAM: "8",
            ROM: "4",
            Camera: "3",
            LCD: "3.10"
        },
        iphoneX: {
            RAM: "4",
            ROM: "8",
            Camera: "3",
            LCD: "3.4"
        },
        iphone11: {
            RAM: "8",
            ROM: "128",
            Camera: "16",
            LCD: "3.9"
        },
    },
    xiomi: {
        redmiA2: {
            RAM: "2",
            ROM: "8",
            Camera: "3",
            LCD: "3.10"
        },
        redmi10: {
            RAM: "4",
            ROM: "8",
            Camera: "3",
            LCD: "3.10"
        },
        redmi11: {
            RAM: "4",
            ROM: "16",
            Camera: "3",
            LCD: "3.10"
        },
        redmi12: {
            RAM: "4",
            ROM: "32",
            Camera: "3",
            LCD: "3.10"
        },
        redmi13: {
            RAM: "8",
            ROM: "64",
            Camera: "3",
            LCD: "3.10"
        },
        redmi13C: {
            RAM: "8",
            ROM: "128",
            Camera: "3",
            LCD: "3.10"
        },
    },
    realme: {
        realmiNote50: {
            RAM: "4",
            ROM: "32",
            Camera: "4",
            LCD: "3.7"
        },
        realmiC67: {
            RAM: "4",
            ROM: "64",
            Camera: "8",
            LCD: "3.8"
        },
        realmiC53: {
            RAM: "4",
            ROM: "64",
            Camera: "12",
            LCD: "3.9"
        },
        realmi9: {
            RAM: "8",
            ROM: "128",
            Camera: "8",
            LCD: "4.00"
        },
        realmi9i: {
            RAM: "16",
            ROM: "256",
            Camera: "16",
            LCD: "4.10"
        },
    },
    tecno: {
        spark20: {
            RAM: "4",
            ROM: "2",
            Camera: "3",
            LCD: "3.10"
        },
        spark20Pro: {
            RAM: "4",
            ROM: "2",
            Camera: "3",
            LCD: "3.10"
        },
        spark20C: {
            RAM: "4",
            ROM: "2",
            Camera: "3",
            LCD: "3.10"
        },
        POVA6: {
            RAM: "4",
            ROM: "2",
            Camera: "3",
            LCD: "3.10"
        },
        PhantomV: {
            RAM: "4",
            ROM: "2",
            Camera: "3",
            LCD: "3.10"
        },
    },
};



var brand = document.getElementById("brand")
var model = document.getElementById("model")
var render = document.getElementById("render")

var allBrands = Object.keys(mobiles);
for (var i = 0; i < allBrands.length; i++) {
    brand.innerHTML += `<option>${allBrands[i]}</option>`
}
function selectBrand() {
    var selectedBrand = brand.value;
    var allModels = Object.keys(mobiles[selectedBrand])
    model.innerHTML = ""
    for (var i = 0; i < allModels.length; i++) {
        model.innerHTML += `<option>${allModels[i]}</option>`
    }

}

function selectModel() {
    var selectedModel = model.value;
    console.log(brand.value, model.value)
    console.log(mobiles[brand.value][selectedModel])
    console.log(Object.values(mobiles[brand.value][selectedModel]))


    var allRender = Object.values(mobiles[brand.value][model.value])
    render.innerHTML = ""
    for (var i = 0; i < allRender.length; i++) {
        render.innerHTML += `<option>${allRender[i]}</option>`
    }
    console.log(allRender)

}




