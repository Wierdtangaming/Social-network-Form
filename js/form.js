class Form {
    constructor()  {

    }
    display() {
        //Title
        var title = createElement('h2');
        title.html("Social Platform form");
        title.position(130,0);
        //Name
        var h5_1 = createElement('h4');
        h5_1.html("Name:- ");
        h5_1.position(205,120);
        var input_nm = createInput();
        input_nm.position(130,160);  
        //Favourite social platform
        var h5_2 = createElement('h4');
        h5_2.html("Favourite Social Platform:- ");
        h5_2.position(120,180);

        var input_sp = createInput();
        input_sp.position(130,230);  
        //Favourite social media star
        var h5_3 = createElement('h4');
        h5_3.html("Favourite Social media Star:- ");
        h5_3.position(120,260);

        var input_sm = createInput();
        input_sm.position(130,310);  

        var button = createButton('Submit');
        button.position(100,600);
        //Greeting prep
        var greeting = createElement('h3');
        button.mousePressed(function() {
            input_nm.hide();
            input_sp.hide();
            input_sm.hide();
            button.hide();
            h5_1.hide();
            h5_2.hide();
            h5_3.hide();
            var submitted_no = 0;
            var submitted_no1 = database.ref('submitted_no');
            submitted_no1.on("value",function(data){
                submitted_no = data.val();
                
            })

            submitted_no = submitted_no + 1;

            console.log(submitted_no1);
            console.log(submitted_no);
            var name = input_nm.value();
            database.ref('Name'+submitted_no).update({
                name  : name
            });
            var fav_sp = input_sp.value();
            database.ref('favourite social media'+submitted_no).update({
                fav_sp : fav_sp
            });
            var fav_sm = input_sm.value();
            database.ref('Favourite social media star'+submitted_no).update({
                fav_sm : fav_sm
            });

        database.ref('/').update({
            submitted_no : submitted_no
          });

            greeting.html("Thank you "+ name + " for submitting!");
            greeting.position(130,160); 
        });
    }
}