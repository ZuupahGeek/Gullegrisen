import * as React from 'react';
import './TourDatesCard.css'



function TourList() {
  const data = [
      {
          "Date": "18 april 2024",
          "City": "Malmö",
          "TicketLink": "https://billetto.se/e/gullegrisen-malmo-biljetter-903759"
      },
      {
        "Date": "24 april 2024",
        "City": "Växjö",
        "TicketLink": "https://billetto.se/e/gullegrisen-vaxjo-biljetter-903761"
    },
    {
        "Date": "25 april 2024",
        "City": "Göteborg",
        "TicketLink": "https://billetto.se/e/gullegrisen-goteborg-biljetter-903760"
    },
    {
        "Date": "2 maj 2024",
        "City": "Stockholm",
        "TicketLink": "https://billetto.se/e/gullegrisen-stockholm-biljetter-903762"
    },
    {
        "Date": "3 maj 2024",
        "City": "Uppsala",
        "TicketLink": "https://billetto.se/e/gullegrisen-uppsala-biljetter-903893"
    },
    
    



  ]
  const listItems = data.map(
      (element, i) => {
          return (
            <div className='card' key={i}>
                <div className='card-info'>
                    <h3>{element.Date}</h3>
                    <p>{element.City}</p>
                    <div className='card-link'><a href={element.TicketLink}>Köp biljetter här!</a></div>
                </div>
            </div>
              
            ) 
      }
  )
  return (
      <div>
          {listItems}
      </div>
  )
}

export default TourList;