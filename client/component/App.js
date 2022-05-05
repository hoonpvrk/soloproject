import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
    }

   render() {
    const clickHandler = (e) => {
        const clothesSelector = document.querySelector("#food").value
        console.log(clothesSelector)

        fetch ('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                clothesSelector: clothesSelector,
            }),
    })
    .then(data => {
        return data.json()
    })
    .then(res=> {
        console.log(res)
    })
    .catch((err)=> {
        console.log('error')
    })
}
    return (
        <div class = "topnav"> 
        <h1> What should I eat?</h1>
        <h2>Please first select what you do NOT want to eat</h2>
        <select name="food" id="food">
            <option value="ChooseOne">Please make a selection</option>
            <option value="None">None</option>
            <option value="American">American</option>
            <option value="Carribean">Carribean</option>
            <option value="Chinese">Chinese</option>
            <option value="Ethiopian">Ethiopian</option>
            <option value="Filipino">Filipino</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="MiddleEastern">Middle Eastern</option>
            <option value="Peruvian">Peruvian</option>    
            <option value="Thai">Thai</option>
        </select>
        <select name="food1" id="food1">
            <option value="ChooseOne">Please make a selection</option>
            <option value="None">None</option>
            <option value="American">American</option>
            <option value="Carribean">Carribean</option>
            <option value="Chinese">Chinese</option>
            <option value="Ethiopian">Ethiopian</option>
            <option value="Filipino">Filipino</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="MiddleEastern">Middle Eastern</option>
            <option value="Peruvian">Peruvian</option>    
            <option value="Thai">Thai</option>
        </select>
        <select name="food2" id="food2">
            <option value="ChooseOne">Please make a selection</option>
            <option value="None">None</option>
            <option value="American">American</option>
            <option value="Carribean">Carribean</option>
            <option value="Chinese">Chinese</option>
            <option value="Ethiopian">Ethiopian</option>
            <option value="Filipino">Filipino</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="MiddleEastern">Middle Eastern</option>
            <option value="Peruvian">Peruvian</option>    
            <option value="Thai">Thai</option>
        </select>
        <button id = "enter" onClick= {clickHandler}> Submit </button>
        <div class = "row">
            <div class="column">   
            <img src= 'https://idc.edu/wp-content/uploads/2018/07/Traditional-American-Food-You-Must-Try-While-Studying-in-Washington-DC.jpg' width="256" height="256"></img>
            <a href= 'https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&facet=open_now%3Atrue&facet=cuisine%3AAmerican&sortSetId=umamiv3&countOmittingTimes=true&includeOffers=true&sponsoredSize=3'> American</a>
            </div>
            <div class="column">
            <img src= 'https://www.beaches.com/blog/content/images/2020/03/Jamaican-Chicken-Rice-Peas.jpg' width="256" height="256"></img>
            <a href= 'https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&facet=open_now%3Atrue&facet=cuisine_unfiltered%3ACaribbean&sortSetId=umamiv3&countOmittingTimes=true&includeOffers=true&sponsoredSize=3'> Carribean</a>
            </div>
            <div class="column">
            <img src= 'https://www.thedailymeal.com/sites/default/files/2020/10/06/0_hero.jpg' width="256" height="256"></img>
            <a href= 'https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&facet=open_now%3Atrue&facet=cuisine_unfiltered%3AChinese&sortSetId=umamiv3&countOmittingTimes=true&includeOffers=true&sponsoredSize=3'> Chinese</a>
            </div>
            <div class="column">
            <img src= 'https://theplanetd.com/images/Best-Ethiopian-Food.jpg' width="256" height="256"></img>
            <a href= 'https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&facet=open_now%3Atrue&facet=cuisine_unfiltered%3AEthiopian&sortSetId=umamiv3&countOmittingTimes=true&includeOffers=true&sponsoredSize=3'> Ethipoian</a>
            </div>
            <div class="column">
            <img src= 'https://img.theculturetrip.com/wp-content/uploads/2017/08/shutterstock_516831739-by-bonchan-1.jpg' width="256" height="256"></img>
            <a href= 'https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&facet=open_now%3Atrue&facet=cuisine_unfiltered%3AFilipino&sortSetId=umamiv3&countOmittingTimes=true&includeOffers=true&sponsoredSize=3'> Filipino</a>
            </div>
            <div class="column">
            <img src =' https://www.thespruceeats.com/thmb/I_M3fmEbCeNceaPrOP5_xNZ2xko=/3160x2107/filters:fill(auto,1)/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg' width="256" height="256"></img>
            <a href= 'https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&facet=open_now%3Atrue&facet=cuisine_unfiltered%3AIndian&sortSetId=umamiv3&countOmittingTimes=true&includeOffers=true&sponsoredSize=3'> Indian</a>
            </div>
            <div class="column">
            <img src =' https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' width="256" height="256"></img>
            <a href= 'https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&facet=open_now%3Atrue&facet=cuisine_unfiltered%3AItalian&sortSetId=umamiv3&countOmittingTimes=true&includeOffers=true&sponsoredSize=3'> Italian</a>
            </div>
            <div class="column">
            <img src =' https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg' width="256" height="256"></img>
            <a href= 'https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&facet=open_now%3Atrue&facet=cuisine_unfiltered%3AJapanese&sortSetId=umamiv3&countOmittingTimes=true&includeOffers=true&sponsoredSize=3'> Japanese</a>
            </div>
            <div class="column">
            <img src =' https://www.thespruceeats.com/thmb/xGusGYYmKSt0reKSB31KJwXkwtE=/3060x2040/filters:no_upscale():max_bytes(150000):strip_icc()/classic-korean-bibimbap-recipe-2118765-step-011-acab906539594dc9a668c7fbb753c43d.jpg' width="256" height="256"></img>
            <a href= 'https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&facet=open_now%3Atrue&facet=cuisine_unfiltered%3AKorean&sortSetId=umamiv3&countOmittingTimes=true&includeOffers=true&sponsoredSize=3'> Korean</a>
            </div>
            <div class="column">
            <img src =' https://img.grouponcdn.com/deal/6JrEgS8MhaLbJhM4NGNB7xT4Wvi/6J-2048x1365/v1/c870x524.jpg' width="256" height="256"></img>
            <a href= 'https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&facet=open_now%3Atrue&facet=cuisine_unfiltered%3AMediterranean&sortSetId=umamiv3&countOmittingTimes=true&includeOffers=true&sponsoredSize=3'> Mediterranean</a>
            </div>
            <div class="column">
            <img src =' https://wildwoodsnj.com/wp-content/uploads/2019/05/Capture.jpg' width="256" height="256"></img>
            <a href= 'https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&facet=open_now%3Atrue&facet=cuisine_unfiltered%3AMexican&sortSetId=umamiv3&countOmittingTimes=true&includeOffers=true&sponsoredSize=3'> Mexican</a>
            </div>
            <div class="column">
            <img src =' https://www.olivetreemenu.com/wp-content/uploads/2020/12/Middle-Eastern-Cuisine-Renton-WA.jpg' width="256" height="256"></img>
            <a href= 'https://www.doordash.com/cuisine/middle-eastern-near-me/'> Middle Eastern</a>
            </div>
            <div class="column">
            <img src =' https://www.seriouseats.com/thmb/tnvrb8NKySWM55535cOA5g_7ZAw=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__03__20190321-lomo-saltado-vicky-wasik-28-68ac118a03324091afed4205428ddf4e.jpg' width="256" height="256"></img>
            <a href= 'https://www.doordash.com/search/store/peruvian/'> Peruvian</a>
            </div>
            <div class="column">
            <img src =' https://www.feastingathome.com/wp-content/uploads/2016/04/easy-authentic-pad-thai-recipe-100.jpg' width="256" height="256"></img>
            <a href= 'https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&facet=open_now%3Atrue&facet=cuisine_unfiltered%3AThai&sortSetId=umamiv3&countOmittingTimes=true&includeOffers=true&sponsoredSize=3'> Thai</a>
            </div>
        </div>
        </div>
    )
}
}

// document.getElementById('enter').onClick= function() {
//     console.log('yoyo')
// }


export default App;
