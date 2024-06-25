import { Button } from './button'
import { useNavigate } from 'react-router-dom'

export function BackButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)} > Back </Button>
  )
}
