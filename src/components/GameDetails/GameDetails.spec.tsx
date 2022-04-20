import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { GameDetails, GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'GearBox Software',
  platforms: ['linux', 'mac', 'windows'],
  releaseDate: '2019-11-16T23:00:00',
  rating: 'BR0',
  genres: ['Action', 'Adventure', 'Indie']
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Release Date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Platforms/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Publishers/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Genres/i })).toBeInTheDocument()
  })

  it('should render the platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByTitle('linux')).toBeInTheDocument()
    expect(screen.getByTitle('mac')).toBeInTheDocument()
    expect(screen.getByTitle('windows')).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/Free/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR14', () => {
    renderWithTheme(<GameDetails {...props} rating="BR14" />)

    expect(screen.getByText(/14\+/i)).toBeInTheDocument()
  })

  it('should render the formatted date', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/Nov 16, 2019/i)).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Action / Adventure / Indie')).toBeInTheDocument()
  })
})
