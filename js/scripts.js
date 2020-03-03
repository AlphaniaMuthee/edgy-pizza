$("document").ready(function(){
    function order(size,toppings,number,delivery,type,crust){
        this.size = size;
        this.toppings =toppings;
        this.number = number;
        this.delivery = delivery;
        this.type = type;
        this.crust =crust
    }
    order.prototype.price = function(){
        let price =0;
        let Total =0;
        if (this.size === "Large"){
         price =1200;
         if (this.toppings === "Bacon"){
             Total = price + 400;
             if(this.crust === "GlutenFree"){
                Total = Total + 500;
            }
            else if(this.crust === "stuffed"){
                Total = Total + 400;
            }
            else if(this.crust === "thin"){
                Total = Total + 300;
            }
         }
         else if(this.toppings === "pineapple"){
             Total = price + 200;
             if(this.crust === "GlutenFree"){
                Total = Total + 500;
            }
            else if(this.crust === "stuffed"){
                Total = Total + 400;
            }
            else if(this.crust === "thin"){
                Total = Total + 300;
            }
         }
         else if (this.toppings === "sausage"){
             Total =price + 300;
             if(this.crust === "GlutenFree"){
                Total = Total + 500;
            }
            else if(this.crust === "stuffed"){
                Total = Total + 400;
            }
            else if(this.crust === "thin"){
                Total = Total + 300;
            }
         }
         Total = Total * this.number;
       
    }
        else if(this.size ==="small"){
            price=800
            if (this.toppings === "Bacon"){
                Total = price + 200;
                if(this.crust === "GlutenFree"){
                    Total = Total + 250;
                }
                else if(this.crust === "stuffed"){
                    Total = Total + 200;
                }
                else if(this.crust === "thin"){
                    Total = Total + 150;
                }
            }
            else if(this.toppings === "pineapple"){
                Total = price + 100;
                if(this.crust === "GlutenFree"){
                    Total = Total + 250;
                }
                else if(this.crust === "stuffed"){
                    Total = Total + 200;
                }
                else if(this.crust === "thin"){
                    Total = Total + 150;
                }
            }
            else if (this.toppings === "sausage"){
                Total =price + 150;
                if(this.crust === "GlutenFree"){
                    Total = Total + 250;
                }
                else if(this.crust === "stuffed"){
                    Total = Total + 200;
                }
                else if(this.crust === "thin"){
                    Total = Total + 150;
                }
            
          }
            Total = Total * this.number;
        }
        else 
        alert("Enter your sizes ")
        var delivery =prompt("How  would you like to get your pizza. Write D for  Home delivery and C for personal collection?")
        if(delivery === "D"){
            alert("Home delivery costs an extra KES. 450 charge to your cost of pizza!")
            Total = Total + 450;
             var location =prompt("Where would you like to get your pizza?")
             $("#location").text("Your pizza will be delivered at "+location)
        }
        else if(delivery === "C"){
            alert("You will receive your pizza at our nearest outlets!");
        }
        else alert('You have not made a choice on how you want to receive your pizza!');

        $("#details").text("Thank you for placing an order with us. Your order adds up to "+Total);
       
    }
     $("#calc").click(function(){
         var type = $("#type").val()
         var size= $("#size").val();
         var toppings = $(".toppings").val();
         var number = $(".number").val();
         var delivery = $(".delivery").val();
         var crust = $(".crust").val();
            var myOrder = new order(size,toppings,number,delivery,type,crust);
          myOrder.price()
     });   
});