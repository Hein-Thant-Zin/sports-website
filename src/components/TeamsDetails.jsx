import { useParams } from 'react-router-dom'

const TeamsDetails = () => {
    const {teamId } = useParams();
  return (
    <div>
      TeamsDetails Page For {teamId}
    </div>
  )
}

export default TeamsDetails
