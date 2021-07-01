var price , chaser_price, fruitslice_price ;
let total = 0;
function Getpizza( name,size,chaser,fruitslice, total ){
  this.name = name;
  this.size = size;
  this.chaser = chaser;
  this.fruitslice = fruitslice;
  this.total = total;
}


// proceed button
$(document).ready(function(){
  // $("button.proceed").click(function(){
  //   $("button.proceed").hide();
  //   $("#information").hide();
  //   $("div.choise").slideDown(1000);
  // });
  $("button.proceed").click(function(event){
   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pchaser = $("#chaser option:selected").val();
   let pfruitslice = [];
   $.each($("input[name='fruitslice']:checked"), function(){
       pfruitslice.push($(this).val());
   });
   console.log(pfruitslice.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "750ml":
       price = 1500;
       console.log(price);
     break;
     case "500ml":
       price = 850;
       console.log("The price is "+price);
     break;
     case "250ml":
       price = 350;
       console.log(price);
     default:
       console.log("error");
   }
   switch(dSchaser){
      case "0":
        chaser_price = 0;
      break;
      case "soda":
        chaser_price = 100;
      break;
      case "juice":
        chaser_price = 250;
      break;
      case "water":
        chaser_price = 100;
      break;
      default:
        console.log("No price");
    }
    let fruitslice_value = pfruitslice.length*50;
    console.log("fruitslice value" + fruitslice_value);

    if((psize == "0") && (pchaser == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select pizza size and chaser");
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }

    total = price + chaser_price + fruitslice_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzachaser").html($("#chaser option:selected").val());
    $("#pizzafruitslice").html(pfruitslice.join(", "));
    $("#totals").html(total);

// Add pizza button
    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pchaser = $("#chaser option:selected").val();
      let pfruitslice = [];
      $.each($("input[name='fruitslice']:checked"), function(){
          pfruitslice.push($(this).val());
      });
      console.log(pfruitslice.join(", "));
      switch(dsize){
        case "0":
          price =0;
        break;
        case "750ml":
           price = 1500;
           console.log(price);
         break;
         case "500ml":
           price = 850;
           console.log("The price is "+price);
         break;
         case "250ml":
           price = 350;
           console.log(price);
         default:
           console.log("error");
       }
       switch(pchaser){
          case "0":
            chaser_price = 0;
          break;
          case "soda":
            chaser_price = 100;
          break;
          case "juice":
            chaser_price = 250;
          break;
          case "water":
            chaser_price = 100;
          break;
          default:
            console.log("No price");
        }
        let fruitslice_value = dfruitslice.length*50;
        console.log("fruitslice value" + fruitslice_value);
        total = price + chaser_price + fruitslice_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      // constractor function
      var newOrder = new Getpizza(pname, psize, pchaser,pfruitslice,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzachaser">'+newOrder.chaser + '</td><td id="pizzafruitslice">'+newOrder.fruitslice+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);



    });
    // Checkout button
    $("button#checkout").click(function(){
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });

    // home delivery button
    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".choise h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("You will pay sh. "+deliceryamount+" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+deliceryamount);
    });

    // when one clicks place order button
    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("Final Bill is: "+deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){

        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});
