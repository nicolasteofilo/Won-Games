import '../../../.jest/match-media-mock'
import { screen, fireEvent } from '@testing-library/react'
import { Gallery } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

import galleryItem from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={galleryItem.slice(0, 2)} />)

    expect(
      screen.getByRole('button', {
        name: /Thumb - Gallery Image 1/i
      })
    ).toHaveAttribute('src', galleryItem[0].src)
    expect(
      screen.getByRole('button', {
        name: /Thumb - Gallery Image 2/i
      })
    ).toHaveAttribute('src', galleryItem[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={galleryItem.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({
      opacity: 0
    })

    fireEvent.click(
      screen.getByRole('button', {
        name: /Thumb - Gallery Image 1/i
      })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({
      opacity: 1
    })
  })
})
