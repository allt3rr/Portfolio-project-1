$(function(){
    var items = 0;
    var itemName;
    var products = [];
    
    
    $("#counter").hide(); //ukrywa licznik
    $("#bill-btn").hide(); //ukrywa button od rachunku
    $("#bill").hide(); //ukrywa rachunek
    
    //sprawia ze przedmioty są ruchome
    $(".item, .item1").draggable({
        revert: true,
    });
    
    //koszyk
    $(".cart").droppable({
        drop: function(event, ui){
            $("#counter").show();
            items++;
            $("#counter").html(items);
            
            //dodawanie na paragon produktów
            itemName = ui.draggable.attr("nazwa"); //czyta nazwę produktu po atrybucie "nazwa"
            
            if(!products[itemName]){
                products[itemName] = 0;    //dodaje do tablicy produkt JESLI SIĘ TAM NIE ZNAJDUJE
            }
            
            products[itemName]++;    //zwiększa liczbę produktu o 1
            
            $("#bill-btn").show();
        }
    });
    
    //ukrywa i pokazuje sidebar z cen produktów
    $(".price_list").hover(function(){
        $("#sidebar").toggle(200); //toggle hide and show 
    });
    
    //przycisk od rachunku
    $("#bill-btn").click(function(){
        
        //czyści element przy każdym kliknięciu
        $("#bought-items").empty();
        $("#total").empty();
        var total = 0; //zmienna na całą wartość zamówienia
        
        //iteruje siebie przez każdy element tablicy
        for (var id in products){
            var text;  //zmienna z wartością do wyświetlenia
            
            //ceny produktów
            var cena_chleb = products[id]*1.99;
            var cena_bagietka = products[id]*1.89;
            var cena_bulka_mala = products[id]*0.80;
            var cena_bulka_posypka = products[id]*2.89;
            var cena_sernik = products[id]*14.99;
            var cena_ciastko_z_polewa = products[id]*3.99;
            var cena_buleczki_kakaowe = products[id]*1.79;
            var cena_bulka_drozdzowa = products[id]*3.89;
            
            //instrukcje warunkowe z cenami produktów
            if(id == "chleb"){
                text = "<p>" + id + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " + cena_chleb + " zł</p>";
                total += cena_chleb;
            }
            else if(id == "bagietka"){
                text = "<p>" + id + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + cena_bagietka + " zł</p>";
                total += cena_bagietka;
            }
            else if(id == "bulka-mala"){
                text = "<p>" + id + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + cena_bulka_mala + " zł</p>";
                total += cena_bulka_mala;
            }
            else if(id == "bulka-posypka"){
                text = "<p>" + id + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + cena_bulka_posypka + " zł</p>";
                total += cena_bulka_posypka;
            }
            else if(id == "bulka-drozdzowa"){
                text = "<p>" + id + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + cena_bulka_drozdzowa + " zł</p>";
                total += cena_bulka_drozdzowa;
            }
            else if(id == "buleczki-kawowe"){
                text = "<p>" + id + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + cena_buleczki_kakaowe + " zł</p>";
                total += cena_buleczki_kakaowe;
            }
            else if(id == "ciastko-z-polewą"){
                text = "<p>" + id + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + cena_ciastko_z_polewa + " zł</p>";
                total += cena_ciastko_z_polewa;
            }
            else if(id == "sernik"){
                text = "<p>" + id + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;" + cena_sernik + " zł</p>";
                total += cena_sernik;
            }
            
            $("#bought-items").append(text); //wypisuje na ekranie każdy element z osobna
        }
            $("#total").append("<h4>Łącznie: " + total + " zł</h4>"); //wypisuje na ekran łączną wartość zamówienia
        
        $("#bill").show();//pokazuje rachunek
    });
    
    //o_nas.html - code
    $("#button").button({
        icon: "ui-icon-arrowreturnthick-1-e"
    });
    
    $("#button, #button1").click(function(){
        window.close();
    });
    
    $(".sidebar1").css({
        background: '#ff3333',
    });
});