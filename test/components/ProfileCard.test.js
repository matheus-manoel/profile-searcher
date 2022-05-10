import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import ProfileCard from '@/components/ProfileCard.vue'

const profile = {
  name: 'John Doe',
  avatar: 'xxxx',
  email: 'john@gmail.com',
  title: 'Software Engineer',
  address: '123 Main St, New York, NY 10001',
  city: 'New York',
}
const matchingQuery = 'oh'

describe('ProfileCard', () => {
  it('renders profile attributes correctly without highlights', () => {
    render(ProfileCard, {
      props: {
        profile,
      },
    })

    expect(screen.getByTestId('profile-name')).toHaveTextContent(profile.name)
    expect(screen.getByTestId('profile-email')).toHaveTextContent(profile.email)
    expect(screen.getByTestId('profile-title')).toHaveTextContent(profile.title)
    expect(screen.getByTestId('profile-address-city')).toHaveTextContent(
      `${profile.address}, ${profile.city}`
    )

    expect(screen.getByTestId('profile-card')).not.toContainHTML(
      '<span class="bg-yellow-200">'
    )
  })

  it('renders profile attributes correctly with highlights', () => {
    render(ProfileCard, {
      props: {
        profile,
        searchQuery: matchingQuery,
      },
    })

    expect(screen.getByTestId('profile-name')).toHaveTextContent(profile.name)
    expect(screen.getByTestId('profile-name')).toContainHTML(
      '<span class="bg-yellow-200">oh</span>'
    )
    expect(screen.getByTestId('profile-email')).toHaveTextContent(profile.email)
    expect(screen.getByTestId('profile-email')).toContainHTML(
      '<span class="bg-yellow-200">oh</span>'
    )
    expect(screen.getByTestId('profile-title')).toHaveTextContent(profile.title)
    expect(screen.getByTestId('profile-title')).not.toContainHTML(
      '<span class="bg-yellow-200">'
    )
    expect(screen.getByTestId('profile-address-city')).toHaveTextContent(
      `${profile.address}, ${profile.city}`
    )
    expect(screen.getByTestId('profile-address-city')).not.toContainHTML(
      '<span class="bg-yellow-200">'
    )
  })
})
