interface Props {
  label: string
  color?: string
}

const GameBadge = ({ label, color = 'bg-gray-200' }: Props) => {
  return (
    <span className={`${color} inline-block px-2 py-1 rounded-full text-sm font-semibold text-white`}>
      {label}
    </span>
  )
}

export default GameBadge
