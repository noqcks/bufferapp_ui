import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon/Icons/Locke... Remove this comment to see the full error message
import LockIcon from '@bufferapp/ui/Icon/Icons/Locked'

/** Size: small icon */
export default function SmallIcon() {
  return <LockIcon size="small" />
}
