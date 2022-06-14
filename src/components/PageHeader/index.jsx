import React, { forwardRef } from 'react'
import { PageHeader } from 'antd'

const Component = forwardRef((props, ref) => {
  const { headerRef } = ref
  return (
    <div ref={headerRef}>
      <PageHeader {...props} />
    </div>
  )
})

export default Component