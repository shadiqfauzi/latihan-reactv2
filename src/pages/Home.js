import React from 'react'
import JumbotronCustom from '../components/JumbotronCustom'
import CardCustom from '../components/CardCustom'

const data = [
    {
      id: 1,
      nama: 'lian',
      usia: 24,
      pekerjaan: 'coder',
      image: 'https://www.whittierfirstday.org/wp-content/uploads/default-user-image-e1501670968910.png',
      color: 'primary'
    },
    {
      id: 2,
      nama: 'andi',
      usia: 43,
      pekerjaan: 'guru',
      image: 'https://www.whittierfirstday.org/wp-content/uploads/default-user-image-e1501670968910.png',
      color: 'warning'
    },
    {
      id: 3,
      nama: 'susilo',
      usia: 53,
      pekerjaan: 'PNS',
      image: 'https://www.whittierfirstday.org/wp-content/uploads/default-user-image-e1501670968910.png',
      color: 'danger'
    },
  ]
  
  const cardRender = () => {
    return data.map( e => {
      return (
        <div key={e.id}>
        <CardCustom 
          nama={e.nama}
          usia={e.usia}
          pekerjaan={e.pekerjaan}
          image={e.image}
          color={e.color}
        />
      </div>
      )
    })
  }

const Home = () => {
    return(
        <div>
            <JumbotronCustom />
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            {cardRender()}
            </div>
        </div>
    )
}

export default Home