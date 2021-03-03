import Container from './container'
import cn from 'classnames'

export default function Alert({ dark }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': dark,
        'bg-accent-1 border-accent-2': !dark,
      })}
    >
      {false && (
        <Container>
          <div className="py-2 text-center text-sm">
            {/* A placeholder for an alert */}
          </div>
        </Container>
      )}
    </div>
  )
}
