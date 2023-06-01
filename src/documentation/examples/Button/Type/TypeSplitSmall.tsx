import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Button' or its c... Remove this comment to see the full error message
import Button from '@bufferapp/ui/Button'

/** Split Button (small) */
export default function ExampleSplitButtonSmall() {
  return (
    <Button
      onSelectClick={() => true}
      onClick={() => true}
      size="small"
      type="primary"
      isSplit
      items={[
        { id: '1', title: 'Reply + Pending' },
        { id: '2', title: 'Reply + Close + Assign To Me' },
      ]}
      label="Click Me"
    />
  )
}
