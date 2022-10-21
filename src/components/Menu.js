import React from "react"
import '../App.css';

import food1 from '../images/food1.jpg';
import food2 from '../images/food2.png';
import food3 from '../images/food3.jpg';
import food4 from '../images/food4.jpg';
import question from '../images/question.png';

class Menu extends React.Component {
    /*
    // Code for the food dictionary at the bottom of the menu
    document.getElementById('definitionSubmit').addEventListener("click", function(event) {
      event.preventDefault();
      const value = document.getElementById("toLookUp").value;
      let results = ""
      if (value === "")
        return;
      if (value.includes(" ")) {
        results += "<p>Sorry, only one word items are supported by the dictionary</p>"
        document.getElementById("definition").innerHTML = results; //This may have an issue being innerHTML
        return;
      }
      console.log(value);
      
      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + value;
      fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json);
          
          results += "<p>";
          results += json[0].meanings[0].definitions[0].definition;
          results += "</p>";
          
          document.getElementById("definition").innerHTML = results;
        });
    });
    */
    
    render() {
        return (
            <div className='page'>
                <div className='left-first row'>
                    <div className='row-image'>
                        <img src={food1} />
                    </div>
                    <div className='row-text left-aligned'>
                        <h1 className='arial-black'>Tacos</h1>
                        <p className='courier-new'>Chorizo     $1.85</p>
                        <hr className='flex-right' />
                        <p className='courier-new'>Cabeza      $1.85</p>
                        <hr className='flex-right' />
                        <p className='courier-new'>Al Pastor   $1.99</p>
                        <hr className='flex-right' />
                        <p className='courier-new'>Suadero     $1.99</p>
                        <hr className='flex-right' />
                        <p className='courier-new'>Lengua      $2.79</p>
                        <hr className='flex-right' />
                    </div>
                </div>
                <div className='reverse row'>
                    <div className='row-image'>
                        <img src={food2} />
                    </div>
                    <div className='row-text left-aligned'>
                        <h1 className='arial-black'>Main Courses</h1>
                        <p className='courier-new'>Quesadilla  $7.59</p>
                        <hr className='flex-right' />
                        <p className='courier-new'>Burrito     $9.29</p>
                        <hr className='flex-right' />
                        <p className='courier-new'>Gringas     $2.85</p>
                        <hr className='flex-right' />
                        <p className='courier-new'>Menudo      $9.49</p>
                        <hr className='flex-right' />
                    </div>
                </div>
                <div className='left-first row'>
                    <div className='row-image'>
                        <img src={food3} />
                    </div>
                    <div className='row-text left-aligned'>
                        <h1 className='arial-black'>Drinks</h1>
                        <p className='courier-new'>Horchata    $3.50</p>
                        <hr className='flex-right' />
                        <p className='courier-new'>Jarritos    $2.25</p>
                        <hr className='flex-right' />
                        <p className='courier-new'>Coca Cola   $2.50</p>
                        <hr className='flex-right' />
                        <p className='courier-new'>Soda        $2.50</p>
                        <hr className='flex-right' />
                    </div>
                </div>
                <div className='row reverse'>
                    <div className='row-image'>
                        <img src={food4} />
                    </div>
                    <div className='row-text left-aligned'>
                        <h1 className='arial-black'>Desserts</h1>
                        <p className='courier-new'>Tres Leches $4.79</p>
                        <hr className='flex-right' />
                        <p className='courier-new'>Flan        $2.99</p>
                        <hr className='flex-right' />
                        <p className='courier-new'>Sopaipillas $1.99</p>
                        <hr className='flex-right' />
                    </div>
                </div>
                {/*<div className='left-first row'>
                    <div className='row-image'>
                        <div className="question-image">
                            <img src={question} />
                        </div>
                    </div>
                    <div className='row-text left-aligned'>
                        <form>
                            <h1 className='arial-black'>What is that?</h1>
                            <p className='courier-new'>Type in a menu item to see what it is: </p>
                            <input className='courier-new' placeholder="Menu item here" id="toLookUp" /><br/>
                            <input className='submit-button-style courier-new' style={{marginTop: "10px"}} id="definitionSubmit" type="submit" value="Submit"></input>
                            <div  className='courier-new' id="definition"></div>
                            <hr className='flex-right' />
                        </form>
                    </div>
                </div>*/}
            </div>
        );
    }
}

export default Menu;
