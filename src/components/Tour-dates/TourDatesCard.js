import * as React from 'react';
import './TourDatesCard.css'



function TourList() {
  const data = [
      {
          "Date": "2 oktober 2023",
          "City": "Uppsala",
          "TicketLink": "https://billetto.se/e/kris-uppsala-tickets-802985"
      },
      {
        "Date": "3 oktober 2023",
        "City": "Visby",
        "TicketLink": " https://billetto.se/e/kris-visby-tickets-802986"
    },
    {
        "Date": "4 oktober 2023",
        "City": "Kalmar",
        "TicketLink": "https://billetto.se/e/kris-kalmar-tickets-802990"
    },
    {
        "Date": "5 oktober 2023",
        "City": "Växjö",
        "TicketLink": "https://billetto.se/e/kris-vaxjo-tickets-802993"
    },
    {
        "Date": "6 oktober 2023",
        "City": "Jönköping",
        "TicketLink": "https://billetto.se/e/kris-jonkoping-tickets-802994"
    },
    {
        "Date": "SLUTSÅLT 9 oktober 2023",
        "City": "Stockholm",
        "TicketLink": "https://billetto.se/e/kris-stockholm-tickets-802997"
    },
    {
        "Date": "10 oktober 2023",
        "City": "Karlstad",
        "TicketLink": "https://billetto.se/e/kris-karlstad-tickets-802999"
    },
    {
        "Date": "11 oktober 2023",
        "City": "Borlänge",
        "TicketLink": "https://billetto.se/e/kris-borlange-tickets-803000"
    },
    {
        "Date": "12 oktober 2023",
        "City": "Norrköping",
        "TicketLink": "https://billetto.se/e/kris-norrkoping-tickets-803001"
    },
    {
        "Date": "13 oktober 2023",
        "City": "Västerås",
        "TicketLink": "https://billetto.se/e/kris-vasteras-tickets-803003"
    },
    {
        "Date": "17 oktober 2023",
        "City": "Östersund",
        "TicketLink": "https://billetto.se/e/kris-ostersund-tickets-803004"
    },
    {
        "Date": "18 oktober 2023",
        "City": "Umeå",
        "TicketLink": "https://billetto.se/e/kris-umea-tickets-803006"
    },
    {
        "Date": "19 oktober 2023",
        "City": "Sundsvall",
        "TicketLink": "https://billetto.se/e/kris-sundsvall-tickets-803007"
    },
    {
        "Date": "EXTRAFÖRESTÄLLNING 20 oktober 2023",
        "City": "Stockholm",
        "TicketLink": "https://billetto.se/e/kris-stockholm-extraforestallning-biljetter-882425"
    },
    {
        "Date": "23 oktober 2023",
        "City": "Linköping",
        "TicketLink": "https://billetto.se/e/kris-linkoping-tickets-803008"
    },
    {
        "Date": "25 oktober 2023",
        "City": "Malmö",
        "TicketLink": "https://billetto.se/e/kris-malmo-biljetter-817516"
    },
    {
        "Date": "26 oktober 2023",
        "City": "Göteborg",
        "TicketLink": "https://billetto.se/e/kris-goteborg-tickets-803009"
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