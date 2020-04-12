import React, { useState } from 'react'
import { connect } from 'react-redux'

// import { } from 'services/'
import { flashError, flashSuccess } from 'components/global-flash'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  actions: {
    
  },
})

function Team(props) {
  const { actions } = props
  const [hasFetchedData, setHasFetchedData] = useState(false)
  
  if (!hasFetchedData) {
    setHasFetchedData(true)
    Promise.all([
      
    ]).catch(flashError)
  }
  
  return (
    <div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)