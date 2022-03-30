import { Link, useLocation } from 'react-router-dom'
import styles from '../Stations/Stations.module.css'

const StationsList = (props) => {
  let location = useLocation()
  return (
    <>
      <h1  className={styles.station}>Stations</h1>
      {location.state.line.Stations.map(stationList => {
        return (
          <>
            <Link 
              to={`/station-details/${stationList.Code}`}
              key={stationList.Code}
              state={{stationList}}
            >
              <h3><strong>{stationList.Name}</strong></h3>
            </Link>
          </>
        )
      }
      )}
      
      
    </>
)
}

export default StationsList