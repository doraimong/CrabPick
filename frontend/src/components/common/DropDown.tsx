import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import './DropDown.css'

const options = [
  {
    key: 'user',
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Your Stars' },
  { key: 'explore', text: 'Explore' },
  { key: 'integrations', text: 'Integrations' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
]

const DropdownTrigger = () => (
  <Dropdown options={options} />
)

export default DropdownTrigger