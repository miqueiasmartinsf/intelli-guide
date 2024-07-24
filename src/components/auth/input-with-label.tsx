/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { Input } from '../aceternity-UI/input'
import { Label } from '../aceternity-UI/label'
import { LabelInputContainer } from './label-input-container'

type InputWithLabelProps = {
  id: string
  label: string
  placeholder?: string
  type?: string
  className?: string
  register?: any
  error?: string
  defaultValue?: string
}

export const InputWithLabel = ({
  id,
  label,
  placeholder,
  type = 'text',
  className,
  register,
  error,
  defaultValue,
}: InputWithLabelProps) => {
  return (
    <LabelInputContainer className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        defaultValue={defaultValue}
        id={id}
        placeholder={placeholder}
        type={type}
        {...register(id)}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </LabelInputContainer>
  )
}
