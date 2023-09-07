
import { useParams, useSearchParams } from 'react-router-dom'

const TeamsDetails = () => {
  const { teamId } = useParams();
  
  const[searchParams,setSearchParams]=useSearchParams()
  return (
    <div>
      TeamsDetails Page For {teamId}
    </div>
  )
}

export default TeamsDetails
