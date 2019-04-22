const AsanasList = ({ asanas }) => {
  return (
    <div>
      <h2>Lista de asanas { asanas.length }</h2>
      <ul>
        { asanas.map( asana => <li>{ asana.name }</li>) }
      </ul>
    </div>
  )
}

export default AsanasList