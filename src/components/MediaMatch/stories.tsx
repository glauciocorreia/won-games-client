import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
)

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
)

// Param para exibir como mobile o viewport quando selecionados
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}
