export function matchStateToTerm(state, value) {
  return (
    state.Division.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state._id.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

export function sortStates(a, b, value) {
  const aLower = a.Division.toLowerCase()
  const bLower = b.Division.toLowerCase()
  const valueLower = value.toLowerCase()
  const queryPosA = aLower.indexOf(valueLower)
  const queryPosB = bLower.indexOf(valueLower)
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB
  }
  return aLower < bLower ? -1 : 1
}

export function fakeRequest(value, cb) {
  return setTimeout(cb, 500, value ?
    getStates().filter(state => matchStateToTerm(state, value)) :
    getStates()
  )
}

export function getStates() {
  return [
    { _id: 'AL', Division: 'Alabama' },
    { _id: 'AK', Division: 'Alaska' },
    { _id: 'AZ', Division: 'Arizona' },
    { _id: 'AR', Division: 'Arkansas' },
    { _id: 'CA', Division: 'California' },
    { _id: 'CO', Division: 'Colorado' },
    { _id: 'CT', Division: 'Connecticut' },
    { _id: 'DE', Division: 'Delaware' },
    { _id: 'FL', Division: 'Florida' },
    { _id: 'GA', Division: 'Georgia' },
    { _id: 'HI', Division: 'Hawaii' },
    { _id: 'ID', Division: 'Idaho' },
    { _id: 'IL', Division: 'Illinois' },
    { _id: 'IN', Division: 'Indiana' },
    { _id: 'IA', Division: 'Iowa' },
    { _id: 'KS', Division: 'Kansas' },
    { _id: 'KY', Division: 'Kentucky' },
    { _id: 'LA', Division: 'Louisiana' },
    { _id: 'ME', Division: 'Maine' },
    { _id: 'MD', Division: 'Maryland' },
    { _id: 'MA', Division: 'Massachusetts' },
    { _id: 'MI', Division: 'Michigan' },
    { _id: 'MN', Division: 'Minnesota' },
    { _id: 'MS', Division: 'Mississippi' },
    { _id: 'MO', Division: 'Missouri' },
    { _id: 'MT', Division: 'Montana' },
    { _id: 'NE', Division: 'Nebraska' },
    { _id: 'NV', Division: 'Nevada' },
    { _id: 'NH', Division: 'New Hampshire' },
    { _id: 'NJ', Division: 'New Jersey' },
    { _id: 'NM', Division: 'New Mexico' },
    { _id: 'NY', Division: 'New York' },
    { _id: 'NC', Division: 'North Carolina' },
    { _id: 'ND', Division: 'North Dakota' },
    { _id: 'OH', Division: 'Ohio' },
    { _id: 'OK', Division: 'Oklahoma' },
    { _id: 'OR', Division: 'Oregon' },
    { _id: 'PA', Division: 'Pennsylvania' },
    { _id: 'RI', Division: 'Rhode Island' },
    { _id: 'SC', Division: 'South Carolina' },
    { _id: 'SD', Division: 'South Dakota' },
    { _id: 'TN', Division: 'Tennessee' },
    { _id: 'TX', Division: 'Texas' },
    { _id: 'UT', Division: 'Utah' },
    { _id: 'VT', Division: 'Vermont' },
    { _id: 'VA', Division: 'Virginia' },
    { _id: 'WA', Division: 'Washington' },
    { _id: 'WV', Division: 'West Virginia' },
    { _id: 'WI', Division: 'Wisconsin' },
    { _id: 'WY', Division: 'Wyoming' }
  ]
}