import { Button } from './button'
import { useNavigate } from 'react-router-dom'

export function BackButton({ color = ""}) {
  const navigate = useNavigate();
  return (
    <Button color={color} onClick={() => navigate(-1)} > Back </Button>
  )
}
